import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import React from "react";


function VideoPlayer({ src, isPlaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

 
return <video ref={ref} src={src} loop playsInline />;

}

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button><br></br><br></br>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< App/>);
