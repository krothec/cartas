import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body{
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.primaryDark};
    font-family: ${props => props.theme.fonts.font};
    min-height: 100vh;
    margin: auto;
	  max-width: 1280px;
    padding-bottom: 3rem;
  }

  .main{
    display: flex;
    flex-direction: row;
    margin: auto;
    justify-content: center;

  }

`;
