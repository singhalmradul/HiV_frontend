import { UnknownAction } from 'redux';
import { setDisplayModal } from './modal.action';

export type ModalState = {
	displayModal: boolean;
};

const INITIAL_STATE: ModalState = {
	displayModal: false,
};
export const modalReducer = (state = INITIAL_STATE, action: UnknownAction) => {
	if (setDisplayModal.match(action)) {
		return { ...state, displayModal: action.payload };
	}

	return state;
};
