import React, { useState, useEffect } from "react";
import { Containner } from "./styles";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";
import { useRouter } from "next/router";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FolderIcon from "@mui/icons-material/Folder";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LoginIcon from '@mui/icons-material/Login';
/**************reduce */

export default function Header() {
  const router = useRouter();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Containner>
      <div className="content">
        <div className="logo">
          <a href="/">
            <img src={"/logo.png"} alt="Logo" height={60} width={60} />
          </a>
        </div>
        <div className="private">
          <BottomNavigation
            sx={{ width: 400 }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Livros"
              value="recents"
              icon={<MenuBookIcon />}
            />
            <BottomNavigationAction
              label="Nossa Localização"
              value="nearby"
              icon={<LocationOnIcon />}
            />
          </BottomNavigation>
        </div>
        <div className="login">
        <BottomNavigation
            sx={{ width: 400 }}
            value={value}
            onChange={handleChange}
          >
          <BottomNavigationAction
            label="Acessa"
            value="Acessa"
            icon={<LoginIcon />}
            onClick={() => router.push("/login")}
          />
          </BottomNavigation>
        </div>
      </div>
    </Containner>
  );
}
