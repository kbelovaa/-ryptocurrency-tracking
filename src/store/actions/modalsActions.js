import { UPDATE_ADDING_MODAL_STATE, UPDATE_PORTFOLIO_MODAL_STATE } from '../../constants/actionsRedux';

export const updateAddingModalStateAction = (payload) => ({
  type: UPDATE_ADDING_MODAL_STATE,
  payload,
});

export const updatePortfolioModalStateAction = (payload) => ({
  type: UPDATE_PORTFOLIO_MODAL_STATE,
  payload,
});
