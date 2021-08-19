import "./App.css";
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import Compnay from './components/CompanyComponent';
import Contact from './components/ContactComponent';
import User from './components/UserComponent';
import NotFound from "./components/NotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route
                exact
                path="/"
                render={() => {
                    return (
                      
                      <Redirect to="/home" /> 
                      
                    )
                }}
              />
          <Route path='/home' component={Home}></Route>
          <Route exact path='/compnay' component={Compnay}></Route>
          <Route exact path='/contact' component={Contact}></Route>
          <Route exact path='/user' component={User}></Route>
          <Route  component={NotFound}></Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
