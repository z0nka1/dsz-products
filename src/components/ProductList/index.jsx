import './index.css';
import ProductItem from '../ProductItem';

const ProductList = ({ products }) => {
  return (
    <div className='product-list'>
      {products.map(item => {
        return (
          <div key={item.entity_id} className='product-item-wrapper'>
            <ProductItem product={item} />
          </div>
        )
      })}
    </div>
  )
}

export default ProductList;
