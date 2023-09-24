import { useState } from "react";
import './index.css';

const LazyImage = (props) => {
  const [isRender, setRender] = useState(false);

  const setObserver = (node) => {
    let observer;

    if (!node) {
      observer && observer.disconnect();
      return;
    }

    const loadImage = () => {
      const img = new window.Image();

      img.onload = () => {
        setRender(true);
        observer && observer.disconnect();
      };

      img.src = props.src;
    };

    observer = new IntersectionObserver(
      (res) => {
        res.forEach((current) => {
          if (current.isIntersecting === undefined) {
            if (current.intersectionRatio > 0.000001) {
              loadImage();
            }
          } else {
            if (current.isIntersecting) {
              loadImage();
            }
          }
        });
      },
      {
        threshold: [0.000001],
      },
    );

    observer.observe(node);
  };

  return (
    <div
      ref={(node) => setObserver(node)}
      className={`lazy-img-wrapper ${props.className}`}
      onClick={e => {
        if (props.onClick) {
          props.onClick(e);
        }
      }}
    >
      {isRender ? (
        <img alt="img" src={props.src} className='lazy-img' />
      ) : (
        <div className='lazy-placeholder'></div>
      )}
    </div>
  );
};

export default LazyImage;
