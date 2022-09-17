import { Link, useRoutes } from "react-router-dom";

import routes from "./routes";
import Routes from "./Routes";

function App() {
  const routeResult = useRoutes(routes);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

          </ul>
        </nav>
      </header>

      <main>
        {/* You can use by useRoutes like this (I prefer it): */}
        {/* {routeResult} */}
        {/* Or use by defining it */}
        <Routes />
      </main>
    </>
  );
}

export default App;
