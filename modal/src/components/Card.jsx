import React from 'react';
import * as S from './Card.style';

const Card = (props) => {
  const handleButtonClick = (buttonName) => {
    const buttonLinks = {
      Instagram: 'https://www.instagram.com/',
      YouTube: 'https://www.youtube.com/',
      Twitter: 'https://twitter.com/',
      FaceBook: 'https://ko-kr.facebook.com/',
    };

    const link = buttonLinks[buttonName];
    if (link) {
      window.open(link, '_blank');
    }
  };

  // handleButtonClick 함수 내에서 switch 문을 대신하여 buttonLinks 객체를 사용하여 버튼 이름과 링크를 매핑했습니다.각 버튼 클릭 시 해당 버튼 이름을 handleButtonClick 함수에 전달하고, 버튼 이름을 키로 사용하여 buttonLinks 객체에서 링크를 가져와서 새 창으로 열게 되도록 변경했습니다.

  // switch (buttonName) {
  //   case 'Instagram':
  //     window.open('https://www.instagram.com/', '_blank');
  //     break;
  //   case 'YouTube':
  //     window.open('https://www.youtube.com/', '_blank');
  //     break;
  //   case 'Twitter':
  //     window.open('https://twitter.com/', '_blank');
  //     break;
  //   case 'FaceBook':
  //     window.open('https://ko-kr.facebook.com/', '_blank');
  //     break;
  //   default:
  //     break;
  // }

  const renderButtons = () => {
    if (props.className === 'blue') {
      return (
        <>
          <S.BlueButton1>Click Me!</S.BlueButton1>
          <S.BlueButton2>Blog Go!</S.BlueButton2>
        </>
      );
    } else if (props.className === 'pink') {
      return (
        <>
          <S.PinkButton1 onClick={() => handleButtonClick('Instagram')}>Instagram</S.PinkButton1>
          <S.PinkButton2 onClick={() => handleButtonClick('YouTube')}>YouTube</S.PinkButton2>
          <S.PinkButton3 onClick={() => handleButtonClick('Twitter')}>Twitter</S.PinkButton3>
          <S.PinkButton4 onClick={() => handleButtonClick('FaceBook')}>FaceBook</S.PinkButton4>
        </>
      );
    }
  };
  return (
    <S.Cards className={props.className} name={props.name}>
      <h3>{props.value}</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus, dolorem odio quo
        velit tempore sequi magni sed dignissimos, excepturi libero quos cupiditate praesentium,
        temporibus ipsum sit minus voluptas voluptatibus?
      </p>
      <div>{renderButtons()}</div>
    </S.Cards>
  );
};

export default Card;
