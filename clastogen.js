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
     
       

        /*
        for(index =0; index < symbols.length; index++){
            if(symbols[index] == symbols[index].toUpperCase){
                console.log("Meaingful symbol classified as directory.")
            } else {
                console.log("Meainingful symbol is not a directory.")
            }
        }
    */         
    }
}

