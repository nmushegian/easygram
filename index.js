const ebnf = require('ebnf')

module.exports = function(book) {
    const w3c = ebnf.Grammars.Custom.getRules(book)
    const ser = new ebnf.Parser(w3c)
    return (s) => ser.getAST(s)
}
module.exports.ebnf = ebnf
