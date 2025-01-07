import React from 'react';
import Image from 'next/image';
import Logo from "@/assets/image/Logo.png"
export default function Register() {
  return (
    <div className="w-11/12 mx-auto">
        <div className='mt-10 flex flex-col justify-between items-center'>
            <Image src={Logo} width={100} alt='Logo' />
            <h1 className='text-xl pt-2'>สมัครสมาชิก</h1>
            <div className='border border-gray-600 w-full my-6' />
        </div>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label htmlFor="user_name" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกชื่อเล่นของคุณ"
              required
            />
          </div>
          <div>
            <label htmlFor="pass_word" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกรหัสผ่านของคุณ"
              required
            />   
          </div>
          <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">First name</label>
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกชื่อจริงของคุณ"
              required
            />
          </div>
          <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Last name</label>
            <input
              type="text"
              id="last_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกนามสกุลของคุณ"
              required
            />
          </div>
          <div>
            <label htmlFor="restaurant" className="block mb-2 text-sm font-medium text-gray-900">Restaurant</label>
            <input
              type="text"
              id="restaurant"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="กรอกชื่อร้านของคุณ"
              required
            />
          </div>
          <div>
            <label htmlFor="telephone" className="block mb-2 text-sm font-medium text-gray-900">Telephone</label>
            <input
              type="tel"
              id="telephone"
              placeholder='กรอกหมายเลขโทรศัพท์ของคุณ'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="ref_code" className="block mb-2 text-sm font-medium text-gray">Ref. code</label>
          <input
            type="text"
            id="ref_code"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอก"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="member_id" className="block mb-2 text-sm font-medium text-gray-900">Member ID</label>
          <input
            type="text"
            id="member_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="กรอกรหัสสมาชิกแมคโคร Makro Pro"
            required
          />
        </div>
       
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mb-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
