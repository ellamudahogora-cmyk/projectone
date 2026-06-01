import { ref } from 'vue'

export const locale = ref('en')

export const languageOptions = [
  { code: 'en', label: 'English' },
  { code: 'rw', label: 'Kinyarwanda' },
  { code: 'fr', label: 'Français' },
  { code: 'sw', label: 'Kiswahili' }
]

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      gallery: 'Gallery',
      destination: 'Destination',
      contact: 'Contact',
      images: 'Images',
      videos: 'Videos',
      kigali: 'Kigali',
      south: 'South',
      west: 'West',
      north: 'North',
      east: 'East'
    },
    language: {
      label: 'Language',
      english: 'English',
      kinyarwanda: 'Kinyarwanda',
      francais: 'Français',
      kiswahili: 'Kiswahili'
    },
    hero: {
      title: 'Welcome to Rwanda',
      subtitle: 'Discover the Land of a Thousand Hills',
      description: 'Explore Rwanda’s breathtaking landscapes, rich culture, and vibrant tourism destinations.',
      searchPlaceholder: 'Search destinations, tours or experiences',
      searchButton: 'Search',
      learnMore: 'Learn more',
      exploreMore: 'Explore more'
    },
    features: {
      title: 'Why Visit Rwanda?',
      items: [
        {
          title: 'Natural Beauty',
          description: 'Experience pristine national parks, misty mountains, and serene lakes.'
        },
        {
          title: 'Rich Culture',
          description: 'Immerse yourself in vibrant traditions, local art, and timeless heritage.'
        },
        {
          title: 'Historical Sites',
          description: 'Visit memorials and monuments that tell Rwanda’s inspiring story.'
        }
      ]
    },
    discover: {
      title: 'Plan Your Visit',
      description: 'From city walks to wildlife safaris, Rwanda has everything you need for an unforgettable trip.'
    },
    cards: {
      one: {
        title: 'Gorilla Trekking',
        description: 'Meet mountain gorillas safely in Volcanoes National Park.'
      },
      two: {
        title: 'City Life',
        description: 'Discover Kigali’s restaurants, markets, and cultural landmarks.'
      },
      three: {
        title: 'Nature Trails',
        description: 'Hike green hills, lakeshores, and forest paths across the country.'
      }
    },
    footer: {
      title: 'TEMBERA U RWANDA',
      tagline: 'Discover the beauty of the land of a thousand hills',
      quickLinks: 'Quick Links',
      destination: 'Destination',
      contact: 'Contact',
      rights: '@ 2026 Visit Rwanda. All rights reserved'
    }
  },
  rw: {
    nav: {
      home: 'Ahabanza',
      about: 'Ibyerekeye',
      services: 'Serivisi',
      gallery: 'Gallery',
      destination: 'Aho wajya',
      contact: 'Twandikire',
      images: 'Amafoto',
      videos: 'Videwo',
      kigali: 'Kigali',
      south: 'Amajyepfo',
      west: 'Uburengerazuba',
      north: 'Amajyaruguru',
      east: 'Uburasirazuba'
    },
    language: {
      label: 'Ururimi',
      english: 'Icyongereza',
      kinyarwanda: 'Kinyarwanda',
      francais: 'Français',
      kiswahili: 'Kiswahili'
    },
    hero: {
      title: 'Murakaza neza mu Rwanda',
      subtitle: 'Mumenye igihugu cy’imisozi igihumbi',
      description: 'Sura imisozi, umuco n’ubukerarugendo bw’u Rwanda butangaje.',
      searchPlaceholder: 'Shakisha aho ujya, ingendo cyangwa ibikorwa',
      searchButton: 'Shakisha',
      learnMore: 'Menya byinshi',
      exploreMore: 'Sura byinshi'
    },
    features: {
      title: 'Impamvu zo Gusura u Rwanda',
      items: [
        {
          title: 'Ubwiza karemano',
          description: 'Umusozi, pariki n’ibiyaga byiza ningirakamaro ku rugendo.'
        },
        {
          title: 'Umuryango w’umuco',
          description: 'Ukomere mu muco, ubuhanzi n’imigenzo y’abanyarwanda.'
        },
        {
          title: 'Aho amateka ari',
          description: 'Sura ibyibukira bivuga ubutwari n’ubumwe bw’u Rwanda.'
        }
      ]
    },
    discover: {
      title: 'Tegura urugendo rwawe',
      description: 'Uhereye mu mujyi kugana mu ishyamba, u Rwanda rutanga byose ku rugendo rwiza.'
    },
    cards: {
      one: {
        title: 'Kurugendo rw’Impunzi',
        description: 'Uhuze n’inkorora mu Pariki ya Volcanoes.'
      },
      two: {
        title: 'Ubuzima bwo mu Mujyi',
        description: 'Sura Kigali n’imyidagaduro, amasoko n’ahantu nyaburanga.'
      },
      three: {
        title: 'Inzira z’Ubusitani',
        description: 'Hinga imisozi n’imigezi mu mashyamba y’igihugu.'
      }
    },
    footer: {
      title: 'TEMBERA U RWANDA',
      tagline: 'Menya ubwiza bw’igihugu cy’imisozi igihumbi',
      quickLinks: 'Amakuru yihuse',
      destination: 'Aho wajya',
      contact: 'Twandikire',
      rights: '@ 2026 Visit Rwanda. Uburenganzira bwose burabitswe'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      gallery: 'Galerie',
      destination: 'Destination',
      contact: 'Contact',
      images: 'Images',
      videos: 'Vidéos',
      kigali: 'Kigali',
      south: 'Sud',
      west: 'Ouest',
      north: 'Nord',
      east: 'Est'
    },
    language: {
      label: 'Langue',
      english: 'Anglais',
      kinyarwanda: 'Kinyarwanda',
      francais: 'Français',
      kiswahili: 'Kiswahili'
    },
    hero: {
      title: 'Bienvenue au Rwanda',
      subtitle: 'Découvrez le pays aux mille collines',
      description: 'Explorez les paysages à couper le souffle, la culture riche et les destinations touristiques dynamiques du Rwanda.',
      searchPlaceholder: 'Recherchez des destinations, circuits ou expériences',
      searchButton: 'Rechercher',
      learnMore: 'En savoir plus',
      exploreMore: 'Explorer'
    },
    features: {
      title: 'Pourquoi visiter le Rwanda ?',
      items: [
        {
          title: 'Beauté naturelle',
          description: 'Découvrez des parcs nationaux immaculés, des montagnes brumeuses et des lacs paisibles.'
        },
        {
          title: 'Culture riche',
          description: 'Imprégnez-vous des traditions vibrantes, des galeries d’art et du patrimoine local.'
        },
        {
          title: 'Sites historiques',
          description: 'Visitez des mémoriaux qui racontent l’histoire inspirante du pays.'
        }
      ]
    },
    discover: {
      title: 'Planifiez votre visite',
      description: 'Des balades en ville aux safaris, le Rwanda offre tout pour un séjour mémorable.'
    },
    cards: {
      one: {
        title: 'Trekking des gorilles',
        description: 'Rencontrez les gorilles de montagne en toute sécurité dans le parc des volcans.'
      },
      two: {
        title: 'Vie urbaine',
        description: 'Découvrez Kigali, ses cafés, marchés et lieux culturels.'
      },
      three: {
        title: 'Sentiers naturels',
        description: 'Parcourez les collines vertes, les rives des lacs et les forêts.'
      }
    },
    footer: {
      title: 'TEMBERA U RWANDA',
      tagline: 'Découvrez la beauté du pays aux mille collines',
      quickLinks: 'Liens rapides',
      destination: 'Destination',
      contact: 'Contact',
      rights: '@ 2026 Visit Rwanda. Tous droits réservés'
    }
  },
  sw: {
    nav: {
      home: 'Nyumbani',
      about: 'Kuhusu',
      services: 'Huduma',
      gallery: 'Nyumba ya picha',
      destination: 'Mahali pa kwenda',
      contact: 'Wasiliana',
      images: 'Picha',
      videos: 'Video',
      kigali: 'Kigali',
      south: 'Kusini',
      west: 'Magharibi',
      north: 'Kaskazini',
      east: 'Mashariki'
    },
    language: {
      label: 'Lugha',
      english: 'Kiingereza',
      kinyarwanda: 'Kinyarwanda',
      francais: 'Français',
      kiswahili: 'Kiswahili'
    },
    hero: {
      title: 'Karibu Rwanda',
      subtitle: 'Gundua nchi ya milima elfu moja',
      description: 'Chunguza mandhari ya kupendeza, utamaduni tajiri, na vivutio vya utalii vya Rwanda.',
      searchPlaceholder: 'Tafuta maeneo, ziara au uzoefu',
      searchButton: 'Tafuta',
      learnMore: 'Jifunze zaidi',
      exploreMore: 'Gundua zaidi'
    },
    features: {
      title: 'Kwanini utembee Rwanda?',
      items: [
        {
          title: 'Uzuri wa Asili',
          description: 'Furahia mbuga za kitaifa, milima yenye ukungu, na maziwa tulivu.'
        },
        {
          title: 'Utamaduni tajiri',
          description: 'Jumuika na tamaduni, sanaa na urithi wa mitaa.'
        },
        {
          title: 'Mambo ya kihistoria',
          description: 'Tembelea kumbukumbu zinazosisitiza hadithi ya Rwanda.'
        }
      ]
    },
    discover: {
      title: 'Panga Ziara Yako',
      description: 'Kutoka kwenye matembezi ya mji hadi safari za wanyama, Rwanda ina kila kitu kwa uzoefu wa kipekee.'
    },
    cards: {
      one: {
        title: 'Kutembea na Gorillas',
        description: 'Kutana na gorilla wa mlima kwa usalama katika Hifadhi ya Volcanoes.'
      },
      two: {
        title: 'Maisha ya Jiji',
        description: 'Gundua Kigali, mikahawa, masoko, na maeneo ya kitamaduni.'
      },
      three: {
        title: 'Mizigo ya Asili',
        description: 'Panda milima, kinga za mito, na misitu ya nchi.'
      }
    },
    footer: {
      title: 'TEMBERA U RWANDA',
      tagline: 'Gundua uzuri wa nchi ya milima elfu moja',
      quickLinks: 'Viungo haraka',
      destination: 'Mahali pa kwenda',
      contact: 'Wasiliana',
      rights: '@ 2026 Visit Rwanda. Haki zote zimehifadhiwa'
    }
  }
}

export function t(key) {
  const path = key.split('.')
  const value = path.reduce((obj, step) => obj?.[step], translations[locale.value])
  return value ?? key
}

export function setLocale(code) {
  if (translations[code]) {
    locale.value = code
  }
}
