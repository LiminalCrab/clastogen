// Need to figure out what I will use to identify new tokens.
function genToken(inStream){
        let regr = /{\$([^\$]+)\$}/
        let vrtStream = inStream.match(regr);
        let symbols = [];
        console.log("vrtStream: Extracting meaningful symbols", vrtStream);

        for(index = 0; index < vrtStream.length; index++){
            console.log(vrtStream[index]);
            if (vrtStream[index]){
                console.log(`Assigning: ${vrtStream[index].length} meaningful symbols to array.`);
                symbols.push(vrtStream[index]);
            } else {
                console.log("Failure.")
        }
        console.log("Total meaningful symbols:", symbols[index].length)
    }
}
