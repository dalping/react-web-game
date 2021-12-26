import "./App.css";
import WordChainGame from "./components/WordChainGame/WordChainGame";
import NumberBaseballGame from "./components/NumberBaseballGame/NumberBaseballGame";
import Main from "./components/Main";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ReactionVelocity from "./components/ReactionVelocity/ReactionVelocity";
import RPS from "./components/RPS/RPS";
import TimeCal from "./components/TimeCal/TimeCal";

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/WordChainGame" component={WordChainGame} />
          <Route
            exact
            path="/NumberBaseballGame"
            component={NumberBaseballGame}
          />
          <Route exact path="/ReactionVelocity" component={ReactionVelocity} />
          <Route exact path="/RPS" component={RPS} />
          <Route exact path="/TimeCal" component={TimeCal} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
