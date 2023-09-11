import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, TextContent, Title, TitleHighLight } from './styles';

const Cadastro = () => {

   const navigate = useNavigate();

   const { control, handleSubmit, formState: { errors  } } = useForm({
      reValidateMode: 'onChange',
      mode: 'onChange',
  });

   const handleClickSignIn = () => {
      navigate('/Login')
   }

   return(
      <>
         <Header/>
         <Container>
            <div>
               <Title>
                  A plataforma para você aprender com experts, 
                  dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
               </Title>
            </div>
            <div>
               <Title>
                  Comece agora grátis
               </Title>
               <TextContent>Crie sua conta e make the change_</TextContent>

               <form onSubmit={handleSubmit} >
                  <Input placeholder="Nome Completo" name="name" control={control} />
                  {errors.name && <span>Nome é obrigatório</span>}
                  <Input placeholder="Email" name="email" control={control} />
                  {errors.email && <span>E-mail é obrigatório</span>}
                  <Input placeholder="Password" name="password" control={control} />
                  {errors.password && <span>Senha com 6 caracteres ou mais</span>}

                  <Button title="Começar agora" variant="secondary" onClick={handleSubmit}/>
               </form>
               <TextContent>Ao clicar em "criar minha conta grátis", declaro que aceito as 
                  Politícas de Privacidade e os Termos de Uso da DIO.</TextContent>
               <TextContent>Já tenho conta.
               <a href={handleClickSignIn} onClick={handleClickSignIn}>
                  <TitleHighLight>Fazer Login</TitleHighLight>
               </a>
               </TextContent>
            </div>
         </Container>
      </>
   );
}

export { Cadastro };