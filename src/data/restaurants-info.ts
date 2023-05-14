import { baseURLName } from '../utils/config';
import { trimChar } from '../utils/helpers';
const baseUrl = baseURLName.length > 0 ? '/' + trimChar(baseURLName, '/') : '';

function getImageUrl(staticImagePath: string) {
  return `${baseUrl}/${staticImagePath}`;
}

export enum RestaurantCategories {
  Resturants = 'Resturants',
  Bastot = 'Bastot',
  Bars = 'Bars',
  Sweets = 'Sweets',
  Other = 'Other',
}
interface HoursRange {
  from: string;
  till: string;
}
export type WeekDays = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export const weekDaysInHebrew = {
  1: 'ראשון',
  2: 'שני',
  3: 'שלישי',
  4: 'רביעי',
  5: 'חמישי',
  6: 'שישי',
  7: 'שבת',
};

export interface IRestaurantInfo {
  name: string;
  type: RestaurantCategories;
  veganType?: 'בשרי' | 'צמחוני' | 'טבעוני';
  priceRange: {
    avg?: number;
    from: number;
    till: number;
  };
  isKosher?: boolean | 'Mehadrin';
  address: {
    street: string;
    number?: number;
  };
  website?: {
    url: string;
  };
  openHours: {
    [day in WeekDays]: HoursRange | 'Closed';
  };
  static: {
    imagesUrl: string[];
    logoUrl: string;
    menuUrls?: string[];
  };
  waitingTime: number;
}

