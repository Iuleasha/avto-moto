import slide1 from './img/slide_1.jpg';
import slide2 from './img/slide_2.jpg';
import slide3 from './img/slide_3.jpg';
import '../../visually-hidden/visually-hidden.scss';
import './slider.scss';
import Arrow from './arrow/arrow';
import {useCallback, useMemo, useState} from 'react';

function Slider() {
    const images = useMemo(() => [slide1, slide2, slide3], []);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleIncreaseActiveSlideClick = useCallback((evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if (activeSlide === images.length - 1) {
            return;
        }

        setActiveSlide(activeSlide + 1);
    }, [setActiveSlide, activeSlide, images]);

    const handleDecreaseActiveSlideClick = useCallback((evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        if (activeSlide === 0) {
            return;
        }

        setActiveSlide(activeSlide - 1);
    }, [setActiveSlide, activeSlide, images]);

    return (
        <>
            <div className="slider">
                <div className="slider__wrapper">
                    <div className="slider__active">
                        <span className="slider__status">New model</span>
                        <img
                            src={images[activeSlide]}
                            className="slider__image"
                            alt="Изображение автомобиля"
                            width="600"
                            height="375"/>
                    </div>
                    <div className="slider__images">
                        <Arrow disabled={activeSlide === 0}
                               handleClick={handleDecreaseActiveSlideClick}/>
                        {images.map((item, index) => <div
                            className={index === activeSlide ? 'slider__thumbnails--active' : ''}>
                            <img src={item}
                                 className="slider__image"
                                 alt="Изображение автомобиля"
                                 width="128"
                                 height="80"/>
                        </div>)}

                        <div className="slider__right-arrow"><Arrow disabled={activeSlide === images.length - 1}
                                                                    handleClick={handleIncreaseActiveSlideClick}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;
