import harKiDunMap from "../../assets/maps/Har-Ki-Dun-Trek-Map.jpg";
import KedarKanthaMap from "../../assets/maps/Kedarkantha-Trek-Route-Map.jpg";
import GaumukhTapovanMap from "../../assets/maps/Gaumukh-Tapovan-Trek-Map.png";
import NagTibbaMap from "../../assets/maps/Nag-Tibba-Map.png";
import BalipassMap from "../../assets/maps/Bali-Pass-Trek.png";
import RuinsaraTrekMap from "../../assets/maps/Ruinsara-Trek-Map.png";

export const treksData = [
  {
    name: "Kedarkantha Trek",
    title: "Kedarkantha Trek - Gods Own Land",
    tourCode: "122132131",
    price: "₹ 3,999",
    mapImg: KedarKanthaMap,
    overview: {
      title: "Kedarkantha Trek Overview",
      paragraphs: [
        "Kedarkantha Trek is one of the most famous winter treks in India. The trek starts from a village called Sankri in the Uttarkashi district and gains the maximum height of 12,500 feet (3,800 m) at the Kedarkantha Peak. There are other routes that can connect you to the Kedarkantha Peak, like an eastern ridge, western ridge, and Phulara ridge. But, the villages connected to these areas are not much explored so most of the trekkers use the Sankri route.",
        "Being a winter trek, the Kedarkantha Trek receives heavy snowfall and is one of the best treks for beginners. It is not a short trek, it takes around 5-6 days to the summit and back (if you are starting from Dehradun). Kedarkantha trek is located in the range of Govind Wildlife Sanctuary in Uttarkashi district of Uttarakhand and the best time to visit is from December to April.",
        "As soon as you arrive at Sankri, you start to capture the wonderful views of the mountains and the diverse flora & fauna of the area. With these amazing imagery in mind, you move forward to Juda ka Talab from Sanakri and you see clearings in the middle of the forest, multiple colors, meadow, and sun rays shining down the lovely forest will make you mesmerized and amazed.",
        "A stunning view of snow capped ranges like Har ki Dun from Juda ka Talab will make you feel lost in the beauty of nature. In winters, Juda ka Talab is completely frozen due to a minimum temperature of -7 degrees, and this lake is also known as a frozen lake of India.",
        "Finally going from base camp Juda ka Talab to Kedarkantha peak is one of the best feelings in the world. To witness the beauty of the sun rising from the peak can bring joy to your mundane life. This is just magical to see such a splendid view that strikes you at once.",
        "In addition, you can explore more at the Sankri village while we stop there for a few hours. On your way to the Sankri village, you can also visit a village called Lakhamandal. Based on ancient beliefs, this village keeps a mythological history of Mahabharata. According to this belief, the fifth brother of Pandava named Sahadeva visited this place and buried lakhs of Shivling under the range of this village and much more.",
        "In order to reach Kedarkantha trek from Delhi, you need to travel to Dehradun and catch the bus to Sankri from Dehradun Railway Station.",
      ],
    },
    duraton: "5 Days",
    altitude: "12,500",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "Govind Wildlife Sanctuary",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        description: [
          "The Kedarkantha Trek starts from Dehradun city, where trekkers will be picked up at 6:30 am from Dehradun ISBT. We begin the journey towards Sankri, which is located 230 km from Dehradun and takes approximately 7-8 hours by road. The drive offers stunning views of the Himalayan mountains and passes through Mussoorie, Purola, and Mori before reaching Sankri. On the way, trekkers pass through Govind National Park, which is home to diverse flora and fauna.",
          "Once we arrive at Sankri, trekkers will check into The Crazy Mountaineers Homestay. This is where you’ll rest and prepare for the next day's trek.",
        ],
        briefOverview: {
          altitude: "6,400 feet",
          driveDistance: "230 km, approx. 8 hours",
          arrivalTime: "5:00 pm",
          network: "Jio & BSNL (limited)",
        },
      },
      {
        day: "Day 2",
        title: "Sankri to Juda ka Talab",
        description: [
          "After breakfast, the trek officially begins as we move towards Juda ka Talab via Sor village.",
          "The distance of the trek is about 4 km, taking around 5 hours. The trail passes through dense pine forests",
          "maple trees, a few streams, and opens out to beautiful meadows. Juda ka Talab is an ideal camping destination with a lake on one side",
          "and thick forests on the other, making it a serene spot to camp for the night.",
        ],
        briefOverview: {
          altitude: "6,400 feet to 9,100 feet",
          trekDistance: "4 km, approx. 5 hours",
          highlights:
            "Trail passes through dense pine forests, maple trees, and meadows",
          stay: "Tents",
        },
      },
      {
        day: "Day 3",
        title: "Juda ka Talab to Kedarkantha Base",
        description: [
          "The third day of the trek takes us from Juda ka Talab to the Kedarkantha base camp, located at an altitude of 11,250 feet.",
          "The 4 km trek will take around 2.5 hours. The trail is easy and scenic, passing through the dense forests of Oak & Pine.",
          "If trekking in winter, snow begins to appear around the 10,400 feet mark. ",
          "At the base camp, the evening sky is dotted with stars, offering mesmerizing views of the surrounding peaks.",
        ],
        briefOverview: {
          altitude: "9,100 feet to 11,250 feet",
          trekDistance: "4 km, approx. 2.5 hours",
          highlights:
            "Snow-capped peaks like Bandarpoonch, Swargarohini, Kala Nag visible",
          stay: "Tents",
        },
      },
      {
        day: "Day 4",
        title: "Kedarkantha Base to Kedarkantha Peak & Descent to Base Camp",
        description: [
          "The fourth day is the summit day! We ascend from 11,250 feet to 12,500 feet to reach the Kedarkantha Peak.",
          "The trek to the peak takes about 3 hours, and from the top, trekkers can enjoy a breathtaking 360-degree view of the snow-clad Himalayan ranges.",
          "After spending some time at the summit, we descend back to the base camp near Juda Ka Talab.",
        ],
        briefOverview: {
          altitude: "11,250 feet to 12,500 feet to 8,900 feet",
          trekDistance: "6 km, approx. 7 hours",
          highlights:
            "Spectacular summit views, descent to base camp by afternoon",
          stay: "Tents",
        },
      },
      {
        day: "Day 5",
        title: "Juda Camp to Sankri via Hargawn & Return to Dehradun",
        description: [
          "On the final day, we descend from Juda Camp to Sankri via Hargawn. The 4 km trek takes approximately 3 hours.",
          "Once back at Sankri, trekkers will be driven back to Dehradun, completing the trek. The 200 km journey back to Dehradun",
          "will take around 8 hours, and you'll reach Dehradun by late evening.",
        ],
        briefOverview: {
          altitude: "8,900 feet to 6,400 feet",
          trekDistance: "4 km, approx. 3 hours",
          driveDistance: "200 km, approx. 8 hours",
        },
      },
    ],
    QuickFacts: {
      duration: "7 Days / 6 Nights",
      highestPoint: "11,675 ft (Har Ki Dun Valley)",
      distance: "47 km (round trip)",
      difficulty: "Easy to Moderate",
      temperature: {
        day: "10℃ to 15℃",
        night: "2℃ to -5℃",
      },
      startingPoint: "Sankri Village",
      baseCamp: "Sankri (reachable from Dehradun)",
      nearest: {
        railwayStation: "Dehradun",
        airport: "Jolly Grant Airport, Dehradun",
      },
      atm: "Last ATM is in Purola before you start the trek",
      bestTimeToVisit: ["April to Mid-June", "October to Mid-November"],
    },
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Regular bus services from ISBT Kashmere Gate, Delhi, to Dehradun ISBT.",
        },
      ],
    },
    essentials: [
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
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "All vegetarian nutritious meals on trek (Veg. + Organic Food)",
        "Breakfast, Lunch, Tea/Snacks, Hot soup, Dinner, coffee",
        "Trek equipment: High-quality Dome tents (Triple/Quad sharing), Sleeping bags, Sleeping mattress, Liner, Kitchen tent, Dining tent, Utensils, Toilet tents, Helper, Kitchen team, Oxygen cylinders, Microspikes, Gaiters, and crampons (if required)",
        "Local Team, Cooks, Porters, First aid box",
        "Technical equipment for safety, Walkie-talkies for communication",
        "Good experience with Hindi, English guide",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff (Certified Team)",
        "24X7 Customer Service with a 50+ Professional Team",
        "100% Safety",
        "No Hidden Charges",
        "Transport from Dehradun to Sankri and return (According to itinerary) on additional charges (+2000 INR per head)",
        "Pickup Points: Dehradun Railway Station (6:30 AM to 7:00 AM), Drop Points: Dehradun Railway Station (4:30 PM to 6:00 PM)",
        "All transfers in a shared taxi",
      ],

      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit (Dehradun to Sankri & Sankri to Dehradun)",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
        "GST 5%",
      ],

      additionalNotes: [
        {
          note: "For groups of 5+ members, transportation is available from Dehradun to Dehradun. For smaller groups, you will be shifted with another group if available, otherwise, your package will be from Sankri to Sankri.",
        },
        {
          note: "Personal luggage should be carried by the trekker. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 2000 if informed after reaching Sankri",
            weightLimit:
              "Backpack cannot weigh more than 11 kg and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
      ],
    },
    importantNotes: [
      "Backpack offloading costs INR 1200 online (10 days in advance), INR 2000 on-site",
      "Group transport is arranged for 5+ members; otherwise, you may be shifted to another group",
    ],
    faqData: [
      {
        menuName: "What is the distance of the KedarKantha trek from Sankri?",
        items: [
          "The total distance from Sankri to Kedarkantha Peak & back is 23 Km.",
        ],
      },
      {
        menuName: "Is there any Temple on the summit of the trek?",
        items: [
          "Kedarkantha trek should not be confused with Kedarnath trek. There is no temple at the peak but you will find a small shrine dedicated to Lord Shiva.",
        ],
      },
      {
        menuName: "What is the nearest ATM from Sankri?",
        items: [
          "The last ATM on the way to Sankri is located in Mori, but sometimes due to network or cash problems, the withdrawal becomes difficult.",
          "Before Mori, you will also find an ATM in Purola.",
          "To avoid any last minute hassles and unnecessary problems, it is advised to withdraw cash from any ATM in Dehradun.",
        ],
      },
      {
        menuName: "What is the snowfall time in Kedarkantha?",
        items: [
          "You can expect to see good snow in Kedarkantha if you plan your trip from mid-December to early April.",
        ],
      },
      {
        menuName: "What is the altitude of KedarKantha?",
        items: [
          "The maximum altitude of the Kedarkantha trek at the peak is 12,500 ft. (3,800m) above sea level.",
        ],
      },
      {
        menuName: "Can I visit Kedarkantha in summer?",
        items: [
          "Yes, of course, the Kedarkantha trek is a 12-month trek, and you can visit here at any point in time.",
        ],
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Har Ki Dun Trek",
    title: "Har Ki Dun Trek - The Stairway to Heaven",
    tourCode: "122132132",
    price: "₹10,499",
    overview: {
      title: "Har Ki Dun Trek Overview",
      paragraphs: [
        "Har Ki Dun literally stands for the Valley of Lord Shiva, where 'Har' means Shiva and 'Dun' means Valley. Amidst this beautiful valley lies the 3000-year-old Har Ki Dun village, which attracts visitors due to its ancient temples and villages. These isolated villages, located in this peaceful valley, remain untouched by modern civilization.",

        "Situated in the Garhwal Himalayas of the Uttarakhand state in India, the Har Ki Dun trek captivates visitors with its tall, snow-clad peaks and alpine vegetation. Once you reach the destination, you will catch a glimpse of the stunning Swargarohini peak.",

        "Legend has it that Yudhishthira, one of the five brothers of the Pandavas from the Mahabharata, climbed this peak on his way to heaven. Har Ki Dun Trek is one of the oldest treks in the valley of gods, starting from Taluka and lasting for a week.",

        "During the trek, the soothing sound of the flowing river, the chirping of birds, green trees, and majestic mountains will make you fall in love with nature all over again. The frequent ascents and descents keep the Har Ki Dun adventure alive, and on a clear night, the stars in the sky will make you feel like you're roaming through the galaxy—a fabulous experience not to be missed.",

        "Har Ki Dun Trek is great for beginners as well as intermediate level trekkers. The valley remains covered with snow from December to March. While most people choose to trek during the summer, it's a multi-seasonal trek that can also be enjoyed in winter.",
      ],
    },
    mapImg: harKiDunMap,
    duraton: "7 Days",
    altitude: "11,200",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Sankri",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        description: [
          "Your first day of the Har ki Dun trek will start with a 10-hour drive from Dehradun to Sankri Village. You need to reach the Dehradun Railway Station or ISBT by 8:00 am. To reach Dehradun on time, you can book an overnight bus or cab from Delhi to Dehradun.",

          "Passing through Mussoorie- the Queen of the Hills on to Uttarkashi district, you will cross Naugaon, Purola, Mori, and Netwar before finally reaching village Sankri- the first stop on the trek. The route is picturesque with pine trees and the road runs parallel to the mighty Tons river. We would stop on the way to have lunch somewhere.",

          "After reaching Purola, you should make all your important phone calls as after that the signal becomes weak and only BSNL network is available with limited connectivity. Upon reaching Sankri, you can freshen up at the Crazy Mountaineer’s homestay & you will get ample of time to explore nearby places and markets.",

          "In-case you need last-minute shopping for your trek, trekking essentials, garments & equipment are available at the Sankri market,",
        ],
        briefOverview: [
          "220 km drive by NH 507",
          "Altitude: 6,400 feet.",
          "Last ATM- Purola",
          "Small shops available for trekking gears",
          "BSNL network with limited connectivity",
          "Crazy Mountaineers Homestay at Sankri",
          "Breakfast and lunch excluded, dinner included",
          "Trekkers will be picked from Dehradun at 8:00 am",
          "Expected arrival time at Sankri – 4:00 pm .",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Chilurgad (Pavani Gharat) via Taluka",
        description: [
          "On the second day we will drive from Sankri to Taluka in the morning. It will be a short drive of 12 km and takes about one hour. On reaching Taluka village, the trekkers will be given refreshments for the hike. You will start your descent to the banks of river Tons and the trail will enter a level walkthrough conifers forest until you reach the first cemented bridge.",
          "After crossing the river by the bridge, the trail then leads up to a wooden bridge where you can fill your water bottles & move further. The trail provides a beautiful setting for clicking photographs. By lunchtime, we will approach the rest point.",
          "Moving ahead, the fields of potato, maize, and millets will fall on the way and soon we will be nearing our first campsite as the sun begins to dip at Chillurgad which is a green clearing at the banks of super.",
        ],
        briefOverview: [
          "Sankri to Taluka - 12 km drive of about an hour",
          "Taluka Altitude - 7,000 ft",
          "Taluka to Chillurgad",
          "Altitude - 8,200 ft",
          "Trek Distance: 10 km",
          "Trek Time: 6 hours approx",
          "Trek Level: Easy level walk and gradual ascent in most parts",
          "Riverside camping in Govind National Park forests",
        ],
      },
      {
        day: "Day 3",
        title: "Chillurgad To Simantra Via Osla Village",
        description: [
          "From Chillurgad to Simantra is about a distance of 9 Km and takes around 8 hours. On the trail you will cross hydroelectricity run chafing units. These are used by the local villagers for processing millets and maize by removing husk from them and grinding them to obtain flour.",
          "As you move forward you will find beautiful views of harvested lands and wooden huts that are used for storage purposes by the locals. The trail then turns for an ascent from where you can get breathtaking views of the Dhauladhar Range right in front of you.",
          "Soon we will be reaching a green stretch of Simantra which will be our campsite for day 2.",
        ],
        briefOverview: [
          "Altitude - 9,800 ft",
          "Trek Distance: 9 km",
          "Trek Time: 8 hours",
          "Spring water points",
          "Trek Level: Steeper ascent along with well distributed level walks and inclines",
          "Camping in meadows overlooking mountains",
        ],
      },
      {
        day: "Day 4",
        title: "Simantra To Har Ki Dun And Back To Simantra",
        description: [
          "On Day 4 we will push for Har ki Dun Village, on reaching the Har ki Dun, you can view the famous Swargarohini peak (The stairway to heaven). After spending some time at the village, we would head back to Simantra.",
        ],
        briefOverview: [
          "Altitude: 11,768 ft",
          "Trek Distance: 10 km",
          "Trek Time: 9 hours",
          "Spring water points",
          "Level trek with forest walk combined with gradual inclines",
          "Riverside camp stay in the valley",
          "Snow Peaks in View: Swargarohini, Hata Peak, Black Peak etc.",
        ],
      },
      {
        day: "Day 5",
        title: "Simantra To Chillurgad Via Osla",
        description: [
          "On day 5 we would go back from Simantra To Chillurgad Via Osla walking on the same trail we came from.",
        ],
        briefOverview: [
          "Trek Distance: 9 km",
          "Total Trek Time: 8 hours",
          "Spring water points",
          "Riverside camping at Govind National Park forests",
        ],
      },
      {
        day: "Day 6",
        title: "Chilluragad To Taluka And 12 Kms. Drive To Sankri",
        description: [
          "A 5 hour trek to Taluka will start in the morning, climbing down by the familiar trail, stopping at familiar rest points. The car waits at the end of the dirt road to drive back base camp-wards. Climbing down is generally easier but, stressing out with quick steps is not advised. On reaching Sankri, we will have tea and dinner at the Crazy Mountaineer Homestay.",
        ],
        briefOverview: [
          "Trek Time around 5 hours",
          "Trek Distance about 10 km",
          "Spring water points",
          "Drive from Taluka to Sankri - 12 km",
          "Driving Time around an hour",
          "Stay at The Crazy Mountaineers Homestay",
        ],
      },
      {
        day: "Day 7",
        title: "Sankri to Dehradun",
        description: [
          "The journey will end with a 10 hour drive from Sankri to Dehradun. Breakfast will be provided in the morning",
        ],
        briefOverview: [
          "Distance: around 220 km drive",
          "Drive Time: approximately 10 hours",
          "Breakfast is included",
          "Drop at Dehradun Railway Station or ISBT",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun. You can board a bus from ISBT Kashmiri Gate. We would suggest you to take only government buses from ISBT Kashmiri.",
        },
        {
          type: "text",
          content:
            "The bus would drop you at Dehradun ISBT. From there, you will be picked up by us.",
        },
        {
          type: "header",
          content: "You will reach Sankari village around 4:00 PM",
          subitems: [
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station or Dehradun ISBT at 8:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Sankri by 4:00 PM.",
          ],
        },
      ],
    },
    essentials: [
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
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Meals while on trek (Veg. + Egg)",
        "All necessary entry fees and permits",
        "Accommodation: Guest house, Home stay, camping during Trek",
        "Mountaineering qualified & professional trek Leader, guide, cook and Support staff",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "TCMountaineer Staff Insurance",
        "Porters/mules to carry central equipment",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Mules or porter to carry personal luggage",
        "Insurance",
        "Any kind of emergency evacuation charges",
        "Anything not specifically mentioned under the inclusions",
      ],
      additionalNotes: [
        {
          note: "Normally, The Crazy Mountaineers expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1500/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1800/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kg. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Gaumukh Tapovan",
    title: "Gaumukh Tapovan Trek - Origin of Ganga",
    tourCode: "122132133",
    price: "₹ 15,399",
    overview: {
      title: "Gaumukh Tapovan Trek - Overview",
      paragraphs: [
        "The Gaumukh Tapovan Trek derives its name from Cow’s Mouth as earlier it used to look like a Cow’s mouth and the river Bhagirathi emerging out of it. The trek begins at Gangotri and follows through the rich forest diversity which gradually decreases as we climb higher to our destination. While on Gaumukh Tapovan Trek, you will be able to get clear views of the magnificent Mount Shivling & Bhagirathi Mastiff.",
        "The Journey of Gaumukh Tapovan Trek begins from Rishikesh. The trekkers will travel from Rishikesh to Gangotri via road. Gangotri is located on the banks of river Bhagirathi.",
        "The trek begins with walking on a marked trail that goes through the Gangotri National Park. You will see many pine trees that grow in this area and will be able to camp near the holy Bhagirathi river that will accompany you for the entire trek.",
        "The beautiful sunrise in the morning will surely take your breath away, you will be able to view the beautiful illuminated mountain peaks when the sunlight hits them for the first time in the morning.",
        "The magnificent Mount Manda which has an altitude of 6,200 m is one of the major attractions of the Gaumukh Tapovan Trek. As you inch forward towards the destination, the tree line gradually starts decreasing and the trek starts to get a bit difficult.",
        "You will be able to catch glimpses of Bhagirathi 1, 2 & 3 mountains. When pushing towards the highest point of the trek at 14,600 ft, the trail gradually becomes smaller and smaller before it finally disappears.",
        "Your final steps towards the highest point of the Gaumukh Tapovan trek will take you on a thrilling experience. You will have to walk on huge mountain boulders and small loose rocks and therefore it is very important to have good quality shoes on you.",
        "Climbing to Tapovan is the most difficult part of the trek with loose rocks and a high chance of rockfall, so make sure to move quickly and carefully. After you cross the rocky surface, you will be able to get your first breathtaking view of the massive Mount Shivling.",
      ],
    },
    mapImg: GaumukhTapovanMap,
    duraton: "8 Days",
    altitude: "14,235",
    Grade: ["Moderate", "Difficult"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Gangotri",
        description: [
          "The first day of the Gaumukh Tapovan Trek starts with a 241 Km drive from Dehradun to Gangotri which takes around 8 hours, the drive will be full of the beautiful scenic beauty of the Himalayas as we cross Mussoorie, Dhanauti and Chamba to finally arrive at Uttarkashi.",
          "Uttarkashi is also known as the land of gods, it lies on the banks of the holy Bhagirathi river and you will find my temples in this area. Upon your arrival at Gangotri, you can explore the local market which remains full of pilgrims. Overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Altitude: 10,170 ft.",
          "241 Km drive - approx. 8 hours",
          "Pickup from Dehradun ISBT",
          "Network - Available",
          "Stay at Guest House",
        ],
      },
      {
        day: "Day 2",
        title: "Acclimatisation at Gangotri",
        description: [
          "This day of the Gaumukh Tapovan Trek will be reserved for acclimatization as you are now at 10,100 feet above sea level and it will take your body a little time to adjust to the weather conditions at higher altitudes.",

          "You can explore the local area and also visit one of the Char Dhams - The Gangotri Temple which was built in the 18th century. You can also visit the famous Bhagirathshila, the place where King Bhagirath worshipped Lord Shiva or the Pandava Gufa where the Pandavas from Mahabharata are believed to have rested. The night will be spent in the rest house as we prepare to begin our trek the next morning.",
        ],
        briefOverview: [
          "Altitude: 10,170 ft.",
          "Explore the local area at Gangotri.",
          "Visit the Gangotri Temple.",
          "Network - Available.",
          "Stay at a guest house.",
        ],
      },
      {
        day: "Day 3",
        title: "Gangotri to Chirbassa",
        description: [
          "Today we will start our trek. As we walk into the Gangotri National Park you will find yourself surrounded by the pine forest with the Bhagirathi river & the majestic Sudarshan Parbat (around 21,350 ft.) as your accomplice throughout the trek. There will be gradual ascents during the trek but overall it will be an easy 4 to 5 hours of trek.",

          "The campsite for today is a scenic location, camping under the pine trees with the Bhagirathi river flowing nearby. From here you will be able to catch the first glimpse of Bhagirathi I, II and III. Overnight stay at camps.",
        ],
        briefOverview: [
          "Altitude: 11,680 ft.",
          "Trekking through Gangotri National Park.",
          "9 km walk for about 5 to 6 hours.",
        ],
      },
      {
        day: "Day 4",
        title: "Chirbassa to Bhojwasa",
        description: [
          "Today is probably the easiest day of the trek, after you wake up to the stunning view of the sun rays hitting the mountain peaks, we will get ready to walk again.",

          "There will be gradual assents as we trek for a short distance of about 5 km which will take around 2-3 hours of time. As we keep walking further on the trail, you will be able to catch better views of the Bhagirathi sister peaks.",

          "Soon you will see a lot of Birch trees, this is a sign that we have reached Bhojwasa which will be our campsite for today. This wide part of the valley will give your first view of Mount Shivling. You can spend your day exploring the area around you. Night stay at tents.",
        ],
        briefOverview: [
          "Altitude: 12,430 ft.",
          "View of Mount Shivling.",
          "5 km walk for about 2 to 3 hours.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 5",
        title: "Bhojwasa to Gaumukh Tapovan",
        description: [
          "Eat well, fill water bottles, carry energy bars.. Today is the longest day of the trek. Gaumukh is located at the end of the Gangotri Glacier from where the Holy Ganges originate. Gaumukh gets its name because the river seemed to originate from a cave that looked like a cow’s mouth in the past.",

          "The trail will start to get difficult as we start to push towards Gaumukh. The rocky mountains make it difficult to walk on so watch your step carefully. The female trail is full of rocks that are loose and difficult to walk on but once you cross it, you will realize that it was totally worth it. You will be pleased to view the majestic Mount Shiviling standing tall in front of you along with Mount Meru & Bhagirathi sister peaks. Overnight stay at tents.",
        ],
        briefOverview: [
          "Altitude: 14,600 ft.",
          "Difficult trail.",
          "5-6 hours of trekking.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 6",
        title: "Tapovan to Chirbassa",
        description: [
          "When you wake up in the morning, your eyes will be treated with a beautiful sunrise. With the sun rays hitting Mount Shivling and the nearby peaks, this mesmerizing view will remain with you for a lifetime. Make sure to fill your water bottles as there are no water sources on the way.",

          "Again we walk over the same rocky path and descending down a rocky trail is more difficult than climbing up. Move slowly and watch your step. After the rocky trail, we will be trekking for another 6-7 hours along the Bhagirathi river till we reach Chirbassa and back to the same pine forests. We will be spending the night in tents.",
        ],
        briefOverview: [
          "Altitude: 11,680 ft.",
          "Difficult trail.",
          "6-7 hours of trekking.",
          "Stay in tents.",
        ],
      },
      {
        day: "Day 7",
        title: "Chirbasa to Gangotri",
        description: [
          "Today is the last day of the trek, we will be walking for about 4 to 5 hours to trace our steps back to Gangotri. As we once again enter the Gangotri National Park you will find the same pine trees and streams that we saw at the start of the Gaumukh Tapovan Trek. Lunch, Dinner and stay at Guest House.",
        ],
        briefOverview: [
          "Altitude: 10,170 ft.",
          "Moderate to easy trail.",
          "9 Km trek, 4-5 hours of walking.",
          "Stay at guest house.",
        ],
      },
      {
        day: "Day 8",
        title: "Gangotri to Dehradun",
        description: [
          "Today we will be departing back to Dehradun along with the great memories of Gaumukh, Mount Shivling and the Bhagirathi sister peaks. The 241 Km ride along the same Bhagirathi river that accompanied us on the trek will take about 8 hours and we will reach Dehradun by evening.",
        ],
        briefOverview: [
          "240 Km drive, about 8 hours.",
          "Reach Dehradun by evening.",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun. You can board a bus from ISBT Kashmiri Gate. We would suggest you to take only government buses from ISBT Kashmiri.",
        },
        {
          type: "text",
          content:
            "The bus would drop you at Dehradun ISBT. From there, you will be picked up by us.",
        },
        {
          type: "header",
          content: "You will reach Sankri village around 5:00 PM",
          subitems: [
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station or Dehradun ISBT at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Sankri by 5:00 PM.",
            "Food from Dehradun to Sankri is not included in the trek cost.",
          ],
        },
      ],
    },
    essentials: [
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, cook, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, The Crazy Mountaineers expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kg. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [
      {
        menuName: "Is Gaumukh Trek difficult?",
        items: [
          "This trek falls in the category of moderate to difficult and therefore you need to be mentally as well as physically fit to do this trek.",
        ],
      },
      {
        menuName: "Best Time to do Gaumukh Tapovan?",
        items: [
          "Pre monsoons - May & June and post monsoon from August - October is the best time to visit Gaumukh Tapovan Trek",
        ],
      },
      {
        menuName: "How is the network connectivity on Gaumukh Tapovan Trek?",
        items: [
          "No networks will be available throughout the trek and therefore you are advised to attend all important calls in Gangotri.",
        ],
      },
      {
        menuName: "Can beginners join this trek?",
        items: [
          " This trek can be a little difficult for beginners and therefore not recommended.",
        ],
      },
      {
        menuName: "How to reach Gaumukh Trek from Delhi?",
        items: [
          "Gaumukh trek starts from Gangotri, to reach gangotri from Delhi, you can hire a taxi or board a bus which are easily available at the national capital.",
        ],
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Rupin Pass Trek",
    title: "Rupin Pass Trek - Origin of Ganga",
    tourCode: "122132134",
    price: "₹ 16,899",
    overview: {
      title: "Rupin Pass Trek - Overview",
      paragraphs: [
        "The Rupin Pass trek is a glacial crossover from the state of Uttarakhand to Himachal Pradesh. The trek begins with a drive from Dehradun to Dhaula, which is a 130km long journey by road and ends at Sangla village in Himachal Pradesh. Dhaula is located at an altitude of 5,100 ft. The Rupin Pass trek boasts a max altitude of 15,300 ft. That's a massive gain in altitude, and therefore trekkers need to be prepared for this moderate to difficult grade trek as trekkers will have to cover about 10km each day.",
        "Rupin Pass is one of the best treks when it comes to diversity of sceneries & sudden changes in the trail. At one point, you might be climbing a steep trail that would suddenly change into an easy walk.",
        "The trek is full of surprises at every step, which includes the Jhaka Village, also known as the hanging village. The unique position of the village on the edge of the mountain makes it appear as if the village was hanging through the cliff.",
        "Apart from this, you will encounter a number of snow bridges, deep dark forests of fir, oak & rhododendron, waterfalls that appear to be falling from the sky, and the view of majestic Kinner Kailash at the end of the Rupin Pass Trek will surely leave you spellbound.",
      ],
    },
    mapImg: "",
    duraton: "8 Days",
    distance: "52 km",
    altitude: "15,250",
    Grade: ["Difficult"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Dhaula (Rupin Pass Trek Itenary)",
        description: [
          "The first day of the trek begins with a 190 km long ride from Dehradun to Dhaula and takes around 7 hours. The ride will be filled with the scenic beauty of the mountains. You will pass through the queen of hills - Mussooriee, Purola, Mori & Naitwar as we drive alongside the Yamuna river. Upon arrival at Dhaula you will be served hot dinner by The Crazy Mountaineers team.s",
        ],
        briefOverview: [
          "Altitude: 5,500 ft",
          "190 km drive by NH 507 - approx 7 hours",
          "Pickup from Dehradun railway station at 6:30 am, in a Tata Sumo or a similar vehicle",
          "Breakfast and lunch excluded, dinner included",
          "Last ATM: Purola",
          "No networks are available",
          "Overnight stay in tent",
        ],
      },
      {
        day: "Day 2",
        title: "Dhaula to Sewa",
        description: [
          "Today, we will start walking. It's going to be a long trek of 11 km until we reach Sewa. The trail is an easy path so it is not going to be a tiring walk.",
          "As we leave Dhaula, the trail will enter a climb for about 200 m. but after this, it's an easy level walk. You will be able to view the Rupin river flowing into its bed.",
          "Rupin pass gives you a surprise at every turn, you will find yourself walking surrounded by apple & apricot trees. When we reach Sewa, you can explore the village and the famous Kinnaur temple that is located here. Tonight we will camp outside the Sewa village near the Rupin River.",
        ],
        briefOverview: [
          "Altitude: 6,300 ft",
          "11 km trek, 5 hrs",
          "Moderate level of ascent",
          "Mobile network available only BSNL",
          "Water available on the way",
          "Hot lunch at camp site",
          "Visit the village temple in the evening beautified with medals and coins",
          "Stay in tents",
        ],
      },
      {
        day: "Day 3",
        title: " Sewa to Bawta",
        description: [
          "Today, you will get used to ups and downs of the trek as today’s trail is a bit difficult. Listen carefully what you trek guide has to say as the route is prone to landslides. The variation in the trail also makes it a bit difficult.",
          "The hike today will give you a brief glimpse of the surprises that Rupin Pass trek has to offer. You will be walking through the crop farms and then suddenly enter a dense forest. Soon you will be crossing a bridge that connects the states of Uttarakhand and Himachal Pradesh. The bridge does not belong to either of the two states and hence referred to as “No Man’s Place”.",
          "Walking under the shade of walnut trees on a steep trail we will soon reach Batwa and rest for the day.",
        ],
        briefOverview: [
          "Altitude: 6,888 ft",
          "6 km trek, 4 hrs",
          "Moderate level of the walk with some ascents",
          "No Man’s Place - Uttarakhand and Himachal Pradesh border",
          "Trekking in Deep Forest",
          "Hot lunch at camp site",
          "Stay in tents",
        ],
      },
      {
        day: "Day 4",
        title: "Bawta to Jakha",
        description: [
          "Muster all your energy and prepare yourself for today as we cross the highest and the last village of the trek. The trail is a continuous ascent for 4 to 5 hours and you will need all your energy to walk on this trail full of twists and turns.",

          "The trail is a moderate ascent and after reaching Jiksun the trail will start descending. Walking through the dense forest you will find a wooden bridge form where the trail will suddenly enter into a zig zag walk. Overnight stay in tents.",
        ],
        briefOverview: [
          "Altitude: 8,700 ft",
          "5 km trek, 4 hrs",
          "Difficult trail with steep climb",
          "Highest and the last village of Rupin Pass trek",
          "BSNL network is available",
          "Hot lunch at camp site",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: " Jakha to Dandreyash Thatch",
        description: [
          "Waking up in the morning we will start moving on a well defined trail through the Jakha village and enter a forest again. Walking further the scenery of the places starts changing as we encounter snow patches on the way. Soon we will be crossing our first snow bridge over Rupin. Walking down further you will encounter a wooden bridge.",

          "About an hour of walk from here, walking carefully on the rocky path will take you to another forest of Rhododendron trees. As we keep walking few more kilometeres we will reach Saruwas Thatch. The view form here is absolutely mersmerizing you will be able to see the the Rupin waterfall in a distance, as you continue walking on the snow patches you will once again enter the forest. Moving further up you will find yourself surrounded with eternal bliss, thousands of waterfalls below you will hypnotize you for a while.",

          "As we move down towards the valley, you will cross beautiful green meadows and after crossing some snow bridges, you will reach Dhanderas Thach. Overnight stay in camps.",
        ],
        briefOverview: [
          "Altitude: 11,680 ft",
          "11 km trek, 8 hrs",
          "Trail surrounded by Silver birches (Bhoj trees), Rhododendrons (white, pink, purple)",
          "Packed lunch will be given",
          "Stay in tent",
        ],
      },
      {
        day: "Day 6",
        title: "Dhanderas Thatch to Upper Waterfall camp",
        description: [
          "The altitude from Dhanderas to Upper waterfall rises quickly and is enough to make you vulnerable to Altitude Mountain Sickness. Pay attention to the trek leader as you will be briefed about how to cross the snowy trail ahead.",

          "Walking further on the trek, we will reach Dhanderas base. Crossing the many rvulets of Rupin as we push further you will see the train enter thick snowy region. Paying attention to your trek leader will help you navigate this area safely. Soon we will cross the last snow bridge which is a picturesque sight in itself. A short steep climb from the bridge will take us to our campsite for tonight.",
        ],
        briefOverview: [
          "Altitude: 13,120 ft",
          "3.5 km trek, 3.5 hrs",
          "Hot lunch at camp site",
          "Stay in Camps",
        ],
      },
      {
        day: "Day 7",
        title: "Upper Waterfall to Rupin Pass to Ronti gad",
        description: [
          "The altitude from Dhanderas to Upper waterfall rises quickly and is enough to make you vulnerable to Altitude Mountain Sickness. Pay attention to the trek leader as you will be briefed about how to cross the snowy trail ahead.",

          "Walking further on the trek, we will reach Dhanderas base. Crossing the many rvulets of Rupin as we push further you will see the train enter thick snowy region. Paying attention to your trek leader will help you navigate this area safely. Soon we will cross the last snow bridge which is a picturesque sight in itself. A short steep climb from the bridge will take us to our campsite for tonight.",
        ],
        briefOverview: [
          "Altitude: 13,420 ft",
          "9 km trek, 10 hrs",
          "Carry enough hot water from the camp site; water sources are limited",
          "Packed lunch will be given",
          "Overnight stay in tents",
        ],
      },
      {
        day: "Day 8",
        title: "Ronti gad to Sangla",
        description: [
          "The last day of the Rupin Pass Trek will start with a steep downward decent and the altitude drops rapidly. If someone ever told you that climbing up is easier than climbing down, Rupin Pass Trek sets a perfect example for this",

          "Listen to your trek leader carefully and follow his instructions to avoid injury. As we keep walking down the trail, we will exit the Ronti Gad valley & will be able to view the magnificent Mount Kinner Kailash.",

          "Our next stop will be a lake near the lake of Sangla Kanda. The route from there will enter a steep descent once again, 30 minutes of walking will take you to Baspa Village and another 20 minutes from Bapsa, you will reach Sangla. Your trek ends here.",

          "You can hire a vehicle from Sangla to Shimla which is not included in the trek price.",
        ],
        briefOverview: [
          "Altitude: 8,800 ft",
          "12 km trek, 8 hrs",
          "Book a vehicle to Shimla & make accommodation plans accordingly",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, from Delhi’s ISBT Kashmere Gate. We would suggest you to take only government buses from ISBT Kashmere Gate. Private buses ply from outside ISBT and they are not trustworthy.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "You will reach Dhaula by 5:00 PM",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Dhaula by 5:00 PM.",
            "Food from Dehradun to Dhaula is not included in the trek cost.",
          ],
        },
      ],
    },
    essentials: [
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [
      {
        menuName: "Is Gaumukh Trek difficult?",
        items: [
          "This trek falls in the category of moderate to difficult and therefore you need to be mentally as well as physically fit to do this trek.",
        ],
      },
      {
        menuName: "Best Time to do Gaumukh Tapovan?",
        items: [
          "Pre monsoons - May & June and post monsoon from August - October is the best time to visit Gaumukh Tapovan Trek",
        ],
      },
      {
        menuName: "How is the network connectivity on Gaumukh Tapovan Trek?",
        items: [
          "No networks will be available throughout the trek and therefore you are advised to attend all important calls in Gangotri.",
        ],
      },
      {
        menuName: "Can beginners join this trek?",
        items: [
          " This trek can be a little difficult for beginners and therefore not recommended.",
        ],
      },
      {
        menuName: "How to reach Gaumukh Trek from Delhi?",
        items: [
          "Gaumukh trek starts from Gangotri, to reach gangotri from Delhi, you can hire a taxi or board a bus which are easily available at the national capital.",
        ],
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Dayara Bugyal Trek",
    title: "Dayara Bugyal Trek - Walk The Medows",
    tourCode: "122132135",
    price: "₹  8,999",
    mapImg: "",
    overview: {
      title: "Dayara Bugyal Trek Overview",
      paragraphs: [
        "Dayara Bugyal, in spite of its exquisite beauty, is one of the lesser-known treks in India. Bugyal, a Hindi word, refers to the alpine meadows that are at a high altitude of about 12,000 feet. Dayara Bugyal is a short trek of 22 Kms that begins from Rithal as a base camp which is located about 42 km from Uttarkashi.",

        "It is a beautiful village with greenery everywhere you look. The difficulty level of Dayara Bugyal trek is easy to moderate and this makes it a great choice for beginners. On your way to Dyara Bugyal Top, you will be able to catch glimpses of beautiful meadows, views of the Gangotri, Bandarpooch & Black Peak. You will also find a trail that leads to Dodiatal which is a freshwater lake and the origin of the Assi Ganga river.",

        "The highest point of the trek comes at the Dyara Bugyal top which is at a height of 12,100 feet. During the summers, the beauty of the green meadows, grassy turfs & snow-clad peaks in the distance makes up for a mesmerizing sight.",

        "In order to reach Dayara Bugyal from Delhi, you need to come to Dehradun and catch a bus to Uttarkashi. From there, you need to make your way to Rithal village located 42 km from Uttarkashi which is the base camp for this trek.",
      ],
    },
    duraton: "6 Days",
    distance: "23 km",
    altitude: "12,100",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Raithal",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Raithal (Dayara Bugyal Trek Itenary)",
        description: [
          "The first day of the Dayara Bugiyal Trek begins with a drive to a village called Rithal which is about 42 km away from Uttarkashi. The village is a beautiful location with lush greenery. On your way to Rithal, you will get glimpses of the Shrikanth Peak and Gangotri range.",

          "The 180 Km ride will take about 6-7 hours and you can explore the village upon your arrival. Overnight stay at guesthouse/homestay.",
        ],
        briefOverview: [
          "Altitude: 7,400 ft",
          "Drive: 180 km (6-7 hours)",
          "Network is available (Airtel, Idea, BSNL)",
          "Pick-up from Dehradun railway station",
          "Stay in guest house/homestay",
        ],
      },
      {
        day: "Day 2",
        title: "Raithal to Gui",
        description: [
          "Today we will start walking early in the morning, the trail starts with a walk throught the jungle of silver & gold oak trees. The trail is pretty much simple and the campsite always remains in the line of sight. The trail will enter an ascend and the 3.5 Km walk will take around 4 to 5 hours to reach the campsite.",

          "The campsite at Gui is located in a beautiful picturesque location, surrounded by alpine trees and tall mountains. You will get clearer views of Gangotri & Shrikanth Peak. Overnight stay at camp.",
        ],
        briefOverview: [
          "Altitude: 7,400 to 9,500 ft",
          "Distance: 3.5 km, will take 4-5 hours",
          "Gradual ascend throughout",
          "Overnight stay in tents",
        ],
      },
      {
        day: "Day 3",
        title: "Gui to Chelapada",
        description: [
          "On the third day of the Dayara Bugyal trek, we will make our way to the next camping site at Chelapada. Today is a short day and we will only hike for 3 Km which will take 2 hours. At the campsite, you will find a small stream folwing and will be able to get a clear view of the Bandarpoonch Peak.",

          "Upon your arrival at the Chelapada campsite during the afternoon, you can walk around and explore the area.",
        ],
        briefOverview: [
          "Altitude: 9,500 to 9,800 ft",
          "Distance: 3 km, 2 hours",
          "Stay in tents",
        ],
      },
      {
        day: "Day 4",
        title: "Chelapada to Dayara top and back Gui",
        description: [
          "Today is the day when we will scale the Dayara Top, the highest point of the trek at 12,000 feet and return back to the campsite. The trail will enter the forest but will gradually open up and you will be able to see vast expanses of meadows with colourful flowers growing everywhere.",

          "Walking on this beautiful area and looking at the beautiful mountain ranges you will finally reach closer to the top. The final trial will be a steep climb so watch your step and walk carefully.",

          "Upon reaching the top, you will find yourself standing in front of the majestic Dodiatal Range. You will see the tall Bandarpoonch peak standing tall at a distance. After spending some time at the top we will trace our way back to the campsite at Gui.",
        ],
        briefOverview: [
          "Altitude: 9,800 ft to 12,100 ft",
          "Total Distance: 12 km, 6-7 hours",
          "Stay at Gui campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Gui to Raithal",
        description: [
          "On the fifth day of the Dayara Bugyal Trek, we will make our way back to the Rithal village. It is going to be an easy descent and we will be back in the same beautiful village from where we started this amazing journey.",
        ],
        briefOverview: [
          "Altitude: 9,900 ft to 7,400 ft",
          "Distance: 3.5 km, 2 hours",
          "Stay in guest house",
        ],
      },
      {
        day: "Day 6",
        title: " Raithal to Dehradun",
        description: [
          "Today is the last day of the trek and we say goodbye to Rithal in the morning and leave for Dehradun. Riding alongside the Bhagirathi river, the ride will take around 7 hours and you will reach Dehradun by evening with all the beautiful memories of the trek.",
        ],
        briefOverview: [
          "6-7 hoursdrive to Dehradun",
          "Reach Dehradun by evening",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, from Delhi ISBT Kashmere Gate. We would suggest you to take only government buses from ISBT Kashmere Gate. Private buses ply from outside ISBT and they are not trustworthy.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "You will reach Raithal by 2:00 PM",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM.",
            "Pick-up is included in the cost of the trek.",
            "You will reach Raithal by 2:00 PM.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Guest house, Home stay, Camping)",
        "Meals while on trek (Veg.) (Egg included)",
        "Trek equipment",
        "Permits",
        "First aid medical kits and oxygen cylinder",
        "Qualified & experienced trek Leader, Guide, and Support staff",
        "Transport is not included, but we can arrange from Haridwar to Joshimath and return",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Price Includes'",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Joshimath",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Nag TIbba Trek",
    title: "Nag TIbba Trek - Walk The Medows",
    tourCode: "122132136",
    price: "₹  3,500",
    mapImg: NagTibbaMap,
    overview: {
      title: "Nag TIbba Trek Overview",
      paragraphs: [
        "Nag Tibba trek is one of the best weekend treks for beginners. Generally, the Nag Tibba stands for Serpent peak, is one of the tallest peaks under the Himalayas of the Garhwal range in the nearby Mussoorie region of Uttarakhand. Nag Tibba range counts amongst three primary ranges of the lesser Himalayas including Dhauladhar and the Pir Panjal.",
        "During the trek, you will find yourself at an altitude of 3025 meters. Naag Tibba trek starts from the village named Panthwari. With an excellent and attractive sight view, this is the best trek for adventure and thrill. It takes around one to two days to complete. This is good for those who want to enjoy real natural beauty in a short span of time.",
        "At the mid of the Nag Tibba trek route, trekkers go through the dense forest trail where you will see Alpine, Cedar, and Rhododendron forests. The beautiful meadows, waterfalls, and snowfall during winter keep your eyes thrilled and your heart mesmerized. The sunset view from the camping site will surely make you happier than ever before.",
        "Nag Tibba trek can be done any time of the year. This is a beautiful place for camping where the trekkers can go easily without any atmospheric hurdles. This trek is suitable for summer, spring, as well as winters. Nag Tibba trek can also be called one of the safest treks for beginners and full of thrills for experienced trekkers too.",
        "A temple is found at the top of the peak from where you can have a breathtaking view of other Himalayan mountain ranges too, such as Banarpunch, Kedarnath peak, Gangotri peak, Swargarohini, Black peak, and the snowcapped peak of Chanabang.",
      ],
    },
    duraton: "2 Days",
    distance: "16 km",
    altitude: "9,910",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Kanthgodam/Haldwani",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung",
        description: [
          "Day one of the Roopkund Trek starts with a 210 Km drive through the Kumaon region and takes about 10 hours. The road passes through the deep valley of Shivalik Mountain ranges and coniferous forests. We will be crossing Deval village where you can shop for any amenities that you might require for the trek. The last part of the journey from Deval to Lohajung is very exciting with breathtaking views and curved roads. Overnight stay at Lohajung guest house/ homestay.",
        ],
        briefOverview: [
          "Altitude: 7,660 ft.",
          "Distance: 210 Km drive, approximately 10 hours.",
          "Network: Available.",
          "Pickup from Kathgodam Railway Station.",
          "Overnight stay in Guest house.",
        ],
      },
      {
        day: "Day 2",
        title:
          "Camp 1 to Nag Tibba top and return to Pantwari Village and drive to Dehradun",
        description: [
          "On the second day we will start early as we have a long day ahead of us. We start hiking to the Nag Tibba top after having breakfast around 5 am in the morning. The trail once again passes through the dense forest cover and if you are here in winters, you will find the trail completely covered with snow and therefore it becomes a bit difficult to find the trail during winters. After walking for around 30 minutes, we will reach two clearings surrounded by the forest. From here the trail once again levels out and is easy to cover.",

          "As we walk forward we find the Nag Tibba Temple which is located at the base of Nag Tibba Hill. On a clear day, you can see the beautiful view of the Garhwal Himalayan range.",

          "As we move on the trail once again enter into forest along with a steep descent. This part of the trail is a bit challenging and makes it a good summit experience. Near the top, we will reach the flag marking of Nag tibba summit.",

          "From the summit, the view of the amazing Garhwal Himalayas will surely take your breath away. You will be able to view the famous ice-capped ranges of Gangotri, Kedarnath, Kala Nag, Bandarpoonch, and others.",

          "After spending some time at the Nag Tibba Peak we will make our way back to the camp where we will have lunch and head for Panthwari. We will reach Panthwari village by late evening and drive back to Dehradun which will take around 5 hours.",
        ],
        briefOverview: [
          "Altitude: 7,400 to 9,500 ft",
          "Distance: 3.5 km, will take 4-5 hours",
          "Gradual ascend throughout",
          "Overnight stay in tents",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun is about 25 km from the city. Daily flights from Delhi are available.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi's ISBT Kashmere Gate. We would suggest taking only government buses from ISBT Kashmere Gate. Private buses, which operate from outside ISBT, are less reliable.",
        },
        {
          type: "text",
          content:
            "Usually, buses drop you at Dehradun ISBT. From there, you will need to proceed to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "Travel from Dehradun to Sankri",
          subitems: [
            "THE CRAZY MOUNTAINEERS will arrange a Tata Sumo or similar vehicle to pick you up from Dehradun Railway Station at 6:00 AM.",
            "The pick-up is included in the cost of the trek.",
            "You will reach Sankri by approximately 5:00 PM.",
          ],
        },
        {
          type: "text",
          content:
            "Note: Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Roopkund Trek",
    title: "Roopkund Trek - Say yes to new challenges",
    tourCode: "122132137",
    price: "₹ 9,499",
    overview: {
      title: "Roopkund Trek - Overview",
      paragraphs: [
        "The Rupin Pass trek is a glacial crossover from the state of Uttarakhand to Himachal Pradesh. The trek begins with a drive from Dehradun to Dhaula, which is a 130km long journey by road and ends at Sangla village in Himachal Pradesh. Dhaula is located at an altitude of 5,100 ft. The Rupin Pass trek boasts a max altitude of 15,300 ft. That's a massive gain in altitude, and therefore trekkers need to be prepared for this moderate to difficult grade trek as trekkers will have to cover about 10km each day.",
        "Rupin Pass is one of the best treks when it comes to diversity of sceneries & sudden changes in the trail. At one point, you might be climbing a steep trail that would suddenly change into an easy walk.",
        "The trek is full of surprises at every step, which includes the Jhaka Village, also known as the hanging village. The unique position of the village on the edge of the mountain makes it appear as if the village was hanging through the cliff.",
        "Apart from this, you will encounter a number of snow bridges, deep dark forests of fir, oak & rhododendron, waterfalls that appear to be falling from the sky, and the view of majestic Kinner Kailash at the end of the Rupin Pass Trek will surely leave you spellbound.",
      ],
    },
    mapImg: "",
    duraton: "8 Days",
    distance: "53 km",
    altitude: "15,696",
    Grade: ["Difficult", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Uttarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Dhaula (Rupin Pass Trek Itenary)",
        description: [
          "The first day of the trek begins with a 190 km long ride from Dehradun to Dhaula and takes around 7 hours. The ride will be filled with the scenic beauty of the mountains. You will pass through the queen of hills - Mussooriee, Purola, Mori & Naitwar as we drive alongside the Yamuna river. Upon arrival at Dhaula you will be served hot dinner by The Crazy Mountaineers team.s",
        ],
        briefOverview: [
          "Altitude: 7,660 ft.",
          "Distance: 210 Km drive, approximately 10 hours.",
          "Network: Available.",
          "Pickup from Kathgodam Railway Station.",
          "Overnight stay in Guest house.",
        ],
      },
      {
        day: "Day 2",
        title: "Lohargunj to Didna Village",
        description: [
          "Today after having breakfast, we will start walking. The trail at the beginning is simple and flat, and we will be crossing Wan & Kulling villages. Kulling is a masterpiece of nature. You can spot various exotic birds in this beautiful village which has a very low population.",

          "As we keep walking further, we will climb down to the bed of the river called Neel Ganga and cross the bridge over the river. After crossing the bridge the trail starts to get a bit steeper. Soon we will reach the Didna village which is at an altitude of 8000 ft. above the sea level. Overnight stay in camps",
        ],
        briefOverview: [
          "Trekking Distance: 7 Km",
          "Highest Altitude: 8,050 ft.",
          "Network: Available",
          "Stay at Didna Village.",
        ],
      },
      {
        day: "Day 3",
        title: "Didna Village to Ali Bugyal",
        description: [
          "Today we will be passing through the beautiful village of Ali Bugyal, located at an high altitude of 11,000 ft. We will leave Didna to climb up to Ali Bugyal on a slightly ascending trail. There is another trail that goes to Ali Bugyal from the village which is shorter but steeper. You will be able to spot the beautiful trees of Oak, Birch and Rhododendron on the way.",

          "As we reach closer to our destination the tree line starts to shrink gradually and you will find open grasslands in the area. As you reach the top of Ali Bugyal, you will find a vast open meadow and if the weather is clear you will also be able to spot Mount Trishul & Mrighthuni. The trek will take around 4 hours to complete and we will spend the night in camps.",
        ],
        briefOverview: [
          "Trekking Distance: 11 Km",
          "Highest Altitude: 11,300 ft.",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 4",
        title: "Ali Bugyal to Patar Nachauni via Bedni Bugyal and Ghora Lotani",
        description: [
          "On the fourth day of the Roopkund trek we will start walking in the morning and our destination will be Gora Lutami, one of the most beautiful camping spots of the area. As we keep climbing further you will see the drastic changes in weather and the thinning of air which has less oxygen to breathe as we inch closer to 12,800 ft.",

          "After trekking for 10 km we will finally arrive at our camping destination for today at Gora Lutami. We will spend some time acclimatizing and the night would be spent at camps.",
        ],
        briefOverview: [
          "Trekking Distance: 10 Km",
          "Highest Altitude: 12,800 ft.",
          "Easy Trail",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 5",
        title: "Ghora lotani to Bhagwabasa",
        description: [
          "Today we will wake up early in the morning as we have a very long day ahead of us. After having our breakfast we will start walking on a steep trail and will cover approximately 10 Km. Our destination for today is Bagubasa which is located at an extremely high altitude of 14,000 ft.",

          "We will visit the Kalu Vinayak temple located on the same trail. Make sure to carry hot water to drink and wear proper clothes to reduce the chances of Altitude Mountain Sickness (AMS). Walk slowly and steadily on the slippery spots.",

          "As we keep climbing the air will start to get even thinner and that might cause headaches and stomach pain but dont worry as we can rest if needed. Once you reach the temple, you will be able to spot the Roopkund Lake which is the final destination of our trek. We will follow a trail to Bhagubasa which is located about a kilometer away from the temple. Overnight stay at Bhagubasa.",
        ],
        briefOverview: [
          "Trekking Distance: 10 Km",
          "Highest Altitude: 14,100 ft.",
          "Visit Kaluvinayak Temple",
          "Steep trail",
          "Overnight stay in camps.",
        ],
      },
      {
        day: "Day 6",
        title: "Bhagwabasa to Roopkund and back to Bedni Bugyal",
        description: [
          "We wake up early in the morning and after having breakfast, we will push to our final destination - Roopkund. The path is easy but the high altitude makes it difficult to cover 5 Km to the Roopkund Lake at 16,000 ft. ",

          "As we reach the lake, and if you are lucky, you might be able to spot hundreds of human skeletons on the bed of the lake. It is believed that a king and his fellowmen were travelling to Nanda Devi but a hailstorm caused this devastation.",

          "From this point we walk further on a steep trail to reach Nanda Devi Temple. After spending some time at the temple, we will start descending back to Bhagwabasa. If you think it would be easier to descend than it was to ascend, then you are mistaken. Walk very slowly and carefully as the steep downward trail increases the chances of disbalance and falling down.",

          "This is one of the most difficult days of the Roopkund trek and we will be climbing down through Ghora Lotani all the way down to Bedni Bugyal. Overnight stay in camps.",
        ],
        briefOverview: [
          "Trekking Distance: 15 Km",
          "Highest Altitude: 16,000 ft.",
          "Overnight stay at Bedni Bugyal.",
        ],
      },
      {
        day: "Day 7",
        title: "Bedni bugyal to Loharjung",
        description: [
          "Today is the last day when you will have to walk on the Roopkund trek. It's another long day and we will retrace our steps back through the same trail we came from. Once again we will cross Neel Ganga through Wan village and back to Lohajung. The travelling distance is around 15 Km and a 10 hour walk.",
        ],
        briefOverview: [
          "Trekking Distance: 15 Km",
          "Trekking Time: 10 Hours",
          "Stay at Lohajung.",
        ],
      },
      {
        day: "Day 8",
        title: "Loharjung to kathgodam",
        description: [
          "Today is the last day of the Roopkund trek. The drive from Lohajung will take you back to Kathgodam and you will be dropped at the railway station. The 210 Km long drive will take 10 hours to complete.",
        ],
        briefOverview: [
          "Driving Distance: 210 Km",
          "Driving Time: 10 Hours",
          "Drop off at Kathgodam Railway Station.",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "You can take a flight from Delhi to Dehradun. From Dehradun, you can take a train to Kathgodam or drive there. The Naini Jan Shatabdi leaves at 3:45 pm, and the Kathgodam Express leaves at 11:25 pm. From Kathgodam, you can take a taxi to Lohajung, which is the base camp. The taxi journey takes approximately 7 hours and 45 minutes.",

      byTrain: [
        {
          name: "Ranikhet Express",
          trainNo: 15013,
          departure: "10:40 PM",
          arrival: "5:30 AM",
          additionalInfo:
            "Takes approximately 7 hours, 45 minutes by taxi from Kathgodam to Lohajung.",
        },
        {
          name: "Uttar Sampark Kranti Express",
          trainNo: 15035,
          departure: "4:00 PM",
          arrival: "10:40 PM",
          additionalInfo:
            "Takes approximately 7 hours, 45 minutes by taxi from Kathgodam to Lohajung.",
        },
      ],

      byBus: [
        {
          type: "text",
          content:
            "Regular buses leave from ISBT Delhi Anand Vihar Station for Nainital. These are government buses that are punctual and trustworthy.",
        },
        {
          type: "text",
          content:
            "Get down at the Haldwani railway station and take a taxi from there to Lohajung. Haldwani Railway Station is only 4 km from Kathgodam Railway Station.",
        },
        {
          type: "header",
          content: "Reaching Lohajung by Bus",
          subitems: [
            "From Haldwani Railway Station, take a taxi to Lohajung. The taxi journey takes approximately 7 hours and 45 minutes.",
          ],
        },
      ],
    },
    essentials: [
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
          "Walking stick (at least one advisable)",
          "Head torch - 1 Nos.",
          "Water bottle/Hydration pack - 2 bottles of one litre each",
          "Hydration pack users: 1 hydration pack + 1 litre bottle",
          "Carry at least one thermos flask",
          "Snacks: Energy bars, dry fruits, electral/ORS",
        ],
      },
      {
        category: "Personal Medical Kit",
        items: ["Consult your doctor"],
      },
      {
        category: "Clothing",
        items: [
          "2 Full sleeves T-shirts (non-cotton)",
          "1 Fleece T-shirt",
          "1 Fleece jacket (alternative: woollen sweater)",
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
          "1 Neck gaiter",
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
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation: Home stay, Camping",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek Leader, guide, and Support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the inclusions",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. If you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance:
              "INR 1200/- if you make an online payment, 10 days in advance",
            onSpot: "INR 1500/- if you inform us after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs. Backpack should have a waterproof cover. Suitcases/strolleys/bags will not be allowed.",
          },
        },
      ],
    },
    importantNotes: [],
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Valley of flowers",
    title: "Valley of flowers - Walk The Medows",
    tourCode: "122132138",
    price: "₹  8,999",
    mapImg: "",
    overview: {
      title: "Valley of flowers Overview",
      paragraphs: [
        "The Valley of Flowers trek is one of the most beautiful treks in India. It is located on the way to Hemkund Sahib in the Govind Ghat region. Hemkund Sahib is an important pilgrim location for both Sikh & Hindu religion. Hemkund is a lake situated at a high altitude of 4,392 m and there is a Gurudwara and a temple of Lord Lakshman built on the banks of the lake. It is believed that Guru Govind Singh, the tenth guru of Sikhs meditated on the bank of this lake.",
        "The Blue Primula, which is one of the most beautiful Himalayan flowers, can be spotted growing wild all over the valley of flowers. The best time to visit this picturesque Valley of Flowers is during the months of July & August.",
      ],
    },
    duraton: "6 Days",
    distance: "37 km",
    altitude: "14,100",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Chamoli",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung",
        description: [
          "Govind Ghat is the base camp for valley of flowers trek and Hemkund Sahib, being an important pilgrim location, Govind Ghat is visited by thousands of devotees each year. You will be picked up from Haridwar Railway Station and are expected to arrive during the evening. The 290 Km journey will take around 10 hour to complete. Upon arrival, overnight stay will be at the guest house.",
        ],
        briefOverview: [
          "Driving Distance - 290 Km",
          "Driving Time - 10 Hours",
          "Max Altitude - 6,700 ft.",
          "Network - Available",
          "Stay at the Guest House",
        ],
      },
      {
        day: "Day 2",
        title: "Govindghat to Ghangaria via Pulna & Govind ghat",
        description: [
          "Our first destination for today will be Pulna which is located at a distance of 4 Km from Govind Ghat. Porters and ponies can be hired from Pulna for the trek. Beyond Pulna we will walk along the Lakshman Ganga river, walking on a stone-paved gradually ascending path.",

          "The trail is full of majestic views of mountains, waterfalls and water streams. The trail at the end gets much steeper and harder as we close on our final destination of the day towards Ghangharia about 9 Km away from Pulna.",
        ],
        briefOverview: [
          "Trekking Distance - 13 Km",
          "Trekking Time - 5 Hours",
          "Network - BSNL",
          "Stay at Guest House",
        ],
      },
      {
        day: "Day 3",
        title: "Ghangaria - Hemkund Sahib - Ghangaria.",
        description: [
          "Today is an exciting day as we are scheduled to visit the highest Gurdwara in the world - Hemkund Sahib at an altitude of 4,330 m. Ghangaria is the base camp for both Hemkund Sahib and the valley of flowers. We will be trekking up to Hemkund Sahib and coming back to Ghangaria which will take about 10 hours.",

          "We will start walking early in the morning amidst the panoramic views of mountain ranges and cross a melting glacier which has laid frozen for years. After we reach the Hemkund Sahib Gurudwara, you will be able to spot the famous Hemkund Lake, which remains frozen almost half of the year. After spending some time at the Gurudwara we will be heading back to Ghangaria",
        ],
        briefOverview: [
          "Trekking Distance - 4km",
          "Trekking Time - 10 hours",
          "Max Altitude - 11,500 ft.",
          "Overnight stay at the guest house",
        ],
      },
      {
        day: "Day 4",
        title: " Ghangaria - Valley of Flowers - Ghangaria",
        description: [
          "Govind Ghat is the base camp for valley of flowers trek and Hemkund Sahib, being an important pilgrim location, Govind Ghat is visited by thousands of devotees each year. You will be picked up from Haridwar Railway Station and are expected to arrive during the evening. The 290 Km journey will take around 10 hour to complete. Upon arrival, overnight stay will be at the guest house.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km",
          "Trekking Time - 8 Hours",
          "Max Altitude - 14,100 ft.",
          "Overnight stay at guest the house",
        ],
      },
      {
        day: "Day 5",
        title: "Ghangaria - GovindGhat",
        description: [
          "Today we will be trekking back to Govind Ghat form Ghangaria. 13 Km trek will take around 5 hours. Since we will be spending the day at Govind Ghat, you have an option to hire a cab and visit the Badrinath Temple which is located at a distance of 25 km from Govind Ghat and the taxi will take about 1 hour to reach.",
        ],
        briefOverview: [
          "Trekking Distance - 13 km.",
          "Trekking Time - 5 hours",
        ],
      },
      {
        day: "Day 6",
        title: "Departure Day",
        description: [
          "Today is the last day of the valley of flowers trek. We will be driving back the same route 290 Km back to Haridwar railway station where you will be dropped.",
        ],
        briefOverview: ["Driving Distance - 290 Km", "Driving Time - 10 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun serves as the nearest airport to Haridwar. Direct flights from Mumbai and Delhi, as well as connecting flights from other cities, are available. Local transportation is available from the airport to reach Haridwar by road from Dehradun.",

      byTrain: [
        {
          name: "Haridwar Railway Station",
          description:
            "Haridwar has its own railway station, connecting it well to major cities like Delhi, Kolkata, Mumbai, Dehradun, Jaipur, Ahmedabad, Patna, Gaya, Varanasi, Bhubaneswar, Puri, and Kochi through various express trains.",
        },
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
        },
      ],

      byBus: [
        {
          type: "text",
          content:
            "Haridwar is accessible by road from Delhi, Haryana, UP, Punjab, and other parts of Uttarakhand. A number of state and private buses connect Haridwar to these locations with frequent, economical services.",
        },
        {
          type: "text",
          content:
            "For visitors traveling to Dehradun, regular buses are available from Delhi’s ISBT Kashmere Gate. We recommend choosing government buses from ISBT Kashmere Gate, as private buses operating from outside ISBT may be less reliable.",
        },
        {
          type: "header",
          content: "Travel from Dehradun to Sankri",
          subitems: [
            "THE CRAZY MOUNTAINEERS will arrange a Tata Sumo or similar vehicle to pick you up from Dehradun Railway Station at 6:00 AM.",
            "The pick-up is included in the trek cost.",
            "You will reach Sankri by approximately 5:00 PM.",
          ],
        },
        {
          type: "text",
          content:
            "Note: Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Deoria Tal Chopta Chandrashila Trek",
    title: "Deoria Tal Chopta Chandrashila Trek : Best Trek For Bird Watchers",
    tourCode: "122132139",
    price: "₹ 8,999",
    mapImg: "",
    overview: {
      title: "Deoria Tal Chopta Chandrashila Trek",
      paragraphs: [
        "Deoria Tal - Chopta Chandrashila trek is a very beautiful trek in India that any trekking lover would like to do. Especially for those who are beginners and would like to embark on the magnificent Himalayan treks. You get everything that you are looking for from the Garhwal Himalaya range out of this Deoria - Chandrashila trek. Therefore, if you see Deoria - Chandrashila as a wintry trek, you will be amazed to see such a pretty campsite view that is surrounded by an alluring lake, snow-capped Himalayan towering mountains just lying right before you.",

        "This Chandrashila trek can be a milestone journey of your life, located at a height of about 4000 m. The Tungnath temple is a center of attraction of Chandrashila trek, situated at the top. When you pass through Rohini Bugyal clearing in the middle of the forest, it stops you from moving to see such a beautiful landscape view. Alongside, when you reach up to the Birugali campsite, you get to see the snow line with the colorful wintry landscape. Reaching an altitude of 2438 meters, you get a chance to relish the charming beauty of Deoria Tal lake. In the forest trail from Deoria to Bhrujgali, you see a different variety of trees across the dense forest, moss-covered trails, and grassland.",

        "If you are a bird lover, then definitely this place will attract you a lot because this place is full of chirping of many birds. Sometimes you even do not get the voices of people standing nearby to you due to birds’ sounds. A five-day Deoriatal Chandrashila Trek has great things to offer you, whether seeing the real beauty of the Himalayan peaks that protect hamlets and ridges or a mesmerizing sunrise view from the top of the summit.",

        "A combination of Deoria Chandrashila is something that you look out for the adventurous and enthralled trek. Finally, climbing through the snow you reach the top of Chandrashila. The Sunrise view from the top is outstanding.",

        "Also, you can enjoy the picturesque sight view from Chandrashila peak of other peaks including Mt. Chaukhamba, Mt. Neelkantha, Mt. Bhagirathi, Mt. Trishul, and Mt. Maiktoli. When you see Mt. Nanda Devi, which is the highest summit with an altitude of 25,646 feet (7,817 meters), probably you get stunned after seeing the wonderful scenic view.",

        "The best time for doing the Chandrashila trek is winter because you get more things to experience. For snow trek, mid-December to the end of December. Try to ignore starting January to end February due to heavy snowfall. Then you can take a start from mid-March to the end of April still the snow is fully covering the landscape. The fabulous summit view is just breathtaking and you cannot stop yourself from capturing this great panorama.",
      ],
    },
    duraton: "",
    distance: "30 km",
    altitude: "13,100",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Rudraprayag",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Drive Haridwar-Sari",
        description: [
          "You are expected to reach Haridwar Railway Station at 8 am in the morning, from there you will be picked up by our tour guide. It is advised to reach a day before the trek starts in order to avoid any last-minute hassle. In the morning, we will leave for Sari village, which will take about 8 to 9 hours. The route is full of the beauty of the lower Garhwal Himalayas. We will cross the famous Devprayag where the Alaknanda and Bhagirathi rivers meet.",

          "Driving further from Devprayag, we will reach Sari village by late evening. The village has a picturesque view with small houses and patches of green agricultural fields and mountains in the background. You can check out the local market at Sari for any last-minute shopping.",
        ],
        briefOverview: [
          "Location Dehradun ISBT",
          "Pick Up Time 8:00 am",
          "Distance 220 km",
          "Driving Time 8 hours",
          "Altitude 6,600 ft",
          "Network Availability Available till Sari",
        ],
      },
      {
        day: "Day 2",
        title: "Sari to Deoriatal",
        description: [
          "The first day we start off the trek on an easy trail with a mix of ascents and descents. The trail is well defined with rocks. At the end of the trail, you will be able to clearly see the Chandrashila peak and Tungnath temple. From here the trail becomes steep and a bit difficult, this will be your first challenge. As we keep walking we will reach the Forest Department resting spot and depending on the time we have in hand we can rest here for a while.",

          "Continuing on the trail we will walk into a beautiful forest of rhododendrons, this is going to be a memorable experience, we will soon reach Deoria Tal. We will reach Deoria Tal by late afternoon and will be spending the night at the camps.",
        ],
        briefOverview: [
          "Trekking Distance - 13 Km",
          "Trekking Time - 5 Hours",
          "Network - BSNL",
          "Stay at Guest House",
        ],
      },
      {
        day: "Day 3",
        title: "Ghangaria - Hemkund Sahib - Ghangaria.",
        description: [
          "Today is an exciting day as we are scheduled to visit the highest Gurdwara in the world - Hemkund Sahib at an altitude of 4,330 m. Ghangaria is the base camp for both Hemkund Sahib and the valley of flowers. We will be trekking up to Hemkund Sahib and coming back to Ghangaria which will take about 10 hours.",

          "We will start walking early in the morning amidst the panoramic views of mountain ranges and cross a melting glacier which has laid frozen for years. After we reach the Hemkund Sahib Gurudwara, you will be able to spot the famous Hemkund Lake, which remains frozen almost half of the year. After spending some time at the Gurudwara we will be heading back to Ghangaria",
        ],
        briefOverview: [
          "Trekking Distance - 4km",
          "Trekking Time - 10 hours",
          "Max Altitude - 11,500 ft.",
          "Overnight stay at the guest house",
        ],
      },
      {
        day: "Day 4",
        title: " Ghangaria - Valley of Flowers - Ghangaria",
        description: [
          "Govind Ghat is the base camp for valley of flowers trek and Hemkund Sahib, being an important pilgrim location, Govind Ghat is visited by thousands of devotees each year. You will be picked up from Haridwar Railway Station and are expected to arrive during the evening. The 290 Km journey will take around 10 hour to complete. Upon arrival, overnight stay will be at the guest house.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km",
          "Trekking Time - 8 Hours",
          "Max Altitude - 14,100 ft.",
          "Overnight stay at guest the house",
        ],
      },
      {
        day: "Day 5",
        title: "Ghangaria - GovindGhat",
        description: [
          "Today we will be trekking back to Govind Ghat form Ghangaria. 13 Km trek will take around 5 hours. Since we will be spending the day at Govind Ghat, you have an option to hire a cab and visit the Badrinath Temple which is located at a distance of 25 km from Govind Ghat and the taxi will take about 1 hour to reach.",
        ],
        briefOverview: [
          "Trekking Distance - 13 km.",
          "Trekking Time - 5 hours",
        ],
      },
      {
        day: "Day 6",
        title: "Departure Day",
        description: [
          "Today is the last day of the valley of flowers trek. We will be driving back the same route 290 Km back to Haridwar railway station where you will be dropped.",
        ],
        briefOverview: ["Driving Distance - 290 Km", "Driving Time - 10 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport in Dehradun serves as the nearest airport to Haridwar, located about 48 km away. Direct flights from Mumbai and Delhi, as well as connecting flights from other cities, are available. Daily flights from Delhi are available. We recommend reaching Haridwar a day early if coming by flight. Local transportation is available from the airport to reach Haridwar by road from Dehradun.",
      byTrain: [
        {
          name: "Haridwar Railway Station",
          description:
            "Haridwar has its own railway station, connecting it well to major cities like Delhi, Kolkata, Mumbai, Dehradun, Jaipur, Ahmedabad, Patna, Gaya, Varanasi, Bhubaneswar, Puri, and Kochi through various express trains. An excellent rail network connects Haridwar to important cities like Delhi, Mussoorie, Mumbai, Varanasi, Lucknow, and Kolkata.",
        },
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
          from: "Delhi",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
          from: "Chennai",
        },
        {
          name: "Doon Express",
          trainNo: 13009,
          from: "Kolkata",
        },
        {
          name: "Dehradun Express",
          trainNo: 19019,
          from: "Mumbai",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Haridwar is accessible by road from Delhi, Haryana, UP, Punjab, and other parts of Uttarakhand. A number of state and private buses connect Haridwar to these locations with frequent, economical services.",
        },
        {
          type: "text",
          content:
            "For visitors traveling to Dehradun, regular buses are available from Delhi’s ISBT Kashmere Gate. We recommend choosing government buses from ISBT Kashmere Gate, as private buses operating from outside ISBT may be less reliable. Buses usually drop you at Haridwar bus station, from where you can go to Haridwar Railway Station.",
        },
        {
          type: "header",
          content: "Travel from Dehradun to Sankri",
          subitems: [
            "THE CRAZY MOUNTAINEERS will arrange a Tata Sumo or similar vehicle to pick you up from Dehradun Railway Station at 6:00 AM.",
            "The pick-up is included in the trek cost.",
            "You will reach Sankri by approximately 5:00 PM.",
          ],
        },
        {
          type: "header",
          content: "Travel from Haridwar to Sari Village",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Haridwar Railway Station at 6:00 AM.",
            "The pick-up is included in the trek cost.",
            "You will reach Sari village by approximately 3:00 PM.",
          ],
        },
        {
          type: "text",
          content:
            "Note: Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Kuari Pass Trek",
    title: "Kuari Pass Trek - Lord Curzon Trail",
    tourCode: "122132140",
    price: "₹ 10,500",
    mapImg: "",
    overview: {
      title: "Kuari Pass Trek",
      paragraphs: [
        "The Kuari Pass trek route was explored and popularized by Lord Curzon. From the Kuari top, you can spot the famous seven-thousander peaks like Mount Kamet, Trishul, Chaukhamba, and the divine Nanda Devi, to name a few. The Kuari Pass trek gives you an opportunity to view these mountains and others around from a single spot.",

        "The trek starts from Joshimath, which is located in the Chamoli district in the state of Uttarakhand. Walking through the small villages on Lord Curzon’s trail gives you an opportunity to learn about the daily routine and lives of people who live in this remote location. On the Kuari Pass Trek, you will be able to view a variety of changing landscapes, from walking through the dense forest of Oak and Deodar trees to the vast green meadows known as bugyals—everything at one place.",
      ],
    },
    duration: "",
    distance: "33 km",
    altitude: "12,763",
    Grade: ["Easy"],
    location: {
      state: "Uttarakhand",
      region: "Chamoli",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Haridwar to Joshimath",
        description: [
          "You are expected to reach Haridwar Railway Station at 8 am in the morning, from there you will be picked up by our tour guide. It is advised to reach a day before the trek starts in order to avoid any last-minute hassle. In the morning, we will leave for Sari village, which will take about 8 to 9 hours. The route is full of the beauty of the lower Garhwal Himalayas. We will cross the famous Devprayag where the Alaknanda and Bhagirathi rivers meet.",

          "Driving further from Devprayag, we will reach Sari village by late evening. The village has a picturesque view with small houses and patches of green agricultural fields and mountains in the background. You can check out the local market at Sari for any last-minute shopping.",
        ],
        briefOverview: [
          "Driving Distance: 256 km",
          "Driving Time: 10 hours",
          "Max Altitude: 6,725 ft",
          "Network: Available",
          "Overnight Stay: Guest House",
        ],
      },
      {
        day: "Day 2",
        title: "Joshimath – Gulling Top",
        description: [
          "After having breakfast in the morning, we will be driving to Dhak village, which is approximately 12 km away from Joshimath and takes one hour to reach there. Dhak is the village from where the actual trek begins, and we start walking on a gradually ascending muddy trail.",

          "The land here is rough, and apart from the terrace farming, it is hard to find any greenery. On the trail, you will also be able to view the Vishnugad-Tapovan Hydroelectric Power Station built on the river Dhauli-Ganga. Soon, we will cross the Kharchi village on our way to the Upper Tugasi region.",

          "As we keep walking away from the farmlands in the Upper Tugasi region, you will be able to spot the Dronagiri Peak rising up at a distance ahead of us. Soon we will reach our campsite for today at Gulling village, where we will be spending the night.",
        ],
        briefOverview: [
          "Driving Distance: 12 km",
          "Driving Time: 1 hour",
          "Trekking Distance: 6 km",
          "Trekking Time: 4 hours",
          "Max Altitude: 9,600 ft",
        ],
      },
      {
        day: "Day 3",
        title: "Gulling Top to Tali Forest Camp",
        description: [
          "Today we will be heading towards Tali Forest Camp, the trail is a gradually ascending trail which is easier than the previous day and makes for a very enjoyable hiking experience. We will start off with walking deeper into the jungle of Tali.",
          "On the way will be crossing dense forests of Oak and Rhododendrons with some clearings boasting the magnificent views of the nearby mountains. If you are visiting during the winters, you will find a white sheet of snow covering every inch of the ground with tall trees growing. As we keep walking further, we will reach the second campsite of the trek for night stay.",
        ],
        briefOverview: [
          "Trekking Distance: 4 km",
          "Trekking Time: 5 hours",
          "Max Altitude: 11,070 ft",
          "Overnight Stay: Camps",
        ],
      },
      {
        day: "Day 4",
        title: "Tali forest camp to Kuari pass and back via Khullara top",
        description: [
          "The fourth day of the Kuari Pass Trek is the summit day and is going to be a long day as we have to trek 15 Km which will take around 10 hours. There are no sources of water on the trail, make sure to carry enough.",
          "We will start by walking towards the first destination of the day - Khullara top which is at a distance of about 3 Km. We will be trekking on a strenuous path which becomes more challenging during the winter season when it remains covered with snow.",
          "At the Kuari Top, you will be able to spot the magnificent Garhwal peaks Kedarkantha, Chaukhambha, Balakun, Neel Kantha, Nanda Devi, Changabang, Nanda Ghunti and others.",
        ],
        briefOverview: [
          "Trekking Time - 10 Hours",
          "Trekking Distance - 15 Km",
          "Max Altitude - 12,763 ft.",
          "Stay in Camps",
        ],
      },
      {
        day: "Day 5",
        title:
          "Tali forest camp - Joshimath via Gurson bugyal (11150 ft) and Auli (9680 ft)",
        description: [
          "Today is going to be a very exciting day as we are scheduled to visit one of the most famous destinations of south Asia also known as the skiing capital of India - Auli. We will walk through the mesmerizing valley of Gorson Bugyal. ",
          "The beauty of Auli is breathtaking and leaves its onlookers spellbound. Lot of people visit Auli every year in March to enjoy skiing. Upon our arrival at Auli, we will spend some time at the location and take a cable car back to Joshimath.",
        ],
        briefOverview: [
          "Trekking Distance - 13 Km",
          "Trekking Time - 7 Hours",
          "Max Altitude - 11,150 ft.",
        ],
      },
      {
        day: "Day 6",
        title: "Joshimath to Haridwar",
        description: [
          "Day six marks the last day of Kuari Pass Trek, we will leave early in the morning and are expected to reach Haridwar by evening. The 256 km long ride will take approximately 10 hours.",
        ],
        briefOverview: [
          "Driving Distance - 256 Km",
          "Driving Time - 10 Hours",
          "Drop off at Haridwar Railway Station",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 48 km from Haridwar. There are daily flights from Delhi to Dehradun. We recommend reaching Haridwar a day early if coming by flight.",

      byTrain: [
        {
          name: "Haridwar Railway Station",
          description:
            "Haridwar has its own railway station, connecting it well to major cities like Delhi, Kolkata, Mumbai, Dehradun, Jaipur, Ahmedabad, Patna, Gaya, Varanasi, Bhubaneswar, Puri, and Kochi through various express trains. An excellent rail network connects Haridwar to important cities like Delhi, Mussoorie, Mumbai, Varanasi, Lucknow, and Kolkata.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Haridwar is accessible by road from Delhi, Haryana, UP, Punjab, and other parts of Uttarakhand. A number of state and private buses connect Haridwar to these locations with frequent, economical services.",
        },
        {
          type: "text",
          content:
            "There is a regular bus service from Delhi to Haridwar, departing from Delhi’s ISBT Kashmere Gate. Buses usually drop you at Haridwar bus station, from where you can go to Haridwar Railway Station.",
        },
        {
          type: "header",
          content: "Travel from Haridwar to Sari Village",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Haridwar Railway Station at 6:30 AM.",
            "The pick-up is included in the trek cost.",
            "You will reach Sari village by approximately 3:00 PM.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Bhekal Tal Brahmatal Trek",
    title: "Brahmatal Trek - Best Winter Trek For Snow Lovers",
    tourCode: "122132141",
    price: "₹ 8,999",
    mapImg: "",
    overview: {
      title: "Kuari Pass Trek",
      paragraphs: [
        "Bhekal Tal - Brahmatal trek is quite popular amongst the winter treks in India. Most probably, if you really love to see a clearing and the entire range of mountains, then Bhekal tal - Brahmatal trek is the right trek for you to make a milestone journey in your life. Basically, Bhekal tal is located 8 km. away from the base camp Lohajung, this place falls in Dewal block of Chamoli district of Uttarakhand.",
        "The trail goes across the beautiful century oak and rhododendron forest that capture bird’s eyes view all around you. Further, when your trek goes through Tilandi base camp to Jhandi top summit you can see the magnificent range of towering mountains laying a carpet of whitish snow including a huge range of massive Trishul mountains and Nanda Ghunti peak. In fact, you can also explore your expedition with the other side of the valley having lovely tiny villages such as Wan, Ratgaon, and much more. You can also see a ridge Ronti Saddle that connects Mt. Trishul and Mt. Nanda Ghunti from the Roopkund top.",
        "During this trek, you can enjoy the picturesque view of two lakes, due to minus degree temperature, the lake completely freezes. When you walk through the trail in the middle of the fully snow-covered landscape, your life comes alive to see this magnificent sight view. During winters, the snow is at its peak, which makes this trek moderate level.",
        "This trek can be done throughout the year. You can make a visit here from March to April where you see a pink flowery roof over the tree. Also, if you visit here in winters, you behold a view of a white carpet of snow.",
      ],
    },
    duration: "",
    distance: "24 km",
    altitude: "12,100",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Kanthgodam, Haldwani",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Lohajung",
        description: [
          "You will be picked up by The Crazy Mountaineers from Kathgodam Railway station early in the morning, you can book an overnight train from Delhi to Kathgodam.",
          "From Kathgodam, we begin a 10 hour uphill drive to Lohajung, passing through the lower mountain belt of Kumaon hills to Garhwal. In spite of a long drive, the views will keep you spell bound throughout. We will be driving parallel to the Kosi river.",
          "On our way, we will cross through the famous mountain towns of Bhimtal, Almora & kausani. As we reach closer to our destination of Lohajung you will be able to catch the breathtaking view of the Nanda Ghunti Peak. We will reach our destination early in the evening and overnight stay will be at a hotel. You can also check out the local Lohajung market for any last minute shopping of trek essentials that you might need.",
        ],
        briefOverview: [
          "Altitude 7,662 ft.",
          "Stay in guest house",
          "Drive 210 km (10 hrs drive)",
          "Local market and network is available",
          "Pick up time 06:00 am at the parking of Kathgodham railway station",
          "Route:- Kathgodam - Bheem Tal - Almora - Kausani - Gwaldam - Dewal - Lohajung.",
        ],
      },
      {
        day: "Day 2",
        title: "Lohajung to Bekaltal",
        description: [
          "We will begin trekking from Lohajung on a trail into the forest, after walking for a while we will reach the village of Mandoli. You can fill your water bottles here. The trail becomes interesting with gradual ascents and curves. Soon we will reach the confluence of Kali & Pindari rivers at Kali valley. Trekking further you will find yourself amidst Rhododendrons which grow here in the months of February & March.",
          "We will soon cross a wooden bridge which is built upon a flowing stream and can be used to refill our water bottles. Beyond this point is a place called Behum. The view from here is picturesque with vast bugyals visible at a distance. We will cross some more streams that are found in the area. After crossing the last stream and hiking for one more hour we will reach the Bekal Tal which remains frozen during the winter. Tonight we will be spending the night near Khopdaliya Lake.",
        ],
        briefOverview: [
          "9,690 ft, 4-5 hrs trek, 6 km",
          "One third of the trek through village and rest through frost",
          "Stay in tent",
          "Moderate level ascent through forest",
          "Hot lunch at camp",
          "Spring and manmade water points are available",
          "Go to Bekaltal lake for evening walk",
          "Bekaltal lake is 15 minutes walk from camp site",
        ],
      },
      {
        day: "Day 3",
        title: "Bekaltal to Brahmatal",
        description: [
          "Today we will be crossing the thick Oak & Rhododendrons forests on a steep trail. After walking for a while we will reach an open meadow called Telandi. During the winters this area is completely white covered with snow.",
          "The Tedaldi meadow will take you to a maximum height of 11,500 feet from where we will start descending towards Brahmatal. There is a small temple located over here walking down the slope of the temple we will reach the Brahmatal lake. Overnight stay at tents.",
        ],
        briefOverview: [
          "10,450 ft, 6 – 7 hrs trek, 7 km",
          "First 1.3 hours is steep ascent via Bekaltal Lake, then gradual ascent for few hours and at last steep descent and then gradual descent till camp site",
          "Hot lunch/packed lunch, depend on weather and snow condition",
          "No water points, its advisable to carry at least 2 liters of water",
          "Very scenic day, can see Shivalik and greater Himalayas both",
          "Go to Brahmatal lake for evening walk, 500 meter far from camp site",
          "Stay in tent",
        ],
      },
      {
        day: "Day 4",
        title: "Brahmatal to Tilbudi via Brahmatal Pass",
        description: [
          "We will be starting early in the Morning and will head towards Brahmatal Lake through the Rhododendron trees. On a bright day, the view over here is spellbinding and looks almost like a painting. After walking for some more time, you will reach a meadow crossing and start climbing towards the pass.",
          "The walk is a bit tiring but as soon as you reach the top, you will see the amazing view of Mount Nanda Ghunti & Mount Trishul. As we start descending the trail becomes a bit different from the top. You will be able to get a 180 degrees view of the amazing peaks of Mandi, Nilgiri, Mana, Haukambha, Neelkanth & others. After deciding for another hour we will reach a forest clearing surrounded by trees. We will spend the night here in the camps.",
        ],
        briefOverview: [
          "Trekking Time - 10 Hours",
          "Trekking Distance - 15 Km",
          "Max Altitude - 12,763 ft.",
          "Stay in Camps",
        ],
      },
      {
        day: "Day 5",
        title: "Tilbudi to Lohajung via Wan",
        description: [
          "After having breakfast, we will start descending towards Wan, a trail filled with Oak & Rhododendron trees. It is an amazing trail with many beautiful views. As we keep walking we will reach a water source at Chota Tilbundi.",
          "Walking for half more hour from here you will be able to view the Wan Village, and another half an hour will take you to the road from there The Crazy Mountaineers will arrange vehicles to take you to Lohajung.",
        ],
        briefOverview: [
          "Altitude: 11,250 ft. to 7,650 ft. via 8,000 ft.",
          "Time : 5-6 hours, 4 km trek + 1 hour drive to Lohajung",
          "Gradual and steep mixed descent",
          "You will find one spot to refill your water bottles",
          "Lunch on the way (packed lunch)",
          "Walking stick and knee cap will help a lot",
          "Stay in guest house",
        ],
      },
      {
        day: "Day 6",
        title: "Lohajung to Kathgodam",
        description: [
          "After spending the night at Lohajung we will leave for Kathgodam, you will be expected to reach the destination by late evening.",
        ],
        briefOverview: [
          "10 hrs drive",
          "Drive 210 km",
          "After morning tea move to Kathgodam (breakfast and lunch on the way)",
          "Reach Kathgodam by 6:00 pm",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 48 km from Haridwar. There are daily flights from Delhi to Dehradun. We recommend reaching Haridwar a day early if coming by flight.",
      byTrain: [
        {
          name: "Kathgodam Railway Station",
          description:
            "The Kathgodam station is one of the main stations in the district and is an old station with good connectivity to many places, including Lucknow, Delhi, and Howrah. Tickets from Delhi to Kathgodam by train cost around Rs. 180 for a second-class sleeper ticket and Rs. 450 for a third A/C sleeper ticket. It is essential to book tickets at least one month in advance as this route is always in demand.",
        },
        {
          name: "Ranikhet Express",
          trainNo: 5014,
          departure: "10:40 PM",
          arrival: "5:30 AM",
          from: "Delhi",
          description: "Overnight journey.",
        },
        {
          name: "Uttar Sampark Kranti",
          trainNo: 5035,
          departure: "4:00 PM",
          arrival: "10:40 PM",
          from: "Delhi",
          description: "Journey time: 6 hrs 40 min.",
        },
        {
          name: "Doon Express",
          trainNo: 4120,
          departure: "10:30 PM",
          arrival: "7:10 AM",
          from: "Dehradun",
          description: "Journey time: 8 hrs.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Regular buses ply from ISBT Delhi Anand Vihar station to Kathgodam. Buses that go to Nainital stop at Haldwani, which is a twin town of Kathgodam. The journey takes approximately 8 hours.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Haldwani bus station. From there, you have to travel to Kathgodam Railway Station, which is 4 km away.",
        },
        {
          type: "text",
          content:
            "We suggest you take only government buses from ISBT Anand Vihar, as private buses operating from outside ISBT may not be trustworthy.",
        },
        {
          type: "header",
          content: "Travel from Kathgodam to Sari Village",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Kathgodham Railway Station.",
            "The pick-up is included in the trek cost.",
            "You will reach Sari village by approximately 3:00 PM.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Bagini Glacier and Changbang Base Camp",
    title: "Bagini Glacier and Changbang Base Camp - View Of Colorful Meadows",
    tourCode: "122132142",
    price: "₹ 15,499",
    mapImg: "",
    overview: {
      title: "Bagini Glacier and Changbang Base Camp",
      paragraphs: [
        "Bagini Glacier & Changbang Base Camp trek is a moderate level trek of about 43 Km where you will have to cover 6-7 Km everyday. Located at a high altitude of 14,800 feet. Each year, this trek attracts a lot of adventure and thrill seekers towards itself. The trek begins at Joshimath which is located in the Tehri Garhwal region in the state of Uttarakhand.",
        "The Bagini Glacier melts down and forms the Bagini river, it flows north from Changabang & Trishuli Peaks from there it turns westward and and meets the water melting from the Dunagiri Glacier, finally merging into Dhauli Ganga, north of a village known as Jumma.",
      ],
    },
    duration: "",
    distance: "43 km",
    altitude: "14,816",
    Grade: ["Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Theri, Garhwal",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Haridwar to Joshimath",
        description: [
          "You will be picked up from Haridwar Railway Station in the morning and we will start driving towards our first destination at Joshimath. The 256 Km long ride will take around 10 hours to complete and you are expected to arrive at Joshimath by the time of evening tea. Overnight stay will be at the guest house.",
        ],
        briefOverview: [
          "Driving Distance - 256 Km",
          "Driving Time - 10 Hours",
          "Network - Available",
        ],
      },
      {
        day: "Day 2",
        title: "Joshimath to Jumma and trek to Ruing Village",
        description: [
          "The actual trek begins from a village known as Jumma which is at a distance of about 45 Km from Joshimath. Crossing many other villages on the way, we will be driving up to Jumma and will take 1 hour to reach there. If you want to buy some extra supplies for your trek, you can buy them at the Joshimath local market.",
          "Once we start walking, our destination for today, the Ruing Village will be 3 Km. away. The trail is slightly steep and will take you through the forest. The trek will take about 2 -3 hours before we reach the village. Overnight stay will be at camps.",
        ],
        briefOverview: [
          "Driving Distance - 45 Km.",
          "Driving Time - 1 Hour.",
          "Trekking Distance - 3 Km.",
          "Trekking Time - 2 to 3 Hours",
          "Max altitude - 9,180 m.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 3",
        title: "Ruing Village to Dronagiri Village",
        description: [
          "Today we will be leaving Ruing and walking towards Dronagiri village at a distance of 8 Km from Ruing. The trail is a well defined path crossing forests with slight ascend and descend on the route.",
          "After about 4 Km., the trail will become dusty and a bit harsh with a steep incline of about 70 degrees. This is a landslide prone zone so watch your step carefully on the slippery mud that is there due to many small streams crossing this path. Once we reach the top, you will find a paved path that will take us to the Dronagiri village. The view from up here is absolutely spellbinding and you will be able to spot the snowy tops of Hathi and Ghori Parvat.",
        ],
        briefOverview: [
          "Trekking Distance - 8 Km.",
          "Trekking Time - 9 Hours.",
          "Altitude: 11,845 ft",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Dronagiri village to Longatulli",
        description: [
          "Early in the morning we will leave from Dronagiri and our next destination will be Longatulli. The path from here is meandering with loops of gradual ascents and descents. This path will take us to a ridge and from there you will get the glimpse of Rishi Peak & Bagini Nala (Bagini River). There is almost no vegetation in this location, trekking further we will reach a green patch along the stream. We can choose to camp here for the day or walk another kilometer from here to reach Longatulli, which is another great camping location.",
        ],
        briefOverview: [
          "Trekking Distance - 6 Km.",
          "Trekking Time - 7 Hours",
          "Max Altitude - 14,710 ft.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: "Longatulli to Base Camp",
        description: [
          "Today after having breakfast we will trek 5 Km. towards the Bagini Base Camp. The hike would take about 4 hours to complete. The trail is rocky and difficult to navigate as the path is rocky & not well defined, so you need to carefully follow your trek leader. Soon, we will reach the Lower Bagini Base Camp. We can choose to camp here for the night or walk further up the mountains to Advanced Bagini Base Camp which will take another hour of our time.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km",
          "Trekking Time - 4 Hours",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 6",
        title:
          "Bagini Base camp to Bagini Glacier and Back to Base camp (10 kms trek)",
        description: [
          "We will be starting early in order to catch sunrise at the Chanabang Base Camp which is located at a distance of 4 Km. from the Advanced Bagini Base Camp. The trail is ascending and you will be able to spot glacial till all along the path. The view at the Chanabang Base Camp is absolutely mesmerizing which leaves its onlookers spellbound. You will be able to spot huge creavases in the Bagini Glacier and many tall seven-thousander peaks such as - Mount Trishul, Hardeul, Chanabang, Dunagiri and others.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km.",
          "Trekking Time - 8 Hours.",
          "Max Altitude - 14,815 ft.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 7",
        title: "Bagini Base camp to Dronagiri Village",
        description: [
          "After having breakfast early in the morning, we will retrace our steps back to Dronagiri village or Ruing Village as our next camping spot on our way back to Joshimath.",
        ],
        briefOverview: [
          "Trekking Distance - 18 Km",
          "Trekking Time - 11 Hours",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 8",
        title: "Dronagiri Village to Joshimath",
        description: [
          "Today we will be making our way back to Joshimath. After trekking 3 Km in about 2-3 hours, we will reach Jumma village where a vehicle waiting for you will take you back to Joshimath.",
        ],
        briefOverview: [
          "Trekking Distance - 45 Km",
          "Driving Time - 1 Hour.",
          "Trekking Distance - 3 Km.",
          "Trekking Time - 2 to 3 Hours",
          "Overnight stay at Guest House",
        ],
      },
      {
        day: "Day 9",
        title: "Joshimath to Rishikesh",
        description: [
          "Today is the last day of the trek and we will be driving back to Haridwar, 296 Km drive will take 11 hours and you will be dropped at Haridwar Railway Station.",
        ],
        briefOverview: [
          "Driving Distance - 296 Km.",
          "Driving Time - 11 Hours",
          "Drop off at Haridwar Railway Station",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 48 km from Haridwar. There are daily flights from Delhi to Dehradun. We recommend reaching Haridwar a day early if coming by flight.",
      byTrain: [
        {
          name: "Haridwar Railway Station",
          description:
            "Haridwar has an excellent rail network connecting it to important cities like Delhi, Mussoorie, Mumbai, Varanasi, Lucknow, and Kolkata.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Haridwar, departing from Delhi ISBT Kashmere Gate. We recommend taking only government buses from ISBT Kashmere Gate, as private buses operating from outside ISBT may not be trustworthy.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Haridwar bus station. From there, you will need to travel to Haridwar Railway Station.",
        },
        {
          type: "header",
          content: "Travel from Haridwar Railway Station to Sari Village",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Haridwar Railway Station at 6:30 AM.",
            "The pick-up is included in the trek cost.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Panchachuli Base Camp Trek",
    title: "Panchachuli Trek - Panchachuli Glacier",
    tourCode: "122132143",
    price: "₹ 30,499",
    mapImg: "",
    overview: {
      title: "Panchachuli Base Camp Trek",
      paragraphs: [
        "Panchachuli Base Camp Trek is a 60 Km long trek that starts from Dar and ends at Panchachuli Glacier. The trek is a rich mix of snow capped mountains, vast meadows, beautiful sceneries including a wide variety of flora & fauna. The Panchachuli Glacier is located in the Kumaon himalayan range of the Darma Valley near the tibetian and nepaleese borders.",
        "The trail will take you through thick forests of Deodar and Coniferous trees, across meadows, crossing narrow streams and through the tribal villages of Bongling ,Sela ,Nagling, Baaling and Duktu. The Panchachuli Base Camp trek is graded from easy to moderate level difficulty and takes 10 Days to complete.",
      ],
    },
    duration: "9 Days",
    distance: "61 km",
    altitude: "13,975",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Kanthgodam, Haldwani",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Kathgodam to Dharchula 9hrs. (290km).",
        description: [
          "The first day of the Panchachuli Base Camp trek is a picturesque 290 Km ride through the Pithoragarh district Uttarakhand crossing the towns of Bhimtal, Almora, Sera-Gat and others on the way. Dharchula is an isolated remote village located in a valley surrounded by snow capped mountains. We are expected to arrive at Dharchula by evening and overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Distance - 290 Km",
          "Driving Time - 9 Hours",
          "Overnight stay at a guest house",
        ],
      },
      {
        day: "Day 2",
        title: "Dharchula - Dar - Urthing.",
        description: [
          "We will start from Dharchula and take a 3 hour drive to Dar, crossing small tribal settlements of Tawaghat and New Sobla. From Dar, we will start trekking along narrow cliffs with river Dhauliganga flowing by your side. It will take a 3 - 4 hours walk to reach our campsite for today at Urthing. After crossing the Bongling village the trail will level out and take us to the campsite. Overnight stay will be at camps.",
        ],
        briefOverview: [
          "Driving Time - 3 Hour.",
          "Trekking Time - 4 Hours",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 3",
        title: "Urthing - Naagling.",
        description: [
          "Today is going to be an easy day with mostly slightly ascending and descending trails. We will be crossing green pasture lands that are used by local animals for grazing and you will be able to view river Dhauligangna flowing below through the gorges. The trail will open up into a vast green meadow and will use a bridge to cross the river which will take us to the outskirts of Naagling. Overnight stay will be at camps along the river.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km.",
          "Trekking Time - 4 Hours.",
          "Night stay at tents",
        ],
      },
      {
        day: "Day 4",
        title: "Naagling - Son",
        description: [
          "In the morning, we will start walking towards our next destination - Son. Son is a picturesque, sparsely populated area in the Darma Valley. The trail in the beginning of today's trek is a bit tricky as we will have to walk on rocky terrain for the first 3 kilometers. After that you will enter a dense forest of Oak & Birch trees, as we keep walking through the forest, we will enter a small clearing and you will be able to spot many exciting sights of the Himalayan ranges and distant glaciers. ",
          "Walking for another three kilometers across tribal settlements and vegetation lands will take us to Son & we will be camping here for tonight.",
        ],
        briefOverview: [
          "Trekking Distance - 11 Km.",
          "Trekking Time - 5 Hours",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: "Son – Panchchuli Base Camp",
        description: [
          "The most awaited day of the trek has finally arrived and today we will be trekking towards Panchachuli Base Camp. The trail to the base camp is a steep descent on a narrow trail that will take you through forest cover along the Meola river.",
          "This is the most picturesque part of the trek as you will find yourself walking along the dense forest of Birch on one side and stretches of beautiful bugyals on the other. On the final part of the trail you will spot wild flowers and strawberries growing on either side of the trail. ",
          "The view at the Panchachuli Base Camp is absolutely breathtaking, looking at the forests and meadows with the mighty Panchahchuli (6,905 m. / 22,650 ft.) rising high in the background leaves the onlookers spell bound.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km",
          "Trekking Time - 3 Hours",
          "Max Altitude - 4,260 m",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 6",
        title: "Panchachuli Base Camp- Naagling.",
        description: [
          "We will wake up early in the morning to have breakfast and start walking as It is going to be a long day today. We will be trekking 16 Km. back to Nagling. The trail is an easy downward descent so it should not be a problem. Dinner & night stay will be at camps in Nagling.",
        ],
        briefOverview: [
          "Trekking Distance - 16 Km.",
          "Trekking Time - 11 Hours.",
          "Night stay in tents",
        ],
      },
      {
        day: "Day 7",
        title: "Naagling to Urthing",
        description: [
          "Today we will be walking for 10 Km back to Urthing from Nagling. It will take about 4 hours and we will spend the night in tents.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km",
          "Trekking Time - 4 Hours",
          "Night stay in camps",
        ],
      },
      {
        day: "Day 8",
        title: "Urthing to Dar drive back to Dharchula.",
        description: [
          "On the eighth day of the Panchachuli Base Camp Trek we will trek down to Sobla from Urthing and then drive to Dharchula for the night stay.",
        ],
        briefOverview: ["Trekking Time - 4 Hours", "Driving Time - 2 Hours"],
      },
      {
        day: "Day 9",
        title: "Dharchula to Kathgodam via Almora (8hrs.) 290kms",
        description: [
          "Today is the final day of the Panchachuli Base Camp Trek. The 295 Km long ride will take you back to Kathgodam. You are expected to arrive at Kathgodam railway station by evening so make your plans accordingly.",
        ],
        briefOverview: ["Driving Distance - 290 Km.", "Driving Time - 9 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byTrain: [
        {
          name: "Kathgodam Railway Station",
          description:
            "Kathgodam station is one of the main stations in the district with good connectivity to cities like Lucknow, Delhi, and Howrah.",
        },
        {
          name: "Ranikhet Express",
          trainNo: 5014,
          departure: "10:40 PM",
          arrival: "5:30 AM",
          from: "Delhi",
          journeyDuration: "Overnight Journey",
        },
        {
          name: "Uttar Sampark Kranti",
          trainNo: 5035,
          departure: "4:00 PM",
          arrival: "10:40 PM",
          from: "Delhi",
          journeyDuration: "6 hrs 40 min",
        },
        {
          name: "Doon Express",
          trainNo: 4120,
          departure: "10:30 PM",
          arrival: "7:10 AM",
          from: "Dehradun",
          journeyDuration: "8 hrs",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Regular buses ply from ISBT Delhi Anand Vihar station to Kathgodam. Buses that go to Nainital usually stop at Haldwani, which is a twin town of Kathgodam.",
        },
        {
          type: "text",
          content:
            "Buses generally take about 8 hours to reach Haldwani. Upon arrival, you will need to travel the remaining 4 km to Kathgodam Railway Station.",
        },
        {
          type: "header",
          content: "Transportation from Kathgodam Railway Station",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Kathgodam Railway Station.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Deoban Trek",
    title: "Deoban Trek - Rare Weekend Trek",
    tourCode: "122132144",
    price: "₹ 3,999",
    mapImg: "",
    overview: {
      title: "Deoban Trek",
      paragraphs: [
        "Deoban Trek is a rare weekend trek that will allow you to witness the sheer beauty of the Himalayas without going on long and high altitude trails. The highest point of the Deoban trek is at 3000m. From there you will be able to view around 50 high altitude mountain peaks which includes both six and seven thousanders.",
        "Deoban trek offers a great opportunity to working people who would love to get away and experience the beauty and calmness of nature during the weekends. This trek is quickly emerging as the most preferred weekend trek in Uttarakhand after the Nag Tibba Trek.",
        "The word Deoban means dense Deodar forests and hence you will find many Deodar trees on the trail. Located in Chakrata, the trail is covered with snow during the winter season and the camping ground provides a beautiful location to relax and unwind in nature.",
        "You will be able to view some of the peaks like Nanda Devi, Swargarohini, Bandarpoonch, Trishul, Kedarnath & many more.",
        "So, if you are short on time but still want to experience the beauty of the Himalayas, Deoban trek offers a perfect opportunity.",
      ],
    },
    duration: "2 Days",
    distance: "20 km",
    altitude: "9,850",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Dehradun",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title:
          "Drive from Dehradun to Lokhandi & Trek to Saraswati (Deoban Trek Itinerary)",
        description: [
          "You will be picked up in the morning from Dehradun railway station by the Crazy Mountaineers Team. The drive will take you through Chakrata, a famous hill station which used to be a cantonment area for the Britishers. On your way you will be able to view the beauty of nature and waterfalls.",

          "Drive from Dehradun to Lokhandi will take around 4 to 5 hours. Lokhandi is the base camp for Deoban trek. It is a beautiful village with picturesque views everywhere you look. The hike begins with walking on a paved road which enters the dense forest full of dodhar, pine and oak trees. If you are hiking during the winters, you will find this part of the forest completely covered with snow.",

          "The trail will slowly start getting steeper and we will reach the clearings of the Saraswati Campsite and stop for the night.",
        ],
        briefOverview: [
          "Pickup from Dehradun Railway Station",
          "Driving Distance: 90Km.",
          "Driving Time: 5 Hours",
          "Network: Limtied Availablity",
        ],
      },
      {
        day: "Day 2",
        title: "Saraswati to Vyas Point & to Koti Kansar, Drive to Dehradun",
        description: [
          "Today is going to be a long day as we push for the summit and return back. We will start walking after having an early breakfast. The trail is steep but it gradually loses gradient. Walking through the dense forest we will reach a clearing once again.",

          "From here you will be able to view the magnificent greater Himalayan peaks. The shining sun on these peaks leaves its viewers spell bound. After walking for 6 more km, we will reach the highest point of the trek called Vyas Shikhar at 3000m. From here you will be able to see the clear views of many majestic Himalayan peaks as mentioned before.",

          "After having lunch, we will start walking down to reach Koti Kansar. From there, The Crazy Mountaineers vehicle will pick you up to drop off at Dehradun.",
        ],
        briefOverview: [
          "Trekking Distance: 16Km",
          "Trekking Time: 6 hour",
          "Driving Distance: 110Km",
          "Driving Time: 5 Hours",
          "Network: Limited till Dehradun",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport serves Dehradun and is located about 25 km from the city. There are daily flights from Delhi to Dehradun.",
      byTrain: [
        {
          name: "Kathgodam Railway Station",
          description:
            "Kathgodam station is one of the main stations in the district with good connectivity to places like Lucknow, Delhi, and Howrah. Tickets from Delhi to Kathgodam cost around Rs. 150 for a second class sleeper ticket and Rs. 400 for a third A/C sleeper ticket. It's essential to book tickets at least one month in advance as this route is always in demand.",
        },
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
          from: "Delhi",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
          from: "Delhi",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from ISBT Kashmere Gate. We recommend taking only government buses from ISBT Kashmere Gate, as private buses operating outside ISBT may be less reliable.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "header",
          content: "Transportation from Dehradun Railway Station",
          subitems: [
            "THE CRAZY MOUNTAINEERS Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:30 AM.",
            "The pick-up is included in the cost of the trek.",
          ],
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "How can I reach Chakrata from Dehradun for Deoban?",
        answer:
          "The distance from Dehradun to Chakrata is about 90 Km. You can easily get a bus/taxi from Dehradun to reach Chakrata.",
      },
      {
        question: "How long is Deoban trek?",
        answer:
          "The trekking distance for Deoban trek is about 20 km and takes 2 days of time.",
      },
      {
        question: "What is the maximum altitude of Deoban trek?",
        answer:
          "The maximum altitude at Deoban trek is 9,200 ft. above sea level.",
      },
      {
        question: "Is Deoban trek easy?",
        answer:
          "It’s an easy weekend trek very popular among beginners in New Delhi & Uttarakhand who have their Saturdays and Sundays off.",
      },
      {
        question: "What month is best for Deoban trek?",
        answer:
          "You can visit this trek anytime of the year but generally the best time to visit is from May to October.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Bali Pass Trek ",
    title: "Bali Pass Trek - Edge Of Heaven",
    tourCode: "122132145",
    price: "₹ 18,999",
    mapImg: BalipassMap,
    overview: {
      title: "Bali Pass Trek ",
      paragraphs: [
        "Located at 16,200ft., for those who have been in the trekking circle for a while, Bali Pass trek needs no introduction, it is an amazing trek (pass) which crosses from Har Ki Dun Ruinsara Valley to Yamunotri Valley.",
        "The Bali Pass trek is for those who love nature & adventure and captures the complete attention of those who embark upon this journey. The grand aura & hype about the Bali pass trek gets a lot of trekkers exited & a lot of people have bail pass trek on the bucket list.",
        "This pass is an exhilarating trek that offers much more thrill & adventure than you can expect. The challenging snow covered trails make Bali pass one of the difficult treks.",
        "The picturesque views of the Debshu Bugyal meadows amidst of the Ruinsara forest, the majestic views of Mount Kala Nag & Swargarohini peaks makes it a bliss for trekkers to trek here.",
        "The high altitude snow adventure, the trek route & the snow ridges of this mesmerizing Bali pass and the feeling you get are unlike any other trek or pass & therefore many trekkers look forward to embark upon this journey.",
      ],
    },
    duration: "8 Days",
    distance: "60 km",
    altitude: "16,207",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Sankri",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        description: [
          "The Bali pass trek begins from the base village of Sankari. It is a small village located in the Govind Wildlife Sanctuary in the Uttarkashi district. The drive to sankari village is an adventure in itself, it will take you through the scenic beauty of the queen of mountains Mussoorie, Kempty fall waterfall, Nainbagh will surely take your breath away. Upon reaching Sankari in the evening you can see the evening sky form amazing sceneries and it provides a wonderful kickstart to the bali pass trek.",
        ],
        briefOverview: [
          "220 km drive - approx 10 hours",
          "Pick up time 06:00 am from Dehradun",
          "Expected arrival time to Sankri – 5:00 pm",
          "Keep original and copy of ID proof handy, have to show at the forest check post of Sankri",
          "Available network BSNL (erratic)",
          "Breakfast and lunch on the way to Sankri (not included in the cost)",
          "After Pulora, keep a warm jacket handy",
          "Local Market is available",
          "Last ATM at Pulora",
          "Dinner at guest house (included in the cost)",
          "Stay in Guest House (twin or triple sharing)",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Seema via Taluka",
        description: [
          "Early morning, after breakfast, we will get started with the trek and drive to Taluka. The actual Bali Pass trek starts from Taluka village. It is around a 12 km drive crossing the major streams, Bamboo & Deodar forests.",
          "Upon reaching Taluka, we start walking, the first step would be to descend down to the Supin river and start walking along the stream. After you cross 2 -3 wooden & cemented bridges, the path will start ascending gradually. Waling for about one more hour, we will reach open grounds and you will find many local people busy working. Another 2 hours walk from here will take you to the beautiful wooden architecture of Ghandad village.",
          "We will continue walking for another hour to reach a camping ground and you will also spot a wooden bridge that leads to Osla village. Osla has become a popular tourist destination in the past few years because of its beautiful wooden houses. We won’t be stopping on this camping site but continue walking under the forest cover along the banks of Supin river for about one more hour to reach Seema village. If you are lucky, you can spot Himalayan Monal in the forests. At Seema you will find many other trekkers and this will be our camping ground for the night.",
        ],
        briefOverview: [
          "Altitude: 2,600m/8,500ft (Seema) and 2,100m/6,700ft (Taluka)",
          "Sankri to Taluka drive 12km, 1 hour",
          "Taluka to Seema trek 12km, 7-8 hours",
          "Most of the trail is gradual ascent",
          "Walk through the Supin River",
          "Trek is in the forest of Deodar trees, Bamboo, wild roses, irises, and chestnut",
          "Enough source of water on the way",
          "Osla village is opposite to Seema",
          "Packed lunch on the way",
          "Stay in tent (Twin sharing)",
        ],
      },
      {
        day: "Day 3",
        title: "Seema to Rainbasera",
        description: [
          "On the third day of Bali Pass Trek, we will start fresh in the morning and leave for our first major spot - the Debshu Bugyal. Walking along the Supin river, the trail will get steeper as we get close to the Debshu Bugyal. Upon reaching the Ruinsara Valley, the trail becomes a bit difficult with boulders on the route. As we keep walking you can look behind to catch the glimpse of the famous Osla Village.",
          "Walking for another 30 minutes on an even trail, the Debshu Bugyal will begin. The Bugyal is huge pastureland. You can rest here for a while. The Kala Nag and the Black Peak can be seen from the bugyal.",
          "Form here, the drail suddenly descends until we reach the river bed again. The path is slippery and filled with stones. Once again we will cross the bridge & you will be able to view the beautiful sights all around you, the trail then enters a steep climb from here. We will soon reach the campsite for today at Rainbasera and spend the night.",
        ],
        briefOverview: [
          "Altitude: 3,100m/10,200ft",
          "Trek: 10km, 6-7 hours",
          "Moderate to difficult ascent and descent",
          "Can see the confluence of Har Ki Dun and Ruinsara rivers",
          "Magnificent view of Black Peak (Kala Nag) from Debshu Bugyal",
          "Trek along with the Ruinsara river",
          "Mixed scenery of forest, meadows, and boulders",
          "Enough source of water",
          "Packed lunch for the day",
          "Stay in tent",
        ],
      },
      {
        day: "Day 4",
        title: "Rainbasera to Ruinsara Tal",
        description: [
          "This will be an exciting day as tonight we will be camping at the most awaited Ruinsara Lake. There will be no major changes in the trail and would be almost the same as the day before. We will walk for about 3-4 hours until we reach a point from where we will see glaciers at a distance and we will cross a stream to reach the lake.",
          "The camping ground for today, the Ruinsara lake is like a dream come true. The camping ground for today will be between the Supin river & the Ruinsara lake, surrounded by meadows and you will be able to see the snow-capped mountains at a distance. The majestic snow capped Bandarpooch, Kala Nag & Dhumdhar Khai will dominate the sky. You can walk around and explore the beautiful area.",
        ],
        briefOverview: [
          "Altitude: 3,600m/11,800ft (Ruinsara Tal)",
          "Trek: 7 km, 4-5 hours",
          "Moderate ascent",
          "Ruinsara lake is surrounded by meadows and snow-clad peaks",
          "Mixed trail of boulders and meadows",
          "Can see a waterfall on the way",
          "Enough sources of water",
          "View from campsite: Yamuna Kanta (the pass which takes you to Yamunotri), Banderpooch Peak, Dhumdhar Kandi Black Peak (Kala Nag), and White Peak",
          "Packed lunch on the way and light lunch at campsite",
          "Camping nearby the lake",
          "Stay in tent",
        ],
      },
      {
        day: "Day 5",
        title: "Ruinsara Tal to Odari",
        description: [
          "Today is a happy day as we only have to trek for 4km. As we descend down the Supin river, the trail will take us through dense forests and river crossings. The path will get steep again as we inch closer to the next meadow. From there, you can see high peaks and the trek serve as a trailer for what you witnessed in the last few days.",
          "The vegetation will now start getting sparse, after walking for a kilometer, you will reach Odari. There is a rock cave at this location and it is believed that Bali (brother of sugriva) followed a demon in the cave to kill him but was trapped because the entry collapsed in the ensuing struggle. From here you can catch clear sights of swargarohini peaks.",
        ],
        briefOverview: [
          "Altitude: 4,000m/13,100ft",
          "Trek: 4km, 3-4 hours",
          "Steep and gradual mixed ascent",
          "Limited source of water",
          "River crossing",
          "Odari means a naturally made rock cave",
          "Hot lunch at the campsite",
          "Stay in tent",
        ],
      },
      {
        day: "Day 6",
        title: "Odari to Bali base camp",
        description: [
          "This day will be a bit difficult as we climb on a trail which is 60 degrees inclined.The trail is like a ridge walk with loose rock which makes it a bit difficult to walk on. The height gain is significant, make sure to drink water and have enough rest to also take proper precautions to avoid acute motion sickness.",
          "Be prepared to face the cold temperatures as the night tends to drop below freezing.",
        ],
        briefOverview: [
          "Altitude: 4,600m/15,100ft",
          "Trek: 5 km, 6-7 hours",
          "Steep and technical ascent",
          "Walk on a mountain ridge",
          "Stay in tent",
        ],
      },
      {
        day: "Day 7",
        title: "Bali base camp to Lower Dhamni via Bali Pass",
        description: [
          "Today we cross Bali Pass to reach lower Dhamani, it's going to be a long day so eat enough for the energy. The trail is going to be steep with a lot of snow. After hiking for 2 to 3 hours on a steep trail we will reach the top of the pass. At this high point of the pass, which is only 10 by 30 feet wide, you will feel like standing on the top of a mountain. From here you will be able to view 360 degree view of the Swargarohini, Bandarpoonch and Garwal peaks and also the Yamunotri valley.",
          "As we start descending, you need to be careful as it's a very steep & tricky descent and can be difficult to walk on because of the snow. Follow the proper techniques as instructed by the Bali pass trek leader as the path to lower Dhamani is a bit confusing.",
          "After taking rest and walking for a while, we will reach a flat trail that passes through a forest for about 2 to 3 Km. Night stay at tents.",
        ],
        briefOverview: [
          "Altitude: Bali Pass 4,950m/16,200ft, Lowar Dhamni 3,400m/11,100ft",
          "Trek: 14km, 10-11 hours",
          "Steep and technical ascent of 1-1.5 hours till the Bali Pass",
          "Summit View: Bandarpoonch, Kalanag (Black Peak), Ruinsara and Yamuntori side, logical route to Saptarishikund",
          "Stay in tent",
        ],
      },
      {
        day: "Day 8",
        title: "Lower Dhamni to Jaan ki Chatti and Drive to Dehradun",
        description: [
          "The last and the easiest day of the bali pass trek has arrived, today is gonna be filled with a lot of descents and mild ascents. The path is well paved and there is a slight ascent up to yamunotri which will take about 1 to 2 hours more.",
        ],
        briefOverview: [
          "Altitude: 2,600m/8,500ft. (Jaan ki Chatti)",
          "Trek: 8km, 4-5 hours",
          "Easy and well-defined trail",
          "170km, 7 hours drive to Dehradun",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport serves Dehradun and is located about 25 km from the city. There are daily flights from Delhi to Dehradun.",
      byTrain: [
        {
          name: "Nandadevi Express",
          trainNo: 12205,
          departure: "11:50 PM",
          arrival: "5:40 AM",
          from: "Delhi",
        },
        {
          name: "Dehradun Express",
          trainNo: 12687,
          departure: "9:10 PM",
          arrival: "5:00 AM",
          from: "Delhi",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi's ISBT Kashmere Gate. We recommend taking only government buses from ISBT Kashmere Gate, as private buses operating outside ISBT may be less reliable.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "TCM’s Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM.",
        },
        {
          type: "text",
          content: "The pick-up is included in the cost of the trek.",
        },
        {
          type: "text",
          content: "You will reach Sankri by 5:00 PM.",
        },
        {
          type: "text",
          content:
            "Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "What is the total distance of Bali Pass Trek?",
        answer:
          "The total distance of the Bali Pass Trek is about 60 kms, and you will be covering around 8 km on average each day.",
      },
      {
        question: "What is the maximum altitude of Bali Pass Trek?",
        answer:
          "This is a high-altitude trek with a maximum height of 16,200 ft. above sea level.",
      },
      {
        question: "What are the starting and ending points of Bali Pass Trek?",
        answer:
          "The trek begins from Sankri and ends at Jan Ki Chatti, from where we drive back to Dehradun.",
      },
      {
        question: "Can beginners do this trek?",
        answer:
          "Generally, the Bali Pass Trek is not recommended for beginners because of the rough terrain, steep ascents, and high altitude.",
      },
      {
        question: "Which months are best for Bali Pass Trek?",
        answer:
          "The best time to visit Bali Pass is the pre- and post-monsoon period from May to July and September to October.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Hampta Pass Trek",
    title: "Hampta Pass Trek - Beauty Of Valley",
    tourCode: "122132146",
    price: "₹ 9,499",
    mapImg: "",
    overview: {
      title: "Hampta Pass Trek",
      paragraphs: [
        "The Hampta Pass Trek is one of the most sought after treks for trekkers who visit Himachal Pradesh. The reason behind this is the breathtaking beauty of nature and also because this trek is an easy to moderate level difficulty trek.",
        "The best time to embark upon the Hampta Pass Trek is during the summer season from the months of May to August and October is the best time to visit this trek during the winter season. It is vital to listen to trek leaders carefully because it is a high pass trek with the maximum altitude being around 14,000 feet.",
        "The nearest hill station to the Hampta Pass Trek is Manali, which also acts as the base camp for this trek. This trek is well known for its varying landscapes, spellbinding beauty, green open meadows, glacial valleys to name a few.",
      ],
    },
    duration: "5 Days",
    distance: "37 km",
    altitude: "14,009",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Himachal Pradesh",
      region: "Kullu",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Manali To Chika Via Jobra",
        description: [
          "The first day of the Hampta Pass Trek begins with a drive from Manali to Jobra which is located at a distance of 17 Km from Manali and it takes about 2 hours to reach there. Jobra is already located at an high altitude of 9,800 feet so it is a good place to acclimatize to the trek.",
          "Once we reach Jobra we will start walking towards Chika. It is a short trek of about 2 Km. and after walking for about an hour on this easy trail will take us to Chika and we will cross the 10,100 feet mark. The trail will take us through the dense forests of Maple, Deodar and Oak trees. The campsite for today at Chika is a vast green patch of land and makes a perfect camping spot.",
        ],
        briefOverview: [
          "Driving Distance - 17 Km",
          "Driving Time - 2 Hours",
          "Trekking Distance - 2 Km",
          "Trekking Time - 1 Hour",
          "Maximum Altitude - 10,100 ft",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 2",
        title: "Chika to Balu ka Ghera",
        description: [
          "Today we will leave from Chika towards Balu Ka Ghera which is going to be our campsite for tonight. We will start descending along the river on rough terrain filled with boulders. There might be a lot of stones on this path but it is an easy trail and you will be able to cover it without any problems. ",
          "As we keep walking you will spot the entire stretch of the trail covered with the beautiful Rhododendron trees. Soon we will reach a perfect spot from where you will be able to view the entire Dhauladgar range covered with snow right in front of you.",
          "On our way to Balu Ka Ghera we will be crossing a picturesque valley called Jwara and from there we will have to cross the river and get on the other side. Beyond the mountains you see in front of you lies Hampta Pass which is our main destination.",
          "The path at the end of the valley is a slope covered with rocks and snow and at the end of this trail we will reach Balu Ka Ghera.",
        ],
        briefOverview: [
          "Trekking Distance - 9 Km",
          "Trekking Time - 6 Hours",
          "Maximum Altitude - 11,900 ft",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 3",
        title: "Balu Ka Ghera to Siagoru crossing Hampta Pass",
        description: [
          "Today is going to be a long day as we push towards the highest point on the trek at Hampta Pass which is around 14,000 ft. We will start climbing up along the river on a moderately ascending trek towards Hampta Pass.",
          "Walking for about one and a half hours will take us to a plateau which is completely covered with snow during winters otherwise you will find patches of snow everywhere with Deo Tibet Peak right in front of you.",
          "As we keep walking we will be crossing a second plateau and beyond that we will walk on a ridge. At the end of the first ridge starts a second ridge and after that is Hampta Pass. The climb from the second ridge up to Hampta Pass will take about 15 minutes but it is a steep, hard climb but it will be totally worth it once you see the beauty of nature unfold in front of your eyes at 14,000 ft. After spending some time there, we will start descending towards Siaguru.",
          "Climbing down is harder than climbing up, the path is extremely steep and the best way to get down is by sliding or using ropes for support. After about one and a half hours, we will reach the base of the valley that will take us to Siagoru.",
        ],
        briefOverview: [
          "Trekking Distance - 7 Km",
          "Trekking Time - 10 Hours",
          "Maximum Altitude - 14,000 ft",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Siagoru to Chatru drive to Chandratal",
        description: [
          "Siagoru to Chatru is an easy downhill descent along the river which will take about 5 hours. There is no vegetation at this location because the weather is too hostile for any kind of life to thrive at this place.",
          "Walking ahead the path gets a little trickier as you find yourself walking on the edges of mountains and ridges and watch out for slippery paths too. This is one of the reasons why this trek is preferred by adventure lovers.",
          "Soon you will be able to spot Chandra river and we will start walking by its side and cross two glaciers beyond which lies our camping ground for today at Chatru.",
        ],
        briefOverview: [
          "Trekking Distance - 7 Km",
          "Trekking Time - 5 Hours",
          "Max Altitude - 12,900 ft",
          "Stay in camps",
        ],
      },
      {
        day: "Day 5",
        title: "Chatru/ Chandratal to Manali",
        description: [
          "Today is the last day of the Hampta Pass Trek. A 7 hour drive through the hills will take you back to Manali, expected to arrive by 6 pm in the evening.",
        ],
        briefOverview: ["Driving Distance - 90 Km.", "Driving Time - 7 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Bhuntar, located 52 km from Manali, is the nearest airport. Taxi services are available from Bhuntar to Manali, costing approximately Rs. 700 to Rs. 1000. Bhuntar is well connected to Delhi by air, with flights operated by Indian Airlines, Kingfisher Airlines, MDLR Airlines, and Jagson Airlines from Delhi and Chandigarh to Kullu.",
      byBus: [
        {
          type: "text",
          content:
            "Manali is well connected to Delhi by road. Overnight buses from Delhi to Manali are available, with tickets bookable online at www.redbus.in or www.hrtc.gov.in.",
        },
        {
          type: "text",
          content:
            "Tip: Since Delhi to Manali is a long journey, most private Volvo buses depart from Delhi between 5:00 PM and 6:00 PM, while the last government bus leaves at 8:30 PM from ISBT Kashmere Gate.",
        },
        {
          type: "text",
          content:
            "For the return journey, buses from Manali to Delhi typically leave between 4:00 PM and 5:00 PM. Expected arrival in Delhi is between 6:00 AM and 10:00 AM. Plan any onward travel post-noon to allow for possible bus delays.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Dev Kyara Trek",
    title: "Dev kyara trek - Gallery Of Peaks",
    tourCode: "122132147",
    price: "₹ 12,999",
    mapImg: "",
    overview: {
      title: "Dev Kyara Trek",
      paragraphs: [
        "Dev Kyara Trek takes you to a high altitude meadow located in the Sankri range of the state of Uttarakhand. The meadow is massive, about 4 Km wide and is located at an altitude of 4,100 m between the famous Rupin & Supin Valleys. Dev Kyara is considered to be an easy - moderate difficulty trek and therefore, provides a great opportunity to beginners to explore the untouched locations and trails in the western Garhwal Himalayas.",
        "Walking along the Dibra Gad river across the dense forests of Deodar & Oak trees you will be able to spot many famous mountain peaks like - Black Peak, Daowdu, Bandarpoonch, Swargarohini and others. The best time to visit this trek is pre and post monsoon periods.",
      ],
    },
    duration: "7 Days",
    distance: "89.9 km",
    altitude: "12,287",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Utarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri",
        description: [
          "The 230 Km long ride from Dehradun to Sankri will mark the beginning of Dev Kyara Trek. This exciting and thrilling journey will take you through the beautiful Himalayan mountains and rivers. It will take about 8 hours to reach Sankri from Dehradun. On the way we will cross some of the most famous hill stations of India including Mussooriee, Dhanaulti, Purola & others.",
          "At the end of our journey we will enter the Govind Pashu National Park, famous for its wide variety of flora & fauna. Make your important phone calls before reaching Mori because the network gets very erratic beyond that.",
        ],
        briefOverview: [
          "Driving Distance - 230 Km",
          "Driving Time - 8 Hours",
          "Max Altitude - 6,400 ft",
          "Network - BSNL (limited connectivity)",
          "Overnight stay at homestay",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Boincha / Boincha to Obra",
        description: [
          "On the second day we will take a short 3 hour ride from Sankri to Boincha which will be the starting point for our trek. Boincha is a confluence of Dibra & Supin rivers. The trek is a short easy trail of about 3.4 Km. along the Dibra Gad river. After walking for about a kilometer we will cross a bridge and get on the opposite side of the Dibra river.",
          "The trail will enter a slight gradual ascent up to the campsite at Obra Thatch. The camping location is a picturesque spot located in an open field in the center of the valley. Overnight stay will be in tents.",
        ],
        briefOverview: [
          "Driving Distance - 3 Km",
          "Trekking Distance - 3.4 Km",
          "Trekking Time - 3 Hours",
          "Max Altitude - 7,640 ft",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 3",
        title: "Obra to Bhawa Waterfall",
        description: [
          "We will wake up early in the morning and start walking after having our breakfast as it is going to be a long day today. As we leave Obra, we will enter a dark pine forest ascending continuously towards our destination. We will cover the first half of the trail under the cover of this dense forest with pine and maple trees.",
          "Soon the trail will enter a steep ascend through the boulders and the scenery will change completely. The forest will open into a vast ground surrounded by towering mountains at a distance. Walking a bit further you will find yourself in a giant meadow beside a waterfall cutting through the mountain rocks. This is the Bhawa Waterfall, our campsite for today.",
        ],
        briefOverview: [
          "Trekking Distance - 8 Km",
          "Trekking Time - 7 Hours",
          "Max Altitude - 11,234 ft",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Bhawa Waterfall to Dev Kyara",
        description: [
          "We will start trekking after a beautiful sunrise at Bhawa. The trek route is filled with small and big waterfalls. You will come across over 20 waterfalls on your way to the Dev Kyara Campsite. As we start getting closer to the destination, the majestic Mount Ranglana appears to get closer. If you come here during the pre-monsoon season, you will be walking on snow. After crossing a boulder section, the trail enters a descending path that will take us to Dev Kyara campsite.",
          "The view at the campsite is absolutely mesmerizing. We will be camping at a high altitude of 11,234 ft. near snow-clad mountains. This place is also the base camp for Ranglana peak. Explore the area around before retiring to the campsite for the night.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km",
          "Trekking Time - 5 Hours",
          "Max Altitude - 11,234 ft",
          "Overnight stay at Dev Kyara Campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Explore Dev Kyara and back to Bhawa Waterfall Campsite",
        description: [
          "Early in the morning we will leave for a spot which is about two hours away from the campsite. The place is a shade under a huge rock which can easily accommodate more than 100 people. We will return back to Dev Kyara Campsite and start our journey back towards Bhawa Waterfall. The experience of climbing down from Dev Kyara is totally different from climbing up. The green valley at the opposite end will surely leave you spellbound. Overnight stay will be in camps at the beautiful Bhawa waterfall campsite.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km",
          "Trekking Time - 5 Hours",
          "Night stay in tents",
        ],
      },
      {
        day: "Day 6",
        title: " Bhawa Waterfall to Boincha &. Boincha to Sankri",
        description: [
          "We will wake up early in the morning because we have a long day ahead of us. After having breakfast we will start descending all the way down to Boincha which is a 12 Km trek and will take around 6 hours. At Boincha, a vehicle will be waiting for you which will take you back to Sankri.Overnight stay will be at The Crazy Mountaineer’s Homestay.",
        ],
        briefOverview: [
          "Trekking Distance - 12 Km",
          "Trekking Time - 6 Hours",
          "Driving Time - 3 Hours",
          "Overnight stay at homestay",
        ],
      },
      {
        day: "Day 7",
        title: "Depart from Sankri. Drive to Dehradun",
        description: [
          "On the final day of the Dev Kyara Trek, we will be driving back to Dehradun from Sankri. The 230 Km. ride will take 8 hours and you are expected to arrive at Dehradun by late evening so plan accordingly.",
        ],
        briefOverview: ["Driving Distance - 230 Km", "Driving Time - 8 Hours"],
      },
      {
        day: "Day 8",
        title: "Lower Dhamni to Jaan ki Chatti and Drive to Dehradun",
        description: [
          "The last and the easiest day of the bali pass trek has arrived, today is gonna be filled with a lot of descents and mild ascents. The path is well paved and there is a slight ascent up to yamunotri which will take about 1 to 2 hours more.",
        ],
        briefOverview: [
          "Altitude: 2,600m/8,500ft. (Jaan ki Chatti)",
          "Trek: 8km, 4-5 hours",
          "Easy and well-defined trail",
          "170km, 7 hours drive to Dehradun",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 25 km from the city. There is a daily flight from Delhi to Dehradun.",
      byTrain: [
        {
          description: "Take the overnight train to Dehradun from Delhi.",
          trains: [
            {
              name: "Nandadevi Express",
              trainNo: "12205",
              departure: "11:50 PM",
              arrival: "5:40 AM",
            },
            {
              name: "Dehradun Express",
              trainNo: "12687",
              departure: "9:10 PM",
              arrival: "5:00 AM",
            },
          ],
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi’s ISBT Kashmere Gate.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM. Pick-up is included in the cost of the trek.",
        },
        {
          type: "text",
          content:
            "You will reach Sankri by 5:00 PM. Please note that food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },

    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Kedar Tal Trek",
    title: "Kedar Tal Trek - A Rare Adventure Among Big Mountains",
    tourCode: "122132148",
    price: "₹ 14,999",
    mapImg: "",
    overview: {
      title: "Kedar Tal Trek",
      paragraphs: [
        "Located at a high altitude of 15,485 ft. Kedar Tal is one of the most beautiful glacial lakes in the world. The lake is surrounded by a mesmerizing 360 degrees view of the major peaks like Manda, Bhagirathi, Gangotri, Bhrigupanth, Mt. Meru and Thalay Sagar. The lake captures the beautiful reflection of Mt. Thalay Sagar. The lake sits perfectly in the barren landscape with white snow clad mountains in the background.",
        "Kedar Tal Trek is considered to be a difficult trek because of the rocky trails, boulder zones, steep ascends and thin ledges. The path is complicated and keeps getting difficult as we get closer to our destination. Therefore, if you are an experienced trekker, you should definitely embark upon this journey.",
      ],
    },
    duration: "7 Days",
    distance: "17 km",
    altitude: "15,584",
    Grade: ["Difficult"],
    location: {
      state: "Uttarakhand",
      region: "Utarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: " Dehradun to Gangotri",
        description: [
          "You will be picked up from the Dehradun Railway Station and we will be driving to Gangotri. The holy river Ganga originates from Gangotri and therefore it is one of the most visited pilgrimage places in India. Gangotri is also one of the Char Dhams and is located at an altitude of 10,200 ft. The drive will take you on an adventure-filled journey through the mountains and across dense forests. The 240 Km. long ride to Gangotri will take 9 hours to complete. Overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Distance - 240 Km",
          "Driving Time - 9 Hours",
          "Max Altitude - 3,100 m",
          "Network - Available",
          "Night stay at a guest house",
        ],
      },
      {
        day: "Day 2",
        title: "Acclimatisation day around Gangotri",
        description: [
          "Today we will be spending the day exploring Gangotri and getting acclimated to the high altitude weather conditions. Try to stay outdoors, you can visit the Gangotri Kund, Ganga Arti and the Surya Kund. There are many temples and caves around the area to keep you occupied outside.",
        ],
        briefOverview: [
          "Acclimatization Day",
          "Explore Gangotri",
          "Night stay at a guest house",
        ],
      },
      {
        day: "Day 3",
        title: "Gangotri to Bhoj Kharak",
        description: [
          "We will start walking towards our next destination at Bhoj Kharak. The trail is 9 Km. long and will take about 6 hours to complete. This is the only path that leads to Bhoj Kharak and therefore sometimes it gets crowded.",
          "On the trail you will find yourself walking in the shade of Bhojpatra Trees with Kedar Ganga flowing to your left. As we get closer to the destination, the path will start to get difficult and extremely narrow. After climbing a sharp ascent of 60 degrees on the inclined rock face and crossing another narrow trail, we will reach our campsite at Bhoj Kharak.",
          "The campsite is a perfect resting place with Bhoj trees and Purple Rhododendrons growing in abundance. Along with this you will be able to spot Mt. Thalya Sagar in the distance.",
        ],
        briefOverview: [
          "Trekking Distance - 9 Km",
          "Trekking Time - 6 Hours",
          "Max Altitude - 3,900 ft",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Bhoj Kharak to Kedar Kharak",
        description: [
          "Today’s hike starts with a steep climb up to a meadow. It is not going to be a difficult trail like yesterday and it's a short hike of 4.5 Km. The trail is pretty much simple with slight descents and ascents throughout the path.",
          "This place is well known for spotting beautiful birds like Blue sheep or Bharal. At the end of the trail we will cross over to the other side of Kedar Ganga river and reach the campsite with a spellbinding sight of Brighupanth Peak. Overnight stay at camps.",
        ],
        briefOverview: [
          "Trekking Distance - 4.5 Km",
          "Trekking Time - 5 Hours",
          "Max Altitude - 4,350 m.",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: "Kedar Kharak to Kedar Tal and back to Kedar Kharak",
        description: [
          "The most awaited day has finally arrived and we will be visiting Kedar Tal today. The trail to the tal is difficult. We will be walking over barren rocky paths and crossing three ridges to reach our destination. Apart from the trail, the weather at this high altitude is very unpredictable and therefore it is vital to stick to the schedule.",
          "After trekking on a dusty path filled with boulders to the final steep ridge. Once we climb up the final ridge, you will be able to catch the glimpse of beautiful Kedartal and the reflection of Mt. Thalya Sagar in it. You will also be able to get a 360 view of various mountain peaks like - Mt. Manda, Brighupant, Gangotri, Thalaysagar, Bhagirathi and Mt. Meru. After spending some time at the lake we will climb back down to Kedar Kharak.",
        ],
        briefOverview: [
          "Trekking Distance - 10 Km (Total Distance)",
          "Trekking Time - 8 Hours",
          "Max Altitude - 4,700 m.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 6",
        title: "Kedar Kharak to Gangotri",
        description: [
          "We will wake up early in the morning for the long day as we will be trekking 13 Km all the way back to Gangotri which will take about 9 hours. Night stay will be at a guest house.",
        ],
        briefOverview: [
          "Trekking Distance - 13.5 Km.",
          "Trekking Time - 9 Hours",
          "Overnight stay at a guest house.",
        ],
      },
      {
        day: "Day 7",
        title: "Gangotri to Dehradun",
        description: [
          "Today is the final day of the Kedar Tal Trek and we will leave for Dehradun in the morning. It's a long ride and you will be dropped at Dehradun Railway Station by evening so plan accordingly.",
        ],
        briefOverview: ["Driving Distance - 240 Km", "Driving Time - 9 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 25 km from the city. There is a daily flight from Delhi to Dehradun.",

      byTrain: [
        {
          description: "Take the overnight train to Dehradun from Delhi.",
          trains: [
            {
              name: "Nandadevi Express",
              trainNo: "12205",
              departure: "11:50 PM",
              arrival: "5:40 AM",
            },
            {
              name: "Dehradun Express",
              trainNo: "12687",
              departure: "9:10 PM",
              arrival: "5:00 AM",
            },
          ],
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi ISBT Kashmere Gate. It is recommended to take government buses from ISBT Kashmere Gate as private buses outside ISBT may not be as trustworthy.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Dehradun ISBT. From there, you have to come to Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "TTH’s Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM. Pick-up is included in the cost of the trek.",
        },
        {
          type: "text",
          content: "You will reach Gangotri by 5:00 PM.",
        },
      ],
    },

    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Ruinsara Tal Trek with Har Ki Dun",
    title: "Ruinsara Tal Trek with Har Ki Dun - A Trek To The Valley of Gods",
    tourCode: "122132149",
    price: "₹ 11,499",
    mapImg: RuinsaraTrekMap,
    overview: {
      title: "Ruinsara Tal Trek with Har Ki Dun",
      paragraphs: [
        "Har ki dun - Runsara Tal Trek is one of the magnificent and fascinating treks in India at an altitude of 11700 feet. Har ki dun Runsara tal trek falls in the Garhwal Himalayas range of Uttarakhand and starts from the village Sankari. River tons is a perpetual Indian Himalayan river, gives a panoramic and delightful view of this valley, the main source of this river falls in Ruinsara Snout. This route comes across the place Dhum Dhar Kandi ridge that moves further to Kalanag and Bandarpoonch.",
        "You can do Har ki dun and Ruinsara Tal trek. separately But if you do the Ruinsara Lake trek along with Harki dun, then it will be a better experience. Where Har ki dun trek is abutted by the pleasant alpine lakes, waterfalls, grasslands, forest, and meadows. On the other side, Rupinsara Tal suffused with wild purple orchids. This is one of the most ancient Himalayan trails in Uttrakhand. This trek comes under a moderate level valley trek and not difficult to vanquish if compare to other summer treks.",
        "At once reaching the top of Har ki dun Ruinsara Tal, the view goes splendid to see other peaks as well, like Swargarohini, the low lying Hata peak, Kalang peak, and Bandarpunch (all paramount peak of Garhwal Himalayas).",
        "This area belongs to the tremendous ancient culture of the Hindu epic Mahabharata. While going through the Osla village, trekkers can also see the ancient temple of Duryodhana (according to Hindu Mythology). Some villages conserve around 3000 years old heritage and traditions. A complex sculpted wooden architecture catches every trekker’s eyes at one place for a moment. According to old beliefs, the Pandavas had gone through the valley Har ki dun to Swargarohini peak. Ruinsara lake also symbolizes as the center of worship by the Osla villagers.",
        "Therefore, you will also experience the rich culture, heritage, and local foods of the hamlets on their visit to Har ki dun Ruinsara Tal trek. If you decide to complete the Har ki dun trek along with Ruinsara, then it will be a great experience for a lifetime.",
      ],
    },
    duration: "9 Days",
    distance: "70 km",
    altitude: "11,811",
    Grade: ["Easy", "Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Utarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Dehradun to Sankri (Ruinsara Tal Trek Itinerary)",
        description: [
          "Early in the morning we will leave from Dehradun to Sankari. You will be picked up from ISBT Dehradun. On the way to Sankari we will cross the Queen of hills - Mussoorie, Naugaon, Purola, Mori & the final check-point at Netwar before reaching Sankri. At night we will rest at The Crazy Mountaineers homestay or guest house.",
          "At Purola, you should make all your important phone calls as the signal becomes weak & only BSNL connection is available with limited connection. In case you need any last minute shopping, equipment, trek essentials & garments are available at the Sankri local market.",
        ],
        briefOverview: [
          "220 km drive by NH 507",
          "Altitude: 6,400 feet",
          "Last ATM - Purola",
          "Small shops available for trekking gears",
          "BSNL network with limited connectivity",
          "Crazy Mountaineers Homestay at Sankri",
          "Breakfast and lunch excluded, dinner included",
          "Trekkers will be picked from Dehradun at 8:00 am",
          "Expected arrival time at Sankri – 4:00 pm",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Osla",
        description: [
          "After breakfast we will leave from Sankri for Taluka, the ride is a bit rough and we will start walking as soon as we reach Taluka. We will be walking beside the gushing Supin river under the shade of beautiful pine and walnut trees. The scenic beauty of the place is mesmerizing.",
          "As we keep walking, we will cross some river streams that merge into the Supin river. You can see the village Gangad to your left, after walking for one more hour we will reach the beautiful village of Osla. Across the river from Osla there is a small village called seema. We will spend the night over here in camps for today.",
        ],
        briefOverview: [
          "1 Hour Drive",
          "Altitude: 2700m",
          "5-6 Hour Trek",
          "Trek Distance: 14Km",
        ],
      },
      {
        day: "Day 3",
        title: "Osla to Har ki Dun",
        description: [
          "The trek gets a little difficult as we leave Osla as the path is a bit steep, the trail passes through beautiful orchids of fleece & sunflowers. The trail climbers higher and form the top you will be able to see the meeting of Supin and the river form the Ruinsara valley.",
          "As we keep walking higher up the trail on the left side of the river, we reach Har Ki Dun Valley, the view from there is very panoramic & we will be camping here tonight at the junction of two valleys that originate from Jaundhar & Hata glacier.",
        ],
        briefOverview: [
          "Altitude: 3,510 m",
          "4-5 Hour Trek",
          "Trek Distance: 10Km",
        ],
      },
      {
        day: "Day 4",
        title: "Explore Har ki Dun",
        description: [
          "Today, we relax at Har Ki Dun Village. You can explore the vast meadows along the Supin river and the forests of the Himalayan Birch & get a closer view of the Swargarohini Peak & Jaundhar Glacier.",
          "You can also explore the Hata Valley, from there you can get a good view of the Hata peak & Glacier. Marinda Tal, which is located at a distance of 2Km from Har Ki Dun also waits for you to be explored. It is a small lake which is formed because of a rock that blocks the river flowing down from the Borasu pass.",
        ],
        briefOverview: [],
      },
      {
        day: "Day 5",
        title: " Har ki Dun to Waterfall",
        description: [
          "We will walk about a kilometer back on the trail coming from Osla to Har Ki Dun. After that we take a left down to a path that will lead us to a small bridge and cross over to the other side. This path passes through a dense forest for about 2 Km. From there we will walk some more to reach the Ruinsara valley. Another 2 hours of walk will take us to the camping ground for today near the waterfall.",
        ],
        briefOverview: [
          "Altitude: 3,330 m",
          "4-5 Hour Trek",
          "Trek Distance: 9Km",
        ],
      },
      {
        day: "Day 6",
        title: "Waterfall to Ruinsara lake",
        description: [
          "As we begin our ascent to the Ruinsara Valley, you will notice a very obvious difference in the vegetation in this area, you will find the beautiful plants of Rhododendron, Pindrow fir & Himalayan Birch. Upon reaching the Ruinsara Lake, which is considered sacred by the locals, the view you will find is breathtaking. The lake is surrounded by vast meadows and Rhododendron bushes.",
          "We will reach the Ruinsara Lake early & therefore you will have ample of time to explore the nearby places. Two different trails from the Ruinsara Lake lead to the Black Peak & Bali Pass. We will be back to the campsite near the lake before evening.",
        ],
        briefOverview: [
          "Altitude: 3,600 m",
          "2 Hour Trek",
          "Trek Distance: 4Km",
        ],
      },
      {
        day: "Day 7",
        title: "Ruinsara lake to Seema",
        description: [
          "We will start walking early today and head back to Seema which is about 17 km away. The trail is mostly decent except for short steep ascents through the forest that we came from on the third day.",
        ],
        briefOverview: [
          "Altitude: 2,050 m",
          "6 Hour Trek",
          "Trek Distance: 17Km",
        ],
      },
      {
        day: "Day 8",
        title: "Seema to Taluka to Sankri",
        description: [
          "Today we say goodbye to Seema and leave for Taluka. At Taluka a vehicle waiting for us will take us back to Sankri where we will stay at The Crazy Mountaineer homestay for the night.",
        ],
        briefOverview: [],
      },
      {
        day: "Day 9",
        title: "Sankri to Dehradun",
        description: [
          "Today will be the last day of the Har Ki Dun Ruinsara trek. We will leave for Dehradun early in the morning and reach by late afternoon.",
        ],
        briefOverview: [
          "Distance around 220 km drive will take approximately 10 hours",
          "Breakfast is included",
          "Drop at Dehradun Railway Station or ISBT",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport is the airport serving Dehradun, located about 25 km from the city. There is a daily flight from Delhi to Dehradun. Arrive one day early if planning to come by flight.",
      byTrain: [
        {
          trains: [
            {
              name: "Nandadevi Express",
              trainNo: "12205",
              departure: "11:50 PM",
              arrival: "5:40 AM",
            },
            {
              name: "Dehradun Express",
              trainNo: "12687",
              departure: "9:10 PM",
              arrival: "5:00 AM",
            },
          ],
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "There is regular bus service from Delhi to Dehradun, departing from Delhi ISBT Kashmere Gate. It is recommended to take government buses from ISBT Kashmere Gate as private buses outside ISBT may not be trustworthy.",
        },
        {
          type: "text",
          content:
            "Buses usually drop you at Dehradun ISBT. From there, you need to reach Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM. Pick-up is included in the trek cost.",
        },
        {
          type: "text",
          content:
            "You will reach Sari village by 3:00 PM and Sankri by 4:00 PM.",
        },
        {
          type: "text",
          content:
            "Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "How long is Har Ki Dun Trek with Ruinsara Lake?",
        answer:
          "The total distance of the Ruinsara Tal Trek is 55 km from Sankri to Sankri.",
      },
      {
        question:
          "What is the maximum altitude of Har Ki Dun Ruinsara Tal trek?",
        answer:
          "The Ruinsara Tal trek will take you to a height of 11,800 ft. (3,600 m) above sea level.",
      },
      {
        question: "How to reach Taluka from Sankri for Har Ki Dun trek?",
        answer:
          "Taluka is at a distance of 12 km from Sankri. You can hire a private vehicle or trek to the location.",
      },
      {
        question: "How is the network connectivity during the trek?",
        answer:
          "Networks are not available; make all your important calls before you reach Mori. BSNL network is available at Sankri.",
      },
      {
        question: "Can a beginner do this trek?",
        answer:
          "In spite of being a long trek, the Ruinsara Tal trek is an easy one and is recommended for beginners.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Buran Ghati Trek",
    title: "Buran Ghati Trek - Musical Valley",
    tourCode: "122132150",
    price: "₹ 14,499",
    mapImg: "",
    overview: {
      title: "Buran Ghati Trek",
      paragraphs: [
        "The Buran Ghati trek is a moderate to difficult level difficulty trek, great for adventure seekers who love the rush of adrenaline. This trek offers an overall trekking experience with trail crossing through mountains, dense frost cover and vast green meadows. The trail of Buran Ghati trek offers the best camping sites with huge meadows and snow capped mountains towering in the background.",
        "The trek will take you through the dense forest of Oak and Pine, extensive green meadows and over the sharp edges of snow clad mountain peaks. The main highlight of the trek is a sacred lake called Chandranahan, located at a height of 13,800 feet above the sea level. So, if you are looking for an adventure filled thrilling trek, Buran Ghati is the perfect location.",
      ],
    },
    duration: "7 Days",
    distance: "37 km",
    altitude: "15,000",
    Grade: ["Moderate", "Difficult"],
    location: {
      state: "Himachal Pradesh",
      region: "",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Shimla to Janglik",
        description: [
          "On the first day, we will drive 160 Km from Shimla to Janglik which is the base camp for the Buran Ghati Trek. The long drive will take about 10 hours to complete and you will be driving through the scenic mountains of the Himalayas and through the forests of Oak & Pine trees. On our way we will cross Rohru, Chirgaon, Tangnu and Tonglu to finally arrive at Janglik. Overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Distance - 160 Km.",
          "Driving Time - 10 Hours.",
          "Max Altitude - 9,200 ft.",
          "Network - Uptill Rohru",
          "Overnight stay at a guest house.",
        ],
      },
      {
        day: "Day 2",
        title: "Janglik to Dayara Thatch",
        description: [
          "We will wake up early in the morning and after having breakfast, we start walking on one of the most beautiful treks in the Himalayan Valley. You will cross many wooden houses and wheat fields on the beginning of the trail. After climbing up for about an hour you will be able to get complete views of Diude and other small villages located in the area.",
          "Soon the trail will enter into a forest of Pine and Oak. The forest trail is easy with a number of small streams along the path, so you can take your time to enjoy the beauty of nature around you. As we keep walking the forest will get thicker and darker and the trail will enter a gradual ascent. We will reach the camping ground for today as we exit the forest cover.",
        ],
        briefOverview: [
          "Trekking Distance - 4 Km.",
          "Trekking Time - 5 Hours",
          "Max Altitude - 11,150 ft.",
          "Overnight stay in camps",
        ],
      },
      {
        day: "Day 3",
        title: "Dayara Thatch to Litham",
        description: [
          "Today’s trail is a short hike of 3 Km. and we can spend some time exploring the Dayara meadows and acclimatizing to the high altitude weather. Having breakfast and tea when the first rays of the sun hit the bugyal in the morning makes up for a beautiful experience.",
          "The path to Litham crosses through a dense forest, green meadows and gushing streams. You will come across a forest of Bhoj trees and will be able to spot the snow capped Dhauladhar mountain range. From this location you will be able to get a clear view of our next camping site. We will cross the Chandranahan river to reach Litham.",
        ],
        briefOverview: [
          "Trekking Distance - 3 Km.",
          "Trekking Time - 4 Hours",
          "Max Altitude - 11,800 ft.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Acclimatization day, visit to Chandranahan lake",
        description: [
          "We are scheduled to visit Chandernahan Lake, the trek to the lake is a hike of 3 Km. We will have to start early in the morning because the trail is a difficult steep ascent and will take 3 to 4 hours to climb. The walk, although difficult, is very exciting and satisfying because of the panoramic views. You will find snow over here even if you visit this place in the month of June. The view at the lake will leave you spellbound and you can spend some time near the lake and exploring the area. Soon we will be heading back to our campsite at Litham to spend the night at camps. The trail is a sharp downward descent so walk slowly and watch your steps carefully.",
        ],
        briefOverview: [
          "Trekking Distance - 6 Km.",
          "Trekking Time - 7 Hours",
          "Max Altitude - 13,800 ft.",
          "Night stay at Litham Campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Litham to Dhunda",
        description: [
          "To reach Dhunda from Litham we will have to climb up for about 2 hours. Dhunda is located at a high altitude of 13,300 feet. On the trail you will be able to spot the towering mountains of Dhauladhar range covered with snow to your front along with Grasslands towards your left and Rupin Valley to your right side. The trail will enter a sharp ascend and from there you will be able to get your first view of the Buran Valley.",
          "The campsite at Dhunda is one of the most beautiful on the entire trek. From there you will get a clear view of the Buran Ghati and we will be camping surrounded by huge snow covered mountains.",
        ],
        briefOverview: [
          "Trekking Distance - 4 Km.",
          "Trekking Time - 6 Hours",
          "Max Altitude - 13,300 ft.",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 6",
        title: "Dhunda to Munirang (River camp) via Buran Ghati Pass",
        description: [
          "We will wake up in the morning for a long day in front of us. Today we will hike for about 10 hours to Munirang River Camp via Buran Ghati Pass. The trail is both ascending and descending but it is easier to cover this trek in September when there is no snow. The trail is difficult as you will find yourself walking over boulders and crossing narrow ledges. The Buran Ghati is located at an altitude of 15,000 feet.",
          "Descending down from the valley is the next challenging task and you need to be very careful and follow the instructions of your trek leader. Overnight stay at Munirang River Camp.",
        ],
        briefOverview: [
          "Trekking Distance - 7 Km",
          "Trekking Time - 11 Hours",
          "Max Altitude - 15,000 ft.",
          "Overnight stay in camps",
        ],
      },
      {
        day: "Day 7",
        title: "Munirang (River camp) to Barua village, Drive to Shimla",
        description: [
          "Today is the last day of the Buran Ghati Trek and we will be trekking down to Barua Village which is well known for its flaura. The trek offers a mesmerizing experience even when you are climbing down. As we keep descending you will see a large stream and we will cross it to the other side. You will also see many apricot and peach trees on the way.",
          "At the end of the trail you will spot apple orchards and signs of cultivation signifying that we are close to our destination. The trail to the village is a rapid descent and a vehicle will be waiting there for you to take you back to Shimla.",
          "You are expected to arrive in Shimla late at night, so make your reservations / plans accordingly.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km.",
          "Trekking Time - 4 Hours",
          "Driving Distance - 228 Km",
          "Driving Time - 7 Hours",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Located 22 km from Shimla, Jubbarhatti Airport is well connected to various cities by air. Other nearby airports include Chandigarh Airport and Delhi Airport, which are easily accessible.",
      byTrain: [
        {
          description:
            "The nearest station is Kalka, connecting Shimla with different parts of the country by rail. Trains are available from cities like Delhi and Kolkata. From Kalka, you can enjoy a toy train ride or hire private cabs to explore the beauty of Shimla.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Shimla is well connected by road to cities like Chandigarh, Delhi, Dehradun, and Kalka. Taxis and state buses are available for reaching Shimla from these cities.",
        },
        {
          type: "text",
          content:
            "There are regular bus services from nearby locations such as Kullu (235 km), Manali (280 km), Delhi (370 km), and Ambala (154 km). From Delhi, you can opt for luxury buses or cabs for a comfortable journey.",
        },
        {
          type: "text",
          content:
            "THE CRAZY MOUNTAINEERS’ Tata Sumo or similar vehicles will pick you up from Shimla Old Bus Stand at 6:30 AM. Pick-up is included in the trek cost.",
        },
        {
          type: "text",
          content:
            "You will reach Janglik by 4:30 PM. Food from Shimla to Janglik is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "What is the total distance of Bali Pass Trek?",
        answer:
          "The total distance of the Bali Pass Trek is about 60 kms, and you will be covering around 8 km on average each day.",
      },
      {
        question: "What is the maximum altitude of Bali Pass Trek?",
        answer:
          "This is a high-altitude trek with a maximum height of 16,200 ft. above sea level.",
      },
      {
        question: "What are the starting and ending points of Bali Pass Trek?",
        answer:
          "The trek begins from Sankri and ends at Jan Ki Chatti, from where we drive back to Dehradun.",
      },
      {
        question: "Can beginners do this trek?",
        answer:
          "Generally, the Bali Pass Trek is not recommended for beginners because of the rough terrain, steep ascents, and high altitude.",
      },
      {
        question: "Which months are best for Bali Pass Trek?",
        answer:
          "The best time to visit Bali Pass is the pre- and post-monsoon period from May to July and September to October.",
      },
      {
        question: "Is Buran Ghati trek safe?",
        answer:
          "Buran Ghati is considered a moderate difficulty trek, and if done with a team of professional trekkers, it's a very safe trek.",
      },
      {
        question: "Maximum altitude of Buran Ghati trek?",
        answer:
          "The maximum altitude of this trek is 15,000 ft. above sea level.",
      },
      {
        question: "What is the exit point of Buran Ghati trek?",
        answer:
          "The trek will end at Barua village, from where we will be driving back to Shimla.",
      },
      {
        question: "How long is the Buran Ghati trek?",
        answer:
          "While on Buran Ghati Trek, you will have to cover 37 km from the point you start walking.",
      },
      {
        question: "Will there be any mobile phone network on the trek?",
        answer:
          "Mobile connections will not be available, so make sure to finish all your important calls when you arrive at Shimla.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Phulara Ridge Trek",
    title: "Phulara Ridge Trek - An unusual Himalyan Trek",
    tourCode: "122132151",
    price: "₹ 7,999",
    mapImg: "",
    overview: {
      title: "Phulara Ridge Trek",
      paragraphs: [
        "Phulara Ridge Trek is one of the most beautiful treks in India due to its scenic landscape. In a country like India, usually, ridge treks are not very popular. People are few in numbers who keep aspirations for ridge summits. But after getting exploration, this trek has become one of the best desires for a trekker to get done. The Phulara Ridge Trek height is 12000 feet.",
        "Phulara ridge trek starts from a small village named Sankari in the Uttarkashi district of Uttarakhand. Also, Sankari is a basecamp for other treks, including Har ki dun, Kedarkantha Trek, and Ruinsara.",
        "The Phulara Ridge Trek distance is 25Km to walking through this ridge for 4-5 hours you see lovely meadows on one side and a beautiful valley and the mountain views on another side is mesmerizing experience. Phulara Ridge Trek is in the middle of two valleys where you find a trail to walk. It feels like you are walking through the edges of a knife. Finding huge mountains all around you is spectacular.",
        "Watching fully snow-covered mountains over an angle of 250 degree keeps you joyful throughout the trek. Being in the middle of the mountains makes you feel amazed and delighted. For a while, you will think of not going anywhere and to leave such a pleasant landscape. A stunning view of the other mountain ranges including Dev Kayara peak from the top of Phulara ridge Trek makes you mad and joyful.",
        "You walk through the dense forest before and after climbing the ridge where you see the different types of tree-like oaks, dwarf rhododendrons, maples, pines, and silver birch. Mostly, this trail is not used by locals. You will also see the carpet of the meadows, lovely flowers, greenery, and tiny plants growing everywhere in the landscape. This site makes anyone fall in love with this place. Sun lighting is streaming through the various angles in the dark forest, giving you a pleasant view.",
        "You will also get to see many birds on the way you go through. You can hear their chirping in the dark and dense forest. Especially, Himalayan Monal which is a colorful bird is one of the centers of attractions during the Phulara Ridge Trek visit. The best time for doing this trek is from the middle of March to the middle of June. And next, from the middle of September to the middle of October. The temperature at Phulara ridge trek is around 8 to 15 degrees Celsius during the daytime & can drop as low as -5 degrees Celsius during the night.",
      ],
    },
    duration: "6 Days",
    distance: "25 km",
    altitude: "12,100",
    Grade: ["Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Sankri",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Reach Sankri (Phulara Ridge Trek itinerary)",
        description: [
          "The first day of Phulara Ridge Trek starts with a drive from Dehradun to Sankri, which is a small village located in the Uttarkashi district of the state of Uttarakhand. Sankri is a base camp for many other treks, such as Kedarkantha, Har ki dun and others. It is a beautiful village and offers breathtaking views of various Himalayan peaks such as Swargarohini peak. On our way to Sankri from Dehradun we will pass through Mussoorie, Nainbagh, Naugaon, Purola, Mori, Naitwar & Sankri.",
        ],
        briefOverview: [
          "Altitude: 6,397 Ft.",
          "Time Taken: 8-10 hrs drive from Dehradun.",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Sikolta",
        description: [
          "On the second day, we will start walking to Sikolta from Sankri. We will be crossing a beautiful pine forest and after walking for around one and a half an hour on an ascending trail, you will reach a bridge and cross over to the other side. Be careful and take small steps as you climb up the trail. As we move forward, we will reach the “Jainot Thatch” and 10 minutes later you will find yourself at the beautiful place called Dhaunda from there you can get your first glimpse of Phulara Ridge. We will continue to walk and reach “Sikota” which is a nice open meadow patch. This will be our camping spot for today.",
        ],
        briefOverview: [
          "Altitude: 6,397 Ft. to 9,300 Ft.",
          "Time Taken: 5 hours",
          "Trek Gradient: Moderate. Ascending trail throughout.",
          "Water sources: A small stream near the broken bridge, around 3.5-4 hrs into the trek",
        ],
      },
      {
        day: "Day 3",
        title: "Sikolta to Bhoj Gadi via Karsu Thatch",
        description: [
          "Today we will be heading towards Bhoj Gadi from Sikolta, ascending through the dark & dense forest for about 30 min. Soon we will reach a bridge crossing with a beautiful stream flowing near the bridge where we can fill our water bottles. After walking for around 15 more minutes from the location of the bridge we will reach the “Karasu Thatch” which is mostly filled with mesmerizing green plants with yellow flowers.",
          "From here you can see the famous Kedarkantha peak, the trail will enter a gradul accent and you will notice a gradual decline in the tree line, but you will see the beautiful Rhododendron plants & Bhoj trees on the trail. Walking for 30 more minutes on the ascending trail, we will reach open lush green meadows.",
          "You will be able to see Dhunda top, and a 15 minutes walk from here will take us to the campsite the Bhoj Gadi. From the campsite you will be able to witness the beauty of Kedarkantha, Swargarohini & some other Himalayan Peaks.",
        ],
        briefOverview: [
          "Altitude: 9,300 Ft. To 11,155 Ft.",
          "Time taken: 4 hrs",
          "Trek Gradient: Easy-Moderate. Ascending trail throughout.",
          "Water sources: A stream near the bridge, around an hour into the trek.",
        ],
      },
      {
        day: "Day 4",
        title: "Bhoj Gadi to Pushtara via Phulara ridge",
        description: [
          "The fourth day of the phulara ridge trek will start with an amazing sunrise view. As we walk for around 2 and a half hours, we reach pushtara and it will remove all the stress of the long walk. The trail is full of accents and descents and you will be able to witness the beauty of the pine forests and will be able to get a clear view of Hanuman Top, Sarutal Top, DKD, Bandarpoonch, Kalanag, Swargarohini, Hata Peak (HKD), Ranglana, Devkyara valley, Lekha Top, Vijay Top & Kedarkantha.",
          "Pressing forward we will head towards Pushtara, which will be our campsite for day four.",
        ],
        briefOverview: [
          "Altitude: 11,115 Ft. to 9,500 Ft. via 12,127 Ft.",
          "Time taken: 6 hrs",
          "Trek Gradient: Ascend trail up to the ridge. A flat path at the ridge followed by the descent to the Pushtara.",
          "Water sources: Carry at least two litres of water from Bhoj Gadi",
        ],
      },
      {
        day: "Day 5",
        title: "Pushtara to Taluka. Drive to Sankri",
        description: [
          "This day we will start with a half hour walk to Taluka so that we can head back to Sankri via Taluka. On the way you will experience beautiful meadows. Another one hour walk will take you away from the grasslands back into the forests filled with Pine & Oak trees.",
          "Trekking another 2 hours we will get close to our destination. Upon reaching Sankri, the Phulara Ridge Trek will come to an end. You will be staying at The Crazy Mountaineers Homestay for today and tomorrow we leave for Dehradun from Sankri.",
        ],
        briefOverview: [
          "Altitude: 9,500 Ft. to 7,953 Ft.",
          "Time taken: 5 hrs trek + 1 hrs drive to Sankri",
          "Trek Gradient: Easy-moderate. Descending trail to Taluka.",
          "Water sources: There is a stream just before you enter the forest, around 1.5 hrs into the trek.",
        ],
      },
      {
        day: "Day 6",
        title: "Departure from Sankri",
        description: [
          "Today marks the last day of your Phulara Ridge trek, and you will be leaving from Sankri to Dehradun with beautiful memories in your mind.",
        ],
        briefOverview: ["Time Taken: 8 to 9 hrs"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport, located 25 km from Dehradun, has daily flights from Delhi. Travelers planning to come by flight should arrive one day early.",
      byTrain: [
        {
          description:
            "Take the Nandadevi Express (Train no: 12205) departing at 11:50 PM from Delhi, arriving in Dehradun at 5:40 AM.",
        },
        {
          description:
            "Alternatively, take the Dehradun Express (Train no: 12687), which departs Delhi at 9:10 PM and arrives at 5:00 AM.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Regular bus services run from Delhi ISBT Kashmere Gate to Dehradun. It is recommended to use government buses from ISBT Kashmere Gate, as private buses from outside ISBT may not be reliable.",
        },
        {
          type: "text",
          content:
            "Most buses drop passengers at Dehradun ISBT, from where you will need to reach Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM. This pick-up service is included in the trek cost.",
        },
        {
          type: "text",
          content:
            "You will reach Sari village by 3:00 PM and Sankri by 4:00 PM. Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "Where is Phulara Ridge located in Uttarakhand?",
        answer:
          "The Phulara Ridge Trek is located in Govind Pashu Vihar National Park in Uttarkashi District. The trek starts from Sankri village.",
      },
      {
        question: "What is the best time to visit Phulara Ridge?",
        answer:
          "The best time to visit the Phulara Ridge is during summers from May to July.",
      },
      {
        question: "What is the altitude of Phulara Ridge?",
        answer:
          "Phulara Ridge trek is a high altitude ridge trek with a maximum altitude of 12,100 ft. above sea level.",
      },
      {
        question: "What is the trek distance of Phulara Ridge?",
        answer:
          "During the Phulara Ridge trek, you will have to cover a distance of 25 km.",
      },
      {
        question: "Can we get mobile signals on this trek?",
        answer:
          "Mobile networks are not available during the trek, but BSNL works at the base camp in Sankri.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Buran Ghati Trek",
    title: "Buran Ghati Trek - Musical Valley",
    tourCode: "122132150",
    price: "₹ 14,499",
    mapImg: "",
    overview: {
      title: "Buran Ghati Trek",
      paragraphs: [
        "The Buran Ghati trek is a moderate to difficult level difficulty trek, great for adventure seekers who love the rush of adrenaline. This trek offers an overall trekking experience with trail crossing through mountains, dense frost cover and vast green meadows. The trail of Buran Ghati trek offers the best camping sites with huge meadows and snow capped mountains towering in the background.",
        "The trek will take you through the dense forest of Oak and Pine, extensive green meadows and over the sharp edges of snow clad mountain peaks. The main highlight of the trek is a sacred lake called Chandranahan, located at a height of 13,800 feet above the sea level. So, if you are looking for an adventure filled thrilling trek, Buran Ghati is the perfect location.",
      ],
    },
    duration: "7 Days",
    distance: "37 km",
    altitude: "15,000",
    Grade: ["Moderate", "Difficult"],
    location: {
      state: "Himachal Pradesh",
      region: "",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Shimla to Janglik",
        description: [
          "On the first day, we will drive 160 Km from Shimla to Janglik which is the base camp for the Buran Ghati Trek. The long drive will take about 10 hours to complete and you will be driving through the scenic mountains of the Himalayas and through the forests of Oak & Pine trees. On our way we will cross Rohru, Chirgaon, Tangnu and Tonglu to finally arrive at Janglik. Overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Distance - 160 Km.",
          "Driving Time - 10 Hours.",
          "Max Altitude - 9,200 ft.",
          "Network - Uptill Rohru",
          "Overnight stay at a guest house.",
        ],
      },
      {
        day: "Day 2",
        title: "Janglik to Dayara Thatch",
        description: [
          "We will wake up early in the morning and after having breakfast, we start walking on one of the most beautiful treks in the Himalayan Valley. You will cross many wooden houses and wheat fields on the beginning of the trail. After climbing up for about an hour you will be able to get complete views of Diude and other small villages located in the area.",
          "Soon the trail will enter into a forest of Pine and Oak. The forest trail is easy with a number of small streams along the path, so you can take your time to enjoy the beauty of nature around you. As we keep walking the forest will get thicker and darker and the trail will enter a gradual ascent. We will reach the camping ground for today as we exit the forest cover.",
        ],
        briefOverview: [
          "Trekking Distance - 4 Km.",
          "Trekking Time - 5 Hours",
          "Max Altitude - 11,150 ft.",
          "Overnight stay in camps",
        ],
      },
      {
        day: "Day 3",
        title: "Dayara Thatch to Litham",
        description: [
          "Today’s trail is a short hike of 3 Km. and we can spend some time exploring the Dayara meadows and acclimatizing to the high altitude weather. Having breakfast and tea when the first rays of the sun hit the bugyal in the morning makes up for a beautiful experience.",
          "The path to Litham crosses through a dense forest, green meadows and gushing streams. You will come across a forest of Bhoj trees and will be able to spot the snow capped Dhauladhar mountain range. From this location you will be able to get a clear view of our next camping site. We will cross the Chandranahan river to reach Litham.",
        ],
        briefOverview: [
          "Trekking Distance - 3 Km.",
          "Trekking Time - 4 Hours",
          "Max Altitude - 11,800 ft.",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 4",
        title: "Acclimatization day, visit to Chandranahan lake",
        description: [
          "We are scheduled to visit Chandernahan Lake, the trek to the lake is a hike of 3 Km. We will have to start early in the morning because the trail is a difficult steep ascent and will take 3 to 4 hours to climb. The walk, although difficult, is very exciting and satisfying because of the panoramic views. You will find snow over here even if you visit this place in the month of June. The view at the lake will leave you spellbound and you can spend some time near the lake and exploring the area. Soon we will be heading back to our campsite at Litham to spend the night at camps. The trail is a sharp downward descent so walk slowly and watch your steps carefully.",
        ],
        briefOverview: [
          "Trekking Distance - 6 Km.",
          "Trekking Time - 7 Hours",
          "Max Altitude - 13,800 ft.",
          "Night stay at Litham Campsite",
        ],
      },
      {
        day: "Day 5",
        title: "Litham to Dhunda",
        description: [
          "To reach Dhunda from Litham we will have to climb up for about 2 hours. Dhunda is located at a high altitude of 13,300 feet. On the trail you will be able to spot the towering mountains of Dhauladhar range covered with snow to your front along with Grasslands towards your left and Rupin Valley to your right side. The trail will enter a sharp ascend and from there you will be able to get your first view of the Buran Valley.",
          "The campsite at Dhunda is one of the most beautiful on the entire trek. From there you will get a clear view of the Buran Ghati and we will be camping surrounded by huge snow covered mountains.",
        ],
        briefOverview: [
          "Trekking Distance - 4 Km.",
          "Trekking Time - 6 Hours",
          "Max Altitude - 13,300 ft.",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 6",
        title: "Dhunda to Munirang (River camp) via Buran Ghati Pass",
        description: [
          "We will wake up in the morning for a long day in front of us. Today we will hike for about 10 hours to Munirang River Camp via Buran Ghati Pass. The trail is both ascending and descending but it is easier to cover this trek in September when there is no snow. The trail is difficult as you will find yourself walking over boulders and crossing narrow ledges. The Buran Ghati is located at an altitude of 15,000 feet.",
          "Descending down from the valley is the next challenging task and you need to be very careful and follow the instructions of your trek leader. Overnight stay at Munirang River Camp.",
        ],
        briefOverview: [
          "Trekking Distance - 7 Km",
          "Trekking Time - 11 Hours",
          "Max Altitude - 15,000 ft.",
          "Overnight stay in camps",
        ],
      },
      {
        day: "Day 7",
        title: "Munirang (River camp) to Barua village, Drive to Shimla",
        description: [
          "Today is the last day of the Buran Ghati Trek and we will be trekking down to Barua Village which is well known for its flaura. The trek offers a mesmerizing experience even when you are climbing down. As we keep descending you will see a large stream and we will cross it to the other side. You will also see many apricot and peach trees on the way.",
          "At the end of the trail you will spot apple orchards and signs of cultivation signifying that we are close to our destination. The trail to the village is a rapid descent and a vehicle will be waiting there for you to take you back to Shimla.",
          "You are expected to arrive in Shimla late at night, so make your reservations / plans accordingly.",
        ],
        briefOverview: [
          "Trekking Distance - 5 Km.",
          "Trekking Time - 4 Hours",
          "Driving Distance - 228 Km",
          "Driving Time - 7 Hours",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Located 22 km from Shimla, Jubbarhatti Airport is well connected to various cities by air. Other nearby airports include Chandigarh Airport and Delhi Airport, which are easily accessible.",
      byTrain: [
        {
          description:
            "The nearest station is Kalka, connecting Shimla with different parts of the country by rail. Trains are available from cities like Delhi and Kolkata. From Kalka, you can enjoy a toy train ride or hire private cabs to explore the beauty of Shimla.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Shimla is well connected by road to cities like Chandigarh, Delhi, Dehradun, and Kalka. Taxis and state buses are available for reaching Shimla from these cities.",
        },
        {
          type: "text",
          content:
            "There are regular bus services from nearby locations such as Kullu (235 km), Manali (280 km), Delhi (370 km), and Ambala (154 km). From Delhi, you can opt for luxury buses or cabs for a comfortable journey.",
        },
        {
          type: "text",
          content:
            "THE CRAZY MOUNTAINEERS’ Tata Sumo or similar vehicles will pick you up from Shimla Old Bus Stand at 6:30 AM. Pick-up is included in the trek cost.",
        },
        {
          type: "text",
          content:
            "You will reach Janglik by 4:30 PM. Food from Shimla to Janglik is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "What is the total distance of Bali Pass Trek?",
        answer:
          "The total distance of the Bali Pass Trek is about 60 kms, and you will be covering around 8 km on average each day.",
      },
      {
        question: "What is the maximum altitude of Bali Pass Trek?",
        answer:
          "This is a high-altitude trek with a maximum height of 16,200 ft. above sea level.",
      },
      {
        question: "What are the starting and ending points of Bali Pass Trek?",
        answer:
          "The trek begins from Sankri and ends at Jan Ki Chatti, from where we drive back to Dehradun.",
      },
      {
        question: "Can beginners do this trek?",
        answer:
          "Generally, the Bali Pass Trek is not recommended for beginners because of the rough terrain, steep ascents, and high altitude.",
      },
      {
        question: "Which months are best for Bali Pass Trek?",
        answer:
          "The best time to visit Bali Pass is the pre- and post-monsoon period from May to July and September to October.",
      },
      {
        question: "Is Buran Ghati trek safe?",
        answer:
          "Buran Ghati is considered a moderate difficulty trek, and if done with a team of professional trekkers, it's a very safe trek.",
      },
      {
        question: "Maximum altitude of Buran Ghati trek?",
        answer:
          "The maximum altitude of this trek is 15,000 ft. above sea level.",
      },
      {
        question: "What is the exit point of Buran Ghati trek?",
        answer:
          "The trek will end at Barua village, from where we will be driving back to Shimla.",
      },
      {
        question: "How long is the Buran Ghati trek?",
        answer:
          "While on Buran Ghati Trek, you will have to cover 37 km from the point you start walking.",
      },
      {
        question: "Will there be any mobile phone network on the trek?",
        answer:
          "Mobile connections will not be available, so make sure to finish all your important calls when you arrive at Shimla.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Phulara Ridge Trek",
    title: "Phulara Ridge Trek - An unusual Himalyan Trek",
    tourCode: "122132151",
    price: "₹ 7,999",
    mapImg: "",
    overview: {
      title: "Phulara Ridge Trek",
      paragraphs: [
        "Phulara Ridge Trek is one of the most beautiful treks in India due to its scenic landscape. In a country like India, usually, ridge treks are not very popular. People are few in numbers who keep aspirations for ridge summits. But after getting exploration, this trek has become one of the best desires for a trekker to get done. The Phulara Ridge Trek height is 12000 feet.",
        "Phulara ridge trek starts from a small village named Sankari in the Uttarkashi district of Uttarakhand. Also, Sankari is a basecamp for other treks, including Har ki dun, Kedarkantha Trek, and Ruinsara.",
        "The Phulara Ridge Trek distance is 25Km to walking through this ridge for 4-5 hours you see lovely meadows on one side and a beautiful valley and the mountain views on another side is mesmerizing experience. Phulara Ridge Trek is in the middle of two valleys where you find a trail to walk. It feels like you are walking through the edges of a knife. Finding huge mountains all around you is spectacular.",
        "Watching fully snow-covered mountains over an angle of 250 degree keeps you joyful throughout the trek. Being in the middle of the mountains makes you feel amazed and delighted. For a while, you will think of not going anywhere and to leave such a pleasant landscape. A stunning view of the other mountain ranges including Dev Kayara peak from the top of Phulara ridge Trek makes you mad and joyful.",
        "You walk through the dense forest before and after climbing the ridge where you see the different types of tree-like oaks, dwarf rhododendrons, maples, pines, and silver birch. Mostly, this trail is not used by locals. You will also see the carpet of the meadows, lovely flowers, greenery, and tiny plants growing everywhere in the landscape. This site makes anyone fall in love with this place. Sun lighting is streaming through the various angles in the dark forest, giving you a pleasant view.",
        "You will also get to see many birds on the way you go through. You can hear their chirping in the dark and dense forest. Especially, Himalayan Monal which is a colorful bird is one of the centers of attractions during the Phulara Ridge Trek visit. The best time for doing this trek is from the middle of March to the middle of June. And next, from the middle of September to the middle of October. The temperature at Phulara ridge trek is around 8 to 15 degrees Celsius during the daytime & can drop as low as -5 degrees Celsius during the night.",
      ],
    },
    duration: "6 Days",
    distance: "25 km",
    altitude: "12,100",
    Grade: ["Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Sankri",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Reach Sankri (Phulara Ridge Trek itinerary)",
        description: [
          "The first day of Phulara Ridge Trek starts with a drive from Dehradun to Sankri, which is a small village located in the Uttarkashi district of the state of Uttarakhand. Sankri is a base camp for many other treks, such as Kedarkantha, Har ki dun and others. It is a beautiful village and offers breathtaking views of various Himalayan peaks such as Swargarohini peak. On our way to Sankri from Dehradun we will pass through Mussoorie, Nainbagh, Naugaon, Purola, Mori, Naitwar & Sankri.",
        ],
        briefOverview: [
          "Altitude: 6,397 Ft.",
          "Time Taken: 8-10 hrs drive from Dehradun.",
        ],
      },
      {
        day: "Day 2",
        title: "Sankri to Sikolta",
        description: [
          "On the second day, we will start walking to Sikolta from Sankri. We will be crossing a beautiful pine forest and after walking for around one and a half an hour on an ascending trail, you will reach a bridge and cross over to the other side. Be careful and take small steps as you climb up the trail. As we move forward, we will reach the “Jainot Thatch” and 10 minutes later you will find yourself at the beautiful place called Dhaunda from there you can get your first glimpse of Phulara Ridge. We will continue to walk and reach “Sikota” which is a nice open meadow patch. This will be our camping spot for today.",
        ],
        briefOverview: [
          "Altitude: 6,397 Ft. to 9,300 Ft.",
          "Time Taken: 5 hours",
          "Trek Gradient: Moderate. Ascending trail throughout.",
          "Water sources: A small stream near the broken bridge, around 3.5-4 hrs into the trek",
        ],
      },
      {
        day: "Day 3",
        title: "Sikolta to Bhoj Gadi via Karsu Thatch",
        description: [
          "Today we will be heading towards Bhoj Gadi from Sikolta, ascending through the dark & dense forest for about 30 min. Soon we will reach a bridge crossing with a beautiful stream flowing near the bridge where we can fill our water bottles. After walking for around 15 more minutes from the location of the bridge we will reach the “Karasu Thatch” which is mostly filled with mesmerizing green plants with yellow flowers.",
          "From here you can see the famous Kedarkantha peak, the trail will enter a gradul accent and you will notice a gradual decline in the tree line, but you will see the beautiful Rhododendron plants & Bhoj trees on the trail. Walking for 30 more minutes on the ascending trail, we will reach open lush green meadows.",
          "You will be able to see Dhunda top, and a 15 minutes walk from here will take us to the campsite the Bhoj Gadi. From the campsite you will be able to witness the beauty of Kedarkantha, Swargarohini & some other Himalayan Peaks.",
        ],
        briefOverview: [
          "Altitude: 9,300 Ft. To 11,155 Ft.",
          "Time taken: 4 hrs",
          "Trek Gradient: Easy-Moderate. Ascending trail throughout.",
          "Water sources: A stream near the bridge, around an hour into the trek.",
        ],
      },
      {
        day: "Day 4",
        title: "Bhoj Gadi to Pushtara via Phulara ridge",
        description: [
          "The fourth day of the phulara ridge trek will start with an amazing sunrise view. As we walk for around 2 and a half hours, we reach pushtara and it will remove all the stress of the long walk. The trail is full of accents and descents and you will be able to witness the beauty of the pine forests and will be able to get a clear view of Hanuman Top, Sarutal Top, DKD, Bandarpoonch, Kalanag, Swargarohini, Hata Peak (HKD), Ranglana, Devkyara valley, Lekha Top, Vijay Top & Kedarkantha.",
          "Pressing forward we will head towards Pushtara, which will be our campsite for day four.",
        ],
        briefOverview: [
          "Altitude: 11,115 Ft. to 9,500 Ft. via 12,127 Ft.",
          "Time taken: 6 hrs",
          "Trek Gradient: Ascend trail up to the ridge. A flat path at the ridge followed by the descent to the Pushtara.",
          "Water sources: Carry at least two litres of water from Bhoj Gadi",
        ],
      },
      {
        day: "Day 5",
        title: "Pushtara to Taluka. Drive to Sankri",
        description: [
          "This day we will start with a half hour walk to Taluka so that we can head back to Sankri via Taluka. On the way you will experience beautiful meadows. Another one hour walk will take you away from the grasslands back into the forests filled with Pine & Oak trees.",
          "Trekking another 2 hours we will get close to our destination. Upon reaching Sankri, the Phulara Ridge Trek will come to an end. You will be staying at The Crazy Mountaineers Homestay for today and tomorrow we leave for Dehradun from Sankri.",
        ],
        briefOverview: [
          "Altitude: 9,500 Ft. to 7,953 Ft.",
          "Time taken: 5 hrs trek + 1 hrs drive to Sankri",
          "Trek Gradient: Easy-moderate. Descending trail to Taluka.",
          "Water sources: There is a stream just before you enter the forest, around 1.5 hrs into the trek.",
        ],
      },
      {
        day: "Day 6",
        title: "Departure from Sankri",
        description: [
          "Today marks the last day of your Phulara Ridge trek, and you will be leaving from Sankri to Dehradun with beautiful memories in your mind.",
        ],
        briefOverview: ["Time Taken: 8 to 9 hrs"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Jolly Grant Airport, located 25 km from Dehradun, has daily flights from Delhi. Travelers planning to come by flight should arrive one day early.",
      byTrain: [
        {
          description:
            "Take the Nandadevi Express (Train no: 12205) departing at 11:50 PM from Delhi, arriving in Dehradun at 5:40 AM.",
        },
        {
          description:
            "Alternatively, take the Dehradun Express (Train no: 12687), which departs Delhi at 9:10 PM and arrives at 5:00 AM.",
        },
      ],
      byBus: [
        {
          type: "text",
          content:
            "Regular bus services run from Delhi ISBT Kashmere Gate to Dehradun. It is recommended to use government buses from ISBT Kashmere Gate, as private buses from outside ISBT may not be reliable.",
        },
        {
          type: "text",
          content:
            "Most buses drop passengers at Dehradun ISBT, from where you will need to reach Dehradun Railway Station.",
        },
        {
          type: "text",
          content:
            "Our Tata Sumo or similar vehicles will pick you up from Dehradun Railway Station at 6:00 AM. This pick-up service is included in the trek cost.",
        },
        {
          type: "text",
          content:
            "You will reach Sari village by 3:00 PM and Sankri by 4:00 PM. Food from Dehradun to Sankri is not included in the trek cost.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [
      {
        question: "Where is Phulara Ridge located in Uttarakhand?",
        answer:
          "The Phulara Ridge Trek is located in Govind Pashu Vihar National Park in Uttarkashi District. The trek starts from Sankri village.",
      },
      {
        question: "What is the best time to visit Phulara Ridge?",
        answer:
          "The best time to visit the Phulara Ridge is during summers from May to July.",
      },
      {
        question: "What is the altitude of Phulara Ridge?",
        answer:
          "Phulara Ridge trek is a high altitude ridge trek with a maximum altitude of 12,100 ft. above sea level.",
      },
      {
        question: "What is the trek distance of Phulara Ridge?",
        answer:
          "During the Phulara Ridge trek, you will have to cover a distance of 25 km.",
      },
      {
        question: "Can we get mobile signals on this trek?",
        answer:
          "Mobile networks are not available during the trek, but BSNL works at the base camp in Sankri.",
      },
    ],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Char Dham Yatra",
    title: "Char Dham Yatra: A Journey to Peace",
    tourCode: "122132152",
    price: "₹ 24,999",
    mapImg: "",
    overview: {
      title: "Char Dham Yatra",
      paragraphs: [
        "Char Dham is also known as Chota Char Dham, is a place of four pilgrimage sites in India. Char Dham Yatra is the most famous pilgrim in India for Hindus, which is a holy way to attain salvation (Moksha) for humans according to ancient Puranas. It is believed that if a devotee visits these four sites once in a lifetime, his life becomes successful and dies peacefully.",

        "Adi Shankaracharya was an Indian philosopher and theologian, who defined Char Dham as four pilgrimage sites for Hindu named Kedarnath, Badrinath, Yamunotri, and Gangotri.",

        "Char Dham is located in the beautiful range of the Himalayas Garwhal region of Uttarakhand state in India. These four holistic Char Dham temples are also the place of four sacred rivers named Mandakini river (Kedarnath), Alaknanda river (Badrinath), Yamuna River (Yamunotri), and the Ganga River (Gangotri).",

        "These four Dhams are places of worship of Lord Shiva and Lord Vishnu and are associated with the ancient culture and tradition of the country.",

        "It is believed that if you want to visit all the four Dhams in one journey, then you should go to Yamunotri, then Gangotri, then to Kedarnath, and finally to Badrinath.",

        "Yamunotri shrine attracts pilgrims and tourists because of its religious importance as well as the scenic beauty. Here, you take a birds-eye view of snow-capped high mountain peaks, the lush green forests of cedar and pine, the fog spreading between them, the sunlight shining on the icy mountains, the Yamuna flowing with the sound of winds.",

        "The cool stream of the river fascinates the mind. Slogans written everywhere for winding paths, landslides, safe travel, and protecting forests make people on the trip realize their responsibility.",

        "The glaciers and hot springs located at Yamunotri are the centers of attraction for all tourists. There is a divine rock in the temple. The divine rock is worshiped along with the darshan and worship of the mother the Yamuna. A thin stream of water flows from the cave gate near this rock, this is the origin of the Yamuna.",

        "Gangotri’s name was introduced due to the origin of the Ganga river at this place. The Ganges is the principal river of India, which flows out of the mountains of the Himalayas and flows eastward and joins the Bay of Bengal.",

        "On the way from Uttarkashi to Gangotri, waterfalls, cedars, and dense trees of pine flow from place to place, making the tourists happy and joyful.",
      ],
    },
    duration: "10 Days",
    distance: "1,607 km",
    altitude: "11,657",
    Grade: ["Moderate"],
    location: {
      state: "Uttarakhand",
      region: "Utarkashi",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Haridwar to Barkot",
        description: [
          "On the first day of your char dham yatra, you will be picked up from Haridwar Railway Station by The Crazy Mountaineers, we will then drive to Barkot via the queen of hills - Mussooriee. On our way we'll be stopping at the Kempty fall at Mussoorie. Once we reach Barkot we will check in to camp/hotel and you will be free to explore the area or rest yourself for the Yamnotri Yatra tomorrow.",
        ],
        briefOverview: [
          "Pickup Location: Haridwar Railway Station",
          "Destination: Barkot via Mussoorie",
          "Driving Distance: 186.7 Km",
          "Driving Time: Approximately 5 Hours 40 Minutes",
          "Accommodation: Stay at Barkot",
        ],
      },
      {
        day: "Day 2",
        title: "Barkot to Yamunotri & Back to Barkot",
        description: [
          "After having breakfast we will depart for Hanumanchatti which is 40km from Barkot & then another 5 Km will take us to Janki Chatti from where we will start our trek to Yamunotri. The 6 Km long trek passes through a beautiful valley with a wide variety of fauna that includes conifers, rhododendrons, cacti and other plants that grow wild in this region of the Himalayas. If you don’t want to walk, you can hire a doli or a horse, the cost of which is not included in the package. After darshan at the Yamunotri temple, we will drive back to Barkot back to the hotel to rest for the night.",
        ],
        briefOverview: [
          "Drive from Barkot to Janki Chatti",
          "Driving Distance: 45.8 Km",
          "Driving Time: Approximately 2 Hours 2 Minutes",
          "Trekking Distance: 6 Km",
          "Trekking Time: 1 Hour",
        ],
      },
      {
        day: "Day 3",
        title: "Barkot to Uttarkashi",
        description: [
          "We will check out of our Barkot hotel in the morning after breakfast and drive to Uttarkashi. The entire route is filled with beautiful and picturesque views of the himalayan valley. Uttarkashi is located on the banks of the Bhagirathi river. On arrival, we will check in the hotel and you can check out the area around which is famous for its temples, ashrams and historical monuments. Overnight stay & dinner will be at our hotel in Uttarkashi.",
        ],
        briefOverview: [
          "Drive from Barkot to Uttarkashi",
          "Driving Distance: 23 Km",
          "Driving Time: Approximately 2 Hours 56 Minutes",
          "Stay at Uttarkashi",
        ],
      },
      {
        day: "Day 4",
        title: "Uttarkashi to Gangotri & Back to Uttarkashi",
        description: [
          "Today is a long day & after having an early breakfast we will leave for Gangotri which is located in the beautiful Garhwal Himalayan region at an altitude of 3050m. Once we reach Gangotri, you can take a dip in the Holy Ganges which is called Bhagirathi at its point of origin. After that visit the Gangotri Temple, which is a 18th century temple dedicated to Goddess Ganga and is located near the sacred stone where the King Bhagirathi worshipped Lord Shiva. It is believed that Ganga first touched earth on this point. The temple is a 20 feet high magnificent structure made out of white granite. After pooja we will drive back to Uttarkashi where we will stop for the night.",
        ],
        briefOverview: [
          "Drive from Uttarkashi to Gangotri",
          "Driving Distance: 99.5 Km",
          "Driving Time: Approximately 2 Hours 59 Minutes",
          "Darshan at Gangotri Temple",
          "Stay at Uttarkashi",
        ],
      },
      {
        day: "Day 5",
        title: "Uttarkashi to Guptkashi",
        description: [
          "After breakfast, we check out from the hotel and drive to Guptkashi. The 270 Km drive will take about 9 hours. Once at Guptkashi we will be checking in to the hotel and go for a medical checkup for next day’s trip to the Kedarnath Temple. Dinner and overnight stay will be at Guptkashi.",
        ],
        briefOverview: [
          "Drive from Uttarkashi to Guptkashi",
          "Driving Distance: 270.7 Km",
          "Driving Time: Approximately 9 Hours 14 Minutes",
          "Medical Checkup",
          "Stay at Guptkashi",
        ],
      },
      {
        day: "Day 6",
        title: "Guptkashi to Kedarnath",
        description: [
          "We will be waking up early and have our breakfast, after which we will drive to Gaurikund. Mandakini, which is one of the main tributaries of the river Ganga originates at this point. From Gaurikund, begins the 17 Km trek to Kedarnath. You can hire a doli or a horse if you don’t want to walk. The cost of horse/doli is not included in the package. The view as you inch closer to Kedarnath is mesmerizing with tall peaks that reach to touch the sky, the mist that continuously makes the peaks appear and disappear. Upon arrival at Kedarnath, stay/dinner will be at Govt. lodges/camps.",
        ],
        briefOverview: [
          "Drive from Guptkashi to Gaurikund",
          "Driving Distance: 14 Km",
          "Driving Time: Approximately 45 Minutes",
          "Trek to Kedarnath",
          "Trekking Distance: 17 Km",
          "Trekking Time: Approximately 9 Hours",
        ],
      },
      {
        day: "Day 7",
        title: "Kedarnath to Guptkashi",
        description: [
          "Wake up before dawn early in the morning and take a bath and get ready for “Abhishek” to Shiva at the Kedarnath temple. You need to be at the temple before 4:45 am. After puja we will head back to the Govt camps/loge and prepare for the hike back to Gaurikund. Upon arrival at Gaurikund, the vehicle waiting for you will take you back to the hotel at Guptkashi for overnight stay and dinner.",
        ],
        briefOverview: [
          "Drive from Kedarnath to Guptkashi",
          "Driving Distance: 14 Km",
          "Driving Time: Approximately 45 Minutes",
          "Trek to Kedarnath",
          "Trekking Distance: 17 Km",
          "Trekking Time: Approximately 9 Hours",
        ],
      },
      {
        day: "Day 8",
        title: "Guptkashi to Badrinath",
        description: [
          "At 8:00 am after having breakfast, you will check out from the hotel and drive to Badrinath via Joshimath. The distance between Guptkashi & Badrinath is about 197 Km and takes 7 hours time. On arrival after checking in to the hotel you can choose to rest or go to the Badrinath Temple for darshan in evening. You will have to take a bath in the hot spring known as “Tapta Kund”. The temple is a 15m high structure dedicated to Lord Vishnu. Overnight stay and dinner at a hotel in Badrinath.",
        ],
        briefOverview: [
          "Drive from Guptkashi to Badrinath",
          "Driving Distance: 195 Km",
          "Driving Time: Approximately 7 Hours",
          "Stay at Badrinath",
        ],
      },
      {
        day: "Day 9",
        title: "Badrinath to Pipalkoti",
        description: [
          "Early morning we will go to Badrinath Temple darshan after which we return back to the hotel and have breakfast. After a brief sightseeing at Badrinath visiting Ganesh Gufa, Vyas Gufa, Mata Murti temple we will drive to Pipalkoti in the afternoon. Pipalkoti is at a distance of 76 Km from Badrinath and will take 3 hours to reach there. You can explore the town, stay and dinner at Pipalkoti.",
        ],
        briefOverview: [
          "Drive from Badrinath to Pipalkoti",
          "Driving Distance: 76 Km",
          "Driving Time: Approximately 3 Hours",
          "Stay at Pipalkoti",
        ],
      },
      {
        day: "Day 10",
        title: "Pipalkoti to Haridwar",
        description: [
          "Today marks the last day of your Char Dham Yatra Package & early morning after breakfast we will leave for Haridwar. It will take anywhere from 8 to 10 hours to reach depending on the route (NH 7 or NH 7 & NH543). You will be dropped off at the Haridwar Railway Station.",
        ],
        briefOverview: [
          "Drive from Kedarnath to Guptkashi",
          "Driving Distance: 14 Km",
          "Driving Time: Approximately 45 Minutes",
          "Trek to Kedarnath",
          "Trekking Distance: 17 Km",
          "Trekking Time: Approximately 9 Hours",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {},
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Bhrigu Lake Trek",
    title: "Bhrigu Lake Trek - High Altitude Grasslands",
    tourCode: "122132154",
    price: "₹ 5,749",
    mapImg: "",
    overview: {
      title: "Bhrigu Lake Trek",
      paragraphs: [
        "Bhrigu Lake Trek is an adventurous high altitude glacial trek located at an altitude of 14,000 ft. above sea level. Mostly the trails that lead to such beautiful locations are difficult to cross but even though it's a long trek, the trail is relatively easy. The beautiful Bhrigu lake is located in the upper Kullu Valley on the eastern side of the Rohtang Pass in Himachal Pradesh.",
        "The lake has historical as well as religious importance to the locals. Bhrigu Lake Trek is preferred by both beginners as well as experienced level trekkers. The majestic views of Seven Sister Peaks, Teo Tibba, Pir Panjal Ranges, thick forests of Deodar for a forest makes a spellbinding view for the trekkers. Apart from this, you will be able to spot wildlife like the Himalayan Monal and Snow Cocks. The Bhrigu Lake Trek opens up for trekkers from mid May until the month of October.",
      ],
    },
    duration: "4 Days",
    distance: "25 km",
    altitude: "14,100",
    Grade: ["Easy"],
    location: {
      state: "Himachal Pradesh",
      region: "Kullu",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "From Manali drive to Gulaba and trek to Gulaba Meadows camp",
        description: [
          "The trek starts from Manali and we will be driving 22 Km on the Manali - Rohtang Pass Road to Gulaba which will take approximately one and a half hours. We will be crossing the beautiful hill towns of Kolang, Palchan & Kothi. The view gets more beautiful as we inch closer to Gulaba. ",
          "After having lunch at Gulaba, we will take a short trek of about 3 Km. to Gulaba Meadows Camp which is a huge grassland and provides a perfect camping location.",
        ],
        briefOverview: [
          "Driving Distance: 22 Km",
          "Driving Time: 1 hour 30 min",
          "Trekking Distance: 3 Km",
          "Trekking Time: 1 hour 30 min",
          "Max Altitude: 10,300 ft",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 2",
        title: "Gulaba to Rola Kholi",
        description: [
          "Today we are going to trek 6 Km. for about 4 hours on a steep trail. We will be walking under the dense forest cover of oak and birch trees. The sunlight filtered by the canopy of the forest makes a beautiful view. As we cross the forest cover we will enter a vast green meadow that is used as a grazing ground by the domesticated animals of the local people who live here.",
          "We will enter the forest cover again and upon crossing the forest the trail will start to get steeper and narrower until we reach another grassland at Rola Kholi. Overnight stay will be at tents.",
        ],
        briefOverview: [
          "Trekking Distance: 6 Km",
          "Trekking Time: 4 Hours",
          "Max Altitude: 12,500 ft",
          "Overnight stay at tents",
        ],
      },
      {
        day: "Day 3",
        title: "Rola Kholi to Bhrigu Lake back to Rola Kholi",
        description: [
          "We will wake up early in the morning and after having breakfast we will start walking to our next destination - Bhrigu Lake at 14,000 ft. We will be covering a distance of 10 Km in about 8 hours. Rola Kholi remains covered with snow until the month of June. ",
          "The final stretch to the Bhrigu Lake is a bit tricky as the path is filled with slippery boulders so walk carefully and follow the instructions of your trek leader. As we reach closer to the last boulder you will be able to view the magnificent lake between the two ridges.",
          "From the lake you will also be able to view the Solang Valley and the majestic peaks of Pir Panjal & Dhauladhar range. After spending some time at the Bhrigu Lake, we will be trekking back to Rola Kholi",
        ],
        briefOverview: [
          "Trekking Distance: 10 Km",
          "Trekking Time: 8 Hours",
          "Max Altitude: 14,000 ft",
          "Overnight stay at Rola Kholi",
        ],
      },
      {
        day: "Day 4",
        title: "Rola Kholi to Gulaba drive to Manali",
        description: [
          "The final day of the Bhrigu Lake Trek has finally arrived and we will be trekking back to Gulaba from Rola Kholi. The trek is an easy trail and will take approximately 3 hours and we will drive back to Manali.",
        ],
        briefOverview: [
          "Trekking Distance: 6 km",
          "Trekking Time: 3 Hours",
          "Drop off at Manali",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Bhuntar, which is 52 km away from Manali, is the nearest airport. Taxi services are available from Bhuntar to Manali, costing about Rs. 700-1000. Bhuntar is well connected to Delhi by air with airlines like Indian Airlines, Kingfisher Airlines, MDLR Airlines, and Jagson Airlines operating flights from Delhi and Chandigarh to Kullu.",
      byRoad: [
        {
          type: "text",
          content:
            "Manali is well connected to Delhi. Take an overnight bus from Delhi to Manali. Tickets can be booked online at www.redbus.in or www.hrtc.gov.in. Most Volvo private buses leave Delhi between 5 PM and 6 PM, while the last government bus leaves at 8:30 PM from ISBT Kashmere Gate.",
        },
        {
          type: "text",
          content:
            "Buses from Manali to Delhi leave between 4 PM and 5 PM. Your tentative arrival in Delhi may be between 6 AM and 10 AM. Plan your onward journeys only after noon, allowing for bus delays.",
        },
        {
          type: "text",
          content:
            "Trekkers need to take only those VOLVO buses which reach Manali by 11:00 AM on the first day. Our reporting time is 12:00 PM at Manali. If you cannot reach by the meeting/briefing time, we will transfer your seat to the next batch or cancel your trek. Please double-check your bus timing with your transporter.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Kanamo Peak Trek",
    title: "Kanamo Peak Trek - Spiti Valley",
    tourCode: "122132155",
    price: "₹ 13,299",
    mapImg: "",
    overview: {
      title: "Kanamo Peak Trek",
      paragraphs: [
        "The Kanamo Peak Trek offers a very unique Himalayan trekking experience. The view of Kinnaur Lahaul Spiti from a high altitude of 19,553 ft. is once in a lifetime experience. The trek passes through mountain deserts, sparse vegetation and only a touch of snow near the summit. The trail will take you through villages on the Kaza to Kibber stretch.",
        "This trek is a moderate difficulty trek, and therefore the trail gets a little tricky from time to time. You will find yourself walking on boulders covered with snow. It is important to listen to your trek leader and follow his instructions.",
        "Kanamo Peak Trek requires you to be in a physically and mentally fit condition. The high altitude climbing increases the chances of Altitude Mountain Sickness (AMS) and therefore you are advised to follow a strict health regime at least 3 months prior to the trek.",
      ],
    },
    duration: "7 Days",
    distance: "27 km",
    altitude: "19,553",
    Grade: ["Moderate"],
    location: {
      state: "Himachal Pradesh",
      region: "Kullu",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Manali to Kaza",
        description: [
          "On the first day we will drive 183 Km from Manali to Kaza. The drive on the Manali - Leh Highway is filled with scenic beauty especially near the Rohtang Pass area. You will be able to view towering mountains through the journey. As we cross Batal towards the end of the journey, you would have entered the Spiti Valley which becomes apparent with the beautiful sights of the villages surrounded by the green farming land. Overnight stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Time: 6 Hours",
          "Driving Distance: 183 Km",
          "Max Altitude: 12,470 ft.",
          "Network: Available",
          "Night stay at a guest house",
        ],
      },
      {
        day: "Day 2",
        title: "Kaza to Kibber",
        description: [
          "A one hour drive from Kaza will take us to Kibber at an altitude of 14,108 ft. Driving across the cold deserted roads, you will reach Kibber by lunchtime. You can spend the rest of the day exploring the areas in and around Kibber.",
          "An important monastery called the Gompa Monastery is located here. The height of the monastery offers a great view of the surroundings with the Spiti River flowing below. You can spend some time with the monks exploring the monastery. Night stay will be at a guest house.",
        ],
        briefOverview: [
          "Driving Time: 1 Hour",
          "Max Altitude: 14,010 ft.",
          "Night stay at a guest house.",
        ],
      },
      {
        day: "Day 3",
        title: "Acclimatization Stay",
        description: [
          "Kibber is located at a high altitude of 14,010 ft which makes it a perfect place to get acclimated to the weather at high altitude. Today’s day will be spent getting used to the environment around us and conducting walks to get you used to the rocky terrain.",
        ],
        briefOverview: [
          "Acclimatization at 14,010 ft.",
          "Overnight stay at a guest house",
        ],
      },
      {
        day: "Day 4",
        title: "Kibber to Kanamo Base Camp",
        description: [
          "On day four we will be trekking to Kanamo Base Camp, the hike is moderately difficult with a steep ascent as we start walking but the path levels out after 3 - 4 hours of walking then starts descending. You will cross a number of small villages on the way with paths filled with a variety of flowers that can sustain the conditions at this high altitude. The beautiful Brahma Kamal is one of those flowers.",
          "The base camp is situated at an altitude of 15,748 feet and we will spend the night here in the camps.",
        ],
        briefOverview: [
          "Trekking Time - 7 Hours",
          "Max Altitude - 15,748 ft",
          "Night stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: "Base Camp to Kanamo Peak & Back",
        description: [
          "The most awaited day of the Kanamo Peak Trek has finally arrived and today we will be pushing for the Kanamo Peak which is at a towering height of 19,553 ft above sea level.",
          "We will start walking at the break of dawn when the mountains start emerging from the darkness of the night. Make sure to cover up properly because of the chilling winds that blow at this high altitude.",
          "The hike to the top is filled with loose rocks on the path, watch your step carefully and take large steps. The trail is a mix of ascent with flat walks from time to time. As we get closer to the peak, the snow gets deeper at various points.",
          "From the Kanamo top, you will be able to get a mesmerizing view of the Greater Himalayas. You will spot the entire Kinnaur-Lahaul-Spiti area along with clear views of Parang La & Pin Parvati passes. The climb down to the base camp is relatively easier and will take less time than climbing up.",
        ],
        briefOverview: [
          "Trekking Time: 11 Hours",
          "Max Altitude: 19,553 ft",
          "Overnight stay in camps at Kanamo Base Camp",
        ],
      },
      {
        day: "Day 6",
        title: "Base Camp to Kaza via Kibber",
        description: [
          "After breakfast, we will start trekking down towards Kibber on a 6 hour journey. After we have lunch at Kibber we will be driving back to Kaza and the drive will take one hour to complete. Night stay will be at a guest house.",
        ],
        briefOverview: ["Trekking time - 6 Hours", "Driving Time - 1 Hour"],
      },
      {
        day: "Day 7",
        title: "Drive to Manali",
        description: [
          "Starting early in the morning, we will take the familiar road back to Manali. You are expected to arrive at Manali by evening so plan your accommodation or travel accordingly.",
        ],
        briefOverview: ["Driving Distance - 183 Km", "Driving Time - 7 Hour"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Bhuntar, which is 52 km away from Manali, is the nearest airport. Taxi services are available from Bhuntar to Manali, costing about Rs. 700-1000. Bhuntar is well connected to Delhi by air with airlines like Indian Airlines, Kingfisher Airlines, MDLR Airlines, and Jagson Airlines operating flights from Delhi and Chandigarh to Kullu.",
      byRoad: [
        {
          type: "text",
          content:
            "Manali is well connected to Delhi. Take an overnight bus from Delhi, which will take approximately 12 to 14 hours to reach Manali. Tickets can be booked online at www.redbus.in or www.hrtc.gov.in.",
        },
        {
          type: "text",
          content:
            "Tip: Most Volvo private buses leave Delhi between 5 PM and 6 PM. The last government bus leaves at 8:30 PM from ISBT Kashmere Gate.",
        },
        {
          type: "text",
          content:
            "Buses from Manali to Delhi leave between 4 PM and 5 PM. Your tentative arrival in Delhi may be between 6 AM and 10 AM. Plan your onward journeys only after noon, allowing for bus delays.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Yunam Peak Expedition",
    title: "Yunam Peak Expedition - Trek Above 20,000 ft.",
    tourCode: "122132156",
    price: "₹ 14,399",
    mapImg: "",
    overview: {
      title: "Yunam Peak Expedition",
      paragraphs: [
        "If you love heights then the Yunam Peak Trek is well-suited for you. Towering at a height of 20,100 ft, it is one of the rare six-thousander peaks that can help you achieve your higher ambitions. This is a difficult trek and those adventure seekers who are serious about expanding their mountaineering pursuits embark upon this journey.",

        "The Yunam Peak is located in the Lahaul-Spiti area but is not as frequently climbed as compared to Stok Kangri. The Yunam top offers a great vantage point to view the Chandrabhaga & Mulkilla mountain ranges.",

        "The peak is located in the far reaches of Himachal Pradesh with sparse greenery on the cold deserted locations. Yunam Base Camp is located only a few kilometers away from Baralacha La, well known as the highest motorable road in the world.",

        "The transition from greenery to deserted cold mountains when you start the trek is an amazing experience. You will be able to see the far reaches of the planet which are still untouched by human civilizations. Even though this is a difficult trek, strong determination always pays off and you will see yourself standing over the height of 6,000 m above sea level.",
      ],
    },
    duration: "8 Days",
    distance: "22 km",
    altitude: "20,100",
    Grade: ["Difficult"],
    location: {
      state: "Himachal Pradesh",
      region: "Kullu",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival Manali",
        description: [
          "The first day is reserved for checking in at Manali. The team of trekkers will be briefed on the trek and you can spend the day exploring Manali and its culture. You can visit the Hidimba Devi Temple, Vashist Kund and other famous sightseeing sights in and around Manali. Overnight stay will be at a guest house",
        ],
        briefOverview: [
          "Arrival at Manali",
          "Briefing by the trek leader",
          "Overnight stay at a guest house",
        ],
      },
      {
        day: "Day 2",
        title: "Manali to Keylong /Jispa",
        description: [
          "On the second day we will start driving on the Leh-Manali Highway alongside Bhaga River. The ride is filled with varying scenery throughout the journey. You will find yourself crossing the barren empty mountains, snow covered Rohtang Pass and the confluence of rivers Bhaga and Chandra at a place called Tandi.",
          "After driving for about 5 hours we will reach the Keylong / Jipsa area. We will visit Khardang and Shashur Monastery and after having lunch, explore the area around as a part of mandatory acclimatization exercise. Overnight stay will be in camps.",
        ],
        briefOverview: [
          "Driving Distance - 120 Km",
          "Driving Time - 5 Hours",
          "Max Altitude - 3,200 m",
          "Overnight stay in tents",
        ],
      },
      {
        day: "Day 3",
        title: "Keylong / Jispato Bharatpur",
        description: [
          "The destination for today is Bharatpur which is located about 90 Km from Keylong at a height of 4,500 m. Bharatpur is a cold sparsely populated desert but the 4 hour drive is filled with adventures. We will be crossing Deepak and Suraj Tal on the way. Suraj Tal is the origin of river Bhaga river which meets the Chandra river to become Chandrabaga in Himachal Pradesh and flows as Chenab as it enters Jammu & Kashmir.",
          "On our way to Bharatpur we will be crossing the highest motorable road in the world, well known as Baralacha La. We are expected to arrive by afternoon and after having lunch you can check out the local market and fill up on any supplies that you might need on the trek. Night stay in tents.",
        ],
        briefOverview: [
          "Driving Distance - 90 Km",
          "Driving Time - 5 Hours",
          "Max Altitude - 4,500 m",
          "Night stay in camps",
        ],
      },
      {
        day: "Day 4",
        title: "Acclimatization day",
        description: [
          "Travelling from lower altitude to a high altitude may cause problems like headaches, loss of appetite & nausea until your body acclimatizes to the changed environmental conditions. Keeping this in mind, the fourth day of the Yunam Peak Expedition is reserved to get used to the weather conditions at this high altitude.",
          "We will have short hikes to get used to the conditions and terrain. Make sure to drink plenty of fluids and don’t exhaust yourself with heavy exercise or walking long distances.",
        ],
        briefOverview: [
          "Short hikes for acclimatization",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 5",
        title: "Bharatpur to Yunam Base camp",
        description: [
          "Today we will be making our way to the Yunam Peak Base Camp. After having our breakfast in the morning, we will start walking on a rather difficult trail. The hike starts with a steep climb of about 5 Km with gradual increase in gradient.The trek will take 5 hours and the boulder filled path with glacial till makes it difficult for inexperienced trekkers to walk on this path. We will be trekking with heavy snow on the path which makes crampons a necessary equipment.",
          "At the end of today’s hike, we will be walking along a narrow stream which will take us to the base camp. The camp is located near a small lake and makes a perfect setting for camping. Night stay will be in tents.",
        ],
        briefOverview: [
          "Trekking Distance - 4.5 Km",
          "Trekking Time - 5 Hours",
          "Max Altitude - 5,200 m",
          "Overnight stay at camps",
        ],
      },
      {
        day: "Day 6",
        title: "Base camp Acclimatization",
        description: [
          "We will spend the sixth day of the Yunam Peak Expedition getting acclimatized to the high altitude. You can explore the area around the base camp to get familiar with the terrain and atmosphere at this altitude. The trek leader will also brief you on the basics of Yunam Peak by letting you know the challenges that we might face during climbing to the summit.",
        ],
        briefOverview: ["Acclimatization Day", "Night stay at camps"],
      },
      {
        day: "Day 7",
        title: "Base camp to Summit and back to Base camp",
        description: [
          "We will wake up early in the morning to start our summit attempt. The 6.5 Km trek will be an eight hour battle against a steep trail and a path covered with snow, boulders and glacial till. We will be carrying ample water with us because there is only one water source for today’s entire hike.",
          "Keep yourself hydrated and walk carefully on the treacherous path. The spine chilling winds at this altitude will pose another problem as we keep pushing towards the top.",
          "During the last part of the hike to the summit, the snow on the ground will get thicker and we will be using a harness to finish the last part with a little bit of technical climb.",
          "Being at the peak of Yunam feels like standing on the top of the world. The Chandra Bhaga and Mulkilla ranges are clearly available with white, snow covered Lahaul Valley many miles below in a distance. We will be heading back to base camp for the night.",
        ],
        briefOverview: [
          "Trekking Distance - 6.5 Km",
          "Trekking Time - 8 Hours",
          "Max Altitude - 6,111 m",
          "Night stay at Yunam Peak Base Camp",
        ],
      },
      {
        day: "Day 7",
        title: "Base camp to Bharatpur and drive to Manali",
        description: [
          "The final day of the Yunam Peak Expedition has arrived and we will make our way back to Bharatpur from the base camp. The base camp is located 4.5 Km from Bharatpur and upon our arrival a vehicle waiting for us will take us back to Manali where you will be dropped by evening so plan accordingly.",
        ],
        briefOverview: [
          "Trekking Distance - 4.5 Km",
          "Trekking Time - 2 Hours",
          "Driving Distance - 175 Km",
          "Driving Time - 8 Hours",
        ],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Bhuntar, which is 52 km away from Manali, is the nearest airport. Taxi services are available from Bhuntar to Manali, costing about Rs. 700-1000. Bhuntar is well connected to Delhi by air, with airlines like Indian Airlines, Kingfisher Airlines, MDLR Airlines, and Jagson Airlines operating flights from Delhi and Chandigarh to Kullu.",
      byRoad: [
        {
          type: "text",
          content:
            "Manali is well connected to Delhi. Take an overnight bus from Delhi to Manali. Tickets can be booked online at www.redbus.in or www.hrtc.gov.in.",
        },
        {
          type: "text",
          content:
            "Tip: Since the Delhi to Manali journey is long, most Volvo private buses leave Delhi between 5 PM and 6 PM. The last government bus leaves at 8:30 PM from ISBT Kashmere Gate.",
        },
        {
          type: "text",
          content:
            "Buses from Manali to Delhi leave between 4 PM and 5 PM. Your tentative arrival in Delhi may be between 6 AM and 10 AM. Plan your onward journeys only after noon, allowing enough buffer for bus delays.",
        },
      ],
    },

    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
  {
    name: "Shumga Trek",
    title: "Shumga Trek - Perfect Getaway For Adventure Seekers",
    tourCode: "122132157",
    price: "₹ 8799",
    mapImg: "",
    overview: {
      title: "Shumga Trek",
      paragraphs: [
        "The Shumga trek is a remote trek located in Kullu Valley of the Himachal Pradesh region. The trail passes through the lesser travelled locations of the Great Himalayan National Park. On the way you will spot lush green plateaus and endless mountain ranges along with a wide variety of fauna. The hike to the summit is as exciting as claiming the summit. The variation in the trail takes you through the forests of pine to rhododendron on a trail that sometimes ascends and descends at other times.",

        "Towards the end of the trek comes the alpine meadows which are home to a number of beautiful birds like Monal, Tragopan, Koklash and others. On the top which lies on the ridge separating Tirthan & Sainj Valley, there is a shrine dedicated to Goddess Jogni also known as Sati. You will also be able to view the peaks of Lower Himalayas like Banjar, Thachi, and Mandi as well as peaks of Greater Himalayas. Some important peaks that can be seen from the Shumga Top are Gushu, Pishu in Tirth, Shupakuni, Kingkullen, Snow Peak in Rakti & Vasuki Nag.",
      ],
    },
    duration: "6 Days",
    distance: "30km",
    altitude: "12,500 ",
    Grade: ["Easy - Moderate"],
    location: {
      state: "Himachal Pradesh",
      region: "Kullu",
      wildlifeSanctuary: "",
    },
    highlights: [
      "Sankri village",
      "Juda ka Talab",
      "Kedarkantha Peak",
      "Har ki Dun views",
      "Frozen lake at Juda ka Talab",
      "Sunrise at Kedarkantha Peak",
    ],
    bestTimeToVisit: ["December", "January", "February", "March", "April"],
    itinerary: [
      {
        day: "Day 1",
        title: "Mandi to Shangarh",
        description: [
          "The first day of the journey starts with a beautiful mountain ride from Mandi to Sangarh. The ride will be accompanied by steep turns and mountains covered with trees. We will also cross the famous Pandoh Dam which was built in 1977. As we get closer to the Sainj River, vast meadows will come into view. One of the things that catches the eye when we reach Sangarh are the temples that are built in this area.",

          "The village provides a perfect setting to relax and unwind from the journey. The village is surrounded by green grasslands with white snow-covered mountains towering in the background. Overnight stay will be in tents or guesthouses.",
        ],
        briefOverview: [
          "Driving Distance - 70 Km",
          "Driving Time - 3 Hours",
          "Max Altitude - 7,200 ft.",
          "Network - Available",
          "Overnight stay at a guesthouse or tents",
        ],
      },
      {
        day: "Day 2",
        title: "Shangarh to Lapah camp",
        description: [
          "On the second day, after having breakfast in the morning, we will start walking towards the Lapah Campsite. The trail to the Lapah village is an easy, level walk which is used frequently by the villagers. The hike will take you through dense forests of pine as we cross Barshangarh village.",

          "From Lapah village, the campsite is 2 Km further on a steep trail. The climb to the campsite will leave you mesmerised with the views of Greater Himalayan Peaks at a distance.",
        ],
        briefOverview: [
          "Trekking Distance",
          "Trekking Time",
          "Max Altitude",
          "Night stay in camps",
        ],
      },
      {
        day: "Day 3",
        title: "Lapah Camp to Sara Lake",
        description: [
          "Today we will start walking to Sara Lake on a trail parallel to Saradhar Ridge. The starting 2 Km of a trail is a moderate ascent followed by a steep climb for another 2 Km. You will notice quick changes in the vegetation as we keep walking, from thick Pine, Fir and Spruce forests to Rhododendron and Junipers scrubs.",

          "At the end of today's trek we will cross Raila Village and our campsite for today is just a few meters ahead beside Sara Lake. It is a small lake surrounded by Oak trees. You can explore the area around to get better views of the Greater Himalayan Ranges. Night stay will be in tents.",
        ],
        briefOverview: [
          "Trekking Distance - 6.5 Km",
          "Max Altitude - 10,500 ft.",
          "Night stay in camps",
        ],
      },
      {
        day: "Day 4",
        title: "Sara Lake to Shumga Summit Point & Back",
        description: [
          "The trek from Sara Lake to Shumga Summit is 4 Km and therefore we will cover a total of 8 Km to the peak and back for today. The trail is of moderate difficulty so you can just walk along and enjoy the greenery filled with Rhododendron and Junipers. As we keep pushing towards the top, you will notice that the treeline starts to end and huge lavish meadows begin.",

          "The Shumga Peak is unique because it lies on a ridge that separates Sainj & Tirthan Valley. From the top you will get a 360 degrees view of the Greater as well as Lower Himalayan Ranges and on a clear day you can also see the peaks of Spiti and Kinnaur region from this place. Along with Pir Panjal range, you will be able to spot Beas River flowing through the Kullu Valley.",
        ],
        briefOverview: [
          "Trekking Distance",
          "Max Altitude",
          "Overnight stay in camps at Sara Lake",
        ],
      },
      {
        day: "Day 5",
        title: "Sara Lake Camp to Nihari Road head via Lapah",
        description: [
          "On the fifth day of Shumga Trek, we will retrace our steps back on the familiar trail, 6 Km back towards Lapah. Today will be the longest day of the trek as we take a diversion from the village and walk another 6 Km towards Nihari. Overnight stay will be in camps / guest houses at Nihari.",
        ],
        briefOverview: [
          "Trekking Distance - 12.5 Km",
          "Overnight stay in tents / guesthouse",
        ],
      },
      {
        day: "Day 6",
        title: "Nihari to Mandi",
        description: [
          "On the final day of the trek, we will be driving back to Mandi. The 126 Km journey will take about 5 hours to complete. You are expected to arrive at Mandi by evening, so make your further travel plans accordingly.",
        ],
        briefOverview: ["Driving Distance - 126 Km", "Driving Time - 5 Hours"],
      },
    ],
    QuickFacts: {},
    howToReach: {
      byAir:
        "Bhuntar, which is 52 km away from Manali, is the nearest airport. Taxi services are available from Bhuntar to Manali, costing about Rs. 700-1000. Bhuntar is well connected to Delhi by air with airlines like Indian Airlines, Kingfisher Airlines, MDLR Airlines, and Jagson Airlines operating flights from Delhi and Chandigarh to Kullu.",
      byRoad: [
        {
          type: "text",
          content:
            "Manali is well connected to Delhi. Take an overnight bus from Delhi, which will take approximately 12 to 14 hours to reach Manali. Tickets can be booked online at www.redbus.in or www.hrtc.gov.in.",
        },
        {
          type: "text",
          content:
            "Since Delhi Manali is a long journey most Volvo private buses leave Delhi between 5 pm and 6 pm. The last govt bus leaves at 8.30 pm from ISBT Kashmere Gate. Manali to Delhi.",
        },
        {
          type: "text",
          content:
            "Like the onward journey, buses leave from Manali to Delhi between 4 and 5 p.m. Your tentative arrival at Delhi may be anywhere between 6 a.m and 10 a.m. Plan your onward journeys only post noon giving enough buffer for bus delays.",
        },
      ],
    },
    essentials: [
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
          "1 Pair of gaiters (The Crazy Mountaineers team will notify if required)",
        ],
      },
      {
        category: "Hand Protection",
        items: [
          "1 Pair of waterproof gloves",
          "1 Pair of fleece/woollen gloves",
        ],
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
    ],
    costTerms: {
      inclusions: [
        "Accommodation (Home stay, Camping)",
        "Meals while on trek (Veg. + Egg)",
        "Trek equipment: Sleeping bag, mattress, tent (twin sharing), kitchen & dining tent, toilet tent, utensils, and crampon (if required)",
        "All necessary permits and entry fees",
        "First aid medical kits, stretcher, and oxygen cylinder",
        "Mountaineering qualified & professional trek leader, guide, and support staff",
        "Transport from Dehradun to Sankri and return (according to itinerary)",
        "Mules to carry the central luggage",
      ],
      exclusions: [
        "Any kind of personal expenses",
        "Food during the transit",
        "Insurance",
        "Mules or porter to carry personal luggage",
        "Anything not specifically mentioned under the head 'Inclusions'",
        "Any kind of emergency evacuation charges",
      ],
      additionalNotes: [
        {
          note: "Normally, THE CRAZY MOUNTAINEERS expect you to carry your personal luggage on your own. However, if you wish to offload your backpack, you can give it to a mule.",
        },
        {
          offloadingCharges: {
            advance: "INR 1200 if paid online 10 days in advance",
            onSpot: "INR 1500 if informed after reaching Sankri",
            weightLimit:
              "The backpack cannot weigh more than 11 kgs and must have a waterproof cover. Suitcases/strolleys/bags are not allowed.",
          },
        },
        {
          bookingInfo:
            "To book a Trek/adventure program, please use our online booking form, or alternatively, you can call us. For confirmation of your tour, you will need to wire a deposit and an initial payment.",
        },
      ],
    },
    faqData: [],
    trekCancellation: {
      menuName: "Trek Cancellation Policies",
      items: [
        "Cancellations prior to 24 days from the start of the trek:",
        "- Book any other trek till one year or get 95% refund (Note: If the trek charges are more, the balance needs to be paid by the trekker).",
        "",
        "Cancellations between 24 days and 14 days to the start of the trek:",
        "- Choose to go for the same trek, with any other batch, till year or get 70% refund.",
        "",
        "Cancellations between 14 days and 10 days to the start of the trek:",
        "- Choose to go on the same trek, in the same season, with any other batch or get 50% refund.",
        "",
        "Cancellations less than 10 days to the start of the trek:",
        "- Transfer your trek (same trek, same batch) to your friend. No cash refund.",
        "",
        "Note:",
        "- Change of trek batch is dependent on the availability of seats in the batch.",
        "- In case of transferring a trek to a friend, he/she should satisfy all the mandatory requirements put forward by THE CRAZY MOUNTAINEERS.",
        "- THE CRAZY MOUNTAINEERS holds the right to change/cancel the policies, without prior notice.",
      ],
    },
  },
];
