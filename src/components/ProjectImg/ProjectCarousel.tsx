import React, { ReactNode, useState } from 'react';

interface Props {
    images: ReactNode[];
}

const ProjectCarousel: React.FC<Props> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative rounded-xl bg-my-blue-600 border-2 border-my-blue-900 p-6 aspect-square w-full overflow-hidden">
            <div className="flex justify-center items-center h-full">
                {images[currentIndex]}
            </div>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 left-4 bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                onClick={prevImage}
            >
                &#10094; {/* Left arrow */}
            </button>
            <button
                className="absolute top-1/2 transform -translate-y-1/2 right-4 bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-75"
                onClick={nextImage}
            >
                &#10095; {/* Right arrow */}
            </button>
        </div>
    );
};

export default ProjectCarousel;
