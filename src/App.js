import "./App.css";
import React from "react";
import { Router, Link, useNavigate } from "@reach/router";
//npm install @reach/router
function App() {
  let inSesion = true;

  const Header = (props) => {
    const navigate = useNavigate();

    return (
      <div>
        <h1>{props.title}</h1>
        {props.children}
        <br />
        <button onClick={() => navigate("/")}>Regresar</button>
      </div>
    );
  };

  {
    /**
  // or with hooks
  const Invoice = () => {
    const params = useParams()
    return (
      <div>
        <h1>Invoice {params.invoiceId}</h1>
      </div>
    )
  }
  */
  }

  const Home = () => (
    <Header title="Home">
      <nav>
        <Link to="/">Home</Link> | <Link to="consulta">Consulta</Link> |{" "}
        <Link to="usuario/6">Usuario</Link> | <Link to="sesion">Perfil</Link>
      </nav>
    </Header>
  );

  const Consulta = (props) => (
    <Header title="Consulta">Soy la página de consulta</Header>
  );

  const Usuario = (props) => (
    <Header title="Usuario">
      Usuario {props.userId}
      <button onClick={() => props.navigate("../66")}>Ver otro usuario</button>
    </Header>
  );

  const NotFound = () => (
    <Header title="Not Found">Sorry, nothing here.</Header>
  );

  const Perfil = () => <Header title="Perfil">Soy Perfil</Header>;

  const NoSesion = () => <Header title="NoSesion">Soy NoSesion</Header>;

  return (
    <Router>
      <Home path="/" />
      <Consulta path="consulta" />
      <Usuario path="usuario/:userId" />
      {inSesion ? <Perfil path="sesion" /> : <NoSesion path="sesion" />}
      <NotFound default />
    </Router>
  );
}

export default App;
