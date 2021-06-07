import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import Widget from "./Widget";

const Widgets = () => {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Buscar en Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <div className="widgets__widgetsHeader">
          <h2>Qué está pasando</h2>
        </div>
        <Widget
          trend="Política · Tendencia"
          title="Elecciones en Perú"
          tweetsNumber="25.000"
        />
        <Widget
          trend="Tendencia en Argentina"
          title="AFIP"
          tweetsNumber="15.000"
        />
        <Widget
          trend="COVID-19 · EN DIRECTO"
          title="Ensayos demuestran que vacunas COVID-19 disminuyen la gravedad de la enfermedad y su mortalidad"
          tweetsNumber="335 mil"
        />
        <Widget
          trend="Tenis · EN DIRECTO"
          title="Roland Garros: Sigue la acción del día 🎾"
          tweetsNumber="732 mil"
        />
        <div className="widgets__widgetsFooter">
          <span>Mostrar más</span>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
