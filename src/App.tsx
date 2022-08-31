import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Main, Service, Contact } from "@pages";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/landing" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </Router>
    </div>
  );
};
