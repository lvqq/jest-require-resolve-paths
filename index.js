const modulePaths = require.resolve.paths('npm')
const absolutePaths = require.resolve.paths('/')
const relativePaths = require.resolve.paths('./')
const builtinPaths = require.resolve.paths('fs')
console.log('modulePaths: ', modulePaths);
console.log('absolutePaths: ', absolutePaths);
console.log('relativePaths: ', relativePaths);
console.log('builtinPaths: ', builtinPaths);