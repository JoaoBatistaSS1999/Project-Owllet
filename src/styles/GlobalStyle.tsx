import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto Mono", monospace;
  color: #ffffff;
  scroll-behavior: smooth;
  transition: ease-in-out;
  
  &::selection {
    background-color: #62ed17;
    color: #ffffff;
  }
}

button {
    cursor: pointer;
    border: none;    
}

ul {
    list-style: none;
}

a {
  text-decoration: none;  
}

h2 {
  font-size: 22px;
}


    
`;
