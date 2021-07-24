import "./App.css";
import React from "react";
import { Router, Link } from "@reach/router";

function App() {
  const Invoice = (props) => (
    <div>
      <h2>Invoice {props.invoiceId}</h2>
    </div>
  );

  const Home = () => <h2>Soy el Home</h2>;

  const Dashboard = () => <h2>Soy el Dashboard</h2>;

  const Invoices = (props) => (
    <div>
      <h2>Invoices</h2>
      <ul>
        <li>
          <Link to="/invoices/123">Invoice 123</Link>
        </li>
        <li>
          <Link to="/invoices/abc">Invoice ABC</Link>
        </li>
      </ul>

      {props.children}
    </div>
  );

  return (
    <div>
      <h1>Tutorial!</h1>
      <nav>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="dashboard">Dashboard</Link>
        {" | "}
        <Link to="invoices">Invoices</Link>
      </nav>

      <Router>
        <Invoices path="invoices">
          <Invoice path=":invoiceId" />
        </Invoices>
        <Home path="home" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
