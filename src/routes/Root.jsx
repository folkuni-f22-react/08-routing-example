import { Outlet, Link } from 'react-router-dom'

const Root = () => (
	<div>
		<header>
			<Link to="/"> Start </Link>
			<Link to="/products"> Products </Link>
			<Link to="/about"> About </Link>
			<Link to="/error"> This does not exist </Link>
		</header>
		<main>
			<Outlet />
		</main>
	</div>
)

export default Root
