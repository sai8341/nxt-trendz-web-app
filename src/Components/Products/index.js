import AllProductsList from '../AllProductsList'
import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-sections">
      <AllProductsList />
    </div>
  </>
)

export default Products
