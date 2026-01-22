---
search: true
---

# Extend Components

Learn how to create custom components that wrap and extend Dynamic Framework components.

## Composition Over Inheritance

Dynamic Framework favors composition over inheritance. Instead of extending classes, wrap components to add functionality:

```tsx
// ✗ Avoid: inheritance
class MyButton extends DButton { }

// ✓ Prefer: composition
import { DButton } from '@dynamic-framework/ui-react';

function MyButton(props: ButtonProps) {
  return <DButton {...props} />;
}
```

## Wrapper Components

Create wrapper components to add functionality like analytics, default props, or custom styling.

### Basic Wrapper

```tsx
// src/components/PrimaryButton.tsx
import { DButton, type DButtonProps } from '@dynamic-framework/ui-react';

interface PrimaryButtonProps extends Omit<DButtonProps, 'variant'> {
  trackingLabel?: string;
}

export function PrimaryButton({
  onClick,
  trackingLabel,
  ...props
}: PrimaryButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingLabel) {
      // Your analytics logic
      console.log('Track:', trackingLabel);
    }
    onClick?.(e);
  };

  return (
    <DButton
      variant="primary"
      onClick={handleClick}
      {...props}
    />
  );
}
```

### Usage

```tsx
<PrimaryButton
  text="Submit"
  trackingLabel="submit-form"
  onClick={() => handleSubmit()}
/>
```

## Compound Components

Create modular components using Dynamic's compound component pattern.

### Product Card Example

```tsx
// src/components/ProductCard.tsx
import { DCard, DCurrencyText, DButton } from '@dynamic-framework/ui-react';
import type { ReactNode } from 'react';

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
          text="Select"
          variant="primary"
          onClick={() => onSelect?.(product.id)}
        />
      </DCard.Footer>
    </DCard>
  );
}
```

### Creating Your Own Compound Component

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

// Attach sub-components
InfoCard.Title = InfoCardTitle;
InfoCard.Content = InfoCardContent;

export { InfoCard };
```

### Usage

```tsx
<InfoCard>
  <InfoCard.Title>Account Summary</InfoCard.Title>
  <InfoCard.Content>
    <p>Your account details here</p>
  </InfoCard.Content>
</InfoCard>
```

## Custom Hooks

Create hooks to encapsulate reusable logic.

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

### Usage with Modal

```tsx
import { DModal, DButton } from '@dynamic-framework/ui-react';
import { useToggle } from '@/hooks/useToggle';

function MyComponent() {
  const modal = useToggle();

  return (
    <>
      <DButton text="Open Modal" onClick={modal.setTrue} />
      <DModal isOpen={modal.value} onClose={modal.setFalse}>
        <DModal.Header>
          <h5>Title</h5>
        </DModal.Header>
        <DModal.Body>
          <p>Modal content</p>
        </DModal.Body>
      </DModal>
    </>
  );
}
```

## Testing Components

Use Vitest and React Testing Library to test your extended components.

### Setup

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Test Example

```tsx
// src/components/__tests__/PrimaryButton.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PrimaryButton } from '../PrimaryButton';

describe('PrimaryButton', () => {
  it('renders with text', () => {
    render(<PrimaryButton text="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<PrimaryButton text="Click" onClick={handleClick} />);

    fireEvent.click(screen.getByText('Click'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('logs tracking label when provided', () => {
    const consoleSpy = vi.spyOn(console, 'log');
    render(
      <PrimaryButton text="Track me" trackingLabel="test-button" />
    );

    fireEvent.click(screen.getByText('Track me'));

    expect(consoleSpy).toHaveBeenCalledWith('Track:', 'test-button');
  });
});
```

## Best Practices

1. **Preserve the original API** - Your wrapper should accept all props the original component accepts
2. **Use TypeScript** - Extend component prop types for type safety
3. **Keep it simple** - Only wrap when you need to add real value
4. **Test your components** - Ensure wrappers behave correctly
5. **Document custom props** - Make it clear what your wrapper adds

## Resources

- [React Composition](https://react.dev/learn/thinking-in-react)
- [Custom Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Vitest Documentation](https://vitest.dev/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro)
