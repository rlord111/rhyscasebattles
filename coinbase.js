
const CHECKOUT_IDS = {
  10: "305b606b-b035-4aea-ab81-f1c175b87006",
  25: "cc380a81-dc5f-448f-b2d9-848dbf1c1a0e",
  75: "1d44aa4e-2d82-4dad-bd32-b2e18fd42c96",
  500: "a9ed22b5-527c-4435-993d-248face09838",
  1000: "07d1ee01-7428-44e3-b739-fc9d5d08939b"
};

function redirectToCheckout(amount) {
  const id = CHECKOUT_IDS[amount];
  if (!id) return alert("Invalid amount.");
  window.open(`https://commerce.coinbase.com/checkout/${id}`, "_blank");
}
