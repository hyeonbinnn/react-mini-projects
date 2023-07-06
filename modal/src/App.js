import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Card from './components/Card';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #f5f5f5;
}
h3 {
  font-size: 25px;
  margin-bottom: 40px;
}

p {
  margin: 20px;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Card className="blue" value="Project" name="mini"></Card>
      <Card className="pink" value="Social Media"></Card>
    </>
  );
};

export default App;
