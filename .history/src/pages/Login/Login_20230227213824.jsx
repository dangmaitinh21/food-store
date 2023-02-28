import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '~/components/elements/Button';

function Login() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scroll({ top: 80, behavior: 'smooth' });
  }, []);
  const onSubmit = (data) => {
    if (data.password.length < 6) {
      toast.error('Password must be at least 6 characters', {
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: 2000,
        closeButton: false,
      });
      return;
    }
    setLoading(true);
    const authentication = getAuth(app);
    signInWithEmailAndPassword(authentication, data.email, data.password)
      .then((res) => {
        sessionStorage.setItem('User Id', res.user.uid);
        sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken);
        window.dispatchEvent(new Event('storage'));
        setLoading(false);
        toast.success('Successful login!', {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: true,
          pauseOnHover: false,
          progress: undefined,
          theme: 'dark',
          onClose: (props) => navigate('/'),
        });
      })
      .catch((err) => {
        if (err.code === 'auth/wrong-password') {
          toast.error('Wrong password!');
        }
        if (err.code === 'auth/user-not-found') {
          toast.error('Email not found, please register!');
        }
        setLoading(false);
      });
  };
  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl text-gray-200 text-center pb-2">Login</h5>
          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-200 pb-2"
              >
                Email
              </label>
              <input
                {...register('email')}
                id="email"
                type="email"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200 pb-2"
              >
                Password
              </label>
              <input
                {...register('password')}
                id="password"
                type="password"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <Button size="large">{loading ? 'loading...' : 'Login'}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Login;
