import React, { useState } from "react";
import { Form } from "./styles";
import * as BIIcons from "react-icons/bi";
import sweetalert from "sweetalert";
import FormGrid from "@components/shared/FormGrid";
import { Button } from "@mui/material";
import { InputGroup } from "src/styles/genelStyle";
export default function Register() {
  const [form, setForm] = useState<any>({});

  const onSubmit = async (e: any) => {
    e.preventDefault();

    if (
      !form.nome ||
      !form.email ||
      !form.telefone ||
      !form.numero_m ||
      !form.senha
    ) {
      console.log(form);
      sweetalert({
        title: "Erro de inserção",
        text: "Todos os dados devem ser preenchido",
        icon: "error",
        timer: 4000,
      });
      return false;
    } else {
      console.log("tudo certo");
    }
  };
  const handleOnchange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <Form style={{ textAlign: "center" }}>
      <div className="text-registro">
        <h2>Crie uma conta e desfrute dos melhores livros que há no Cemu</h2>
      </div>
      <form onSubmit={onSubmit} className="form-register">
        <InputGroup>
          <FormGrid.VTextField
           fullWidth
           name="boardSizeX"
           type="text"
           placement="top"
           placeholder="White Hire"
           size="small"
           tips="Enter width size"
           onChange={handleOnchange}
           value={form.value}
          />
        </InputGroup>

        <InputGroup>
          <FormGrid.VTextField
            placeholder="Telefone"
            fullWidth
            name="boardSizeX"
            type="text"
            placement="top"
            size="small"
            tips="Enter width size"
            onChange={handleOnchange}
            value={form.value}
          />
        </InputGroup>
        <InputGroup>
          <FormGrid.VTextField
            placeholder="E-email"
            fullWidth
            name="boardSizeX"
            type="text"
            placement="top"
            size="small"
            tips="Enter width size"
            onChange={handleOnchange}
            value={form.value}
          />
        </InputGroup>
        <InputGroup>
          <FormGrid.VTextField
            placeholder="Nº de matricula"
            fullWidth
            name="boardSizeX"
             type="text"
            placement="top"
            size="small"
            tips="Enter width size"
            onChange={handleOnchange}
            value={form.value}
          />
        </InputGroup>
        <InputGroup>
          <FormGrid.VTextField
            placeholder="senha"
            fullWidth
            name="boardSizeX"
             type="text"
            placement="top"
            size="small"
            tips="Enter width size"
            onChange={handleOnchange}
            value={form.value}
          />
        </InputGroup>
      </form>
      <div className="f-registro">
        Já tens uma conta? <a href="/login">click aqui </a>
        <div className="btn-registro">
          <Button onClick={onSubmit} value={"Registro"}>
            <span>
              <BIIcons.BiLogIn />
            </span>
          </Button>
        </div>
      </div>
    </Form>
  );
}
