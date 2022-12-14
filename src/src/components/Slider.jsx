import React, { useEffect, useState } from 'react';
import PostService from '../APi/PostService';
import { useFetching } from '../hooks/useFetching';
import "react-responsive-carousel/lib/styles/carousel.min.css";

var Carousel = require('react-responsive-carousel').Carousel;

const Slider = () => {
    const [postData, setPostData] = useState();
    const [status, /*setStatus*/] = useState('available');

    const [fetchPosts] = useFetching(async () => {
        const response = await PostService.getAll(status);
        setPostData(response.data);
    });

    useEffect(() => {
        fetchPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);

    return (
        <Carousel autoPlay showIndicators={false} showArrows={true} >
            {postData !== undefined && postData.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.photoUrls} alt={item.name} />
                    </div>
                )
            })}
        </Carousel>
    );
}

export default Slider;