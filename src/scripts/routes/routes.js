import Home from '../views/pages/home';
import ErrorPage from '../views/pages/error';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurants from '../views/pages/restaurants';

const routes = {
  '/': Home, // Default page
  '/not-found': ErrorPage,
  '/detail/:id': Detail,
  '/favorite': Favorite,
  '/restaurants': Restaurants,
};

export default routes;
