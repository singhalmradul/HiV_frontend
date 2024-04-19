import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const CommentTextArea = styled.textarea`
	font-family: 'Caveat Brush', cursive;
	font-size: 20px;
	width: 100 %;
	height: 100px;
	padding: 12px 20px;
	border: 2px solid #ccc;
	border-radius: 14px;
	background-color: #f8f8f8;
	resize: none;
    outline: none;
    box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
    &:focus {
        box-shadow: inset 3px 2px 3px rgba(0, 0, 0, 0.3);
    }
`;
export const CommentBoxContainer = styled.div`
    margin-top: 20px;
	display: flex;
	justify-content: space-between;
	gap: 20px;
`;

export const Button = styled.div<HTMLAttributes<HTMLDivElement>>`
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	font-size: x-large;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	&:hover {
        box-shadow: inset 3px 2px 3px rgba(0, 0, 0, 0.3);
	}
	user-select: none;
`;

export const ButtonText = styled.span`
	cursor: pointer;
	color: #000b0f;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	&:hover {
		color: #0056b3;
	}
	transition: color 0.3s ease;
`;
