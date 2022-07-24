import styled from 'styled-components';

export const DivHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;

	.labelCustom {
		margin-right: 1rem;
	}

	h1 {
		font-family: ${props => props.theme.fonts.medieval};
		font-size: 4rem;
	}

	h2 {
		font-family: ${props => props.theme.fonts.medieval};
		font-size: 2rem;
	}
`;

export const Paragraph = styled.p`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Subtitle = styled.div`
	display: flex;
	flex-direction: row;
	width: 30rem;
	display: flex;
	justify-content: space-between;
`;

export const Div = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2rem;
	.customized {
		display: flex;
		flex-direction: row;
		align-items: baseline;
	}

	label {
		margin-right: 1rem;
	}
`;
