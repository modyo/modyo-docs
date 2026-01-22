---
search: true
---

# Development with Dynamic Framework

This section covers all technical aspects of development with Dynamic Framework, from components to advanced integrations.

## Section Contents

### [Components](components.html)
Complete catalog of 43 specialized React components:
- Layout and navigation components
- Form and input components
- Feedback and visual components
- Specialized financial components

### [API Integration](api-integration.html)
Connect your application with backend services:
- API client configuration
- Repository pattern
- TanStack Query hooks
- Error handling

## Development Principles

1. **Component-based**: Reusable, isolated components
2. **TypeScript**: Full static typing for safety
3. **Accessibility**: WCAG 2.1 compliant components
4. **Mobile First**: Responsive design from the start

## Development Patterns

### Component Composition

```tsx
import { DCard, DCurrencyText, DButton } from '@dynamic-framework/ui-react';

function AccountBalance({ account }: { account: Account }) {
  return (
    <DCard>
      <DCard.Header>
        <h5 className="card-title mb-0">{account.name}</h5>
      </DCard.Header>
      <DCard.Body>
        <DCurrencyText value={account.balance} />
      </DCard.Body>
    </DCard>
  );
}
```

### State Management

```tsx
// Server state with TanStack Query
const { data: accounts, isLoading, error } = useAccounts();

// UI state with Zustand
const { selectedAccountId, setSelectedAccountId } = useUIStore();
```

### Error Handling

```tsx
// Error boundaries for components
<ErrorBoundary fallback={<ErrorState onRetry={refetch} />}>
  <AccountList />
</ErrorBoundary>

// Data states in queries
if (isLoading) return <LoadingState />;
if (error) return <ErrorState message={error.message} onRetry={refetch} />;
if (!data?.length) return <EmptyState />;
```

## Testing

- **Unit Testing**: Vitest + React Testing Library
- **Visual Testing**: Storybook
- **Integration Testing**: Cypress (optional)

```bash
# Run tests
npm run test

# Watch mode
npm run test:watch
```

## Resources

- [Storybook](https://react.dynamicframework.dev) - Interactive component catalog
- [NPM Package](https://www.npmjs.com/package/@dynamic-framework/ui-react) - Package registry
- [Support](https://support.modyo.com) - Technical support

## Next Steps

- Explore the [component catalog](components.html)
- Learn about [customization](../customization/)
- Implement your first [API integration](api-integration.html)
