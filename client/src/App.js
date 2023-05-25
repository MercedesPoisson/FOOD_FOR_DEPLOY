import { Route, useLocation } from 'react-router-dom';
import {Home, Landing, Form, Detail, Error, Thanks } from "./views/index";
import NavBar from "./components/NavBar/NavBar";
import './App.css';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Route exact path="/" render={() => <Landing />} />  
      <Route path="/home" render={() => <Home />} />
      <Route exact path="/recipes/:id" component={Detail} />
      <Route exact path="/create" render={() => <Form />} /> 
      <Route exact path="/error" render={() => <Error />} />
      <Route exact path="/thanks" render={() => <Thanks />} />
     
     

    </div>
  );
}

export default App;
