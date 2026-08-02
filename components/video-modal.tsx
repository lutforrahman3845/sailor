"use client";

import { useRef } from "react";
import { RiCloseLine, RiPlayFill } from "react-icons/ri";

const VIDEO_SRC = "https://www.youtube.com/embed/RktXtegZvNw?si=2-lA-AN0EkWUQTo0";

/** Circular "our story / watch video" badge that opens a YouTube dialog. */
export default function VideoModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const open = () => dialogRef.current?.showModal();
  const handleClose = () => {
    // reset src to stop playback when the dialog closes
    if (iframeRef.current) iframeRef.current.src = VIDEO_SRC;
  };

  return (
    <>
      <div className="absolute inset-3 border-4 border-primary rounded-full">
        <div className="text-primary">
          <svg className="w-full h-full p-2 animate-spin-slow motion-reduce:animate-none" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle"
                d="M 10 50 a 34 , 34 0 1 ,1  80 , 0 a 34 ,34 0 1 , 1 -80 ,0 "
                stroke="black"
                fill="none"
              />
            </defs>
            <text className="text-base font-semibold fill-primary">
              <textPath href="#circle">OUR STORY &nbsp; &nbsp; WATCH VIDEO</textPath>
            </text>
          </svg>
        </div>
        <button
          aria-label="Watch video"
          onClick={open}
          className="absolute inset-6 grid place-items-center animate-bounce motion-reduce:animate-none cursor-pointer text-primary"
        >
          <RiPlayFill className="size-8" />
        </button>
      </div>

      <dialog
        ref={dialogRef}
        onClose={handleClose}
        className="backdrop:bg-black/70 rounded-2xl p-3 md:p-4 w-11/12 max-w-5xl m-auto"
      >
        <form method="dialog">
          <button
            aria-label="Close video"
            className="absolute right-2 top-2 z-50 grid size-9 place-items-center bg-white rounded-full shadow cursor-pointer text-secondary hover:text-primary"
          >
            <RiCloseLine className="size-6" />
          </button>
        </form>
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
          <iframe
            ref={iframeRef}
            className="absolute top-0 left-0 w-full h-full"
            src={VIDEO_SRC}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </dialog>
    </>
  );
}
