import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  box-shadow: 5px 5px gray;
  margin: 50px auto;
  text-align: center;
  width: ${(props) => (props.className === 'blueCard' ? '500px' : '700px')};
  background-color: ${(props) => (props.name === 'mini' ? '#eaf0fd' : '#fdebf7')};
`;

const Card = (props) => {
  return (
    <CardDiv className={props.className} name={props.name}>
      <h3>{props.value}</h3>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus, dolorem odio quo
        velit tempore sequi magni sed dignissimos, excepturi libero quos cupiditate praesentium,
        temporibus ipsum sit minus voluptas voluptatibus?
      </p>
      <div>{props.children}</div>
    </CardDiv>
  );
};

export default Card;
