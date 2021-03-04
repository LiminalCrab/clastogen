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
    if(symbols.length > 0){ 
        for(index = 0; index < symbols.length; index++){
            symbols[index].splice(0, 1);
            console.log(`${symbols[index].length} meaningful symbols currently indexed.`);
            console.log(symbols);
            }// end for
        return classify(symbols); 
        } else {
            console.log("no elements in array");
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

