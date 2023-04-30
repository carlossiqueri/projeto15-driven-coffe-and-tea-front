import Container from "../../components/AuthComponents/Container";
import Form from "../../components/AuthComponents/Form";
import Input from "../../components/AuthComponents/Input";
import Button from "../../components/AuthComponents/Button";
import StyledLink from "../../components/AuthComponents/StyledLink";
import Label from "../../components/AuthComponents/Label";
import Header from "../../components/AuthComponents/Header";


export default function PasswordReset() {
    return (
        <>
            <Container>
                <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <StyledLink to={'/login'}>Voltar</StyledLink>
                </Header>
            </Container>


            <Container>
                <Form>

                    <h1>Esqueceu a sua senha?</h1>

                    <Label htmlFor="name">Email</Label>
                    <Input type="email" placeholder="Endereço de email..." required />

                    <div className="submit-div">
                        <Button>Enviar</Button>
                        <StyledLink to="/login">Entrar </StyledLink>
                    </div>

                    <div className="link-new-account-div">
                        <span>Novo por aqui?
                            <StyledLink to="/register"> Criar uma conta</StyledLink>
                        </span>
                    </div>

                </Form>
            </Container>
        </>

    )
}