
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
// import LoggedInNavbar from "./components/LoggedInNav";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Store from "./pages/Store";
// import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Signup.css";
import "./styles/Nav.css";
import "./styles/Footer.css";
import Auth from "./utils/auth";
import './App.css';


const httpLink = createHttpLink({
  uri: "http://localhost:3001/graphql",
});


const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  if (localStorage.getItem("id_token") === null)

    return (
      <ApolloProvider client={client}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/store" element={<Store />} />

          </Routes>
          {/* <Footer /> */}
        </Router>
      </ApolloProvider >
    )
  else return (
    <ApolloProvider client={client}>
      <Router>
        {/* <LoggedInNavbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          // <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </ApolloProvider >
  )
};


export default App;
