import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/index.css'
import HelloWorld from "./components/a8/HelloWorld";
import Practice from "./components/a8/Practice/index";
import Build from "./components/a8/Build/index";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className="container">
        
        <Route path="/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a8/twitter">
            <Build/>
        </Route>
    </div>
    </BrowserRouter>
    </>

  );
}





export default App;
