
import React, { useState } from 'react';
import { Link } from "react-scroll";



import Logo from './Components/assets/Logo.jpg';
import Purity from './Components/assets/Purity.jpg';
import Trust from './Components/assets/Trust.jpg';
import Bghee from './Components/assets/Bghee.jpg';
import Sghee from './Components/assets/Sghee.jpg';
import Legacy from './Components/assets/Legacy.jpg';
import Cowghee from './Components/assets/Cowghee.jpg';
import Flower from './Components/assets/Flower.png'; 
import Bbox from './Components/assets/Bbox.jpg'; 
import A2 from './Components/assets/A2.jpg';
import Category from './Components/assets/Category.jpg'; 
import Rflower from './Components/assets/Rflower.png';
import Bowl from './Components/assets/Bowl.jpg';
import Naturally from './Components/assets/Naturally.jpg';
import Enhance from './Components/assets/Enhance.jpg';
import Handbowl from './Components/assets/Handbowl.jpg';
import Box from './Components/assets/Box.jpg';
import Magical1 from './Components/assets/Magical1.jpg';
import Magical2 from './Components/assets/Magical2.jpg';
import Magical3 from './Components/assets/Magical3.jpg';
import Bflower from './Components/assets/Bflower.png';
import Cow from "E:/Ghee/Gopal/gopal-app/src/Components/assets/Cow.jpg";
import Gheeslider from "E:/Ghee/Gopal/gopal-app/src/Components/assets/Gheeslider.jpg";
import Cowlove from "E:/Ghee/Gopal/gopal-app/src/Components/assets/Cowlove.jpg";
import Packghee from './Components/assets/Packghee.jpg';
import Girl from './Components/assets/Girl.jpg';
import Twocow from './Components/assets/Twocow.PNG';
import FooterLogo from "./Components/assets/Footerlogo.png"; 
import Secondbox from './Components/assets/Secondbox.jpg';
import Whatsapplogo from './Components/assets/Whatsapplogo.png';
import FAQSection from './FAQSection';
import Footer from "./Components/Footer";  
import { FaWhatsapp } from "react-icons/fa";




  function App() {

    
    const sliderImages = [Gheeslider,Cow,Cowlove,Twocow];

    const extendedImages = Array(2)
    .fill(sliderImages)
    .flat();
    
  
    

    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);

    const handleClick1 = () => setShowText1(!showText1);
  const handleClick2 = () => setShowText2(!showText2);
  const handleClick3 = () => setShowText3(!showText3);

  
    
    
  return (
    
    <div>

<div className="fixed bottom-4 right-4 z-50">
        <a
          href="https://api.whatsapp.com/send/?phone=9669105055&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Whatsapplogo}
            alt="WhatsApp Logo"
            className="w-17 h-17 sm:w-17 sm:h-14 hover:scale-105 transition-transform mt-40"
          />
        </a>
      </div>


      
      <div className="w-full h-16 bg-[#81452E] flex items-center justify-center border-b" style={{ borderColor: '#000000' }}>
      <p
  className="text-white text-center font-['Tenor Sans'] text-[20px] font-normal"
  style={{ width: "389px", height: "24px" }}
>
  Free NationWide Delivery on All Orders
</p>

</div>

<div className="w-full h-20 bg-[#ECE5DF] flex items-center justify-center border-b" style={{ borderColor: '#000000' }}>
      <div className="flex flex-wrap justify-between px-4 sm:px-10 space-x-8 sm:space-x-16">
        <Link to="about" smooth={true} duration={500}>
          <button className="text-[#000000] text-[20px] font-normal hover:text-black">
            About
          </button>
        </Link>
        <Link to="health" smooth={true} duration={500}>
          <button className="text-[#000000] text-[20px] font-['Lato'] font-normal hover:text-black">
            Health Benefits
          </button>
        </Link>
        <Link to="shop" smooth={true} duration={500}>
          <button className="text-[#000000] text-[20px] font-['Lato'] font-normal hover:text-black">
            Shop
          </button>
        </Link>
        <Link to="faqs" smooth={true} duration={500}>
          <button className="text-[#000000] text-[20px] font-['Lato'] font-normal hover:text-black">
            FAQs
          </button>
        </Link>
        <Link to="blog" smooth={true} duration={500}>
          <button className="text-[#000000] text-[20px] font-['Lato'] font-normal hover:text-black">
            Blog
          </button>
        </Link>
      </div>
    </div>


      
    

      {/* First Row */}
      <div className="flex justify-center items-center mt-8 space-x-6 sm:space-x-12">
        <div className="flex-shrink-0">
          <img
            src={Purity}
            alt="Purity"
            className="w-[400px] h-[50px] mr-6 sm:mr-12"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={Logo}
            alt="Logo"
            className="w-[180px] h-[180px] mx-6 sm:mx-12"
          />
        </div>
        <div className="flex-shrink-0">
          <img
            src={Trust}
            alt="Trust"
            className="w-[400px] h-[50px] ml-6 sm:ml-12"
          />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center items-center mt-8 sm:mt-12 px-4 space-x-4 sm:space-x-8">
        <div className="flex justify-center mb-6 sm:mb-0">
          <img
            src={Bghee}
            alt="Bghee"
            className="w-[950px] h-[534px] rounded-2xl opacity-100"
          />
        </div>
        <div className="flex flex-col sm:items-start items-center">
          <div className="mb-4 sm:mb-6">
            <img
              src={Sghee}
              alt="Sghee"
              className="w-[260px] h-[255px] rounded-2xl opacity-100"
            />
          </div>
          <div>
            <img
              src={Legacy}
              alt="Legacy"
              className="w-[260px] h-[255px] rounded-2xl opacity-100"
            />
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="flex justify-center items-center mt-8 sm:mt-12 px-4 space-x-4 sm:space-x-8">
        <div className="flex justify-center mb-6 sm:mb-12">
          <img
            src={Cowghee}
            alt="Cowghee"
            className="w-[1250px] h-[362px] rounded-2xl opacity-100"
          />
        </div>
      </div>
        
      <div className="w-full h-[648px] bg-[#ECE5DF] flex justify-center items-center mt-0 px-4 sm:px-10">
  <div className="flex w-full sm:w-[1440px] justify-between items-center space-x-8">
    <div className="text-left sm:w-1/2">
      <h1 className="text-[#81452E] text-3xl sm:text-5xl font-bold mb-12 leading-loose">
        <span className="mr-2">Why Our Ghee is the </span>
        <span>Best Vedic and Traditional Method?</span>
      </h1>
      <p className="text-[#81452E] text-[24px] font-regular font-[Tenor Sans] sm:text-2xl">
        At Gopal Gir Farm, our mission is clear, to deliver the nourishing
        essence of Vedic Bilona Ghee to every Indian home. We're dedicated
        to promoting health and wellness nationwide, empowering
        individuals to make healthier choices and embrace a lifestyle
        rooted in tradition and vitality. Join us in creating a healthier,
        happier India, one household at a time.
      </p>
    </div>
  
          <div className="sm:w-1/2 flex justify-center">
            <img
              src={Flower}
              alt="Flower"
              className="w-[500px] h-[500px] rounded-2xl opacity-100"
            />
          </div>
        </div>
      </div>

    
      <div
        className="w-full h-[100px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Bbox})` }}
      >
        <div className="flex justify-center items-center h-full">
         
        </div>
      </div>
      <div  id="shop" className="w-full bg-[white] py-16 flex flex-col items-center">
      <h2
        className="text-[#81452E] text-center font-semibold text-[32px] sm:text-[60px]"
        style={{ fontFamily: "Noto Serif HK", width: "287px", height: "92px" }}
      >
        Product
      </h2>
      <div className="flex flex-wrap justify-center mt-8 gap-6 sm:gap-12 bg-white">
        {/* Image */}
        <img
          src={A2}
          alt="A2"
          className="w-[280px] sm:w-[560px] h-[316px] sm:h-[631px] rounded-lg"
        />

        {/* Product Details */}
        <div className="w-[317px] sm:w-[634px] h-[316px] sm:h-[631px] relative bg-transparent border-2 border-[#D05E2D] rounded-lg">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-auto no-scrollbar p-4">
            <div className="space-y-6">
              <h3 className="text-[#81452E] text-[32px] font-regular font-[Lato] text-left">
                Vedic A2 Gir Cow Ghee (Made With Bilona Methods)
              </h3>

              <p className="text-[#D05E2D] text-[32px] font-regular font-[Tenor Sans] text-left">
                2,400.00
              </p>

              <p className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                Indulge in the rich, wholesome goodness of Gir Cow Ghee, a pure
                and authentic dairy product crafted with utmost care and
                precision. Sourced from the revered Gir cows, known for their
                A2 milk, our ghee stands as a testament to traditional methods
                and superior quality.
              </p>

              <p className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                Category: <span className="text-[#D05E2D]">Pure Ghee</span>
              </p>

              <p className="text-[#D05E2D] text-[18px] font-regular font-[Tenor Sans]">
                26 in stock
              </p>

              {/* Buy Now Button */}
              <button
                className="bg-[#D05E2D] text-white text-[18px] font-semibold w-[200px] h-[48px] mt-4"
                onClick={() =>
                  window.open(
                    "https://wa.me/919111955011?text=Hi, I'm interested in Vedic A2 Gir Cow Ghee.",
                    "_blank"
                  )
                }
              >
                Buy Now
              </button>

              {/* Description */}
              <h4 className="text-[#81452E] text-[24px] font-semibold font-[Tenor Sans]">
                Description
              </h4>

              <h3 className="text-[#81452E] text-[28px] font-semibold font-[Tenor Sans]">
                Gir Cow Ghee Pure, Authentic, and Nutrient-Rich
              </h3>

              <h3 className="text-[#81452E] text-[22px] font-semibold font-[Tenor Sans]">
                Discover the Essence of Traditional Goodness
              </h3>

              <h3 className="text-[#81452E] text-[24px] font-semibold font-[Tenor Sans]">
                Key Features:
              </h3>
              <ul className="space-y-4 list-inside list-disc pl-5">
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Pure and Natural: Made from 100% pure Gir cow milk, our ghee
                  is free from additives, preservatives, and artificial flavors,
                  ensuring you get the best of nature's bounty.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Rich in Nutrients: Packed with essential vitamins (A, D, E,
                  and K) and Omega-3 fatty acids, Gir Cow Ghee supports overall
                  health and well-being.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Traditional Method: Our ghee is prepared using the traditional
                  Bilona method, which involves churning curd and then boiling
                  butter, retaining its natural flavor and nutritional value.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  A2 Protein: Gir cows produce A2 milk, which is easier to
                  digest and may be suitable for those with lactose intolerance
                  or milk allergies.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Versatile Use: Perfect for cooking, frying, sautéing, or
                  simply as a spread, Gir Cow Ghee enhances the taste and
                  nutrition of your meals.
                </li>
              </ul>

              <h3 className="text-[#81452E] text-[24px] font-semibold font-[Tenor Sans]">
                Health Benefits:
              </h3>
              <ul className="space-y-4 list-inside list-disc pl-5">
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Boosts Immunity: Rich in antioxidants and essential vitamins,
                  it helps in strengthening the immune system.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Promotes Digestion: Known for its easy digestibility, it aids
                  in better digestion and absorption of nutrients.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Enhances Skin Health: Regular consumption or topical
                  application can lead to healthier, glowing skin.
                </li>
                <li className="text-[#81452E] text-[20px] font-regular font-[Tenor Sans]">
                  Supports Heart Health: Contains healthy fats that are
                  beneficial for maintaining heart health.
                </li>
              </ul>

              <h4 className="text-[#81452E] text-[24px] font-semibold font-[Tenor Sans]">
                Why choose our Gir Cow Ghee?
              </h4>
              <p className="text-[#81452E] text-[18px] font-regular font-[Tenor Sans]">
                At GOPAL GIR FARMS, we are committed to delivering the finest
                quality products. Our Gir Cow Ghee is a blend of tradition and
                purity, ensuring that you receive the best taste and health
                benefits in every spoonful. We prioritize the well-being of our
                cows and follow ethical practices, ensuring a sustainable and
                compassionate approach to dairy farming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

