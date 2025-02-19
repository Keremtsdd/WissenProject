import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
    "https://garentablogfiles.blob.core.windows.net/images/6ad97902-cebc-48c9-b964-e9a133e20e9e.jpg",
    "https://cdn.motor1.com/images/mgl/OOBPl/s3/volvo-xc40-recharge-2020.jpg",
    "https://www.birarabam.com/blog/wp-content/uploads/2023/10/Turkiyede-ve-Dunyada-En-Cok-Satan-Araba-Modelleri-1-1000x563.jpg",
];

function CarCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const intervalId = setInterval(nextImage, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className="relative w-full max-w-4xl mx-auto mt-6 overflow-hidden rounded-lg shadow-lg select-none">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <img key={index} src={src} alt="Car" className="w-full h-56 sm:h-80 md:h-96 object-cover flex-shrink-0" />
                ))}
            </div>

            <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>

            <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default CarCarousel;
