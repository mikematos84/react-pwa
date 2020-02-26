let ghpages = require('gh-pages');

ghpages.publish('build', {
  branch: 'gh-pages',
  repo: 'https://github.com/mikematos84/react-pwa.git',
}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Published to GH Pages');
  }
})