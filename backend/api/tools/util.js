module.exports = {

  regEx: {
    enum: /[A-Z]+/,
    image: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
    hex: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  },

  sample: (arr) => arr[Math.floor(Math.random() * arr.length)],

  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
    if (!result) return null;

    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgb(${r}, ${g}, ${b})`;
  }
}