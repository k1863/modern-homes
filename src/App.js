import Home from "./pages/Home/Home.jsx";
import React from "react";
import axios from "axios";
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

class App extends React.Component {
  state = {
    listings: [],
    loading: true,
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let res = await axios.get("https://api.simplyrets.com/properties", {
      auth: { username: "simplyrets", password: "simplyrets" },
    });
    this.setState({ listings: res.data });
    this.setState({ loading: false });
  };
  render() {
    const { listings, loading } = this.state;
    console.log(listings);
    return (
      <div className="App">
        <TopStrip />
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home listings={listings} />} />
          <Route path="/about" component={About} />
          <Route
            exact
            path="/properties"
            render={(props) => (
              <PropertiesPage
                loading={loading}
                listings={listings}
                {...props}
              />
            )}
          />
          <Route
            path="/properties/:id"
            render={(props) => (
              <PropertyDetailsPage {...props} listings={listings} />
            )}
          />
          <Route
            path="/agents"
            render={() => <AgentsPage listings={listings} />}
          />
          <Route path="/contacts" component={ContactPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default App;
