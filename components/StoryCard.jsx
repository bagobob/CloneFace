import Image from 'next/image'

const StoryCard = ({name, src, profile}) => {
    return (
        <div className='relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition-duration-200 transform ease-in hover:scale-105 hover:animate-pulse'>
            <Image 
                src={profile} alt={name}
                width={40} height={40}
                className='absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10 object-cover h-8 w-8'
            />
            <Image 
                src={src} alt={name}
                className='object-cover filter brightness-75 rounded-full lg:rounded-3xl'
                fill
                sizes='100'
                priority
            />
            <p className='hidden md:flex md:text-white md:absolute md:bottom-0 md:left-0 md:w-full md:text-center font-bold'>{name}</p>
        </div>
    )
}

export default StoryCard