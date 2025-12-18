---
search: true
---

# Extend Components

Learn how to create custom components and extend existing Dynamic Framework components to adapt them to your specific needs.

## Fundamental Concepts

### Composition vs Inheritance

Dynamic Framework favors composition over inheritance:

```jsx
// Avoid: Direct inheritance (not applicable in functional React)
// class MyButton extends DButton { ... }

// Prefer: Composition
const MyButton = ({ text, ...props }) => {
  return (
    <DButton
      {...props}
      text={text}
      iconStart="ArrowRight"
      className="my-custom-button"
    />
  );
};
```

## Extending Basic Components

### Wrapper Components

Create wrapper components that add functionality:

```jsx
// src/components/extended/PrimaryButton.jsx
import React from 'react';
import { DButton } from '@dynamic-framework/ui-react';
import { trackEvent } from '@/utils/analytics';

const PrimaryButton = ({
  text,
  onClick,
  trackingLabel,
  ...props
}) => {
  const handleClick = () => {
    // Add analytics
    if (trackingLabel) {
      trackEvent('button_click', {
        label: trackingLabel,
        component: 'PrimaryButton'
      });
    }

    // Call original onClick
    onClick?.();
  };

  return (
    <DButton
      text={text}
      color="primary"
      onClick={handleClick}
      className="primary-button-extended"
      {...props}
    />
  );
};

export default PrimaryButton;
```

### Higher-Order Components (HOCs)

Create HOCs to add cross-cutting functionality:

```jsx
// src/hocs/withLoading.jsx
import React, { useState } from 'react';
import { DProgress } from '@dynamic-framework/ui-react';

const withLoading = (WrappedComponent) => {
  return function WithLoadingComponent(props) {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    if (isLoading) {
      return (
        <div className="loading-container">
          <DProgress indeterminate />
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

// Usage
const EnhancedTransferForm = withLoading(TransferForm);
```

## Compound Components

### Create Modular Components

```jsx
// src/components/extended/AccountCard/index.jsx
import React from 'react';
import { DCard } from '@dynamic-framework/ui-react';
import AccountHeader from './AccountHeader';
import AccountBalance from './AccountBalance';
import AccountActions from './AccountActions';

const AccountCard = ({ account, onAction }) => {
  return (
    <DCard className="account-card-extended">
      <DCard.Header>
        <AccountHeader
          name={account.name}
          number={account.number}
          type={account.type}
        />
      </DCard.Header>
      <DCard.Body>
        <AccountBalance
          balance={account.balance}
          currency={account.currency}
        />
      </DCard.Body>
      <DCard.Footer>
        <AccountActions
          accountId={account.id}
          onAction={onAction}
          availableActions={account.actions}
        />
      </DCard.Footer>
    </DCard>
  );
};

// Expose sub-components for flexibility
AccountCard.Header = AccountHeader;
AccountCard.Balance = AccountBalance;
AccountCard.Actions = AccountActions;

export default AccountCard;
```

### Sub-components

```jsx
// src/components/extended/AccountCard/AccountBalance.jsx
import React from 'react';
import { DCurrencyText, DBadge } from '@dynamic-framework/ui-react';

const AccountBalance = ({ balance, currency }) => {
  return (
    <div className="account-balance">
      <DCurrencyText
        value={balance}
        currencyCode={currency}
        className="balance-amount"
      />
    </div>
  );
};

export default AccountBalance;
```

## Custom Hooks for Components

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

### Component with Render Props

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
        
        // Check cache
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
        
        // Save to cache
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

// Usage
<DataProvider
  loader={accountService.getAccounts}
  params={{ userId: currentUser.id }}
  renderLoading={() => <DProgress indeterminate />}
  renderError={(error) => <DAlert color="danger">{error.message}</DAlert>}
>
  {({ data: accounts }) => (
    <AccountList accounts={accounts} />
  )}
</DataProvider>
```

## Polymorphic Components

### Component that can render as different elements

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

// Usage
<Box as="section" display="flex" flexDirection="column" gap={3}>
  <Box as="header" padding={2}>
    <h1>Title</h1>
  </Box>
  <Box as="main" padding={4}>
    Main content
  </Box>
</Box>
```

## Components with Global State

### Using Context API

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

// Component that uses context
const ThemedButton = ({ text, ...props }) => {
  const { theme, customColors } = useTheme();

  return (
    <DButton
      text={text}
      color="primary"
      style={{
        backgroundColor: customColors.primary || undefined,
        color: theme === 'dark' ? 'white' : undefined
      }}
      {...props}
    />
  );
};
```

## Lazy Components and Code Splitting

### Lazy Loading of Heavy Components

```jsx
// src/components/extended/LazyChart.jsx
import React, { lazy, Suspense } from 'react';
import { DProgress } from '@dynamic-framework/ui-react';

// Lazy load heavy component
const HeavyChart = lazy(() => import('./HeavyChart'));

const LazyChart = ({ data, ...props }) => {
  return (
    <Suspense
      fallback={
        <div className="chart-loading">
          <DProgress indeterminate />
          <p>Loading chart...</p>
        </div>
      }
    >
      <HeavyChart data={data} {...props} />
    </Suspense>
  );
};

export default LazyChart;
```

## Components with Animations

### Using Framer Motion

```jsx
// src/components/extended/AnimatedCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { DCard } from '@dynamic-framework/ui-react';

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
      <DCard {...props}>
        <DCard.Body>
          {children}
        </DCard.Body>
      </DCard>
    </motion.div>
  );
};

export default AnimatedCard;
```

## Testing Extended Components

### Wrapper Component Test

```jsx
// src/components/extended/__tests__/PrimaryButton.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from '../PrimaryButton';
import * as analytics from '@/utils/analytics';

jest.mock('@/utils/analytics');

describe('PrimaryButton', () => {
  it('should render text correctly', () => {
    render(<PrimaryButton text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should track analytics on click', () => {
    const trackEventSpy = jest.spyOn(analytics, 'trackEvent');
    const handleClick = jest.fn();

    render(
      <PrimaryButton
        text="Test Button"
        onClick={handleClick}
        trackingLabel="test-button"
      />
    );

    fireEvent.click(screen.getByText('Test Button'));

    expect(trackEventSpy).toHaveBeenCalledWith('button_click', {
      label: 'test-button',
      component: 'PrimaryButton'
    });
    expect(handleClick).toHaveBeenCalled();
  });

  it('should have primary color', () => {
    const { container } = render(<PrimaryButton text="Button" />);
    const button = container.querySelector('button');
    expect(button).toHaveClass('btn-primary');
  });
});
```

## Best Practices

### 1. Maintain Compatibility
- Preserve original component API
- Add props, don't remove them
- Document changes clearly

### 2. Performance
- Use React.memo for pure components
- Implement shouldComponentUpdate when necessary
- Avoid unnecessary re-renders

### 3. Documentation
- Document all new props
- Provide usage examples
- Maintain a changelog

### 4. Testing
- Unit tests for each extended component
- Integration tests with Dynamic components
- Visual regression tests

## Resources

- [React Patterns](https://reactpatterns.com)
- [Component Composition](https://react.dev/learn/thinking-in-react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Testing Best Practices](https://testing-library.com/docs/react-testing-library/intro)