import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { wrap } from '../../../utils/wrap';

const MemberCarousel = () => {
    const sliderVariants = {
        incoming: direction => ({
            x: direction > 0 ? "100%" : "-100%",
            scale: 1.2,
            opacity: 0
        }),
        active: { x: 0, scale: 1, opacity: 1 },
        exit: direction => ({
            x: direction > 0 ? "-100%" : "100%",
            scale: 1,
            opacity: 0.2
        })
    }

    const sliderTransition = {
        duration: 1,
        ease: [0.56, 0.03, 0.12, 1.04]
    }

    const [[imageCount, direction], setImageCount] = useState([0, 0])

    const IMAGES = [
        {
            id: 0,
            imageSrc: 'images/liikmed/Agur_portree.webp',
            name: 'Agur',
            description: "Agur is a member of the team.",
        },
        {
            id: 1,
            imageSrc: "images/liikmed/Albert_portree_for_real.webp",
            name: 'Albert',
            description: "Albert is a member of the team.",
        },
        {
            id: 2,
            imageSrc: "images/liikmed/Hanno_portree.webp",
            name: 'Hanno',
            description: "Hanno is a member of the team.",
        },
        {
            id: 3,
            imageSrc: "images/liikmed/Mart_portree.webp",
            name: 'Mart',
            description: "Mart is a member of the team.",
        },
        {
            id: 4,
            imageSrc: "images/liikmed/Silver_portree.webp",
            name: 'Silver',
            description: "Silver is a member of the team",
        }
    ];

    const activeImageIndex = wrap(0, IMAGES.length, imageCount)

    const swipeToImage = swipeDirection => {
        setImageCount([imageCount + swipeDirection, swipeDirection])
    }

    const dragEndHandler = dragInfo => {
        const draggedDistance = dragInfo.offset.x
        const swipeThreshold = 50
        if (draggedDistance > swipeThreshold) {
            swipeToImage(-1)
        } else if (draggedDistance < -swipeThreshold) {
            swipeToImage(1)
        }
    }

    const skipToImage = imageId => {
        let changeDirection
        if (imageId > activeImageIndex) {
            changeDirection = 1
        } else if (imageId < activeImageIndex) {
            changeDirection = -1
        }
        setImageCount([imageId, changeDirection])
    }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="flex flex-col items-center my-6">
                <div className="relative h-140 w-240 overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={imageCount}
                            custom={direction}
                            variants={sliderVariants}
                            initial="incoming"
                            animate="active"
                            exit="exit"
                            transition={sliderTransition}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                            className="absolute h-full w-full flex flex-row hover:cursor-grab active:cursor-grabbing"
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
                                }}
                                className="bg-contain bg-center bg-no-repeat h-full w-1/2"
                            />
                            <div className="h-full w-1/2 flex flex-col justify-center items-center p-6">
                                <h2 className="text-2xl lg:text-4xl py-6">
                                    {IMAGES[activeImageIndex].name}
                                </h2>
                                <p className="lg:text-2xl">
                                    {IMAGES[activeImageIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex justify-center gap-4">
                <button className="py-3 px-4 text-8xl" onClick={() => swipeToImage(-1)}>
                    <svg
                        width={50}
                        height={50}
                        viewBox="-5 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer transform transition-transform transition-filter duration-300 ease-in-out hover:scale-125"
                    >
                        <path
                            d="M21.531 19.156v-6.719c0-.813-.594-1.406-1.406-1.406h-7.813V5.718c0-.5-.25-.844-.688-1.063-.156-.031-.313-.063-.438-.063-.313 0-.563.094-.75.313L.311 15.03c-.438.375-.406 1.125 0 1.563l10.125 10.125c.625.688 1.875.219 1.875-.813V20.53h7.813c.813 0 1.406-.563 1.406-1.375z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                {IMAGES.map(image => (
                <div
                    key={image.id}
                    onClick={() => skipToImage(image.id)}
                    className="relative w-25 h-30"
                >
                    <img src={image.imageSrc} alt={image.name} className="w-full h-full object-cover object-center" />
                    <div
                    className={`absolute bottom-0 left-0 w-full h-full pointer-events-none ${
                        image.id === activeImageIndex ? "border-3 border-red-800" : null
                    }`}
                    />
                </div>
                ))}
                <button className="py-3 px-4 text-8xl" onClick={() => swipeToImage(1)}>
                    <svg
                        width={50}
                        height={50}
                        viewBox="-5 0 32 32"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer transform rotate-180 transition-transform transition-filter duration-300 ease-in-out hover:scale-125"
                    >
                        <path
                            d="M21.531 19.156v-6.719c0-.813-.594-1.406-1.406-1.406h-7.813V5.718c0-.5-.25-.844-.688-1.063-.156-.031-.313-.063-.438-.063-.313 0-.563.094-.75.313L.311 15.03c-.438.375-.406 1.125 0 1.563l10.125 10.125c.625.688 1.875.219 1.875-.813V20.53h7.813c.813 0 1.406-.563 1.406-1.375z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default MemberCarousel