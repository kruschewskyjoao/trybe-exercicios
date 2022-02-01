function append(data) {
  const ol = document.querySelector('#listCoins')
  const li = document.createElement('li')
  const divNome = document.createElement('div')
  divNome.innerHTML = data.name
  
  li.appendChild(divNome)
  ol.appendChild(li)
}

function nameAndOthers (data) {
  return {
    name: data.id,
    symbol: data.symbol,
  }
}

function fetchPrices () {

  fetch(`https://api.coincap.io/v2/assets/`)
    .then(response => response.json())
    .then((data) => {
      data.map( (coinData) => console.log(nameAndOthers(coinData)))
    })
};


window.onload = () => fetchPrices();