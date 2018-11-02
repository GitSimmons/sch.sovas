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
  'module'
]

const getContent = async () => {
  console.log('>Starting import ...')
  for (const type of types) {
    console.log('>getting Content for', type)
    const entries = await client.getEntries({ 'content_type': type, include: 3 })
    for (const items of entries.items) {
      const { title } = items.fields
      const { mdx } = items.fields
      console.log(title)
      fs.writeFileSync(
        path.join(__dirname, '..', 'mdx', `${title}.mdx`),
        mdx
      )
      console.log('retrieved mdx for', title)
    }
  }
  return true
}

getContent()

// if (process.argv[2] === 'install') {
//   getContent()
// }

module.exports = { getContent }
