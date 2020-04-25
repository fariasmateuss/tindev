import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html,body,#root,.app {
    height: 100%;
  }

  body {
    background-color: ${props=> props.theme.bgColor};
    overflow-y: scroll;
  }

  body,
  input,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;