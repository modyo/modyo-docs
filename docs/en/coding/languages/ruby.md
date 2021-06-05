---
search: false
---

# Ruby

:::warning Section under development The next section is under development and has not yet been revised. :::

This Ruby style guide recommends best practices so that real world Ruby programmers can write code that can be maintained by other Ruby programmers in the real world. A style guide that reflects real-world uses is used, and a style guide that clings to an ideal that has been rejected by people assumes it is best not to use it at all — no matter how good it is.

The guide is divided into several sections of related rules. I tried adding the rationalization of the rules (if omitted I assumed it's pretty obvious).

## Source Code Structure

> Almost everyone is convinced that all styles except their own are ugly and illegible. Let go of the "except their own", and they're probably right... <br/> — Jerry Coffin (about indentation) <br/> -- Jerry Coffin (sobre indentación)

* Use `UTF-8` as the encoding of the source file.
* Use two **spaces** for each level of lidentation. No tabs.

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

* Use Unix-style line endings. (*by default BSD/Solaris/Linux/OSX users are protected, Windows users have to be very careful.)
    * If you're using Git you might want to add the following settings to protect your project from the end of the line from Windows so that they don't appear alone:

    ```bash
    $ git config --global core.autocrlf true
    ```

* Do not use `;` to separate declarations and expressions. By convention - use one expression per line.

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

* Prefer a single line format for each class definition no body.

    ```ruby
    # mal
    class FooError < StandardError
    end

    # casi bien
    class FooError < StandardError; end

    # bien
    FooError = Class.new(StandardError)
    ```

* Avoid single-line methods. Although they are something popular, there some particularities about their syntax to define them that make their use undesirable. In any case - should not exist more than one expression in a single-line method.

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

    An exception to the rule is empty methods.

    ```ruby
    # bien
    def no_op; end
    ```

* Use spaces between operators, after commas, colons and points and commas, after `{` and before `}`. Blanks can (in mostly) irrelevant to the Ruby interpreter, but its proper use is the key to writing easy-to-read code.

    ```ruby
    ruby
arr = [1, 2, 3]
    ```

    There are some exceptions, with regard to operators, one is the exponent operator:

    ```ruby
    # mal
    e = M * c ** 2

    # bien
    e = M * c**2
    ```


    Another exception is the slash operator in rational numbers:

    ```ruby
    # bad
 o_scale = 1/48r

 # okay
 o_scale = 1/48r
    ```

    Another exception is the safe navigation operator:
    ```ruby
    # bad
 foo &. bar
 foo
 foo&. bar

 # okay
 foo&.bar
    ```

* <a name="spaces-braces"></a>
Do not use spaces after `(`, `[` or before `]`, `)`. Use spaces after `{` and before `}`.

    ```ruby
    # mal
    some( arg ).other
    [ 1, 2, 3 ].each{|e| puts e}

    # bien
    some(arg).other
    [1, 2, 3].each { |e| puts e }
    ```

    `{` and `}` deserve special clarification, as they are used for literal blocks and hashes, as well as expressions embedded in strings. Two styles are considered acceptable for literal hashes.

    ```ruby
    # bien - espacio luego de { y antes de }
    { one: 1, two: 2 }

    # bien - sin espacio luego de { y antes de }
    {one: 1, two: 2}
    ```

    The first variant is a little easier to read (and possibly most popular in the Ruby community in general). The second variant has the advantage of having visual differentiation between literal blocks and hashes. Whichever you choose - Use it consistently.

    As for embedded expressions, there are also two forms acceptable:

    ```ruby
    # bien - sin espacios
    "string#{expr}"

    # ok - podría decirse que es más legible
    "string#{ expr }"
    ```

* No spaces after `!`

    ```ruby
    bad
    ```

* Indent `when` at the same level as `case`. I know many will not agree with this, but it is the style set in both "The Ruby Programming Language" and "Programming Ruby".

    ```ruby
    # mal
    case
      when song.name == 'Misty'
        puts 'Not again!' when song.duration > 120
        puts 'Too long!' when Time.now.hour > 21
        puts "It's too late"
      else
        song.play
    end

    # bien
    case
    when song.name == 'Misty'
      puts 'Not again!' when song.duration > 120
      puts 'Too long!' when Time.now.hour > 21
      puts "It's too late"
    else
      song.play
    end
    ```

* When you assign the result of a conditional expression to a variable, you retain the alignment of its branch.

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

* Use empty lines between method definitions and also to break a method into internal logical paragraphs.

    ```ruby
    def some_method
      data = initialize(options)

      data.manipulate! data.result
    end

    def some_method
      result
    end
    ```

* <a name="two-or-more-empty-lines"></a>
Do not use more than one empty line in a row.

  ```ruby
  # wrong - there are two empty lines in a row.
  some_method


  some_method

  # okay
  some_method

  some_method
  ```
* <a name="empty-lines-around-access-modifier"></a>
Use empty lines around accessibility modifiers.

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

* <a name="empty-lines-around-bodies"></a>
*  &lt;a name="empty-lines-around-bodies"&gt; &lt;/a&gt; Do not use empty lines around methods, classes, modules, and blocks.

  ```ruby
  # evil

  # foo.rb
  class Foo
    class bar
      #30 methods inside
    end

    class car
      #20 methods inside
    end

    #30 methods inside
  end



  # okay

  # foo.rb
  class Foo
    #30 methods inside
  end

  # foo/bar.rb
  class Foo
 class bar
      #30 methods inside
 end
  end

  # foo/car.rb
  class Foo
 class car
      #20 methods inside
 end
  end
  ```

* <a name="no-trailing-params-comma"></a>
Avoid commas in the last parameter when calling a method. Especially if the parameters aren't separated by lines

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

* Use spaces around the `=` operator when you assign defaults to method parameters:

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

    While several Ruby books suggest the first style, the second is a lot most often used in practice (and you could even say that it is easier to read).

* Avoid using line continuous with '\' when not necessary. In practice, avoid using line continuation in any case, except for string concatenation.

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

* When continuing a method invocation chained on another line keep the `.` on the second line.

    ```ruby
    # mal - es necesario leer la primer línea para entender la segunda línea
    one.two.three.
      four

    # bien - inmediatamente se ve qué está pasando en la segunda línea
    one.two.three
      .four
    ```

* Align the parameters of a call to a method if they occupy more than one line. When the parameters are aligned it is not appropriate that it is with more indentation than appropriate, and use a unique indent for lines after the first parameter is also acceptable.

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
    end 'Important message', body: source.text)
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

* Aligns the elements of literal arrays that occupy multiple lines.

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

