import { Route } from 'react-router-dom';
import './App.css';
import Home from "./views/Home/Home";
import Landing from './views/Landing/Landing';
import Detail from "./views/Detail/Detail";
import Form from "./views/Form/Form"; 


function App() {
  return (
    <div className="App">

      <Route exact path="/" render={() => <Landing />} /> 
      <Route exact path="/detail" render={() => <Detail />} /> 
      <Route exact path="/create" render={() => <Form />} /> 
     
      <Route path="/home" render={() => <Home />} />

    </div>
  );
}

export default App;
