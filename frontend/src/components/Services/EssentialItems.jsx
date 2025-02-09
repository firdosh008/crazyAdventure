import React from "react";

const EssentialItems = () => {
  const essentials = [
    {
      category: "Backpack & Rain Cover",
      items: [
        "Backpack & rain cover (50 - 60 ltr) with comfortable shoulder straps",
        "Day pack + rain cover (20 - 30 ltr) if hiring a mule or porter",
      ],
    },
    {
      category: "Walking Gear",
      items: [
        "Walking stick (At least one advisable)",
        "Head torch - 1 Nos.",
        "Water bottle/Hydration pack - 2 bottles of one litre each",
        "Hydration pack users: 1 hydration pack + 1 litre bottle",
        "Carry at least one thermos flask",
        "Snacks: Energy bars, dry fruits, electral/ors",
      ],
    },
    {
      category: "Personal Medical Kit",
      items: ["Consult your doctor"],
    },
    {
      category: "Clothing",
      items: [
        "2 Full sleeves T-shirts (Non-cotton)",
        "1 Fleece T-shirt",
        "1 Fleece jacket (Alternative: woollen sweater)",
        "1 Down feather / Hollofil jacket",
        "Wind & waterproof jacket & pants - 1 Pair",
        "Thermal inners (upper and lower) - 1 Pair",
        "2 Synthetic trek pants (avoid shorts, fitting denims, capris)",
        "1 Poncho",
      ],
    },
    {
      category: "Head Protection",
      items: [
        "1 Sun cap (covering the neck as well)",
        "1 Woollen cap",
        "1 Balaclava",
        "1 Neck-gaiters",
        "Sunglasses (dark with side cover, U/V protected)",
        "For spectacles wearers: (A) Contact lenses, (B) Photochromatic glasses",
      ],
    },
    {
      category: "Footwear",
      items: [
        "1 Pair of trekking shoes (waterproof, high ankle with good grip)",
        "1 Pair of floaters/flip-flops (optional)",
        "5 Pairs of cotton socks",
        "3 Pairs of woollen socks",
        "1 Pair of gaiters (will be notified if required)",
      ],
    },
    {
      category: "Hand Protection",
      items: ["1 Pair of waterproof gloves", "1 Pair of fleece/woollen gloves"],
    },
    {
      category: "Personal Utilities",
      items: [
        "Sunscreen cream",
        "Hand sanitizer",
        "Moisturiser",
        "Antibacterial powder",
        "Toilet paper & wipes",
        "Toothbrush and toothpaste",
        "Lip balm",
        "Quick dry towel",
      ],
    },
  ];

  return (
    <div className=" mx-auto my-8 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {essentials.map((section, index) => (
          <div key={index} className="border p-4 rounded-lg ">
            <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
            <ul className="list-disc list-inside space-y-2">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EssentialItems;
