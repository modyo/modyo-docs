---
search: true
---

# Production Checklist

Before deploying your Dynamic Framework application to production, use this checklist to ensure your application meets the standards for performance, security, accessibility, and reliability.

## Performance

### Bundle Optimization

- [ ] **Named imports**: Use explicit imports for better maintainability
  ```tsx
  // Recommended - explicit, better for linting and IDE support
  import { DButton, DCard } from '@dynamic-framework/ui-react';

  // Works but less explicit
  import * as Dynamic from '@dynamic-framework/ui-react';
  ```

- [ ] **Code splitting implemented**: Use React.lazy for route-based splitting
  ```tsx
  const Dashboard = React.lazy(() => import('./views/Dashboard'));
  const Transfers = React.lazy(() => import('./views/Transfers'));
  ```

- [ ] **Bundle size analyzed**: Run bundle analyzer and address large dependencies
  ```bash
  npm run build -- --analyze
  ```

- [ ] **Images optimized**: Use WebP format, appropriate sizes, and lazy loading
  ```tsx
  <img src="image.webp" loading="lazy" alt="Description" />
  ```

### Runtime Performance

- [ ] **React.memo used** for expensive components that receive stable props
- [ ] **useMemo/useCallback** applied where computations or callbacks are costly
- [ ] **Virtualization** implemented for long lists (use react-window or similar)
- [ ] **Debouncing** applied to search inputs and frequent API calls

### Caching Strategy

- [ ] **TanStack Query** configured with appropriate staleTime and gcTime
  ```tsx
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 30 * 60 * 1000, // 30 minutes
      },
    },
  });
  ```

- [ ] **Static assets** have cache headers configured
- [ ] **Service worker** considered for offline capability (if applicable)

## Security

### Authentication & Authorization

- [ ] **Access tokens** stored securely (not in localStorage for sensitive apps)
- [ ] **Token refresh** implemented before expiration
- [ ] **Session timeout** configured appropriately (typically 15 minutes for banking)
- [ ] **Route guards** protect authenticated routes

### Data Protection

- [ ] **HTTPS only**: No mixed content, all resources over TLS
- [ ] **Sensitive data** never logged to console in production
  ```tsx
  if (import.meta.env.DEV) {
    console.log('Debug info:', data);
  }
  ```

- [ ] **Input sanitization**: All user inputs validated and sanitized
- [ ] **XSS prevention**: No dangerouslySetInnerHTML with user content

### API Security

- [ ] **API keys** not exposed in client-side code (use Liquid pattern or backend proxy)
- [ ] **CORS** properly configured on backend
- [ ] **Rate limiting** awareness in error handling
- [ ] **Request/response** interceptors handle auth errors gracefully

### Content Security

- [ ] **CSP headers** configured appropriately
- [ ] **External scripts** minimized and from trusted sources
- [ ] **Subresource integrity** used for CDN resources

## Accessibility (WCAG 2.1 AA)

### Navigation

- [ ] **Keyboard navigation** works for all interactive elements
- [ ] **Focus indicators** visible (don't remove outline without alternative)
- [ ] **Skip links** provided for main content
- [ ] **Focus management** correct after modals/dialogs close

### Content

- [ ] **Alt text** provided for all meaningful images
- [ ] **Form labels** properly associated with inputs
- [ ] **Error messages** descriptive and programmatically associated
- [ ] **Color contrast** meets 4.5:1 for text (use Dynamic's built-in themes)

### Screen Readers

- [ ] **ARIA labels** used where needed (Dynamic components include these)
- [ ] **Live regions** announce dynamic content changes
- [ ] **Heading hierarchy** logical (h1 → h2 → h3)
- [ ] **Page titles** descriptive and unique per route

### Testing

- [ ] **Keyboard-only testing** performed
- [ ] **Screen reader testing** performed (VoiceOver, NVDA)
- [ ] **axe DevTools** or similar automated accessibility testing

## Error Handling

### User-Facing Errors

- [ ] **Error boundaries** wrap major sections
  ```tsx
  <ErrorBoundary fallback={<ErrorFallback />}>
    <Dashboard />
  </ErrorBoundary>
  ```

- [ ] **API errors** display user-friendly messages
- [ ] **Network failures** handled gracefully with retry options
- [ ] **Empty states** designed for no-data scenarios

### Error Tracking

- [ ] **Error monitoring** configured (Sentry, DataDog, etc.)
- [ ] **Source maps** uploaded for production debugging
- [ ] **Error context** captured (user ID, route, app version)

## Testing

### Test Coverage

- [ ] **Unit tests** for utilities and business logic (>80% coverage)
- [ ] **Component tests** for critical UI components
- [ ] **Integration tests** for user flows
- [ ] **E2E tests** for critical paths (login, transfers, etc.)

### Test Environment

- [ ] **Test data** isolated from production
- [ ] **Mock services** configured for offline testing
- [ ] **CI pipeline** runs tests on every PR

## Build & Deploy

### Build Configuration

- [ ] **Environment variables** properly set for production
- [ ] **Source maps** configured (external for error tracking)
- [ ] **Production mode** enabled (React, Vite)
- [ ] **Dead code eliminated** via tree shaking

### Deployment

- [ ] **Staging environment** tested before production
- [ ] **Rollback plan** documented and tested
- [ ] **Health checks** configured
- [ ] **Monitoring alerts** set up

### Modyo-Specific

- [ ] **Widget name** and metadata correctly configured in `.modyo/config.json`
- [ ] **Liquid variables** tested with production values
- [ ] **Asset paths** resolve correctly in Modyo context
- [ ] **Preview tested** in Modyo before publishing

## Monitoring & Analytics

### Application Monitoring

- [ ] **Core Web Vitals** tracked (LCP, INP, CLS)
- [ ] **Error rates** monitored
- [ ] **API response times** tracked
- [ ] **User journey** completion rates measured

### Business Metrics

- [ ] **Analytics events** implemented for key actions
- [ ] **Conversion funnels** tracked
- [ ] **Feature usage** measured for feature flags

## Documentation

- [ ] **README** updated with production setup
- [ ] **Environment variables** documented
- [ ] **API dependencies** documented
- [ ] **Deployment process** documented
- [ ] **Troubleshooting guide** created

## Final Verification

Before going live:

1. [ ] **Lighthouse audit** scores >90 for Performance, Accessibility, Best Practices
2. [ ] **Cross-browser testing** completed (Chrome, Firefox, Safari, Edge)
3. [ ] **Mobile testing** completed on real devices
4. [ ] **Load testing** performed if high traffic expected
5. [ ] **Security audit** completed (penetration testing for financial apps)
6. [ ] **Legal/compliance review** completed (privacy policy, terms)

## Quick Reference Commands

```bash
# Build for production
npm run build

# Analyze bundle
npm run build -- --analyze

# Run all tests
npm test -- --coverage

# Lint and format check
npm run lint && npm run format:check

# Deploy to Modyo staging
npm run modyo:push -- --environment staging

# Deploy to Modyo production
npm run modyo:push -- --environment production
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Vitals](https://web.dev/vitals/)
- [OWASP Security Checklist](https://owasp.org/www-project-web-security-testing-guide/)
- [React Performance](https://react.dev/learn/render-and-commit)
