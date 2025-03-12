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
            imageSrc: 'images/liikmed/Agur_portree.jpg',
            name: 'Agur',
            description: "Agur is a member of the team.",
        },
        {
            id: 1,
            imageSrc: "images/liikmed/Albert_portree_for_real.jpg",
            name: 'Albert',
            description: "Albert is a member of the team.",
        },
        {
            id: 2,
            imageSrc: "images/liikmed/Hanno_portree.jpg",
            name: 'Hanno',
            description: "Hanno is a member of the team.",
        },
        {
            id: 3,
            imageSrc: "images/liikmed/Mart_portree.jpg",
            name: 'Mart',
            description: "Mart is a member of the team.",
        },
        {
            id: 4,
            imageSrc: "images/Silver Lokk-Heli.jfif",
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
                <div className="relative h-[400px] w-[350px] overflow-hidden">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={imageCount}
                            style={{
                                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
                            }}
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
                            className="absolute h-full w-full bg-cover bg-center bg-no-repeat hover:cursor-grab active:cursor-grabbing"
                        />
                    </AnimatePresence>
                </div>

                <div className="mt-3">
                    <button className="py-3 px-4" onClick={() => swipeToImage(-1)}>PREV</button>
                    <button className="py-3 px-4" onClick={() => swipeToImage(1)}>NEXT</button>
                </div>
            </div>

            <div className="flex justify-center">
                {IMAGES.map(image => (
                <div
                    key={image.id}
                    onClick={() => skipToImage(image.id)}
                    className="relative w-[90px] h-[120px]"
                >
                    <img src={image.imageSrc} alt={image.name} className="w-full h-full object-cover object-center" />
                    <div
                    className={`absolute bottom-0 left-0 w-full h-full pointer-events-none ${
                        image.id === activeImageIndex ? "bg-gray" : null
                    }`}
                    />
                </div>
                ))}
            </div>
        </div>
    )
}
export default MemberCarousel