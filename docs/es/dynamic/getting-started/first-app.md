---
search: true
---

# Tu Primera Aplicacion

Esta guia te llevara paso a paso a crear tu primera aplicacion con Dynamic Framework, usando componentes reales y patrones correctos.

## Requisitos Previos

Antes de comenzar, asegurate de tener:

- Node.js v22 o superior
- NPM 10.x o superior
- Un editor de codigo (VS Code recomendado)

## Paso 1: Crear el Proyecto

Usa Modyo CLI para crear un nuevo proyecto:

```bash
# Crear proyecto con plantilla base
npx @modyo/cli@latest get dynamic-react-base-template mi-primera-app

# Navegar al directorio
cd mi-primera-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run start
```

Tu aplicacion estara disponible en `http://localhost:8080`.

## Paso 2: Tu Primer Componente

Crea un componente simple usando `DCard` y `DButton`. Estos son componentes reales de Dynamic UI.

```jsx
// src/components/WelcomeCard.jsx
import { DCard, DButton } from '@dynamic-framework/ui-react';

function WelcomeCard({ userName }) {
  return (
    <DCard>
      <DCard.Header>
        <h5 className="mb-0">Bienvenido</h5>
      </DCard.Header>
      <DCard.Body>
        <p>Hola, {userName}. Esta es tu primera app con Dynamic Framework.</p>
        <DButton
          text="Comenzar"
          color="primary"
          onClick={() => console.log('Clic!')}
        />
      </DCard.Body>
    </DCard>
  );
}

export default WelcomeCard;
```

### Puntos Clave

- `DCard` usa subcomponentes: `DCard.Header`, `DCard.Body`, `DCard.Footer`
- `DButton` usa `text` para el contenido y `color` para el estilo
- No existe `variant="primary"` - usa `color="primary"`

## Paso 3: Agregar Interactividad

Ahora agreguemos estado con `useState` para hacer la app interactiva:

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
        <h5 className="mb-0">Contador Interactivo</h5>
      </DCard.Header>
      <DCard.Body>
        <p className="display-4 text-center">{count}</p>

        <div className="d-flex gap-2 justify-content-center">
          <DButton
            text="Incrementar"
            color="primary"
            iconStart="Plus"
            onClick={handleIncrement}
          />
          <DButton
            text="Reiniciar"
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
            Has llegado a 5 o mas.
          </DAlert>
        )}
      </DCard.Body>
    </DCard>
  );
}

export default CounterCard;
```

### Puntos Clave

- `DAlert` usa `color` (no `variant` ni `theme`)
- `DAlert` usa `children` para el contenido (no prop `text`)
- `DButton` con `iconStart` usa nombres de iconos Lucide en PascalCase (`Plus`, no `plus`)

## Paso 4: Formulario con Inputs

Crea un formulario simple usando los componentes de entrada de Dynamic UI:

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
    console.log('Datos enviados:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <DCard>
        <DCard.Body>
          <DAlert color="success">
            Gracias por tu mensaje, {formData.name}.
          </DAlert>
          <DButton
            text="Enviar otro mensaje"
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
        <h5 className="mb-0">Contacto</h5>
      </DCard.Header>
      <DCard.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <DInput
              label="Nombre *"
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-3">
            <DInput
              label="Email *"
              type="email"
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="tu@email.com"
            />
          </div>

          <div className="mb-3">
            <DInput
              label="Mensaje"
              value={formData.message}
              onChange={handleChange('message')}
              placeholder="Tu mensaje..."
            />
          </div>

          <DButton
            text="Enviar"
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

### Puntos Clave sobre DInput

- `onChange` recibe el valor directamente, **NO** un evento
- Correcto: `onChange={(value) => setValue(value)}`
- Incorrecto: `onChange={(e) => setValue(e.target.value)}`

## Paso 5: Integrar Todo en App.jsx

Ahora integra tus componentes en la aplicacion principal:

```jsx
// src/App.jsx
import WelcomeCard from './components/WelcomeCard';
import CounterCard from './components/CounterCard';
import ContactForm from './components/ContactForm';

import '@dynamic-framework/ui-react/dist/css/dynamic-ui.css';

function App() {
  return (
    <div className="container py-4">
      <h1 className="mb-4">Mi Primera App con Dynamic</h1>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <WelcomeCard userName="Usuario" />
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

## Paso 6: Agregar Iconos

Dynamic UI 2.0 usa iconos de [Lucide](https://lucide.dev/icons/). Los nombres deben estar en PascalCase:

```jsx
import { DButton, DIcon } from '@dynamic-framework/ui-react';

// Botones con iconos
<DButton text="Guardar" iconStart="Save" color="primary" />
<DButton text="Siguiente" iconEnd="ArrowRight" color="primary" />
<DButton text="Eliminar" iconStart="Trash" color="danger" />

// Icono independiente
<DIcon icon="Settings" size="24px" />
<DIcon icon="CheckCircle" color="success" />
```

### Iconos Comunes

| Icono | Nombre | Uso |
|-------|--------|-----|
| + | `Plus` | Agregar |
| check | `Check` | Confirmar |
| x | `X` | Cerrar |
| flecha derecha | `ArrowRight` | Siguiente |
| flecha izquierda | `ArrowLeft` | Anterior |
| papelera | `Trash` | Eliminar |
| lapiz | `Pencil` | Editar |
| disco | `Save` | Guardar |
| lupa | `Search` | Buscar |
| engranaje | `Settings` | Configuracion |

## Errores Comunes a Evitar

### 1. Prop `theme` vs `color`

```jsx
// INCORRECTO - theme no existe
<DButton text="Clic" theme="primary" />
<DAlert theme="danger">Error</DAlert>

// CORRECTO - usar color
<DButton text="Clic" color="primary" />
<DAlert color="danger">Error</DAlert>
```

### 2. Iconos en minusculas

```jsx
// INCORRECTO - minusculas
<DButton text="Guardar" iconStart="save" />
<DIcon icon="settings" />

// CORRECTO - PascalCase
<DButton text="Guardar" iconStart="Save" />
<DIcon icon="Settings" />
```

### 3. Handlers de DInput

```jsx
// INCORRECTO - intentar acceder a e.target.value
<DInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// CORRECTO - el handler recibe el valor directamente
<DInput
  value={value}
  onChange={(value) => setValue(value)}
/>
```

### 4. Componentes que no existen

```jsx
// INCORRECTO - estos componentes NO existen en Dynamic UI
import { Typography, Container, Row, Col } from '@dynamic-framework/ui-react';
import { ThemeProvider, ConfigProvider } from '@dynamic-framework/ui-react';

// CORRECTO - usar componentes reales
import { DCard, DButton, DAlert, DInput } from '@dynamic-framework/ui-react';
// Para layout usar clases Bootstrap: container, row, col-*
```

## Proximos Pasos

Ahora que tienes tu primera aplicacion funcionando:

1. Explora mas componentes en [Storybook](https://react.dynamicframework.dev/)
2. Aprende sobre [estructura del proyecto](./project-structure.md)
3. Revisa la [guia de migracion](./migration-v2.md) si vienes de v1.x
4. Consulta [novedades de v2.0](../whats-new-v2.md)

## Recursos

- [Storybook - Catalogo de Componentes](https://react.dynamicframework.dev/)
- [Iconos Lucide](https://lucide.dev/icons/)
- [Bootstrap 5 - Utilidades CSS](https://getbootstrap.com/docs/5.3/utilities/api/)
