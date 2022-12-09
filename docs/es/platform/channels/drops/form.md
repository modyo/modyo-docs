---
search: true
collapsible: true
---

# Formulario (Form)

Estos drops te permiten obtener información a través de Liquid para un formulario del módulo Customers.

### form.slug

El slug del formulario.

#### output

```el-nuevo-formulario```

## Alternative

### alternative.id

El id de la alternativa.

#### output

```La primera pregunta```

### [alternative.question](#pregunta)

Objeto del tipo pregunta.

## Answer

### answer.edit_url

La URL de edición de la respuesta.

#### output

```"https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8"```

### answer.id

El id de la respuesta.

#### output

```5```

### [answer.question](#pregunta)

Objecto del tipo pregunta asociado a la respuesta.

### [answer.response](#response)

Objecto del tipo response asociado a la respuesta.

#### output

```La primera pregunta```

### answer.text_field

El campo de texto asociado a la respuesta.

#### output

```Este es la respuesta en el campo de texto```

### answer.type

El tipo de respuesta.

#### output

```text_answer```

## Response

### form_response.description

La descripción del formulario.

#### output

```Este formulario es el nuevo formulario de los usurios```

### form_response.name

El nombre de formulario.

#### output

```el nuevo formulario```

### form_response.questions

Las preguntas del formulario.

#### output

``` [{"title"=>"¿Cual es tu puesto de trabajo?", "type"=>"textquestion", "answer"=>"Software developer"}] ```

## Pregunta

Estos drops te permiten obtener información a través de Liquid para las preguntas de un formulario del módulo Customers.

### question.allow_alternatives?

Booleano para verificar si la pregunta acepta alternativas.

#### output

```false```

### question.alternatives

Array con objectos del tipo alternativas.

### question.allow_alternatives?

Booleano para verificar si la pregunta acepta alternativas.

#### output

```false```

### [question.form](#formulario-form)

Objecto del tipo formulario.

### question.id

Retorna el id de la pregunta.

#### output

```3```

### question.label

El label de la pregunta.

#### output

```La primera pregunta```
