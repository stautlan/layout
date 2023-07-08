import React from 'react'

const Sliders = () => {
    const slides = [
        {
            img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
            text: 'Caption Text 1'
        },
        {
            img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
            text: 'Caption Text 2'
        },
        {
            img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
            text: 'Caption Text 3'
        },
    ];

  return (
    <div>
        <Slider
        slides={slides}
        loop={true}
        navs={true}
        pags={true} 
        auto={true} 
        stopMouseHover={true}
        delay={3} 
    />
    </div>
  )
}

export default Sliders