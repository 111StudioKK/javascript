#Javascript

##Install
To start linting your code, please make sure you have an ESLINT plugin install on your IDE.
When starting a new react / react-native or node project create a ```.eslinrc``` file with the following content :
```
{
    "extends": "111studio"
}
```
Then install eslint dependencies running the following command:
```bash
yarn add --dev eslint-config-111studio
```

##Browser Compatibility checks
The config uses [Eslint Plugin Compat](https://www.npmjs.com/package/eslint-plugin-compat) with the following target :

```javascript
settings: {
   targets: ['chrome >= 50', 'firefox', 'edge', 'safari', 'ie']
}

```

##ES6
Use as much ES6 as possible.
##ES7
You may use ES7 parsingly for:

###Decorators

```javascript
class Person {
  @cantEnum
  get kidCount() { return this.children.length; }
}

function cantEnum(target, name, descriptor) {
  descriptor.enumerable = false;
  return descriptor;
}
``` 
###Object spread properties

```javascript
let info = {fname, lname, ...rest};

info; // { fname: "Hemanth", lname: "HM", location: "Earth", type: "Human" }
```

DO NOT USE ANY OTHER ES7 FEATURES YET

###ESLINT Rules

####Default ESLINT rules
* [comma-dangle](http://eslint.org/docs/rules/comma-dangle): disallow trailing commas  (fixable)
* [no-cond-assign](http://eslint.org/docs/rules/no-cond-assign): disallow assignment operators in conditional expressions 
* [no-console](http://eslint.org/docs/rules/no-console): warns when  using `console` 
* [no-constant-condition](http://eslint.org/docs/rules/no-constant-condition): disallow constant expressions in conditions 
* [no-control-regex](http://eslint.org/docs/rules/no-control-regex): disallow control characters in regular expressions 
* [no-debugger](http://eslint.org/docs/rules/no-debugger): disallow the use of `debugger` 
* [no-dupe-args](http://eslint.org/docs/rules/no-dupe-args): disallow duplicate arguments in `function` definitions 
* [no-dupe-keys](http://eslint.org/docs/rules/no-dupe-keys): disallow duplicate keys in object literals 
* [no-duplicate-case](http://eslint.org/docs/rules/no-duplicate-case): disallow duplicate case labels 
* [no-empty](http://eslint.org/docs/rules/no-empty): disallow empty block statements 
* [no-empty-character-class](http://eslint.org/docs/rules/no-empty-character-class): disallow empty character classes in regular expressions 
* [no-ex-assign](http://eslint.org/docs/rules/no-ex-assign): disallow reassigning exceptions in `catch` clauses 
* [no-extra-boolean-cast](http://eslint.org/docs/rules/no-extra-boolean-cast): disallow unnecessary boolean casts 
* [no-extra-parens](http://eslint.org/docs/rules/no-extra-parens): disallow unnecessary parentheses
* [no-extra-semi](http://eslint.org/docs/rules/no-extra-semi): disallow unnecessary semicolons  (fixable)
* [no-func-assign](http://eslint.org/docs/rules/no-func-assign): disallow reassigning `function` declarations 
* [no-inner-declarations](http://eslint.org/docs/rules/no-inner-declarations): disallow `function` or `var` declarations in nested blocks 
* [no-invalid-regexp](http://eslint.org/docs/rules/no-invalid-regexp): disallow invalid regular expression strings in `RegExp` constructors 
* [no-irregular-whitespace](http://eslint.org/docs/rules/no-irregular-whitespace): disallow irregular whitespace outside of strings and comments 
* [no-negated-in-lhs](http://eslint.org/docs/rules/no-negated-in-lhs): disallow negating the left operand in `in` expressions 
* [no-obj-calls](http://eslint.org/docs/rules/no-obj-calls): disallow calling global object properties as functions 
* [no-prototype-builtins](http://eslint.org/docs/rules/no-prototype-builtins): Disallow use of `Object.prototypes` builtins directly
* [no-regex-spaces](http://eslint.org/docs/rules/no-regex-spaces): disallow multiple spaces in regular expression literals 
* [no-sparse-arrays](http://eslint.org/docs/rules/no-sparse-arrays): disallow sparse arrays 
* [no-unexpected-multiline](http://eslint.org/docs/rules/no-unexpected-multiline): disallow confusing multiline expressions 
* [no-unreachable](http://eslint.org/docs/rules/no-unreachable): disallow unreachable code after `return`, `throw`, `continue`, and `break` statements 
* [no-unsafe-finally](http://eslint.org/docs/rules/no-unsafe-finally): disallow control flow statements in `finally` blocks
* [use-isnan](http://eslint.org/docs/rules/use-isnan): require calls to `isNaN()` when checking for `NaN` 
* [valid-jsdoc](http://eslint.org/docs/rules/valid-jsdoc): enforce valid JSDoc comments
* [valid-typeof](http://eslint.org/docs/rules/valid-typeof): enforce comparing `typeof` expressions against valid strings 
* [no-case-declarations](http://eslint.org/docs/rules/no-case-declarations): disallow lexical declarations in case clauses 
* [no-empty-pattern](http://eslint.org/docs/rules/no-empty-pattern): disallow empty destructuring patterns
* [no-fallthrough](http://eslint.org/docs/rules/no-fallthrough): disallow fallthrough of `case` statements
* [no-redeclare](http://eslint.org/docs/rules/no-redeclare): disallow `var` redeclaration
* [no-self-assign](http://eslint.org/docs/rules/no-self-assign): disallow assignments where both sides are exactly the same
* [no-delete-var](http://eslint.org/docs/rules/no-delete-var): disallow deleting variables
* [no-undef](http://eslint.org/docs/rules/no-undef): disallow the use of undeclared variables unless mentioned in `/*global */` comments
* [no-unused-vars](http://eslint.org/docs/rules/no-unused-vars): disallow unused variables
* [no-mixed-spaces-and-tabs](http://eslint.org/docs/rules/no-mixed-spaces-and-tabs): disallow mixed spaces and tabs for indentation
* [constructor-super](http://eslint.org/docs/rules/constructor-super): require `super()` calls in constructors
* [no-class-assign](http://eslint.org/docs/rules/no-class-assign): disallow reassigning class members
* [no-const-assign](http://eslint.org/docs/rules/no-const-assign): disallow reassigning `const` variables
* [no-dupe-class-members](http://eslint.org/docs/rules/no-dupe-class-members): disallow duplicate class members
* [no-new-symbol](http://eslint.org/docs/rules/no-new-symbol): disallow `new` operators with the `Symbol` object
* [no-this-before-super](http://eslint.org/docs/rules/no-this-before-super): disallow `this`/`super` before calling `super()` in constructors

####Stylistic rules
* Indents using spaces.
* Indents size is set to 2.
* Switch - Case indents are set to 1.
* Semi colon: YES
* Single quotes only
* camelCase variables only

####ES6 Rules
* [prefer-template](http://eslint.org/docs/rules/prefer-template): require template literals instead of string concatenation
* [no-var](http://eslint.org/docs/rules/no-var): require `let` or `const` instead of `var`

####React - JSX rules

* [no-deprecated](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md): Prevent usage of deprecated methods
* [no-did-mount-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md): Prevent usage of `setState` in `componentDidMount`
* [no-did-update-set-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md): Prevent usage of `setState` in `componentDidUpdate`
* [no-direct-mutation-state](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md): Prevent direct mutation of `this.state`
* [prefer-es6-class](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md): Enforce ES5 or ES6 class for React Components
* [prefer-stateless-function](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md): Enforce stateless React Components to be written as a pure function
* [prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md): Prevent missing props validation in a React component definition
* [react-in-jsx-scope](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md): Prevent missing `React` when using JSX
* [require-render-return](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md): Enforce ES5 or ES6 class for returning value in render function
* [self-closing-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md): Prevent extra closing tags for components without children
* [sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md): Enforce component methods order (Check order in the eslint file)
* [sort-prop-types](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md): Enforce propTypes declarations alphabetical sorting
* [wrap-multilines](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md): Prevent missing parentheses around multilines JSX (fixable)
* [jsx-boolean-value](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md): Enforce boolean attributes notation in JSX (fixable)
* [jsx-closing-bracket-location](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md): Validate closing bracket location in JSX (fixable)
* [jsx-curly-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md): Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
* [jsx-equals-spacing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md): Enforce or disallow spaces around equal signs in JSX attributes (fixable)
* [jsx-first-prop-new-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md): Enforce position of the first prop in JSX
* [jsx-handler-names](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md): Enforce event handler naming conventions in JSX
* [jsx-indent](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md): Validate JSX indentation
* [jsx-indent-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md): Validate props indentation in JSX (fixable)
* [jsx-key](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md): Validate JSX has key prop when in array or iterator
* [jsx-max-props-per-line](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md): Limit maximum of props on a single line in JSX
* [jsx-no-bind](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md): Prevent usage of `.bind()` and arrow functions in JSX props
* [jsx-no-duplicate-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md): Prevent duplicate props in JSX
* [jsx-no-literals](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md): Prevent usage of unwrapped JSX strings
* [jsx-no-target-blank](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md): Prevent usage of unsafe `target='_blank'`
* [jsx-no-undef](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md): Disallow undeclared variables in JSX
* [jsx-pascal-case](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md): Enforce PascalCase for user-defined JSX components
* [jsx-sort-props](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md): Enforce props alphabetical sorting
* [jsx-space-before-closing](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md): Validate spacing before closing bracket in JSX (fixable)
* [jsx-uses-react](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md): Prevent React to be incorrectly marked as unused
* [jsx-uses-vars](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md): Prevent variables used in JSX to be incorrectly marked as unused


##TODO

* Specify flow type annotation style.
* Specify indentation for ternary operator in JSX expressions.
