import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

// Wrapper component to provide currentPath to Navbar
const NavbarWrapper = () => {
  const location = useLocation();
  return <Navbar currentPath={location.pathname} />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <>
            <NavbarWrapper />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/categories" element={<Categories />} /> */}
              {/* <Route path="/vendors" element={<Vendors />} /> */}
              {/* <Route path="/about" element={<About />} /> */}
              {/* <Route path="/help" element={<Help />} /> */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
            <Footer/>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;