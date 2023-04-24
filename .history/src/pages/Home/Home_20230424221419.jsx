import Banner from '~/components/Banner';
import About from '~/components/About';
import ProductsPreview from '~/components/ProductsPreview';
import { ToastContainer } from 'react-toastify';

function Home() {
  return (
    <>
      <ToastContainer limit={1} />
      <Banner />
      <ProductsPreview />
      <About />
    </>
  );
}

export default Home;
