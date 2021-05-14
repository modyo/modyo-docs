---
search: false
---

# Ruby

:::warning Sección en desarrollo
La siguiente sección se encuentra en desarrollo y aún no ha sido revisada.
:::

Esta guía de estilo de Ruby recomienda las mejores prácticas a fin de que los programadores Ruby del mundo real pueden escribir código que pueda ser mantenido por otros programadores Ruby del mundo real. Una guía de estilo que refleje los usos del mundo real es utilizada, y una guía de estilo que se aferra a un ideal que ha sido rechazado por las personas supone que lo mejor es no utilizarla para nada – no importa lo bueno que sea.

La guía está dividida en varias secciones de de reglas relacionadas. Intenté agregar la racionalización de las normas (si está omitido asumí que es bastante obvio).

## Estructura del Código Fuente

> Casi todo el mundo está convencido de que todos los estilos
> excepto los propios son feos e ilegibles. Deja de lado el
> "excepto los propios", y probablemente tengan razón... <br/>
> -- Jerry Coffin (sobre indentación)

* Usa `UTF-8` como la codificación del archivo fuente.
* Usa dos **espacios** por cada nivel de identación. No tabs.

    ```ruby
    # mal - cuatro espacios
    def some_method
        do_something
    end

    # bien
    def some_method
      do_something
    end
    ```

* Usa finales de línea estilo Unix. (*por defecto los usuarios BSD/Solaris/Linux/OSX
  están protegidos, los usuarios de Windows tienen que tener mucho cuidado.)
    * Si estás usando Git es posible que quieras agregar la siguiente
    configuración para proteger tu proyecto de los finales de línea
    de Windows para que no aparezcan solos:

    ```bash
    $ git config --global core.autocrlf true
    ```

* No uses `;` para separar declaraciones y expresiones.
  Por convención - usá una expresión por línea.

    ```ruby
    # mal
    puts 'foobar'; # superfluous semicolon

    puts 'foo'; puts 'bar' # dos expresiones en la misma línea

    # bien
    puts 'foobar'

    puts 'foo'
    puts 'bar'

    puts 'foo', 'bar' # esto aplica a puts en particular
    ```

* Prefiere un formato de única línea por cada definición de clase
  sin cuerpo.

    ```ruby
    # mal
    class FooError < StandardError
    end

    # casi bien
    class FooError < StandardError; end

    # bien
    FooError = Class.new(StandardError)
    ```

* Evita métodos de una sola línea. Aunque son algo popular, hay
  algunas particularidades sobre su sintaxis para definirlos que
  hacen que su uso indeseable. En cualquier caso - no debe
  existir más de una expresión en un método de una sola línea.

    ```ruby
    # mal
    def too_much; something; something_else; end

    # casi bien - el primer ; es necesario
    def no_braces_method; body end

    # casi bien - el segundo ; es opcional
    def no_braces_method; body; end

    # casi bien - la sintaxis es válida, pero al no usar ; hace que sea un poco difícil de leer
    def some_method() body end

    # bien
    def some_method
      body
    end
    ```

    Una excepción a la regla son los métodos vacíos.

    ```ruby
    # bien
    def no_op; end
    ```

* Usa espacios entre operadores, después de las comas, dos puntos y puntos
  y comas, luego de `{` y antes de `}`. Los espacios en blanco pueden (en
  su mayoría) irrelevantes para el intérprete de Ruby, pero su uso adecuado
  es la clave para escribir código fácil de leer.

    ```ruby
    sum = 1 + 2
    a, b = 1, 2
    1 > 2 ? true : false; puts 'Hi'
    [1, 2, 3].each { |e| puts e }
    ```

    Hay algunas excepciones, con respecto a los operadores, uno es el operador exponente:

    ```ruby
    # mal
    e = M * c ** 2

    # bien
    e = M * c**2
    ```


    Otra excepción es el operador slash en los numeros racionales:

    ```ruby
    # mal
    o_scale = 1 / 48r

    # bien
    o_scale = 1/48r
    ```

    Otra excepción es el operador de navegación segura :
    ```ruby
    # mal
    foo &. bar
    foo &.bar
    foo&. bar

    # bien
    foo&.bar
    ```

* <a name="spaces-braces"></a>
  No uses espacios después de `(`, `[` o antes de `]`, `)`.
  Usa espacios despues de `{` and antes de `}`.

    ```ruby
    # mal
    some( arg ).other
    [ 1, 2, 3 ].each{|e| puts e}

    # bien
    some(arg).other
    [1, 2, 3].each { |e| puts e }
    ```

    `{` y `}` merecen una aclaración especial, ya que se utilizan
    para bloques y hash literales, así como las expresiones
    embebidas en strings. Dos estilos se consideran aceptables
    para los hash literales.

    ```ruby
    # bien - espacio luego de { y antes de }
    { one: 1, two: 2 }

    # bien - sin espacio luego de { y antes de }
    {one: 1, two: 2}
    ```

    La primera variante es un poco más fácil de leer (y posiblemente
    más popular en la comunidad de Ruby en general). La segunda
    variante tiene la ventaja de tener diferenciación visual entre
    los bloques y los hash literales. Cualquiera que elijas -
    usalo de forma consistente.

    En cuanto a las expresiones embebidas, también hay dos formas
    aceptables:

    ```ruby
    # bien - sin espacios
    "string#{expr}"

    # ok - podría decirse que es más legible
    "string#{ expr }"
    ```

* Sin espacios luego de `!`.

    ```ruby
    # mal
    ! something

    # bien
    !something
    ```

* Indenta `when` al mismo nivel que `case`. 
  Sé que muchos no estarán de acuerdo con esto, pero es el estilo establecido tanto en 
  "The Ruby Programming Language" y "Programming Ruby".

    ```ruby
    # mal
    case
      when song.name == 'Misty'
        puts 'Not again!'
      when song.duration > 120
        puts 'Too long!'
      when Time.now.hour > 21
        puts "It's too late"
      else
        song.play
    end

    # bien
    case
    when song.name == 'Misty'
      puts 'Not again!'
    when song.duration > 120
      puts 'Too long!'
    when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
    end
    ```

* Al asignar el resultado de una expresión condicional a una variable, conservá la alineación de su ramificación.

    ```ruby
    # mal - bastante complejo
    kind = case year
    when 1850..1889 then 'Blues'
    when 1890..1909 then 'Ragtime'
    when 1910..1929 then 'New Orleans Jazz'
    when 1930..1939 then 'Swing'
    when 1940..1950 then 'Bebop'
    else 'Jazz'
    end

    result = if some_cond
      calc_something
    else
      calc_something_else
    end

    # bien - es aparente lo qué está pasando
    kind = case year
           when 1850..1889 then 'Blues'
           when 1890..1909 then 'Ragtime'
           when 1910..1929 then 'New Orleans Jazz'
           when 1930..1939 then 'Swing'
           when 1940..1950 then 'Bebop'
           else 'Jazz'
           end

    result = if some_cond
               calc_something
             else
               calc_something_else
             end

    # bien (y con un espacio más eficiente)
    kind =
      case year
      when 1850..1889 then 'Blues'
      when 1890..1909 then 'Ragtime'
      when 1910..1929 then 'New Orleans Jazz'
      when 1930..1939 then 'Swing'
      when 1940..1950 then 'Bebop'
      else 'Jazz'
      end

    result =
      if some_cond
        calc_something
      else
        calc_something_else
      end
    ```

* Usa líneas vacías entre definiciones de métodos y también para romper un método en
  párrafos lógicos internos.

    ```ruby
    def some_method
      data = initialize(options)

      data.manipulate!

      data.result
    end

    def some_method
      result
    end
    ```

* <a name="two-or-more-empty-lines"></a>
  No uses mas de una linea vacia seguida.

  ```ruby
  # mal - hay dos lineas vacias seguidas.
  some_method


  some_method

  # bien
  some_method

  some_method
  ```
* <a name="empty-lines-around-access-modifier"></a>
  Usa lineas vacias alrededor de los modificadores de accesibilidad.

  ```ruby
  # mal
  class Foo
    attr_reader :foo
    def foo
      # do something...
    end
  end

  # bien
  class Foo
    attr_reader :foo

    def foo
      # do something...
    end
  end
  ```

* <a name="empty-lines-around-bodies"></a>
  No uses lineas vacias alrededor de métodos, clases, módulos y bloques.

  ```ruby
  # mal
  class Foo

    def foo

      begin

        do_something do

          something

        end

      rescue

        something

      end

    end

  end

  # bien
  class Foo
    def foo
      begin
        do_something do
          something
        end
      rescue
        something
      end
    end
  end
  ```

* <a name="no-trailing-params-comma"></a>
  Evita las comas en el último parametro al llamar un método.
  Especialmente si los parametros no estan separados por lineas

  ```ruby
  # mal - Es facil mover, eliminar o agregar parametros, pero aún asi no es recomendado
  some_method(
    size,
    count,
    color,
  )

  # mal
  some_method(size, count, color, )

  # bien
  some_method(size, count, color)
  ```

* Usa espacios alrededor del operador `=` cuando asignes valores predeterminados a los
  parámetros del método:

    ```ruby
    # mal
    def some_method(arg1=:default, arg2=nil, arg3=[])
      # do something...
    end

    # bien
    def some_method(arg1 = :default, arg2 = nil, arg3 = [])
      # do something...
    end
    ```

    Mientras que varios libros de Ruby sugieren el primer estilo, el segundo es mucho
    más utilizado en la práctica (y hasta se podría decir que es más fácil de leer).

* Evita usar la contínuación de línea con '\' cuando no sea necesario. En la práctica, evita el uso de continuación de línea en cualquier caso, excepto para la concatenación de strings.

    ```ruby
    # mal
    result = 1 - \
             2

    # bien (pero todavía se ve horrible)
    result = 1 \
             - 2

    # bien - Uso recomendado
    long_string = 'First part of the long string' \
                  ' and second part of the long string'
    ```

* Al continuar una invocación de método encadenado en otra línea mantener el `.` en la segunda línea.

    ```ruby
    # mal - es necesario leer la primer línea para entender la segunda línea
    one.two.three.
      four

    # bien - inmediatamente se ve qué está pasando en la segunda línea
    one.two.three
      .four
    ```

* Alinea los parámetros de una llamada a un método si ocupan más de una
  línea. Cuando se alinean los parámetros no es apropiado que sea con
  más indentación de lo debido, y utilizar un indentado único para las
  líneas luego del primer parámetro también es aceptable.

    ```ruby
    # punto de partida (la línea es muy larga)
    def send_mail(source)
      Mailer.deliver(to: 'bob@example.com', from: 'us@example.com', subject: 'Important message', body: source.text)
    end

    # mal (doble indentado)
    def send_mail(source)
      Mailer.deliver(
          to: 'bob@example.com',
          from: 'us@example.com',
          subject: 'Important message',
          body: source.text)
    end

    # bien (identado bajo el primer parámetro)
    def send_mail(source)
      Mailer.deliver(to: 'bob@example.com',
                     from: 'us@example.com',
                     subject: 'Important message',
                     body: source.text)
    end

    # bien (indentado normal)
    def send_mail(source)
      Mailer.deliver(
        to: 'bob@example.com',
        from: 'us@example.com',
        subject: 'Important message',
        body: source.text
      )
    end
    ```

