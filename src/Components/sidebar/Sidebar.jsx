import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { Card, Typography } from "@mui/material";

export default function Sidebar() {
  return (
    <Card className="card_nav">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Dashboard</h3> */}
          <ul className="sidebarList">
            <NavLink to="/" className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Dashboard
            </li>
            </NavLink>
            <ul className="sidebarList">
            <Link to="/employees" className="sidebarList">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Employees
              </li>
            </Link>
            <Link to="/jobs" className="sidebarList">
              <li className="sidebarListItem">
                <WorkOutlineIcon className="sidebarIcon" />
                Jobs
              </li>
            </Link>
            <Link to="/viewjob" className="sidebarList">
              <li className="sidebarListItem">

              <WorkOutlineIcon className="sidebarIcon" />
                View Jobs
              </li>
            </Link>
            <Link to="/contact"  className="sidebarList">
              <li className="sidebarListItem">
                <PhoneIcon className="sidebarIcon" />
                Contacts
              </li>
            </Link>
            <ul className="sidebarList">
            <div className="sidebarListItem">
              <PowerSettingsNewIcon className="sidebarIcon" />
              <Link to='/signin' className="sidebarList">Log out</Link>             
            </div>
            </ul>

          </ul>
          
            {/* <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Payrole
            </li> */}
            {/* <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li> */}
          </ul>
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Quick Menu</h3> */}
          
        </div>
        <div className="sidebarMenu">
          {/* <h3 className="sidebarTitle">Notifications</h3> */}
          {/* <ul className="sidebarList"> */}
            {/* <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li> */}
            
          {/* </ul> */}
        </div>
      </div>
    </div>
    </Card>
  );
}
