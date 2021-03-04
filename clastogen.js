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
        console.log("Classify called", symbols)
        //symbols is data
        // first let's figure out if there is a symbol that is capitals only.

        if(symbols.length > 0){ 
            const isDirectory = symbols.find(el => /^[A-Z]+$/.test(el));
            if(isDirectory){
                console.log("DIRECTORY CANDIDATE:", isDirectory);
            } else { 
                console.log("Targeted symbol is not a directory.");
            }
        } else {
            console.log("No array data.")
        }

    }    
}

