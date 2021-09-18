import React, { Component } from 'react';
import MenuComponent from '../components/introPageComponents/MenuComponent';
import SlideComponent from '../components/introPageComponents/SlideComponent';
import '../style/styleIntro/Intro.css'
import IntroComponent from '../components/introPageComponents/IntroComponent';
import FeatureComponent from '../components/introPageComponents/FeatureComponent';
import SubsystemComponent from '../components/introPageComponents/SubsystemComponent';
import ApproveComponent from '../components/introPageComponents/ApproveComponent';
import MantainComponent from '../components/introPageComponents/MantainComponent';
import ListTablePriceComponent from '../components/introPageComponents/ListTablePriceComponent';

class Header extends Component {

    render() {
        return (
            <div id="#introPage">
                <MenuComponent />
                <SlideComponent />
                <IntroComponent />
                <FeatureComponent />
                <SubsystemComponent />
                <ApproveComponent />
                <MantainComponent />
                 <ListTablePriceComponent/>     
            </div>
        );
    }
}

export default Header