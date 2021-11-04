//this file contains all of the data layer logic

export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] }; //grabbing all the states, returning the new data layer
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket]; //clone the basket

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove the product`);
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
