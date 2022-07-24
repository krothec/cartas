import styled from 'styled-components';

export const BoxCard = styled.div`
	position: relative;
	margin: 1rem;
`;

export const InLineButtons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	position: absolute;
	bottom: 12.5rem;
	right: 0;

	.actionButton {
		cursor: pointer;
		margin-top: 8px;
		background-color: ${props => props.theme.colors.light};
		border: solid 1px;

		&:hover {
			background-color: ${props => props.theme.colors.light};
		}
	}
`;

export const Div = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;
