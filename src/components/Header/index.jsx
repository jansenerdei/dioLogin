import React from 'react';

import {Button} from '../Button';
import Logo from '../../assets/logo-dio.png'

import {
   BuscarInputContainer,
   Column,
   Container,
   Input,
   Menu,
   MenuRigth,
   Row,
   UserPicture,
   Wrapper
} from './style';

const Header = ({autenticado}) => {
  return (
    <Wrapper>
      <Container>
         <Row>
            <img src={Logo} alt="Logo da Dio"/>
            {autenticado ? (
               <>
                  <BuscarInputContainer>
                     <Input placeholder='Buscar...'/>
                  </BuscarInputContainer>
                  <Menu>Live Code</Menu>
                  <Menu>Global</Menu>
               </>
            ) : null}
         </Row>
         <Row>
            {autenticado ? (
               <UserPicture src= "https://avatars.githubusercontent.com/u/115055477?v=4" />
            ):(
               <>
                  <MenuRigth href="#">Home</MenuRigth>
                  <Button title="Entrar"/>
                  <Button title="Cadastrar"/>
               </>
            )}
         </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }