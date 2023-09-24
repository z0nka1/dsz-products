import LazyImage from '../LazyImage';
import './index.css';

const ProductItem = ({ product }) => {
  return (
    <div className='product-item'>
      <LazyImage src={product.gallery && product.gallery[0]} className='product-img' />
      <div className='product-info'>
        <p className='product-name'>{ product.title }</p>
        <p className='product-price'>A${ product.price }</p>
      </div>
    </div>
  )
}

export default ProductItem;
