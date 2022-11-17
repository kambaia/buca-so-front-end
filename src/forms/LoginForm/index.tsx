import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as BIIcons from "react-icons/bi";
import { Containner, CardLogin, Form, FormLogin } from "./styles";
import sweetalert from "sweetalert";
import FormGrid from "@components/shared/FormGrid";
import { Button } from "@mui/material";
import Register from "@forms/Register";
import { InputGroup } from "src/styles/genelStyle";
import CustomButton from "@components/shared/FormGrid/Button";

export default function Login() {
  const [acesso, setAcesso] = useState(true);
  return (
    <Containner>
      <CardLogin
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${"/images/bainner.webp"})`,
        }}
      >
        <div className="eslog">
          <h1>Desfrute dos melhores livros!</h1>
          <span>
            A sua conta e desfrute dos melhres livros, angolanos, brasileiros,
            grandes univerdades, escritórios nacionais, e muito mais.
          </span>
        </div>
        <Form>
          <div className="btn-acesso">
            <button onClick={() => setAcesso(true)}>
              <span>
                <FaIcons.FaLock color="#ddd" />
              </span>
              <span style={{ marginLeft: 10 }}>Leitores</span>
            </button>
            <button onClick={() => setAcesso(false)}>
              <span>
                <FaIcons.FaLock color="#ddd" />
              </span>
              <span style={{ marginLeft: 10 }}>Registrar</span>
            </button>
          </div>

          {acesso ? (
            <>
              {" "}
              <LoginForm></LoginForm>
            </>
          ) : (
            <>
              <Register></Register>
            </>
          )}
        </Form>
      </CardLogin>
    </Containner>
  );
}
export const LoginForm = () => {
  const [form, setForm] = useState<any>({});
  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (form.email === "") {
      sweetalert({
        title: "Erro de inserção",
        text: "Entroduza o seu email",
        icon: "error",
        timer: 4000,
      });
      return false;
    }
    if (form.senha === "") {
      sweetalert({
        title: "Erro de inserção",
        text: "Introduza uma palavra-passe",
        icon: "error",
        timer: 4000,
      });
      return false;
    } else {
      console.log("Aqui");
    }
  };
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <FormLogin style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Identifique-se para prosseguir!</h2>
      </div>
      <form onSubmit={onSubmit} className="form-login">
        <InputGroup>
          <FormGrid.VTextField
            placeholder="E-email"
            type="text"
            fullWidth
            size="small"
            value={form.email}
            name=""
            onChange={onChange}
           
          />
        </InputGroup>
        <InputGroup>
          <FormGrid.VTextField
            placeholder="Palavra Pass"
            size="small"
            type="password"
            value={form.senha}
            name={"senha"}
            onChange={onChange}
            fullWidth
          />
        </InputGroup>
        <div className="f-login">
          <div className="btn-login">
            <CustomButton onClick={onSubmit} title="Acessar" />
          </div>
        </div>
      </form>
    </FormLogin>
  );
};
