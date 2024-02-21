import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/About', component: <About /> },
  { path: '/contact', component: <Contact /> },
];

export default routes;
