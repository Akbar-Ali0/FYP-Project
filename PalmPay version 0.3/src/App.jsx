// import Navbar from "./components/Navbar"
// import SignUp from "./pages/SignUp"
import Home from "./pages/Home"

// function App() {

//   return (
//     <>
//       <Navbar />
//       <SignUp />
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Home from './pages/Home';
// import Categories from './pages/Categories';
// import Vendors from './pages/Vendors';
// import About from './pages/About';
// import Help from './pages/Help';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
            </Routes>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;