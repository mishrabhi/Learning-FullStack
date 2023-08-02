function callback(err,data) {
    if(err) {
        console.log(err)
    }else {
        console.log(data)
    }
}



function square(num, callback) {
    if(typeof num == 'number') {
        let sq = num*num;
        callback(null,sq);
    }else {
        callback('Please pass a valid number',null)
    }
}
function addFive(num,callback) {
    if(typeof num == 'number') {
        let sq = num+5;
        callback(null,sq);
    }else {
        callback('Please pass a valid number',null)
    }
}



square('2', (err,data) => {
    if(err) {

    }else {
        addFive(data, (err,d ) => {
            if(err) {

            }else {
                
            }
        })
    }
})