


const yahooStockPrices = require('yahoo-stock-prices');

async function call(){
    const price = await yahooStockPrices.getHistoricalPrices(0,1,2022,8,25,2022,'GOOG','1d');
    console.log(price.length);
};


call();