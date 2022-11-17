import { Box, InputLabel, TextField } from "@mui/material";
import styled from "styled-components";

export const WrapperContainer = styled.main`
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.main`
  position: absolute;
  padding-top: 20px;
  width: 100%;
  top: 8%;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  width: calc(100% - 300px);
  left: 300px;
`;
export const MainContent = styled.main<{ menu?: boolean }>`
  position: absolute;
  height: 100vh;
  transition: 0.5s;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
  width: ${(p) => (p.menu ? "calc(100% - 300px)" : "calc(100% - 80px)")};
  left: ${(p) => (p.menu ? "300px" : "80px")};
  @media (max-width: 1024px) {
    width: calc(100% - 90px);
    left: 80px;
  }
  z-index: 0;
`;
export const Container = styled.div`
  width: 98%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
`;

export const WrapperContent = styled.div`
  width: 99%;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex: 1;
  position: relative;

  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    .tab-item {
      display: flex;
      padding: 10px;
      outline: none;
    }
    .item {
      padding: 10px;
      outline: none;
      cursor: pointer;
      a {
        color: #555;
      }
    }
    .content {
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
    }
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  box-shadow: 0px 0px 0.1rem #ddd;
  label.Mui-focused {
    color: #f00;
  },

  .icon-group {
    padding-left: 0.5rem;
    cursor: pointer;
  }
  .label-buton {
    padding: 0.2rem;
    display: flex;
    justify-content: space-evenly;
  }
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContentSession = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .card-category {
    flex: 1.2;
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
  .card-books {
    flex: 3;
  }

  .bainner-titulo {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    h1 {
      font-size: 3em;
      color: #fff;
    }
  }
  .titulo1 {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1em;

    width: 80%;
    h2 {
      margin-top: 30px;
    }
  }
  .bainner-card-book {
    width: 100%;
    margin: 2% auto;
    display: flex;
    .item-book {
      width: 9999999px;
      width: 33%;
      height: 380px;
      box-shadow: 1px 0px 3px #0c854e;
      text-align: center;

      img {
        width: 100%;
        height: 270px;
        width: 300px;
      }
      .content-descri {
        text-align: center;
        h2,
        span {
          padding: 10px;
        }
        .item-link-downlad {
          border-top: 1px solid #ddd;
          margin-top: 5px;
          a {
            text-decoration: none;
            text-align: justify;
            color: #0c854e;
          }
        }
      }
    }
  }
`;

export const Label = styled(InputLabel)`
  margin: 10px;
  width: 50%;
  color: #111;
`;
export const TextFieldNumber = styled(TextField)``;

export const DropDownList = styled(Box)`
  height: 200px;
`;
