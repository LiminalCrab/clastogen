let TITLE;
let TIME;
let OBJECT; // Person, Place, Thing, delineated by a capital letter.

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
        const isDirectory = symbols.find(el => /^[A-Z]+$/.test(el));
        const isTime = symbols.find(el => /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(el));
        const isName = symbols.find(el => /[A-Z]+[a-z]+$/.test(el));; 
        //symbols is data
        // first let's figure out if there is a symbol that is capitals only.

        if(symbols.length > 0){ 
            switch(isDirectory){
                case true:
                    console.log(`DIRECTORY CANDIDATE LOCATED: ${isDirectory}`)
                case false: 
                    console.log("No directory candidate located, moving on.")
            }
            
        } else {
            console.log("No array data.")
        }

    }    
}

