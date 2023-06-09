import Image from 'next/image'

const Contact = ({ src, name }) => {
    return (
        <div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
            <Image 
                className='rounded-full object-cover h-12 w-12'
                src={src}
                alt={name}
                width={50}
                height={50}
            />
            <p>{name}</p>
            <div className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-bounce'></div>
        </div>
    )
}

export default Contact