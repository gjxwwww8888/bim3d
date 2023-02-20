import React from 'react'
import Footer from './footer/HomeFooter';
import HeaderBox from './header/HomeHeader';
import ListBox from './listbox/HomeListBox';
import MainBox from './mainbox/HomeMainBox';

const Home: React.FC = () => {
    return (
        <>
            <HeaderBox />
            <MainBox />
            <ListBox />
            <Footer />
        </>
    )
}

export default Home;