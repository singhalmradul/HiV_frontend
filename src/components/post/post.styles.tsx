import { HTMLAttributes } from 'react';
import styled from 'styled-components';

export const PostContainer = styled.div`
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	margin-bottom: 20px;
	backdrop-filter: blur(10px);
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
	}
	word-wrap: break-word;
	overflow-wrap: break-word;
`;

export const Embed = styled.embed`
	width: 100%;
	aspect-ratio: 1/1;
	margin-top: 20px;
	border-radius: 1cap;
	filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
	user-select: none;
`;


export const Text = styled.p`
	margin: 0;
	margin-top: 20px;
	color: #110;
	font-size: 20px;
	color: #333;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
	gap: 20px;
`;

type ButtonProps = HTMLAttributes<HTMLDivElement>;

export const Button = styled.div<ButtonProps>`
	display: flex;
	align-items: center;
	gap: 30px;
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	font-size: x-large;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	&:hover {
		box-shadow: inset 3px 2px 3px rgba(0, 0, 0, 0.3);
	}
	user-select: none;
	svg {
		height: 50px;
		cursor: pointer;
		color: #007bff;
		filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
	}
	svg:hover {
		color: #0056b3;
		transform: scale(1.5);
	}
`;

export const ButtonText = styled.span`
	cursor: pointer;
	color: #000b0f;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	&:hover {
		color: #0056b3;
		transform: scale(1.3);
	}
	transition: color 0.3s ease;
`;