* Add underscores for large literal numbers to improve your reading.

    ```ruby
    # mal - cuantos 0s hay ahi? num = 1000000

    # bien - mucho más fácil de leer por el cerebro humano
    num = 1_000_000
    ```
* <a name="numeric-literal-prefixes"></a>
Use lowercase letters for numeric literals prefixes. `0o` for octal base, `0x` for hexadecimal base, and `0b` for binary base. Do not use `0d` for decimal numbers.

  ```ruby
  # evil
  num = 01234
  num = 0O1234
  num = 0X12AB
  num = 0B10101
  num = 0D1234
  num = 0d1234

  # well - it is easy to separate the prefixes from the numbers
  num = 0o1234
  num = 0x12ab
  num = 0b10101
  num = 12

* Use RDoc and its conventions for API documentation. Don't leave
  a blank line between the comment block and the `def`.
* Limit lines to 80 characters.
* Avoid blanks.
* Do not use block comments. They can't have blanks
  before and they are not as easy to understand them as comments.

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

## Syntax

* Use `::` only to reference constants (this includes classes and modules) and constructs (such as `Array ()`or `Nokogiri:: HTML ()`). Never use `::` for method invocation.

    ```ruby
    # mal
    SomeClass::some_method
    some_object::some_method

    # bien
    SomeClass.some_method
    some_object.some_method
    SomeModule::SomeClass::SOME_CONST
    SomeModule::SomeClass()SomeClass::SOME_CONST
    SomeModule::SomeClass()
    ```

* <a name="colon-method-definition"></a>
  Do not use `::` to define class methods.

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

* Use `def` with parentheses when you have arguments. Skip the parentheses when the method does not accept any arguments.

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
Use parentheses around arguments for invocation of a method, especially if the first argument starts with an open parenthesis `(`, such as: `f ((3 + 2) + 1)`.

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

  Always skip parentheses for:

  * Methods without arguments:

    ```ruby
    # mal
    Kernel.exit!()
    2.even?()
    fork()
    'test'.upcase()

    # bien
    Kernel.exit! 2.even? fork
    'test'.upcase
    ```

  * Methods that are part of an internal DSL (for example: Rake, Rails, RSpec): Rake, Rails, RSpec):

    ```ruby
    # mal
    validates(:name, presence: true)
    # bien
    validates :name, presence: true
    ```

  * Methods that are keywords in Ruby:

    ```ruby
    class Person
      # mal
      attr_reader(:name, :age)
      # bien
      attr_reader :name, :age

      # body omitted
    end
    ```

  You can skip the parentheses for:

  * Methods that have the word degree reserved (`keyword`) in ruby, but that declare nothing. Example:

    ```ruby
    # bien
    puts(temperance.age)
    system('ls')
    # bien también
    puts temperance.age
    system 'ls'
    ```

* <a name="optional-arguments"></a>
  Defines the optional arguments of a method, at the end of the argument list. Ruby has some unexpected results when optional arguments are at the top of the argument list.

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
  Prevents the use of parallel mappings for defining variables. Parallel assignment is allowed when it is the result of a previously called method. Parallel mapping is allowed when using the splat operator (* before a variable) or swapping a variable (swap). Parallel assignment is more difficult to read than a separate assignment.

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
Prevents unnecessary use of the `_` variable during parallel assignment. Variables named with an underscore `_` at the beginning of the name are preferred to only use an underscore `_`. Use underscore `_` only in combination with a `splat` variable defined to the left side of the assignment and only if the splat variable has no underscore `_` at the beginning of the name.

  ```ruby
  # evil
  foo = 'one, two, three, four, five'
  # Unnecessary assignment. Does not add any useful information
  first, second, _ = foo.split (',')
  first, _, _ = foo.split (',')
  first, *_ = foo.split (',')


  # okay
  foo = 'one, two, three, four, five'
  # Underscore is needed to show you want to get 
  # all elements except the last
  *beginning, _ = foo.split (',')
 *beginning, something, _ = foo.split (',')

  # only the first element
  a, = foo.split (',')
  # only the first 2 elements
  a, b, = foo.split (',')

  # Unnecessary mapping in a variable that will not be used, but 
  # this assignment provides useful formation
  first, _second = foo.split (',')
 first, _second, = foo.split (',')
 first, *_ending = foo.split (',')
  ```

* Never use `for`, unless you know exactly what you're using it for. In his instead you should use iterators most of the time. `for` se you must implement in the form of an `each` (so you're adding a level of indirection), but with a peculiarity - `for` does not introduce a new scope (unlike each`) and the variables that are defined within of its block are visible outside it.

    ```ruby
    arr.each {|elem| puts elem}
    ```

* Never use `while/until` condition `do` for a multi line `while/until`.

    ```ruby
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

* Always write the condition on the same line for `if`/`unless` conditionals with multilines.

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

* Prefer the ternary operator (`? :`) instead of constructions `if/then/else/end`. It is more common and obviously more concise.

    ```ruby
    # mal
    result = if some_condition then something else something_else end

    # bien
    result = some_condition ? something : something_else
    ```

* Use one expression per row by ternary operator. This too means that ternary operators should not be nested. Is preferable to use `if/else` constructs in these cases.

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

* Never use `if x:...`- was removed in Ruby 1.9. Use the ternary operator instead.

    ```ruby
    # mal
    result = if some_condition: something else something_else end

    # bien
    result = some_condition ? something : something_else
    ```

* Never use `if x;...`. Use the ternary operator instead.

* Use `when x then...`for one-line conditionals. The syntax alternative `when x:...`was removed in Ruby 1.9.

* Never use `when x;...`. Look at the above rule.

* Use `!`instead of `not`.

    ```ruby
    # mal - los paréntesis son necesarios por la precedencia de operador
    x = (not something)

    # bien
    x = !something
    ```

* Avoid the use of `!!`

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
    if !x.nil? # body omitted
    end
    ```

* The words `and` and `or` are forbidden. They're just not worth the penalty. Instead, always use `&&` and `||`.

    ```ruby
    # mal
    # boolean expression
    if some_condition and some_other_condition
      do_something
    end

    # control flow
    document.saved? or document.save! # bien
    # boolean expression
    if some_condition && some_other_condition
      do_something
    end

    # control flow
    document.saved? || document.save!
    ```

* Do not use parentheses around the `if/unless/while/until` condition.

* Favors the use of the `if/unless` switch when you have to type on a line. Another good alternative is to use flow control with `&&/||`.

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
Avoid the use of `if`/`unless` modifiers at the end of a block that consists of more than one linear.

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
Avoid sudo of `if`/`unless`/`while`/`until` modifiers in a nested way. Better properly use `&&`/`||` if.

  ```ruby
  # mal
  do_something if other_condition if some_condition

  # bien
  do_something if some_condition && other_condition
  ```

