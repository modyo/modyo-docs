---
search: true
---

# Componentes de Dynamic Framework

Dynamic Framework ofrece más de 45 componentes React especializados para aplicaciones financieras, construidos sobre Bootstrap 5 y diseñados para cubrir las necesidades más comunes en aplicaciones bancarias.

## Catálogo de Componentes

### Componentes de Layout

| Componente | Descripción |
|------------|-------------|
| `DBox` | Contenedor semántico con variantes visuales |
| `DCard` | Tarjeta con header, body y footer |
| `DLayout` | Sistema de grid basado en CSS Grid |
| `DCollapse` | Panel colapsable con animación |

```jsx
import { DCard, DBox } from '@dynamic-framework/ui-react';

// Card básica
<DCard>
  <DCard.Header>
    <h5 className="mb-0">Título</h5>
  </DCard.Header>
  <DCard.Body>
    Contenido de la tarjeta
  </DCard.Body>
  <DCard.Footer>
    <DButton text="Acción" color="primary" />
  </DCard.Footer>
</DCard>

// Box con variante
<DBox className="p-3">
  Contenido del box
</DBox>
```

### Componentes de Navegación

| Componente | Descripción |
|------------|-------------|
| `DTabs` | Navegación por pestañas con contenido |
| `DStepper` | Indicador de pasos para wizards |
| `DPaginator` | Control de paginación |
| `DDropdown` | Menú desplegable |

```jsx
import { DTabs, DTabOption } from '@dynamic-framework/ui-react';
import { useState, useMemo } from 'react';

function TabsExample() {
  const tabs: DTabOption[] = useMemo(() => [
    { label: 'Resumen', tab: 'summary' },
    { label: 'Movimientos', tab: 'transactions' },
    { label: 'Detalles', tab: 'details' },
  ], []);

  const [selectedTab, setSelectedTab] = useState<DTabOption>(tabs[0]);

  return (
    <DTabs
      options={tabs}
      defaultSelected={selectedTab.tab}
      onChange={setSelectedTab}
    >
      <DTabs.Tab tab="summary">
        <p>Contenido de resumen</p>
      </DTabs.Tab>
      <DTabs.Tab tab="transactions">
        <p>Lista de movimientos</p>
      </DTabs.Tab>
      <DTabs.Tab tab="details">
        <p>Detalles de la cuenta</p>
      </DTabs.Tab>
    </DTabs>
  );
}
```

### Componentes de Formularios

| Componente | Descripción |
|------------|-------------|
| `DInput` | Campo de texto con label y validación |
| `DInputCurrency` | Entrada de montos con formato |
| `DInputPassword` | Campo de contraseña con toggle |
| `DInputPhone` | Campo de teléfono con código de país |
| `DInputPin` | Entrada de PIN numérico |
| `DInputMask` | Input con máscara de formato |
| `DInputCheck` | Checkbox con label |
| `DInputSwitch` | Toggle switch |
| `DInputRange` | Slider de rango |
| `DInputCounter` | Contador numérico con +/- |
| `DSelect` | Lista desplegable |
| `DInputSelect` | Select con búsqueda |
| `DDatePicker` | Selector de fecha |
| `DOtp` | Entrada de código OTP |
| `DBoxFile` | Carga de archivos |

```jsx
import { DInput, DInputCurrency, DButton } from '@dynamic-framework/ui-react';
import { useState } from 'react';

function TransferForm() {
  const [amount, setAmount] = useState<number | undefined>();
  const [description, setDescription] = useState('');

  return (
    <form>
      <div className="mb-3">
        <DInputCurrency
          label="Monto a transferir"
          value={amount}
          onChange={setAmount}
          currencyCode="USD"
          placeholder="0.00"
        />
      </div>

      <div className="mb-3">
        <DInput
          label="Descripción"
          value={description}
          onChange={setDescription}
          placeholder="Concepto de la transferencia"
        />
      </div>

      <DButton
        text="Transferir"
        color="primary"
        iconEnd="Send"
        type="submit"
      />
    </form>
  );
}
```

### Componentes de Botones

| Componente | Descripción |
|------------|-------------|
| `DButton` | Botón con variantes y estados |
| `DButtonIcon` | Botón solo con icono |

```jsx
import { DButton, DButtonIcon } from '@dynamic-framework/ui-react';

// Botones con diferentes colores
<DButton text="Primario" color="primary" />
<DButton text="Secundario" color="secondary" />
<DButton text="Éxito" color="success" />
<DButton text="Peligro" color="danger" />

// Variantes de estilo
<DButton text="Sólido" color="primary" />
<DButton text="Outline" color="primary" variant="outline" />
<DButton text="Link" color="primary" variant="link" />

// Con iconos (Lucide, PascalCase)
<DButton text="Guardar" iconStart="Save" color="primary" />
<DButton text="Siguiente" iconEnd="ArrowRight" color="primary" />

// Solo icono
<DButtonIcon icon="Settings" color="secondary" />
<DButtonIcon icon="Trash" color="danger" />
```

### Componentes de Feedback

| Componente | Descripción |
|------------|-------------|
| `DAlert` | Mensajes de alerta |
| `DToast` | Notificaciones temporales |
| `DToastContainer` | Contenedor de toasts |
| `DProgress` | Barra de progreso |
| `DModal` | Ventana modal |
| `DOffcanvas` | Panel lateral deslizante |
| `DPopover` | Popover con contenido |
| `DTooltip` | Tooltip informativo |

