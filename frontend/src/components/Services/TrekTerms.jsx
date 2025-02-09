import React from "react";

const TrekTerms = () => {
  return (
    <div className="p-4 ">
      {/* <h1 className="text-3xl font-bold mb-4">Kedarkantha Trek - Cost Terms</h1> */}

      {/* Inclusions Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Inclusions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Accommodation: Home stay, Camping.</li>
          <li>
            All vegetarian nutritious meals on trek (Veg. + Organic Food).
          </li>
          <li>
            Meals: Breakfast, Lunch, Tea/Snacks, Hot soup, Dinner, Coffee.
          </li>
          <li>
            Trek Equipment: High-quality Dome tents (Triple/Quad sharing),
            Sleeping bags, Sleeping mattress, Liner, Kitchen tent, Dining tent,
            Utensils, Toilet tents, Helper, Kitchen team, Oxygen cylinders,
            Microspick, Gaiters, and crampon (if required).
          </li>
          <li>
            Technical equipment for safety, Walkie-talkies for communication.
          </li>
          <li>
            Experienced guides (Hindi, English), local team, cooks, porters.
          </li>
          <li>All necessary permits and entry fees.</li>
          <li>First aid medical kits, stretcher, and oxygen cylinder.</li>
          <li>
            Mountaineering qualified & professional trek Leader, guide, and
            support staff (Certified Team).
          </li>
          <li>24x7 Customer Service with a team of 50+ professionals.</li>
          <li>100% safety ensured with no hidden charges.</li>
          <li>
            Transportation from Dehradun to Sankri and return (on additional
            charges + INR 2000 per head).
          </li>
          <li>
            Pickup & Drop Points: Dehradun Railway Station (6:30 AM - 7:00 AM)
            to Dehradun Railway Station (4:30 PM - 6:00 PM).
          </li>
          <li>All transfers in a shared taxi.</li>
        </ul>
      </section>

      {/* Exclusions Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Exclusions</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Any kind of personal expenses.</li>
          <li>
            Food during transit (Dehradun to Sankri & Sankri to Dehradun).
          </li>
          <li>Insurance.</li>
          <li>Mules or porters to carry personal luggage.</li>
          <li>Anything not specifically mentioned under the inclusions.</li>
          <li>Any kind of emergency evacuation charges.</li>
          <li>GST 5%.</li>
        </ul>
      </section>

      {/* Note Section */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Note</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            If you're a group of 5+ members, transportation is available from
            Dehradun to Dehradun. If not, we will shift you with our other group
            (if we have one), otherwise the package will be from Sankri to
            Sankri.
          </li>
          <li>
            The Crazy Mountaineers expect you to carry your personal luggage,
            but if you'd like to offload your backpack, you can give it to a
            mule.
          </li>
        </ul>
      </section>

      {/* Backpack Offloading Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">
          Backpack Offloading Charges
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>INR 1200/- if you make an online payment 10 days in advance.</li>
          <li>INR 2000/- if you inform us after reaching Sankri.</li>
          <li>
            Backpack cannot weigh more than 11 kg, and it must have a waterproof
            cover. Suitcases/strolleys/bags are not allowed.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default TrekTerms;
