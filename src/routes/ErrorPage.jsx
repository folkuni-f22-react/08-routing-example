import { Link } from 'react-router-dom'

const ErrorPage = () => (
	<section>
		<p>Whoops! Looks like there's something wrong with that link.</p>
		<p> Do you wanna go back to the start page? </p>
		<p>
			<Link to="/"> Start page </Link>
		</p>
	</section>
)

export default ErrorPage
