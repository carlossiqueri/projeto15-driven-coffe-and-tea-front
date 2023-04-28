import Container from "../../components/AuthComponents/Container";
import Carrousel from "../../components/AuthComponents/Carrousel";
import Form from "../../components/AuthComponents/Form";
import Label from "../../components/AuthComponents/Label";
import Input from "../../components/AuthComponents/Input";
import Button from "../../components/AuthComponents/Button";
import StyledLink from "../../components/AuthComponents/StyledLink";
import Checkbox from "../../components/AuthComponents/Checkbox";


export default function Register() {
    return (
        <Container>

            <Carrousel>
                <p>Carrosel</p>
            </Carrousel>

            <Form>
                <h1>Inscrever-se</h1>

                <Label htmlFor="name">Nome completo</Label>
                <Input type="text" placeholder="Nome..." required/>

                <Label htmlFor="email">Email</Label>
                <Input type="email" placeholder="Endereço de email..." required/>


                <Label htmlFor="username">Nome de usuário</Label>
                <Input type="text" placeholder="Nome de usuario..." required/>


                <Label htmlFor="password">Senha</Label>
                <Input type="password" placeholder="**********" required/>

                <Label htmlFor="repeat-password">Repita a senha</Label>
                <Input type="password" placeholder="***********" required/>

                <div className="check-div">
                    <Checkbox type="checkbox" name="terms" />
                    Eu concordo com os termos de usuário
                </div>

                <div className="submit-div">
                    <Button>Inscrever-se</Button>
                    <StyledLink to="/login">Entrar <ion-icon name="arrow-forward-outline"></ion-icon></StyledLink>
                </div>

            </Form>
        </Container>
    )
}