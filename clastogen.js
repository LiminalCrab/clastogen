// Need to figure out what I will use to identify new tokens.
// Lexer?

function genToken(inStream){
        let vrtStream = inStream.trim().split('');
        let symbols = [];
        console.log("vrtStream:", vrtStream);
        symbols.push(vrtStream);
        return symbols;
}