<div id="health" className="relative bg-[#ECE5DF] w-full h-[1490px]">
      {/* Background Image */}
      <img
        src={Rflower}
        alt="Rflower"
        className="absolute top-0 right-0 w-[655px] h-[1310px] object-cover"
      />

      {/* Grid Images */}
      <div className="absolute top-[85px] w-full flex justify-center mt-12">
        <div className="grid grid-cols-2 gap-8 sm:gap-3 ml-[-41.1%]">
          <img
            src={Bowl}
            alt="Bowl"
            className="w-[268px] h-[268px] object-cover rounded-xl"
          />
          <img
            src={Naturally}
            alt="Naturally"
            className="w-[268px] h-[268px] object-cover rounded-xl"
          />
          <img
            src={Enhance}
            alt="Enhance"
            className="w-[268px] h-[268px] object-cover rounded-xl"
          />
          <img
            src={Handbowl}
            alt="Handbowl"
            className="w-[268px] h-[268px] object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Text and Call to Action */}
      <div className="absolute top-[7%] left-[53%] p-4 sm:p-8 w-[400px] sm:w-[500px] mt-[0%]">
        <h2
          className="text-[#81452E] text-3xl sm:text-4xl lg:text-3xl font-bold mb-4 text-center"
          style={{ fontFamily: 'Noto Serif HK', lineHeight: '1.2' }}
        >
          Discover Health Benefits of Pure
          <br />
          <span className="block text-4xl sm:text-5xl lg:text-3xl font-bold mt-2">
            Gir Cow Ghee
          </span>
        </h2>
        <p
          className="text-[#81452E] text-lg sm:text-xl lg:text-1xl"
          style={{ fontFamily: 'Tenor Sans', lineHeight: '1.5' }}
        >
          Discover the nutritional wonders of Gir cow ghee, a time-honored
          superfood known for its numerous health benefits. From boosting
          immunity and improving digestion to enhancing skin health and
          providing essential vitamins, pure Gir cow ghee is a wholesome
          addition to your diet. Experience the richness of tradition and
          wellness with every spoonful.
        </p>

        <div className="mt-4 sm:mt-8 ml-12">
          <img
            src={Box}
            alt="Box"
            className="w-[292px] h-[48px] object-cover"
          />
        </div>
      </div>

        <div className="absolute top-[47%] left-[50%] transform -translate-x-1/2 px-4 sm:px-10 mt-12">
        <h2
  className="text-[#81452E] text-4xl sm:text-5xl lg:text-5xl font-bold text-center"
  style={{ fontFamily: "Noto Serif HK", lineHeight: "1.5" }}
