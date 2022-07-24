import styled from 'styled-components';

export const Div = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
`;

export const CreateDiv = styled.div`
	h1 {
		font-family: ${props => props.theme.fonts.medieval};
		font-size: 4rem;
	}

	label {
		font-family: ${props => props.theme.fonts.font};
		font-size: 18px;
	}

	.form-row {
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}
`;
