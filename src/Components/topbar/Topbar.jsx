import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Avatar, Tooltip, Typography } from "@mui/material";
import GitIcon from '@mui/icons-material'
import Searchbar from "../Searchbar";


export default function Topbar() {
  return (
    <div className="topbar">
      
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">greytHR</span> 
        </div>
        
        <div className="topRight">
          <div className="topbarIconContainer">
            <Tooltip title='Notifications'>          
            <NotificationsNone />
            </Tooltip>
            <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title='Language'>
            <Language />

            </Tooltip>
            <span className="topIconBadge">21</span>
          </div>
          <div className="topbarIconContainer">
            <Tooltip title='Settings'>
            <Settings />
            </Tooltip>
          </div>
          <div className="nav_logo">
        <Avatar alt="Remy Sharp" src="https://tse2.mm.bing.net/th?id=OIP.ABYpw9h1K6axVXNgKM57tgHaD1&pid=Api&P=0" />

          </div>
          {/* <img src="https://tse2.mm.bing.net/th?id=OIP.JKXEQ7JpEb3DaeCuedPudwHaHa&pid=Api&P=0" alt="" className="topAvatar" /> */}
        </div>
      </div>
    </div>
  );
}
