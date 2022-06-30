fetch(
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cpolkadot%2Chelium%2Ccardano%2Cdoge%2Clitecoin%2CDogecoin%2CBinancecoin%20%2Ctether%2Csteller%2Csolana%2Cmonero&vs_currencies=inr"
)
  .then(convertToJson)
  .then(showData);

function convertToJson(response) {
  return response.json();
}

function showData(data) {
  const bitcoin_price_container = document.getElementById(
    "bitcoin_price_container"
  );
  const ethereum_price_container = document.getElementById(
    "ethereum_price_container"
  );
  const cardano_price_container = document.getElementById(
    "cardano_price_container"
  );
  const helium_price_container = document.getElementById(
    "helium_price_container"
  );
  const polkadot_price_container = document.getElementById(
    "polkadot_price_container"
  );
  const dogecoin_price_container = document.getElementById(
    "dogecoin_price_container"
  );

  const monero_price_container = document.getElementById(
    "monero_price_container"
  );

  const tether_price_container = document.getElementById(
    "tether_price_container"
  );

  const solana_price_container = document.getElementById(
    "solana_price_container"
  );

  const litecoin_price_container = document.getElementById(
    "litecoin_price_container"
  );

  bitcoin_price_container.innerText = data.bitcoin.inr;
  ethereum_price_container.innerText = data.ethereum.inr;
  cardano_price_container.innerText = data.cardano.inr;
  helium_price_container.innerText = data.helium.inr;
  polkadot_price_container.innerText = data.polkadot.inr;
  dogecoin_price_container.innerText = data.dogecoin.inr;
  monero_price_container.innerText = data.monero.inr;
  tether_price_container.innerText = data.tether.inr;
  solana_price_container.innerText = data.solana.inr;
  litecoin_price_container.innerText = data.litecoin.inr;

  console.log(data);
}
