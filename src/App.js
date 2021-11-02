import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/index.css'
import HelloWorld from "./components/a7/HelloWorld";
import Practice from "./components/a7/Practice/index";
import Build from "./components/a7/Build/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <>
    <h1>Assignment6</h1>
    <BrowserRouter>
    <div className="container">
        
        <Route path="/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a7/twitter" exact={true}>
            <Build/>
        </Route>
    </div>
    </BrowserRouter>
    </>

  );
}





export default App;
