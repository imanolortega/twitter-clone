import React from "react";
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Sidebar = ({ signOut }) => {
  return (
    <div className="sidebar">
      <SidebarOption icon={<TwitterIcon className="sidebar__twitterIcon" />} />
      <SidebarOption active icon={<HomeIcon />} text="Inicio" />
      <SidebarOption icon={<SearchIcon />} text="Explorar" />
      <SidebarOption icon={<NotificationsNoneIcon />} text="Notificaciones" />
      <SidebarOption icon={<MailOutlineIcon />} text="Mensajes" />
      <SidebarOption icon={<BookmarkBorderIcon />} text="Guardados" />
      <SidebarOption icon={<ListAltIcon />} text="Listas" />
      <SidebarOption icon={<PermIdentityIcon />} text="Perfil" />
      <SidebarOption icon={<MoreHorizIcon />} text="Más opciones" />
      <button
        icon={<ExitToAppIcon />}
        text="Cerrar Sesión"
        onClick={signOut}
        className="sidebar__signOut">
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Sidebar;