export const restaurantsDataInfo: IRestaurantInfo[] = [
  {
    type: RestaurantCategories.Resturants,
    name: 'פסטה בסטה',
    isKosher: true,
    veganType: 'צמחוני',
    address: {
      street: 'מחנה יהודה',
      number: 8,
    },
    priceRange: {
      from: 20,
      till: 30,
      avg: 25,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '23:00',
      },
      '2': {
        from: '11:00',
        till: '23:00',
      },
      '3': {
        from: '11:00',
        till: '23:00',
      },
      '4': {
        from: '11:00',
        till: '23:00',
      },
      '5': {
        from: '11:00',
        till: '00:00',
      },
      '6': {
        from: '11:00',
        till: '14:30',
      },
      '7': {
        from: '18:30',
        till: '00:00',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/פסטה בסטה/פסטה בסטה.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/פסטה בסטה/לוגו.jpg`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/פסטה בסטה/תפריט.jpg`)],
    },
    waitingTime: 23,
    website: {
      url: 'https://pastabasta.co.il',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: 'מוריס',
    isKosher: 'Mehadrin',
    veganType: 'בשרי',
    address: {
      street: 'התות',
      number: 11,
    },
    priceRange: {
      from: 70,
      till: 150,
      avg: 100,
    },
    openHours: {
      '1': {
        from: '10:00',
        till: '23:00',
      },
      '2': {
        from: '10:00',
        till: '00:00',
      },
      '3': {
        from: '10:00',
        till: '00:00',
      },
      '4': {
        from: '10:00',
        till: '00:00',
      },
      '5': {
        from: '10:00',
        till: '03:00',
      },
      '6': {
        from: '11:00',
        till: '16:30',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/מוריס/מסעדת מוריס.webp`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/מוריס/לוגו.jpg`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/מוריס/תפריט.jpg`)],
    },
    waitingTime: 25,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: 'חצות',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'אגריפס',
      number: 121,
    },
    priceRange: {
      from: 80,
      till: 200,
      avg: 105,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '01:30',
      },
      '2': {
        from: '11:00',
        till: '01:30',
      },
      '3': {
        from: '11:00',
        till: '01:30',
      },
      '4': {
        from: '11:00',
        till: '01:30',
      },
      '5': {
        from: '11:00',
        till: '01:30',
      },
      '6': {
        from: '11:00',
        till: '15:00',
      },
      '7': {
        from: '20:00',
        till: '01:30',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/חצות/חצות.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/חצות/לוגו.png`),
      menuUrls: [
        getImageUrl(`static/stores/images/restaurants/חצות/תפריט.jpg`),
        getImageUrl(`static/stores/images/restaurants/חצות/תפריט קינוחים.png`),
      ],
    },
    waitingTime: 14,
    website: {
      url: 'https://hatzot.co.il',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: 'מחניודה',
    isKosher: false,
    veganType: 'בשרי',
    address: {
      street: 'בית יעקב',
      number: 10,
    },
    priceRange: {
      from: 70,
      till: 150,
      avg: 110,
    },
    openHours: {
      '1': {
        from: '12:30',
        till: '00:00',
      },
      '2': {
        from: '12:30',
        till: '00:00',
      },
      '3': {
        from: '12:30',
        till: '00:00',
      },
      '4': {
        from: '12:30',
        till: '00:00',
      },
      '5': {
        from: '12:30',
        till: '00:00',
      },
      '6': {
        from: '11:30',
        till: '15:30',
      },
      '7': {
        from: '22:00',
        till: '00:00',
      },
    },

    static: {
      imagesUrl: [
        getImageUrl(`static/stores/images/restaurants/מחניודה/מחניודה.jpg`),
        getImageUrl(`static/stores/images/restaurants/מחניודה/מחנה יהודה.jpg`),
      ],
      logoUrl: getImageUrl(`static/stores/images/restaurants/מחניודה/לוגו.jpg`),
      menuUrls: [],
    },
    waitingTime: 15,
    website: {
      url: 'https://www.machneyuda.co.il/',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: "ג'וזף",
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'אגריפס',
      number: 123,
    },
    priceRange: {
      from: 45,
      till: 160,
      avg: 115,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '01:00',
      },
      '2': {
        from: '11:00',
        till: '01:00',
      },
      '3': {
        from: '11:00',
        till: '01:00',
      },
      '4': {
        from: '11:00',
        till: '01:00',
      },
      '5': {
        from: '11:00',
        till: '01:30',
      },
      '6': {
        from: '11:00',
        till: '15:00',
      },
      '7': {
        from: '18:30',
        till: '01:30',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/ג'וזף/ג'וזף.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/ג'וזף/לוגו.png`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/ג'וזף/תפריט.jpg`)],
    },
    waitingTime: 12,
    website: {
      url: 'https://josef-burger.co.il/',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: `חצ'פוריה`,
    isKosher: false,
    veganType: 'צמחוני',
    address: {
      street: 'השיקמה',
      number: 5,
    },
    priceRange: {
      from: 25,
      till: 40,
      avg: 35,
    },
    openHours: {
      '1': {
        from: '10:00',
        till: '22:00',
      },
      '2': {
        from: '10:00',
        till: '22:00',
      },
      '3': {
        from: '10:00',
        till: '22:00',
      },
      '4': {
        from: '10:00',
        till: '22:00',
      },
      '5': {
        from: '10:00',
        till: '22:00',
      },
      '6': {
        from: '10:00',
        till: '14:00',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [
        getImageUrl(`static/stores/images/restaurants/חצאפוריה/חצ'פוריה.jpg`),
        getImageUrl(`static/stores/images/restaurants/חצאפוריה/חצ'פורי.jpg`),
      ],
      logoUrl: getImageUrl(`static/stores/images/restaurants/חצאפוריה/לוגו.png`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/חצאפוריה/תפריט.jpg`)],
    },
    waitingTime: 22,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: 'מורדוך',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'אגריפס',
      number: 70,
    },
    priceRange: {
      from: 25,
      till: 65,
      avg: 45,
    },
    openHours: {
      '1': {
        from: '08:00',
        till: '17:00',
      },
      '2': {
        from: '08:00',
        till: '17:00',
      },
      '3': {
        from: '08:00',
        till: '17:00',
      },
      '4': {
        from: '08:00',
        till: '17:00',
      },
      '5': {
        from: '08:00',
        till: '17:00',
      },
      '6': {
        from: '08:00',
        till: '15:30',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/מורדוך/מורדרוך.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/מורדוך/לוגו.jpeg`),
      menuUrls: [`static/stores/images/restaurants/מורדוך/תפריט.jpeg`],
    },
    waitingTime: 18,
    website: {
      url: 'https://www.morduch.com',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: 'עזורה',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'האשכול',
      number: 4,
    },
    priceRange: {
      from: 35,
      till: 90,
      avg: 65,
    },
    openHours: {
      '1': {
        from: '09:00',
        till: '16:00',
      },
      '2': {
        from: '09:00',
        till: '16:00',
      },
      '3': {
        from: '09:00',
        till: '16:00',
      },
      '4': {
        from: '09:00',
        till: '16:00',
      },
      '5': {
        from: '09:00',
        till: '16:00',
      },
      '6': {
        from: '09:00',
        till: '15:30',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/עזורה/עזורה.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/עזורה/לוגו.jpg`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/עזורה/תפריט.jpeg`)],
    },
    waitingTime: 16,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: `ארבעס`,
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'שילה',
      number: 2,
    },
    priceRange: {
      from: 25,
      till: 38,
      avg: 32,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '21:00',
      },
      '2': {
        from: '11:00',
        till: '21:00',
      },
      '3': {
        from: '11:00',
        till: '21:00',
      },
      '4': {
        from: '11:00',
        till: '21:00',
      },
      '5': {
        from: '11:00',
        till: '23:00',
      },
      '6': {
        from: '10:00',
        till: '16:30',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/ארבעס/ארבעס.jpg`)],
      logoUrl: `static/stores/images/restaurants/ארבעס/לוגו.jpg`,
      menuUrls: [getImageUrl(`static/stores/images/restaurants/ארבעס/תפריט.jpg`)],
    },
    waitingTime: 17,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Resturants,
    name: `ג'קו סטריט`,
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'אגריפס',
      number: 74,
    },
    priceRange: {
      from: 70,
      till: 150,
      avg: 110,
    },
    openHours: {
      '1': {
        from: '18:00',
        till: '00:00',
      },
      '2': {
        from: '18:00',
        till: '00:00',
      },
      '3': {
        from: '18:00',
        till: '00:00',
      },
      '4': {
        from: '18:00',
        till: '00:00',
      },
      '5': {
        from: '18:00',
        till: '00:00',
      },
      '6': 'Closed',
      '7': {
        from: '19:00',
        till: '00:00',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/restaurants/ג'קו סטריט/ג'קו סטריט.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/restaurants/ג'קו סטריט/לוגו.png`),
      menuUrls: [getImageUrl(`static/stores/images/restaurants/ג'קו סטריט/תפריט.jpg`)],
    },
    waitingTime: 11,
    website: {
      url: 'https://jackosstreet.co.il/',
    },
  },
  {
    type: RestaurantCategories.Bars,
    name: 'ביר בזאר',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'עץ החיים',
    },
    priceRange: {
      from: 25,
      till: 65,
      avg: 45,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '02:00',
      },
      '2': {
        from: '11:00',
        till: '02:00',
      },
      '3': {
        from: '11:00',
        till: '02:00',
      },
      '4': {
        from: '11:00',
        till: '02:00',
      },
      '5': {
        from: '11:00',
        till: '02:00',
      },
      '6': {
        from: '09:00',
        till: '16:00',
      },
      '7': {
        from: '19:00',
        till: '02:00',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/bars/ביר בזאר/ביר בזאר.jpg`)],
      logoUrl: getImageUrl(`static/stores/images/bars/ביר בזאר/לוגו.jpg`),
      menuUrls: [
        getImageUrl(`static/stores/images/bars/ביר בזאר/תפריט 1.jpeg`),
        getImageUrl(`static/stores/images/bars/ביר בזאר/תפריט 2.jpeg`),
      ],
    },
    waitingTime: 9,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Bars,
    name: 'פרדי למון',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'עץ החיים',
    },
    priceRange: {
      from: 20,
      till: 45,
      avg: 30,
    },
    openHours: {
      '1': {
        from: '11:00',
        till: '02:30',
      },
      '2': {
        from: '11:00',
        till: '03:00',
      },
      '3': {
        from: '11:00',
        till: '03:00',
      },
      '4': {
        from: '11:00',
        till: '03:30',
      },
      '5': {
        from: '11:00',
        till: '05:00',
      },
      '6': {
        from: '10:00',
        till: '18:00',
      },
      '7': {
        from: '19:00',
        till: '05:00',
      },
    },

    static: {
      imagesUrl: [
        `https://lh3.googleusercontent.com/places/AAcXr8pJqh9C2fUcF5wwdgCFEoUy_EuqbZz4f_D7WBYpvkBFW3uwiHBHfAftXSwQ6nSgeGYHAkzm82cZtndCqAsUpT9zJdsZXXr9fcc=s1600-w1280-h1280`,
      ],
      logoUrl: getImageUrl(`static/stores/images/bars/פרדי למון/לוגו.jpg`),
      menuUrls: [
        getImageUrl(`static/stores/images/bars/פרדי למון/תפריט.jpeg`),
        getImageUrl(`static/stores/images/bars/פרדי למון/תפריט 2.jpeg`),
        getImageUrl(`static/stores/images/bars/פרדי למון/תפריט 3.jpeg`),
      ],
    },
    waitingTime: 8,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Sweets,
    name: 'קוקי קרים',
    isKosher: true,
    address: {
      street: 'האשכול',
      number: 6,
    },
    priceRange: {
      from: 16,
      till: 34,
      avg: 25,
    },
    openHours: {
      '1': {
        from: '09:00',
        till: '01:00',
      },
      '2': {
        from: '09:00',
        till: '01:00',
      },
      '3': {
        from: '09:00',
        till: '01:00',
      },
      '4': {
        from: '09:00',
        till: '01:00',
      },
      '5': {
        from: '09:00',
        till: '03:00',
      },
      '6': {
        from: '09:00',
        till: '16:00',
      },
      '7': {
        from: '20:00',
        till: '01:00',
      },
    },

    static: {
      imagesUrl: [getImageUrl(`static/stores/images/sweets/קוקי קרים/קוקי קרים.jpeg`)],
      logoUrl: getImageUrl(`static/stores/images/sweets/קוקי קרים/לוגו.png`),
      menuUrls: [getImageUrl(`static/stores/images/sweets/קוקי קרים/תפריט.jpeg`)],
    },
    waitingTime: 3,
    website: {
      url: 'https://www.cookiecream.co.il/',
    },
  },
  {
    type: RestaurantCategories.Sweets,
    name: 'אהרלה',
    isKosher: true,
    address: {
      street: 'אגריפס',
      number: 72,
    },
    priceRange: {
      from: 28,
      till: 35,
      avg: 28.5,
    },
    openHours: {
      '1': {
        from: '12:00',
        till: '01:00',
      },
      '2': {
        from: '11:00',
        till: '01:00',
      },
      '3': {
        from: '11:00',
        till: '01:00',
      },
      '4': {
        from: '11:00',
        till: '01:00',
      },
      '5': {
        from: '11:00',
        till: '01:00',
      },
      '6': {
        from: '09:00',
        till: '15:00',
      },
      '7': {
        from: '19:00',
        till: '01:00',
      },
    },

    static: {
      imagesUrl: [
        `https://static.wixstatic.com/media/0e37f5_7f898ee7bd6b40bbb17781f451668121~mv2.jpeg/v1/fill/w_980,h_853,q_85,usm_0.66_1.00_0.01/0e37f5_7f898ee7bd6b40bbb17781f451668121~mv2.jpeg`,
      ],
      logoUrl: getImageUrl(`static/stores/images/sweets/אהרלה/לוגו.jpeg`),
      menuUrls: [
        getImageUrl(`static/stores/images/sweets/אהרלה/תפריט.jpeg`),
        getImageUrl(`static/stores/images/sweets/אהרלה/תפריט ספיישל.jpeg`),
      ],
    },
    waitingTime: 2,
    website: {
      url: 'https://www.aralecrepe.com/',
    },
  },
  {
    type: RestaurantCategories.Bastot,
    name: 'פלאפל האחים לוי',
    isKosher: true,
    address: {
      street: 'התות',
    },
    priceRange: {
      from: 10,
      till: 28,
      avg: 17.5,
    },
    openHours: {
      '1': {
        from: '08:00',
        till: '21:00',
      },
      '2': {
        from: '08:00',
        till: '21:00',
      },
      '3': {
        from: '08:00',
        till: '21:00',
      },
      '4': {
        from: '08:00',
        till: '21:00',
      },
      '5': {
        from: '08:00',
        till: '21:00',
      },
      '6': {
        from: '08:00',
        till: '16:00',
      },
      '7': 'Closed',
    },

    static: {
      imagesUrl: [
        getImageUrl(`static/stores/images/booths/פלאפל האחים לוי/האחים לוי.jpg`),
        getImageUrl(`static/stores/images/booths/פלאפל האחים לוי/האחים לוי 2.jpg`),
      ],
      logoUrl: getImageUrl(`static/stores/images/booths/פלאפל האחים לוי/לוגו.jpeg`),
      menuUrls: [getImageUrl(`static/stores/images/booths/פלאפל האחים לוי/תפריט.jpeg`)],
    },
    waitingTime: 5,
    website: {
      url: '',
    },
  },
  {
    type: RestaurantCategories.Bastot,
    name: 'חכמת הבורקס מחיפה',
    isKosher: true,
    veganType: 'בשרי',
    address: {
      street: 'מחנה יהודה',
      number: 24,
    },
    priceRange: {
      from: 12,
      till: 30,
      avg: 18,
    },
    openHours: {
      '1': {
        from: '00:00',
        till: '00:00',
      },
      '2': {
        from: '00:00',
        till: '00:00',
      },
      '3': {
        from: '00:00',
        till: '00:00',
      },
      '4': {
        from: '00:00',
        till: '00:00',
      },
      '5': {
        from: '00:00',
        till: '00:00',
      },
      '6': {
        from: '00:00',
        till: '16:00',
      },
      '7': {
        from: '19:00',
        till: '00:00',
      },
    },

    static: {
      imagesUrl: [
        getImageUrl(`static/stores/images/booths/חכמת הבורקס מחיפה/חכמת הבורקס מחיפה.jpg`),
        getImageUrl(`static/stores/images/booths/חכמת הבורקס מחיפה/חכמת הבורקס מחיפה.jpeg`),
      ],
      logoUrl: getImageUrl(`static/stores/images/booths/חכמת הבורקס מחיפה/לוגו.jpeg`),
      menuUrls: [getImageUrl(`static/stores/images/booths/חכמת הבורקס מחיפה/תפריט.jpeg`)],
    },
    waitingTime: 10,
    website: {
      url: '',
    },
  },
];

export const getRestaurantByName = (name: string) => restaurantsDataInfo.find(r => r.name === name);
