import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  primary: '#FF0000',
  secondary: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  white: '#EDEDED',
  maxWidth: '1376px',
  boxShadow: '8px 8px 55px -14px rgba(0,0,0,0.75)'
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 2rem;
`;

createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
  }
`;

function Page(props) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <Inner>{props.children}</Inner>
      </StyledPage>
    </ThemeProvider>
  )
}

export default Page

