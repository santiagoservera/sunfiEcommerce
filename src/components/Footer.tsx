import React from 'react'

export const Footer = () => {
  return (
   

<footer
  className="bg-[#342b53] containerWidth rounded-bl-none rounded-br-none mx-auto rounded-[80px] overflow-hidden h-[300px] ">
  <div className=" h-full">

    <div className="w-full h-full flex flex-row gap-10 items-center justify-between text-white">


      
      <div className="ml-10 flex gap-5 justify-center relative">
        <div className="flex flex-col justify-center items-center mt-4">
          <div className="w-[150px] mb-2 mt-[-20px]">
            <img src="/Group.png" alt="SUINFI" className=""/>
          </div>
          <div className="bl-2 w-[150px] text-xl">
            <h2>e c o m m e r c e</h2>
          </div>
        </div>
      </div>


      
      <div className="flex flex-col gap-0.25 items-center">
        <div className="w-[250px] mb-0 flex items-center">
          <img src="/Phone.png" alt="telefono" className="w-4 h-4 mr-2"/>
          <b className="">Teléfono</b>
        </div>
        <div className="w-[250px] mb-0 flex items-center">
          <p className="ml-6">+54 9 2644585555</p>
        </div>
        <div className="w-[250px] mb-0 flex items-center">
          <img src="/Place Marker.png" alt="visit" className="w-4 h-4 mr-2"/>
          <b className="">Visitanos</b>

        </div>
        <div className="w-[250px] mb-0 flex items-center">
          <p className="ml-6">Rivadavia 524 (E) San Juan</p>
        </div>
      </div>

    </div>
  </div>
</footer>
  )
}
