import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import ProductList from './components/ProductList';
import { getAccessToken, getProducts } from './service';
import Spin from './components/Spin';

const pageSize = 40;

function App() {
  const [token, setToken] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAccessToken().then(resp => {
      if (resp && resp.token) {
        setToken(resp.token);
      }
    })
  }, [])

  useEffect(() => {
    if (token) {
      setLoading(true);
      getProducts(token, currentPage, pageSize).then(productsResp => {
        const { total = 0, result = [] } = productsResp  || {};
        setTotal(total);
        setProducts(result);
        setLoading(false);
      })
    }
  }, [currentPage, token])

  return (
    <div className="App">
      <Header />
      <section className='content'>
        <Spin spinning={loading}>
          <ProductList products={products} />
          <Pagination
            total={total}
            pageSize={pageSize}
            current={currentPage}
            onPageChange={current => {
              setCurrentPage(current);
              window.scrollTo(0, 0);
            }}
          />
        </Spin>
      </section>
      <Footer />
    </div>
  );
}

export default App;
