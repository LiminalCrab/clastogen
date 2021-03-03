//Stage 1

function genToken(inStream){
        let regr = RegExp(/{\$([^\$]+)\$}/, 'g')
        let array;
        let symbols = [];
        console.log("clastogen: Extracting meaningful symbols from string: ", inStream);

        while((array = regr.exec(inStream)) !== null){
            symbols.push(array)
            console.log(`Meaningful symbol: ${array[0]} found. Next starts at ${regr.lastIndex}`)
        }

        for(index = 0; index < symbols.length; index++){
            if(symbols[index]){
                console.log(` Assigned: ${symbols[index].length} meaningful symbols to array`)
            } else {
                console.log("There are no meaningful symbols to assign.")
            }
            return symbols;
        }
}
