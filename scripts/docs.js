const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md
  .render({
    files: [
      'async/**/*.js',
      'core/**/*.js',
      'numbers/**/*.js',
    ]
  })
  .then((docs) => {
    fs.writeFile(
      'README.md',
      `# std-fns
Standard Functions is a library aimed to fill in the gaps in the JS standard library. The library follows, or aims to follow, functional programming methodologies. Even though stable it is not very useful at the moment, so use at your own risk.

## Documentation

${docs}

## Todo
- Add more function.
- Add data structures.
- Add algebraic types.
- Add Flow library definition to the flow-typed project.
`
    )
  })
  .catch(console.error);