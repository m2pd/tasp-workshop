const EleventyFetch = require('@11ty/eleventy-fetch');
module.exports = async function () {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  return EleventyFetch(url, {
    duration: '1m', // save for 1 minute
    type: 'json', // we’ll parse JSON for you
  });
};
