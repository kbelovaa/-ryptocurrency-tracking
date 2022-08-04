const defaultState = {
  addingModalIsOpen: false,
  portfolioModalIsOpen: false,
};

const UPDATE_ADDING_MODAL_STATE = "UPDATE_ADDING_MODAL_STATE";
const UPDATE_PORTFOLIO_MODAL_STATE = "UPDATE_PORTFOLIO_MODAL_STATE";

export const modalsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ADDING_MODAL_STATE:
      return { ...state, addingModalIsOpen: action.payload };
    case UPDATE_PORTFOLIO_MODAL_STATE:
      return { ...state, portfolioModalIsOpen: action.payload };
    default:
      return state;
  }
};

export const updateAddingModalStateAction = (payload) => ({
  type: UPDATE_ADDING_MODAL_STATE,
  payload,
});
export const updatePortfolioModalStateAction = (payload) => ({
  type: UPDATE_PORTFOLIO_MODAL_STATE,
  payload,
});
