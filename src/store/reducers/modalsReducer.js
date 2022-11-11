import { UPDATE_ADDING_MODAL_STATE, UPDATE_PORTFOLIO_MODAL_STATE } from '../../constants/actionsRedux';

const defaultState = {
  addingModalIsOpen: false,
  portfolioModalIsOpen: false,
};

const modalsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_ADDING_MODAL_STATE:
      return { ...state, addingModalIsOpen: action.payload };
    case UPDATE_PORTFOLIO_MODAL_STATE:
      return { ...state, portfolioModalIsOpen: action.payload };
    default:
      return state;
  }
};

export default modalsReducer;
