# SlY - Making CSS Better

## Warning: Sly is in the Alpha Stage, not recommended for production, only for develoment!

# Usage

* First of all, `npm install -g sly`
* Second, make any `.sly` file
* Code in Sly!
* To Compile, use the `sly --c <input .sly file>`

## Sly Syntax

Sly is very flexible.

### Whitespace-based

You don't need curly braces, or semicolons, although you need colons. But it is based on whitespace. For example, you can do
```stylus
body
  color: white
  background: black
```
It will compile to regular CSS!

### Variables

You can declare variables anywhere, you just need an `@` symbol to indicate it. For example `@color: #FFF`, then you can use it anywhere, such as `color: @color`

### Nesting

You can nest things within each other! Here is an example

```stylus
body
  color: white
  
  h1
    color: red
```

and it will compile to:

```css
body {
  color: white;
}

body h1 {
  color: red;
}
```

# Credits

I was following a tutorial from an amazing [blog post](http://www.nixtu.info/2011/12/how-to-write-css-preprocessor-using.html), and built on that!
