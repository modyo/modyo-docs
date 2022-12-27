---
search: true
---

# Expressions and Variables

Expressions are statements that have values. Liquid templates can use expressions in several places; most often in output statements, but also as arguments to some tags or filters.

Liquid accepts the following kinds of expressions:

* **Variables.** The most basic type of expression is just the name of a variable. Liquid variables are named like Ruby variables: they must contain alphanumeric characters and underscores, should always start with a letter, and not have any kind of leading symbol (that is, they must look like `var_name`, not `$var_name`).
* **Array or hash access.** If you have an expression (usually a variable) whose value is an array or hash, you can use a single value from that array/hash as follows:
    * `my_variable[<KEY EXPRESSION>]` — The name of the variable, followed immediately by square brackets containing a key expression.
        * For arrays, the key must be a literal integer or an expression that resolves to an integer.
        * For hashes, the key must be a literal quotation string or an expression that resolves to a string.
    * `my_hash.key` — Hashes also allow a shorter "dot" notation, where the name of the variable is followed by a period and the name of a key. This only works with keys that don't contain spaces, and (unlike the square bracket notation) does not allow the use of a key name stored in a variable.
    * Note: if the value of an access expression is also an array or hash, you can access values from it in the same way, and can even combine the two methods. (For example, `site.posts[34].title`.)
* **Array first and last.** If you have an expression whose value is an array, you can follow it with `.first` or `.last` to resolve to its first or last element.
* **Array or hash size.** If you have an expression whose value is an array or hash, you can follow it with `.size` to resolve to the number of elements in the original expression, as an integer.
* **Strings.** Literal strings must be surrounded by double or single quotes (``"my string"`` or `'my string'`). There is no difference; neither style allows variable interpolation.
* **Integers.** Integers must not be quoted.
* **Booleans and nil.** The literal values `true`, `false`, and `nil`.

To build an input array, you cannot do it in a control statement. You need to do it in a separate statement and then use that as a variable in a control statement.