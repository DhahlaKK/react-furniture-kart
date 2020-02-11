import  styled from  "styled-components";

const  ButtonContainer = styled.button`
{
    text-transform :capitalize;
    padding: 0.2rem 0.5rem;
     background :transparent;
    color: ${(props) => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border: 0.05rem solid var(--lightBlue);
    border-color:${(props) => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    border-radius: 1rem;
    margin :0.2rem 0.5rem 0.2rem 0;
    transition :all 0.5s ease-in-out;
    &:hover{
        background-color:${(props) => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color : var(--mainBlue);
    }  
    &:focus{
        outline:none;
    }

}`;

export default ButtonContainer;