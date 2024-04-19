import styled from 'styled-components';

export const DisplayNameCardContainer = styled.div`
    display: flex;
    align-items: center;
	font-size: x-large;
	text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
	p {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
`;

export const Avatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-right: 10px;
	margin-top: 20px;
	filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.5));
	user-select: none;
`;
