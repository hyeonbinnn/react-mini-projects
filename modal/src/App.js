import React from 'react';
import Card from './components/Card';
import BlueCard from './components/BlueCard';
import PinkCard from './components/PinkCard';
import { createGlobalStyle } from 'styled-components';

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
      <Card className="blueCard" value="Mini - Project" name="mini">
        <BlueCard name="blueCard" />
      </Card>
      <Card className="pinkCard" value="Social Media - Project">
        <PinkCard name="pinkCard" />
      </Card>
    </>
  );
};

export default App;
