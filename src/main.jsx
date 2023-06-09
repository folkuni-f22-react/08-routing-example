import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routeConfig.jsx'
import './index.css'



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