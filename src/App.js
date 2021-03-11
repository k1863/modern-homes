import Home from "./pages/Home/Home.jsx";
import React from "react";

import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About.jsx";
import "./App.css";
import "./sass/style.scss";
import PropertiesPage from "./pages/PropertiesPage/PropertiesPage.jsx";
import TopStrip from "./components/TopStrip/TopStrip.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AgentsPage from "./pages/Agents/AgentsPage.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";
import PropertyDetailsPage from "./pages/PropertyDetailsPage/PropertyDetailsPage.jsx";

function App() {
  return (
    <div className="App">
      <TopStrip />
      <Navigation />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" component={About} />
        <Route
          exact
          path="/properties"
          render={(props) => <PropertiesPage {...props} />}
        />
        <Route
          path="/properties/:id"
          render={(props) => <PropertyDetailsPage {...props} />}
        />
        <Route path="/agents" render={() => <AgentsPage />} />
        <Route path="/contacts" component={ContactPage} />
      </Switch>
      <Footer />
    </div>
  );
}
export default App;
