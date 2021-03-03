//Stage 1
let symbols = [];
let regr = RegExp(/{\$([^\$]+)\$}/, 'g')

function genToken(inStream){
    let array;
    let vrtStream = inStream.trim();
    console.log("Extracting meaningful symbols from string: ", vrtStream);

    while((array = regr.exec(vrtStream)) !== null){
        symbols.push(array)
        console.log(`Meaningful symbol: ${array[0]} found. Next starts at ${regr.lastIndex}`)
    }

    for(index = 0; index < symbols.length; index++){
        if(symbols[index]){
            console.log(`Assigned: ${symbols[index].length} meaningful symbols to array`)
        } else {
            console.log("There are no meaningful symbols to assign.")
        }
        return classify(symbols);
    }


 function classify(data){
        console.log(`classify ${symbols}`)
    }
}

