const { json } = require('micro')

module.exports = async (req, res) => {
    const body = await json(req)
    console.log(body)
    return 'hello'
}
