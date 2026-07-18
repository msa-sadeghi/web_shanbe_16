const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      console.log(state.items);
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex >= 0) {
        const updateItems = [...state.items];
        updateItems[existingIndex].quantity += 1;
        return { ...state, items: updateItems };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
};

export default cartReducer;
