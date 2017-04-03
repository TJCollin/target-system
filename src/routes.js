import DashView from './components/Dash'
import LoginView from './components/Login'
import UserTable from './components/dash/UserTable'
import GroupTable from './components/dash/GroupTable'

const routes = [{
	path: '/login',
	component: LoginView,
	alias: '/'
},{
	path: '/dash',
	component: DashView,
	auth: true,
	children: [{
		path: '',
		component: UserTable
	},{
		path: '/group',
		component: GroupTable
	}]
}]

export default routes