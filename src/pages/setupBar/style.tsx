import styled from 'styled-components';

export const SetupBox = styled.div`
	position: fixed;
	transform: rotate(360deg);
	transition: all 0.5s;
	transition-timing-function: cubic-bezier(1, 0.8, 0.5, 1);
	:hover {
		transform: rotate(0deg);
		transition-delay: 0;
		transition: all 0.5s;
	}

	.glow {
		font-size: 1.8rem;
	}
`;
