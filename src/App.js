import logo from './logo.svg';

import Login from './Login';
import Dashboard from './Dashboard';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  exact path="/" element={<Login/>} />
          <Route path="/home" element={<Dashboard/>}/>
          {/* <Route path="/About" element={<About/>}/> */}
          <Route path="*" element={<Login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
