
import Dashboard from '../containers/Dashboard';
import Organization from '../containers/Organization';
import Admins from '../containers/Admins';
import MyAccount from '../containers/MyAccount';

const routes = [
    { path: '/Overview', name: 'Dashboard', component: Dashboard },
    { path: '/Organizations', name: 'Organization', component: Organization },
    { path: '/Adminstrators', name: 'Admins', component: Admins },
    { path: '/My Account', name: 'MyAccount', component: MyAccount },
];

export default routes;