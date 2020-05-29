import React, { Component } from 'react';
import RestaurantCard from '../component/resturantCard/RestaurantCard';
import Header from '../component/header/header';
import './homePage.scss';
import FilterImage from '../assets/images/Slice 3.svg';
import Ellipse from '../assets/images/Ellipse 2.svg'


class homePage extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className='container'>
                    <div class='container-nav'>
                        <div className='filter'>
                             <img src={FilterImage} alt='filter' className='filter-img' />
                             <h3 className='option-one'>Filter</h3>
                             <img src={Ellipse} alt='filter' className='filter-ellipse-2' />
                        </div>
                        <h3 className='option-two'>Cuisine</h3>
                        <h3 className='option-three'>Capacity</h3>
                        <h3 className='option-four'>Price</h3>
                        <h3 className='option-five'>Distance</h3>
                    </div>
                    <div>
                        <h1 className='container-heading'>Restaurnts</h1>
                        <RestaurantCard/>
                    </div>
                </div>
			</div>
		);
	}
}

export default homePage;