```jsx
import { DAlert, DModal, DButton } from '@dynamic-framework/ui-react';
import { useState } from 'react';

function FeedbackExample() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* Alertas */}
      <DAlert color="success">
        Operación completada exitosamente
      </DAlert>

      <DAlert color="danger" dismissible onClose={() => {}}>
        Ha ocurrido un error
      </DAlert>

      {/* Modal */}
      <DButton
        text="Abrir Modal"
        color="primary"
        onClick={() => setShowModal(true)}
      />

      <DModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Confirmar acción"
      >
        <p>¿Estás seguro de realizar esta acción?</p>
        <div className="d-flex gap-2 justify-content-end">
          <DButton
            text="Cancelar"
            color="secondary"
            variant="outline"
            onClick={() => setShowModal(false)}
          />
          <DButton
            text="Confirmar"
            color="primary"
            onClick={() => setShowModal(false)}
          />
        </div>
      </DModal>
    </>
  );
}
```

### Componentes de Datos

| Componente | Descripción |
|------------|-------------|
| `DBadge` | Etiquetas y contadores |
| `DChip` | Tags removibles |
| `DAvatar` | Avatar de usuario |
| `DListGroup` | Lista agrupada |
| `DTimeline` | Línea de tiempo |
| `DCarousel` | Carrusel de contenido |

```jsx
import { DBadge, DChip, DListGroup } from '@dynamic-framework/ui-react';

// Badges
<DBadge text="Nuevo" color="primary" />
<DBadge text="Pendiente" color="warning" soft />
<DBadge text="5" color="danger" pill />

// Chips removibles
<DChip
  label="Etiqueta"
  onClose={() => handleRemove()}
  color="primary"
/>

// Lista agrupada
<DListGroup>
  <DListGroup.Item>Elemento 1</DListGroup.Item>
  <DListGroup.Item>Elemento 2</DListGroup.Item>
  <DListGroup.Item>Elemento 3</DListGroup.Item>
</DListGroup>
```

### Componentes Financieros

| Componente | Descripción |
|------------|-------------|
| `DCreditCard` | Visualización de tarjeta de crédito/débito |
| `DCurrencyText` | Texto con formato de moneda |
| `DVoucher` | Comprobante/recibo de transacción |
| `DPasswordStrengthMeter` | Indicador de fortaleza de contraseña |

```jsx
import { DCreditCard, DCurrencyText, DVoucher } from '@dynamic-framework/ui-react';

// Tarjeta de crédito
<DCreditCard
  lastFourDigits="4532"
  cardHolder="JUAN PÉREZ"
  expirationDate="12/28"
  franchise="visa"
/>

// Texto con formato de moneda
<DCurrencyText
  value={1250.50}
  currencyCode="USD"
/>

// Voucher de transacción
<DVoucher
  title="Transferencia exitosa"
  items={[
    { label: 'Monto', value: '$500.00' },
    { label: 'Destino', value: 'Cuenta ***1234' },
    { label: 'Fecha', value: '18/12/2025' },
  ]}
/>
```

### Iconos

Dynamic UI 2.0 usa [Lucide Icons](https://lucide.dev/icons/). Los nombres deben estar en **PascalCase**:

```jsx
import { DIcon } from '@dynamic-framework/ui-react';

// Iconos básicos
<DIcon icon="Home" />
<DIcon icon="Settings" />
<DIcon icon="User" />

// Con tamaño y color
<DIcon icon="CheckCircle" size="32px" color="success" />
<DIcon icon="AlertTriangle" size="24px" color="warning" />

// En botones
<DButton text="Editar" iconStart="Pencil" color="primary" />
<DButton text="Eliminar" iconStart="Trash" color="danger" />
```

## Props Comunes

### Prop `color`

La mayoría de componentes usan `color` (no `variant` ni `theme`):

```jsx
// ✅ CORRECTO
<DButton text="Acción" color="primary" />
<DAlert color="success">Mensaje</DAlert>
<DBadge text="Estado" color="warning" />

// ❌ INCORRECTO - estas props NO existen
<DButton text="Acción" theme="primary" />
<DButton text="Acción" variant="primary" />
```

Valores disponibles: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`

### Handlers de Input

Los componentes de input reciben el valor directamente, **no** un evento:

```jsx
// ✅ CORRECTO
<DInput
  value={value}
  onChange={(newValue) => setValue(newValue)}
/>

// ❌ INCORRECTO
<DInput
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

## Configuración Global

Usa `DContextProvider` para configuración global de la aplicación:

```jsx
import { DContextProvider } from '@dynamic-framework/ui-react';

function App() {
  return (
    <DContextProvider>
      <MyApplication />
    </DContextProvider>
  );
}
```

## Accesibilidad

Todos los componentes de Dynamic Framework cumplen con WCAG 2.1 nivel AA:

- Navegación por teclado completa
- Compatibilidad con lectores de pantalla
- Contraste de colores adecuado
- Etiquetas ARIA apropiadas

## Recursos

- [Storybook - Catálogo Interactivo](https://react.dynamicframework.dev/)
- [Iconos Lucide](https://lucide.dev/icons/)
- [Bootstrap 5 - Utilidades CSS](https://getbootstrap.com/docs/5.3/utilities/api/)