* Favors `unless` over `if` for negative conditions (or control flow with `||`).

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

* Never use `unless` with `else`. Rewrite so that the positive case comes first.

    ```ruby
    # mal
    unless success? puts 'failure'
    else
      puts 'success'
    end

    # bien
    if success? puts 'success'
    else
      puts 'failure'
    end
    ```

* Favors `until` over `while' for negative conditions.

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

* Use `Kernel #loop`instead of `while/until` when you need an infinite cycle.

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

* Favors the use of the `while/until 'switch when you can type the comparison in one line.

    ```ruby
    # mal
    while some_condition
      do_something
    end

    # bien
    do_something while some_condition
    ```

* Prefer `next` in loops instead of conditional blocks.

    ```ruby
    # mal
    do_something while !some_condition

    # bien
    do_something until some_condition
    ```

* <a name="infinite-loop"></a>
Use `Kernel#loop` with break instead of `begin/end/until` or `begin/end/while` to validate at the end of each cycle.

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


* Usa `Kernel#loop` con break en lugar de `begin/end/until` o `begin/end/while` para validar al final de cada ciclo.

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

* Skip parentheses around parameters for methods which are part of an internal DSL (example: Rake, Rails, RSpec), methods that have "keyword" status in Ruby (example: `attr_reader`, `puts`) and attribute accessory methods. Use parentheses around of the arguments of all other method calls.

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

* Skip external keys around implicit options of a hash.

    ```ruby
    # mal
    user.set({ name: 'John', age: 45, permissions: { read: true } })

    # bien
    user.set(name: 'John', age: 45, permissions: { read: true })
    ```

* Skip both external braces and parentheses for methods that form part of an internal DSL.

    ```ruby
    class Person < ActiveRecord::class Person < ActiveRecord::Base
      # mal
      validates(:name, { presence: true, length: { within: 1..10 } })

      # bien
      validates :name, presence: true, length: { within: 1..10 }
    end
    ```

* <a name="single-action-blocks"></a>
Use process invocation when you only perform one operation on a block

  ```ruby
  # mal
  names.map { |name| name.upcase }

  # bien
  names.map(&:upcase)
  ```

* Choose `{...}` over `do... end` for one-line blocks. Avoid the use of `{...}` for multiline blocks (multiline chaining is always horrible). Always use `do... end` for "flow contorl" and "methods definitions" (e.g. in Rakefiles and some DSLs). Avoid using `do... end` when you're chaining methods.

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

    It might be that some people think that multiline chaining would look good with using {...}, but in reality they should ask themselves - is the code really readable and the contents of the blocks can be extracted with elegant methods?

* Avoid using `return`when flow control is not required.

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

