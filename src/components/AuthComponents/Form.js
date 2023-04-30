import styled from "styled-components";

const Form = styled.form`
   padding: 30px;
   box-sizing: border-box;
   border-radius: 6px;
   
   display: flex;
   flex-direction: column;
   -webkit-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);
   -moz-box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);
   box-shadow: 0px 0px 12px 2px rgba(0,0,0,0.39);

   h1{
      margin-bottom: 30px;
      font-size: 23px;
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

   .signup-btn:disabled{
      cursor: auto;
      opacity: 0.5;
   }
`

export default Form;