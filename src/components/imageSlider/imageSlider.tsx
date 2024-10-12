import React, { useState } from 'react';

interface ImageSliderProps {
    imageUrls: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ imageUrls }) => {
    const [index, setIndex] = useState(0);

    // Function to handle forward navigation
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % imageUrls.length); // Loops back to the first image
    };

    // Function to handle backward navigation
    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length); // Loops back to the last image
    };

    return (
        <div className="relative aspect-square ">
            {/* Display the current image */}

            <div className='w-full h-full flex overflow-hidden '>
                {imageUrls.map(url => (
                    <img
                        key={url}
                        className='object-cover h-full w-full block flex-shrink-0 flex-grow-0 transi'
                        style={{ translate: `${-100 * index}%`, transition: 'translate 700ms ease-in-out' }}
                        src={url}
                        alt={`Image ${index + 1}`}
                    />
                ))}
            </div>
            {/* Forward button */}
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white p-2 text-6xl h-full hover:bg-slate-500/45 "
            >
                {`>`}
            </button>


            {/* Back button */}
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white p-2 text-6xl h-full flex items-center justify-center hover:bg-slate-500/45 "
            >
                {`<`}
            </button>


        </div>
    );
};

export default ImageSlider;
