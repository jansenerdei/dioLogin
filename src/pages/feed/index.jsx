import { Link } from "react-router-dom";

import bannerImage from '../../assets/banner.png'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Container, Column, Title, TitleHighLight } from './styles';

const Feed = () => {
   return(
      <>
         <Header autenticado={true} />
         <Container>
            <Column flex={3} >
               <Title>Feed</Title>
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
               <Card />
            </Column>
            <Column flex={1} >
               <TitleHighLight># TOP Ranking sa Semana</TitleHighLight>
               <UserInfo percentual={80} nome="Jansen Erdei" image="https://avatars.githubusercontent.com/u/115055477?v=4" />
               <UserInfo percentual={70} nome="Jansen Erdei" image="https://avatars.githubusercontent.com/u/115055477?v=4" />
               <UserInfo percentual={60} nome="Jansen Erdei" image="https://avatars.githubusercontent.com/u/115055477?v=4" />
               <UserInfo percentual={55} nome="Jansen Erdei" image="https://avatars.githubusercontent.com/u/115055477?v=4" />
               <UserInfo percentual={50} nome="Jansen Erdei" image="https://avatars.githubusercontent.com/u/115055477?v=4" />
            </Column>
         </Container>
      </>
   );
}

export { Feed };