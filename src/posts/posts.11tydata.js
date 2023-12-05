module.exports = {
  layout: 'layouts/post.njk',
  title: 'Posts',
  eleventyComputed: {
    permalink: (data) => `${data.page.fileSlug}/index.html`,
    thumb: (data) => {
      if (data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb;
        }
        return `/assets/img/posts/${data.thumb}`;
      } else {
        return false;
      }
    },
  },
};
