import Image from 'next/image';
const Categories = () => {
    return (
        <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icn_category_1.png"
                alt="Category Off Grid"
                width={20}
                height={20}
                />
                <span className='text-xs'>Off-the-grid</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icn_category_4.png"
                alt="Category Off Grid"
                width={20}
                height={20}
                />
                <span className='text-xs'>Villas</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icn_category_2.png"
                alt="Category Off Grid"
                width={20}
                height={20}
                />
                <span className='text-xs'>Cabins</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icn_category_5.png"
                alt="Category Off Grid"
                width={20}
                height={20}
                />
                <span className='text-xs'>Beach</span>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image 
                src="/icn_category_3.png"
                alt="Category Off Grid"
                width={20}
                height={20}
                />
                <span className='text-xs'>Tiny Homes</span>
            </div>
        </div>
    )
}

export default Categories;