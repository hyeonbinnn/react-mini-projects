import React from 'react';
import Card from './components/Card';
import SettingCard from './components/SettingCard';
import ShareCard from './components/ShareCard';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  background-color: #e8e9eb;
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
      <Card className="setting" value="Mini - Project" name="mini">
        <SettingCard name="setting" />
      </Card>
      <Card className="share" value="Social Media - Project">
        <ShareCard />
      </Card>
    </>
  );
};

export default App;
