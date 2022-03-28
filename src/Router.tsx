import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./router/Home";
import MakeChart from "./router/MakeChart";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/make">
          <MakeChart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
