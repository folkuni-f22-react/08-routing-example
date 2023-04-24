import { useLoaderData } from "react-router-dom"

const testData = [{ "id": 1, "name": "Sewing Machine", "short_description": "A mechanical or electronic device that sews fabrics together with thread.", "price": 299.99 }, { "id": 2, "name": "Seam Ripper", "short_description": "A small tool used for cutting and removing stitches.", "price": 3.99 }, { "id": 3, "name": "Scissors", "short_description": "A cutting instrument consisting of two blades with finger holes.", "price": 12.99 }, { "id": 4, "name": "Measuring Tape", "short_description": "A flexible ruler used to take body measurements and measure fabrics.", "price": 2.99 }, { "id": 5, "name": "Pins", "short_description": "Thin metal or plastic rods with pointed ends used to hold fabrics together.", "price": 1.99 }]

// I normala fall hämtar vi data från ett API eller en store
export const loader = () => testData

const Products = () => {
	const productData = useLoaderData()
	return (
		<section>
			<h1> Products </h1>
			<ul>
				{productData.map(({ id, name, price, short_description }) => (
					<div key={id}>
						<h3> {name} </h3>
						<p> {price} </p>
						<p> {short_description} </p>
					</div>
				))}
			</ul>
		</section>
	)
}

export default Products
