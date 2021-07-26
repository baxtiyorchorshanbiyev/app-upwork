import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import 'bootstrap/dist/css/bootstrap.css'
import "./sass/App.scss";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Banner} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
