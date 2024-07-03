'use client'
import React, { useState } from 'react';
import { RiCloseCircleLine } from "react-icons/ri";


const Gallery = () => {
    const data = [
        { id: 1, imgSrc: '/image1.jpg' },
        { id: 2, imgSrc: '/gates.jpg' },
        { id: 3, imgSrc: '/image13.jpg' },
        { id: 4, imgSrc: '/image12.jpg' },
        { id: 5, imgSrc: '/image9.jpg' },
        { id: 6, imgSrc: '/image4.jpg' },
        { id: 7, imgSrc: '/kids.jpg' },
        { id: 8, imgSrc: '/image5.jpg' },
        { id: 9, imgSrc: '/imgsli4.jpg' },
        { id: 10, imgSrc: '/classroom.jpg' },
        { id: 11, imgSrc: '/image6.jpg' },
        { id: 12, imgSrc: '/games.jpg' },
        { id: 13, imgSrc: '/transpaort.jpg' },
        { id: 14, imgSrc: '/image2.jpg' },
        { id: 15, imgSrc: '/digital.jpg' },
        { id: 16, imgSrc: '/festi.jpg' },
        { id: 17, imgSrc: '/slider5.jpeg' },
        { id: 18, imgSrc: '/image14.jpg' },
        // Add more images as needed
    ];
    const [model, setModel] = useState(false);
    const [teamimgSrc, setTeamimgSrc] = useState('');

    const openModal = (imgSrc) => {
        setTeamimgSrc(imgSrc);
        setModel(true);
    };

    const closeModal = () => {
        setModel(false);
    };

    return (
        <>
            <h1 className="text-4xl font-bold mb-8 mt-14 text-blue-900 blink" id="Gallery">Our Gallery</h1>
            {model && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-70 z-50" onClick={closeModal}></div>
            )}

            <div className={`model ${model ? 'open' : ''} fixed top-0 left-0 w-full h-full flex justify-center items-center z-50`}>
                <img className="max-w-full max-h-full" src={teamimgSrc} alt="Team" />
                <RiCloseCircleLine onClick={closeModal} className="absolute top-4 right-4 w-10 h-10 text-white cursor-pointer" />
            </div>

            <div className="gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {data.map((item) => (
                    <div className="pics cursor-pointer" key={item.id} onClick={() => openModal(item.imgSrc)}>
                        <img className="w-[1000px] h-[1000px] object-cover" src={item.imgSrc} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Gallery;