* Alinea los elementos de arrays literales que ocupen múltiples líneas.

    ```ruby
    # mal - indentado simple
    menu_item = ["Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam",
      "Baked beans", "Spam", "Spam", "Spam", "Spam", "Spam"]

    # bien
    menu_item = [
      "Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam",
      "Baked beans", "Spam", "Spam", "Spam", "Spam", "Spam"
    ]

    # bien
    menu_item =
      ["Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam", "Spam",
       "Baked beans", "Spam", "Spam", "Spam", "Spam", "Spam"]
    ```

* Agrega guiones bajos para números literales grandes para mejorar su lectura.

    ```ruby
    # mal - cuantos 0s hay ahi?
    num = 1000000

    # bien - mucho más fácil de leer por el cerebro humano
    num = 1_000_000
    ```
* <a name="numeric-literal-prefixes"></a>
  Usa letras minúsculas para los prefijos de literales numéricos.
  `0o` para base octal, `0x` para base hexadecimal y `0b` para base binaria.
  No uses `0d` para numeros decimales.

  ```ruby
  # mal
  num = 01234
  num = 0O1234
  num = 0X12AB
  num = 0B10101
  num = 0D1234
  num = 0d1234

  # bien - es fácil separar los prefijos de los numeros
  num = 0o1234
  num = 0x12AB
  num = 0b10101
  num = 12

* Usa RDoc y sus convenciones para la documentación de APIs. No dejes
  una línea en blanco entre el bloque de comentario y el `def`.
* Limitá las líneas a 80 caracteres.
* Evita los espacios en blanco.
* No uses los comentarios de bloque. Ellos no pueden tener espacios en blanco
  antes y no son tan fáciles de entenderlos como comentarios.

    ```ruby
    # mal
    == begin
    comment line
    another comment line
    == end

    # bien
    # comment line
    # another comment line
    ```

## Sintaxis

* Usa `::` sólo para referenciar constantes (esto incluye clases
y módulos) y construcciones (como `Array()` o `Nokogiri::HTML()`).
Nunca uses `::` para la invocación de métodos.

    ```ruby
    # mal
    SomeClass::some_method
    some_object::some_method

    # bien
    SomeClass.some_method
    some_object.some_method
    SomeModule::SomeClass::SOME_CONST
    SomeModule::SomeClass()
    ```

* <a name="colon-method-definition"></a>
    No uses `::` para definir métodos de clase.

  ```ruby
  # nal
  class Foo
    def self::some_method
    end
  end

  # bien
  class Foo
    def self.some_method
    end
  end
  ```

* Usa `def` con paréntesis cuando tengas argumentos. Omite los
  paréntesis cuando el método no acepta ningún argumento.

     ```ruby
     # mal
     def some_method()
       # body omitted
     end

     # bien
     def some_method
       # body omitted
     end

     # mal
     def some_method_with_arguments arg1, arg2
       # body omitted
     end

     # bien
     def some_method_with_arguments(arg1, arg2)
       # body omitted
     end
     ```


* <a name="method-invocation-parens"></a>
  Usa paréntesis alrededor de los argumentos para la invocación de un método,
  especialmente si el primer argumento empieza con un paréntesis abierto `(`,
  como por ejemplo: `f((3 + 2) + 1)`.

  ```ruby
  # mal
  x = Math.sin y
  # bien
  x = Math.sin(y)

  # mal
  array.delete e
  # bien
  array.delete(e)

  # mal
  temperance = Person.new 'Temperance', 30
  # bien
  temperance = Person.new('Temperance', 30)
  ```

  Omite siempre los paréntesis para:

  * Métodos sin argumentos:

    ```ruby
    # mal
    Kernel.exit!()
    2.even?()
    fork()
    'test'.upcase()

    # bien
    Kernel.exit!
    2.even?
    fork
    'test'.upcase
    ```

  * Métodos que son parte de un DSL interno (por ejemplo: Rake, Rails, RSpec):

    ```ruby
    # mal
    validates(:name, presence: true)
    # bien
    validates :name, presence: true
    ```

  * Métodos que son palabras claves en Ruby:

    ```ruby
    class Person
      # mal
      attr_reader(:name, :age)
      # bien
      attr_reader :name, :age

      # body omitted
    end
    ```

  Puedes omitir los paréntesis para:

  * Métodos que tienen el grado de palabras reservada (`keyword`) en ruby, pero que no declaran nada. Ejemplo:

    ```ruby
    # bien
    puts(temperance.age)
    system('ls')
    # bien también
    puts temperance.age
    system 'ls'
    ```

* <a name="optional-arguments"></a>
    Define los argumentos opcionales de un método, al final de la lista de argumentos.
    Ruby tiene algunos resultados inesperados cuando los argumentos opcionales estan al principio de la lista de argumentos.

  ```ruby
  # mal
  def some_method(a = 1, b = 2, c, d)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_method('w', 'x') # => '1, 2, w, x'
  some_method('w', 'x', 'y') # => 'w, 2, x, y'
  some_method('w', 'x', 'y', 'z') # => 'w, x, y, z'

  # bien
  def some_method(c, d, a = 1, b = 2)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_method('w', 'x') # => '1, 2, w, x'
  some_method('w', 'x', 'y') # => 'y, 2, w, x'
  some_method('w', 'x', 'y', 'z') # => 'y, z, w, x'
  ```

* <a name="parallel-assignment"></a>
    Evita el uso de asignaciones en paralelo para la definición de variables. 
    La asignacion en paralelo es permitida cuando es el resultado de un metodo llamado con anterioridad.
    Es permitido la asignación en paralelo cuando se usa el operador splat (* antes de una variable) o intercambiar una variable (swap). 
    La asignacion paralela es mas dificil de leer que una asignación separada.

  ```ruby
  # mal
  a, b, c, d = 'foo', 'bar', 'baz', 'foobar'

  # bien
  a = 'foo'
  b = 'bar'
  c = 'baz'
  d = 'foobar'

  # bien - intercambiando una variable
  # El Swapping de variables o intercambio de variables es un caso especial
  # debido a que permite intercambiar el valor de 2 variables
  a = 'foo'
  b = 'bar'

  a, b = b, a
  puts a # => 'bar'
  puts b # => 'foo'

  # bien - usando el valor de retorno de un metodo
  # en este caso retorna mas de 1 valor
  def multi_return
    [1, 2]
  end

  first, second = multi_return

  # bien - usando el operador splat (*)
  first, *list = [1, 2, 3, 4] # first => 1, list => [2, 3, 4]

  hello_array = *'Hello' # => ["Hello"]

  a = *(1..3) # => [1, 2, 3]
  ```

* <a name="trailing-underscore-variables"></a>
  Evita el uso innecesario de la variable `_` durante la asignación paralela.
  Variables nombradas con un guión bajo `_` al principio del nombre son preferidas a solo usar un guión bajo `_`.
  Usa guión bajo `_` solamente en combinacion con con una variable `splat` definida a lado izquierdo de la asignación
  y sólo si la variable splat no tiene ningun guión bajo `_` al principio del nombre.

  ```ruby
  # mal
  foo = 'one,two,three,four,five'
  # Asignación Innecesaria. No agrega ninguna información útil
  first, second, _ = foo.split(',')
  first, _, _ = foo.split(',')
  first, *_ = foo.split(',')


  # bien
  foo = 'one,two,three,four,five'
  # el guión bajo es necesario para mostrar que se quiere obtener 
  # todos los elementos exceptuando el último
  *beginning, _ = foo.split(',')
  *beginning, something, _ = foo.split(',')

  # sólo el primer elemento
  a, = foo.split(',')
  # sólo los 2 primeros elementos
  a, b, = foo.split(',')

  # Asignación innecesaria en una variable que no se usará, pero 
  # esta asignación provee unformación útil
  first, _second = foo.split(',')
  first, _second, = foo.split(',')
  first, *_ending = foo.split(',')
  ```

* Nunca uses `for`, a menos que sepas exactamente para qué lo usás. En su
  lugar deberías usar los iteradores la mayor parte del tiempo. `for` se
  debe implementar en forma de `each` (asi estás agregando un nivel de
  indirección), pero con una peculiaridad - `for` no introduce un nuevo
  scope (a diferencia de `each`) y las variables que se definen dentro
  de su bloque son visibles fuera del mismo.

    ```ruby
    arr = [1, 2, 3]

    # mal
    for elem in arr do
      puts elem
    end

    # elem puede ser leída fuera del loop for
    elem #=> 3

    # bien
    arr.each { |elem| puts elem }

    # elem no puede ser leída fuera del bloque each
    elem #=> NameError: undefined local variable or method `elem'
    ```

* Nunca uses `then` para `if/unless` con multilíneas.

    ```ruby
    # mal
    if some_condition then
      # body omitted
    end

    # bien
    if some_condition
      # body omitted
    end
    ```

* Siempre escribe la condición en la misma línea para los condicionales `if`/`unless` con multilíneas.

    ```ruby
    # mal
    if
      some_condition
      do_something
      do_something_else
    end

    # bien
    if some_condition
      do_something
      do_something_else
    end
    ```

* Prefiere el operador ternario (`?:`) en lugar de las construcciones
  `if/then/else/end`. Es más común y obviamente más conciso.

    ```ruby
    # mal
    result = if some_condition then something else something_else end

    # bien
    result = some_condition ? something : something_else
    ```

* Usa una expresión por fila por operador ternario. Esto también
  significa que los operadores ternarios no deben anidarse. Es
  preferible utilizar construcciones `if/else` en estos casos.

    ```ruby
    # mal
    some_condition ? (nested_condition ? nested_something : nested_something_else) : something_else

    # bien
    if some_condition
      nested_condition ? nested_something : nested_something_else
    else
      something_else
    end
    ```

* Nunca uses `if x: ...` - fue eliminado en Ruby 1.9. Usa el
  operador ternario en su lugar.

    ```ruby
    # mal
    result = if some_condition: something else something_else end

    # bien
    result = some_condition ? something : something_else
    ```

* Nunca uses `if x; ...`. Usa el operador ternario en su lugar.

* Usa `when x then ...` para condicionales de una línea. La sintaxis
  alternativa `when x: ...` fue eliminada en Ruby 1.9.

* Nunca uses `when x; ...`. Mirá la regla anterior.

* Usa `!` en lugar de `not`.

    ```ruby
    # mal - los paréntesis son necesarios por la precedencia de operador
    x = (not something)

    # bien
    x = !something
    ```

* Evita el uso de `!!`.

    ```ruby
    # mal
    x = 'test'
    # Analizando si la variable es nil
    if !!x
      # body omitted
    end

    x = false
    # La doble negación no funciona con variables boleanas
    !!x # => false

    # bien
    x = 'test'
    if !x.nil?
      # body omitted
    end
    ```

* Las palabras `and` y `or` están prohibidas. Simplemente no valen
  la pena. En su lugar, siempre usá `&&` y `||`.

    ```ruby
    # mal
    # boolean expression
    if some_condition and some_other_condition
      do_something
    end

    # control flow
    document.saved? or document.save!

    # bien
    # boolean expression
    if some_condition && some_other_condition
      do_something
    end

    # control flow
    document.saved? || document.save!
    ```

* Evita usar `?:` (operador ternario) en multilíneas; en su lugar usá `if/unless`.

* Favorecé al uso del modificador `if/unless` cuando tengas que escribir en una línea.
  Otra buena alternativa es el uso del control de flujo con `&&/||`.

    ```ruby
    # mal
    if some_condition
      do_something
    end

    # bien
    do_something if some_condition

    # otra buena opción
    # Usando control de flujos
    some_condition && do_something
    ```

* <a name="no-multiline-if-modifiers"></a>
  Evita el uso de modificadores `if`/`unless` al final de un bloque que se compone con mas de una lineal.

  ```ruby
  # mal
  10.times do
    # multi-line body omitted
  end if some_condition

  # bien
  if some_condition
    10.times do
      # multi-line body omitted
    end
  end
  ```

* <a name="no-nested-modifiers"></a>
  Evita el sudo de modificadores `if`/`unless`/`while`/`until` de forma anidada. 
  Mejor usa apropiadamente `&&`/`||` if.

  ```ruby
  # mal
  do_something if other_condition if some_condition

  # bien
  do_something if some_condition && other_condition
  ```

* Favorece `unless` por sobre `if` para condiciones negativas (o control
  de flujo con `||`).

    ```ruby
    # mal
    do_something if !some_condition

    # mal
    do_something if not some_condition

    # bien
    do_something unless some_condition

    # otra buena opción
    # Usando control de flujos
    some_condition || do_something
    ```

* Nunca uses `unless` con `else`. Reescribe para que el caso positivo esté primero.

    ```ruby
    # mal
    unless success?
      puts 'failure'
    else
      puts 'success'
    end

    # bien
    if success?
      puts 'success'
    else
      puts 'failure'
    end
    ```

* No uses paréntesis alrededor de la condición de `if/unless/while/until`.

    ```ruby
    # mal
    if (x > 10)
      # body omitted
    end

    # bien
    if x > 10
      # body omitted
    end
    ```

* Nunca uses `while/until` condition `do` para un `while/until` multilínea.

    ```ruby
    # mal
    while x > 5 do
      # body omitted
    end

    until x > 5 do
      # body omitted
    end

    # bien
    while x > 5
      # body omitted
    end

    until x > 5
      # body omitted
    end
    ```

* Favorecé el uso del modificador `while/until` cuando puedas escribir la
  comparación en una línea.

    ```ruby
    # mal
    while some_condition
      do_something
    end

    # bien
    do_something while some_condition
    ```

* Favorecé `until` por sobre `while` para condiciones negativas.

    ```ruby
    # mal
    do_something while !some_condition

    # bien
    do_something until some_condition
    ```

* <a name="infinite-loop"></a>
  Usa `Kernel#loop` en vez de `while/until` cuando necesites un ciclo infinito.

    ```ruby
    # mal
    while true
      do_something
    end

    until false
      do_something
    end

    # bien
    loop do
      do_something
    end
    ```


* Usa `Kernel#loop` con break en lugar de `begin/end/until` o `begin/end/while`
  para validar al final de cada ciclo.

   ```ruby
   # mal
   begin
     puts val
     val += 1
   end while val < 0

   # bien
   loop do
     puts val
     val += 1
     break unless val < 0
   end
   ```

* Omite los paréntesis alrededor de los parámetros para los métodos
  que forman parte de un DSL interno (ejemplo: Rake, Rails, RSpec),
  métodos que tengan "keyword" status en Ruby (ejemplo: `attr_reader`,
  `puts`) y métodos accesores de atributos. Usa paréntesis alrededor
  de los argumentos de todas las otras llamadas a métodos.

    ```ruby
    class Person
      attr_reader :name, :age

      # omitted
    end

    temperance = Person.new('Temperance', 30)
    temperance.name

    puts temperance.age

    x = Math.sin(y)
    array.delete(e)

    bowling.score.should == 0
    ```

* Omite las llaves externas alrededor de las opciones implícitas
  de un hash.

    ```ruby
    # mal
    user.set({ name: 'John', age: 45, permissions: { read: true } })

    # bien
    user.set(name: 'John', age: 45, permissions: { read: true })
    ```

* Omite tanto las llaves externas como los paréntesis para métodos que formen
  parte de un DSL interno.

    ```ruby
    class Person < ActiveRecord::Base
      # mal
      validates(:name, { presence: true, length: { within: 1..10 } })

      # bien
      validates :name, presence: true, length: { within: 1..10 }
    end
    ```

* <a name="single-action-blocks"></a>
  Usa la invocación de procesos cuando solo realices una operacion en un bloque

  ```ruby
  # mal
  names.map { |name| name.upcase }

  # bien
  names.map(&:upcase)
  ```

* Elige `{...}` por sobre `do...end` para bloques de una línea. Evita
  el uso de `{...}` para bloques multilíneas (encadenamiento de multilínea
  siempre es horrible). Siempre usá `do...end` para "contorl de flujo" y
  "definiciones de métodos" (e.g. en Rakefiles y algunos DSLs). Evita usar
  `do...end` cuando estés encadenando métodos.

    ```ruby
    names = ['Bozhidar', 'Steve', 'Sarah']

    # mal
    names.each do |name|
      puts name
    end

    # bien
    names.each { |name| puts name }

    # mal
    names.select do |name|
      name.start_with?('S')
    end.map { |name| name.upcase }

    # bien
    names.select { |name| name.start_with?('S') }.map(&:upcase)
    ```

    Puede ser que algunas personas piensen que el encadenamiento en multilínea se vería bien con
    el uso de {...}, pero en realidad deberían preguntarse a sí mismos - es el código realmente
    legible y los contenidos de los bloques pueden ser extraídos con métodos elegantes?

* Evita usar `return` cuando no se requiera realizar control de flujo.

    ```ruby
    # mal
    def some_method(some_arr)
      return some_arr.size
    end

    # bien
    def some_method(some_arr)
      some_arr.size
    end
    ```

* Evita usar `self` cuando no es necesario. (Solo se necesita cuando se sobreescribe el valor de la variable propia de la clase.)

    ```ruby
    # mal
    def ready?
      if self.last_reviewed_at > self.last_updated_at
        self.worker.update(self.content, self.options)
        self.status = :in_progress
      end
      self.status == :verified
    end

    # bien
    def ready?
      if last_reviewed_at > last_updated_at
        worker.update(content, options)
        self.status = :in_progress
      end
      status == :verified
    end
    ```

* Como convención, evita oscurecer métodos con variables locales, excepto que ambos sean lo mismo.

    ```ruby
    class Foo
      attr_accessor :options

      # ok
      def initialize(options)
        self.options = options
        # both options and self.options are equivalent here
      end

      # mal
      def do_something(options = {})
        unless options[:when] == :later
          output(self.options[:message])
        end
      end

      # bien
      def do_something(params = {})
        unless params[:when] == :later
          output(options[:message])
        end
      end
    end
    ```

* No uses el valor de retorno de `=` (asignación) en expresiones
  condicionales a menos que la asignación se encuentre entre paréntesis.
  Esta es una expresión bastante popular entre los Rubyistas que se
  refiere a veces como *asignación segura en condiciones*.

    ```ruby
    # mal (+ una advertencia)
    if v = array.grep(/foo/)
      do_something(v)
      ...
    end

    # bien (MRI todavía se quejaría, per RuboCop no)
    if (v = array.grep(/foo/))
      do_something(v)
      ...
    end

    # bien
    v = array.grep(/foo/)
    if v
      do_something(v)
      ...
    end
    ```
* <a name="self-assignment"></a>
  Usa las abreviaturas para asignar valores después de una operación.

  ```ruby
  # mal
  x = x + y
  x = x * y
  x = x**y
  x = x / y
  x = x || y
  x = x && y

  # bien
  x += y
  x *= y
  x **= y
  x /= y
  x ||= y
  x &&= y
  ```

* Usa `||=` libremente para inicializar variables.

    ```ruby
    # asigna el nombre Bozhidar, solo si la variable 'name' es nil o false
    name ||= 'Bozhidar'
    ```

* No uses `||=` para inicializar variables booleanas. (Considera qué
pasaría si el valor actual fuese `false`.)

    ```ruby
    # mal - asignaría true a enabled aunque ya era false
    enabled ||= true

    # bien
    enabled = true if enabled.nil?
    ```

* <a name="double-amper-preprocess"></a>
  Usa `&&=` para preprocesar variables que pueden no existir.
  Usando `&&=` cambiarás el valor de la variable, solo si existe, 
  eliminando la necesidad de comprobar su existencia usando un `if`.

  ```ruby
  # mal
  if something
    something = something.downcase
  end

  # mal
  something = something ? something.downcase : nil

  # ok
  something = something.downcase if something

  # bien
  something = something && something.downcase

  # mejor
  something &&= something.downcase
  ```

* Evita el uso explícito del operador de igualdad idéntica `===`.
  Como su nombre indica, está destinado a ser utilizado
  implícitamente por expresiones `case` y fuera de ellas provee
  código bastante confuso.

    ```ruby
    # mal
    Array === something
    (1..100) === 7
    /something/ === some_string

    # bien
    something.is_a?(Array)
    (1..100).include?(7)
    some_string =~ /something/
    ```
* <a name="eql"></a>
  No uses `eql?` cuando puedes usar `==`. 
  El comparador de semantica estricto ofrecido por `eql?` 
  es raramente necesitado en la práctica.

  ```ruby
  # mal - eql? es lo mismo que == para strings
  'ruby'.eql? some_str

  # bien
  'ruby' == some_str

  # eql? tiene sentido aqui, si se quiere diferenciar entre Integer y Float 1
  1.0.eql? x 
  ```

* Evita usar variables especiales de tipo Perl (como `$:`, `$;`, etc.). Son bastante crípticas y su uso en cualquier lugar excepto scripts de una línea está desalentado. Usa los alias amigables para humanos proporcionados por la librería `English`.

    ```ruby
    # mal
    $:.unshift File.dirname(__FILE__)

    # bien
    require 'English'
    $LOAD_PATH.unshift File.dirname(__FILE__)
    ```

* Nunca uses un espacio entre el nombre de un método y la apertura de un paréntesis.

    ```ruby
    # mal
    f (3 + 2) + 1

    # bien
    f(3 + 2) + 1
    ```

* Si el primer argumento de un método comienza con un paréntesis abierto,
  siempre utilizá paréntesis en la invocación del método. Por ejemplo,
  escribe `f ((3 + 2) + 1)`.

* Siempre ejecutá el intérprete de Ruby con la opción `-w`, para que
avise si se olvida alguna de las reglas anteriores!

* <a name="no-nested-methods"></a>
  No uses métodos anidados, mejor usa las funciones lambda.
  Los métodos anidados actualmente producen métodos en el mismo ámbito (ejemplo: clases)
  Ademas el método anidado será redefinido cada vez que se llame al metodo que lo contiene.

  ```ruby
  # mal
  def foo(x)
    def bar(y)
      # body omitted
    end

    bar(x)
  end

  # bien - aunque es igual a lo anterior, la mejora es que 'bar' no será redefinido cada vez que se llame 'foo'
  def bar(y)
    # body omitted
  end

  def foo(x)
    bar(x)
  end

  # bien tambíen
  def foo(x)
    bar = ->(y) { ... }
    bar.call(x)
  end
  ``

* Usa la nueva sintaxis de lambda literal para bloques de una sola línea.
  Usa el método `lambda` para bloques multilínea.

    ```ruby
    # mal
    l = lambda { |a, b| a + b }
    l.call(1, 2)

    # correcto, pero se ve extremadamente incómodo
    l = ->(a, b) do
      tmp = a * 7
      tmp * b / 50
    end

    # bien - una sola linea
    l = ->(a, b) { a + b }
    l.call(1, 2)

    # bien - bloque multilinea
    l = lambda do |a, b|
      tmp = a * 7
      tmp * b / 50
    end
    ```
* <a name="stabby-lambda-with-args"></a>
  No omitas los parentesis cuando estas definiendo una función lambda que utiliza parámetros.

  ```ruby
  # mal
  l = ->x, y { something(x, y) }

  # bien
  l = ->(x, y) { something(x, y) }
  ```

* <a name="stabby-lambda-no-args"></a>
  Omite los paréntesis si tu función lambda no necesita parámetros.

  ```ruby
  # mal
  l = ->() { something }

  # bien
  l = -> { something }
  ```

* Elige `proc` por sobre `Proc.new`.

    ```ruby
    # mal
    p = Proc.new { |n| puts n }

    # bien
    p = proc { |n| puts n }
    ```

* Elige `proc.call()` por sobre `proc[]` o `proc.()` tanto para lambdas y procs.

    ```ruby
    # mal - se ve similar a un acceso de Enumeración
    l = ->(v) { puts v }
    l[1]

    # también mal - sintaxis no común
    l = ->(v) { puts v }
    l.(1)

    # bien
    l = ->(v) { puts v }
    l.call(1)
    ```

* Usa `_` para los parámetros sin usar de bloques.

    ```ruby
    # mal
    result = hash.map { |k, v| v + 1 }

    # bien
    result = hash.map { |_, v| v + 1 }
    ```

* Usa `$stdout/$stderr/$stdin` en lugar de
  `STDOUT/STDERR/STDIN`. `STDOUT/STDERR/STDIN` son constantes, y
  mientras que puedas reasignar constantes (posiblemente para redirigr
  un proceso) en Ruby, vas a tener una advertencia del intérprete si
  hacés eso.

* Usa `warn` en lugar de `$stderr.puts`. Aparte de ser más conciso y
claro, `warn` te permite suprimir advertencias si lo necesitás
(seteando el nivel de advertencia a 0 via `-W0`).

* Elige usar `sprintf` y su alias `format` por sobre el método
  críptico `String#%`.

    ```ruby
    # mal
    '%d %d' % [20, 10]
    # => '20 10'

    # bien
    sprintf('%d %d', 20, 10)
    # => '20 10'

    # mejor
    sprintf('%<first>d %<second>d', first: 20, second: 10)
    # => '20 10'

    # bien
    format('%d %d', 20, 10)
    # => '20 10'

    # mejor
    format('%<first>d %<second>d', first: 20, second: 10)
    # => '20 10'
    ```

* <a name="named-format-tokens"></a>
  Cuando usas tokens de nombres, por favor usa `%<name>s` por sobre `%{name}`, porque al momento de referenciarlos
  estás referenciando el tipo de valor que tomará el token.

  ```ruby
  # mal
  format('Hello, %{name}', name: 'John')

  # bien
  format('Hello, %<name>s', name: 'John')
  `

* Elige el uso de `Array#join` por sobre el críptico `Array#*` con
  un argumento string.

    ```ruby
    # mal
    %w(one two three) * ', '
    # => 'one, two, three'

    # bien
    %w(one two three).join(', ')
    # => 'one, two, three'
    ```

* Usa `[*var]` o `Array()` en lugar de la verificación explícita `Array`,
  cuando trabajes con una variable que quieras tratar como un Array, pero
  no estás seguro que sea un array.

    ```ruby
    # mal
    paths = [paths] unless paths.is_a? Array
    paths.each { |path| do_something(path) }

    # bien
    [*paths].each { |path| do_something(path) }

    # bien (y un poquito más legible)
    Array(paths).each { |path| do_something(path) }
    ```

* Usa rangos o `Comparable#between?` en lugar de una comparación lógica
  compleja cuando sea posible.

    ```ruby
    # mal
    do_something if x >= 1000 && x <= 2000

    # bien
    do_something if (1000..2000).include?(x)

    # bien
    do_something if x.between?(1000, 2000)
    ```

* Elige el uso de métodos subyacentes en lugar de las comparaciones
  explícitas con `==`. Comparaciones numéricas están OK.

    ```ruby
    # mal
    if x % 2 == 0
    end

    if x % 2 == 1
    end

    if x == nil
    end

    # bien
    if x.even?
    end

    if x.odd?
    end

    if x.nil?
    end

    if x.zero?
    end

    if x == 0
    end
    ```

* <a name="no-non-nil-checks"></a>
  No uses explicitamente no-`nil` para validar una variable, 
  a menos que estés tratando con variables boleanas.

    ```ruby
    # mal
    do_something if !something.nil?
    do_something if something != nil

    # bien
    do_something if something

    # bien - solo si se está seguro de que la variable es boleana
    def value_set?
      !@some_boolean.nil?
    end
    ```

* Evita el uso de bloques `BEGIN`.

* Nunca uses bloques `END`. En su lugar usá `Kernel#at_exit`.

    ```ruby
    # mal

    END { puts 'Goodbye!' }

    # bien

    at_exit { puts 'Goodbye!' }
    ```

* Evita el uso de flip-flops.

* Evita el uso de condicionales anidados para control de flujo.
  Elige una cláusula de guardia (guard clause) cuando puedas afirmar datos inválidos.
  Una cláusula de guardia es un condicional al principio de una función que trata de
  salir de ella tan pronto como pueda.

    ```ruby
    # mal
      def compute_thing(thing)
        if thing[:foo]
          update_with_bar(thing)
          if thing[:foo][:bar]
            partial_compute(thing)
          else
            re_compute(thing)
          end
        end
      end

    # bien
      def compute_thing(thing)
        return unless thing[:foo]
        update_with_bar(thing[:foo])
        return re_compute(thing) unless thing[:foo][:bar]
        partial_compute(thing)
      end
    ```

  Prefiere `next` en los ciclos (loop) en vez de bloques condicionales.

  ```ruby
  # mal
  [0, 1, 2, 3].each do |item|
    if item > 1
      puts item
    end
  end

  # bien
  [0, 1, 2, 3].each do |item|
    next unless item > 1
    puts item
  end
  ```


* <a name="map-find-select-reduce-size"></a>
* Elige `map` por sobre `collect`, `find` por sobre `detecet`, `select`
  por sobre `find_all`, `reduce` por sobre `inject` y `size` por sobre
  `length`. No es un requerimiento difícil; si el uso de alias realza
  la legibilidad, está bien usarlos. Los métodos de rima son heredados
  de Smalltalk y no son comunes en otros lenguajes de programación. La
  razón para usar `select` por sobre `find_all` es porque va muy bien
  junto con `reject` y su nombre es bastante auto-explicativo.

* <a name="count-vs-size"></a>
  No uses `count` como sustituto de `size`. Para los objetos de tipo `Enumerable`, pues
  el objeto completo se iterará para saber el numero de elementos.

  ```ruby
  # mal
  some_hash.count

  # bien
  some_hash.size
  ```

* <a name="flat-map"></a>
  Usa `flat_map` en vez de `map` + `flatten`.  Esto no se aplica para arrays con una 
  profundidad mayor a 2, por ejemplo.  Si `users.first.songs == ['a', ['b',['c']]]`,
  entonces usa `map + flatten` en lugar de `flat_map`. `flat_map` aplana el array con profundidad 1, 
  mientras que `flatten` lo aplana completamente.

  ```ruby
  # mal
  all_songs = users.map(&:songs).flatten.uniq

  # bien
  all_songs = users.flat_map(&:songs).uniq
  ```

* <a name="reverse-each"></a>
  Prefiere `reverse_each` to `reverse.each` porque algunas clases que incluyen `Enumerable` 
  pueden proveer una implementacion eficiente. Incluso en el peor caso si la clase no implementa una mejora
  the general desde `Enumerable` será tan eficiente como `reverse.each`.

  ```ruby
  # mal
  array.reverse.each { ... }

  # bien
  array.reverse_each { ... }


## Nombres

> Las únicas dificultades reales en programación son invalidación de
> caché y nombrar cosas. <br/>
> -- Phil Karlton

* Nombres de referencia en Inglés.

    ```ruby
    # mal - referencia no está utilizando caracteres ascii
    заплата = 1_000

    # mal - la referencia es una palabra búlgara, escrita con caracteres latinos (en lugar de Cirílico)
    zaplata = 1_000

    # bien
    salary = 1_000
    ```
* Usa `snake_case` para los símbolos, métodos y variables.

    ```ruby
    # mal
    :'some symbol'
    :SomeSymbol
    :someSymbol

    someVar = 5

    def someMethod
      ...
    end

    def SomeMethod
     ...
    end

    # bien
    :some_symbol

    def some_method
      ...
    end
    ```

* <a name="snake-case-symbols-methods-vars-with-numbers"></a>
  No separes lo números de las letras, símbolos, métodos o variables.

  ```ruby
  # mal
  :some_sym_1

  some_var_1 = 1

  def some_method_1
    # some code
  end

  # bien
  :some_sym1

  some_var1 = 1

  def some_method1
    # some code
  end
  ```

* Usa `CamelCase` para clases y módulos.  (Mantené en mayúsculas los
  acrónimos como HTTP, RFC, XML.)

    ```ruby
    # mal
    class Someclass
      ...
    end

    class Some_Class
      ...
    end

    class SomeXml
      ...
    end

    # bien
    class SomeClass
      ...
    end

    class SomeXML
      ...
    end
    ```

* <a name="snake-case-files"></a>
  Usa `snake_case` para nombrar archivos, ejemplo. `hello_world.rb`.

* <a name="snake-case-dirs"></a>
  Usa `snake_case` para nombrar directorios, ejemplo.
  `lib/hello_world/hello_world.rb`.

* <a name="one-class-per-file"></a>
  Trata de tener solo una Clase o Módulo por archivo fuente. Nombra el archivo con el nombre
  de la Clase o Módulo, pero reemplazando el nombre de `CamelCase` a `snake_case`.
  ejemplo. `some_class.rb`

    ```ruby
    # bien
    class SomeClass
      # No body
    end
    ```  

* Usa `SCREAMING_SNAKE_CASE` para las constantes.

    ```ruby
    # mal
    SomeConst = 5

    # bien
    SOME_CONST = 5
    ```

* Los nombres de los métodos que afirman (métodos que devuelven un
  valor booleano) deben terminar con un signo de pregunta.
  (ejemplo: `Array#empty?`). Los métodos que no devuelvan un booleano,
  no deben terminar con un signo de pregunta.

* <a name="bool-methods-prefix"></a>
  Evita usar prefijos auxiliares como (`is`, `does`, or `can`) para los nombres de Métodos.
  Estas palabras son redundantes e inconsistentes con el estilo de Métodos boleanos que hay en Ruby core library, 
  como por ejemplo `empty?` o `include?`.

  ```ruby
  # mal
  class Person
    def is_tall?
      true
    end

    def can_play_basketball?
      false
    end

    def does_like_candy?
      true
    end
  end

  # bien
  class Person
    def tall?
      true
    end

    def basketball_player?
      false
    end

    def likes_candy?
      true
    end
  end
  ```

* Los nombres de métodos potencialmente *peligrosos* (ejemplo: métodos
  que modifican `self` o los argumentos, `exit!` - no ejecuta
  finalizadores como lo hace `exit`, etc.) deben terminar con un signo
  de exclamación solo si existe una versión segura de ese método
  *peligroso*.

    ```ruby
    # mal - no hay ningún método 'seguro' que se llame igual
    class Person
      def update!
      end
    end

    # bien
    class Person
      def update
      end
    end

    # bien
    class Person
      def update!
      end

      def update
      end
    end
    ```

* Define un método non-bang (seguro) en relación al método bang
  (peligroso) si es posible.

    ```ruby
    class Array
      def flatten_once!
        res = []

        each do |e|
          [*e].each { |f| res << f }
        end

        replace(res)
      end

      def flatten_once
        dup.flatten_once!
      end
    end
    ```

* Cuando se usa `reduce` con bloques chicos, nombrá los argumentos
  `|a, e|` (accumulator, element).
* Cuando definas operadores binarios, nombrá el argumento como `other`
  (`<<` y `[]` son excepciones a la regla, ya que su semántica es
  diferente).

    ```ruby
    def +(other)
      # body omitted
    end
    ```

## Comentarios

> El buen código es su mejor documentación. Cuando estés a punto de
> agregar un comentario, preguntate: "¿Cómo puedo mejorar el código
> para que no sea necesario este comentario?" Mejorá el código y luego
> documentalo para que hacerlo aún más claro. <br/>
> -- Steve McConnell

* Escribe código autodocumentado e ignorá el resto de esta sección. En serio!
* Escribe tus comentarios en Inglés para evitar problemas con los caracteres
  especiales.
* Usa un espacio entre el primer caracter `#` del comentario y el texto
  propio del comentario.
* Los comentarios que son más largos que una palabra son capitalizados y usan
  puntuación. Usa [un espacio](http://es.wikipedia.org/wiki/Espacio_entre_oraciones) luego de los puntos.
* Evita comentarios supérfluos.

    ```ruby
    # mal
    counter += 1 # Increments counter by one.
    ```

* Mantené los comentarios existentes actualizados. Un comentario viejo es peor
que no utilizar comentarios.

> El buen código es como un buen chiste - no necesita explicación <br/>
> -- Russ Olsen

* Evita escribir comentarios para explicar código malo. Refactorizá el código
  para hacerlo más auto-explicativo. (Hazlo o no lo hagas - no hay intentos. --Yoda)

### Apuntes de Comentarios

* Generalmente los apuntes se tienen que escribir inmediatamente en la primer
  línea encima del código a comentar.
* La palabra clave del apunte es seguida de dos puntos y un espacio, y luego
  una nota que describe el problema.
* Si se son necesarias varias líneas para describir el problema, las líneas
  subsiguientes tienen que tener una sangría de dos espacios después del `#`.

    ```ruby
    def bar
      # FIXME: This has crashed occasionally since v3.2.1. It may
      #   be related to the BarBazUtil upgrade.
      baz(:quux)
    end
    ```

* En los casos donde el problema es tan obvio que cualquier documentación
  fuese redundante, los apuntes se pueden dejar al final de esa línea, sin
  ninguna nota. Su uso debe ser la excepción y no la regla.

    ```ruby
    def bar
      sleep 100 # OPTIMIZE
    end
    ```

* Usa `TODO` para resaltar funcionalidades faltantes o funcionalidades que
  deben agregarse más adelante.
* Usa `FIXME` para resaltar código roto que necesita ser arreglado.
* Usa `OPTIMIZE` para resaltar código lento o ineficiente que pueda causar
  problemas de performance.
* Usa `HACK` para resaltar código que utilice prácticas cuestionables que
  no se vean bien y que debería ser refactorizado lo antes posible.
* Usa `REVIEW` para resaltar cualquier cosa que debe ser revisada para
  confirmar que está funcionando como debería. Por ejemplo: `REVIEW: Are
  we sure this is how the client does X currently?`
* Usa otra palabra como apunte si sentís que sea apropiado, pero asegurate
  de documentarlas en el `README` de tu proyecto o similar.


### Comentarios mágicos (Magic Comments)

* <a name="magic-comments-first"></a>
  Posiciona un comentario mágico sobre todo el código y la documentacion de un archivo 
  (exceptuando los [Shebangs](https://es.wikipedia.org/wiki/Shebang), hablaremos de ellos mas adelante).

  ```ruby
  # mal
  # Some documentation about Person

  # frozen_string_literal: true
  class Person
  end

  # bien
  # frozen_string_literal: true

  # Some documentation about Person
  class Person
  end
  ```

* <a name="below-shebang"></a>
  Posiciona un comentario mágico por debajo del `shebangs` si hay alguno presente en el archivo.

  ```ruby
  # mal
  # frozen_string_literal: true
  #!/usr/bin/env ruby

  App.parse(ARGV)

  # bien
  #!/usr/bin/env ruby
  # frozen_string_literal: true

  App.parse(ARGV)
  ```

* <a name="one-magic-comment-per-line"></a>
  Usa un comentario mágico por linea, si necesitas usar mas de uno.

  ```ruby
  # mal
  # -*- frozen_string_literal: true; encoding: ascii-8bit -*-

  # bien
  # frozen_string_literal: true
  # encoding: ascii-8bit
  ```

* <a name="separate-magic-comments-from-code"></a>
  Separa los comentarios mágicos del resto del código o de la documentacion usando una linea blanca.

  ```ruby
  # mal
  # frozen_string_literal: true
  # Some documentation for Person
  class Person
    # Some code
  end

  # bien
  # frozen_string_literal: true

  # Some documentation for Person
  class Person
    # Some code
  end
  ```

## Clases y Módulos

* Usa una estructura coherente para definir tu clase.

    ```ruby
    class Person
      # extend and include go first
      extend SomeModule
      include AnotherModule

      # constants are next
      SOME_CONSTANT = 20

      # afterwards we have attribute macros
      attr_reader :name

      # followed by other macros (if any)
      validates :name

      # public class methods are next in line
      def self.some_method
      end

      # followed by public instance methods
      def some_method
      end

      # protected and private methods are grouped near the end
      protected

      def some_protected_method
      end

      private

      def some_private_method
      end
    end
    ```

* <a name="mixin-grouping"></a>
  Separa multiples `mixins` con multiples declaraciones (lineas separadas).

  ```ruby
  # mal
  class Person
    include Foo, Bar
  end

  # bien
  class Person
    # multiple mixins go in separate statements
    include Foo
    include Bar
  end
  ```

* <a name="file-classes"></a>
  No anides Clases multilineales dentro de otra Clase.
  Intenta separar cada una en diferentes archivos dentro de una carpeta
  que se llame como la Clase en la que quieres anidarlas.
  Ejemplo.

  ```ruby
  # mal

  # foo.rb
  class Foo
    class Bar
      # 30 methods inside
    end

    class Car
      # 20 methods inside
    end

    # 30 methods inside
  end

  

  # bien

  # foo.rb
  class Foo
    # 30 methods inside
  end

  # foo/bar.rb
  class Foo
    class Bar
      # 30 methods inside
    end
  end

  # foo/car.rb
  class Foo
    class Car
      # 20 methods inside
    end
  end
  ```

* <a name="namespace-definition"></a>
  Define (y vuelve a abrir) las Clases y Módulos del Namespace utilizando un anidamiento específico.
  Usando el operador de resolucion de alcance `::` puedes conducir a sorprendentes busquedas de constantes debido al alcance léxico de Ruby
  [lexical scoping](https://cirw.in/blog/constant-lookup.html), que depende del Módulo que se anida desde  el punto de la definición.
  Ejemplo.

  ```ruby
  module Utilities
    class Queue
    end
  end

  # mal
  class Utilities::Store
    Module.nesting # => [Utilities::Store]

    def initialize
      # Refers to the top level ::Queue class because Utilities isn't in the
      # current nesting chain.
      @queue = Queue.new
    end
  end

  # bien
  module Utilities
    class WaitingList
      Module.nesting # => [Utilities::WaitingList, Utilities]

      def initialize
        @queue = Queue.new # Refers to Utilities::Queue
      end
    end
  end
  ```

* Prefiere los módulos a las clases que únicamente  tienen métodos de clases. 
  Las clases deben ser utilizadas únicamente cuando tiene sentido crear instancias fuera de ellas.

    ```ruby
    # mal
    class SomeClass
      def self.some_method
        # body omitted
      end

      def self.some_other_method
      end
    end

    # bien
    module SomeClass
      module_function

      def some_method
        # body omitted
      end

      def some_other_method
      end
    end
    ```

* Elige el uso de `module_function` por sobre `extend self` cuando
  quieras cambiar los métodos de instancia de un módulo en un método
  de clase.

    ```ruby
    # mal
    module Utilities
      extend self

      def parse_something(string)
        # do stuff here
      end

      def other_utility_method(number, string)
        # do some more stuff
      end
    end

    # bien
    module Utilities
      module_function

      def parse_something(string)
        # do stuff here
      end

      def other_utility_method(number, string)
        # do some more stuff
      end
    end
    ```

* Cuando diseñes jerarquías de clases, asegurate de que se ajuseten al
  [Principio de Sustitución de Liskov](http://es.wikipedia.org/wiki/Principio_de_sustituci%C3%B3n_de_Liskov).
* Tratá de hacer tus clases tan
  [SOLID](http://es.wikipedia.org/wiki/SOLID_(object-oriented_design))
  como sea posible.
* Siempre proporciona un método `to_s` para clases que representen
  objetos de dominio.

    ```ruby
    class Person
      attr_reader :first_name, :last_name

      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end

      def to_s
        "#{@first_name} #{@last_name}"
      end
    end
    ```

* Usa la familia de funciones `attr` para definir accesores triviales
o mutators.

    ```ruby
    # mal
    class Person
      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end

      def first_name
        @first_name
      end

      def last_name
        @last_name
      end
    end

    # bien
    class Person
      attr_reader :first_name, :last_name

      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end
    end
    ```

* <a name="accessor_mutator_method_names"></a>
  Pra los `accessors` y `mutators`, evita usar prefijos como `get_` and `set_` en los nombres de funciones.
  Es una convención en Ruby usar el nombre del atributo (`attr_name`) para las funciones de tipo (readers) y 
  `attr_name=` para mutators (writers).

  ```ruby
  # mal
  class Person
    def get_name
      "#{@first_name} #{@last_name}"
    end

    def set_name(name)
      @first_name, @last_name = name.split(' ')
    end
  end

  # bien
  class Person
    def name
      "#{@first_name} #{@last_name}"
    end

    def name=(name)
      @first_name, @last_name = name.split(' ')
    end
  end
  ```

* Evita el uso de `attr`. En su lugar usá `attr_reader` y `attr_accessor`.

    ```ruby
    # mal - crea un único accesor de atributo (deprecado en 1.9)
    attr :something, true
    attr :one, :two, :three # behaves as attr_reader

    # bien
    attr_accessor :something
    attr_reader :one, :two, :three
    ```

* Considera usar un `Struct.new` para definir una clase.
  `Struct.new` define por ti los accesores triviales, 
  constructor y operadores de comparación.

    ```ruby
    # bien
    class Person
      attr_reader :first_name, :last_name

      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end
    end

    # mucho mejor
    Person = Struct.new(:first_name, :last_name) do
    end
    ````

* No extiendas un `Struct.new` - ya de por si es una clase nueva. Extendiéndolo introduce un nivel de clase superfluo y también puede introducir errores extraños si el archivo es requerido múltiples veces.

  ```ruby
  # mal
  class Person < Struct.new(:first_name, :last_name)
  end

  # bien
  Person = Struct.new(:first_name, :last_name)
  ```

* Considera agregar un método factory para proveer más formas sensibles
de crear instancias de una clase en particular.

    ```ruby
    class Person
      def self.create(options_hash)
        # body omitted
      end
    end
    ```

* Prefiere [duck-typing](http://es.wikipedia.org/wiki/Duck_typing) en lugar de herencia.

    ```ruby
    # mal
    class Animal
      # abstract method
      def speak
      end
    end

    # extend superclass
    class Duck < Animal
      def speak
        puts 'Quack! Quack'
      end
    end

    # extend superclass
    class Dog < Animal
      def speak
        puts 'Bau! Bau!'
      end
    end

    # bien
    class Duck
      def speak
        puts 'Quack! Quack'
      end
    end

    class Dog
      def speak
        puts 'Bau! Bau!'
      end
    end
    ```

* Evita el uso de variables de clas (`@@`) debido a sus comportamientos
"sucios" en la herencia.

    ```ruby
    class Parent
      @@class_var = 'parent'

      def self.print_class_var
        puts @@class_var
      end
    end

    class Child < Parent
      @@class_var = 'child'
    end

    Parent.print_class_var # => will print "child"
    ```

    Como puedas ver todas las clases en una jerarquía de clases en realidad
    comparten una variable de clase. Por lo general las variables de instancia
    de clase deben ser preferidas a las variables de clase.

* Asigna niveles de visibilidad adecuados para los métodos (`private`,
  `protected`) de acuerdo con su correcto uso. No vayas por ahi dejando
  todo `public` (que es el estado predeterminado). Después de todo
  ahora estamos programando en *Ruby*, no en *Python*.
* Indenta las palabas `public`, `protected`, y `private` tanto como los
  métodos a los que se aplican. Dejá una línea en blanco antes y después
  del modificador de visibilidad, en orden de enfatizar que eso aplica a
  todos los métodos que se encuentran debajo.

    ```ruby
    class SomeClass
      def public_method
        # ...
      end

      private

      def private_method
        # ...
      end

      def another_private_method
        # ...
      end
    end
    ```

* Usa `def self.method` para definir métodos singleton. Eso hace el
  código más fácil de refactorizar, debido a que el nombre de la clase
  no está repetido.

    ```ruby
    class TestClass
      # mal
      def TestClass.some_method
        # body omitted
      end

      # bien
      def self.some_other_method
        # body omitted
      end

      # También es posible y conveniente cuando
      # quieras definir muchos métodos singleton.
      class << self
        def first_method
          # body omitted
        end

        def second_method_etc
          # body omitted
        end
      end
    end
    ```

* <a name="alias-method-lexically"></a>
  Ten encuenta que el uso de `alias` alcanza a los Métodos que estan dentro de la clase 
  al igual que el uso de `self`. Communica claramente a el usuario que el desvío realizado por
  tu alias no alterará a la Clase en tiempo de ejecución ni a las Subclases a menos que se haga de 
  forma explícita..

  ```ruby
  class Westerner
    def first_name
      @names.first
    end

    alias given_name first_name
  end
  ```

  Desde que `alias`, al igual que `def`, es una palabra reservada 
  úsala preferentemente con palabras normales como argumentos, no con símbolos
  o Strings. Ejemplo. usa `alias foo bar`, not `alias :foo :bar`.

  De igual forma ten cuidado en como Ruby maneja los Alias en conjunto con la Herencia.
  Un alias hace referencia al método para el cual fué definido en el tiempo en el que dicho alias fué creado
  y no funcionará dinamicamente

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end
  end
  ```

  En el ejemplo de arriba `Fugitive#given_name` podría seguir llamando 
  al Método original de su clase padre `Westerner#first_name` y no a `Fugitive#first_name`. 
  Para sobreescribir también el comportamiento de `Fugitive#given_name`, tu tendrías que 
  redefinir también el alias en la clase `Fugitive`, como sigue a continuación.

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end

    alias given_name first_name
  end
  ```

* <a name="alias-method"></a>
  Siempre usa `alias_method` cuando quieres renombrar los Métodos de 
  un Módulo, Clases o Clases Singleton en tiempo de ejecución, 
  de lo contrario al igual que `alias` podría conducir a casos imprevistos.

  ```ruby
  module Mononymous
    def self.included(other)
      other.class_eval { alias_method :full_name, :given_name }
    end
  end

  class Sting < Westerner
    include Mononymous
  end
  ```

* <a name="class-and-self"></a>
  Cuando el Método de  una clase (o Módulo) llama a otros Métodos del mismo tipo, 
  se omite el uso de `self` o el uso del propio nombre de la Clase seguido por un `.` 
  
  Esto se ve muy a menudo en "Clases de Servicio" o en otros conceptos similares
  donde la Clase se trata como si fuera una función. Esta convencion tiende a 
  reducir la repetitividad en este tipo de clases.

  ```ruby
  class TestClass
    # mal - Pues esta forma genera mucho trabajo 
    #        cuando la Clase es renombrada o un Métdodo es movido
    def self.call(param1, param2)
      TestClass.new(param1).call(param2)
    end

    # mal - mas palabras, que no son necesarias
    def self.call(param1, param2)
      self.new(param1).call(param2)
    end

    # bien
    def self.call(param1, param2)
      new(param1).call(param2)
    end

    # ...other methods...
  end
  ```

## Excepciones

* Señaliza las excepciones utilizando el método `fail`. Usa `raise`
  solo cuando quieras atrapar una excepción y quieras volver a
  llamarlo (porque no está fallando, sino que está lanzando una
  excepción de forma explícita y a propósito).

    ```ruby
    begin
      fail 'Oops'
    rescue => error
      raise if error.message != 'Oops'
    end
    ```

* No especifiques explícitamente `RuntimeError` en la versión de dos argumentos de
  `fail/raise`.

    ```ruby
    # mal
    fail RuntimeError, 'message'

    # bien - señaliza un RuntimeError por defecto
    fail 'message'
    ```

* Elige suministrar una clase de excepción y un mensaje como dos
  argumentos separados para `fail/raise`, en lugar de una instancia
  de excepción.

    ```ruby
    # mal
    fail SomeException.new('message')
    # No hay una forma de hacer `fail SomeException.new('message'), backtrace`.

    # bien
    fail SomeException, 'message'
    # Consistente con `fail SomeException, 'message', backtrace`.
    ```

* Nunca retornes desde un bloque `ensure`. Si retornás de forma explícita
  desde un método dentro de un bloque `ensure`, el retorno va a tomar
  precedente sobre cualquier excepción que sea llamada, y el método va a
  retornar como si ninguna excepción hubiera sido llamada. De hecho, la
  excepción va a ser desestimada en silencio.

    ```ruby
    def foo
      begin
        fail
      ensure
        return 'very bad idea'
      end
    end
    ```

* Usa *bloques implícitos de begin* siempre que sea posible.

    ```ruby
    # mal
    def foo
      begin
        # main logic goes here
      rescue
        # failure handling goes here
      end
    end

    # bien
    def foo
      # main logic goes here
    rescue
      # failure handling goes here
    end
    ```

* Mitigá la proliferación de bloques `begin` utilizando
  *métodos de contingencia* (un término elegido por Avdi Grimm).

    ```ruby
    # mal
    begin
      something_that_might_fail
    rescue IOError
      # handle IOError
    end

    begin
      something_else_that_might_fail
    rescue IOError
      # handle IOError
    end

    # bien
    def with_io_error_handling
       yield
    rescue IOError
      # handle IOError
    end

    with_io_error_handling { something_that_might_fail }

    with_io_error_handling { something_else_that_might_fail }
    ```

* No suprimas las excepciones.

    ```ruby
    # mal
    begin
      # an exception occurs here
    rescue SomeError
      # the rescue clause does absolutely nothing
    end

    # mal
    do_something rescue nil
    ```

* Evita usar `rescue` en su forma de modificador.

    ```ruby
    # mal - esto atrapa una excepción de la clase StandardError y sus clases hijas
    read_file rescue handle_error($!)

    # bien - esto atrapa solo las excepciones de la clase Errno::ENOENT y sus clases hijas
    def foo
      read_file
    rescue Errno::ENOENT => ex
      handle_error(ex)
    end
    ```


* No uses excepciones para control de flujo.

    ```ruby
    # mal
    begin
      n / d
    rescue ZeroDivisionError
      puts 'Cannot divide by 0!'
    end

    # bien
    if d.zero?
      puts 'Cannot divide by 0!'
    else
      n / d
    end
    ```

* Evita rescatar la clase `Exception`. Esto va a atrapar la señal `exit`, 
  siendo necesario que pases `kill -9` al proceso para poder terminarlo.

    ```ruby
    # mal
    begin
      # calls to exit and kill signals will be caught (except kill -9)
      exit
    rescue Exception
      puts "you didn't really want to exit, right?"
      # exception handling
    end

    # bien
    begin
      # a blind rescue rescues from StandardError, not Exception as many
      # programmers assume.
    rescue => e
      # exception handling
    end

    # también está bien
    begin
      # an exception occurs here

    rescue StandardError => e
      # exception handling
    end

    ```

* Escribe excepciones más específicas primero, de otra forma nunca
  van a poder ser atrapadas.

    ```ruby
    # mal
    begin
      # some code
    rescue Exception => e
      # some handling
    rescue StandardError => e
      # some handling
    end

    # bien
    begin
      # some code
    rescue StandardError => e
      # some handling
    rescue Exception => e
      # some handling
    end
    ```

* Cierra recursos externos abiertos por tu programa en un bloque
ensure.

    ```ruby
    f = File.open('testfile')
    begin
      # .. process
    rescue
      # .. handle error
    ensure
      f.close unless f.nil?
    end
    ```

* <a name="auto-release-resources"></a>
  Usa versionesde Méetodos de recursos que automaticamente limpian cuando es posible.

  ```ruby
  # mal - tu debes cerrar especificamente el archivo
  f = File.open('testfile')
  # some action on the file
  f.close

  # bien - El archivo se cerrará automaticamente
  File.open('testfile') do |f|
    # some action on the file
  end
  ```

* Prefiere el uso de excepciones de la standard library en lugar
de crear nuevas clases de excepciones.

## Colecciones

* Prefiere el uso de la notación para arrays literales y creación de hashes
(excepto que necesites pasar parámetros a sus constructores).

    ```ruby
    # mal
    arr = Array.new
    hash = Hash.new

    # bien
    arr = []
    hash = {}
    ```

* Prefiere usar `%w` en lugar de la sintaxis array literal cuando
necesites un array de palabras (strings no-vacías sin espacios ni
caracteres espaciles en cada uno). Aplicá esta regla solo en los arrays
de dos o más elementos.

    ```ruby
    # mal
    STATES = ['draft', 'open', 'closed']

    # bien
    STATES = %w(draft open closed)
    ```

* Prefiere `%i` en lugar de la sintaxis de array literal cuando
necesites un array de símbolos (y no necesitás mantener compatibilidad
con Ruby 1.9). Aplicá esta regla sólo para arrays con dos o más
elementos.

    ```ruby
    # mal
    STATES = [:draft, :open, :closed]

    # bien
    STATES = %i(draft open closed)
    ```

* Evita la creación de grandes espacios en arrays.

    ```ruby
    arr = []
    arr[100] = 1 # y así tenés un array con un montón de nils
    ```

* Cuando estés accediendo al primer o último elmento de un array, prefiere
   usar `first` o `last` en lugar de `[0]` o `[-1]`.

* Usa `Set` en lugar de `Array` cuando estés tratando con elementos
  únicos. `Set` implementa una colección de valores desordenados sin
  duplicados. Esto es un híbrido de la vacilidad interoperacional
  intuitiva de `Array`, y velocidad de lectura de `Hash`.

    ```ruby
    require 'set'
    s = Set.new [4,1,1,1,2] # => #<Set: {4, 1, 2}>
    ```

* Prefiere símbolos en lugar de strings y hash keys.

    ```ruby
    # mal
    hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

    # bien
    hash = { one: 1, two: 2, three: 3 }
    ```

* Evita el uso de objetos mutables como hash keys.
* Usa la sintaxis de hash literal cuando tus hash keys sean símbolos.

    ```ruby
    # mal
    hash = { :one => 1, :two => 2, :three => 3 }

    # bien
    hash = { one: 1, two: 2, three: 3 }
    ```
* <a name="no-mixed-hash-syntaces"></a>
  No mezcles la sintaxis de Ruby 1.9 con las flechas de hash en la misma definicion de hash
  Usa las flechas solamente cuando la clave del hash no es un Símbolo.

  ```ruby
  # mal
  { a: 1, 'b' => 2 }

  # bien
  { :a => 1, 'b' => 2 }
  ```

* Usa `Hash#key?` en lugar de `Hash#has_key?` y `Hash#value?` en lugar de
  `Hash#has_value?`. Como dice Matz
  [aquí](http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/43765),
  Las funciones largas están consideradas deprecadas.

    ```ruby
    # mal
    hash.has_key?(:test)
    hash.has_value?(value)

    # bien
    hash.key?(:test)
    hash.value?(value)
    ```

* <a name="hash-each"></a>
  Usa `Hash#each_key` en vez de `Hash#keys.each` y 
  `Hash#each_value` en vez de `Hash#values.each`.

  ```ruby
  # bad
  hash.keys.each { |k| puts k }
  hash.values.each { |v| puts v }
  hash.each { |k, _v| puts k }
  hash.each { |_k, v| puts v }

  # good
  hash.each_key { |k| puts k }
  hash.each_value { |v| puts v }
  ```

* Usa `Hash#fetch` cuando estés tratando con hash keys que deben estar
presentes.

    ```ruby
    heroes = { batman: 'Bruce Wayne', superman: 'Clark Kent' }
    # mal - si generamos un error, puede que no lo veamos rápido
    heroes[:batman] # => "Bruce Wayne"
    heroes[:supermann] # => nil

    # bien - fetch genera un KeyError, haciendo obvios los problemas
    heroes.fetch(:supermann)
    ```

* Utiliza valores por defecto para hash keys usando `Hash#fetch`, opuesto a generar tu
propia lógica.

   ```ruby
   batman = { name: 'Bruce Wayne', is_evil: false }

   # mal - si solo usamos el operador || y tenemos valor falso, no vamos a tener el resultado esperado
   batman[:is_evil] || true # => true

   # bien - fetch trabaja mejor con valores falsos
   #        si la variable no está definida, obtienes el valor por defecto, en este caso true
   #        si la variable está definida, obtienes el valor de la variable, en este caso false 
   batman.fetch(:is_evil, true) # => false
   ```

* Prefiere el uso de bloques en lugar del formato por defecto de `Hash#fetch`.

   ```ruby
   batman = { name: 'Bruce Wayne' }

   # mal - si usamos el valor por defecto, se va a evaluar en el momento
   # por lo que vamos a relantizar el programa, si se utiliza múltiples veces
   batman.fetch(:powers, get_batman_powers) # get_batman_powers is an expensive call

   # bien - los bloques se evalúan sin bloquer el proceso, asi solo se llama en caso de una excepción KeyError
   batman.fetch(:powers) { get_batman_powers }
   ```

* <a name="hash-values-at"></a>
  Usa `Hash#values_at` cuando quieras obtener muchos valores consecutivamente del Hash.

  ```ruby
  # mal
  email = data['email']
  username = data['nickname']

  # bien
  email, username = data.values_at('email', 'nickname')
  ```

* Confía en el hecho de que desde Ruby 1.9 los hashes están ordenados.
* Nunca modifiques una colección mientras la estés recorriendo.

* <a name="accessing-elements-directly"></a>
  Cuando accedas a los elementos de una Coleción, evita el acceso directo
  usando `[n]`, para esto puedes usar una forma alternativa de lectura
  Esto puede salvarte de estar llamando `[]` sobre un valor `nil`.

  ```ruby
  # mal
  Regexp.last_match[1]

  # bien
  Regexp.last_match(1)
  ```

* <a name="provide-alternate-accessor-to-collections"></a>
  Si provees una acceso a una coleccion, provee tambien una forma alternativa
  se salvar a los usuarios de obtener un `nil` antes de accesar al elemento en la Colección

  ```ruby
  # mal
  def awesome_things
    @awesome_things
  end

  # bien
  def awesome_things(index = nil)
    if index && @awesome_things
      @awesome_things[index]
    else
      @awesome_things
    end
  end
  ```


## Números

* <a name="integer-type-checking"></a>
  Usa `Integer` para probar el tipo de un número entero. 
  desde que `Fixnum` depende de la plataforma, chequeando el valor de la variable 
  con él dará resultados diferentes dependiendo la arquitectura de la máquin 32-bit o 64-bit.

  ```ruby
  timestamp = Time.now.to_i

  # mal
  timestamp.is_a? Fixnum
  timestamp.is_a? Bignum

  # bien
  timestamp.is_a? Integer
  ```

* <a name="random-numbers"></a>
  Prefiere el uso de Rangos para generar numeros aleatorios.
  
  ```ruby
  # mal
  rand(6) + 1

  # bien
  rand(1..6)
  ```


## Strings

* Prefiere interpolación de strings en lugar de concatenación de strings:

    ```ruby
    # mal
    email_with_name = user.name + ' <' + user.email + '>'

    # bien
    email_with_name = "#{user.name} <#{user.email}>"

    # mejor
    email_with_name = format('%s <%s>', user.name, user.email)
    ```

* Considera el uso de interpolación de string con espacio. Hace que sea más claro
  para separar el código del string.

    ```ruby
    "#{ user.last_name }, #{ user.first_name }"
    ```

* Prefiere escribir los con una sola comilla cuando no tengás la necesidad de
  realizar interpolación o usar símbolos especiales como `\t`, `\n`, `'`, etc.

    ```ruby
    # mal
    name = "Bozhidar"

    # bien
    name = 'Bozhidar'

    # bien
    name = "De'Andre"

    ```

  * Prefiere usar comillas dobles `""` a menos que el String 
    contenga `"` o caracteres de escape que quieras suprimir.

    ```ruby
    # mal
    sarcasm = "I \"like\" it."

    # bien
    sarcasm = 'I "like" it.'
    ```
* No uses el caracter literal de sintaxis `?x`. Desde Ruby 1.0 esto
  se hizo redundante - `?x` se interpreta como `'x'` (un string con
  solo un caracter dentro).

    ```ruby
    # mal
    char = ?c

    # bien
    char = 'c'
    ```

* No dejes de usar `{}` alrededor de las variables de instancia o
  globales, siendo interpolados dentro de un string.

    ```ruby
    class Person
      attr_reader :first_name, :last_name

      def initialize(first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end

      # mal - válido, pero raro
      def to_s
        "#@first_name #@last_name"
      end

      # bien
      def to_s
        "#{@first_name} #{@last_name}"
      end
    end

    $global = 0
    # mal
    puts "$global = #$global"

    # bien
    puts "$global = #{$global}"
    ```

* <a name="no-to-s"></a>
  No uses `Object#to_s` para interpolar objectos. Esa Función se llama automaticamente.

  ```ruby
  # mal
  message = "This is the #{result.to_s}."

  # bien
  message = "This is the #{result}."
  ```

* Evita usar `String#+` cuando necesites construir un pedazo grande de datos.
  En su lugar usá `String#<<`. Concatenación muta la instancia del string en el
  lugar y siempre es más rápido que `String#+`, el cual crea un grupo de nuevos
  objetos de strings.

    ```ruby
    # bien y rápido además
    html = ''
    html << '<h1>Page title</h1>'

    paragraphs.each do |paragraph|
      html << "<p>#{paragraph}</p>"
    end
    ```

* Cuando estés usando heredocs para strings multi-línea no te olvides
  del hecho de que ellos necesitan espacios en blanco. Es una buena
  práctica utilizar algo de margen basado en cómo hay que recortar
  el espacio en blanco excesivo.

    ```ruby
    code = <<-END.gsub(/^\s+\|/, '')
      |def test
      |  some_method
      |  other_method
      |end
    END
    #=> "def test\n  some_method\n  other_method\nend\n"
    ```

* <a name="heredoc-delimiters"></a>
  Usa delimitadores descriptivos para los [Heredoc](https://es.wikipedia.org/wiki/Here_document)
  Delimitadores correctos pueden agregar informacion valiosa acerca del contenido.
  Algunos Editores de Texto son capaces de reconocer los delimitadores y destacar el contenido 
  usando el "Highlight" correspondiente

  ```ruby
  # mal
  code = <<~END
    def foo
      bar
    end
  END

  # bien
  code = <<~RUBY
    def foo
      bar
    end
  RUBY

  # bien
  code = <<~SUMMARY
    An imposing black structure provides a connection between the past and
    the future in this enigmatic adaptation of a short story by revered
    sci-fi author Arthur C. Clarke.
  SUMMARY
  ```

## Date & Time

* <a name="time-now"></a>
  Prefiere `Time.now` por sobre `Time.new` cuando tratas de obtener el tiempo actual del sistema.

* <a name="no-datetime"></a>
  No uses `DateTime` a menos que necesites crear un Calendario Historico
  y si lo haces especifica explicitamente en el argumento el `inicio` para
  dejar clara tus intenciones.

  ```ruby
  # mal - uso de 'DateTime' para el tiempo actual del sistema
  DateTime.now

  # bien - uso de 'Time' para el tiempo actual del sistema
  Time.now

  # mal - uso de 'DateTime' para una fecha actual
  DateTime.iso8601('2016-06-29')

  # bien - uso 'Date' para una fecha actual
  Date.iso8601('2016-06-29')

  # bien - uso de 'DateTime' con un argumento extra para representar una fecha histórica
  DateTime.iso8601('1751-04-23', Date::ENGLAND)
  ```

## Expresiones Regulares

> Algunas personas, cuando se encuentran un problema, piensan
> "Ya se, voy a usar expresiones regulares." Ahora tienen dos problemas.<br/>
> -- Jamie Zawinski

* No uses expresiones regulares si solo necesitás buscar texto plano en un string:
  `string['text']`
* Para construcciones simples puedes usar la `regexp` directamente como índice de string.

    ```ruby
    match = string[/regexp/]             # get content of matched regexp
    first_group = string[/text(grp)/, 1] # get content of captured group
    string[/text (grp)/, 1] = 'replace'  # string => 'text replace'
    ```

* Usa grupos que no capturen código cuando no uses resultados capturados con paréntesis.

    ```ruby
    /(first|second)/   # mal
    /(?:first|second)/ # bien
    ```

* No uses las variables crípticas de Perl, que denoten las pocisiones de los resultados de regex
  (`$1`, `$2`, etc). En su lugar usá `Regexp.last_match[n]`.

    ```ruby
    /(regexp)/ =~ string
    ...

    # mal
    process $1

    # bien
    process Regexp.last_match[1]
    ```


* Evita usar grupos numerados, ya que puede ser difícil de decir qué contienen. En su lugar
  deben usarse grupos con nombre.

    ```ruby
    # mal
    /(regexp)/ =~ string
    ...
    process Regexp.last_match[1]

    # bien
    /(?<meaningful_var>regexp)/ =~ string
    ...
    process meaningful_var
    ```

* Clases de caracteres únicamente tienen caracteres especiales que te deberían importar:
  `^`, `-`, `\`, `]`, por lo que no debes escapar `.` o llaves en `[]`.

* Tiene cuidado con `^` y `$`, ya que ellos se igualan con el inicio/final de la línea,
  no el final del string. Si querés igualar el string completo usá: `\A` y `\z` (no
  confundir con `\Z` el cual es el equivalente de `/\n?\z/`).

    ```ruby
    string = "some injection\nusername"
    string[/^username$/]   # matches
    string[/\Ausername\z/] # don't match
    ```

* Usa el modificador `x` para regexps complejos. Esto los hace más legibles y
  vas a poder agregar mejores comentarios. Pero tené cuidado, que los espacios
  son ignorados.

    ```ruby
    regexp = %r{
      start         # some text
      \s            # white space char
      (group)       # first group
      (?:alt1|alt2) # some alternation
      end
    }x
    ```

* Para cambios complejos se pueden usar `sub`/`gsub` con un bloque o un hash.

  ```ruby
  words = 'foo bar'
  words.sub(/f/, 'f' => 'F') # => 'Foo bar'
  words.gsub(/\w+/) { |word| word.capitalize } # => 'Foo Bar'
 

## Porcentajes Literales

* Usa `%()` (es un alias para `%Q`) para un string de una línea, el cual requiere tanto
  interpolación y uso de comillas dobles. Para strings multi-línea, es preferible usar heredocs.

    ```ruby
    # mal (no necesita interpolación)
    %(<div class="text">Some text</div>)
    # should be '<div class="text">Some text</div>'

    # mal (no tiene comillas dobles)
    %(This is #{quality} style)
    # Debería ser "This is #{quality} style"

    # mal (múltiples líneas)
    %(<div>\n<span class="big">#{exclamation}</span>\n</div>)
    # debería ser un heredoc.

    # bien (requiere interpolación, tiene comillas, y es una sola línea)
    %(<tr><td class="name">#{name}</td>)
    ```

* Evita `%q`, excepto que tengas un string con `'` y `"` dentro.
  Los strings literales son más legibles y deberían ser elegidos,
  excepto que tengamos que escapar un montón de caracteres internos.

    ```ruby
    # mal
    name = %q(Bruce Wayne)
    time = %q(8 o'clock)
    question = %q("What did you say?")

    # bien
    name = 'Bruce Wayne'
    time = "8 o'clock"
    question = '"What did you say?"'
    ```

* Usa `%r` solo para expresiones regulares que igualen *a más de un* caracter `/`.

    ```ruby
    # mal
    %r(\s+)

    # todavía está mal
    %r(^/(.*)$)
    # debería ser /^\/(.*)$/

    # bien
    %r(^/blog/2011/(.*)$)
    ```

* Evita el uso de `%x`, excepto que ya estés invocando un comando con comillas contrarias (que es bastante inusual).

    ```ruby
    # mal
    date = %x(date)

    # bien
    date = `date`
    echo = %x(echo `date`)
    ```

* Evita el uso de `%s`. Parece que la comunidad decidió que `:"some string"`
  es la forma preferida para crear un símbolo con espacios dentro.


* <a name="percent-literal-braces"></a>
  Usa los paréntesis que sean mas apropiados dependiento del tipo de "Porcentaje Literal" que desees usar.

  - `()` para String literales(`%q`, `%Q`).
  - `[]` para Array literales(`%w`, `%i`, `%W`, `%I`) al igual que los Array normales.
  - `{}` Para regexp literales(`%r`) a menos que la expresión regular contenga paréntesis de llave `{}`. 
         La idea es usar un caracter poco común en la expresión regular. (Por ejemplo `||`)
  - `()` Para todos los otros literales (por ejemplo: `%s`, `%x`)

  ```ruby
  # mal
  %q{"Test's king!", John said.}

  # bien
  %q("Test's king!", John said.)

  # mal
  %w(one two three)
  %i(one two three)

  # bien
  %w[one two three]
  %i[one two three]

  # mal
  %r((\w+)-(\d+))
  %r{\w{1,2}\d{2,5}}

  # bien
  %r{(\w+)-(\d+)}
  %r|\w{1,2}\d{2,5}|
  

## Metaprogramación

* Evita metaprogramación innecesaria.

* No hagas lío con las clases core cuando estés escribiendo bibliotecas.
  (No uses monkey-patch.)

* La forma de bloque de `class_eval` es preferible en forma de interpolación de string.
  - cuando uses la forma de interpolación de string, siempre usá `__FILE__` y `__LINE__`,
  asi la búsqueda de código tiene sentido:

    ```ruby
    class_eval 'def use_relative_model_naming?; true; end', __FILE__, __LINE__
    ```

  - `define_method` es mejor que `class_eval{ def ... }`

* Cuando uses `class_eval` (u otro `eval`) con interpolación de string, agrega un bloque de comentario que muestra su apariencia si está interpolada (una práctica que aprendí con el código de Rails):

    ```ruby
    # from activesupport/lib/active_support/core_ext/string/output_safety.rb
    UNSAFE_STRING_METHODS.each do |unsafe_method|
      if 'String'.respond_to?(unsafe_method)
        class_eval <<-EOT, __FILE__, __LINE__ + 1
          def #{unsafe_method}(*args, &block)       # def capitalize(*args, &block)
            to_str.#{unsafe_method}(*args, &block)  #   to_str.capitalize(*args, &block)
          end                                       # end

          def #{unsafe_method}!(*args)              # def capitalize!(*args)
            @dirty = true                           #   @dirty = true
            super                                   #   super
          end                                       # end
        EOT
      end
    end
    ```

* Evita usar `method_missing` para metaprogramación, ya que hace dificil leer el código, el comportamiento no está listado en `#methods`, y las llamadas a métodos mal escritas pueden funcionar silienciosamente, ejemplo: `nukes.launch_state = false`. En su lugar, considerá usar delegation, proxy o `define_method`. Si es necesario, usá `method_missing`:

  - Está seguro de [también definir `respond_to_missing?`](http://blog.marc-andre.ca/2010/11/methodmissing-politely.html)
  - Solo atrapá métodos con un prefix bien definido, como `find_by_*` -- hacé tu código lo más asertivo posible.
  - Llamá a `super` al final de tu definición
  - Delegá en métodos asertivos, no mágicos:

    ```ruby
    # mal
    def method_missing?(meth, *args, &block)
      if /^find_by_(?<prop>.*)/ =~ meth
        # ... lots of code to do a find_by
      else
        super
      end
    end

    # bien
    def method_missing?(meth, *args, &block)
      if /^find_by_(?<prop>.*)/ =~ meth
        find_by(prop, *args, &block)
      else
        super
      end
    end

    # best of all, though, would to define_method as each findable attribute is declared
    ```

* <a name="prefer-public-send"></a>
  Prefiere `public_send` por sobre `send` para no eludir la visibilidad `private`/`protected`.

  ```ruby
  # Tenemos una organización ActiveModel que incluye Activatable
  module Activatable
    extend ActiveSupport::Concern

    included do
      before_create :create_token
    end

    private

    def reset_token
      # some code
    end

    def create_token
      # some code
    end

    def activate!
      # some code
    end
  end

  class Organization < ActiveRecord::Base
    include Activatable
  end

  linux_organization = Organization.find(...)
  # MAL - viola la privacidad
  linux_organization.send(:reset_token)
  # Bien - debería arrojar una excepción
  linux_organization.public_send(:reset_token)
  ```

* <a name="prefer-__send__"></a>
  Prefiere `__send__` por sobre `send`, ya que `send` puede superponerse a métodos existentes.

  ```ruby
  require 'socket'

  u1 = UDPSocket.new
  u1.bind('127.0.0.1', 4913)
  u2 = UDPSocket.new
  u2.connect('127.0.0.1', 4913)
  # No enviará un mensaje al objeto receptor.
  # En cambio enviará un mensaje via UDP socket.
  u2.send :sleep, 0
  # Si enviará un mensaje al objeto receptor.
  u2.__send__ ...
  ```


## Varios

* Escribe código seguro con `ruby -w`.
* Evita los hashes como un parámetro opcional. Acaso el método hace demasiado? (Los
  inicializadores de objetos son excepciones a esta regla).
* Evita métodos mayores que 10 LOC (lines of code). Idealmente, la mayoría de los métodos van
  a ser menores que 5 LOC. Líneas vacías no cuentan como LOC relevantes.
* Evita listas de parámetros mayores que tres o cuatro parámetros.
* Si realmente necesitás métodos "globales", agregalos a tu Kernel
  y convertilos en `private`.
* Usa variables de instancia en módulos en lugar de variables globales.

    ```ruby
    # mal
    $foo_bar = 1

    # bien
    module Foo
      class << self
        attr_accessor :bar
      end
    end

    Foo.bar = 1
    ```

* Evita `alias` cuando `alias_method` hace mejor el trabajo.
* Usa `OptionParser` para parsear líneas de opciones de comando complejas
y `ruby -s` para líneas de opciones de comando triviales.
* Escribe código en forma funcional, evitando mutación cuando eso tenga sentido.
* No mutes argumentos excepto que ese sea el propósito del método.
* Evita más de tres niveles de anidación de bloques.
* Se consistente. En un mundo ideal, se consistente con estas guías.
* Usa el sentido común.
