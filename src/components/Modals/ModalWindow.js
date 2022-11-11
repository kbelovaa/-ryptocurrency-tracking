import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateAddingModalStateAction, updatePortfolioModalStateAction } from 'Store/actions/modalsActions';
import './ModalWindow.scss';

const ModalWindow = ({ id, content }) => {
  const modalState = useSelector((state) => (
    id === 'adding-modal' ? state.modals.addingModalIsOpen : state.modals.portfolioModalIsOpen
  ));

  const dispatch = useDispatch();

  const closeModal = () => {
    const func = id === 'adding-modal' ? updateAddingModalStateAction : updatePortfolioModalStateAction;
    dispatch(func(false));
  };

  return (
    <div id={id} className={modalState ? 'modal active' : 'modal'}>
      <div className="modal__content">
        <div className="modal__close" onClick={closeModal}></div>
        {content}
      </div>
    </div>
  );
};

export default ModalWindow;
