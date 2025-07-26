// coinbase.js

const PRODUCTS = {
  "10":  "305b606b-b035-4aea-ab81-f1c175b87006",   // $10
  "25":  "cc380a81-dc5f-448f-b2d9-848dbf1c1a0e",   // $25
  "75":  "1d44aa4e-2d82-4dad-bd32-b2e18fd42c96",   // $75
  "500": "a9ed22b5-527c-4435-993d-248face09838",   // $500
  "1000":"07d1ee01-7428-44e3-b739-fc9d5d08939b"    // $1000
};

function openCheckout(amount) {
  const checkoutId = PRODUCTS[amount];
  if (!checkoutId) {
    alert("Invalid amount selected.");
    return;
  }
  const url = `https://commerce.coinbase.com/checkout/${checkoutId}`;
  window.open(url, "_blank");
}
