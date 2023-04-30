import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
      <div className="flex justify-center items-center h-screen">
        <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black text-2xl font-bold py-3 px-7 rounded-sm drop-shadow-xl ">
          <FcGoogle className='text-2xl mr-2 '/>
          <span>Sign in with Google </span>
        </button>
 
    </div>
  )
}

export default Login;
