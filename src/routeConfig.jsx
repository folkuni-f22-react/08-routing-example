import { createHashRouter } from 'react-router-dom'
import Root from './routes/Root.jsx'
import Start from './routes/Start.jsx'
import Products, { loader as productsLoader } from './routes/Products.jsx'
import About from './routes/About.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import ProductDetails from './routes/ProductDetails.jsx'

// Skapa en router med konfiguration, som beskriver alla routes som ska finnas i appen
const router = createHashRouter([
	{
		// Om URL börjar med "/"...
		path: '/',

		// ...så visa denna komponent
		element: <Root />,

		children: [
			{
				path: '',
				element: <Start />
			},
			{
				path: 'products',
				element: <Products />,
				loader: productsLoader
			},
			{
				path: 'about',
				element: <About />
			},
			{
				path: 'details/:id',
				element: <ProductDetails />,
				loader: productsLoader
			}
		],

		// Används om URL inte matchar någon tidigare
		errorElement: <ErrorPage />
	}
])

export { router }
