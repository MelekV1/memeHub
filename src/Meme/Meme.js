import React, { useEffect, useState } from 'react';
import { pics } from "../memesPic";
import './style.css';

function Meme(props) {
    const [memes, setMemes] = useState(pics);
    const [memeIndex, setMemeIndex] = useState(0);
    return (
        memes.length ? 
        <div className="container">
        <img alt='meme' src={memes[memeIndex]} />
        <div className="control-section">
            <button onClick={() => setMemeIndex(memeIndex - 1)} className="skip">Back</button>
            <button onClick={() => setMemeIndex(memeIndex + 1)} className="skip">Skip</button>
        </div>
        </div> : 
        <></>
    );
}

export default Meme;