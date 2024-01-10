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
export const minus = (payload) => {
  return {
    type: "MINUS",
    payload,
  };
};
export const plus = (payload) => {
  return {
    type: "PLUS",
    payload,
  };
};
