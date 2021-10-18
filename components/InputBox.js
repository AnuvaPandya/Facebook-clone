import { session, useSession } from "next-auth/client";
import React, { useRef } from "react";
import Image from "next/dist/client/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { db } from "../firebase";
import firebase from "firebase";
import { useState } from "react";

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filepickerRef = useRef(null);
  const [imagePost, setImagePost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    db.collection("posts").add({
      messsage: inputRef.current.value,
      name: session.user.name,
      email: session.use.email,
      image: session.use.image,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.traget.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImagePost(readerEvent.target.result);
    };
  };

  return (
    <div className="bg-white text-gray-500 font-medium mt-6">
      <div className="flex-space-x-4 p-4 items-center">
        <Image
          classname="rounded-full"
          src={session.arguments.image}
          width={40}
          height={40}
          layout="fixed"
        />

        <form className="flex flex-1">
          <input
            className="rounded-full h-12 bg-gray-100 flex-grow px-5 outline-none"
            type="text"
            ref={inputRef}
            placeholder={`What's going on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
      </div>

      <div className="flex justify-evenly p-3 border-top">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:-text-base">Live Video</p>
        </div>

        <div
          onClick={() => filepickerRef.current.click()}
          className="inputIcon"
        >
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:-text-base">Photo/Video</p>
          <input
            ref={filepickerRef}
            onChange={addImageToPost}
            type="file"
            hidden
          />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:-text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
