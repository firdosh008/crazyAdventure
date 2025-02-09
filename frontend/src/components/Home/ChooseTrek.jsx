import React from "react";
import bgLineImage from "../../assets/background/line-pattern2.png";
import himachalPardesh from "../../assets/himachal-pradesh.jpg";
import lehLadakh from "../../assets/leh-ladhak.jpg";
import jammuKashmir from "../../assets/jammu-kashmir.jpg";
import uttarakhand from "../../assets/uttarakhand.jpg";

const locations = [
  {
    name: "Uttarakhand",
    img: uttarakhand,
  },
  {
    name: "Himachal Pradesh",
    img: himachalPardesh,
  },
  {
    name: "Jammu & Kashmir",
    img: jammuKashmir,
  },
  {
    name: "Leh",
    img: lehLadakh,
  },
];

const ChooseTrekCard = ({ name, img }) => {
  return (
    <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden group">
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover z-10 object-center group-hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="absolute inset-0 tracking-wider text-white font-semibold bg-black bg-opacity-10 z-20 flex justify-center items-center font-montez text-4xl leading-6 pt-4">
        {name}
      </div>
    </div>
  );
};

const ChooseTrek = () => {
  return (
    <div
      className="flex flex-col py-5"
      style={{
        backgroundImage: `url(${bgLineImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2 py-4">
        <div className="font-montez text-4xl leading-6 pt-4">Choose your</div>
        <div className="pt-2 font-inter text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide flex justify-center items-center text-nowrap">
          Winter Trek
        </div>
      </div>
      <div className="w-[90%]  flex py-2 justify-center items-center tracking-widest text-sm md:text-md text-center font-medium font-inter  md:w-[80%] mx-auto">
        The Crazy Mountaineers is an initiative of a family to promote eco and
        safe tourism in the Himalayan Region & help society understand the
        importance of the Himalayan eco system. Being the top rated and oldest
        trekking company in Uttarakhand, India, we create a safe and thrilling
        environment for our trekkers and provide value to our customers by
        providing them with the best services and affordable trekking packages.
      </div>
      <div className="flex flex-col xl:flex-row justify-center items-center gap-8 py-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {locations.slice(0, 2).map((location, index) => (
            <ChooseTrekCard
              key={index}
              name={location.name}
              img={location.img}
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {locations.slice(2, 4).map((location, index) => (
            <ChooseTrekCard
              key={index}
              name={location.name}
              img={location.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseTrek;
