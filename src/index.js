import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/Home";
import CadastroVideo from "./Pages/Cadastro/Video";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CadastroCategoria from "./Pages/Cadastro/Categoria";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={() => <div>Página 404</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
