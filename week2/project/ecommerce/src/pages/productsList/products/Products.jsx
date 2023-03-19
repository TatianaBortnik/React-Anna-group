import './Products.css';
import Product from './Product'

function Products({ products }) {
  return (
    <ul className='products-list'>
      {products &&
        products.map(product =>
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description} />
        )
      }
    </ul>
  )
}

export default Products;