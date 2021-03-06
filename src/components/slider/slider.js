import slide1 from './img/slide_1.jpg';
import slide2 from './img/slide_2.jpg';
import slide3 from './img/slide_3.jpg';
import '../../visually-hidden/visually-hidden.scss';
import './slider.scss';
import Arrow from './arrow/arrow';
import { useCallback, useMemo, useState } from 'react';

function Slider() {
    const images = useMemo(() => [slide1, slide2, slide3], []);
    const [activeSlide, setActiveSlide] = useState(0);

    const onIncreaseActiveSlideClick = useCallback(
        (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            if (activeSlide === images.length - 1) {
                return;
            }

            setActiveSlide(activeSlide + 1);
        },
        [setActiveSlide, activeSlide, images]
    );

    const onDecreaseActiveSlideClick = useCallback(
        (evt) => {
            evt.preventDefault();
            evt.stopPropagation();

            if (activeSlide === 0) {
                return;
            }

            setActiveSlide(activeSlide - 1);
        },
        [setActiveSlide, activeSlide]
    );

    return (
        <>
            <div className="slider">
                <div className="slider__active">
                    <span className="slider__status">New model</span>
                    <img
                        src={images[activeSlide]}
                        className="slider__image slider__image--active"
                        alt="Изображение автомобиля"
                        width="600"
                        height="375"
                    />
                </div>
                <div className="slider__images">
                    <Arrow
                        disabled={activeSlide === 0}
                        onArrowClickEvent={onDecreaseActiveSlideClick}
                    />
                    {images.map((item, index) => (
                        <div
                            className={`slider__thumbnails ${
                                index === activeSlide
                                    ? 'slider__thumbnails--active'
                                    : ''
                            }`}
                            onClick={() => setActiveSlide(index)}
                            key={item}
                        >
                            <img
                                src={item}
                                className="slider__image"
                                alt="Изображение автомобиля"
                                width="128"
                                height="80"
                            />
                        </div>
                    ))}

                    <div className="slider__right-arrow">
                        <Arrow
                            disabled={activeSlide === images.length - 1}
                            onArrowClickEvent={onIncreaseActiveSlideClick}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;
