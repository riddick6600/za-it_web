import { Navbar } from "@components";
import { Link } from "react-router-dom";

export const Page404 = () => (
  <>
    <Navbar />
    <div className="page404">
      <div className="error-content">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h3>Страница не найдена</h3>

        <Link to="/">На главную</Link>
      </div>
    </div>
  </>
);
