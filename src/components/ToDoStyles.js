import styled from "styled-components";

 export const ContainerStyled = styled.div `
    display: flex;
    margin: 40px auto;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 20px;
    background-color: grey;
    border-radius: 20px;
    width: 500px;
    flex-direction: column;
    h1{
        text-align: center;
        color: black;
       font-family: Arial, Helvetica, sans-serif;
       font-size: 36px;
    }
 `

export const InputContainer = styled.div `

    display: flex;
    flex-direction: row;
    gap: 20px;
    input{
        padding: 4px;
        text-align: center;
    }
`
export const ButtonAdd = styled.button `
    background-color: green;
    color: white;
    padding: 7px 9px;
    border-radius: 10px;
    font-size: 16px;

`
export const ButtonReset = styled.button `
    background-color: red;
    color: white;
    padding: 7px 9px;
    border-radius: 10px;
    font-size: 16px;
`
export const ToDoContainer = styled.div `
    background-color: grey;
    display: flex;
    margin: 20px auto;
    align-items: center;
    text-align: center;
    border-radius: 30px;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`
export const Tarea = styled.div `
        background-color: #010329;
        border-radius: 20px;
        padding: 10px 15px;
        color: black;
        font-size: 16px;
        font-weight: 700;
        width: 300px;
        align-items: center;
        display: flex;
        
        
    div{
        color: white;
        margin: auto;
    }
`