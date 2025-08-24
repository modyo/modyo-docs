---
search: true
---

# Extender Componentes

Aprende cómo crear componentes personalizados y extender los componentes existentes de Dynamic Framework para adaptarlos a tus necesidades específicas.

## Conceptos Fundamentales

### Composición vs Herencia

Dynamic Framework favorece la composición sobre la herencia:

```jsx
// Evitar: Herencia directa
class MyButton extends DynamicButton {
  // Problemático para mantenimiento
}

// Preferir: Composición
const MyButton = ({ children, ...props }) => {
  return (
    <DynamicButton 
      {...props}
      className="my-custom-button"
    >
      <Icon name="arrow" />
      {children}
    </DynamicButton>
  );
};
```

## Extender Componentes Básicos

### Wrapper Components

Crea componentes wrapper que agregan funcionalidad:

```jsx
// src/components/extended/PrimaryButton.jsx
import React from 'react';
import { Button } from '@dynamic-framework/ui-react';
import { trackEvent } from '@/utils/analytics';

const PrimaryButton = ({ 
  children, 
  onClick,
  trackingLabel,
  size = 'large',
  ...props 
}) => {
  const handleClick = (e) => {
    // Agregar analytics
    if (trackingLabel) {
      trackEvent('button_click', {
        label: trackingLabel,
        component: 'PrimaryButton'
      });
    }
    
    // Llamar onClick original
    onClick?.(e);
  };

  return (
    <Button
      variant="primary"
      size={size}
      onClick={handleClick}
      className="primary-button-extended"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
```

### Higher-Order Components (HOCs)

Crea HOCs para agregar funcionalidad transversal:

```jsx
// src/hocs/withLoading.jsx
import React, { useState } from 'react';
import { Spinner } from '@dynamic-framework/ui-react';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    if (isLoading) {
      return (
        <div className="loading-container">
          <Spinner size="large" />
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
        isLoading={isLoading}
        startLoading={startLoading}
        stopLoading={stopLoading}
      />
    );
  };
};

export default withLoading;

// Uso
const EnhancedTransferForm = withLoading(TransferForm);
```

## Componentes Compuestos

### Crear Componentes Modulares

```jsx
// src/components/extended/AccountCard/index.jsx
import React from 'react';
import { Card } from '@dynamic-framework/ui-react';
import AccountHeader from './AccountHeader';
import AccountBalance from './AccountBalance';
import AccountActions from './AccountActions';

const AccountCard = ({ account, onAction }) => {
  return (
    <Card className="account-card-extended">
      <AccountHeader 
        name={account.name}
        number={account.number}
        type={account.type}
      />
      <AccountBalance 
        balance={account.balance}
        currency={account.currency}
        trend={account.trend}
      />
      <AccountActions 
        accountId={account.id}
        onAction={onAction}
        availableActions={account.actions}
      />
    </Card>
  );
};

// Exponer sub-componentes para flexibilidad
AccountCard.Header = AccountHeader;
AccountCard.Balance = AccountBalance;
AccountCard.Actions = AccountActions;

export default AccountCard;
```

### Sub-componentes

```jsx
// src/components/extended/AccountCard/AccountBalance.jsx
import React from 'react';
import { Typography, TrendIndicator } from '@dynamic-framework/ui-react';
import { formatCurrency } from '@/utils/formatters';

const AccountBalance = ({ balance, currency, trend }) => {
  return (
    <div className="account-balance">
      <Typography variant="h2" className="balance-amount">
        {formatCurrency(balance, currency)}
      </Typography>
      {trend && (
        <TrendIndicator 
          value={trend.value}
          direction={trend.direction}
          period={trend.period}
        />
      )}
    </div>
  );
};

export default AccountBalance;
```

## Hooks Personalizados para Componentes

### useComponentState Hook

```jsx
// src/hooks/useComponentState.js
import { useState, useCallback, useRef } from 'react';

export const useComponentState = (initialState = {}) => {
  const [state, setState] = useState(initialState);
  const previousStateRef = useRef(initialState);

  const updateState = useCallback((updates) => {
    setState(prevState => {
      const newState = { ...prevState, ...updates };
      previousStateRef.current = prevState;
      return newState;
    });
  }, []);

  const resetState = useCallback(() => {
    setState(initialState);
    previousStateRef.current = initialState;
  }, [initialState]);

  const hasChanged = useCallback((key) => {
    return state[key] !== previousStateRef.current[key];
  }, [state]);

  return {
    state,
    updateState,
    resetState,
    hasChanged,
    previousState: previousStateRef.current
  };
};
```

### useFormValidation Hook

```jsx
// src/hooks/useFormValidation.js
import { useState, useCallback } from 'react';

export const useFormValidation = (validationRules) => {
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validate = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return true;

    for (const rule of rules) {
      const error = rule(value);
      if (error) {
        setErrors(prev => ({ ...prev, [name]: error }));
        return false;
      }
    }

    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
    return true;
  }, [validationRules]);

  const validateAll = useCallback((values) => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach(name => {
      const rules = validationRules[name];
      const value = values[name];

      for (const rule of rules) {
        const error = rule(value);
        if (error) {
          newErrors[name] = error;
          isValid = false;
          break;
        }
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationRules]);

  const markTouched = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  }, []);

  const resetValidation = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  return {
    errors,
    touched,
    validate,
    validateAll,
    markTouched,
    resetValidation,
    isValid: Object.keys(errors).length === 0
  };
};
```

## Render Props Pattern

### Componente con Render Props

