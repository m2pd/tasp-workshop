const { execSync } = require('child_process');
const {
  fortawesomeBrandsPlugin,
} = require('@vidhill/fortawesome-brands-11ty-shortcode');

module.exports = function (eConfig) {
  eConfig.addPassthroughCopy('./src/img');
  eConfig.addPassthroughCopy('src/assets/img/**/*');

  eConfig.addPassthroughCopy({
    'src/members/img/**/*': 'assets/img/members',
  });
  eConfig.addPassthroughCopy({
    'src/posts/img/**/*': 'assets/img/posts',
  });

  eConfig.addWatchTarget('src/assets/js/');

  eConfig.addPlugin(fortawesomeBrandsPlugin);
  eConfig.setDynamicPermalinks(true);

  eConfig.addFilter('readableDate', require('./lib/filters/readableDate'));
  eConfig.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  eConfig.setServerOptions({
    watch: [
      './public/assets/css/styles.css',
      './public/posts/*',
      './public/members/*',
    ],
  });

  eConfig.addCollection('posts', require('./lib/collections/posts'));
  eConfig.addCollection('tagList', require('./lib/collections/tagList'));
  eConfig.addCollection('pagedPosts', require('./lib/collections/pagedPosts'));
  eConfig.addCollection(
    'pagedPostsByTag',
    require('./lib/collections/pagedPostsByTag')
  );

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
