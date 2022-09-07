import Register from './Register';
import Login from './Login';
import Home from './Home';
import Search from './Search';
import Upload from './Upload';
import Process from './Process';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
function App() {

  return (
    <Router>
    <main className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/Search">
          <Search />
        </Route>
        <Route path="/Process">
          <Process />
        </Route>
        <Route path="/Upload">
          <Upload />
        </Route>
      </Switch>
    </main>
    </Router>
  );
}

export default App;