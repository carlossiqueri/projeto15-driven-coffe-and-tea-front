import styled from "styled-components";

const Form = styled.form`
   width: 40%;
   height: 700px;
   box-sizing: border-box;
   padding: 50px 70px;
   display: flex;
   background-color: gainsboro;
   display: flex;
   flex-direction: column;

   h1{
      font-size: 23px;
      margin-bottom: 60px;
      font-weight: bold;
   }

   .submit-div{
      margin-top: 35px;
      
      button{
         margin-right: 20px;
      }
   }

   .link-new-account-div{
      margin-top: 30px;
}
`

export default Form;