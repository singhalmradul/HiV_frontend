import styled, { keyframes } from 'styled-components';

type ModalContainerProps = {
  display: boolean;
};
export const ModalContainer = styled.form<ModalContainerProps>`
  display: ${(props: ModalContainerProps) => (props.display ? 'block' : 'none')}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  -webkit-animation-name: fadeIn; /* Fade in the background */
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
	user-select: none;
`;

export const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
`;

export const CloseButton = styled.span`
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ModalHeader = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
	user-select: none;
`;

export const TextArea = styled.textarea`
  font-family: 'Caveat Brush', cursive;
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
	user-select: none;
`;

export const ModalFooter = styled.div`
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
  display: flex;
  justify-content: flex-end;
	user-select: none;
`;

export const SlideIn = keyframes({
  from: {
    bottom: '-300px',
    opacity: 0
  },
  to: {
    bottom: '0',
    opacity: 1
  }
});

export const FadeIn = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
});

export const Embed = styled.embed`
    display: block;
    width: auto;
    max-height: 50vh;
    margin-top: 20px;
    border-radius: 1cap;
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
    user-select: none;
`;
