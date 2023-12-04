const { execSync } = require('child_process');
const {
  fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/img');
  eleventyConfig.addPassthroughCopy('src/assets/img/**/*');
  // eleventyConfig.addPassthroughCopy({
  //   'src/posts/**/img/**/*': 'assets/img/posts/',
  // });
  eleventyConfig.addPassthroughCopy({ 'src/members/img/**/*': 'assets/img/' });

  eleventyConfig.addPlugin(fortawesomeBrandsPlugin);
  eleventyConfig.setDynamicPermalinks(true);
  eleventyConfig.setServerOptions({
    watch: ['./public/assets/css/styles.css', './public/posts/*'],
  });

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
