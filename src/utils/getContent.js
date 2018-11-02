const fs = require('fs')
const path = require('path')
const { createClient } = require('contentful')
require('dotenv').load()

const SPACE = process.env.REACT_APP_CONTENTFUL_SPACE
const ACCESSTOKEN = process.env.REACT_APP_CONTENTFUL_API

const client = createClient({
  space: SPACE,
  accessToken: ACCESSTOKEN
})

const types = [
  ''page',
  'skills''
]

const getContent = async () => {
  console.log('>Starting import ...')
  for (const type of types) {
    console.log('>getting Content for', type)
    const entries = await client.getEntries({ 'content_type': type, include: 3 })
    if (entries.total === 1) {
      const { fields } = entries.items[0]
      fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(fields)
      )
      console.log('> retrieved Content for', type)
    }
  }
  return true
}

getContent()

if (process.argv[2] === 'install') {
  getContent()
}

module.exports = { getContent }
