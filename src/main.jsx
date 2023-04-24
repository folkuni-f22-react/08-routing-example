import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root.jsx'
import './index.css'

// Skapa en router med konfiguration, som beskriver alla routes som ska finnas i appen
const router = createHashRouter([
	{
		// Om URL börjar med "/"...
		path: '/',

		// ...så visa denna komponent
		element: <Root />
	}
])

// Rendera appen
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)


/*
om URL är: "/"  -> visa startsidan
om URL är: "/cart" -> visa kundvagnen
om URL är: "/products" -> visa produkterna
*/