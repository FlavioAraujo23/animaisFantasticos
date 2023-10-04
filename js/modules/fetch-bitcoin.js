export default function initBitcoinFetch() {
  fetch('https://blockchain.info/ticker').then(response => response.json())
  .then(bitcoin => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (100 / bitcoin.BRL.sell).toFixed(6)   // o valor de 100 em bitcoin
  }).catch(erro => {
    console.log(Error(err))
  })
}

// https://blockchain.info/ticker