* Avoid using `self` when it is not necessary. (Only needed when the value of the class's own variable is overwritten.)

    ```ruby
    # mal
    def ready? if self.last_reviewed_at > self.last_updated_at
        self.worker.update(self.content, self.options)
        self.status = :in_progress
      end
      self.status == :verified
    end

    # bien
    def ready? if last_reviewed_at > last_updated_at
        worker.update(content, options)
        self.status = :in_progress
      end
      status == :verified
    end
    ```

* As a convention, avoid obscure methods with local variables, except that both are the same.

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

* Do not use the return value of `=` (mapping) in expressions conditional unless the assignment is in parentheses. This is a fairly popular expression among Rubyists who are sometimes referred to as *secure assignment in conditions*.

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
Use abbreviations to assign values after an operation.

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

* Use `||=` freely to initialize variables.

    ```ruby
    # asigna el nombre Bozhidar, solo si la variable 'name' es nil o false
    name ||= 'Bozhidar'
    ```

* Do not use `||=` to initialize Boolean variables. (Consider what would happen if the current value was `false`.)

    ```ruby
    # mal - asignaría true a enabled aunque ya era false
    enabled ||= true

    # bien
    enabled = true if enabled.nil?
    ```

* <a name="double-amper-preprocess"></a>
Use `&&=` to preprocess variables that may not exist. Using `&&=` you will change the value of the variable, only if it exists, eliminating the need to check its existence using an `if`.

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

* Avoid explicit use of the identical equality operator `===`. As the name suggests, it is intended to be used implicitly by expressions `case` and outside of them provides Pretty confusing code.

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
Don't use `eql?`when you can use `==`. The strict semantica comparator offered by `eql?` is rarely needed in practice.

  ```ruby
  # mal - eql? es lo mismo que == para strings
  'ruby'.eql? some_str

  # bien
  'ruby' == some_str

  # eql? tiene sentido aqui, si se quiere diferenciar entre Integer y Float 1
  1.0.eql? x 
  ```

* Avoid using special variables of type Perl (such as `$:`, `$;`, etc.). They are quite cryptic and their use anywhere except one-line scripts is discouraged. Use the human-friendly aliases provided by the `English` library.

    ```ruby
    # mal
    $:.unshift File.dirname(__FILE__)

    # bien
    require 'English'
    $LOAD_PATH.unshift File.dirname(__FILE__)
    ```

* Never use a space between the name of a method and opening a parenthesis.

    ```ruby
    # mal
    f (3 + 2) + 1

    # bien
    f(3 + 2) + 1
    ```

* If the first argument of a method starts with an open parenthesis, always use parentheses in the invocation of the method. For example, type `f ((3 + 2) + 1)`.

* Always run the Ruby interpreter with the `-w` option, so that let us know if you forget any of the above rules!

* <a name="no-nested-methods"></a>
Do not use nested methods, better use lambda functions. Nested methods currently produce methods in the same scope (example: classes) In addition, the nested method will be redefined each time the method containing it is called.

  ```ruby
  # evil
  def foo (x)
    def bar (y)
      # body omitted
    end

    bar (x)
  end

  # well - although it is equal to the above, the improvement is that 'bar' will not be redefined every time 'foo' is called
  def bar (y)
    # body omitted
  end

  def foo (x)
    bar (x)
  end

  # well also
  def foo (x)
    bar = -> (y) {...} bar.call (x)
  end
  ``

* Use the new literal lambda syntax for single-line blocks.
  Use the `lambda` method for multiline blocks.

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
Do not omit parentesis when you are defining a lambda function that uses parameters.

  ```ruby
  # mal
  l = ->x, y { something(x, y) }

  # bien
  l = ->(x, y) { something(x, y) }
  ```

* <a name="stabby-lambda-no-args"></a>
Skip parentheses if your lambda function does not need parameters.

  ```ruby
  # mal
  l = ->() { something }

  # bien
  l = -> { something }
  ```

* Choose `proc` over `Proc.new`.

    ```ruby
    # mal
    p = Proc.new { |n| puts n }

    # bien
    p = proc { |n| puts n }
    ```

* Choose `proc.call ()`over `proc []` or `proc. ()`for both lambdas and procs.

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

* Use `_` for unused block parameters.

    ```ruby
    # mal
    result = hash.map { |k, v| v + 1 }

    # bien
    result = hash.map { |_, v| v + 1 }
    ```

* Use `$stdout/$stderr/$stdin` instead of `STDOUT/STDERR/STDIN`. `STDOUT/STDERR/STDIN` are constants, and while you can reassign constants (possibly to redirect a process) in Ruby, you're going to have a warning from the interpreter if You do that.

* Use `warn` instead of `$stderr.puts`. Apart from being more concise and of course, `warn` allows you to delete warnings if you need it (setting the warning level to 0 via `-W0`).

* Choose to use `sprintf` and its alias `format` over the cryptic `String#%`.

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
When you use name tokens, please use `% <name> s` over `% {name}`, because at the time of referencing them you are referencing the type of value the token will take.

  ```ruby
  # evil
  format ('Hello,% {name} ', name:' John ')

  # good
  format ('Hello, %<name> s', name: 'John')
  `

* Choose the use of `Array #join `over cryptic `Array#*` with
  a string argument.

    ```ruby
    # mal
    %w(one two three) * ', '
    # => 'one, two, three'

    # bien
    %w(one two three).join(', ')
    # => 'one, two, three'
    ```

* Use `[*var]` or `Array ()`instead of explicit verification `Array`, when you work with a variable you want to treat as an Array, but you're not sure it's an array.

    ```ruby
    # mal
    paths = [paths] unless paths.is_a? Array
    paths.each { |path| do_something(path) }

    # bien
    [*paths].each { |path| do_something(path) }

    # bien (y un poquito más legible)
    Array(paths).each { |path| do_something(path) }
    ```

* Use ranges or `Comparable #between?`instead of a logical comparison complex where possible.

    ```ruby
    # mal
    do_something if x >= 1000 && x <= 2000

    # bien
    do_something if (1000..2000).include?(x)

    # bien
    do_something if x.between?(1000, 2000)
    ```

* Choose the use of underlying methods instead of comparisons explicit with `==`. Numerical comparisons are OK.

    ```ruby
    # mal
    if x % 2 == 0
    end

    if x % 2 == 1
    end

    if x == nil
    end

    # bien
    if x.even? end

    if x.odd? end

    if x.nil? end

    if x.zero? end

    if x == 0
    end
    ```

* <a name="no-non-nil-checks"></a>
Do not explicitly use no-`nil` to validate a variable, unless you're dealing with bolean variables.

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

* Avoid the use of `BEGIN`blocks.

* Never use `END` blocks. Instead use `Kernel #at_exit`.

    ```ruby
    # mal

    END { puts 'Goodbye!' }

    # bien

    at_exit { puts 'Goodbye!' }
    ```

* Avoid the use of flip-flops.

* Avoid the use of nested conditionals for flow control. Choose a guard clause when you can say invalid data. A guard clause is a conditional at the beginning of a function that tries to get out of it as soon as you can.

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


* <a name="map-find-select-reduce-size"></a>* Choose `map` over `collect`, `find` over `detecet`, `select` by about `find_all`, `reduce` by about `inject` and `size` by over `length`. Not a difficult requirement; if using aliases enhances readability, it's okay to use them. Rhyming methods are inherited from Smalltalk and are not common in other programming languages. It reason to use `select` for `find_all` is because it goes very well along with `reject` and its name is quite self-explanatory.

* <a name="count-vs-size"></a>
Do not use `count` as a substitute for `size`. For objects of type `Enumerable`, the entire object will be iterated to find out the number of elements.

  ```ruby
  # mal
  some_hash.count

  # bien
  some_hash.size
  ```

* <a name="flat-map"></a>
Use `flat_map` instead of `map` + `flatten`.  This does not apply to arrays with a depth greater than 2, for example.  If `users.first.songs == ['a', ['b', ['c']]`, then use `map+ flatten` instead of `flat_map`. `flat_map` flattens the array with depth 1, while `flatten` flatten it completely.

  ```ruby
  # mal
  all_songs = users.map(&:songs).flatten.uniq

  # bien
  all_songs = users.flat_map(&:songs).uniq
  ```

* <a name="reverse-each"></a>
Prefer `reverse_each` to `reverse.each` because some classes that include `Enumerable` can provide efficient implementation. Even in the worst case if the class does not implement an improvement the general from `Enumerable` will be as efficient as `reverse.each`.

  ```ruby
  # evil
  array.reverse.each {...} # good
  array.reverse_each {...} ## Names

> The only real difficulties in programming are invalidation of
> cache and name things. <br/> 
> — Phil Karlton

* Reference names in English.

    ```ruby
    # mal - referencia no está utilizando caracteres ascii
    заплата = 1_000

    # mal - la referencia es una palabra búlgara, escrita con caracteres latinos (en lugar de Cirílico)
    zaplata = 1_000

    # bien
    salary = 1_000
    ```
* Use `snake_case` for symbols, methods, and variables.

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
Do not separate numbers from letters, symbols, methods, or variables.

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

* Use `CamelCase` for classes and modules.  (I kept in capital letters acronyms such as HTTP, RFC, XML.)

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
Use `snake_case` to name files, example. `hello_world.rb`.

* <a name="snake-case-dirs"></a>
Use `snake_case` to name directories, example. `lib/hello_world/hello_world.rb`.

* <a name="one-class-per-file"></a>
Try to have only one Class or Module per source file. Name the file with the name from the Class or Module, but replacing the name of `CamelCase` to `snake_case`. example. `some_class.rb`

    ```ruby
    # bien
    class SomeClass
      # No body
    end
    ```

* Use `SCREAMING_SNAKE_CASE` for constants.

    ```ruby
    # mal
    SomeConst = 5

    # bien
    SOME_CONST = 5
    ```

* The names of the methods they claim (methods that return a boolean value) must end with a question sign. (example: `Array #empty?`). Methods that do not return a boolean, should not end with a question sign.

* <a name="bool-methods-prefix"></a>
Avoid using auxiliary prefixes such as (`is`, `does`, or `can`) for Method names. These words are redundant and inconsistent with the style of Bolean Methods found in Ruby core library, such as `empty?`or `include?`

  ```ruby
  # mal
  class Person
    def is_tall? true
    end

    def can_play_basketball? false
    end

    def does_like_candy? true
    end
  end

  # bien
  class Person
    def tall? true
    end

    def basketball_player? false
    end

    def likes_candy? true
    end
  end
  ```

* Potentially *dangerous* method names (example: methods which modify `self` or arguments, `exit!`- does not run finishers as `exit`, etc.) must end with a sign exclamation only if there is a secure version of that method *dangerous*.

    ```ruby
    # mal - no hay ningún método 'seguro' que se llame igual
    class Person
      def update! end
    end

    # bien
    class Person
      def update
      end
    end

    # bien
    class Person
      def update! end

      def update
      end
    end
    ```

* Defines a non-bang (safe) method relative to the bang method (dangerous) if possible.

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

* When using `reduce` with small blocks, name the arguments `|a, e|` (accumulator, element).
* When you define binary operators, name the argument as `other` (`<<` and `[]` are exceptions to the rule, since their semantics is different).

    ```ruby
    def +(other)
      # body omitted
    end
    ```

## Comments

> Good code is your best documentation. When you're about to add a comment, ask yourself: "How can I improve the code so that this comment is not necessary?" Improve the code and then document it to make it even clearer. <br/> — Steve McConnell

* Write self-documented code and ignore the rest of this section. Seriously!
* Write your comments in English to avoid problems with characters special.
* Use a space between the first `#` character of the comment and the text own of the commentary.
* Comments that are longer than a word are capitalized and use punctuation. Use [a space](http://es.wikipedia.org/wiki/Espacio_entre_oraciones) after the dots.
* Avoid surviving comments.

    ```ruby
    # mal
    counter += 1 # Increments counter by one.
    ```

* I kept the existing comments up to date. An old comment is worse that you do not use comments.

> Good code is like a good joke - no need explanation <br/> — Russ Olsen

* Avoid writing comments to explain bad code. Refactor the code to make it more self-explanatory. (Do it or don't - there are no attempts. —Yoda)

### Comments Notes

* Generally the notes have to be written immediately in the first line above the code to comment.
* The keyword of the note is followed by a colon and a space, and then a note describing the problem.
* Prefer to use double quotation marks `""`unless the String contain `"`or escape characters you want to delete.

    ```ruby
    def bar
      # FIXME: def bar
      # FIXME: This has crashed occasionally since v3.2.1. It may
      #   be related to the BarBazUtil upgrade.
      baz(:quux)
    end
    ```

* In cases where the problem is so obvious that any documentation is redundant, notes can be left at the end of that line, without no note. Its use should be the exception and not the rule.

    ```ruby
    def bar
      sleep 100 # OPTIMIZE
    end
    ```

* Use `TODO` to highlight missing functionalities or functionalities that should be added later.
* Use `FIXME` to highlight broken code that needs to be fixed.
* Use `OPTIMIZE` to highlight slow or inefficient code that may cause performance problems.
* Use `HACK` to highlight code that uses questionable practices that do not look good and that it should be refactorized as soon as possible.
* Use `REVIEW` to highlight anything that needs to be reviewed for confirm that it is working as it should. For example: `REVIEW: Are
we sure this is how the client does X currently?`
* Use another word as a note if you feel it appropriate, but make sure to document them in the `README` of your project or similar.


### Magic Comments

* <a name="magic-comments-first"></a>
Position a magic comment on all the code and documentation of a file (except for the [Shebangs](https://es.wikipedia.org/wiki/Shebang), we'll talk about them later.)

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
Position a magic comment below the `shebangs` if there is one present in the file.

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
Use a magic comment per line, if you need to use more than one.

  ```ruby
  # mal
  # -*- frozen_string_literal: true; encoding: ascii-8bit -*-

  # bien
  # frozen_string_literal: true
  # encoding: ascii-8bit
  ```

* <a name="separate-magic-comments-from-code"></a>
Separate magic comments from the rest of the code or documentation using a white line.

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

## Classes and Modules

* Use a consistent structure to define your class.

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
:</code> (ternary operator) in multilines; instead use `if/unless`.

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
Do not nite Multilinear Classes within another Class. Try to separate each into different files within a folder which is called the Class in which you want to nest them. Example.

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
Defines (and reopens) Namespace Classes and Modules using a specific nesting. Using the scope resolution operator `::` you can lead to amazing constant searches due to Ruby's lexical scope [lexical scoping](https://cirw.in/blog/constant-lookup.html), which depends on the Module being nested from the point of the definition. Example.

  ```ruby
  module Utilities
    class Queue
    end
  end

  # mal
  class Utilities::module Utilities
 class Queue
 end
 end

 # bad
 class Utilities::Store
 Module.nesting # => [Utilities::Store]

 def initialize
 # Refers to the top level ::Queue class because Utilities isn't in the
 # current nesting chain.
      @queue = Queue.new
 end
 end

 # okay
 module Utilities
 class WaitingList
 Module.nesting # => [Utilities::WaitingList, Utilities]

 def initialize
 @queue = Queue.new # Refers to Utilities::Queue
 end
 end
 endend
    end
  ```

* Prefer modules to classes that have only class methods. Classes should be used only when it makes sense to create instances outside them.

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

* Choose the use of `module_function` over `extend self` when you want to change the instance methods of a module in a of class.

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

* When designing class hierarchies, make sure they are ausetted to [Liskov Substitution Principle](http://es.wikipedia.org/wiki/Principio_de_sustituci%C3%B3n_de_Liskov).
* Try to make your classes so [SOLID](http://es.wikipedia.org/wiki/SOLID_(object-oriented_design)) as possible.
* Always use `alias_method` when you want to rename the a Module, Classes or Singleton Classes at runtime, otherwise like `alias` could lead to unforeseen cases.

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

* Use the `attr` family of functions to define trivial accessors or mutators.

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
For the `accessors` and `mutators`, avoid using prefixes such as `get_` and `set_` in function names. It is a convention in Ruby to use the attribute name (`attr_name`) for type functions (readers) and `attr_name=` for mutators (writers).

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

* Avoid the use of `attr`. Instead use `attr_reader` and `attr_accessor`.

    ```ruby
    # mal - crea un único accesor de atributo (deprecado en 1.9)
    attr :something, true
    attr :one, :two, :three # behaves as attr_reader

    # bien
    attr_accessor :something
    attr_reader :one, :two, :three
    ```

* Consider using a `Struct.new`to define a class. `Struct.new` define for you the trivial accessors, constructor and comparison operators.

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

* Do not extend a `Struct.new` - already in case it is a new class. Extending it introduces a superfluous class level and can also introduce strange errors if the file is required multiple times.

  ```ruby
  # mal
  class Person < Struct.new(:first_name, :last_name)
  end

  # bien
  Person = Struct.new(:first_name, :last_name)
  ```

* Consider adding a factory method to provide more sensitive shapes to instantiate a particular class.

    ```ruby
    class Person
      def self.create(options_hash)
        # body omitted
      end
    end
    ```

* Prefer [duck-typing](http://es.wikipedia.org/wiki/Duck_typing) rather than inheritance.

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
        puts 'Bau! end
    end

    # bien
    class Duck
      def speak
        puts 'Quack! Quack'
      end
    end

    class Dog
      def speak
        puts 'Bau!
    ```

* Avoid the use of clas variables (`@@`) due to their behaviors "dirty" in inheritance.

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

    How can you see all the classes in a class hierarchy actually share a class variable. Usually instance variables class variables should be preferred to class variables.

* Assigns adequate visibility levels for methods (`private`, `protected`) according to its correct use. Don't go around leaving all `public` (which is the default state). After all We're now programming on *Ruby*, not *Python*.
* Indent the words "public", "protected", and `private` as much as methods to which they apply. Leave a blank line before and after of the visibility modifier, in order to emphasize that that applies to all the methods below.

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

* Use `def self.method` to define singleton methods. That does the code easier to refactor, because the class name is not repeated.

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
Keep in mind that the use of `alias` reaches the Methods that are within the class just like the use of `self`. Clearly communica to the user that the diversion made by your alias will not alter the Runtime Class or Subclasses unless it is made explicit way..

  ```ruby
  class Westerner
    def first_name
      @names.first
    end

    alias given_name first_name
  end
  ```

  Since `alias`, like `def`, is a reserved word use it preferably with normal words as arguments, not with symbols or Strings. Example. uses `alias foo bar`, not `alias:foo:bar`.

  Also be careful how Ruby handles Aliases in conjunction with Inheritance. An alias refers to the method for which it was defined at the time that the alias was created and it won't work dynamically

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end
  end
  ```

  In the above example `Fugitive #given_name`could keep calling to the original method of its parent class `Westerner #first_name`and not to `Fugitive #first_name`. To also overwrite the behavior of `Fugitive #given_name`, you would have to also redefine the alias in the `Fugitive` class, as follows.

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end

    alias given_name first_name
  end
  ```

* <a name="alias-method"></a>
When the Method of a class (or Module) calls other Methods of the same type, omits the use of `self` or the use of the Class's own name followed by a `.`

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
Cuando el Método de  una clase (o Módulo) llama a otros Métodos del mismo tipo, se omite el uso de `self` o el uso del propio nombre de la Clase seguido por un `.`

  This is very often seen in "Classes of Service" or other similar concepts where the Class is treated as if it were a function. This convention tends to reduce repetitivity in such classes.

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

## Exceptions

* Signals exceptions using the `fail` method. Use `raise` only when you want to catch an exception and want to go back to call it (because it is not failing, but is throwing a exception explicitly and purposefully).

    ```ruby
    begin
      fail 'Oops'
    rescue => error
      raise if error.message != 'Oops'
    end
    ```

* Do not explicitly specify `RuntimeError` in the two-argument version of `fail/raise`.

    ```ruby
    # mal
    fail RuntimeError, 'message'

    # bien - señaliza un RuntimeError por defecto
    fail 'message'
    ```

* If multiple lines are needed to describe the problem, the subsequent ones have to have a two-space indent after the `#`.

    ```ruby
    # mal
    fail SomeException.new('message')
    # No hay una forma de hacer `fail SomeException.new('message'), backtrace`.

    # bien
    fail SomeException, 'message'
    # Consistente con `fail SomeException, 'message', backtrace`.
    ```

* Never return from an `ensure` block. If you return explicitly from a method within an `ensure` block, the return will take precedent about any exception that is called, and the method will return as if no exception had been called. In fact, the exception will be rejected quietly.

    ```ruby
    def foo
      begin
        fail
      ensure
        return 'very bad idea'
      end
    end
    ```

* Use *implicit blocks of begin* whenever possible.

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

* Mitigate the proliferation of `begin` blocks using *contingency methods* (a term chosen by Avdi Grimm).

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

* Do not suppress exceptions.

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

* Avoid using `rescue` in its modifier form.

    ```ruby
    # mal - esto atrapa una excepción de la clase StandardError y sus clases hijas
    read_file rescue handle_error($!)# bien - esto atrapa solo las excepciones de la clase Errno::ENOENT y sus clases hijas
    def foo
      read_file
    rescue Errno::ENOENT => ex
      handle_error(ex)
    endENOENT => ex
      handle_error(ex)
    end
    ```


* Do not use exceptions for flow control.

    ```ruby
    # mal
    begin
      n / d
    rescue ZeroDivisionError
      puts 'Cannot divide by 0!' end

    # bien
    if d.zero? puts 'Cannot divide by 0!' else
      n / d
    end
    ```

* Avoid rescuing the `Exception` class. This is going to catch the `exit` signal, you need to pass `kill -9` to the process in order to finish it.

    ```ruby
    # mal
    begin
      # calls to exit and kill signals will be caught (except kill -9)
      exit
    rescue Exception
      puts "you didn't really want to exit, right?" # exception handling
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

* Write more specific exceptions first, otherwise never they're gonna be able to get caught.

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

* Close external resources opened by your program in a block ensure.

    ```ruby
    f = File.open('testfile')
    begin
      # .. process
    rescue
      # .. handle error
    ensure
      f.close unless f.nil? end
    ```

* <a name="auto-release-resources"></a>
Use methods versions of resources that automatically clean up when possible.

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

* Prefer using standard library exceptions instead to create new exception classes.

## Collections

* Prefer the use of notation for literal arrays and hash creation (except you need to pass parameters to your builders).

    ```ruby
    # mal
    arr = Array.new
    hash = Hash.new

    # bien
    arr = []
    hash = {}
    ```

* Prefer to use `%w` instead of literal array syntax when you need an array of words (non-empty strings without spaces or spatile characters in each). Apply this rule only to arrays of two or more elements.

    ```ruby
    # mal
    STATES = ['draft', 'open', 'closed']

    # bien
    STATES = %w(draft open closed)
    ```

* Prefer `%i` rather than literal array syntax when you need an array of symbols (and you don't need to maintain compatibility with Ruby 1.9). Apply this rule only to arrays with two or more elements.

    ```ruby
    # mal
    STATES = [:draft, :open, :closed]

    # bien
    STATES = %i(draft open closed)
    ```

* Avoid the creation of large spaces in arrays.

    ```ruby
    arr = []
    arr[100] = 1 # y así tenés un array con un montón de nils
    ```

* When you are accessing the first or last element of an array, you prefer use `first` or `last` instead of `[0]` or `[-1]`.

* Use `Set` instead of `Array` when dealing with items unique ones. `Set` implements a collection of cluttered values without duplicates. This is a hybrid of interoperative hesitation intuitive `Array`, and read speed of `Hash`.

    ```ruby
    require 'set'
    s = Set.new [4,1,1,1,2] # => #<Set: {4, 1, 2}>
    ```

* Prefer symbols instead of strings and hash keys.

    ```ruby
    # mal
    hash = { 'one' => 1, 'two' => 2, 'three' => 3 }

    # bien
    hash = { one: 1, two: 2, three: 3 }
    ```

* Avoid the use of mutable objects such as hash keys.
* Use `Hash #fetch`when you're dealing with hash keys that should be present.

    ```ruby
    # mal
    hash = { :one => 1, :two => 2, :three => 3 }

    # bien
    hash = { one: 1, two: 2, three: 3 }
    ```
* <a name="no-mixed-hash-syntaces"></a>
Don't mix Ruby 1.9 syntax with hash arrows in the same hash definition Use the arrows only when the hash key is not a Symbol.

  ```ruby
  # mal
  { a: 1, 'b' => 2 }

  # bien
  { :a => 1, 'b' => 2 }
  ```

* Usa `Hash#key?` en lugar de `Hash#has_key?` y `Hash#value?` en lugar de `Hash#has_value?`. Como dice Matz [aquí](http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/43765), Las funciones largas están consideradas deprecadas.

    ```ruby
    # mal
    hash.has_key?(:test)
    hash.has_value?(value)

    # bien
    hash.key?(:test)
    hash.value?(value)
    ```

* <a name="hash-each"></a>
Use `Hash #each_key`instead of `Hash #keys .each` and `Hash #each_value`instead of `Hash #values .each`.

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

* Use `Hash #values_at`when you want to get many consecutively values from the Hash.

    ```ruby
    heroes = { batman: 'Bruce Wayne', superman: heroes = { batman: 'Bruce Wayne', superman: 'Clark Kent' }
    # mal - si generamos un error, puede que no lo veamos rápido
    heroes[:batman] # => "Bruce Wayne"
    heroes[:supermann] # => nil

    # bien - fetch genera un KeyError, haciendo obvios los problemas
    heroes.fetch(:supermann)
    ```

* Use default values for hash keys using `Hash #fetch`, as opposed to generating your own logic.

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

* Trust the fact that since Ruby 1.9 hashes are sorted.
* Never modify a collection while you're touring it.

* <a name="accessing-elements-directly"></a>
When you access items in a Collection, avoid shortcut using `[n]`, for this you can use an alternative form of reading This can save you from calling `[]` about a value `nil`.

  ```ruby
  # mal
  Regexp.last_match[1]

  # bien
  Regexp.last_match(1)
  ```

* <a name="provide-alternate-accessor-to-collections"></a>
If you provide access to a collection, it also provides an alternative way will save users from getting a `nil` before accessing the item in the Collection

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


## Numbers

* <a name="integer-type-checking"></a>
Use `Integer` to test the type of an integer. since `Fixnum` depends on the platform, checking the value of the variable with it will give different results depending on the architecture of the 32-bit or 64-bit maquin.

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

* <a name="random-numbers"></a>
Separate multiple `mixins` with multiple statements (separate lines).

  ```ruby
  # mal
  rand(6) + 1

  # bien
  rand(1..6)
  ```


## Strings

* Prefer string interpolation instead of string concatenation:

    ```ruby
    # mal
    email_with_name = user.name + ' <' + user.email + '>'

    # bien
    email_with_name = "#{user.name} <#{user.email}>"

    # mejor
    email_with_name = format('%s <%s>', user.name, user.email)
    ```

* Consider the use of string interpolation with space. Makes it clearer to separate the code from the string.

    ```ruby
    "#{ user.last_name }, #{ user.first_name }"
    ```

* Prefer to write them with a single quote when you don't have the need perform interpolation or use special symbols such as `\ t`,`\ n`, `'`, etc.

    ```ruby
    # mal
    name = "Bozhidar"

    # bien
    name = 'Bozhidar'

    # bien
    name = "De'Andre"

    ```

  * Character classes have only special characters that you should care about: `^`, `-`, `\`, `]`, so you should not escape `.` or keys in `[]`.

    ```ruby
    # mal
    sarcasm = "I \"like\" it."

    # bien
    sarcasm = 'I "like" it.'
    ```
* No uses el caracter literal de sintaxis `?x`. Since Ruby 1.0 this became redundant - `? x` is interpreted as `'x'` (a string with only one character inside).

    ```ruby
    # mal
    char = ?c

    # bien
    char = 'c'
    ```

* Always provide a `to_s` method for classes that represent domain objects.

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
Do not use `Object #to_s`to interpolate objects. That function is called automatically.

  ```ruby
  # mal
  message = "This is the #{result.to_s}."

  # bien
  message = "This is the #{result}."
  ```

* Avoid using `String#+` when you need to build a large piece of data. Instead use `String#<<`. Concatenation mutates the instance of the string in the place and is always faster than `String#+`, which creates a group of new string objects.

    ```ruby
    # bien y rápido además
    html = ''
    html << '<h1>Page title</h1>'

    paragraphs.each do |paragraph|
      html << "<p>#{paragraph}</p>"
    end
    ```

* When you're using heredocs for multi-line strings don't forget from the fact that they need blanks. It's a good one practice using some margin based on how to trim excessive white space.

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
Use descriptive delimiters for [Heredoc](https://es.wikipedia.org/wiki/Here_document) Correct delimiters can add valuable information about the content. Some Text Editors are able to recognize delimiters and highlight content using the corresponding "Highlight"

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
    sci-fi author Arthur C. Clarke. Clarke.
  SUMMARY
  ```

## Date & Time

* <a name="time-now"></a>
Prefer `time.now` over `time.new` when you try to get the current system time.

* <a name="no-datetime"></a>
Don't use `DateTime` unless you need to create a Historical Calendar and if you do so explicitly specify in the argument the `start` for make your intentions clear.

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

## Regular Expressions

> Some people, when they encounter a problem, think "I know, I'm going to use regular expressions." Now they have two problems. <br/> — Jamie Zawinski

* Don't use regular expressions if you only need to search plain text in a string: `string ['text']`
* For simple constructions you can use the `regexp` directly as a string index.

    ```ruby
    match = string[/regexp/]             # get content of matched regexp
    first_group = string[/text(grp)/, 1] # get content of captured group
    string[/text (grp)/, 1] = 'replace'  # string => 'text replace'
    ```

* Use groups that don't capture code when you don't use results captured with parentheses.

    ```ruby
    /(first|second)/   # mal
    /(?:first|second)/ # bien
    ```

* Do not use the cryptic variables of Perl, which denote the potions of regex results (`$1`, `$2`, etc). Instead use `RegExp.Last_match [n]`.

    ```ruby
    /(regexp)/ =~ string
    ...

    # mal
    process $1

    # bien
    process Regexp.last_match[1]
    ```


* Avoid using numbered groups, as it can be difficult to say what they contain. Instead named groups must be used.

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

* Clases de caracteres únicamente tienen caracteres especiales que te deberían importar: `^`, `-`, `\`, `]`, por lo que no debes escapar `.` o llaves en `[]`.

* Be careful with `^` and `$`, as they match the start/end of the line, not the end of the string. If you want to match the full string use: `\ A` and`\ z` (no confuse with `\ Z` which is the equivalent of `/\ n? \ z/`).

    ```ruby
    string = "some injection\nusername"
    string[/^username$/]   # matches
    string[/\Ausername\z/] # don't match
    ```

* Use the `x` switch for complex regexps. This makes them more readable and you're going to be able to add better comments. But be careful, that spaces are ignored.

    ```ruby
    regexp = %r{
      start         # some text
      \s            # white space char
      (group)       # first group
      (?:alt1|alt2) # some alternation
      end
    }x
    ```

* Use literal hash syntax when your hash keys are symbols.

  ```ruby
  words = 'foo bar'
  words.sub (/f/, 'f' => 'F') # => 'Foo bar'
  words.gsub (/\ w+/) {|word| word.capitalize} # => 'Foo Bar'


## Literal Percentages

* Use `% () `(is an alias for `%Q`) for a one-line string, which requires both
  interpolation and use of double quotes. For multi-line strings, it is preferable to use heredocs.

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

* Avoid `%q`, except that you have a string with `'`and `"`inside. Literal strings are more readable and should be chosen, except we have to escape a bunch of internal characters.

    ```ruby
    # mal
    name = %q(Bruce Wayne)
    time = %q(8 o'clock)
    question = %q("What did you say?") # bien
    name = 'Bruce Wayne'
    time = "8 o'clock"
    question = '"What did you say?"'
    ```

* Use `Hash #key?`instead of `Hash #has_key?`and `Hash #value?`instead `Hash #has_value?` How Matz says [here](http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/43765), Long functions are considered deprecated.

    ```ruby
    # mal
    %r(\s+)

    # todavía está mal
    %r(^/(.*)$)
    # debería ser /^\/(.*)$/

    # bien
    %r(^/blog/2011/(.*)$)
    ```

* Avoid using `%x`, except that you are already invoking a command with counterquotes (which is quite unusual).

    ```ruby
    # mal
    date = %x(date)

    # bien
    date = `date`
    echo = %x(echo `date`)
    ```

* Avoid using `%s`. It seems that the community decided that `: "some string"` is the preferred way to create a symbol with spaces inside.


* <a name="percent-literal-braces"></a>
Use the parentheses that are most appropriate depending on the type of "Literal Percentage" you want to use.

  - `()` for String literal (`%q`, `%Q`).
  - `[]` for Literals Arrays (`%w`, `%i`, `%W`, `%I`) just like normal Arrays.
  - `{}` For literal regexp (`%r`) unless the regular expression contains key parentheses `{}`. The idea is to use a rare character in regular expression. (For example `||`)
  - `()` For all other literal (for example: `%s`, `%x`)

  ```ruby
  # good
  %q ("Test's king!" , John said.) # evil
  %w (one two three)
  %i (one two three)

  # good
  %w [one two three]
  %i [one two three]

  # evil
  %r ((\ w+) - (\ d+))
  %r {\ w {1,2}\ d {2,5}}

  # good
  %r {(\ w+) - (\ d+)}
  %r|\ w {1, 2}\ d {2, 5} |


## Metaprogramming

* Avoid unnecessary meta-programming.

* Don't make a mess with core classes when you're writing libraries.
  (Do not use monkey-patch.) * The block shape of `class_eval` is preferable in the form of string interpolation.
  - when you use the string interpolation form, always use `__FILE__` and `__LINE__`,
  so code search makes sense:

    ```ruby
    class_eval 'def use_relative_model_naming?; true; end', __FILE__, __LINE__
    ```

  - `define_method` is better than `class_eval {def...}` x</code>.

* Prefer the use of blocks rather than the default format of `Hash #fetch`.

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

* Avoid using `method_missing` for metaprogramming, because it makes it difficult to read the code, the behavior is not listed in `#methods`, and misspelled method calls can work siliciously, example: `nukes.launch_state = false`. Instead, consider using delegation, proxy, or `define_method`. If necessary, use `method_missing`:

  - Are you sure to [also define `respond_to_missing?`](http://blog.marc-andre.ca/2010/11/methodmissing-politely.html)
  - Just catch methods with a well-defined prefix, such as `find_by_*` — make your code as assertive as possible.
  - Call `super` at the end of your definition
  - Delegate to assertive, not magical methods:

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
Prefer `public_send` over `send` so as not to bypass the `private`/`protected` visibility.

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

    def activate!# some code
    end
  end

  class Organization < ActiveRecord::Base
    include Activatable
  end

  linux_organization = Organization.find(...)# MAL - viola la privacidad
  linux_organization.send(:reset_token)
  # Bien - debería arrojar una excepción
  linux_organization.public_send(:reset_token)
  ```

* <a name="prefer-__send__"></a>
Prefer `__send__` over `send`, since `send` can overlap existing methods.

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


## Miscellaneous

* Write secure code with `ruby -w`.
* Avoid hashes as an optional parameter. Does the method do too much? (The object initializers are exceptions to this rule).
* Avoid methods greater than 10 LOC (lines of code). Ideally, most methods go to be less than 5 LOC. Empty lines do not count as relevant LOC.
* Avoid lists of parameters greater than three or four parameters.
* If you really need "global" methods, add them to your Kernel and turn them into `private`.
* Use instance variables in modules instead of global variables.

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

* Avoid `alias` when `alias_method`does the job better.
* Use `OptionParser` to parse complex command option lines and `ruby -s` for trivial command option lines.
* Write code in a functional way, avoiding mutation when that makes sense.
* Don't mute arguments except that is the purpose of the method.
* Avoid more than three levels of block nesting.
* Be consistent. In an ideal world, be consistent with these guides.
* Use common sense.
