import Container from "../../components/AuthComponents/Container";
import Form from "../../components/AuthComponents/Form";
import Input from "../../components/AuthComponents/Input";
import Button from "../../components/AuthComponents/Button";
import StyledLink from "../../components/AuthComponents/StyledLink";
import Label from "../../components/AuthComponents/Label";
import { useState } from "react";
import axios from "axios";
import Header from "../../components/AuthComponents/Header";
import { useNavigate } from "react-router-dom";


export default function Login() {
    // navigate
    const navigate = useNavigate()

    // states
    const [formData, setFormData] = useState({ email: '', password: '' });

    // functions
    function handleChange(e) {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })

    }

    function signIn(e) {
        e.preventDefault();

        axios.post("http://localhost:5000/login", { ...formData })
            .then(res => navigate('/'))
            .catch(err => alert('senha ou email incorreto'))
    }

    // component
    return (
        <>
            <Container>
                <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <StyledLink to={'/'}>Continuar comprando</StyledLink>
                </Header>
            </Container>

            <Container>

                <Form onSubmit={signIn}>

                    <h1>Entrar</h1>

                    <Label htmlFor="email">Email</Label>
                    <Input type="text" placeholder="Endereço de email..." name="email" onChange={handleChange} value={formData.email} required />

                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" placeholder="* * * * * * * * * * " name="password" onChange={handleChange} value={formData.password} required />

                    <div className="submit-div">
                        <Button type="submit">Entrar</Button>
                        <StyledLink to="/password-reset">Esqueceu a senha? </StyledLink>
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