const { execSync } = require('child_process');

const input = 'src';
const output = 'public';

module.exports = function (eConfig) {
  eConfig.addPassthroughCopy(`${input}/img`);
  eConfig.addPassthroughCopy(`${input}/assets/img/**/*`);

  eConfig.addPassthroughCopy({
    [`${input}/members/img/**/*`]: 'assets/img/members',
    [`${input}/posts/img/**/*`]: 'assets/img/posts',
    'node_modules/htmx.org/dist/htmx.min.js': 'assets/js/htmx.min.js',
  });

  eConfig.addWatchTarget(`${input}/assets/js/`);

  eConfig.setDynamicPermalinks(true);

  eConfig.addFilter('readableDate', require('./lib/filters/readableDate'));
  eConfig.addFilter('minifyJs', require('./lib/filters/minifyJs'));

  eConfig.setServerOptions({
    watch: [
      `./${output}/assets/css/styles.css`,
      `./${output}/posts/*`,
      `./${output}/members/*`,
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
      input,
      output,
    },
    templateFormats: ['md', 'njk', 'html'],
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
