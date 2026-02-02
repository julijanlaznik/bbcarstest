
import { Car } from '../types';

export const cars: Car[] = [
  {
    id: 'audi-a5-tdi-quattro',
    brand: 'Audi',
    model: 'A5 TDI 150kW QUATTRO STR S-LINE',
    year: 2023,
    bodyType: 'Coupe',
    inServiceFrom: '05/2023',
    price: '1 490 000 Kč',
    km: '12 500 km',
    image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1610768207795-721696906d2d?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '1 968 ccm',
    powerKw: '150 kW',
    drivetrain: '4x4 Quattro',
    detailedDescription: {
      CZ: [
        "S-line sportovní paket exteriéru i interiéru",
        "Pohon všech kol Quattro",
        "Matrix LED světlomety s dynamickými ukazateli",
        "Virtuální kokpit Audi Plus",
        "Sportovní sedadla v kombinaci kůže/Alcantara",
        "Bang & Olufsen 3D Premium Sound System",
        "Adaptivní tempomat a asistent jízdy v pruzích",
        "Ambientní osvětlení interiéru"
      ],
      EN: [
        "S-line sports package exterior and interior",
        "Quattro all-wheel drive",
        "Matrix LED headlights with dynamic indicators",
        "Audi Virtual Cockpit Plus",
        "Sport seats in leather/Alcantara combination",
        "Bang & Olufsen 3D Premium Sound System",
        "Adaptive cruise control and lane assist",
        "Ambient interior lighting"
      ]
    },
    emotionalHeadline: { CZ: 'Elegance v pohybu', EN: 'Elegance in motion' },
    story: { CZ: 'Perfektně naspecifikované Audi A5 s úsporným, ale silným motorem TDI a pohonem Quattro.', EN: 'Perfectly specified Audi A5 with an efficient yet powerful TDI engine and Quattro drive.' },
    specs: { engine: '2.0 TDI', power: '204 HP', transmission: '7-speed S-tronic', fuel: 'Nafta' },
    equipment: ["S-line", "Quattro", "Matrix LED", "Bang & Olufsen"]
  },
  {
    id: 'audi-q5-sb-tdi',
    brand: 'Audi',
    model: 'Audi Q5 SB TDI 150kW 4X4 S-LINE R20',
    year: 2024,
    bodyType: 'SUV',
    inServiceFrom: '01/2024',
    price: '1 750 000 Kč',
    km: '2 800 km',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '1 968 ccm',
    powerKw: '150 kW',
    drivetrain: '4x4 Quattro',
    detailedDescription: {
      CZ: [
        "Karoserie Sportback se sportovní siluetou",
        "20\" kovaná kola Audi Sport",
        "S-line podvozek a sportovní doplňky",
        "Tažné zařízení s asistencí",
        "Nezávislé topení s dálkovým ovládáním",
        "Kamera 360 stupňů",
        "Vyhřívaný volant a všechna sedadla",
        "Black optik paket"
      ],
      EN: [
        "Sportback body with athletic silhouette",
        "20\" Audi Sport forged wheels",
        "S-line suspension and sports elements",
        "Tow hitch with assist",
        "Auxiliary heating with remote control",
        "360-degree camera",
        "Heated steering wheel and all seats",
        "Black optics package"
      ]
    },
    emotionalHeadline: { CZ: 'Všestranný Sportback', EN: 'Versatile Sportback' },
    story: { CZ: 'Nové SUV v provedení Sportback s minimálním nájezdem.', EN: 'Brand new SUV in Sportback version with minimal mileage.' },
    specs: { engine: '2.0 TDI', power: '204 HP', transmission: '7-speed S-tronic', fuel: 'Nafta' },
    equipment: ["R20 Wheels", "360 Camera", "S-line", "Aux Heating"]
  },
  {
    id: 'audi-q5-tfsi-4x4',
    brand: 'Audi',
    model: 'Audi Q5 TFSI 150kW 4X4 S-LINE R20 3D',
    year: 2024,
    bodyType: 'SUV',
    inServiceFrom: '03/2024',
    price: '1 690 000 Kč',
    km: '500 km',
    image: 'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '1 984 ccm',
    powerKw: '150 kW',
    drivetrain: '4x4 Quattro',
    detailedDescription: {
      CZ: [
        "Benzínový motor TFSI s kultivovaným chodem",
        "Bang & Olufsen 3D zvukový systém",
        "Panoramatické střešní okno",
        "Vzduchové odpružení s nastavitelnou tuhostí",
        "Sedadla v kůži Fine Nappa",
        "Head-up displej",
        "Parkovací asistent Plus",
        "Elektrické víko zavazadlového prostoru"
      ],
      EN: [
        "TFSI gasoline engine with refined operation",
        "Bang & Olufsen 3D sound system",
        "Panoramic sunroof",
        "Air suspension with adjustable damping",
        "Fine Nappa leather seats",
        "Head-up display",
        "Parking Assistant Plus",
        "Electric tailgate"
      ]
    },
    emotionalHeadline: { CZ: 'Benzínová dynamika', EN: 'Gasoline dynamics' },
    story: { CZ: 'Kultivovaný benzínový pohon v kombinaci s nejvyšší výbavou.', EN: 'Refined gasoline drivetrain combined with top-tier equipment.' },
    specs: { engine: '2.0 TFSI', power: '204 HP', transmission: '7-speed S-tronic', fuel: 'Benzín' },
    equipment: ["3D Sound", "Panoramic Roof", "Nappa Leather", "Air Suspension"]
  },
  {
    id: 'bentley-continental-v8-mulliner',
    brand: 'Bentley',
    model: 'Bentley Continental GT 4.0 V8 405kW MULLINER BLACK',
    year: 2023,
    bodyType: 'Coupe',
    inServiceFrom: '09/2023',
    price: '6 850 000 Kč',
    km: '4 200 km',
    image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '3 996 ccm',
    powerKw: '405 kW',
    drivetrain: 'AWD',
    detailedDescription: {
      CZ: [
        "Specifikace Mulliner s diamantovým prošíváním",
        "Blackline paket (černé doplňky místo chromu)",
        "Otočný displej Bentley Rotating Display",
        "Audio systém Naim for Bentley",
        "Karbonový exteriérový paket",
        "Masážní a ventilovaná sedadla",
        "Noční vidění",
        "22\" kovaná kola Mulliner"
      ],
      EN: [
        "Mulliner specification with diamond quilting",
        "Blackline package (black accents instead of chrome)",
        "Bentley Rotating Display",
        "Naim for Bentley audio system",
        "Carbon exterior package",
        "Massaging and ventilated seats",
        "Night vision",
        "22\" Mulliner forged wheels"
      ]
    },
    emotionalHeadline: { CZ: 'Aristokrat na silnici', EN: 'Aristocrat on the road' },
    story: { CZ: 'Vrchol britského inženýrství v temném provedení Mulliner Black.', EN: 'The pinnacle of British engineering in the dark Mulliner Black edition.' },
    specs: { engine: '4.0 V8 Twin-Turbo', power: '550 HP', transmission: '8-speed DCT', fuel: 'Benzín' },
    equipment: ["Mulliner", "Naim Audio", "Rotating Display", "Carbon Pack"]
  },
  {
    id: 'bmw-m5-ultimate-frozen',
    brand: 'BMW',
    model: 'BMW M5 ULTIMATE FROZEN DEEP KARBON',
    year: 2023,
    bodyType: 'Sedan',
    inServiceFrom: '10/2023',
    price: '3 950 000 Kč',
    km: '1 200 km',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '4 395 ccm',
    powerKw: '441 kW',
    drivetrain: 'M xDrive (AWD/RWD)',
    detailedDescription: {
      CZ: [
        "Matný lak Frozen Deep Grey",
        "Karbon-keramické brzdy M Carbon",
        "Interiér kompletně v kůži Merino",
        "Karbonová střecha a doplňky exteriéru",
        "M Driver's paket (posunutý omezovač)",
        "Audio systém Bowers & Wilkins Diamond",
        "Laserové světlomety BMW Laserlight",
        "Soft-close dovírání dveří"
      ],
      EN: [
        "Frozen Deep Grey matte paint",
        "M Carbon ceramic brakes",
        "Full Merino leather interior",
        "Carbon fiber roof and exterior accents",
        "M Driver's package (delimited top speed)",
        "Bowers & Wilkins Diamond audio system",
        "BMW Laserlight headlights",
        "Soft-close door function"
      ]
    },
    emotionalHeadline: { CZ: 'Absolutní výkon', EN: 'Absolute performance' },
    story: { CZ: 'Limitovaná edice M5 s dechberoucím lakem a maximální výbavou.', EN: 'Limited edition M5 with breathtaking paint and maximum equipment.' },
    specs: { engine: '4.4 V8 TwinPower Turbo', power: '600 HP', transmission: '8-speed M Steptronic', fuel: 'Benzín' },
    equipment: ["Ceramic Brakes", "Bowers & Wilkins", "Frozen Paint", "Carbon Roof"]
  },
  {
    id: 'bmw-330i-m-paket',
    brand: 'BMW',
    model: 'BMW Řada 3 330i XDRIVE 180kW M-PAKET',
    year: 2024,
    bodyType: 'Sedan',
    inServiceFrom: '02/2024',
    price: '1 550 000 Kč',
    km: '1 500 km',
    image: 'https://images.unsplash.com/photo-1556139930-c23fa4a4f934?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1556139930-c23fa4a4f934?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '1 998 ccm',
    powerKw: '180 kW',
    drivetrain: 'xDrive (4x4)',
    detailedDescription: {
      CZ: [
        "M-sportovní paket",
        "Adaptivní M podvozek",
        "Harman Kardon Surround Sound",
        "BMW Live Cockpit Professional",
        "Komfortní přístupový systém",
        "Vyhřívání sedadel a volantu",
        "Parkovací asistent s kamerou",
        "Sportovní automatická převodovka"
      ],
      EN: [
        "M-sport package",
        "Adaptive M suspension",
        "Harman Kardon Surround Sound",
        "BMW Live Cockpit Professional",
        "Comfort access system",
        "Heated seats and steering wheel",
        "Parking Assistant with camera",
        "Sport automatic transmission"
      ]
    },
    emotionalHeadline: { CZ: 'Radost z jízdy', EN: 'Driving pleasure' },
    story: { CZ: 'Ideální kombinace výkonu, spotřeby a každodenní použitelnosti.', EN: 'The ideal combination of performance, economy, and daily usability.' },
    specs: { engine: '2.0 TwinPower Turbo', power: '245 HP', transmission: '8-speed Automatic', fuel: 'Benzín' },
    equipment: ["M-Paket", "xDrive", "Harman Kardon", "Live Cockpit"]
  },
  {
    id: 'bmw-x6-30xd-r22',
    brand: 'BMW',
    model: 'BMW X6 30XD 210kW M-PAKET R22 BLACK',
    year: 2024,
    bodyType: 'SUV',
    inServiceFrom: '01/2024',
    price: '2 890 000 Kč',
    km: '3 500 km',
    image: 'https://images.unsplash.com/photo-1619330641150-13f5686aa39a?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1619330641150-13f5686aa39a?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '2 993 ccm',
    powerKw: '210 kW',
    drivetrain: 'xDrive (4x4)',
    detailedDescription: {
      CZ: [
        "22\" kovaná kola M Double-spoke",
        "M-sportovní výfukový systém",
        "Vzduchové odpružení obou náprav",
        "Křišťálové prvky interiéru CraftedClarity",
        "Ventilovaná a masážní sedadla",
        "Aktivní řízení všech kol",
        "Driving Assistant Professional",
        "BMW Iconic Glow (svítící ledvinky)"
      ],
      EN: [
        "22\" M Double-spoke forged wheels",
        "M-sport exhaust system",
        "Two-axle air suspension",
        "CraftedClarity glass application",
        "Ventilated and massaging seats",
        "Integral Active Steering",
        "Driving Assistant Professional",
        "BMW Iconic Glow (illuminated kidney grille)"
      ]
    },
    emotionalHeadline: { CZ: 'Dominance na silnici', EN: 'Road dominance' },
    story: { CZ: 'Nepřehlédnutelné SUV v černé barvě s maximálními koly R22.', EN: 'An unmissable SUV in black with massive R22 wheels.' },
    specs: { engine: '3.0 TwinPower Turbo Diesel', power: '286 HP', transmission: '8-speed Automatic', fuel: 'Nafta' },
    equipment: ["R22 Wheels", "Iconic Glow", "CraftedClarity", "Air Suspension"]
  },
  {
    id: 'corvette-c8-stingray-z51',
    brand: 'Chevrolet',
    model: 'Chevrolet Corvette C8 Stingray 6.2V8 354kW 2LT Z51',
    year: 2023,
    bodyType: 'Coupe',
    inServiceFrom: '07/2023',
    price: '3 350 000 Kč',
    km: '2 100 km',
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000',
    images: [
      'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=2000'
    ],
    interiorImages: [],
    exteriorImages: [],
    engineCapacity: '6 162 ccm',
    powerKw: '354 kW',
    drivetrain: 'RWD',
    detailedDescription: {
      CZ: [
        "Výkonnostní paket Z51",
        "Magnetické odpružení Magnetic Ride Control",
        "Audio systém Bose Performance Series",
        "Přední zvedací systém (Front Lift)",
        "Karbonový interiérový paket",
        "GT2 skořepinová sedadla",
        "Performance Data Recorder",
        "Výfukový systém Performance"
      ],
      EN: [
        "Z51 Performance Package",
        "Magnetic Ride Control suspension",
        "Bose Performance Series audio system",
        "Front Lift system",
        "Carbon fiber interior package",
        "GT2 bucket seats",
        "Performance Data Recorder",
        "Performance exhaust system"
      ]
    },
    emotionalHeadline: { CZ: 'Americká legenda', EN: 'American legend' },
    story: { CZ: 'První Corvette s motorem uprostřed. Atmosférický osmiválec s brutálním zvukem.', EN: 'The first mid-engine Corvette. Naturally aspirated V8 with a brutal soundtrack.' },
    specs: { engine: '6.2L V8 LT2', power: '482 HP', transmission: '8-speed DCT', fuel: 'Benzín' },
    equipment: ["Z51 Package", "Front Lift", "Bose Audio", "Magnetic Ride"]
  }
];
