// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - ise ot in any project
// npm install -g <packageName>
//sudo install -g <packageName> (mac)
const _ = require('lodash')
const items = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)
console.log(newitems)
