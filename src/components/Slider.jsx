// import React, { useRef, useEffect, useCallback, useState } from 'react';
// import PostService from '../APi/PostService';
// import { useFetching } from '../hooks/useFetching';

// const Slider = () => {

//     const [postData, setPostData] = useState();
//   const [modal, setModal] = useState(false);
//   const [status, setStatus] = useState('available');

//   const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
//     const response = await PostService.getAll(status);
//     setPostData(response.data);
//   });

//   useEffect(() => {
//     fetchPosts();
//   }, [status]);

//   console.log(postData, 'postData');
//     const colors = ["#0088FE", "#00C49F", "#FFBB28"];
//     const delay = 6000;
//     const [index, setIndex] = React.useState(0);
//     const timeoutRef = React.useRef(null);

//     function resetTimeout() {
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     }

//     useEffect(() => {
//       resetTimeout();
//       timeoutRef.current = setTimeout(
//         () =>
//           setIndex((prevIndex) =>
//             prevIndex === colors.length - 1 ? 0 : prevIndex + 1
//           ),
//         delay
//       );

//       return () => {
//         resetTimeout();
//       };
//     }, [index]);

//     return (
//       <div className="slideshow">
//         <div
//           className="slideshowSlider"
//           style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//         >
//           {colors.map((backgroundColor, index) => (
//             <div
//               className="slide"
//               key={index}
//               style={{ backgroundColor }}
//             ></div>
//           ))}
//         </div>

//         <div className="slideshowDots">
//           {colors.map((_, idx) => (
//             <div
//               key={idx}
//               className={`slideshowDot${index === idx ? " active" : ""}`}
//               onClick={() => {
//                 setIndex(idx);
//               }}
//             ></div>
//           ))}
//         </div>
//       </div>
//     );
//   }

// export default Slider;

import React, { useRef, useEffect, useCallback, useState } from 'react';
import PostService from '../APi/PostService';
import { useFetching } from '../hooks/useFetching';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
var Carousel = require('react-responsive-carousel').Carousel;

const Slider = () => {

    const [postData, setPostData] = useState();
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('available');

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(status);
        setPostData(response.data);
    });

    useEffect(() => {
        fetchPosts();
    }, [status]);

    console.log(postData, 'postData');


    return (
        <Carousel autoPlay showIndicators={false} showArrows={true} >
            {postData !== undefined && postData.map((item, index) => {
                return (
                    // item?.photoUrls?.find((url) => url?.startsWith('http') && url !== 'string') &&
                    <div key={index}>
                        <strong>{item.name}</strong>
                        <img style={{ height: '100px', width: '100px', filter: 'blur(1px)' }} src={item.photoUrls} alt={item.photoUrls} />
                    </div>
                )
            })}
            {/* <div>
                <img src="assets/1.jpeg" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="assets/2.jpeg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="assets/3.jpeg" />
                <p className="legend">Legend 3</p>
            </div> */}
        </Carousel>
    );
}

export default Slider;