const { minify } = require('terser');

module.exports = async (code) => {
  // process.env.NODE_ENV === 'production'
  if (1 === 0) {
    const minified = await minify(code);

    if (minified.error) {
      console.error('Terser error: ', minified.error);

      return code;
    }

    return minified.code;
  }

  return code;
};
