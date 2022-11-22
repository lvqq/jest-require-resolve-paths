const modulePaths = require.resolve.paths('npm')
const relativePaths = require.resolve.paths('./test.js')
const builtinPaths = require.resolve.paths('fs')
console.log('modulePaths: ', modulePaths);
console.log('relativePaths: ', relativePaths);
console.log('builtinPaths: ', builtinPaths);
