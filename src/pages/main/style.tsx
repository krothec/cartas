import styled from 'styled-components';

export const BoxCard = styled.div`
	position: relative;
	.customCard {
		margin: 10px;
		max-width: 12rem;
		height: 14rem;
		display: flex;
		flex-direction: column;
		align-content: center;
		justify-content: space-between;
		align-items: center;
	}
`;

export const InLineButtons = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	.actionButton {
		display: none;
	}
	:hover {
		.actionButton {
			display: flex;
		}
	}
`;

export const Div = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: center;
	height: 100vh;
`;
