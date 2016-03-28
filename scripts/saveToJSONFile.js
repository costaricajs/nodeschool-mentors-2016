const organizers = require('../index.js')
const jsonfile = require('jsonfile')

const file = 'mentors-data.json'

jsonfile.writeFile(file, organizers, {spaces: 2}, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.dir(jsonfile.readFileSync(file))
})
