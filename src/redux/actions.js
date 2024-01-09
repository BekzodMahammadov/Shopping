export const addItem = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: "DELETE",
    payload,
  };
};
export const addSubTotal = (payload) => {
  return {
    type: "SUB_TOTAL",
    payload,
  };
};
export const addSubTotalMinus = (payload) => {
  return {
    type: "SUB_TOTAL_",
    payload,
  };
};
