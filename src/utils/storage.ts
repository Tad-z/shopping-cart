export const saveCartToStorage = (cart: any[]) => {
  localStorage.setItem("shopping_cart", JSON.stringify(cart));
};

export const loadCartFromStorage = (): any[] => {
  const data = localStorage.getItem("shopping_cart");
  return data ? JSON.parse(data) : [];
};
