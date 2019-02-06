import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Footer from './footer';
import PageBody from './pageBody';

class Layout extends Component{
    render() {
        return(
            <div>
                <Header />
                <PageBody />
                <Footer />
            </div>
        );        
    }
}

export default Layout;