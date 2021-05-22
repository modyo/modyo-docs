---
search: false
---

# Ruby

። :warning Developing section The following section is under development and has not yet been revised. :::

This Ruby style guide recommends best practices so that real world Ruby programmers can write code that can be maintained by other Ruby programmers in the real world. A style guide that reflects real-world uses is used, and a style guide that clings to an ideal that has been rejected by people assumes it is best not to use it at all — no matter how good it is.

The guide is divided into several sections of related rules. I tried adding the rationalization of the rules (if omitted I assumed it's pretty obvious).

## Source Code Structure

> Almost everyone is convinced that all styles except their own are ugly and illegible. Put aside the “except own” , and they're probably right... <br/> — Jerry Coffin (about indentation)

* Use `UTF-8` as the encoding of the source file.
* Use two **spaces** for each identation level. No tabs.

    ```ruby
    # wrong - four spaces
    def some_method
        do_something
    end

    # okay
    def some_method
      do_something
    end
    ```

* Use Unix-style line endings. (*By default BSD/Solaris/Linux/OSX users are protected, Windows users need to be very careful.)
    * If you're using Git you might want to add the following settings to protect your project from Windows line endings so they don't appear alone:

    ```bash
    $git config —global core.autocrlf true
    ```

* Do not use `;` to separate declarations and expressions. By convention - use one expression per line.

    ```ruby
    # bad
    puts' foobar '; # superfluous semicolon

    puts' foo '; puts' bar '# two expressions in the same line

    # good
    puts' foobar '

    puts' foo '
    puts' bar'

    puts' foo ',' bar '# this applies to particular puts
    ```

* Prefer a single-line format for each bodyless class definition.

    ```ruby
    # bad
    class FooError < StandarDerror
    end

    # almost good
    class FooError < StandarDerror; end

    # good
    FooError = Class.new (StandarDerror)
    ```

* Avoid single-line methods. Although they are somewhat popular, there are some particularities about their syntax to define them that make their use undesirable. In any case - there should not be more than one expression in a single-line method.

    ```ruby
    # bad
    def too_much; something; something_else; end

    # almost good - the first; need
    def no_braces_method; body end

    # almost good - the second; is optional
    def no_braces_ method; body; end

    # almost fine - syntax is valid, but not using; makes it a little difficult to read
    def some_method () body end

    # okay
    def some_method
      body
    end
    ```

    An exception to the rule is empty methods.

    ```ruby
    # okay
    def no_op; end
    ```

* Use spaces between operators, after commas, colons and points and commas, after `{` and before `}`. Blanks may (in mostly) irrelevant to the Ruby interpreter, but their proper use is the key to writing easy-to-read code.

    ```ruby
    sum = 1 + 2
    a, b = 1, 2
    1 > 2? true: false; puts' Hi '
    [1, 2, 3] .each { |e| puts e }
    ```

    There are some exceptions, with regard to operators, one is the exponent operator:

    ```ruby
    # bad
    e = M * c ** 2

    # good
    e = M * c**2
    ```


    Another exception is the slash operator in rational numbers:

    ```ruby
    # bad
    o_scale = 1/48r

    # good
    o_scale = 1/48r
    ```

    Another exception is the safe navigation operator:
    ```ruby
    # bad
    foo &. bar
    foo &.bar
    foo&. bar

    # good
    foo&.bar
    ```

* <a name="spaces-braces"></a>
Do not use spaces after `(`, `[` or before `]`, `)`. Use spaces after `{` and before `}`.

    ```ruby
    # bad
    some (arg) .other
    , 2, 3] .each{|e| puts e}

    # good
    some (arg) .other
    [1, 2, 3] .each { |e| puts e }
    ```

    `{` and `}` deserve special clarification, since are used for literal blocks and hashes, as well as expressions embedded in strings. Two styles are considered acceptable for literal hashes.

    ```ruby
    # okay - space after { y antes de }
    { one: 1, two: 2 }

    # okay - no space after { y antes de }
    {one: 1, two: 2}
    ```

    The first variant is a little easier to read (and possibly most popular in the Ruby community in general). The second variant has the advantage of having visual differentiation between blocks and literal hashes. Whichever you choose - use it consistently.

    As for embedded expressions, there are also two acceptable forms:

    ```ruby
    # well - no spaces
    “string#{expr}"

    # ok - could be said to be more readable
    “string#{ expr }”
    ```

* No spaces after `!`.

    ```ruby
    # Wrong
    ! something

    # good
    ! something
    ```

* Indenta `when` at the same level as `case`. Sé que muchos no estarán de acuerdo con esto, pero es el estilo establecido tanto en "The Ruby Programming Language" y "Programming Ruby".

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

* When you assign the result of a conditional expression to a variable, you retain the alignment of its branch.

    ```ruby
    # wrong - pretty complex
    kind = case year
    when 1850.. 1889 then 'Blues'
    when 1890.. 1909 then 'Ragtime'
    when 1910.. 1929 then 'New Orleans Jazz'
    when 1930.. 1939 then 'Swing'
    when 1940.. 1950 then 'Bebop'
    else 'Jazz'
    end

    result = if some_cond
      calc_something
    else
      calc_something_else
    end

    # well - it is apparent what is happening
    kind = case year
           when 1850.. 1889 then 'Blues'
           when 1890.. 1909 then 'Ragtime'
           when 1910.. 1929 then 'New Orleans Jazz'
           when 1930.. 1939 then 'Swing'
           when 1940.. 1950 then 'Bebop'
           else 'Jazz'
           end

    result = if some_cond
               calc_something
             else
               calc_something_else
             end

    # good (and with a more efficient space)
    kind =
      case year
      when 1850.. 1889 then 'Blues'
      when 1890.. 1909 then 'Ragtime'
      when 1910.. 1929 then 'New Orleans Jazz'
      when 1930.. 1939 then 'Swing'
      when 1940.. 1950 then 'Bebop'
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
      data = initialize (options)

      data.manipulate!

      data.result
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
  # bad
  class Foo
    attr_reader:foo
    def foo
      # do something...
    end
  end

  # ok
  class Foo
    attr_reader:foo

    def foo
      # do something...
    end
  end
  ```

* <a name="empty-lines-around-bodies"></a>
Do not use empty lines around methods, classes, modules, and blocks.

  ```ruby
  # bad
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

  # ok
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
Avoid commas in the last parameter when calling a method. Especially if the parameters aren't separated by lines

  ```ruby
  # wrong - It's easy to move, delete or add parameters, but still not recommended
  some_method (
    size,
    count,
    color,
  )

  # wrong
  some_method (size, count, color,)

  # okay
  some_method (size, count, color)
  ```

* Use spaces around the `=` operator when you assign default values to the parameters of the method:

    ```ruby
    # bad
    def some_method (arg1=:default, arg2=nil, arg3= [])
      # do something...
    end

    # well
    def some_method (arg1 =:default, arg2 = nil, arg3 = [])
      # do something...
    end
    ```

    While several Ruby books suggest the first style, the second is much more used in practice (and you could even say that it is easier to read).

* Avoid using line continuous with '\' when not necessary. In practice, avoid using line continuation in any case, except for string concatenation.

    ```ruby
    # bad
    result = 1 -\
             2

    # good (but still looks horrible)
    result = 1\
             - 2

    # good - Recommended use
    long_ string = 'First part of the long string'\
                  'and second part of the long string'
    ```

* Continuing a method invocation chained on another line keep `.` on the second line.

    ```ruby
    # wrong - you need to read the first line to understand the second line
    one.two.three.
      four

    # okay - you immediately see what is going on the second line
    one.two.three
      .four
    ```

* Aligns the parameters of a method call if they occupy more than one line. When parameters are aligned, it is not appropriate that it is more indentation than it is appropriate, and using a single indent for the lines after the first parameter is also acceptable.

    ```ruby
    # starting point (line is very long)
    def send_mail (source)
      Mailer.Deliver (to: 'bob@example.com', from: 'us@example.com', subject: 'Important message', body: source.text)
    end

    # wrong (double indented)
    def send_mail (source)
      Mailer.Deliver (
          to: 'bob@example.com',
          from: ' us@example.com ',
          subject: 'Important message',
          body: source.text)
    end

    # ok (idted under the first parameter)
    def send_mail (source)
      Mailer.Deliver (to: 'bob@example.com',
                     from: 'us@example.com',
                     subject: 'Important message',
                     body: source.text)
    end

    # fine (normal indented)
    def send_mail (source)
      Mailer.Deliver (
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
    # wrong - how many 0s are there?
    num = 1000000

    # well - much easier to read by the human brain
    num = 1_000_000
    ```
* <a name="numeric-literal-prefixes"></a>
Use lowercase letters for numeric literals prefixes. `0o` for octal base, `0x` for hexadecimal base and `0b` for binary base. Do not use `0d` for decimal numbers.

  ```ruby
  # bad
  num = 01234
  num = 0O1234
  num = 0X12AB
  num = 0B10101
  num = 0D1234
  num = 0d1234

  # good - it's easy separate prefixes from numbers
  num = 0o1234
  num = 0x12ab
  num = 0b10101
  num = 12

* Use RDoc and its conventions for API documentation. Do not leave
  a blank line between the comment block and the `def`.
* Limit lines to 80 characters.
* Avoid blanks.
* Do not use block comments. They can't have
  blanks before and are not as easy to understand them as comments.

    ```ruby
    # wrong
    == begin
    comment line
    another comment line
    == end

    # good
    # comment line
    # another comment line
    ```

## Syntax

* Use `።` only to reference constants (this includes classes and modules) and constructs (such as `Array ()` or `Nokogiri። HTML ()`). Never use `።` for method invocation.

    ```ruby
    # bad
    SomeClass። some_method
    some_object። some_method

    # good
    someClass.Some_method
    some_object.some_method
    someMethod።SomeClass። SOME_CONST
    SomoDule።SomeClass ()
    ```

* <a name="colon-method-definition"></a>
  Do not use `።` to define class methods.

  ```ruby
  # nal
  class Foo
    def self። some_method
    end
  end

  # okay
  class Foo
    def self. some_method
    end
  end
  ```

* Use `def` with parentheses when you have arguments. Ignores the parentheses when the method does not accept any arguments.

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
Use parentheses around arguments for invocation of a method, especially if the first argument starts with an open parenthesis `(`, such as: `f (3 + 2) + (1)`.

  ```ruby
  # bad
  x = math.sin and
  # good
  x = math.sin (y)

  # wrong
  array.delete e
  # okay
  array.delete (e)

  # bad
  temperance = person.New 'Temperance', 30
  # good
  temperance = person.New ('Temperance', 30)
  ```

  Always skip parentheses for:

  * Methods without arguments:

    ```ruby
    # bad
    Kernel.exit! ()
    2.even? ()
    fork ()
    'test'.upcase ()

    # okay
    kernel.exit!
    2. Even?
    fork
    'test'.upcase
    ```

  * Methods that are part of an internal DSL (for example: Rake, Rails, RSpec):

    ```ruby
    # bad
    validates (:name, presence: true)
    # good
    validates:name, presence: true
    ```

  * Methods that are keywords in Ruby:

    ```ruby
    class Person
      # bad
      attr_reader (:name, :age)
      # good
      attr_reader:name, :age

      # body omitted
    end
    ```

  You can skip the parentheses for:

  * Methods that have the reserved word degree (`keyword`) in ruby, but that declare nothing. Example:

    ```ruby
    # ok
    puts (temperance.age)
    system ('ls')
    # well also
    puts temperance.age
    system 'ls'
    ```

* <a name="optional-arguments"></a>
  Defines the optional arguments of a method, at the end of the argument list. Ruby has some unexpected results when optional arguments are at the top of the argument list.

  ```ruby
  # bad
  def some_method (a = 1, b = 2, c, d)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_method ( 'w', 'x') # => '1, 2, w, x'
  some_method ('w', 'x', 'y') # => 'w, 2, x, y'
  some_method ('w', 'x', 'y', 'y', 'z') # => 'w, x, y, z'

  # fine
  def some_method (c, d, a = 1, b = 2)
    puts "#{a}, #{b}, #{c}, #{d}"
  end

  some_ method ('w', 'x') # => '1, 2, w, x'
  some_method ('w', 'x', 'y') # => 'y, 2, w, x'
  some_method ('w', 'x', 'y', 'z') # => 'y, z, z, z
  ```

* <a name="parallel-assignment"></a>
  Prevents the use of parallel mappings for defining variables. Parallel assignment is allowed when it is the result of a previously called method. Parallel mapping is allowed when using the splat operator (* before a variable) or swapping a variable (swap). Parallel assignment is more difficult to read than a separate assignment.

  ```ruby
  # bad
  a, b, c, d = 'foo', 'bar', 'baz', 'foobar'

  # good
  a = 'foo'
  b = 'bar'
  c = 'baz'
  d = 'foobar'

  # okay - exchanging a variable
  # Variable swapping or variable exchange is a special case
  # because it allows to exchange the value of 2 variables
  a = 'foo'
  b = 'bar'

  a, b = b, a
  puts a # => 'bar'
  puts b # => 'foo'

  # ok - using the return value of a method
  # in this case returns more than 1 value
  def multi_return
    [1, 2]
  end

  first, second = multi_return

  # fine - using the splat (*) operator
  first, *list = [1, 2, 3, 4] # first => 1, list => [2, 3, 4]

  hello_array = *'Hello' # => ["Hello"]

  a = * (1.. 3) # => [1, 2, 3]
  ```

* <a name="trailing-underscore-variables"></a>
Prevents unnecessary use of the `_` variable during parallel assignment. Variables named with an underscore `_` at the beginning of the name are preferred to only use an underscore `_`. Use underscore `_` only in combination with a variable `splat` defined to the left side of assignment and only if the splat variable has no underscore `_` at the beginning of the name.

  ```ruby
  # bad
  foo = 'one, two, three, four, five'
  # Unnecessary assignment. No agrega ninguna información útil
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

* Never use `for`, unless you know exactly what you're using it for. En su lugar deberías usar los iteradores la mayor parte del tiempo. `for` should be implemented in the form of `each` (so you're adding a level of indirection), but with a peculiarity - `for` does not introduce a new scope (as opposed to `each`) and the variables that are defined within of its block are visible outside it.

    ```ruby
    arr = [1, 2, 3]

    # mal
    for elem in arr do
      puts elem
    end

    # elem can be read outside the loop for
    elem #=> 3

    # well
    arr.each { |elem| puts elem }

    # elem cannot be read out of block each
    elem #=> nameError: undefined local variable or method `elem'
    ```

* Never use `then` for `if/unless` with multilines.

    ```ruby
    # bad
    if some_condition then
      # body omitted
    end

    # okay
    if some_condition
      # body omitted
    end
    ```

* Always write the condition on the same line for conditionals `if`/`unless` with multilines.

    ```ruby
    # bad
    if
      some_condition
      do_something
      do_something_else
    end

    # good
    if some_condition
      do_something
      do_something_else
    end
    ```

* Prefer ternary operator (`? :`) instead of constructions `if/then/else/end`. It is more common and obviously more concise.

    ```ruby
    # bad
    result = if some_condition then something else end

    # good
    result = some_condition? something: something_else
    ```

* Use one expression per row by ternary operator. Esto también significa que los operadores ternarios no deben anidarse. It is preferable to use constructs `if/else` in these cases.

    ```ruby
    # bad
    some_condition? (nested_condition? nested_something: nested_something_else): something_else

    # okay
    if some_condition
      nested_condition? nested_something: nested_something_else
    else
      something_else
    end
    ```

* Never use `if x:...` - was eliminated in Ruby 1.9. Use the ternary operator instead.

    ```ruby
    # bad
    result = if some_condition: something else else end

    # good
    result = some_condition? something: something_else
    ```

* Never use `if x;...`. Use the ternary operator instead.

* Use `when x then...` for one-line conditionals. The syntax alternative `when x:...` was eliminated in Ruby 1.9.

* Never use `when x;...`. Look at the above rule.

* Use `!` instead of `not`.

    ```ruby
    # wrong - parentheses are required by operator precedence
    x = (not something)

    # good
    x =! something
    ```

* Avoid the use of `!!`.

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

* The words `and` and `or` are prohibited. They're just not worth . Instead, always use `&&` and `||`.

    ```ruby
    # bad
    # boolean expression
    if some_condition and some_other_condition
      do_something
    end

    # control flow
    document.saved? or document.save!

    # okay
    # boolean expression
    if some_condition && some_other_condition
      do_something
    end

    # control flow
    document.saved? || document.save!
    ```

* Avoid using `? :` (ternary operator) on multilines; instead use `if/unless`.

* I favored using the `if/unless` switch when you have to type in a line. Another good alternative is the use of flow control with `&&/||`.

    ```ruby
    # bad
    if some_condition
      do_something
    end

    # okay
    do_something if some_condition

    # another good option
    # Using flow control
    some_condition && do_something
    ```

* <a name="no-multiline-if-modifiers"></a>
Evita el uso de modificadores `if`/`unless` al final de un bloque que se compone con mas de una lineal.

  ```ruby
  # bad
  10.times do
    # multi-line body omitted
  end if some_condition

  # good
  if some_condition
    10.times do
      # multi-line body omitted
    end
  end
  ```

* <a name="no-nested-modifiers"></a>
Avoid the sudo of modifiers `if`/`unless`/`while`/`until` in a way nested. Better properly use `&&`/`||` if.

  ```ruby
  # bad
  do_something if other_condition if some_condition

  # good
  do_something if some_condition && other_condition
  ```

* Favors `unless` over `if` for negative conditions (or flow control with `||`).

    ```ruby
    # bad
    do_something if! some_condition

    # wrong
    do_something if not some_condition

    # okay
    do_something unless some_condition

    # another good option
    # Using control flows
    some_condition || do_something
    ```

* Never use `unless` with `else`. Rewrite so that the positive case comes first.

    ```ruby
    # bad
    unless success?
      puts' failure '
    else
      puts' success'
    end

    # okay
    if success?
      hits' success'
    else
      puts' failure '
    end
    ```

* Do not use parentheses around the condition of `if/unless/while/until`.

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

* Never use `while/until` condition `do` for a `while/until` multiline.

    ```ruby
    # bad
    while x > 5 do
      # body omitted
    end

    until x > 5 do
      # body omitted
    end

    # ok
    while x > 5
      # body omitted
    end

    until x > 5
      # body omitted
    end
    ```

* I favored using the `while/until` switch when you can write the comparison on a line.

    ```ruby
    # bad
    while some_condition
      do_something
    end

    # okay
    do_something while some_condition
    ```

* I favored `until` over `while` for negative conditions.

    ```ruby
    # bad
    do_something while! some_condition

    # well
    do_something until some_condition
    ```

* <a name="infinite-loop"></a>
Use `Kernel #loop` instead of `while/until` when you need an infinite cycle.

    ```ruby
    # bad
    while true
      do_something
    end

    until false
      do_something
    end

    # okay
    loop do
      do_something
    end
    ```


* Use `Kernel #loop` with break instead of `begin/end/until` or `begin/end/while` to validate at the end of each cycle.

   ```ruby
   # bad
   begin
     puts val
     val += 1
   end while val < 0

   # good
   loop do
     puts val
     val += 1
     break unless val < 0
   end
   ```

* Skip parentheses around parameters for methods that are part of an internal DSL (example: Rake, Rails, RSpec), methods that have “keyword” status in Ruby (example: `attr_reader`, `puts`) and attribute accessory methods. Use parentheses around of the arguments of all other method calls.

    ```ruby
    class Person
      attr_reader:name, :age

      # omitted
    end

    temperance = person.New ('Temperance', 30)
    temperance.name

    puts temperance.age

    x = math.sin (y)
    array.delete (e)

    bowling.score.should == 0
    ```

* Skip external keys around the implicit options of a hash.

    ```ruby
    # bad
    user.set ({name: 'John', age: 45, permissions: { read: true } })

    # good
    user.set (name: 'John', age: 45, permissions: { read: true })
    ```

* Skip both external braces and parentheses for methods that are part of an internal DSL.

    ```ruby
    class Person < ActiveRecord።Base
      # bad
      validates (:name, {presence: true, length: { within: 1..10 } })

      # good
      validates:name, presence: true, length: { within: 1..10 }
    end
    ```

* <a name="single-action-blocks"></a>
Use process invocation when you only perform one operation on a block

  ```ruby
  # bad
  names.map { |name| name.upcase }

  # good
  names.map (&:upcase)
  ```

* Choose `{...}` over `c... end` for one-line blocks. Avoid using `{...}` for multiline blocks (multiline chaining is always horrible). Always use `c... end` for “flow contorl” and “method definitions” (e.g. in Rakefiles and some DSLs). Avoid using `do... end` when you're chaining methods.

    ```ruby
    names = ['Bozhidar', 'Steve', 'Sarah']

    # wrong
    names.each do |name|
      puts name
    end

    # good
    names.each { |name| puts name }

    # wrong
    names.select do |name|
      name.start_with? ('S')
    end.map { |name| name.upcase }

    # ok
    names.select {|name| name.start_with? ('S')} .map (&:upcase)
    ```

    It might be that some people think that multiline chaining would look good with using {...}, but they should actually ask themselves - it's actually readable code and the contents of the blocks can be extracted with elegant methods?

* Avoid using `return` when flow control is not required.

    ```ruby
    # bad
    def some_method (some_arr)
      return some_arr.size
    end

    # good
    def some_method (some_arr)
      some_arr.size
    end
    ```

* Avoid using `self` when it is not necessary. (Only needed when the value of the class's own variable is overwritten.)

    ```ruby
    # bad
    def ready?
      if self.last_reviewed_at > self.last_updated_at
        self.worker.update (self.content, self.options)
        self.status =:in_progress
      end
      self.status ==: verified
    end

    # ok
    def ready?
      if last_reviewed_at > last_updated_at
        worker.update (content, options)
        self.status =:in_progress
      end
      status ==:verified
    end
    ```

* As a convention, avoid obscure methods with local variables, except that both are the same.

    ```ruby
    class Foo
      attr_accessor:options

      # ok
      def initialize (options)
        self.options = options
        # both options and self.options are equivalent here
      end

      # bad
      def do_something (options = {})
        unless options [:when] ==:later
          output (self.options [:message])
        end
      end

      # well
      def do_something (params = {})
        unless params [:when] ==:later
          output (options [:message])
        end
      end
    end
    ```

* Do not use the return value of `=` (assignment) in conditional expressions unless the assignment is in parentheses. Esta es una expresión bastante popular entre los Rubyistas que se refiere a veces como *asignación segura en condiciones*.

    ```ruby
    # bad (+ a warning)
    if v = array.grep (/foo/)
      do_something (v)
...
    end

    # okay (MRI would still complain, per ruboCop not)
    if (v = array.grep (/foo/))
      do_something (v)
...
    end

    # okay
    v = array.grep (/foo/)
    if v
      do_something (v)
...
    end
    ```
* <a name="self-assignment"></a>
Use abbreviations to assign values after an operation.

  ```ruby
  # wrong
  x = x + and
  x = x * and
  x = x**y
  x = x/y
  x = x || y
  x = x && y

  # well
  x += and
  x *= and
  x **= and
  x /= and
  x ||= and
  x &&= y
  ```

* Use `||=` freely to initialize variables.

    ```ruby
    # assigns the name Bozhidar, only if the variable 'name' is nil or false
    name ||= 'Bozhidar'
    ```

* Do not use `||=` to initialize Boolean variables. (Consider what would happen if the current value was `false`.)

    ```ruby
    # bad - would assign true to enabled even though it was already false
    enabled ||= true

    # good
    enabled = true if enabled.nil?
    ```

* <a name="double-amper-preprocess"></a>
Use `&&=` to preprocess variables that may not exist. Using `&&=` you will change the value of the variable, only if it exists, eliminating the need to check its existence using a `if`.

  ```ruby
  # bad
  if something
    something = something.downcase
  end

  # wrong
  something = something? something.downcase: nil

  # ok
  something = something.downcase if something

  # ok
  something = something && something.downcase

  # best
  something &&= something.downcase
  ```

* Avoid explicit use of the identical equality operator `===`. As the name suggests, it is meant to be used implicitly by expressions `case` and outside them provides rather confusing code.

    ```ruby
    # wrong
    Array === something
    (1.. 100) === 7
    /something/ === some_string

    # good
    something.is_a? (Array)
    (1.. 100) .include? (7)
    some_string =~ /something/
    ```
* <a name="eql"></a>
Don't use `eql?` when you can use `==`. The strict semantica comparator offered by `eql?` is rarely needed in practice.

  ```ruby
  # bad - eql? is the same as == for strings
  'ruby'.eql? some_str

  # well
  'ruby' == some_str

  # eql? does it make sense here, if you want to differentiate between Integer and Float 1
  1.0.eql? x 
  ```

* Evita usar variables especiales de tipo Perl (como `$:`, `$;`, etc.). They are quite cryptic and their use anywhere except one-line scripts is discouraged. Use the human-friendly aliases provided by the bookstore `English`.

    ```ruby
    # bad
    $: .unshift File.dirName (__FILE__)

    # good
    require 'English'
    $LOAD_PATH.unshift File.dirName (__FILE__)
    ```

* Never use a space between the name of a method and opening a parenthesis.

    ```ruby
    # wrong
    f (3 + 2) + 1

    # good
    f (3 + 2) + 1
    ```

* If the first argument of a method starts with an open parenthesis, always uses parentheses in the method invocation. For example, writes `f ((3 + 2) + 1)`.

* Always run Ruby's interpreter with the `-w`option, so that warns if any of the above rules are forgotten!

* <a name="no-nested-methods"></a>
Do not use nested methods, better use lambda functions. Nested methods currently produce methods in the same scope (example: classes) Also the nested method will be redefined each time the method containing it is called.

  ```ruby
  # bad
  def foo (x)
    def bar (y)
      # body omitted
    end

    bar (x)
  end

  # okay - although it equals the above, the improvement is that 'bar' will not be redefined every time 'foo' is called
  def bar (y)
    # body omitted
  end

  def foo (x)
    bar (x)
  end

  # well also
  def foo (x)
    bar = ->(y) {... }
    bar.call (x)
  end
  ``

* Use the new literal lambda syntax for single-line blocks.
  Use the `lambda` method for multiline blocks.

    ```ruby
    # wrong
    l = lambda {|a, b| a + b}
    l.call (1, 2)

    # correct, but it looks extremely uncomfortable
    l = ->(a, b) do
      tmp = a * 7
      tmp * b/50
    end

    # ok - single line
    l = ->(a, b) {a+ b}
    l.call (1, 2)

    # well - multiline block
    l = lambda do |a, b|
      tmp = a * 7
      tmp * b/50
    end
    ```
* <a name="stabby-lambda-with-args"></a>
Do not omit parentesis when you are defining a lambda function that uses parameters.

  ```ruby
  # bad
  l = ->x, y {something (x, y)}

  # good
  l = ->(x, y) {something (x, y)}
  ```

* <a name="stabby-lambda-no-args"></a>
Skip parentheses if your lambda function does not need parameters.

  ```ruby
  # bad
  l = ->() { something }

  # good
  l = -> { something }
  ```

* Choose `proc` over `Proc.New`.

    ```ruby
    # bad
    p = proc.New { |n| puts n }

    # good
    p = proc { |n| puts n }
    ```

* Choose `proc.call ()` over `proc []` or `proc. ()` for both lambdas and procs.

    ```ruby
    # wrong - looks similar to an Enumeration access
    l = ->(v) { puts v }
    l[1]

    # also bad - not common syntax
    l = ->(v) { puts v }
    l. (1)

    # good
    l = ->(v) { puts v }
    l.call (1)
    ```

* Use `_` for unused block parameters.

    ```ruby
    # bad
    result = hash.map {|k, v| v + 1}

    # good
    result = hash.map {|_, v| v + 1}
    ```

* Usa `$stdout/$stderr/$stdin` en lugar de `STDOUT/STDERR/STDIN`. `STDOUT/STDERR/STDIN` are constants, and while you can reassign constants (possibly to redirect a process) in Ruby, you're going to have an interpreter warning if You do that.

* Use `warn` instead of `$stderr.puts`. Apart from being more concise and clear, `warn` allows you to delete warnings if you need it (setting the warning level to 0 via `-W0`).

* Elige usar `sprintf` y su alias `format` por sobre el método críptico `String#%`.

    ```ruby
    # bad
    '%d %d'% [20, 10]
    # => '20 10'

    # good
    sprintf ('%d %d', 20, 10)
    # => '20 10'

    # best
    sprintf ('%<first>d%<second>d', first: 20, second: 10)
    # => '20 10'

    # ok
    format ('%d %d', 20, 10)
    # => '20 10'

    # best
    format ('%<first>d%<second>d', first: 20, second: 10)
    # => '20 10'
    ```

* <a name="named-format-tokens"></a>
When you use name tokens, please use `%<name>s` by over `%{name}`, because at the time of referencing them you are referencing the type of value the token will take.

  ```ruby
  # bad
  format ('Hello, %{name}', name:' John ')

  # good
  format ('Hello,%<name>s', name:' John ')
  `

* Choose the use of `Array #join `over cryptic `Array#*` with
  a string argument.

    ```ruby
    # wrong
    %w(one two three) * ','
    # => 'one, two, three'

    # good
    %w(one two three) .join (',')
    # => 'one, two, three'
    ```

* Use `[*var]` or `Array ()` instead of explicit verification `Array`, when working with a variable that you want to treat as an Array, but you're not sure it's an array.

    ```ruby
    # bad
    paths = [paths] unless paths.is_a? Array
    paths.each {|path| do_something (path)}

    # good
    [*paths] .each {|path| do_something (path)}

    # okay (and a little more readable)
    Array (paths) .each {|path| do_something (path) }
    ```

* Use ranges or `Comparable #between?` instead of a complex logical comparison where possible.

    ```ruby
    # bad
    do_something if x >= 1000 && x <= 2000

    # good
    do_something if (1000.. 2000) .include? (x)

    # okay
    do_something if x.between? (1000, 2000)
    ```

* Choose the use of underlying methods instead of explicit comparisons with `==`. Numerical comparisons are OK.

    ```ruby
    # bad
    if x% 2 == 0
    end

    if x% 2 == 1
    end

    if x == nil
    end

    # good
    if x. even?
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
Don't explicitly use no-`nil` to validate a variable, unless you're dealing with Bolean variables.

    ```ruby
    # bad
    do_something if! something.nil file?
    do_something if something! = nil

    # okay
    do_something if something

    # okay - only if you are sure that the variable is boleana
    def value_set?
      ! @some_boolean .nil file?
    end
    ```

* Avoid the use of blocks `BEGIN`.

* Never use `END`blocks. Instead use `Kernel #at_exit`.

    ```ruby
    # bad

    END {puts 'Goodbye! ' }

    # okay

    at_exit {puts 'Goodbye! ' }
    ```

* Avoid the use of flip-flops.

* Avoid the use of nested conditionals for flow control. Choose a guard clause when you can say invalid data. A guard clause is a conditional at the beginning of a function that tries to get out of it as soon as you can.

    ```ruby
    # bad
      def compute_thing (thing)
        if thing [:foo]
          update_with_bar (thing)
          if thing [:foo] [:bar]
            partial_compute (thing)
          else
            re_compute (thing)
          end
        end
      end

    # ok
      def compute_thing (thing)
        return unless thing [:foo]
        update_with_bar (thing [:foo])
        return re_compute (thing) unless thing [:foo] [:bar]
        partial_compute (thing)
      end
    ```

  Prefer `next` in cycles (loop) instead of conditional blocks.

  ```ruby
  # bad
  [0, 1, 2, 3] .each do |item|
    if item > 1
      puts item
    end
  end

  # good
  [0, 1, 2, 3] .each do |item|
    next unless item > 1
    puts item
  end
  ```


* <a name="map-find-select-reduce-size"></a>* Choose `map` by over `collect`, `find` by over `detect`, `select` by over `find_all`, `reduce` by over `inject` and `size` by about `length`. This is not a difficult requirement; if using aliases enhances readability, it's okay to use them. Rhyming methods are inherited from Smalltalk and are not common in other programming languages. The reason to use `select` over `find_all` is because it goes very well along with `reject` and its name is quite self-explanatory.

* <a name="count-vs-size"></a>
Do not use `count` as a substitute for `size`. For objects of type `Enumerable`, as the entire object will be iterated to know the number of elements.

  ```ruby
  # bad
  some_hash.count

  # good
  some_hash.size
  ```

* <a name="flat-map"></a>
Use `flat_map` instead of `map` + `flatten`.  This does not apply for arrays with a depth greater than 2, for example.  If `users.first.songs == ['a', ['b', ['c']]`, then use `map + flatten` instead of `flat_map`. `flat_map` flatten the array with depth 1, while `flatten` flatten it completely.

  ```ruby
  # bad
  all_songs = users.map (&:songs) .flatten.uniq

  # good
  all_songs = users.flat_map (&:songs) .uniq
  ```

* <a name="reverse-each"></a>
Prefer `reverse_each` to `reverse.each` because some classes that include `Enumerable` can provide a efficient implementation. Even in the worst case if the class does not implement an improvement the overall since `Enumerable` will be as efficient as `reverse.each`.

  ```ruby
  # bad
  array.reverse.each {... }

  # okay
  array.reverse_each {... }


## Names

> The only real difficulties in programming are invalidating
> cache and naming things. <br/>
> — Phil Karlton

* Reference names in English.

    ```ruby
    # wrong - reference is not using ascii characters
    zaplata = 1_000

    # wrong - the reference is a Bulgarian word, written with Latin characters (instead of Cyrillic)
    zaplata = 1_000

    # good
    salary = 1_000
    ```
* Use `snake_case` for symbols, methods, and variables.

    ```ruby
    # bad
    :'some symbol'
    :SomeSymbol
    :SomeSymbol

    someVar = 5

    def SomeTod
...
    end

    def SomeThod
...
    end

    # ok
    : some_symbol

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

* Use `CamelCase` for classes and modules.  (I kept all acronyms like HTTP, RFC, XML in uppercase.)

    ```ruby
    # bad
    class Someclass
...
    end

    class Some_Class
...
    end

    class SomExml
...
    end

    # okay
    class SomeClass
...
    end

    class SomExml
...
    end
    ```

* <a name="snake-case-files"></a>
Use `snake_case` to name files, example. `hello_world.rb`.

* <a name="snake-case-dirs"></a>
Use `snake_case` to name directories, example. `lib/hello_world/hello_world.rb`.

* <a name="one-class-per-file"></a>
Try to have only one Class or Module per source file. Name the file with the name of the Class or Module, but replacing the name from `CamelCase` to `snake_case`. example. `some_class.rb`

    ```ruby
    # good
    class SomeClass
      # No body
    end
    ```

* Use `SCREAMING_SNAKE_CASE` for constants.

    ```ruby
    # wrong
    someConst = 5

    # good
    SOME_CONST = 5
    ```

* The names of the methods they claim (methods that return a boolean value ) must end with a question sign. (example: `Array #empty?`). Methods that do not return a boolean, must not end with a question sign.

* <a name="bool-methods-prefix"></a>
Avoid using auxiliary prefixes such as (`is`, `does`, or `can`) for Method names. These words are redundant and inconsistent with the style of Bolean Methods found in Ruby core library, as for example `empty?` or `include?`.

  ```ruby
  # bad
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

  # ok
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

* The names of potentially dangerous *methods* (example: methods modifying `self` or arguments, `exit!` - does not run finishers as does `exit`etc.) must end with an exclamation point only if there is a secure version of that method *dangerous*.

    ```ruby
    # wrong - there is no 'safe' method called equal
    class Person
      def update!
      end
    end

    # ok
    class Person
      def update
      end
    end

    # okay
    class Person
      def update!
      end

      def update
      end
    end
    ```

* Defines a non-bang (safe) method relative to the bang (dangerous) method if possible.

    ```ruby
    class Array
      def flatten_once!
        res = []

        each do |e|
          [*e] .each {|f| res << f}
        end

        replace (res)
      end

      def flatten_once
        dup.flatten_once!
      end
    end
    ```

* When using `reduce` with small blocks, name arguments `|a, e|` (accumulator, element).
* When you define binary operators, name the argument as `other` (`<<` and `[]` are exceptions to the rule, since its semantics are different).

    ```ruby
    def + (other)
      # body omitted
    end
    ```

## Comments

> Good code is your best documentation. When you're about to add a comment, ask yourself: “How can I improve code so that this comment is not necessary?” Improve the code and then document it to make it even clearer. <br/> — Steve McConnell

* Write self-documented code and ignore the rest of this section. Seriously!
* Write your comments in English to avoid problems with special characters.
* Use a space between the first character `#` in the comment and the text of the comment.
* Comments that are longer than a word are capitalized and use score. Use [a space](http://es.wikipedia.org/wiki/Espacio_entre_oraciones) after the points.
* Avoid surviving comments.

    ```ruby
    # bad
    counter += 1 # Increments counter by one.
    ```

* I kept the existing comments up to date. Un comentario viejo es peor que no utilizar comentarios.

> Good code is like a good joke - no need explanation <br/> — Russ Olsen

* Avoid writing comments to explain bad code. It will refactor code to make it more self-explanatory. (Do it or don't - there are no attempts. —Yoda)

### Comments Notes

* Usually the notes have to be written immediately in the first line above the code to comment.
* The keyword of the note is followed by colon and a space, and then a note describing the problem.
* Si se son necesarias varias líneas para describir el problema, las líneas subsiguientes tienen que tener una sangría de dos espacios después del `#`.

    ```ruby
    def bar
      # FIXME: This has been crashed occasionally since v3.2.1. It may
      # be related to the barbaZutil upgrade.
      baz (:quux)
    end
    ```

* In cases where the problem is so obvious that any documentation was redundant, the notes can be left at the end of that line, without any note. Its use should be the exception and not the rule.

    ```ruby
    def bar
      sleep 100 # OPTIMIZE
    end
    ```

* Use `TODO` to highlight missing features or features that need to be added later.
* Use `FIXME` to highlight broken code that needs to be fixed.
* Use `OPTIMIZE` to highlight slow or inefficient code that can cause performance problems.
* Use `HACK` to highlight code that uses questionable practices that do not look good and should be refactorized as soon as possible.
* Use `REVIEW` to highlight anything that needs to be reviewed to confirm that it is working as it should. For example: `REVIEW: Are
we sure this is how the client does X currently?`
* Use another word as a point if you feel appropriate, but make sure to document them in the `README` of your project or similar.


### Magic Comments

* <a name="magic-comments-first"></a>
Position a magical comment on all the code and documentation of a file (except for [Shebangs](https://es.wikipedia.org/wiki/Shebang), we'll talk about them later).

  ```ruby
  # bad
  # Some documentation about Person

  # frozen_string_literal: true
  class Person
  end

  # good
  # frozen_string_literal: true

  # Some documentation about Person
  class Person
  end
  ```

* <a name="below-shebang"></a>
Position a magic comment below `shebangs` if there is one present in the file.

  ```ruby
  # bad
  # frozen_string_literal: true
  #! /usr/bin/env ruby

  app.parse (ARGV)

  # ok
  #! /usr/bin/env ruby
  # frozen_string_literal: true

  app.parse (ARGV)
  ```

* <a name="one-magic-comment-per-line"></a>
Use a magic comment per line, if you need to use more than one.

  ```ruby
  # bad
  # -*- frozen_string_literal: true; encoding: ascii-8bit -*-

  # good
  # frozen_string_literal: true
  # encoding: ascii-8bit
  ```

* <a name="separate-magic-comments-from-code"></a>
Separate magic comments from the rest of the code or documentation using a white line.

  ```ruby
  # bad
  # frozen_string_literal: true
  # Some documentation for Person
  class Person
    # Some code
  end

  # good
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
      extend somemodule
      include Anothermodule

      # constants are next
      SOME_CONSTANT = 20

      # afterwards we have attribute macros
      attr_reader:name

      # followed by other macros (if any)
      validates:name

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
Separate multiple `mixins` with multiple statements (separate lines).

  ```ruby
  # bad
  class Person
    include Foo, Bar
  end

  # good
  class Person
    # multiple mixins go in separate statements
    include Foo
    include Bar
  end
  ```

* <a name="file-classes"></a>
Do not nite Multilinear Classes within another Class. Try to separate each file into different files within a folder that is called as the Class in which you want to nest them. Example.

  ```ruby
  # bad

  # foo.rb
  class Foo
    class Bar
      #30 methods inside
    end

    class Car
      #20 methods inside
    end

    #30 methods inside
  end



  # good

  # foo.rb
  class Foo
    #30 methods inside
  end

  # foo/bar.rb
  class Foo
    class Bar
      #30 methods inside
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
Defines (and reopens) Namespace Classes and Modules using a specific nesting. Using the `።` range resolution operator you can lead to amazing constant searches due to the lexical range of Ruby [lexical scoping](https://cirw.in/blog/constant-lookup.html), which depends on the Module which is nested from the point of the definition. Example.

  ```ruby
  module Utilities
    class Queue
    end
  end

  # wrong
  class Utilities።Store
    Module.nesting # => [Utilities። Store]

    def initialize
      # Refers to the top level። Queue class because Utilities isn't in the
      # current nesting chain.
      @queue = Queue.New
    end
  end

  # ok
  module Utilities
    class WaitingList
      module.Nesting # => [Utilities። WaitingList, Utilities]

      def initialize
        @queue = Queue.New # Refers to Utilities።Queue
      end
    end
  end
  ```

* Prefer modules to classes that have only class methods. Classes should be used only when it makes sense to create instances outside them.

    ```ruby
    # bad
    class someClass
      def self.some_method
        # body omitted
      end

      def self f.some_other_method
      end
    end

    # ok
    module someClass
      module_function

      def some_method
        # body omitted
      end

      def some_other_method
      end
    end
    ```

* Choose the use of `module_function` over `extend self` when want to change the instance methods of a module in a class method.

    ```ruby
    # bad
    module Utilities
      extend self

      def parse_something (string)
        # do stuff here
      end

      def other_utility_method (number, string)
        # do some more stuff
      end
    end

    # good
    module Utilities
      module_function

      def parse_something (string)
        # do stuff here
      end

      def other_utility_method (number, string)
        # of some more stuff
      end
    end
    ```

* When designing class hierarchies, make sure that they are used to [Liskov Substitution Principle](http://es.wikipedia.org/wiki/Principio_de_sustituci%C3%B3n_de_Liskov).
* Try to make your classes as [SOLID](http://es.wikipedia.org/wiki/SOLID_(object-oriented_design)) as possible.
* Always provides a `to_s` method for classes representing domain objects.

    ```ruby
    class Person
      attr_reader:first_name, :last_name

      def initialize (first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end

      def to_s
        “# {@first_name} # {@last_name}”
      end
    end
    ```

* Use the `attr` family of functions to define trivial accessors or mutators.

    ```ruby
    # wrong
    class Person
      def initialize (first_name, last_name)
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

    # okay
    class Person
      attr_reader:first_name, :last_name

      def initialize (first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end
    end
    ```

* <a name="accessor_mutator_method_names"></a>
For the `accessors` and `mutators`, avoid using prefixes such as `get_` and `set_` in function names. It is a convention in Ruby to use the attribute name (`attr_name`) for the functions of type (readers) and `attr_name=` for mutators (writers).

  ```ruby
  # bad
  class Person
    def get_name
      “# {@first_name} # {@last_name}”
    end

    def set_name (name)
      @first_name, @last_name = name.split ('')
    end
  end

  # ok
  class Person
    def name
      “# {@first_name} # {@last_name}”
    end

    def name= (name)
      @first_name, @last_name = name.split (')
    end
  end
  ```

* Avoid the use of `attr`. Instead use `attr_reader` and `attr_accessory`.

    ```ruby
    # wrong - create a single attribute accessor (deprecated in 1.9)
    attr:something, true
    attr:one, :two, :three # behaves as attr_reader

    # good
    attr_accessor:something
    attr_reader: one, :two, :three
    ```

* Consider using a `Struct.new` to define a class. `Struct.new` defines trivial accessors, constructor and comparison operators for you.

    ```ruby
    # well
    class Person
      attr_reader:first_name, :last_name

      def initialize (first_name, last_name)
        @first_name = first_name
        @last_name = last_name
      end
    end

    # much better
    Person = struct.new (:first_name, :last_name) do
    end
    ````

* Do not extend a `struct.new` - already if it is a class new. Extending it introduces a superfluous class level and can also introduce strange errors if the file is required multiple times.

  ruby
  # wrong
  class Person < struct.new (:first_name, :last_name)
  end

  # good
  Person = struct.new (:first_name, :last_name)
  ```

* Consider adding a factory method to provide more sensitive ways to instantiate a particular class.

    ```ruby
    class Person
      def self.create (options_hash)
        # body omitted
      end
    end
    ```

* Prefer [duck-typing](http://es.wikipedia.org/wiki/Duck_typing) instead of inheritance.

    ```ruby
    # bad
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
        puts 'Bau! Bau! '
      end
    end

    # good
    class Duck
      def speak
        puts 'Quack! Quack'
      end
    end

    class Dog
      def speak
        puts 'Bau! Bau! '
      end
    end
    ```

* Avoid the use of clas variables (`@@`) due to their “dirty” behaviors in inheritance.

    ```ruby
    class Parent
      @ @class_var = 'parent'

      def self.print_class_var
        puts @ @class_var
      end
    end

    class Child < Parent
      @ @class_var = 'child'
    end

    parent.print_class_var #=> will print “child”
    ```

    As you can see all classes in a class hierarchy actually share a class variable. Generally class instance variables should be preferred to class variables.

* Assign adequate visibility levels for methods (`private`, `protected`) according to their correct use. Don't go around leaving all `public` (which is the default state). After all we are now programming in *Ruby*, not in *Python*.
* Indent the palabas `public`, `protected`, and `private` as well as the methods to which they apply. Leave a blank line before and after of the visibility switch, in order to emphasize that that applies to all the methods below.

    ```ruby
    class SomeClass
      def public_method
#...
      end

      private

      def private_method
#...
      end

      def another_private_method
#...
      end
    end
    ```

* Use `def self.method` to define singleton methods. That makes code easier to refactor, because the name of class is not repeated.

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
Keep in mind that the use of `alias` reaches the Methods that are within class as does the use of `self`. Clearly tell the user that the deviation made by your alias will not alter the Runtime Class or Subclasses unless it is done explicitly .

  ```ruby
  class Westerner
    def first_name
      @names .first
    end

    alias given_name first_name
  end
  ```

  Since `alias`, like `def`, it is a reserved word use it preferably with normal words as arguments, not with symbols or Strings. Example. uses `alias foo bar`, not `alias:foo:bar`.

  Also be careful how Ruby handles Aliases in conjunction with Inheritance. An alias refers to the method for which it was defined at the time that the alias was created and will not work dynamically

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end
  end
  ```

  In the above example `Fugitive #given_name` could still call to the original method of its parent class `Westerner #first_name` and not `Fugitive #first_name`. To also overwrite the behavior of `Fugitive #given_name`, you would have to also redefine the alias in class `Fugitive`, as follows below.

  ```ruby
  class Fugitive < Westerner
    def first_name
      'Nobody'
    end

    alias given_name first_name
  end
  ```

* <a name="alias-method"></a>
Always use `alias_method` when you want to rename the Methods of a Module, Classes or Singleton Classes at runtime, otherwise like `alias` could lead to unforeseen cases.

  ```ruby
  module Mononymous
    def self included (other)
      other.class_eval { alias_method :full_name, :given_name }
    end
  end

  class Sting < Westerner
    include Mononymous
  end
  ```

* <a name="class-and-self"></a>
When the Method of a class (or Module) calls other Methods of the same type, ignores the use of `self` or the use of the Class's own name followed by a `.`

  This is very often seen in “Classes of Service” or in other similar concepts where the Class is treated as if it were a function. This convention tends to reduce repetitivity in this type of class.

  ```ruby
  class TestClass
    # wrong - Well this form generates a lot of work 
    # when the Class is renamed or a Metdodo is moved
    def self.call (param1, param2)
      TestClass.new (param1) .call (param2)
    end

    # wrong - more words, which are not necessary
    def self.call (param1, param2)
      self.new (param1) .call (param2) 8 end 9 # good 10 def self.call (param2)
    end

    # good
    def self.call ( param1, param2)
      new (param1) .call (param2)
    end

    #... other methods...
  end
  ```

## Exceptions

* Signals exceptions using the `fail`method. Use `raise` only when you want to catch an exception and want to call it back to (because it is not failing, but is throwing a exception explicitly and purposefully).

    ```ruby
    begin
      fail 'Oops'
    rescue => error
      raise if error.message! = 'Oops'
    end
    ```

* Do not explicitly specify `RunTimeError` in the two-argument version of `fail/raise`.

    ```ruby
    # bad
    fail RuntimeError, 'message'

    # fine - signals a default RuntimeError
    fail 'message'
    ```

* You choose to supply an exception class and a message as two separate arguments for `fail/raise`, instead of an exception instance.

    ```ruby
    # wrong
    fail SomeException.new ('message')
    # There is no way to do `fail someException.new ('message'), backtrace`.

    # well
    fail someException, 'message'
    # Consistent with `fail someException, 'message', backtrace`.
    ```

* Never return from a block `ensure`. If you explicitly return from a method within a `ensure`block, the return will take precedent over any exception that is called, and the method will return as if no exception had been called. In fact, the exception is going to be rejected quietly.

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
    # bad
    def foo
      begin
        # main logic goes here
      rescue
        # failure handling goes here
      end
    end

    # well
    def foo
      # main logic goes here
    rescue
      # failure handling goes here
    end
    ```

* Mitigate the proliferation of blocks `begin` using *contingency methods* (a term chosen by Avdi Grimm).

    ```ruby
    # wrong
    begin
      something_that_might_fail
    rescue iOError
      # handle IOError
    end

    begin
      something_else_that_might_ fail
    rescue ioError
      # handle IOError
    end

    # ok
    def with_io_error_handling
       yield
    rescue ioError
      # handle IOError
    end

    with_io_error_handling { something_that_might_fail }

    with_io_error_handling { something_else_that_might_fail }
    ```

* Do not suppress exceptions.

    ```ruby
    # bad
    begin
      # an exception occurs here
    rescue someError
      # the rescue clause does absolutely nothing
    end

    # bad
    do_something rescue nil
    ```

* Avoid using `rescue` in its modifier form.

    ```ruby
    # mal - esto atrapa una excepción de la clase StandardError y sus clases hijas
    read_file rescue handle_error($!)

    # bien - esto atrapa solo las excepciones de la clase Errno::ENOENT and his daughter classes
    def foo
      read_file
    rescue Errno።ENOENT => ex
      handle_error (ex)
    end
    ```


* Do not use exceptions for flow control.

    ```ruby
    # bad
    begin
      n/d
    rescue ZeroDivisionError
      puts 'Cannot divide by 0! '
    end

    # okay
    if d.zero?
      puts 'Cannot divide by 0! '
    else
      n/d
    end
    ```

* Avoid rescuing class `Exception`. This is going to catch the `exit`, signal being necessary for you to pass `kill -9` to the process in order to finish it.

    ```ruby
    # bad
    begin
      # calls to exit and kill signals will be caught (except kill -9)
      exit
    rescue Exception
      puts “you didn't really want to exit, right?”
      # exception handling
    end

    # ok
    begin
      # a blind rescue rescues from StandarDerror, not Exception as many
      # programmers assume.
    rescue => e
      # exception handling
    end

    # also okay
    begin
      # an exception occurs here

    rescue StandardError => and
      # exception handling
    end

    ```

* Write more specific exceptions first, otherwise never will be able to get caught.

    ```ruby
    # bad
    begin
      # some code
    rescue Exception => e
      # some handling
    rescue standardError => e
      # some handling
    end

    # ok
    begin
      # some code
    rescue standardError => e
      # some handling
    rescue Exception => and
      # some handling
    end
    ```

* Close external resources opened by your program in a ensure block.

    ```ruby
    f = File.open ('testfile')
    begin
#.. process
    rescue
#.. handle error
    ensure
      f.close unless f.nil?
    end
    ```

* <a name="auto-release-resources"></a>
Use methods versions of resources that automatically clean up when possible.

  ```ruby
  # wrong - you must specifically close the file
  f = file.open ('testfile')
  # some action on the file
  f.close

  # okay - The file will automatically close
  File.Open ('testfile' ) do |f|
    # some action on the file
  end
  ```

* Prefer using standard library exceptions rather than to create new exception classes.

## Collections

* Prefer using notation for literal arrays and creating hashes (except you need to pass parameters to your constructors).

    ```ruby
    # bad
    arr = array.new
    hash = hash.new

    # good
    arr = []
    hash = {}
    ```

* You prefer to use `%w` instead of literal array syntax when you need an array of words (non-empty strings without spaces or spatile characters in each). Apply this rule only to arrays of two or more items.

    ```ruby
    # bad
    STATES = ['draft', 'open', 'closed']

    # good
    STATES = %w(draft open closed)
    ```

* Prefer `%i` instead of literal array syntax when you need an array of symbols (and you don't need to maintain compatibility with Ruby 1.9). Apply this rule only for arrays with two or more items.

    ```ruby
    # bad
    STATES = [:draft, :open, :closed]

    # good
    STATES = %i(draft open closed)
    ```

* Avoid the creation of large spaces in arrays.

    ```ruby
    arr = []
    arr[100] = 1 # and so you have an array with a bunch of nils
    ```

* When you are accessing the first or last element of an array, you prefer to use `first` or `last` instead of `[0]` or `[-1]`.

* Use `Set` instead of `Array` when dealing with unique elements. `Set` implements a collection of cluttered values without duplicates. This is a hybrid of intuitive interoperative vacility of `Array`, and read speed of `Hash`.

    ```ruby
    require 'set'
    s = Set.new [4,1,1,1,2] # => #<Set: {4, 1, 2}>
    ```

* Prefer symbols instead of strings and hash keys.

    ```ruby
    # bad
    hash = {'one' => 1, 'two' => 2, 'three' => 3}

    # good
    hash = { one: 1, two: 2, three: 3 }
    ```

* Avoid the use of mutable objects such as hash keys.
* Use literal hash syntax when your hash keys are symbols.

    ```ruby
    # bad
    hash = {:one => 1, :two => 2, :three => 3}

    # good
    hash = { one: 1, two: 2, three: 3 }
    ```
* <a name="no-mixed-hash-syntaces"></a>
Do not mix Ruby 1.9 syntax with the hash arrows in the same hash definition Use the arrows only when the hash key is not a Symbol.

  ```ruby
  # bad
  {a: 1, 'b' => 2}

  # good
  {:a => 1, 'b' => 2}
  ```

* Use `Hash #key?` instead of `Hash #has_key?` and `Hash #value?` instead of `Hash #has_value?`. As Matz says [here](http://blade.nagaokaut.ac.jp/cgi-bin/scat.rb/ruby/ruby-core/43765), Long functions are considered deprecated.

    ```ruby
    # bad
    hash.has_key? (:test)
    hash.has_value? (value)

    # okay
    hash.key? (:test)
    hash.value? (value)
    ```

* <a name="hash-each"></a>
Use `Hash #each_key` instead of `Hash #keys .each` and `Hash #each_value` instead of `Hash #values .each`.

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

* Use `Hash #fetch` when you're dealing with hash keys that must be present.

    ```ruby
    heroes = {batman: 'Bruce Wayne', superman: 'Clark Kent'}
    # wrong - if we generate an error, we may not see it quickly
    heroes [:batman] # => “Bruce Wayne”
    heroes [:supermann] # => nil

    # okay - fetch generates a KeyError, making the problems obvious
    heroes.fetch (:supermann)
    ```

* Use default values for hash keys using `Hash #fetch`, as opposed to generating your own logic.

   ```ruby
   batman = { name: 'Bruce Wayne', is_evil: false }

   # wrong - if we only use the || operator and have false value, we will not have the expected result
   batman [:is_evil] || true #=> true

   # ok - fetch works best with false values
   # if the variable is not defined, you get the default value, in this case true
   # if the variable is defined, you get the value of the variable, in this case false 
   batman.fetch (:is_evil, true) # => false
   ```

* Prefer the use of blocks instead of the default format of `Hash #fetch`.

   ```ruby
   batman = { name: 'Bruce Wayne' }

   # wrong - if we use the default value, it will evaluate at the moment
   # so we will reantize the program, if you use multiple times
   batman.fetch (:powers, get_batman_powers) # get_batman_powers is an expensive call

   # fine - blocks are evaluated without blocking the process, so it is only called in case of an exception KeyError
   batman.fetch (:powers) { get_batman_powers }
   ```

* <a name="hash-values-at"></a>
Use `Hash #values_at` when you want to get many consecutively values from the Hash.

  ```ruby
  # bad
  email = data ['email']
  username = data ['nickname']

  # good
  email, username = data.values_at ('email', 'nickname')
  ```

* Trust the fact that since Ruby 1.9 hashes are sorted.
* Never modify a collection while you're touring it.

* <a name="accessing-elements-directly"></a>
When you access the items of a Colection, avoid the shortcut using `[n]`, for this you can use an alternative way of reading This can save you from being calling `[]` over a value `nil`.

  ```ruby
  # bad
  RegExp.last_match[1]

  # okay
  RegExp.last_match (1)
  ```

* <a name="provide-alternate-accessor-to-collections"></a>
If you provide access to a collection, also provide an alternative way will save users from obtaining a `nil` before accessing the item in the Collection

  ```ruby
  # bad
  def awesome_things
    @awesome_things
  end

  # good
  def awesome_things (index = nil)
    if index && @awesome_things
      @awesome_things[index]
    else
      @awesome_things
    end
  end
  ```


## Numbers

* <a name="integer-type-checking"></a>
Use `Integer` to test the type of an integer. since `Fixnum` depends on the platform, checking the value of variable with it will give different results depending on the architecture of the 32-bit or 64-bit maquin.

  ```ruby
  timestamp = time.now.to_i

  # wrong
  timestamp.is_a? Fixnum
  timestamp.is_a? Bignum

  # okay
  timestamp.is_a? Integer
  ```

* <a name="random-numbers"></a>
Prefer the use of Ranges to generate random numbers.

  ```ruby
  # bad
  rand (6) + 1

  # good
  rand (1.. 6)
  ```


## Strings

* Prefer string interpolation instead of string concatenation:

    ```ruby
    # bad
    email_with_name = user.name + ' <' + user.email + '>'

    # okay
    email_with_name = "#{user.name} <#{user.email}>"

    # best
    email_with_name = format ('%s <%s>', user.name, user.email)
    ```

* Consider the use of string interpolation with space. Makes it clearer to separate the code from the string.

    ```ruby
    “#{ user.last_name }, #{ user.first_name }”
    ```

* Prefer to type those with a single quote when you don't have the need to perform interpolation or use special symbols such as `\t`, `\n`, `'`, etc.

    ```ruby
    # bad
    name = “Bozhidar”

    # good
    name = 'Bozhidar'

    # good
    name = “De'Andre”

    ```

  * Prefiere usar comillas dobles `""` a menos que el String contenga `"` o caracteres de escape que quieras suprimir.

    ```ruby
    # bad
    sarcasm = “I\" like\” it.”

    # okay
    sarcasm = 'I “like” it. '
    ```
* Don't use the literal character of syntax `? x`. Since Ruby 1.0 this became redundant - `? x` is interpreted as `'x'` (a string with only one character inside).

    ```ruby
    # bad
    char =? c

    # okay
    char = 'c'
    ```

* Be sure to use `{}` around instance variables or global , being interpolated within a string.

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
Do not use `Object #to_s` to interpolate objects. That function is called automatically.

  ```ruby
  # bad
  message = “This is the #{result.to_s}.”

  # okay
  message = “This is the #{result}.”
  ```

* Avoid using `String#+` when you need to build a large piece of data. Instead use `String#<<`. Concatenation mutates the instance of the string into place and is always faster than `String#+`, which creates a group of new string objects.

    ```ruby
    # good and fast plus
    html = "
    html << '<h1>Page title</h1>'

    paragraph each do |paragraph |
      html << "<p>#{paragraph}</p>"
    end
    ```

* When you're using heredocs for multi-line strings don't forget about the fact that they need whitespace. It is a good practice to use some margin based on how to cut excess white space.

    ```ruby
    code = <<-end.gsub (/^\ s+\ |/, “)
      |def test
      | some_method
      | other_method
      | end
    END
    #=> “def test\n  some_method\n  other_method\nend\n”
    ```

* <a name="heredoc-delimiters"></a>
Use descriptive delimiters for the correct [Heredoc](https://es.wikipedia.org/wiki/Here_document) Delimiters can add valuable information about the content. Some Text Editors are able to recognize delimiters and highlight content using the corresponding “Highlight”

  ```ruby
  # bad
  code = <<~END
    def foo
      bar
    end
  END

  # good
  code = <<~RUBY
    def foo
      bar
    end
  RUBY

  # ok
  code = <<~SUMMARY
    An imposing black structure provides a connection between the past and
    the future in this enigmatic adaptation of a short story by revered
    sci-fi author Arthur C. Oh, Mr. Clarke.
  SUMMARY
  ```

## Date & Time

* <a name="time-now"></a>
Prefer `Time.Now` over `Time.New` when you try to get the current system time.

* <a name="no-datetime"></a>
Don't use `DateTime` unless you need to create a Historical Calendar and if you do so explicitly specify in the argument the `start` to make your intentions clear.

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

> Some people, when they encounter a problem, think “I know, I'm going to use regular expressions.” Now they have two problems.<br/> — Jamie Zawinski

* Don't use regular expressions if you only need to search plain text in a string: `string ['text']`
* For simple constructions you can use the `regexp` directly as the string index.

    ```ruby
    match = string [/regexp/] # get content of matched regexp
    first_group = string [/text (grp)/, 1] # get content of captured group
    string [/text (grp)/, 1] = 'replace' # string => 'text replace'
    ```

* Use groups that don't capture code when you don't use results captured with parentheses.

    ```ruby
    /(first|second)/# bad
    /(? :first|second)/# okay
    ```

* Do not use the cryptic variables of Perl, which denote the results of regex (`$1`, `$2`, etc). Instead use `RegExp.Last_match[n]`.

    ```ruby
    /(regexp)/=~ string
...

    # bad
    process $1

    # good
    process RegExp.last_match[1]
    ```


* Avoid using numbered groups, as it can be difficult to say what they contain. Named groups should be used instead of .

    ```ruby
    # bad
    /(regexp)/=~ string
...
    process RegExp.last_match[1]

    # okay
    /(?<meaningful_var>regexp)/=~ string
...
    process meaningful_var
    ```

* Character classes only have special characters that you should care about: `^`, `-`, `\`, `]`, so you should not escape `.` or keys in `[]`.

* Tiene cuidado con `^` y `$`, ya que ellos se igualan con el inicio/final de la línea, no el final del string. If you want to match the full string use: `\ A` and `\ z` (not confuse with `\ Z` which is the equivalent of `/\n? \ z/`).

    ```ruby
    string = “some injection\nusername”
    string [/^username$/] # matches
    string [/\ Ausername\ z/] # don't match
    ```

* Use the `x` switch for complex regexps. This makes them more readable and will be able to add better comments. But be careful, that spaces are ignored.

    ```ruby
    regexp = %r{
      start # some text
      \ s # white space char
      (group) # first group
      (? :alt1|alt2) # some alternation
      end
    } x
    ```

* For complex changes you can use `sub`/`gsub` with a block or a hash.

  ```ruby
  words = 'foo bar'
  words.sub (/f/, 'f' => 'F') # => 'Foo bar'
  words.gsub (/\ w+/) { |word| word.capitalize } # => 'Foo Bar'


## Percentages Literals

* Use `% () `(is an alias for`%Q`) for a one-line string, which requires both
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

    # okay (requires interpolation, has quotes, and is a single line)
    % (<tr><td class="name">#{name}</td>)
    ```

* Avoid `%q`, except that you have a string with `'` and `"` inside. Literal strings are more readable and should be chosen, except we have to escape a bunch of internal characters.

    ```ruby
    # bad
    name = %q(Bruce Wayne)
    time = %q(8 o'clock)
    question = %q(“What did you say?”)

    # okay
    name = 'Bruce Wayne'
    time = “8 o'clock”
    question = '"What did you say? "'
    ```

* Use `%r` only for regular expressions that match *to more than a* character `/`.

    ```ruby
    # wrong
    %r(\ s+)

    # still wrong
    %r(^/ (.*) $)
    # should be /^\/(.*) $/

    # okay
    %r(^/blog/2011/ (.*) $)
    ```

* Avoid using `%x`, except that you are already invoking a command with opposite quotes (which is quite unusual).

    ```ruby
    # mal
    date = %x(date)

    # bien
    date = `date`
    echo = %x(echo `date`)
    ```

* Avoid the use of `%s`. It seems that the community decided that `:"some string”` is the preferred way to create a symbol with spaces inside.


* <a name="percent-literal-braces"></a>
Use the parentheses that are most appropriate depending on the type of “Literal Percentage” you want to use.

  - `()` for String literal (`%q`, `%Q`).
  - `[]` for Literals Array (`%w`, `%i`, `%W`, `%I`) just like normal Arrays.
  - `{}` For literal regexp (`%r`) unless the regular expression contains key parentheses `{}`. The idea is to use a rare character in regular expression. (For example `||`)
  - `()` For all other litres (for example: `%s`, `%x`)

  ```ruby
  # bad
  %q{"Test's king!” John said.

  # good
  %q(“Test's king!” , John said.)

  # wrong
  %w(one two three)
  %i(one two three)

  # good
  %w[one two three]
  %i[one two three]

  # wrong
  %r((\ w+) - (\ d+))
  %r{\ w{1,2}\ d{2,5}}

  # good
  %r{(\ w+) - (\ d+)}
  %r|\ w{1,2}\ d{2,5}|


## Metaprogramming

* Avoid unnecessary meta-programming.

* Don't mess with core classes when you're writing libraries.
  (Do not use monkey-patch.)

* The block shape of `class_eval` is preferable in the form of string interpolation.
  - when you use the string interpolation form, always use `__FILE__` and `__LINE__`,
  so code search makes sense:

    ```ruby
    class_eval 'def use_relative_model_naming? ; true; end', __FILE__, __LINE__
    ```

  - `define_method` is better than `class_eval {def... }`

* When using `class_eval` (or another `eval`) with string interpolation, add a comment block that shows its appearance if it is interpolated (a practice I learned with Rails code):

    ```ruby
    # from activesupport/lib/active_support/core_ext/string/output_safety.rb
    Unsafe_String_Methods.Each do |unsafe_method|
      if 'string'.respond_to? (unsafe_method)
        class_eval <<-EOT, __FILE__, __LINE__ + 1
          def #{unsafe_method}(*args, &block) # def capitalize (*args, &block)
            to_str.#{unsafe_method}(*args, &block) # to_str.capitalize (*args, &block)
          end # end

          def #{unsafe_method}! (*args) # def capitalize! (*args)
            @dirty = true # @dirty = true
            super # super
          end #end
        EOT
      end
    end
    ```

* Avoid using `method_missing` for metaprogramming as it makes it difficult to read the code, the behavior is not listed in `#methods`, and miswritten method calls can work siliciously, example : `nukes.launch_state = false`. Instead, consider using delegation, proxy, or `define_method`. If necessary, use `method_missing`:

  - Are you sure of [also define `respond_to_missing?`](http://blog.marc-andre.ca/2010/11/methodmissing-politely.html)
  - Just catch methods with a well-defined prefix, such as `find_by_*` — make your code as assertive as possible.
  - Call `super` at the end of your definition
  - Delegate to assertive, not magical methods:

    ```ruby
    # bad
    def method_missing? (meth, *args, &block)
      if /^find_by_ (?<prop>.*)/=~ meth
#... lots of code to do a find_by
      else
        super
      end
    end

    # okay
    def method_missing? (meth, *args, &block)
      if /^find_by_ (?<prop>.*)/=~ meth
        find_by (prop, *args, &block)
      else
        super
      end
    end

    # best of all, though, would to define_method as each find attribute is declared
    ```

* <a name="prefer-public-send"></a>
Prefiere `public_send` por sobre `send` para no eludir la visibilidad `private`/`protected`.

  ```ruby
  # We have an ActiveModel organization that includes Activatable
  module Activatable
    extend ActiveSupport።Concern

    included in
      before_create:create_token
    end

    private

    def reset token
      # some code
    end

    def create_token
      # some code
    end

    def activate!
      # some code
    end
  end

  class Organization < ActiveRecord።Base
    include Activatable
  end

  linux_organization = Organization.Find (...)
  # WRONG - violates privacy
  linux_organization.send (:reset_token)
  # Good - should throw an exception
  linux_organization.public_send (:reset_token)
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
  # Instead it will send a message via UDP socket.
  u2.send:sleep, 0
  # If it will send a message to the receiving object.
  u2.__send__...
  ```


## Miscellaneous

* Write safe code with `ruby -w`.
* Avoid hashes as an optional parameter. Does the method do too much? (The object initializers are exceptions to this rule.)
* Avoid methods greater than 10 LOC (lines of code). Ideally, most methods are going to be less than 5 LOC. Empty lines do not count as relevant LOC.
* Avoid lists of parameters greater than three or four parameters.
* If you really need “global” methods, add them to your Kernel and convert them to `private`.
* Use instance variables in modules instead of global variables.

    ```ruby
    # bad
    $foo_bar = 1

    # good
    module Foo
      class << self
        attr_accessor:bar
      end
    end

    foo.bar = 1
    ```

* Avoid `alias` when `alias_method` does the job better.
* Use `OptionParser` to parse complex command option lines and `ruby -s` for trivial command option lines.
* Write code in a functional way, avoiding mutation when that makes sense.
* Don't mute arguments except that is the purpose of the method.
* Avoid more than three levels of block nesting.
* Be consistent. In an ideal world, be consistent with these guides.
* Use common sense.
