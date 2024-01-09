const initialState = {
  cartProduct: [],
  subTotal: 0,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        cartProduct: [...state.cartProduct, action.payload],
      };
    }
    case "SUB_TOTAL": {
      return {
        ...state,
        subTotal: state.subTotal + action.payload * 1,
      };
    }
    case "SUB_TOTAL_": {
      return {
        ...state,
        subTotal: state.subTotal - action.payload * 1,
      };
    }

    case "DELETE": {
      return {
        ...state,
        cartProduct: state.cartProduct.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    }

    default:
      return state;
  }
};
