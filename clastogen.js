// Need to figure out what I will use to identify new tokens.
// Lexer?


function genToken(inStream){
        let vrtStream = inStream.split('');
        let symbols = [];
        console.log("vrtStream:", vrtStream);

        for(index = 0; index < vrtStream.length; index++){
            console.log(vrtStream[index]);
            if (vrtStream[index].match("T")){
                console.log(`Assigning: ${vrtStream[index].length} meaningful symbols to array.`);
                symbols.push(vrtStream[index]);
            } else {
                console.log("Failure.")
        }
    }
}
