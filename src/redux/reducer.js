const initialState = {
  cartProduct: [],
  totalPrice: 0,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      let findItem = state.cartProduct.find(
        (elem) => elem.id === action.payload.id
      );
      if (findItem) {
        findItem.quantity += 1;
        return {
          ...state,
          findItem: {
            ...state.cartProduct.find((item) => item.id === findItem.id),
            findItem,
          },
          totalPrice: (state.totalPrice += findItem.price * 1),
        };
      } else {
        let payload = action.payload;
        payload.quantity = 1;
        return {
          ...state,
          cartProduct: [...state.cartProduct, payload],
          totalPrice: (state.totalPrice += payload.price * 1),
        };
      }
    }
    case "MINUS": {
      let findItem = state.cartProduct.find(
        (elem) => elem.id === action.payload.id
      );
      findItem.quantity -= 1;
      return {
        ...state,
        findItem: {
          ...state.cartProduct.find((item) => item.id === findItem.id),
          findItem,
        },
        totalPrice: (state.totalPrice -= findItem.price * 1),
      };
    }
    case "PLUS": {
      let findItem = state.cartProduct.find(
        (elem) => elem.id === action.payload.id
      );
      findItem.quantity += 1;
      return {
        ...state,
        findItem: {
          ...state.cartProduct.find((item) => item.id === findItem.id),
          findItem,
        },
        totalPrice: (state.totalPrice += findItem.price * 1),
      };
    }
    case "DELETE": {
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (item) => item.id !== action.payload.id
        ),
        totalPrice:
          state.totalPrice -
          action.payload.price * 1 * (action.payload.quantity * 1),
      };
    }

    default:
      return state;
  }
};
