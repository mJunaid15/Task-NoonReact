import React from 'react'
import table from '../../../Assets/table.png'

const SecondBanner = () => {
  return (
    // <div className='mt-4  justify-content-center align-items-center' style={{ backgroundColor: '#BABABA' }}>


    // <li className='d-lg-flex justify-content-lg-center align-items-lg-center  d-flex justify-content-center align-items-center flex-column flex-lg-row '>
    //     <ul >

    //         <div className='mt-4 d-lg-flex justify-content-lg-center align-items-lg-center  d-flex justify-content-center align-items-center flex-column flex-lg-row '>
    //         <img style={{width:" 310px", height: "auto"}}   className="  img-fluid align-items-center" src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid align-contents-center"  src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid" src={table} alt="table" />
    //         <img style={{width:" 310px", height: "auto"}}className="ms-2 img-fluid" src={table} alt="table" />
    //         </div>

    //     </ul>
    // </li>

    // </div>
    <div className="container-fluid">

    <div className="grid lg:grid-cols-4  grid-cols-2 bg-light gap-2">
      <div className="">
    <img    className="  align-items-center" src="https://k.nooncdn.com/cms/pages/20220218/e5bee49ffcaa13a53b1da540633b9dee/en_dk_ksa-mega-01-frag.png" alt="table" />

      </div>
      <div className="">
    <img    className="  align-items-center" src='https://k.nooncdn.com/cms/pages/20220505/458c0135272d0f8f072746e502793e48/en_dk_ksa-mega-03.png' alt="table" />

      </div>
      <div className="">
    <img    className="  align-items-center" src={table} alt="table" />

      </div>
      <div className="">
    <img    className="  align-items-center" src="https://k.nooncdn.com/cms/pages/20220705/cddc6d905480c9285f76db59b35816a8/en_dk_uae-mega-01.png" alt="table" />

      </div>
    </div>
    </div>
  )
}

export default SecondBanner