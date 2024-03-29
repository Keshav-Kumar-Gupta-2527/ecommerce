import React from 'react'

import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Redmi 80 cm (32 inches) HD Ready Smart LED TV "
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71f-TfffHfL._AC_UL320_.jpg"
          />
        </div>
        <div className='home__row'>
              <Product
            id="908293354"
            title="Handmade Women's Dress "
            price={44.35}
            rating={4}
            image="https://m.media-amazon.com/images/I/71w25zuBtgL._AC_UL320_.jpg"
          />  
          <Product
            id="908293355"
            title="Women's Cotton A-Line Kurta "
            price={38}
            rating={4}
            image="https://m.media-amazon.com/images/I/71-i0TRRizL._AC_UL320_.jpg"
          />  
          <Product
            id="908293356"
            title="Women's Bhagalpuri Linen Saree With Unstitched Blous"
            price={49.5}
            rating={3}
            image="https://m.media-amazon.com/images/I/71DLhI+syxL._AC_UL320_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        

      </div>
    </div>
    )
}

export default Home
