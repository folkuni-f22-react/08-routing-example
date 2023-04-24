import { Outlet, Link, NavLink } from 'react-router-dom'

const Root = () => (
	<div>
		<header>
			<nav>
				<NavLink activeClassName="selected" to="/"> Start </NavLink>
				<NavLink activeClassName="selected" to="/products"> Products </NavLink>
				<NavLink activeClassName="selected" to="/about"> About </NavLink>
				<NavLink activeClassName="selected" to="/error"> This does not exist </NavLink>
			</nav>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
