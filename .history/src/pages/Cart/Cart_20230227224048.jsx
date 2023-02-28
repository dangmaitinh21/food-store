import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { cartProducts } from '~/stores/cart/cartSlice';
import useTabsSwitch from '~/hooks/useTabsSwitch';
import { ReactComponent as ArrowRightSvg } from '~/assets/icons/arrow-right-long-svgrepo-com.svg';
import Tabs from '~/components/Tabs';
import AddressForm from '~/components/AddressForm';
import ProductsSummary from '~/components/ProductsSummary';
import { StripeWrapper } from '~/components/PaymentForm';
import Button from '~/components/elements/Button';

function Cart() {
  const cart = useSelector(cartProducts);
  const tabs = ['Summary', 'Delivery', 'Payment'];
  const [currentTab, handleTabSwitch] = useTabsSwitch(tabs, 'Summary');
  if (!cart || cart.length === 0) {
    return (
      <div className="bg-white text-black flex justify-center h-full p-4">
        <h1>Your cart is empty!</h1>
      </div>
    );
  }

  const isLogin = (tab) => {
    const token = sessionStorage.getItem('Auth Token');
    if (token) {
      handleTabSwitch(tab);
    } else {
      toast.error('You must login before paying', {
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: 1000,
        closeButton: false,
        theme: 'dark',
      });
    }
  };

  return (
    <div className="bg-white h-50 text-black mx-auto mt-2 border border-gray-200 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <Tabs list={tabs} onTabSwitch={isLogin} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== 'Summary' ? 'hidden' : ''}`}>
        <ProductsSummary />
        <div className="flex justify-end p-2">
          <Button
            variant="dark"
            className="flex items-center"
            onClick={() => isLogin('Delivery')}
          >
            <span className="mr-1">Next</span>
            <ArrowRightSvg />
          </Button>
        </div>
      </div>
      <div className={`tabs ${currentTab !== 'Delivery' ? 'hidden' : ''}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== 'Payment' ? 'hidden' : ''}`}>
        <StripeWrapper />
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cart;
