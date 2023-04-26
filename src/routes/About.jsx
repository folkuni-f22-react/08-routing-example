import { Link, Outlet } from 'react-router-dom'

const About = () => (
	<section>
	About this amazing web shop
	<Link to="about-us"> More about us </Link>

	<Outlet />

	</section>
)

export default About
