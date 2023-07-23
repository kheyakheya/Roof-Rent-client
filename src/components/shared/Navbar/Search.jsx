import { BiSearch } from 'react-icons/bi'

const Search = () => {
  return (
    <div className='border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm shadow-[#f14e38] hover:shadow-md hover:shadow-[#f14e38] transition cursor-pointer'>
       <div className='flex items-center justify-between'>
            <div className='text-sm text-[#f14e38] font-semibold px-6'>Anywhere</div>
            <div className='hidden text-[#f14e38] sm:block text-sm font-semibold px-6 border-x-[1px]'>Any Weak</div>
            <div className='text-sm pl-6 pr-2 text-gray flex items-center gap-3'>
                <div className='hidden text-[#f14e38] sm:block'>Add Events</div>
                <div className='p-2 bg-[#f14e38] rounded-full text-white'>
            <BiSearch size={18} />
          </div>
            </div>
       </div>
      
    </div>
  )
}

export default Search