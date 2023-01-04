---
search: true
collapsible: true
sidebarDepth: 3
---

# Form

These drops allow you to obtain information through Liquid for a form in the Customers module.

## form.slug

The slug of the form.

#### output

```the-new-form```

## Alternative

### alternative.id

The id of the alternative.

#### output

```The first question```

### [alternative.question](#question)

Object of the question type.

## Answer

### answer.edit_url

The edit URL of the response.

#### output

```” https://test.miModyo.com/forms/el-nuevo-formulario/edit_answer?question_id=3&answer_id=8 “```

### answer.id

The id of the response.

#### output

```5```

[answer.question](#question)

Object of the question type associated with the answer.

### [answer.response](#answer)

Response object associated with the response.

#### output

```The first question```

### answer.text_field

The text field associated with the response.

#### output

```This is the answer in the text field```

### answer.type

The type of answer.

#### output

```text_answer```

## Response

### form_response.description

The description of the form.

#### output

```This form is the new form for users```

### form_response.name

The form name.

#### output

```the new form```

### form_response.questions

The questions on the form.

#### output

```[{"title"=>” What is your job title?” , “type"=>"textquestion”, “answer"=>"Software developer"}] ```

## Question

These drops allow you to obtain information through Liquid for questions on a form in the Customers module.

### question.allow_alternatives?

Boolean to check if the question accepts alternatives.

#### output

```false```

### question.alternatives

Array with objects of the alternative type.

### question.allow_alternatives?

Boolean to check if the question accepts alternatives.

#### output

```false```

### [question.form](#form-form)

Object of the form type.

### question.id

Return the question id.

#### output

```3```

### question.label

The label of the question.

#### output

```The first question```
