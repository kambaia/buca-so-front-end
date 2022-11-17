import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { ContentCategoria, ContentSession, MainContainner } from "./styles";

export function MainLayout() {
  const [livros, setLivros] = useState([]);

  return (
    <MainContainner>
      <Grid container spacing={2} columnSpacing={{ xs: 2, sm: 1, md: 1 }}>
        <Grid
          item
          lg={3}
          xs={12}
          md={12}
          sx={{ mt: 2, height: { xs: "100%", lg: "100%", border: '1px solid #f00' } }}
          order={{ md: 1, lg: 1, sx: 2 }}
        >
          <Categoria titulo="Categorias"/>
        </Grid>
        <Grid
          item
          lg={9}
          xs={12}
          md={12}
          order={{ md: 2, lg: 2, sx: 1 }}
          sx={{ mt: 2, height: { xs: "100%", lg: "100%", border: '1px solid #f00' } }}
        >


            hhhdhdhdhdh
            sjsjsjjsjs
            shshshshsh
        </Grid>
      </Grid>

      <ContentSession
        style={{
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${"/images/bainner.webp"})`,
        }}
      >
        <div className="bainner-titulo">
          <h1>
            {" "}
            Todos os dias você aprende uma coisa nova aqui no seu gabarito de
            conhecimento de monografias{" "}
          </h1>
        </div>
      </ContentSession>
      <ContentSession>
        <div style={{ height: "10px" }}> </div>
      </ContentSession>
    </MainContainner>
  );
}



const Categoria = ({ titulo, style }: any) => {
  const categoria = [
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
    {categoria: 'Romance', _id: 10 },
  
  ]
  return (
    <>
      <ContentCategoria>
        <div className="content">
          <div className="text-categoria">
            {" "}
            <h2 style={{ color: style ? "#f0f" : "#000" }}> {titulo} </h2>
          </div>
          <ul>
            {
              categoria.map((item, index) => (
                <li key={index}>
                  {" "}
                  <a href={`/livros/${item.categoria}/${item._id}`}>
                    {" "}
                    <span>
                      {" "}
                      <FaIcons.FaAngleRight />{" "}
                    </span>
                    {item.categoria}
                  </a>{" "}
                </li>
              ))}
          </ul>
        </div>
      </ContentCategoria>{" "}
    </>
  );
};
