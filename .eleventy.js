const { execSync } = require('child_process');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('src/css/custom.css');
  eleventyConfig.setDynamicPermalinks(true);
  eleventyConfig.setServerOptions({
    watch: ['./public/css/styles.css', './public/posts/*'],
  });

  return {
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};
