const Home = React.lazy(() => import('../pages/Home/Home.js'));  // import()动态引入模块,只有在需要的时候才会去请求和执行该文件
const Novel = React.lazy(() => import('../pages/Novel/Novel.js'));
const Author = React.lazy(() => import('../pages/Author/Author.js'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/novels',
    exact: true,
    component: Novel,
  },
  {
    path: '/authors',
    exact: true,
    component: Author,
  }
];

export default routes;
