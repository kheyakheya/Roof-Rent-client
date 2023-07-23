const Footer = () => {

    const currentYear= new Date().getFullYear();
    return (
      <footer className='px-4 divide-y  text-gray-800 relative bottom-0 left-0'>
        <div className='py-6 text-sm text-center text-[#377b82]'>
          © {currentYear} RoofRent. All rights reserved.
        </div>
      </footer>
    )
  }
  
  export default Footer