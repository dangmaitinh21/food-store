import Banner from '~/components/Banner';
import About from '~/components/About';
import ProductsPreview from '~/components/ProductsPreview';
import { ToastContainer } from 'react-toastify';

function Home() {
  return (
    <>
      <ToastContainer />
      <Banner />
      <ProductsPreview />
      <About />
    </>
  );
}

export default Home;
