import React from 'react'

export const Login = () => {
  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
  <h1 className="absolute top-[20%] font-bold text-4xl md:hidden">LOGIN</h1>
  <div className="w-full h-full flex justify-center items-center">
    <form className="flex flex-col items-center w-full gap-7 md:gap-6">
      <div className="flex items-center gap-2 border-black border-b-[1px]">
        <img src="/userIconLogin.png" alt="user-icon" className="w-[13px] h-[14px]"/>
        <input type="email" placeholder="Email" className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"/>
      </div>
      <div className="flex items-center gap-2 border-black border-b-[1px]">
        <img src="/passwordIconLogin.png" alt="password-icon" className="w-[13px] h-[14px]"/>
        <input type="password" placeholder="Password" className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"/>
      </div>
      <div className="flex justify-between items-center w-full">
        <a className="mr-4 font-bold text-xs cursor-pointer">Forgot Password?</a>
        <button type="submit" className="text-white rounded-full bg-black w-24 h-8 shadow-md hover:shadow-xl font-semibold">LOGIN</button>
      </div>
    </form>
  </div>
  <div className="absolute bottom-5 w-full flex justify-between text-gray-400 text-xs">
    <div className="flex justify-center items-center font-semibold">
      <p>Or connect with</p>
    </div>
    <div className="flex justify-center items-center gap-4">
      <a href="" className="flex items-center gap-2">
        <img src="/googleIcon.png" alt="google-icon" className="w-[12px] h-[12px]"/>
        <p>Google</p>
      </a>
      <a href="" className="flex items-center gap-2">
        <img src="/facebookIcon.png" alt="facebook-icon" className="w-[12px] h-[12px]"/>
        <p>Facebook</p>
      </a>
    </div>
  </div>
</div>
  )
}
