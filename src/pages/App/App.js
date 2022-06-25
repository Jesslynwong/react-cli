import Header from '../../components/Header/Header.js';
import routes from '../../router/index';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Header userName="jiaxin"/>
      <Router>
        <nav>
          <Link to="/">首页</Link>
          <span> | </span>
          <Link to="/novels">小说</Link>
          <span> | </span>
          <Link to="/authors">作者</Link>
        </nav>
        <Navigate>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
        </Navigate>
      </Router>
    </div>
  );
}

// interface RouteType {
//   path: string;
//   component: Function;
//   routes?: object;
// }
// : RouteType
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => {
        return (
          <React.Suspense fallback={<div>加载中...</div>}>
            <route.component {...props} routes={route.routes}/>
          </React.Suspense>
        );
      }}
    />
  );
}
