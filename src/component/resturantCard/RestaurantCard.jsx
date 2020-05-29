import React from 'react';
import './RestaurantCard.scss';
import {Link} from "react-router-dom";

const RestaurantCard = () => {

    return (
        <>
            <section className="Rectangle-10">
                <div className="Vector-3 Slice-4"></div>
                <div className="restaurant-card-info__container">
                    <h3 className="restaurant-card__name">Rosa</h3>
                    <p className="Longtime-eatery-offering-upscale-Italian-dishes-h">Longtime eatery offering upscale Italian dishes, handmade pastas & choice wines in a warm room.</p>
                    <div className="restaurant-card__button-container">
                        <button className="Rectangle-14"><span className="menu">Menu</span></button>
                        <Link to={'/secondpage'}><button className="Rectangle-15"><span className="Book">Book</span></button></Link>
                    </div>
                </div>

            </section>

            <section className="Rectangle-10 color--grey">
                <div className="Vector-3 Slice-5"></div>
                <div className="restaurant-card-info__container">
                    <h3 className="restaurant-card__name">The Trinity</h3>
                    <p className="Longtime-eatery-offering-upscale-Italian-dishes-h">Fine dining restaurant serving classic French cuisine.</p>
                    <div className="restaurant-card__button-container">
                        <button className="Rectangle-14"><span className="menu">Menu</span></button>
                        <Link to={'/secondpage'}><button className="Rectangle-15"><span className="Book">Book</span></button></Link>
                    </div>
                </div>

            </section>

            <section className="Rectangle-10">
                <div className="Vector-3 Slice-7"></div>
                <div className="restaurant-card-info__container">
                    <h3 className="restaurant-card__name">Grey Gardens</h3>
                    <p className="Longtime-eatery-offering-upscale-Italian-dishes-h">Classic bistro dishes. Also serving a wide selection and variety of wines.</p>
                    <div className="restaurant-card__button-container">
                        <button className="Rectangle-14"><span className="menu">Menu</span></button>
                        <Link to={'/secondpage'}><button className="Rectangle-15"><span className="Book">Book</span></button></Link>
                    </div>
                </div>

            </section>
            
        </>

    )

};

export default RestaurantCard