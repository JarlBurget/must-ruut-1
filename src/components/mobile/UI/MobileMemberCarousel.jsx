import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { wrap } from '../../../utils/wrap';
import { useAppContext } from '../../../context/AppContext';

const MobileMemberCarousel = () => {
    const { app } = useAppContext();

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

    const IMAGES = app.members;

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
            <div className="flex flex-col items-center my-4">
                <div className="relative h-120 w-screen overflow-hidden">
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
                            className="absolute h-full w-full flex flex-col hover:cursor-grab active:cursor-grabbing"
                        >
                            <div
                                style={{
                                    backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
                                }}
                                className="bg-contain bg-center bg-no-repeat h-full w-full"
                            />
                            <div className="w-full flex flex-col justify-center items-center p-4">
                                <h2 className="text-3xl py-6">
                                    {IMAGES[activeImageIndex].name}
                                </h2>
                                <p className="text-xl">
                                    {IMAGES[activeImageIndex].description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
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
            </div>
        </div>
    )
}
export default MobileMemberCarousel