let TITLE;
let TIME;
let OBJECT; // Person, Place, Thing, delineated by a capital letter.

let symbols = [];
let regr = RegExp(/{\$([^\$]+)\$}/, 'g')

function clastogen(inStream){
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
            }
        return classify(symbols); 
        } else {
            console.log("no elements in array");
        }

    function classify(data, index){
        console.log(`${symbols.length} meaningful symbols in array.`)
        //symbols is data
        const isTitle = symbols.find(el => /^[A-Z]+$/.test(el));
        const isTime = symbols.find(el => /([01]?[0-9]|2[0-3]):[0-5][0-9]/.test(el));
        const isObject = symbols.find(el => /[A-Z]+[a-z]+$/.test(el));; 
        // first let's figure out if there is a symbol that is capitals only.

        console.log(`Symbol matches title candidate: ${isTitle}`);

        if(isTitle){
            TITLE = isTitle;
            console.log(`Classifed symbol as Title: ${TITLE}`) } 
        else {
            console.log("No title candidate match, continuing...") }
        if(isTime){
            TIME = isTime;
            console.log(`Classified symbol as Time: ${TIME}`) } 
        else {
            console.log("No time candidate match, continuing...") }
        if(isObject){
            OBJECT = isObject;
            console.log(`Classified symbol as Object: ${OBJECT}`) }
        else { 
            console.log("No OBJECT candidate match, continuing...") }
            
    }    
}

