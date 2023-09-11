import React from 'react';
import { useNavigate } from "react-router-dom";

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

   const navigate = useNavigate();

   const handleClickCadastro = () => {
      navigate('/cadastro')
   }

   const handleClickSignIn = () => {
   navigate('/login')
   }  

   const handleClickHome = () => {
   navigate('/')
   }  

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
                  <MenuRigth href="#" onClick={handleClickHome}>Home</MenuRigth>
                  <Button title="Entrar" onClick={handleClickSignIn}/>
                  <Button title="Cadastrar" onClick={handleClickCadastro}/>
               </>
            )}
         </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }