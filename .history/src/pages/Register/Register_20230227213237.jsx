import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase-config';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Button from '~/components/elements/Button';
import { useEffect } from 'react';

function Register() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    window.scroll({ top: 80, behavior: 'smooth' });
  }, []);
  const onSubmit = async (data) => {
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
    let uid = '';
    await createUserWithEmailAndPassword(
      authentication,
      data.email,
      data.password
    )
      .then((res) => {
        uid = res.user.uid;
      })
      .catch((err) => {
        if (err.code === 'auth/email-already-in-use') {
          toast.error('Email already in use!', {
            pauseOnHover: false,
            hideProgressBar: true,
            autoClose: 1000,
            closeButton: false,
          });
          setLoading(false);
        }
      });
    await fetch('http://localhost:8080/api/create-user', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        uid: uid,
      }),
    })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          toast.success('Account created successfully!', {
            position: 'top-right',
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            progress: undefined,
            theme: 'dark',
          });
          setTimeout(() => {
            navigate('/login');
          }, 2000);
        } else {
          console.log(res.json());
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div
      className="h-screen bg-black flex items-center justify-center"
      id="register"
    >
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl text-gray-200 text-center pb-2">Register</h5>
          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-200 pb-2"
              >
                Name
              </label>
              <input
                {...register('name')}
                id="name"
                type="text"
                className="block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
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
            <Button size="large">{loading ? 'loading...' : 'Register'}</Button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Register;
