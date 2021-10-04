import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Services from './Component/Services/Services';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Error from './Component/Error/Error';
import Carrers from './Component/Careers/Carrers';
import Footer from './Component/Footer/Footer';
import Apply from './Component/Apply/Apply';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/service">
            <Services></Services>
          </Route>
          <Route path="/about">
             <About>
            </About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/careers">
            <Carrers></Carrers>
          </Route>
          <Route path="/apply">
            <Apply></Apply>
          </Route>
          
          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
