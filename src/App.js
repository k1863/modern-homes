import Home from "./pages/Home/Home.jsx";
import React from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About.jsx";
import "./App.css";
import "./sass/style.scss";
import PropertiesPage from "./pages/PropertiesPage/PropertiesPage.jsx";

class App extends React.Component {
  state = {
    listingData: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    let res = await axios.get("https://api.simplyrets.com/properties", {
      auth: { username: "simplyrets", password: "simplyrets" },
    });
    this.setState({ listingData: res.data });
  };
  render() {
    const listings = this.state.listingData;
    console.log(listings);
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home {...this.state} />} />
          <Route path="/about" render={() => <About />} />
          <Route
            path="/properties"
            render={() => <PropertiesPage listings={listings} />}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
