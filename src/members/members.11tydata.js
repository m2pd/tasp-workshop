module.exports = {
  layout: 'layouts/member.njk',
  title: 'Member',
  eleventyComputed: {
    // permalink: (data) => `${data.page.fileSlug}/index.html`,
    image: (data) => {
      if (data.image) {
        if (data.image.search(/^https?:\/\//) !== -1) {
          return data.image;
        }
        return `/assets/img/members/${data.image}`;
      } else {
        return false;
      }
    },
  },
};
