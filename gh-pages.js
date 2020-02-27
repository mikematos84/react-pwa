let ghpages = require('gh-pages');
let path = require('path');

ghpages.publish('./build', {
  branch: 'gh-pages',
  repo: 'https://github.com/mikematos84/react-pwa.git',
  dest: '.'
}, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Published to GH Pages');
  }
})