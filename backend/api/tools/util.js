module.exports = {

  regEx: {
    enum: /[A-Z]+/,
    image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    hex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  },

  sample: (arr) => arr[Math.floor(Math.random() * arr.length)],

  /**
   * Converts a hex string to an rgb string
   * for use in css.
   * 
   * @param  {String} hex - includes `#` prefix
   * @return {String} rgb string
   */
  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    if (!result) return null;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgb(${r}, ${g}, ${b})`;
  },

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
  tag: (strings, ...values) =>
    strings.reduce((acc, curr, idx, arr) =>
      acc + curr + ((idx < arr.length - 1) ? values[idx] : ''), ''),
}