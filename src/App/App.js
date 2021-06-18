import './App.css';
import ObjectCookie from '../ObjectCookie/ObjectCookie';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Router>

        <Route
          // shows Object Cookie Page
          path="/"
        >
          <ObjectCookie />
        </Route>

      </Router>
    </div>
  );
}

export default App;
