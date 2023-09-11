import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import {Home} from './home';
import {Login} from './login';
import {Feed} from './feed';
import {Cadastro} from './cadastro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  )
}

export default App;
