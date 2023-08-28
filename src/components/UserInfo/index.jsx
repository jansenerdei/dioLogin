import React from 'react';
import {
   Container,
   NameText,
   Progress,
   UserPicture,
} from './style';

const UserInfo = ({nome, image, percentual}) => {
  return (
    <Container>
      <UserPicture src={image} />
      <NameText>{nome}</NameText>
      <Progress percentual={percentual} />
   </Container>
  )
}

export {UserInfo};
