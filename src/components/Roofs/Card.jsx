import HeartButton from "../Buttons/HeartButton"


const Card = ({roof}) => {
  return (
    // group class name used for group hover so that if i hover any where of the div image will hover
    <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        {/* aspect ratio is width hite ratio */}
        <div
          className='
          aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
            {/* transition makes animation smooth */}
            {/* object fit cover so that image wiil not shrink */}
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={roof.image}
            alt='Roof'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
            <HeartButton />
          </div>
        </div>
        <div className='font-semibold text-lg text-[#377b82]'>{roof.category}, Dhaka</div>
        <div className='font-light text-neutral-500'>
          5 Days . {roof.dateRange}
        </div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>BDT {roof.price}</div>
          <div className='font-light'>Days</div>
        </div>
      </div>
    </div>
  )
}

export default Card