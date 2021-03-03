//Stage 1
let symbols = [];
let regr = /{\$([^\$]+)\$}/


function genToken(inStream){
        let vrtStream = inStream.match(regr);
        console.log("vrtStream: Extracting meaningful symbols", vrtStream);
    
        for(index = 0; index < vrtStream.length; index++){
            console.log(vrtStream[index]);
            if (vrtStream[index]){
                console.log(`Assigning: ${vrtStream[index].length} meaningful symbols to array.`);
                symbols.push(vrtStream[index]);
            } else {
                console.log("Failure.")
        }
    }

    console.log("Total meaningful symbols:", symbols.length);
    console.log(symbols);
}