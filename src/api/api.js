const cc = require('cryptocompare');
global.fetch = require('node-fetch');

cc.coinList()
.then(coinList => {
    console.log(coinList)
})
.then(coinList => coinList.json())
.catch(console.error)