```jsx
// src/components/extended/DataProvider.jsx
import React, { useState, useEffect } from 'react';

const DataProvider = ({ 
  loader, 
  params, 
  children, 
  renderLoading, 
  renderError,
  cacheKey 
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Verificar caché
        if (cacheKey) {
          const cached = sessionStorage.getItem(cacheKey);
          if (cached) {
            setData(JSON.parse(cached));
            setLoading(false);
            return;
          }
        }
        
        const result = await loader(params);
        setData(result);
        
        // Guardar en caché
        if (cacheKey) {
          sessionStorage.setItem(cacheKey, JSON.stringify(result));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [loader, params, cacheKey]);

  if (loading && renderLoading) {
    return renderLoading();
  }

  if (error && renderError) {
    return renderError(error);
  }

  return children({ data, loading, error, refetch: loadData });
};

// Uso
<DataProvider
  loader={accountService.getAccounts}
  params={{ userId: currentUser.id }}
  renderLoading={() => <Spinner />}
  renderError={(error) => <ErrorMessage error={error} />}
>
  {({ data: accounts }) => (
    <AccountList accounts={accounts} />
  )}
</DataProvider>
```

## Componentes Polimórficos

### Componente que puede renderizar como diferentes elementos

```jsx
// src/components/extended/Box.jsx
import React from 'react';
import clsx from 'clsx';

const Box = ({ 
  as: Component = 'div',
  className,
  padding,
  margin,
  display,
  flexDirection,
  justifyContent,
  alignItems,
  gap,
  children,
  ...props 
}) => {
  const classes = clsx(
    'box',
    className,
    {
      [`p-${padding}`]: padding,
      [`m-${margin}`]: margin,
      [`d-${display}`]: display,
      [`flex-${flexDirection}`]: flexDirection,
      [`justify-${justifyContent}`]: justifyContent,
      [`align-${alignItems}`]: alignItems,
      [`gap-${gap}`]: gap,
    }
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

// Uso
<Box as="section" display="flex" flexDirection="column" gap={3}>
  <Box as="header" padding={2}>
    <h1>Título</h1>
  </Box>
  <Box as="main" padding={4}>
    Contenido principal
  </Box>
</Box>
```

## Componentes con Estado Global

### Usando Context API

```jsx
// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [customColors, setCustomColors] = useState({});

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const updateColors = (colors) => {
    setCustomColors(prev => ({ ...prev, ...colors }));
  };

  const value = {
    theme,
    customColors,
    toggleTheme,
    updateColors
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

// Componente que usa el contexto
const ThemedButton = ({ children, ...props }) => {
  const { theme, customColors } = useTheme();
  
  return (
    <Button
      {...props}
      style={{
        backgroundColor: customColors.primary || 'default',
        color: theme === 'dark' ? 'white' : 'black'
      }}
    >
      {children}
    </Button>
  );
};
```

## Componentes Lazy y Code Splitting

### Lazy Loading de Componentes Pesados

```jsx
// src/components/extended/LazyChart.jsx
import React, { lazy, Suspense } from 'react';
import { Spinner } from '@dynamic-framework/ui-react';

// Lazy load del componente pesado
const HeavyChart = lazy(() => import('./HeavyChart'));

const LazyChart = ({ data, ...props }) => {
  return (
    <Suspense 
      fallback={
        <div className="chart-loading">
          <Spinner />
          <p>Cargando gráfico...</p>
        </div>
      }
    >
      <HeavyChart data={data} {...props} />
    </Suspense>
  );
};

export default LazyChart;
```

## Componentes con Animaciones

### Usando Framer Motion

```jsx
// src/components/extended/AnimatedCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@dynamic-framework/ui-react';

const AnimatedCard = ({ children, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: 'easeOut'
      }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}
    >
      <Card {...props}>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;
```

## Testing de Componentes Extendidos

### Test de Componente Wrapper

```jsx
// src/components/extended/__tests__/PrimaryButton.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from '../PrimaryButton';
import * as analytics from '@/utils/analytics';

jest.mock('@/utils/analytics');

describe('PrimaryButton', () => {
  it('should render children correctly', () => {
    render(<PrimaryButton>Click me</PrimaryButton>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should track analytics on click', () => {
    const trackEventSpy = jest.spyOn(analytics, 'trackEvent');
    const handleClick = jest.fn();
    
    render(
      <PrimaryButton 
        onClick={handleClick}
        trackingLabel="test-button"
      >
        Test Button
      </PrimaryButton>
    );
    
    fireEvent.click(screen.getByText('Test Button'));
    
    expect(trackEventSpy).toHaveBeenCalledWith('button_click', {
      label: 'test-button',
      component: 'PrimaryButton'
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it('should apply default size', () => {
    const { container } = render(<PrimaryButton>Button</PrimaryButton>);
    const button = container.querySelector('button');
    expect(button).toHaveClass('btn-large');
  });
});
```

## Mejores Prácticas

### 1. Mantén la Compatibilidad
- Preserva la API original del componente
- Agrega props, no los elimines
- Documenta cambios claramente

### 2. Performance
- Usa React.memo para componentes puros
- Implementa shouldComponentUpdate cuando sea necesario
- Evita re-renders innecesarios

### 3. Documentación
- Documenta todas las props nuevas
- Proporciona ejemplos de uso
- Mantén un changelog

### 4. Testing
- Test unitarios para cada componente extendido
- Tests de integración con componentes Dynamic
- Tests de regresión visual

## Recursos

- [React Patterns](https://reactpatterns.com)
- [Component Composition](https://react.dev/learn/thinking-in-react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Testing Best Practices](https://testing-library.com/docs/react-testing-library/intro)