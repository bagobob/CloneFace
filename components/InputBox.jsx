import { useSession } from "next-auth/react";
import Image from 'next/image';
import { FaceSmileIcon } from "@heroicons/react/24/outline"
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, serverTimestamp, updateDoc  } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";


const InputBox = () => {
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);

    const sendPost = async (e) => {
        e.preventDefault();

        if (!inputRef.current.value) return;

        // Add a new document in collection "posts"
        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current.value,
            name: session.user.name,
            email: session.user.email,
            image: session.user.image,
            timestamp: serverTimestamp(),
        });
        if (imageToPost) {
            const storageRef = ref(storage, `posts/${docRef.id}`);
            removeImage();
            const uploadTask = await uploadString(storageRef, imageToPost, 'data_url');
            const downloadURL = await getDownloadURL(uploadTask.ref);
            const updateData = { postImage: downloadURL };
            await updateDoc(docRef, updateData);
        }

        inputRef.current.value = "";
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center">
                <Image
                    src={session.user.image}
                    alt="profile-pic"
                    className="rounded-full"
                    width={40}
                    height={40}
                />
                <form className="flex flex-1">
                    <input className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
                        type="text" placeholder={`What's on your mind, ${session.user.name} ?`}
                        ref={inputRef}
                    />
                    <button hidden type="submit" onClick={sendPost}>Submit</button>
                    {imageToPost && (
                        <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition
                        duration-150 transform hover:scale-105 cursor-pointer">
                            <img src={imageToPost} alt="" className="h-10 object-contain" />
                            <p className="text-xs text-red-500 text-center">Remove</p>
                        </div>
                    )}
                </form>
            </div>

            <div className="flex justify-evenly p-3 border-t">
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>

                <div onClick={() => filePickerRef.current.click()} className="inputIcon">
                    <CameraIcon className="h-7 text-green-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input hidden type="file" onChange={addImageToPost} ref={filePickerRef} />
                </div>

                <div className="inputIcon">
                    <FaceSmileIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox