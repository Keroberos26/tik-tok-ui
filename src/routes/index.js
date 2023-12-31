//Layout
import { HeaderOnly } from '~/layouts';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Explore from '~/pages/Explore';
import Live from '~/pages/Live';

import config from '~/config';

export const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.live, component: Live },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

export const privateRoutes = [];
