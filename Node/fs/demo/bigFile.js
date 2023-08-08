const fs = require('fs');

let writeStream = fs.createWriteStream(__dirname+'/file.txt', {encoding:'utf8'});

for(var i = 0; i< 1e3; i++){
    writeStream.write('In this example, you will perform a map-reduce operation on the other collection for all documents that have an ord_date value greater than 01/01/2012. The operation groups by the item.sku field, and calculates the number of orders and the total quantity ordered for each sku. The operation concludes by calculating the average quantity per order for each sku value:\n')
}

writeStream.end();