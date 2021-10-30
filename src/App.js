import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/index.css'
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <h1>Assignment6</h1>
    <div className="container">
        
        <Route path="/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a6/build" exact={true}>
            <Build/>
        </Route>
    </div>
</BrowserRouter>

  );
}





export default App;