>
  Magical Effects of
</h2>
<h1
  className="text-[#81452E] text-5xl sm:text-7xl lg:text-8xl font-bold mb-5 text-center"
  style={{ fontFamily: "Noto Serif HK" }}
>
  Gir Cow Ghee
</h1>
<p
  className="text-[#81452E] text-xl sm:text-2xl lg:text-2xl font-[Tenor Sans] text-center max-w-4xl mx-auto"
>
  Experience the transformative power of Gir cow ghee, renowned for
  <br />
  its unparalleled health benefits and rich, nourishing properties. This
  <br />
  ancient elixir supports overall wellness, making it a staple in holistic
  <br />
  health practices.
</p>



{/* Magical Effects Section */}
<div className="flex justify-center mt-10 ml-[-0%] space-x-6 sm:space-x-8">
  <div className="flex flex-col items-center">
    <div className="relative w-[372px] h-[318px]">
      <img
        src={Magical1}
        alt="Magical1"
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      {showText1 && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 p-4 text-[#81452E]">
          <div className="absolute top-[-10%] left-0 right-0">
            <h2 className="text-2xl font-bold mt-20 ml-1">Magical Effects of Gir Cow Ghee</h2>
            <p>
              Experience the transformative power of Gir cow ghee, renowned for its unparalleled health benefits and rich, nourishing properties.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="relative w-[372px] h-[318px]">
      <img
        src={Magical2}
        alt="Magical2"
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      {showText2 && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 p-4 text-[#81452E]">
          <div className="absolute top-[-10%] left-0 right-0">
            <h2 className="text-2xl font-bold mt-20 ml-1">Magical Effects of Gir Cow Ghee</h2>
            <p>
              Experience the transformative power of Gir cow ghee, renowned for its unparalleled health benefits and rich, nourishing properties.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>

  <div className="flex flex-col items-center">
    <div className="relative w-[372px] h-[318px]">
      <img
        src={Magical3}
        alt="Magical3"
        className="w-full h-full object-cover rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      {showText3 && (
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 p-4 text-[#81452E]">
          <div className="absolute top-[-10%] left-0 right-0">
            <h2 className="text-2xl font-bold mt-20 ml-1">Magical Effects of Gir Cow Ghee</h2>
            <p>
              Experience the transformative power of Gir cow ghee, renowned for its unparalleled health benefits and rich, nourishing properties.
            </p>
          </div>
        </div>
      )}
    </div>
  </div>
</div>
</div>
</div>

<div className="flex justify-center mt-0">
        <div className="relative w-full h-[100px]">
          <img
            src={Secondbox} 
            alt="Secondbox"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
  

<div className="relative w-full h-[1799px] z-0 bg-[#ECE5DF]">
      
      <img
        src={Bflower}
        alt="Bflower"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute top-20 left-60 z-10">
        <p className="text-6xl font-semibold font-[Noto Serif HK] text-[#81452E] leading-tight">
          Embrace the <br />Golden <br />Goodness
        </p>
      </div>

      
      <div className="flex justify-start items-start absolute top-[6%] right-[10%] z-10 max-w-3xl mr-4">
  <p className="text-xl font-regular text-[#81452E] font-[Tenor Sans] leading-relaxed">
    At Gopal Gi Farm, we uphold the highest standards of purity and excellence in every drop of our Gir cow ghee. Our commitment to quality ensures that you receive a product rich in tradition and unmatched in nutritional benefits. From sourcing to packaging, we prioritize hygiene and authenticity, guaranteeing a wholesome addition to your lifestyle.
  </p>
</div>






    
      <div className="flex justify-center items-center absolute top-[17%] left-[60%] z-10">
        <img
          src={Box}
          alt="Box"
          className="w-[252px] h-auto" 
        />
          </div>

        <div className=" flex justify-center items-center absolute top-[22%] left-[50%] transform -translate-x-1/2 z-10 w-full">
    <div className="flex space-x-6  overflow-x-auto no-scrollbar  px-4 snap-x snap-mandatory">
      {extendedImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slider Image ${index}`}
          className="w-[452px] h-[268px] object-cover rounded-xl"
        />
      ))}
    </div>
  </div>

  <div id="blog" className="absolute top-[40%] left-[52%] transform -translate-x-1/2 z-10">
  <div className="w-[241px] h-[138px] flex justify-center items-center bg-[#ECE5DF]">
    <p className="text-[110px] font-[Noto Serif HK] font-semibold text-[#81452E]">
      Blog
    </p>
  </div>
</div>


<div className="absolute top-[60%] left-[10%] transform -translate-y-1/2 z-10">
  <img
    src={Packghee}
    alt="Packghee"
    className="w-[417px] h-[360px] object-cover"
  />
</div>

<div className="absolute top-[60%] left-[63%] transform -translate-x-1/2 -translate-y-1/2 z-10 space-y-4">
  {/* Upper Container */}
  <div className="w-[900px] h-[172px] bg-[#FFFFFF] border-[2px] border-[#D05E2D] rounded-[8px] p-4">
    <h1 className="text-[#81452E] font-bold text-2xl mb-2">
      Benefits of Desi Cow Ghee: Top 7 Nutritional Health Benefits of Cow Ghee
    </h1>
    <p className="text-[#81452E] text-lg">
      Cow ghee is a fresh and clean animal fat derived from milk. Additionally, it contains antioxidants that are beneficial for treating skin-related problems.
    </p>
  </div>

  <div className="w-[900px] h-[172px] bg-[#FFFFFF] border-[2px] border-[#D05E2D] rounded-[8px] p-4">
    <h1 className="text-[#81452E] font-bold text-2xl mb-2">
      Top 5 Nutritional Health Benefits of Pure A2 Gir Cow Ghee
    </h1>
    <p className="text-[#81452E] text-lg">
      In this fast-paced lifestyle, we have forgotten one thing that used to be a daily part of life—ghee. Although many types of ghee are available...
    </p>
  </div>
</div>

<div className="absolute top-[85%] left-[38%] transform -translate-x-1/2 -translate-y-1/2 z-10 space-y-4">
  <div className="w-[950px] h-[172px] bg-[#FFFFFF] border-[2px] border-[#D05E2D] rounded-[8px] p-4">
    <h1 className="text-[#81452E] font-bold text-2xl mb-2">
      The Journey of Gir Cow Ghee: Tradition and Purity
    </h1>
    <p className="text-[#81452E] text-lg">
      Explore the cultural significance and traditional methods of producing Gir cow ghee. Gir Cow Breed and Its Importance Gir cows, native to India, are renowned...
    </p>
  </div>

  <div className="w-[950px] h-[172px] bg-[#FFFFFF] border-[2px] border-[#D05E2D] rounded-[8px] p-4">
    <h1 className="text-[#81452E] font-bold text-2xl mb-2">
      The Health Benefits of Gir Cow Ghee Explained
    </h1>
    <p className="text-[#81452E] text-lg">
      Gir cow ghee, revered for its purity and nutritional richness, has been a staple in Indian households for centuries. Derived from the milk of Gir cows...
    </p>
  </div>
</div>

<div className="absolute top-[85%] left-[78.5%] transform -translate-x-1/2 -translate-y-1/2 z-10">
  <img
    src={Girl}
    alt="Girl"
    className="w-[480px] h-[360px] object-cover rounded-2xl"
  />
</div>

<FAQSection />

      <div className="App" >
       
      </div>

      <div>
      
      <Footer /> 
    </div>
</div>
</div>
        
  
      
      
  

      
    
  );
}

export default App;
