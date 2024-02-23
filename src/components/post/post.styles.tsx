import styled from 'styled-components';

export const PostContainer = styled.div`
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	margin-bottom: 20px;
	backdrop-filter: blur(10px);
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	margin-top: 20px;
	border-radius: 1cap;
	filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
	user-select: none;
`;

export const Text = styled.p`
	margin: 0;
	color: #111;
	font-size: 16px;
	color: #333;
`;
export const Header = styled.div`
    display: flex;
    align-items: center;
	font-size: xx-large;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const ProfilePicture = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
	margin-bottom: 20px;
	margin-top: 20px;
	filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
	user-select: none;
`;

export const Buttons = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 20px;
`;

export const Button = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	border: 1px solid #ddd;
	border-radius: 10px;
	padding: 20px;
	font-size: x-large;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
	user-select: none;
	svg {
		height: 50px;
		cursor: pointer;
		color: #007bff;
		filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.5));
	}
	svg:hover {
		color: #0056b3;
	}
`;

export const ButtonText = styled.span`
	cursor: pointer;
	color: #007bff;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	&:hover {
		color: #0056b3;
	}
	transition: color 0.3s ease;
`;
