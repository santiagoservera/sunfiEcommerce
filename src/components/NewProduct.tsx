import React from 'react'

export const NewProduct = () => {
  return (
    <div  className="lg:w-full lg:flex lg:flex-row h-full bgyourProduct">
    <div className="lg:w-[25%] lg:h-full lg:flex lg:items-center ">
        <aside className="text-white bg-[#37133E] lg:min-h-screen  lg:h-full lg:w-full lg:my-auto">
            <div className="lg:flex lg:justify-center lg:py-5 border-b border-white border-opacity-30">
                <button className="border-transparent bg-[#290E2E] lg:p-5 lg:px-12  text-center text-[#D1C0D4] rounded-xl">
                    
                    CREAR UN NUEVO PRODUCTO
                </button>
            </div>
            <div className="lg:flex lg:flex-row lg:gap-3 lg:p-5 lg:ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"/></svg>TUS PUBLICACIONES</div>

        </aside>

    </div>
    <div  className="lg:w-full lg:h-full  lg:p-5 lg:flex lg:flex-row ">
        <section className="lg:w-full lg:h-full  ">
            <div className="lg:max-w-[1000px] lg:mx-10 lg:my-10">
                <div className="lg:flex lg:flex-row lg:justify-between lg:gap-10">
                    <h1 className="lg:font-bold lg:text-3xl lg:mx-10">Elige el tipo de publicacion</h1>
                    <span className="">X</span>
                </div>
               
                <div  className="bg-[#FDFCFD] lg:inline-block rounded-lg lg:p-4 lg:mx-10 lg:my-10 lg:text-center  lg:items-center">
                    <button>

                   
                    <img src="\imgCardYouproduct.png" alt="card img" className="lg:block mb-4 mr-4 mx-8" />
                    <div className="lg:inline-block">
                        <span className="lg:font-bold block lg:max-w-[166px] lg:max-h-[112] mb-1">PRODUCTOS</span>
                    </div>
                    <div >
                        <p className="lg:block lg:max-w-[166px] lg:max-h-[112px]">Crea una publicación para uno o varios productos.</p>
                    </div>
                </button>
                </div>
            </div>
            

        </section>

    </div>
    
    
</div>

  )
}
