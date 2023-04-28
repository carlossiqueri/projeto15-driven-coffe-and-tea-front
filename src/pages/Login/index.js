import Container from "../../components/AuthComponents/Container";
import Carrousel from "../../components/AuthComponents/Carrousel";
import Form from "../../components/AuthComponents/Form";
import Input from "../../components/AuthComponents/Input";
import Button from "../../components/AuthComponents/Button";
import StyledLink from "../../components/AuthComponents/StyledLink";
import Label from "../../components/AuthComponents/Label";


export default function Login() {
    return (
        <Container>

            <Carrousel>
                <p>Carrosel</p>
            </Carrousel>

            <Form>

                <h1>Entrar</h1>

                <Label htmlFor="name">Email</Label>
                <Input type="text" placeholder="Endereço de email..." required/>

                <Label htmlFor="name">Senha</Label>
                <Input type="password" placeholder="* * * * * * * * * * " required/>

                <div className="submit-div">
                    <Button>Inscrever-se</Button>
                    <StyledLink to="/password-reset">Esqueceu a senha? </StyledLink>
                </div>

                <div className="link-new-account-div">
                    <span>Novo por aqui?
                        <StyledLink to="/register"> Criar uma conta</StyledLink>
                    </span>
                </div>

            </Form>
        </Container>
    )
}