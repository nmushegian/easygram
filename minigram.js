import * as ebnf from "ebnf";

export function gram(book) {
    return (page) => {
        const w3c = ebnf.Grammars.W3C.getRules(book)
        const ser = new ebnf.Parser(w3c)
        const ast = ser.getAst(s)
        return ast
    }
}
