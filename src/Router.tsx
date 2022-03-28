import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./router/Home";
import MakeChart from "./router/MakeChart";

interface IRouterProps {}

function Router({}: IRouterProps) {
  return (
    <BrowserRouter>
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
