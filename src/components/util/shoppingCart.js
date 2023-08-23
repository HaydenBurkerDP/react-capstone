function isInCart(shoppingCart, product) {
  return shoppingCart.some((cartProduct) => cartProduct.id === product.id);
}

export function loadShoppingCart() {
  let shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

  if (!shoppingCart) {
    shoppingCart = [];
  }

  return shoppingCart;
}

export function saveShoppingCart(shoppingCart) {
  localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

export function addAmountInCart(shoppingCart, product, addedAmount) {
  const newAmount = product.amount + addedAmount;
  if (newAmount < 1) return shoppingCart;

  return shoppingCart.map((cartProduct) => {
    return product.id === cartProduct.id
      ? { ...product, amount: newAmount }
      : cartProduct;
  });
}

export function addToCart(product) {
  product = { ...product, amount: 1 };
  let shoppingCart = loadShoppingCart();
  let newProduct = false;

  if (!isInCart(shoppingCart, product)) {
    shoppingCart.push(product);
    newProduct = true;
  }

  saveShoppingCart(shoppingCart);
  return newProduct;
}

export function removeFromCart(shoppingCart, product) {
  return shoppingCart.filter((cartProduct) => cartProduct.id !== product.id);
}

export function calculatePrice(shoppingCart) {
  let price = 0;

  shoppingCart.forEach((product) => {
    price += product.price * product.amount;
  });

  return price;
}

export function displayPrice(price) {
  return `$${price.toFixed(2)}`;
}
