import styled from "styled-components";

export const ContentSession = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-shadow: 2px 1px 10px #d0d9d5;
  padding: 40px;

  .bainner-titulo {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    .pesquisar {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 70%;
        outline: none;
        border: 1px solid #0c854e;
        box-shadow: 0px 0px 5px #0c854e;
        padding: 8px;
        margin-top: 5px;
        font-size: 1.1rem;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      }
      button {
        display: flex;
        justify-content:center;
        align-items:center;
        outline: none;
        border: 1px solid #0c854e;
        box-shadow: 0px 0px 5px #0c854e;
        padding: 10px;
        margin-top: 5px;
        font-size: 1.1rem;
        background: #fff;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;


