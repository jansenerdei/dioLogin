import React from 'react';
import { FiThumbsUp } from 'react-icons/fi'
import {
   CardContainer,
   Content,
   HasInfo,
   ImageBackground,
   PostInfo,
   UserInfo,
   UserPicture
} from './style';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground />
      <Content>
         <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/115055477?v=4" />
            <div>
               <h4>Jansen Erdei</h4>
               <p>Há 8 minutos</p>
            </div>
         </UserInfo>
         <PostInfo>
            <h4>Projeto</h4>
            <p>Projeto feito o curso de html e css <strong>saiba mais</strong> </p>
         </PostInfo>
         <HasInfo>
            <h4>#HTML #CSS</h4>
            <p>
               <FiThumbsUp/> 10
            </p>
         </HasInfo>
      </Content>
    </CardContainer>
  )
}

export { Card };
