import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
  Navigate
}
from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Version } from './pages/Version';
const Routes = ()=>{
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/version" element={<Version />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </Router>
  );
}

export default Routes;
