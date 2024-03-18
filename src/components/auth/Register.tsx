'use client';
import { useAuth } from '@/context/Auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

export const Register = () => {
  const { register } = useAuth();
  const router = useRouter();
  //Use form para validar los datos
  const {
    register: registerValidator,
    handleSubmit: handleSubmitValidator,
    formState: { errors },
    getValues,
  } = useForm();
  const [userData, setUserData] = useState({
    username: '',
    nombre: '',
    apellido: '',
    email: '',
    tipCedula: '',
    cedula: '',
    celular: '',
    direccion: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      await register(userData);
      console.log('Se ha enviado correctamente los datos');
      router.push('/auth#login');
    } catch (error) {
      console.log('AXIOS ERROR', error);
    }
  };
  // Estado para controlar el paso anterior
  let [prevStep, setPrevStep] = useState(0);
  // Estado para controlar el paso actual
  const [step, setStep] = useState(1);
  // Cambia entre los pasos
  let ChangeStep = () => {
    setPrevStep(step);
    setStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1));
  };

  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
      <h1 className="absolute top-[12%] font-bold text-4xl md:hidden">
        SIGN IN
      </h1>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmitValidator((data) => {
            console.log('SE HAN VALIDADO LOS DATOS', data);
            handleSubmit();
          })}
          className="flex flex-col items-center w-full md:w-[75%] mx-auto"
        >
          {/* -- PASO 1 -- */}
          <h2 className="font-bold text-xl">STEP {step}</h2>
          {step === 1 && (
            <>
              {/* username */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('username', { required: true })}
                    type="text"
                    placeholder="Username"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.username}
                    onChange={handleChange}
                    aria-invalid={errors.username ? 'true' : 'false'}
                  />
                  {errors.username && errors.username.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Username is required
                    </span>
                  )}
                </div>
              </div>

              {/* name*/}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('nombre', { required: true })}
                    type="text"
                    placeholder="Name"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.nombre}
                    onChange={handleChange}
                    aria-invalid={errors.nombre ? 'true' : 'false'}
                  />
                  {errors.nombre && errors.nombre.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Name is required
                    </span>
                  )}
                </div>
              </div>
              {/* lastname */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('apellido', { required: true })}
                    type="text"
                    placeholder="Lastname"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.apellido}
                    onChange={handleChange}
                    aria-invalid={errors.apellido ? 'true' : 'false'}
                  />
                  {errors.apellido && errors.apellido.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Lastname is required
                    </span>
                  )}
                </div>
              </div>
              {/* email */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('email', { required: true })}
                    type="email"
                    placeholder="Email"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.email}
                    onChange={handleChange}
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                  {errors.email && errors.email.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Email is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-end items-center w-full">
                <button
                  type="button"
                  onClick={handleSubmitValidator((data) => {
                    console.log('SE HAN VALIDADO LOS DATOS', data);
                    ChangeStep();
                  })}
                  className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
          {/* --PASO 2 */}
          {step === 2 && (
            <>
              {/* tipCedula */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <select
                    onChange={handleChange}
                    name="tipCedula"
                    value={userData.tipCedula}
                    className="text-gray-400 border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                  >
                    <option value="" disabled selected>
                      Tipo de cedula
                    </option>
                    <option value="dni">dni</option>
                    <option value="add">add</option>
                  </select>
                  {errors.tipCedula && errors.tipCedula.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Type of cedula is required
                    </span>
                  )}
                </div>
              </div>
              {/* cedula */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('cedula', { required: true })}
                    type="text"
                    placeholder="Cedula"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.cedula}
                    onChange={handleChange}
                    aria-invalid={errors.cedula ? 'true' : 'false'}
                  />
                  {errors.cedula && errors.cedula.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Cedula is required
                    </span>
                  )}
                </div>
              </div>
              {/* cellphone */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('celular', { required: true })}
                    type="text"
                    placeholder="Cellphone"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.celular}
                    onChange={handleChange}
                    aria-invalid={errors.celular ? 'true' : 'false'}
                  />
                  {errors.celular && errors.celular.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Cellphone is required
                    </span>
                  )}
                </div>
              </div>
              {/* Direccion */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('direccion', { required: true })}
                    type="text"
                    placeholder="Direccion"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.direccion}
                    onChange={handleChange}
                    aria-invalid={errors.direccion ? 'true' : 'false'}
                  />
                  {errors.direccion && errors.direccion.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Direccion is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setStep((prevStep = 1));
                  }}
                  className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                >
                  Volver
                </button>

                <button
                  type="button"
                  onClick={handleSubmitValidator((data) => {
                    console.log('SE HAN VALIDADO LOS DATOS', data);
                    ChangeStep();
                  })}
                  className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                >
                  Siguiente
                </button>
              </div>
            </>
          )}
          {/* -- PASO 3 -- */}
          {step === 3 && (
            <>
              {/* password */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('password', { required: true })}
                    type="password"
                    placeholder="Password"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.password}
                    onChange={handleChange}
                    aria-invalid={errors.password ? 'true' : 'false'}
                  />
                  {errors.password && errors.password.type === 'required' && (
                    <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                      Password is required
                    </span>
                  )}
                </div>
              </div>
              {/* confirm password */}
              <div className="flex items-center mb-6">
                <div className="relative">
                  <img
                    src="/arrowIconSignUp.png"
                    alt=""
                    className="absolute left-0 top-1/2 transform -translate-y-1/2"
                  />
                  <input
                    {...registerValidator('confirmPassword', {
                      required: true,
                      validate: (value) => value === getValues('password'),
                    })}
                    type="password"
                    placeholder="Confirm Password"
                    className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                  />
                  {errors.confirmPassword &&
                    errors.confirmPassword.type === 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Confirm Password is required
                      </span>
                    )}
                  {errors.confirmPassword &&
                    errors.confirmPassword.type !== 'required' && (
                      <span className="absolute text-red-500 text-xs bottom-0 right-0 ">
                        Passwords don't match
                      </span>
                    )}
                </div>
              </div>

              <div className="flex flex-row justify-between items-center w-full gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setStep(prevStep); // Vuelve al paso anterior
                  }}
                  className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                >
                  Volver
                </button>
                <button
                  type="submit"
                  className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
                >
                  SIGN IN
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      <div className="absolute bottom-5 w-full md:w-[75%] flex justify-between text-gray-400 text-xs">
        <div className="flex justify-center items-center font-semibold">
          <p>Or connect with</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="" className="flex items-center gap-2">
            <img
              src="/googleIcon.png"
              alt="google-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Google</p>
          </a>
          <a href="" className="flex items-center gap-2">
            <img
              src="/facebookIcon.png"
              alt="facebook-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </div>
  );
};
