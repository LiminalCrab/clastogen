let DIRECTORY;
let TIME;
let NAME;

let symbols = [];
let regr = RegExp(/{\$([^\$]+)\$}/, 'g')

function genToken(inStream){
    let array;
    let vrtStream = inStream.trim();
    console.log("Extracting meaningful symbols from string: ", vrtStream);

    while((array = regr.exec(vrtStream)) !== null){
        console.log(`Meaningful symbol: ${array[0]} found and assigned. Next starts at ${regr.lastIndex}.`)
        symbols.push(array)
    }
    //So far the 0 index of the arrays contain the {$ $} tag, I need to remove these elements from the array.
    for(index = 0; index < symbols.length; index++){
        if(symbols[index]){
            symbols[index].slice(0, 1)
            console.log(`${symbols[index].length} meaningful symbols currently indexed.`);
            console.log(symbols);

        } else {
            console.log("There are no meaningful symbols to assign.")
        }
        return classify(symbols);
    }

    function classify(data, index){
        //symbols is data.
        for(index = 0; index < symbols.length; index++){
            //probably gonna have to use another regex for this tbh
            if(symbols.find == symbols[index].toUpperCase){
                console.log("true")
            } else {
                console.log("false")
            }
        
        }    
    }
}

