---
search: true
---

# Experiences and Templates

Dynamic Framework includes a catalog of pre-built React-based experiences to accelerate the development of banking and financial solutions. These templates are customizable and production-ready.

## Experience Catalog

### Retail Banking

Digital experiences for individual customers: onboarding, accounts, payments, and personal loans.

**Available templates:**
- Personal dashboard
- Product detail
- Transfers
- Dispute management

### Business Banking

Solutions for corporate clients: cash management, commercial credit, and merchant services.

**Available templates:**
- Corporate dashboard
- Employee management
- Mass payments authorization
- Business transfers

### Investment

Digital products for wealth management, brokerage, and investment portfolio tracking.

**Available templates:**
- Investment dashboard
- Investment summary
- Account detail
- New term investment

### Marketing

Public sites and landing pages to promote financial products and services.

**Available templates:**
- Hero sections
- Contact forms
- FAQs
- Footer

## Installation

Public experiences can be downloaded using the Modyo CLI:

```bash
# Download an experience
npx @modyo/cli@latest get <template-name> <destination-directory>

# Example: download base template
npx @modyo/cli@latest get dynamic-react-base-template my-widget

# Specify version
npx @modyo/cli@latest get dynamic-react-base-template@v1.0.0 my-widget
```

The CLI downloads templates from the `dynamic-framework` organization on GitHub. You can specify a different organization with `--organization=myOrg`.

## Customization

Experiences are customized through Dynamic Framework's design token system. Refer to the theming documentation to adapt colors, typography, and spacing to your brand.

## More Information

- **Full catalog**: [dynamic.modyo.com/experiences](https://dynamic.modyo.com/experiences)
- **Retail Banking**: [dynamic.modyo.com/experiences/retail](https://dynamic.modyo.com/experiences/retail)
- **Business Banking**: [dynamic.modyo.com/experiences/business](https://dynamic.modyo.com/experiences/business)
- **Investment**: [dynamic.modyo.com/experiences/investment](https://dynamic.modyo.com/experiences/investment)
- **Marketing**: [dynamic.modyo.com/experiences/marketing](https://dynamic.modyo.com/experiences/marketing)