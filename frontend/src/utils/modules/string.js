export default {
  /**
   * Convert a string to Pascal Case (removing non alphabetic characters).
   *
   * @example
   * toPascalCase('hello_world') // Will return `HelloWorld`.
   * toPascalCase('fOO BAR')     // Will return `FooBar`.
   */
  toPascalCase: str => str.match(/[a-z]+/gi)
    .map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase())
    .join(''),
  /**
   * Converts a string to kebab case.
   *
   * @example
   * toKebabCase(camelCase) // 'camel-case'
   */
  toKebabCase: str => str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-'),

  /**
   * Converts a string to snake case.
   *
   * @example
   * toSnakeCase(camelCase) // 'camel_case'
   */
  toSnakeCase: str => str && str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_'),

  /**
   * Converts a string to title case.
   *
   * @example
   * toTitleCase('camelCase') // 'Camel Case'
   * toTitleCase('snake-case') // 'Snake Case'
   */
  toTitleCase: str => str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' '),

  /**
   * HTML template literal processor. Essentially does
   * nothing, BUT creates an html`` tag so we can use plugins with
   * syntax highlighting. VSCode plugins:
   * - https://marketplace.visualstudio.com/items?itemName=bierner.lit-html (syntax hightlighting)
   * - https://marketplace.visualstudio.com/items?itemName=pushqrdx.inline-html (Emmet support)
   *
   * @example
   * const html = util.tag;
   * const htmlTemplate = html`
   *   <div></div> <!-- HTML syntax! -->
   * `;
   */
  tag: (strings, ...values) => strings.reduce((acc, curr, idx, arr) => acc + curr + ((idx < arr.length - 1) ? values[idx] : ''), ''),

  /**
   * Capitalizes the first letter of a string.
   *
   * @example
   * capitalize('fooBar'); // 'FooBar'
   * capitalize('fooBar', true); // 'Foobar'
   */
  capitalize: ([first, ...rest], lowerRest = false) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join('')),

  /**
   * Truncates a string up to a specified length.
   *
   * @example
   * truncateString('boomerang', 7); // 'boom...'
   */
  truncateString: (str, num) => ((str.length > num) ? `${str.slice(0, num > 3 ? num - 3 : num)}...` : str),
};
