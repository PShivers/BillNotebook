import { Parallax } from 'react-scroll-parallax';
import React from 'react';
 
const ParallaxImage = () => (
    <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
        <iherokmg src='https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80' />
    </Parallax>
);

export default ParallaxImage;