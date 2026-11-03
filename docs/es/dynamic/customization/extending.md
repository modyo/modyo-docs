---
search: true
---

# Extender Componentes

Aprende cómo crear componentes personalizados que envuelven y extienden los componentes de Dynamic Framework.

## Composición sobre Herencia

Dynamic Framework favorece la composición sobre la herencia. En lugar de extender clases, envuelve los componentes para agregar funcionalidad:

```tsx
// ✗ Evitar: herencia
class MyButton extends DButton { }

// ✓ Preferir: composición
import type { ComponentProps } from 'react';
import { DButton } from '@dynamic-framework/ui-react';

type DButtonProps = ComponentProps<typeof DButton>;

function MyButton(props: DButtonProps) {
  return <DButton {...props} />;
}
```

## Componentes Wrapper

Crea componentes wrapper para agregar funcionalidad como analytics, props por defecto o estilos personalizados.

### Wrapper Básico

```tsx
// src/components/PrimaryButton.tsx
import { DButton } from '@dynamic-framework/ui-react';
import type { ComponentPropsWithoutRef, MouseEvent } from 'react';

type DButtonProps = ComponentPropsWithoutRef<typeof DButton>;

interface PrimaryButtonProps extends Omit<DButtonProps, 'color'> {
  trackingLabel?: string;
}

export function PrimaryButton({
  onClick,
  trackingLabel,
  ...props
}: PrimaryButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (trackingLabel) {
      // Tu lógica de analytics
      console.log('Track:', trackingLabel);
    }
    onClick?.(e);
  };

  return (
    <DButton
      {...props}
      color="primary"
      onClick={handleClick}
    />
  );
}
```

### Uso

```tsx
<PrimaryButton
  text="Enviar"
  trackingLabel="submit-form"
  onClick={() => handleSubmit()}
/>
```

## Componentes Compuestos

Crea componentes modulares usando el patrón de componentes compuestos de Dynamic.

### Ejemplo de Tarjeta de Producto

```tsx
// src/components/ProductCard.tsx
import { DCard, DCurrencyText, DButton } from '@dynamic-framework/ui-react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
  onSelect?: (id: string) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  return (
    <DCard>
      <DCard.Header>
        <h5 className="mb-0">{product.name}</h5>
      </DCard.Header>
      <DCard.Body>
        <p className="text-muted">{product.description}</p>
        <DCurrencyText value={product.price} />
      </DCard.Body>
      <DCard.Footer>
        <DButton
          text="Seleccionar"
          color="primary"
          onClick={() => onSelect?.(product.id)}
        />
      </DCard.Footer>
    </DCard>
  );
}
```

### Creando tu Propio Componente Compuesto

```tsx
// src/components/InfoCard/index.tsx
import { DCard } from '@dynamic-framework/ui-react';
import type { ReactNode } from 'react';

interface InfoCardProps {
  children: ReactNode;
  className?: string;
}

interface InfoCardTitleProps {
  children: ReactNode;
}

interface InfoCardContentProps {
  children: ReactNode;
}

function InfoCard({ children, className }: InfoCardProps) {
  return (
    <DCard className={className}>
      {children}
    </DCard>
  );
}

function InfoCardTitle({ children }: InfoCardTitleProps) {
  return (
    <DCard.Header>
      <h5 className="mb-0">{children}</h5>
    </DCard.Header>
  );
}

function InfoCardContent({ children }: InfoCardContentProps) {
  return <DCard.Body>{children}</DCard.Body>;
}

// Adjuntar sub-componentes
InfoCard.Title = InfoCardTitle;
InfoCard.Content = InfoCardContent;

export { InfoCard };
```

### Uso

```tsx
<InfoCard>
  <InfoCard.Title>Resumen de Cuenta</InfoCard.Title>
  <InfoCard.Content>
    <p>Detalles de tu cuenta aquí</p>
  </InfoCard.Content>
</InfoCard>
```

## Hooks Personalizados

Crea hooks para encapsular lógica reutilizable.

### useToggle

```tsx
// src/hooks/useToggle.ts
import { useState, useCallback } from 'react';

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return { value, toggle, setTrue, setFalse };
}
```

### Uso para Mostrar u Ocultar un Dato

```tsx
import { DButton, DCurrencyText } from '@dynamic-framework/ui-react';
import { useToggle } from '@/hooks/useToggle';

function BalanceCard({ balance }: { balance: number }) {
  const visible = useToggle();

  return (
    <div className="d-flex align-items-center gap-2">
      {visible.value ? <DCurrencyText value={balance} /> : <span>••••••</span>}
      <DButton
        text={visible.value ? 'Ocultar saldo' : 'Mostrar saldo'}
        variant="link"
        onClick={visible.toggle}
      />
    </div>
  );
}
```

### Abrir un Modal desde un Hook

`DModal` no se abre con una prop de estado: se registra como portal en `DContextProvider` y se abre con `openPortal`. Ver el patrón completo en [Portales](../development/components.html#portales). Un hook propio puede encapsular la apertura para que los componentes no repitan el nombre del portal ni la forma del payload:

```tsx
// src/hooks/useTransferConfirm.ts
import { useCallback } from 'react';
import { useDPortalContext } from '@dynamic-framework/ui-react';

// El mismo tipo con el que se configuró DContextProvider<Portals>
type Portals = {
  transferConfirm: { amount: string };
};

export function useTransferConfirm() {
  const { openPortal } = useDPortalContext<Portals>();

  return useCallback(
    (amount: string) => openPortal('transferConfirm', { amount }),
    [openPortal],
  );
}
```

```tsx
import { DButton } from '@dynamic-framework/ui-react';
import { useTransferConfirm } from '@/hooks/useTransferConfirm';

function TransferButton() {
  const confirmTransfer = useTransferConfirm();

  return <DButton text="Transferir" onClick={() => confirmTransfer('$100.000')} />;
}
```

## Testing de Componentes

Usa Vitest y React Testing Library para probar tus componentes extendidos.

### Configuración

Si tu proyecto no parte del template de widgets de Modyo, instala las dependencias de testing:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Ejemplo de Test

```tsx
// src/components/__tests__/PrimaryButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PrimaryButton } from '../PrimaryButton';

describe('PrimaryButton', () => {
  it('renderiza con texto', () => {
    render(<PrimaryButton text="Hazme clic" />);
    expect(screen.getByText('Hazme clic')).toBeInTheDocument();
  });

  it('llama onClick cuando se hace clic', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton text="Clic" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Clic'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('registra tracking label cuando se proporciona', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(
      <PrimaryButton text="Rastrear" trackingLabel="test-button" />
    );

    fireEvent.click(screen.getByText('Rastrear'));

    expect(consoleSpy).toHaveBeenCalledWith('Track:', 'test-button');
  });
});
```

## Mejores Prácticas

1. **Preservar la API original** - Tu wrapper debe aceptar todas las props que acepta el componente original
2. **Usar TypeScript** - Extiende los tipos de props del componente para type safety
3. **Mantenerlo simple** - Solo envuelve cuando necesites agregar valor real
4. **Testear tus componentes** - Asegúrate de que los wrappers se comporten correctamente
5. **Documentar props personalizadas** - Deja claro qué agrega tu wrapper

## Recursos

- [Composición en React](https://react.dev/learn/thinking-in-react)
- [Hooks Personalizados](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Documentación de Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro)
