import React, { useState } from 'react';

type Props = {
  setSection: any;
  dataProduct: any;
  setDataProduct: any;
  handleChange: (e: any) => void;
};
export const FormNewProduct = ({
  setSection,
  dataProduct,
  setDataProduct,
  
}: Props) => {

  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Funcion para el boton que guarda los datos
  const handleSubmit = () => {
    // Aquí puedes hacer lo que necesites con los datos del producto, por ejemplo, enviarlos a un servidor
    console.log('Datos del producto:', formData);
    // Luego puedes resetear el formulario o hacer cualquier otra acción necesaria
    setFormData({
      nombre: '',
      descripcion: '',
      precio: '',
    })};
  
  return (
    <div>
      <div className="lg:w-full lg:flex lg:flex-row h-full bgnewProduct">
        <div className="lg:w-[25%] lg:h-full lg:flex lg:items-center">
          <aside className="text-white bg-[#37133E] lg:min-h-screen lg:h-full lg:w-full lg:my-auto">
            <div className="lg:flex lg:justify-center lg:py-5 border-b border-white border-opacity-30">
              <button className="border-transparent bg-[#290E2E] lg:p-5 lg:px-12 text-center text-[#D1C0D4] rounded-xl">
                CREAR UN NUEVO PRODUCTO
              </button>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-3 lg:p-5 lg:ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                />
              </svg>
              TUS PUBLICACIONES
            </div>
          </aside>
        </div>
        <div className="w-full h-full p-7">
          <section className="w-full h-full">
            <div className="lg:max-w-[1000px] lg:mx-auto lg:flex lg:flex-col lg:gap-10">
              <div className="text-black lg:justify-between lg:flex lg:flex-row">
                <h1 className="font-bold text-3xl">Nuevo Producto</h1>
                <div>
                  <button onClick={() => setSection(true)}>X</button>
                </div>
              </div>

              <div className="bg-white text-black w-full lg:h-[450px] rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">
                      Nombre y descripcion:
                    </p>
                  </div>
                  <div>
                    <label className="lg:text-lg font-medium">Nombre</label>
                    <input
                      type="text"
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <p className="lg:text-lg font-medium">Descripcion</p>
                    <textarea
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none resize-none"
                      rows={12}
                      cols={12}
                      name="descripcion"
                      value={formData.descripcion}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="bg-white text-black w-full lg:h-[380px] rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">Fotos</p>
                  </div>
                  <div>
                    <div className="lg:flex lg:flex-row lg:justify-between">
                      <div className="lg:flex lg:flex-col border border-dashed border-black lg:w-[250px] lg:h-[250px] lg:justify-center lg:items-center gap-3 rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                        <p className="text-center lg:px-2 border border-black rounded-full text-3xl items-center">
                          +
                        </p>
                        <div>
                          <img
                            src="../../../../assets/images/ImagenesEcommerce/imgCargaProducto.png"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="lg:flex lg:flex-col border border-dashed border-black lg:w-[250px] lg:h-[250px] lg:justify-center lg:items-center gap-3 rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                        <p className="text-center lg:px-2 border border-black rounded-full text-3xl items-center">
                          +
                        </p>
                        <div>
                          <img
                            src="../../../../assets/images/ImagenesEcommerce/imgCargaProducto.png"
                            alt=""
                          />
                        </div>
                      </div>

                      <div className="lg:flex lg:flex-col border border-dashed border-black lg:w-[250px] lg:h-[250px] lg:justify-center lg:items-center gap-3 rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                        <p className="text-center lg:px-2 border border-black rounded-full text-3xl">
                          +
                        </p>

                        <div>
                          <img
                            src="../../../../assets/images/ImagenesEcommerce/imgCargaProducto.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-full h-[170px] bg-white text-black rounded-lg shadow-[0px_4px_4px_0px_#00000040]">
                <div className="w-[95%] mx-auto">
                  <div className="py-3">
                    <p className="lg:text-xl font-bold">Precio</p>
                  </div>

                  <div>
                    <p className="lg:text-lg font-medium">Precio en tienda</p>
                    <input
                      className="border border-[#D9D9D9] w-full rounded-lg outline-none"
                      type="number"
                      name="precio"
                      value={formData.precio}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="lg:w-full lg:h-[50px]">
                <div className="w-full lg:flex lg:justify-end lg:gap-3">
                  <button className="border bg-white lg:px-16 lg:py-3 rounded-full">
                    CANCELAR
                  </button>
                  <button className="border bg-[#2C0F32] lg:px-20 lg:py-3 text-white rounded-full "onClick={handleSubmit}>
                    GUARDAR
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
