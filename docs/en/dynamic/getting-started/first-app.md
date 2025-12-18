---
search: true
---

# Your First Application

This guide will take you step by step to create your first application with Dynamic Framework, using real components and correct patterns.

## Prerequisites

Before starting, make sure you have:

- Node.js v22 or higher
- NPM 10.x or higher
- A code editor (VS Code recommended)

## Step 1: Create the Project

Use Modyo CLI to create a new project:

```bash
# Create project with base template
npx @modyo/cli@latest get dynamic-react-base-template my-first-app

# Navigate to directory
cd my-first-app

# Install dependencies
npm install

# Start development server
npm run start
```

Your application will be available at `http://localhost:8080`.

## Step 2: Your First Component

Create a simple component using `DCard` and `DButton`. These are real Dynamic UI components.

```jsx
// src/components/WelcomeCard.jsx
import { DCard, DButton } from '@dynamic-framework/ui-react';

function WelcomeCard({ userName }) {
  return (
    <DCard>
      <DCard.Header>
        <h5 className="mb-0">Welcome</h5>
      </DCard.Header>
      <DCard.Body>
        <p>Hello, {userName}. This is your first app with Dynamic Framework.</p>
        <DButton
          text="Get Started"
          color="primary"
          onClick={() => console.log('Click!')}
        />
      </DCard.Body>
    </DCard>
  );
}

export default WelcomeCard;
```

### Key Points

- `DCard` uses subcomponents: `DCard.Header`, `DCard.Body`, `DCard.Footer`
- `DButton` uses `text` for content and `color` for styling
- There is no `variant="primary"` - use `color="primary"`

## Step 3: Add Interactivity

Now let's add state with `useState` to make the app interactive:

```jsx
// src/components/CounterCard.jsx
import { useState } from 'react';
import { DCard, DButton, DAlert } from '@dynamic-framework/ui-react';

function CounterCard() {
  const [count, setCount] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= 5) {
      setShowAlert(true);
    }
  };

  return (
    <DCard>
      <DCard.Header>
        <h5 className="mb-0">Interactive Counter</h5>
      </DCard.Header>
      <DCard.Body>
        <p className="display-4 text-center">{count}</p>

        <div className="d-flex gap-2 justify-content-center">
          <DButton
            text="Increment"
            color="primary"
            iconStart="Plus"
            onClick={handleIncrement}
          />
          <DButton
            text="Reset"
            color="secondary"
            variant="outline"
            onClick={() => {
              setCount(0);
              setShowAlert(false);
            }}
          />
        </div>

        {showAlert && (
          <DAlert color="success" className="mt-3">
            You have reached 5 or more!
          </DAlert>
        )}
      </DCard.Body>
    </DCard>
  );
}

export default CounterCard;
```

### Key Points

- `DAlert` uses `color` (not `variant` or `theme`)
- `DAlert` uses `children` for content (not a `text` prop)
- `DButton` with `iconStart` uses Lucide icon names in PascalCase (`Plus`, not `plus`)

## Step 4: Form with Inputs

Create a simple form using Dynamic UI input components:

```jsx
// src/components/ContactForm.jsx
import { useState } from 'react';
import { DCard, DButton, DInput, DAlert } from '@dynamic-framework/ui-react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <DCard>
        <DCard.Body>
          <DAlert color="success">
            Thank you for your message, {formData.name}!
          </DAlert>
          <DButton
            text="Send another message"
            color="primary"
            variant="outline"
            onClick={() => {
              setFormData({ name: '', email: '', message: '' });
              setSubmitted(false);
            }}
          />
        </DCard.Body>
      </DCard>
    );
  }

  return (
    <DCard>
      <DCard.Header>
        <h5 className="mb-0">Contact</h5>
      </DCard.Header>
      <DCard.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <DInput
              label="Name *"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Your name"
            />
          </div>

          <div className="mb-3">
            <DInput
              label="Email *"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-3">
            <DInput
              label="Message"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Your message..."
            />
          </div>

          <DButton
            text="Submit"
            color="primary"
            type="submit"
            iconEnd="Send"
          />
        </form>
      </DCard.Body>
    </DCard>
  );
}

export default ContactForm;
```

