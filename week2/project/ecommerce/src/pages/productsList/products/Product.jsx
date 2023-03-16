import { Link } from "react-router-dom"

function Product({ id, image, title, description }) {
  return (
    <li className='product-item'>
      <Link className='product' to={`/product/${id}`}>
        <img className='product-image' src={image} alt={description} />
        <span className='product-title' title={title}>{title}</span>
      </Link>
    </li >
  )
}

export default Product;