import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import './Slider.css';

const Slider = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDone, setSlideDone] = useState(true);
    const [timeID, setTimeID] = useState(null);

    useEffect(() => {
        if (slideDone) {
            setSlideDone(false);
            const timerID = setTimeout(() => {
                slideNext();
                setSlideDone(true);
            }, 5000);
            setTimeID(timerID);
        }

        return () => {
            if (timeID) {
                clearTimeout(timeID);
            }
        };
    }, [slideDone]);

    const slideNext = () => {
        setActiveIndex((val) => (val >= children.length - 1 ? 0 : val + 1));
    };

    const slidePrev = () => {
        setActiveIndex((val) => (val <= 0 ? children.length - 1 : val - 1));
    };

    const AutoPlayStop = () => {
        if (timeID) {
            clearTimeout(timeID);
            setSlideDone(false);
        }
    };

    const AutoPlayStart = () => {
        if (!slideDone) {
            setSlideDone(true);
        }
    };

    return (
        <div className="container__slider" onMouseEnter={AutoPlayStop} onMouseLeave={AutoPlayStart}>
            {children.map((item, index) => (
                <div
                    className={`slider__item ${activeIndex === index ? 'slider__item-active' : ''}`}
                    key={index}
                >
                    {item}
                </div>
            ))}

            <div className="container__slider__links">
                {children.map((item, index) => (
                    <button
                        key={index}
                        className={activeIndex === index
                            ? "container__slider__links-small container__slider__links-small-active"
                            : "container__slider__links-small"
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveIndex(index);
                        }}
                    ></button>
                ))}
            </div>

            <button className="slider__btn-next" onClick={(e) => {
                    e.preventDefault();
                    slideNext();
                }}
            >{">"} </button>
            <button
                className="slider__btn-prev"
                onClick={(e) => {
                    e.preventDefault();
                    slidePrev();
                }}
            > {"<"} </button>
        </div>
    );
};

Slider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Slider;
