import React from "react";
import "./Home.css";
import Product from "./Product";
import "./Product.css"

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://i1.wp.com/gtr24h.org/wp-content/uploads/Amazon-Prime-Video.jpg"
        alt=""
      />
      {/* product: id,title,price,rating,image */}
      {/* product functional component */}
      <div className="home__row">
        <div className="item1">
        <Product
          id="123421"
          title="Moroccanoil Hydrating Conditioner"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/31saK4b6JaL.jpg"
        />
        </div>
        <div className="item2">
        <Product
          id="123422"
          title="Shop activity trackers and smartwatches"
          price={15.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg"
        />
        </div>
        <div className="item3">
        <Product
          id="123423"
          title="(Renewed) Apple iPad Air 2 9.7-Inch, 32GB Tablet (Space Gray)"
          price={220.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/61oVLSb3M2L._AC_UL640_FMwebp_QL65_.jpg"
        />
        </div>
        
        <div className="item5">
        <Product
          id="123425"
          title="Convertible Garment Bag with Shoulder Strap, Modoker Carry on Garment Duffel Bag for Men Women - 2 in 1 Hanging Suitcase Suit Travel Bags"
          price={51.9}
          rating={5}
          image="https://m.media-amazon.com/images/I/71GjScIuwmL._AC_UL640_FMwebp_QL65_.jpghttps://m.media-amazon.com/images/I/31saK4b6JaL.jpg"
        />
        </div>
        <div className="item6">
        <Product
          id="123426"
          title="Bluetooth Headphones Over Ear, pollini Wireless Headset V5.0 with Deep Bass, Soft Memory-Protein Earmuffs and Built-in Mic for iPhone/Android Cell Phone/PC/TV (Black) Hydrating Conditioner"
          price={27.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/71nMNJyu8BL._AC_UY436_FMwebp_QL65_.jpg://m.media-amazon.com/images/I/31saK4b6JaL.jpg"
        />
        </div>
        <div className="item7">
        <Product
          id="123427"
          title="Damyuan Men's Sport Gym Running Shoes Walking Shoes Casual Lace Up LightweightMoroccanoil Hydrating Conditioner"
          price={28.49}
          rating={4}
          image="https://m.media-amazon.com/images/I/61BEvNmkQML._AC_UL640_FMwebp_QL65_.jpghttps://m.media-amazon.com/images/I/31saK4b6JaL.jpg"
        />
        </div>
        <div className="item8">
        <Product
          id="123428"
          title="The Storyteller: Tales of Life and Music"
          price={18.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/91I+w5MwdhS._AC_UL320_SR320,320_.jpghttps://m.media-amazon.com/images/I/31saK4b6JaL.jpg"
        />
        </div>
        </div>
        
      </div>
  
  );
}

export default Home;
