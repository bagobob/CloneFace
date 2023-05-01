import Image from 'next/image';
import {ChatBubbleLeftEllipsisIcon, ShareIcon, HandThumbUpIcon} from "@heroicons/react/24/outline"

const Post = ({ name, message, email, timestamp, image, postImage }) => {
    return (
        <div className='flex flex-col'>
            <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
                <div className='flex items-center space-x-2'>
                    <Image src={image} alt={`${name}-profile-image`} width={40} height={40} className='rounded-full' />
                    <div className=''>
                        <p className='font-medium'>{name}</p>
                        {timestamp ? (
                            <p className='text-xs text-gray-400'>
                            {new Date(timestamp?.toDate()).toLocaleString()}
                        </p>
                        ) : (
                            <p className='text-xs text-gray-400'>Loading</p>
                        )}
                    </div>
                </div>
                <p className='pt-4'>{message}</p>
            </div>
            {postImage && (
                <div className='relative h-56 md:h-96 bg-white'>
                    <Image 
                        src={postImage}
                        className='object-cover'
                        fill
                        alt='postimage'
                    />
                </div>
            )}

            {/* Footer of post */}
            <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
                <div className='inputIcon rounded-none rounded-bl-2xl'>
                    <HandThumbUpIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='inputIcon rounded-none'>
                    <ChatBubbleLeftEllipsisIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='inputIcon  rounded-none rounded-br-2xl'>
                    <ShareIcon className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>

        </div>
    )
}

export default Post