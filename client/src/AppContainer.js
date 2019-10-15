import { ParallaxProvider } from 'react-scroll-parallax';
import React, { Component } from 'react';
import App from './App'

class AppContainer extends Component {
    state = {  }
    render() { 
        return ( 
        <ParallaxProvider>
            <App />
        </ParallaxProvider> 
        );
    }
}
 
export default AppContainer;
