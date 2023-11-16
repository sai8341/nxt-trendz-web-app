import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import ProductCard from "../ProductCard";

const AllProductsList = () => {
    const [productsList, setProductsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const jwtToken = Cookies.get('jwt_token');
            const apiUrl = 'https://apis.ccbp.in/products'
            const options = {
                method : "GET",
                headers : {
                    Authorization: `Bearer ${jwtToken}`
                }
            }

            try {
                const response = await fetch(apiUrl, options);
                if (response.ok === true) {
                    const fetchedData = await response.json()
                    const updatedData = fetchedData.products.map((product) => ({
                        title: product.title,
                        brand: product.brand,
                        price: product.price,
                        id: product.id,
                        imageUrl: product.image_url,
                        rating: product.rating
                    }))

                    setProductsList(updatedData)
                    setIsLoading(false);
                } else {
                    console.log(`HTTP Error! status: ${response.status}`)
                }
            } catch(error) {
                console.log(`Error Fetching Data: ${error.message} `)
            }
        }
        getProducts()
        
    }, [])

    console.log(isLoading)

    return (
        <>
            <h1 className="products-heading">All Products</h1>
            <ul className="products-list">
                {productsList.map((product) => (
                    <ProductCard key={product.id} productData={product} />
                ))}
            </ul>
        </>
    )
}


export default AllProductsList