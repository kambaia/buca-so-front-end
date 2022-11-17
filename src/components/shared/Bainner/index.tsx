// @flow
import * as React from "react";
import * as FaIcons from "react-icons/fa";
import { ContentSession } from "./styles";
export const Bainner = () => {
  return (
    <div style={{ position: "relative", top: "60px", bottom: "60px" }}>
      <ContentSession
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          backgroundImage: ` linear-gradient(to right, rgba(0,0,0,1) 30%, transparent 90%), url(${"/images/bainner.webp"})`,
        }}
      >
        <div className="bainner-titulo">
          <div className="pesquisar">
            <input placeholder="Buscar por um livro, Ex: A fitoria de estudar" />
            <button>
              <FaIcons.FaSearch />
            </button>
          </div>
        </div>
      </ContentSession>
    </div>
  );
};
