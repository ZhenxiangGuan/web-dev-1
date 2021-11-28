import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './vendors/index.css'
import HelloWorld from "./components/a8/HelloWorld";
import Practice from "./components/a8/Practice/index";
import Build from "./components/a8/Build/index";
import {BrowserRouter, Route, Link} from "react-router-dom";
import A9 from './a9';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <div className="container">
    <Link to="/a8/practice">A8</Link> |
    <Link to="/a9/practice">A9</Link>

        <Route path="/hello" exact={true}>
            <HelloWorld/>
        </Route>
        <Route path={["/", "/a8", "/a8/practice"]} exact={true}>
            <Practice/>
        </Route>
        <Route path="/a8/twitter">
            <Build/>
        </Route>
        <Route path="/a9">
            <A9/>
        </Route>
    </div>
    </BrowserRouter>
    </>

  );
}





export default App;
