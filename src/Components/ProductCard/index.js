import './index.css'

const ProductCard = (props) => {
    const { productData } = props;
    const { title, brand, price, imageUrl, rating } = productData;

    return (
        <li className="product-item">
            <img src={imageUrl} alt="" className="thumbnail" />
            <h1 className="title">{title}</h1>
            <p className="brand">{brand}</p>
            <div className="product-details">
                <p className="price">Rs {price}</p>
                <div className="rating-container">
                    <p className="rating">{rating}</p>
                    <img src="https://assets.ccbp.in/frontend/react-js/star-img.png" alt="" className="star" />
                </div>
            </div>
        </li>
    )

}

export default ProductCard