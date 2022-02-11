import React, { useEffect, useState } from 'react';
import BannerImg from './BannerImg';


const Banner = () => {
    const [img, setImg] = useState([]);

    useEffect(() => {
        fetch('/HomeBannerImg.js')
            .then(res => res.json())
            .then(data => setImg(data))
    }, [])

    return (
        <div className='container'>
            {
                img.map(img => <BannerImg
                key={img.id}
                imgs={img}
                ></BannerImg>)
            }
        </div>
    );
};

export default Banner;