### Key Points about DInput

- `onChange` receives the value directly, **NOT** an event
- Correct: `onChange={(value) => setValue(value)}`
- Incorrect: `onChange={(e) => setValue(e.target.value)}`

## Step 5: Integrate Everything in App.jsx

Now integrate your components into the main application:

```jsx
// src/App.jsx
import WelcomeCard from './components/WelcomeCard';
import CounterCard from './components/CounterCard';
import ContactForm from './components/ContactForm';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">My First Dynamic App</h1>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <WelcomeCard userName="User" />
        </div>

        <div className="col-12 col-md-6">
          <CounterCard />
        </div>

        <div className="col-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default App;
```

## Step 6: Adding Icons

Dynamic UI 2.0 uses [Lucide](https://lucide.dev/icons/) icons. Names must be in PascalCase:

```jsx
import { DButton, DIcon } from '@dynamic-framework/ui-react';

// Buttons with icons
<DButton text="Save" iconStart="Save" color="primary" />
<DButton text="Next" iconEnd="ArrowRight" color="primary" />
<DButton text="Delete" iconStart="Trash" color="danger" />

// Standalone icon
<DIcon icon="Settings" size="24px" />
<DIcon icon="CheckCircle" color="success" />
```

### Common Icons

| Icon | Name | Usage |
|------|------|-------|
| + | `Plus` | Add |
| check | `Check` | Confirm |
| x | `X` | Close |
| right arrow | `ArrowRight` | Next |
| left arrow | `ArrowLeft` | Previous |
| trash | `Trash` | Delete |
| pencil | `Pencil` | Edit |
| disk | `Save` | Save |
| magnifier | `Search` | Search |
| gear | `Settings` | Settings |

## Common Mistakes to Avoid

### 1. Prop `theme` vs `color`

```jsx
// INCORRECT - theme doesn't exist
<DButton text="Click" theme="primary" />
<DAlert theme="danger">Error</DAlert>

// CORRECT - use color
<DButton text="Click" color="primary" />
<DAlert color="danger">Error</DAlert>
```

### 2. Lowercase icons

```jsx
// INCORRECT - lowercase
<DButton text="Save" iconStart="save" />
<DIcon icon="settings" />

// CORRECT - PascalCase
<DButton text="Save" iconStart="Save" />
<DIcon icon="Settings" />
```

### 3. DInput handlers

```jsx
// INCORRECT - trying to access e.target.value
<DInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// CORRECT - handler receives value directly
<DInput
  value={value}
  onChange={(value) => setValue(value)}
/>
```

### 4. Components that don't exist

```jsx
// INCORRECT - these components DO NOT exist in Dynamic UI
import { Typography, Container, Row, Col } from '@dynamic-framework/ui-react';
import { ThemeProvider, ConfigProvider } from '@dynamic-framework/ui-react';

// CORRECT - use real components
import { DCard, DButton, DAlert, DInput } from '@dynamic-framework/ui-react';
// For layout use Bootstrap classes: container, row, col-*
```

## Next Steps

Now that your first application is working:

1. Explore more components in [Storybook](https://react.dynamicframework.dev/)
2. Learn about [project structure](./project-structure.md)
3. Review the [migration guide](./migration-v2.md) if coming from v1.x
4. Check [what's new in v2.0](../whats-new-v2.md)

## Resources

- [Storybook - Component Catalog](https://react.dynamicframework.dev/)
- [Lucide Icons](https://lucide.dev/icons/)
- [Bootstrap 5 - CSS Utilities](https://getbootstrap.com/docs/5.3/utilities/api/)
