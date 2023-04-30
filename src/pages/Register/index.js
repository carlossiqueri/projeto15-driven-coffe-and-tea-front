import Container from "../../components/AuthComponents/Container";
import Form from "../../components/AuthComponents/Form";
import Label from "../../components/AuthComponents/Label";
import Input from "../../components/AuthComponents/Input";
import Button from "../../components/AuthComponents/Button";
import StyledLink from "../../components/AuthComponents/StyledLink";
import Checkbox from "../../components/AuthComponents/Checkbox";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/AuthComponents/Header";


export default function Register() {

    // navigate
    const navigate = useNavigate();

    // states
    const [formData, setFormData] = useState({ name: '', email: '', userName: '', password: '', passwordConfirm: '' });
    const [checkStatus, setCheckStatus] = useState(true);

    // functions
    function handleChange(e) {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function checkHandleChange(){
        console.log(checkStatus)

        if(checkStatus === true){
            setCheckStatus(false)
        }else{
            setCheckStatus(true)
        }

    }


    function signUp(e) {
        e.preventDefault();

        if (formData.password !== formData.passwordConfirm) {
            return alert('A confirmação de senha não confere')
        }

        axios.post("http://localhost:5000/register", { ...formData })
            .then(res => navigate('/login'))
            .catch(err => alert('preencha os dados corretamente'))
    }

    // component
    return (
        <>
            <Container>
                <Header>
                    <ion-icon name="chevron-back-outline"></ion-icon>
                    <StyledLink to={'/login'}>Voltar</StyledLink>
                </Header>
            </Container>


            <Container>
                <Form onSubmit={signUp}>
                    <h1>Inscrever-se</h1>

                    <Label htmlFor="name">Nome completo</Label>
                    <Input type="text" placeholder="Nome..." name="name" value={formData.name} onChange={handleChange} required />

                    <Label htmlFor="email">Email</Label>
                    <Input type="email" placeholder="Endereço de email..." name="email" value={formData.email} onChange={handleChange} required />


                    <Label htmlFor="username">Nome de usuário</Label>
                    <Input type="text" placeholder="Nome de usuario..." name="userName" value={formData.userName} onChange={handleChange} required />


                    <Label htmlFor="password">Senha</Label>
                    <Input type="password" placeholder="* * * * * * * * * *" value={formData.password} onChange={handleChange} name="password" required />

                    <Label htmlFor="repeat-password">Repita a senha</Label>
                    <Input type="password" placeholder="* * * * * * * * * * *" value={formData.passwordConfirm} onChange={handleChange} name="passwordConfirm" required />

                    <div className="check-div">
                        <Checkbox type="checkbox" name="terms" onChange={()=> checkHandleChange(checkStatus)} />
                        Eu concordo com os termos de usuário
                    </div>

                    <div className="submit-div">
                        <Button className="signup-btn" disabled={checkStatus} type="submit">Inscrever-se</Button>
                        <StyledLink to="/login">Entrar <ion-icon name="arrow-forward-outline"></ion-icon></StyledLink>
                    </div>

                </Form>
            </Container>
        </>
    )
}