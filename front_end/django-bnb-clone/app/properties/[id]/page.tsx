import Image from 'next/image';
import ReservationSidebar from '@/app/components/properties/ReservationSidebar';

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src="/beach_1.jpg"
                    className="object-cover w-full h-full"
                    alt="Beach house"
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className='mb-4 text-4xl'>Property name</h1>
                    <span className='mb-6 block text-lg text-gray-600'>
                        4 guests - 2 bedrooms - 1 bedrooms - 1 bathroom
                    </span>

                    <hr />

                    <div className='py-6 flex items-center space-x-4'>
                        <Image
                            src="/profile_pic_1.jpg"
                            width={50}
                            height={50}
                            className='rounded-full'
                            alt='user name'
                            
                        />
                        <p><strong>John Doe is your host</strong></p>
                    </div>

                    <hr />

                    <div className='mt-6 text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tellus nec nibh pulvinar ultricies sit amet eget justo. Phasellus condimentum, mauris nec vehicula imperdiet, justo massa tincidunt odio, non porta nulla ligula vel magna. Maecenas sed est convallis, imperdiet ex eget, condimentum mauris. Nulla facilisi. Nam in ligula orci. Quisque nulla massa, cursus eu massa in, condimentum mollis turpis. Vestibulum tincidunt sem vitae mattis malesuada. Praesent lacinia tempor mattis. Proin varius justo vel justo consequat efficitur. Morbi scelerisque tempor mauris, ut tempus lorem eleifend a. Mauris id accumsan ipsum.
                    </div>
                </div>

                <ReservationSidebar />
            </div>

        </main>
        
        
    )
}

export default PropertyDetailPage;