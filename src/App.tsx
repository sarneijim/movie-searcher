import "./App.css";
import Header from "./component/Header";
import Catalog from "./component/Catalog";
import Movie from "./component/Movie";
import Person from "./component/Person";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="main">
          <div className="content">
            <Route exact path="/" component={Catalog} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route exact path="/person/:id" component={Person} type="person" />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
