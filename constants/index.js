import { 
  saudiBussiness, zakatax, staria, clock, 
  bankTransfer,
  cashPayment,
  paymentCard,
  onlineDiscount,
  call,
  taxNumber,
  commericalNum,
  whatsappIcon,
  instagramIcon,
  snapIcon,
  callIcon,
  mailIcon,
  leczes,
  torus,
  jems,
  superpan,
  hais,
  bmw,
  bmw1,
  special,
  special1,
  mercides,
  coster,
  coster1,
  staria1,
  torus1,
  leczes1,
  superpan1,
  hais1,
  sonata,
  sonata1,
  sonata2,
  sonata3,
  torus2,
  torus3
} from "@/public/assets";
import { GrServices } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaRoad } from "react-icons/fa";
import { LuCalendarClock } from "react-icons/lu";
import { FaWifi } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { MdCarRental } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import { FaMosque } from "react-icons/fa";

// export const heroImages = [
//   {
//     id: "img-1",
//     image: hero1,
//   },
//   {
//     id: "img-2",
//     image: hero2,
//   },
//   {
//     id: "img-3",
//     image: hero3,
//   },
//   {
//     id: "img-4",
//     image: medinah1,
//   },
//   {
//     id: "img-5",
//     image: taif1,
//   },
//   {
//     id: "img-6",
//     image: jeddah1,
//   },
//   {
//     id: "img-7",
//     image: medinah,
//   },
//   {
//     id: "img-8",
//     image: jeddah2,
//   },
//   {
//     id: "img-9",
//     image: mecca1,
//   },
//   // {
//   //   id: "img-10",
//   //   image: hero2,
//   // },
//   // {
//   //   id: "img-11",
//   //   image: hero3,
//   // },
//   // {
//   //   id: "img-12",
//   //   image: rayhan,
//   // },
// ];

export const navLinks = [
    {
      id: "home",
      link: "/",
      title: "الرئيسية",
    },
    // {
    //   id: "reservations",
    //   link: "/cars",
    //   title: "الحجوزات",
    // },
    {
      id: "cars",
      link: "/cars",
      title: "حجز سيارة",
    },
    {
      id: "hotels",
      link: "/hotels",
      title: "حجز فندقي",
    },
    {
        id: "evaluations",
        link: "/evaluations",
        title: "تقييم العملاء",
    },
    {
      id: "questions",
      link: "/questions",
      title: "الأسئلة المتكررة",
    },
    // {
    //   id: "contact",
    //   link: "/contact",
    //   title: "اتصل بنا",
    // },
    // {
    //   id: "signin",
    //   link: "/contact",
    //   title: "تسجيل الدخول",
    // },
    // {
    //   id: "dashboard",
    //   link: "/dashboard",
    //   title: "لوحة التحكم",
    // },
];
  
export const stats = [
  {
    id: "stats-1",
    title: "حجز فندقي",
    value: "3800+",
  },
  {
    id: "stats-3",
    title: "حجز سيارة",
    value: "4500+",
  },
  {
    id: "stats-2",
    title: "موثوق به من قبل الشركة",
    value: "230+",
  },
];

export const messages = [
  {
    id: 'msg-1',
    name: 'محمد',
    mobile: '+966566633156',
    email: 'client1@mail.com',
    message: 'رسالة من العميل أحمد'
  },
  {
    id: 'msg-2',
    name: 'علاء',
    mobile: '+966566633155',
    email: 'client2@mail.com',
    message: 'رسالة من العميل علاء'
  },
  {
    id: 'msg-1',
    name: 'عثمان',
    mobile: '+966566633154',
    email: 'client3@mail.com',
    message: 'رسالة من العميل عثمان'
  },
]

export const evaluations = [
  {
    id: 'ev-1',
    date: '2024-02-06',
    rating: 5,
    text: 'اهنيكم على الخدمه والدقه في المواعيد افضل واسعار مناسبه ومميزه',
    client: 'شادي الريمي'
  },
  {
    id: 'ev-2',
    date: '2023-10-31',
    rating: 5,
    text: 'تم التعامل مع مسار الغربية- اشكر الاستاذ ابو ناصر على ترتيب كامل الرحلة الى مكة وسرعة التجاوب لأي استفسار',
    client: 'ابو خليفه'
  },
  {
    id: 'ev-3',
    date: '2023-03-1',
    rating: 5,
    text: 'اريحية كبيرة ،حرفية التزام واحساس بالمسؤلية. راحة تامة في التعامل.ربنا يوفقك مستر. حسن. نتمنى لك. المزيد من النجاح والتالق.',
    client: 'لويال تورز'
  },
]

export const trips = [
  {
    id: '1',
    title: 'من جده الى مكه',
    price: {
        sonata: '220',
        torus: '250',
        lecsez: '350',
        gmc: '450',
        superpan: '',
        staria: '280',
        hais: '450',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '2',
    title: 'من مكة إلى جدة',
    price: {
        sonata: '220',
        torus: '250',
        lecsez: '350',
        gmc: '450',
        superpan: '',
        staria: '280',
        hais: '450',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '3',
    title: 'من مكة إلى المدينة المنورة',
    price: {
        sonata: '600',
        torus: '750',
        lecsez: '1100',
        gmc: '1200',
        superpan: '',
        staria: '750',
        hais: '800',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '4',
    title: 'من المدينة المنورة إلى مكة',
    price: {
        sonata: '600',
        torus: '750',
        lecsez: '1100',
        gmc: '1200',
        superpan: '',
        staria: '750',
        hais: '800',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '5',
    title: 'من المدينة المنورة إلى جدة',
    price: {
        sonata: '600',
        torus: '750',
        lecsez: '1100',
        gmc: '1200',
        superpan: '',
        staria: '750',
        hais: '800',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '6',
    title: 'من جدة إلى المدينة المنورة',
    price: {
        sonata: '600',
        torus: '750',
        lecsez: '1100',
        gmc: '1200',
        superpan: '',
        staria: '750',
        hais: '800',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '7',
    title: 'من جدة إلى مدينة الملك عبد الله',
    price: {
        sonata: '250',
        torus: '300',
        lecsez: '500',
        gmc: '500',
        superpan: '',
        staria: '320',
        hais: '450',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '8',
    title: 'من جدة إلى ينبع',
    price: {
        sonata: '600',
        torus: '750',
        lecsez: '1100',
        gmc: '1100',
        superpan: '',
        staria: '750',
        hais: '800',
        bmw: '',
        h1: '',
        mercides: '450',
        coster: '',
      },
  },
  {
    id: '9',
    title: 'من مطار المدينة المنورة إلى الفندق',
    price: {
        sonata: '150',
        torus: '150',
        lecsez: '280',
        gmc: '280',
        superpan: '',
        staria: '200',
        hais: '280',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '10',
    title: 'من فندق المدينة المنورة إلى المطار',
    price: {
        sonata: '150',
        torus: '150',
        lecsez: '280',
        gmc: '280',
        superpan: '',
        staria: '200',
        hais: '250',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '11',
    title: 'من محطة قطار المدينة المنورة إلى الفندق',
    price: {
        sonata: '150',
        torus: '150',
        lecsez: '250',
        gmc: '250',
        superpan: '',
        staria: '200',
        hais: '250',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '12',
    title: 'من  فندق المدينة المنورة إلى محطة القطار',
    price: {
        sonata: '150',
        torus: '150',
        lecsez: '250',
        gmc: '250',
        superpan: '',
        staria: '200',
        hais: '250',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '13',
    title: 'من  محطة قطار مكة إلى الفندق',
    price: {
        sonata: '100',
        torus: '150',
        lecsez: '200',
        gmc: '200',
        superpan: '',
        staria: '180',
        hais: '200',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '14',
    title: 'من فندق مكة إلى محطة القطار',
    price: {
        sonata: '100',
        torus: '150',
        lecsez: '200',
        gmc: '200',
        superpan: '',
        staria: '180',
        hais: '200',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '15',
    title: 'مزارات مكة',
    price: {
        sonata: '250',
        torus: '300',
        lecsez: '400',
        gmc: '400',
        superpan: '',
        staria: '300',
        hais: '500',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
  {
    id: '16',
    title: 'مزارات المدينة المنورة',
    price: {
        sonata: '250',
        torus: '300',
        lecsez: '350',
        gmc: '350',
        superpan: '',
        staria: '300',
        hais: '450',
        bmw: '',
        h1: '',
        mercides: '',
        coster: '',
      },
  },
];

export const cars = [
  {
    id: '1',
    name: "سوناتا",
    title: 'sonata',
    model: "2024",
    description: "سيارة وسط تتسع الى 4 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '4',
    GPS: false,
    automatic: true,
    mainImg: sonata,
    imgs: [ sonata1, sonata2, sonata3],
    hours: '80'
  },
  {
    id: '2',
    name: "فورد تورس",
    title: 'torus',
    model: "2024",
    description: "سيارة وسط تتسع الى 4 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '4',
    GPS: false,
    automatic: true,
    mainImg: torus,
    imgs: [ torus1, torus2, torus3],
    hours: '80'
  },
  {
    id: '3',
    name: "لكزس",
    title: 'leczes',
    model: "ES250 – 2024",
    description: "سيارة وسط vip تتسع الى 4 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '4',
    GPS: false,
    automatic: true,
    mainImg: leczes,
    imgs: [ leczes, leczes1, leczes1],
    hours: '150'
  },
  {
    id: '4',
    name: "جمس",
    title: 'jems',
    model: "( XL ) 2024",
    description: "سيارة كبيرة تتسع الى 7 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '7',
    GPS: false,
    automatic: true,
    mainImg: jems,
    imgs: [ jems, jems, jems],
    hours: '150'
  },
  {
    id: '5',
    name: "سوبربان ",
    title: 'superpan',
    model: "( XL ) 2024",
    description: "سيارة كبيرة تتسع الى 7 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '7',
    GPS: false,
    automatic: true,
    mainImg: superpan,
    imgs: [ superpan, superpan1, superpan1],
    hours: ''
  },
  {
    id: '6',
    name: "ستاريا",
    title: 'staria',
    model: "2025",
    description: "سيارة كبيرة عائلية تتسع الى 8 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '8',
    GPS: false,
    automatic: true,
    mainImg: staria,
    imgs: [ staria, staria1, staria1],
    hours: '100'
  },
  {
    id: '7',
    name: "هايس",
    title: 'hais',
    model: "قبه 2024",
    description: "سيارة كبيرة عائلية تتسع الى 12 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '12',
    GPS: false,
    automatic: true,
    mainImg: hais,
    imgs: [ hais, hais1, hais1],
    hours: '150'
  },
  {
    id: '8',
    name: "بي ام دبيلو",
    title: 'bmw',
    model: "2024",
    description: "سيارة وسط vip تتسع الى 4 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '4',
    GPS: false,
    automatic: true,
    mainImg: bmw,
    imgs: [ bmw, bmw1, bmw1],
    hours: ''
  },
  {
    id: '9',
    name: "H1",
    title: 'special',
    model: "للإحتياجات الخاصة 2024",
    description: "باصات 42 راكب 2024",
    pricePerHour: '$10',
    rating: 5,
    passengers: '42',
    GPS: false,
    automatic: true,
    mainImg: special,
    imgs: [ special, special1, special1],
    hours: ''
  },
  {
    id: '10',
    name: "مرسيدس",
    title: 'mercides',
    model: "الجوهره موديل 2022",
    description: "سيارة وسط تتسع الى 4 اشخاص",
    pricePerHour: '$10',
    rating: 5,
    passengers: '4',
    GPS: false,
    automatic: true,
    mainImg: mercides,
    imgs: [ mercides, mercides, mercides],
    hours: '80'
  },
  {
    id: '11',
    name: "كوستر",
    title: 'coster',
    model: "2024",
    description: "كوستر 20 راكب بالعفش موديل حديث",
    pricePerHour: '$10',
    rating: 5,
    passengers: '20',
    GPS: false,
    automatic: true,
    mainImg: coster,
    imgs: [ coster, coster1, coster1],
    hours: ''
  },
];

export const hotels = [
  {
    id: 1,
    name: "دار التوحيد",
    location: "مكة المكرمة",
    description: "امام المسجد الحرام",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 2,
    name: "⁠رافلز",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 3,
    name: "الفيرمونت برج الساعه",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 4,
    name: "سويس اوتيل مكة",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 5,
    name: "سويس المقام",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 6,
    name: "موڤمبيك هاجر",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 7,
    name: "المروه ريحانه",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 8,
    name: "فندق مكة شركة مكة سابقا",
    location: "مكة المكرمة",
    description: "امام المسجد الحرام",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 9,
    name: "ابراج مكة",
    location: "مكة المكرمة",
    description: "امام المسجد الحرام",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 10,
    name: "ابراج مكة",
    location: "مكة المكرمة",
    description: "امام المسجد الحرام",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 11,
    name: "جميرا جبل عمر",
    location: "مكة المكرمة",
    description: "يبعد مسافة 250 متر من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 12,
    name: "كونراد جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 13,
    name: "حياة ريجنسي جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 14,
    name: "اجنحة هيلتون جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 15,
    name: "هيلتون مؤتمرات جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 16,
    name: "العنوان جبل عمر",
    location: "مكة المكرمة",
    description: "يبعد 1.2كم من المسجد الحرام",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 17,
    name: "دبل تري جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد خطوات من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 18,
    name: "ماريوت جبل عمر",
    location: "مكة المكرمة",
    description: "على بعد 6 دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 19,
    name: "انجم مكة جبل الكعبه",
    location: "مكة المكرمة",
    description: "على بعد 5 دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 20,
    name: "شذا مكة جبل الكعبه",
    location: "مكة المكرمة",
    description: "على بعد 8 دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 21,
    name: "شيرتون جبل الكعبه",
    location: "مكة المكرمة",
    description: "على بعد 8 دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 22,
    name: "⁠الايباء",
    location: "مكة المكرمة",
    description: "على بعد 10 دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 23,
    name: "⁠فوكو",
    location: "مكة المكرمة",
    description: "على بعد 1.3 كم من المسجد الحرام",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 24,
    name: "فوربوينت شيرتون النسيم",
    location: "مكة المكرمة",
    description: "على بعد 10 كم من المسجد الحرام",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 25,
    name: "ورقان العزيزيه",
    location: "مكة المكرمة",
    description: "على بعد 7.7 كم دقائق من المسجد الحرام",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 26,
    name: "هوليدي إن العزيزيه",
    location: "مكة المكرمة",
    description: "على بعد 5 كم من المسجد الحرام",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 27,
    name: "الاوبروي",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 28,
    name: "⁠دار الايمان انتركونتنال",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 29,
    name: "⁠دار التقوى",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم -  صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 30,
    name: "دار الهجرة",
    location: "المدينه المنورة",
    description: " الجهة الشماليه من الحرم - صف ثالث",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 31,
    name: "⁠الهليتون",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 32,
    name: "شهد المدينه",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 33,
    name: "⁠انوار المدينه موفمبيك",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 34,
    name: "فرونتيل الحارثيه",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 35,
    name: "⁠العقيق",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 36,
    name: "واجهة طيبه",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 37,
    name: "⁠دله طيبه",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 38,
    name: "⁠الحرم دار الايمان",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 39,
    name: "سجى المدينه",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف رابع",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 40,
    name: "كونكورد دار الخير",
    location: "المدينه المنورة",
    description: "الجهة الشماليه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 41,
    name: "⁠بولمان زمزم المدينه",
    location: "المدينه المنورة",
    description: "الجهة الجنوبيه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 42,
    name: "مسك تتش",
    location: "المدينه المنورة",
    description: "الجهة الجنوبيه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 43,
    name: "روتانا المناخة",
    location: "المدينه المنورة",
    description: "الجهة الجنوبيه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 44,
    name: "⁠رؤى الهجرة",
    location: "المدينه المنورة",
    description: "الجهة الجنوبيه من الحرم - صف أول",
    pricePerHour: '$100',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 45,
    name: "نسك الهجرة",
    location: "المدينه المنورة",
    description: "الجهة الجنوبيه من الحرم - صف ثاني",
    pricePerHour: '$100',
    rating: 4,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
  {
    id: 46,
    name: "أخرى",
    location: "اختر موقع",
    description: "",
    pricePerHour: '',
    rating: 5,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
    mainImg: clock,
    // imgs: [ clock, lobik, rayhan]
  },
];

export const features = [
  {
    id: "feature-1",
    icon: <IoShieldCheckmark size={30} color='#e6c200'/>,
    title: "مصداقية وخبرة",
    content:
      "نتمتع بسنوات من الخبرة في تقديم خدمات حجوزات الحج والعمرة، ما أكسبنا ثقة آلاف الحجاج والمعتمرين. هدفنا هو خدمتك بمصداقية وتفانٍ لتعيش تجربة إيمانية سلسة ومميزة.",
  },
  {
    id: "feature-2",
    icon: <GrServices size={30} color='#e6c200'/>,
    title: "خدمات متخصصة ومتكاملة",
    content:
      "نحن نفهم خصوصية رحلات الحج والعمرة، لذا نقدم باقات مخصصة للحجوزات الفندقية وتأجير السيارات تضمن لك أقصى درجات الراحة والتسهيلات الضرورية بالقرب من الحرمين الشريفين.",
  },
  {
    id: "feature-3",
    icon: <FaCalendarAlt size={30} color='#e6c200'/>,
    title: "دعم مواصل على مدار الساعة مع سهولة و سرعة في الحجز",
    content:
      "نلتزم بتقديم دعم متواصل طوال رحلتك؛ ففريقنا متاح 24/8 للإجابة عن استفساراتك، وتقديم المساعدةلضمان تجربة مريحة ومطمئنة. كما أن موقعنا يوفر نظام حجز سريع وسهل، يتيح لك تأكيد حجزك خلال دقائق. نضمن لك عملية حجز سلسة وآمنة، مع طرق دفع متعددة وموثوقة",
  },
  {
    id: "feature-4",
    icon: <BiSolidOffer size={30} color='#e6c200'/>,
    title: "أفضل العروض والأسعار التنافسية",
    content:
      "سواء كنت ترغب بحجز فندق أو سيارة، يوفر موقعنا نظام حجز سريع وسهل، يتيح لك تأكيد حجزك خلال دقائق. نضمن لك عملية حجز سلسة وآمنة، مع طرق دفع متعددة وموثوقة.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "رائعين جدا محترمين جدا اللي يعرفكم ماياخذ غيركم ابدا",
    name: "منى الجليل",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2024-08-13',
    // img: people01,
  },
  {
    id: "feedback-2",
    content:
      "من غير مدح افضل شركة في السعودية والشكر للأخ / ابو ناصر على جهوه...بيض الله وجهكم",
    name: "ابو علي",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2023-10-31',
    // img: people02,
  },
  {
    id: "feedback-3",
    content:
      "تم التعامل مع مسار الغربية- اشكر الاستاذ ابو ناصر على ترتيب كامل الرحلة الى مكة وسرعة التجاوب لأي استفسار",
    name: "ابو خليفه",
    title: "Founder & Leader",
    evaluate: 5,
    date: '2023-10-31'
    // img: people03,
  },
];

export const footerLinks = [
  {
    title: "التراخيص",
    links: [
      {
        name: "رقم السجل التجاري-4031281145",
        image: commericalNum
      },
      {
        name: "الرقم الضريبي-311164786100003",
        image: taxNumber
      },
      {
        name: '',
        image: saudiBussiness
      },
      {
        name: '',
        image: zakatax
      },
    ],
  },
  {
    title: "طرق لدفع",
    links: [
      {
        name: "تحويل مصرفي مباشر",
        image: bankTransfer,
      },
      {
        name: "الدفع اثناء التوصيل",
        image: cashPayment,
      },
      {
        name: " بطاقة ائتمان",
        image: paymentCard,
      },
      {
        name: "خصم عبر المدفوعات عبر الإنترنت",
        image: onlineDiscount,
      },
    ],
  },
  {
    title: "اتصل بنا",
    links: [
      {
        name: "966566633161+",
        image: call,
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagramIcon,
    link: "https://www.instagram.com/masartoursim/?hl=ar",
    isFloating: false,
    title: 'Instagram'
  },
  {
    id: "social-media-2",
    icon: whatsappIcon,
    link: "https://wa.me/+966566633161",
    isFloating: true,
    title: 'Whatsapp'
  },
  {
    id: "social-media-3",
    icon: snapIcon,
    link: "https://www.snapchat.com/add/masar-mix",
    isFloating: false,
    title: 'Snapchat'
  },
  {
    id: "social-media-4",
    icon: mailIcon,
    link: "mailto:admin@alaglaan.com/",
    isFloating: true,
    title: 'Email'
  },
  {
    id: "social-media-5",
    icon: callIcon,
    link: "tel:+966566633161",
    isFloating: true,
    title: 'Call'
  },
];

export const ourServices = [
  {
    id: 'service-1',
    icon: <GiJourney size={75} color='#2ecc71'/>,
    text: 'تجربة رائعة',
  },
  {
    id: 'service-2',
    icon: <FaRoad size={75} color= '#76828D'/>,
    text: 'راحة في الطريق',
  },
  {
    id: 'service-3',
    icon: <LuCalendarClock size={75} color="#F24E43"/>,
    text: 'التزام في المواعيد',
  },
  {
    id: 'service-4',
    icon: <IoShieldCheckmark size={75} color="#3498db"/>,
    text: 'مصداقية',
  },
  {
    id: 'service-5',
    icon: <MdCarRental size={75} color='#F37877'/>,
    text: 'حجز مسبق للعودة',
  },
  {
    id: 'service-6',
    icon: <BiSolidOffer size={75} color='#ffd700'/>,
    text: 'أسعار منافسة',
  },
  {
    id: 'service-7',
    icon: <FaWifi size={75} color="#ABB8C4"/>,
    text: 'انترنت واي فاي',
  },
  {
    id: 'service-8',
    icon: <BiSolidCarGarage size={75} color="#3E1716"/>,
    text: 'عازل حراري',
  },
];

export const popularQuestions = [
  {
    id: 'q-1',
    question: 'مسار ؟',
    answer: 'مسار هي خدمة تتيح للعملاء حجز كابتن مع المركبة,  ونقوم بتوصيل الركاب ، بالإضافة إلى طلبات الفنادق للتوصيل الخاص وغيرها من الخدمات التي أصبحت ضرورية في الوقت الحاضر. حيث تم جمع كافة تلك الاحتياجات وتلبيتها عبر مسار .'
  },
  {
    id: 'q-2',
    question: 'ماهي الخدمات المقدمة',
    answer: 'خدمة التوصيل مع سائق - خدمة التوصيل بدون سائق - خدمة الحجوزات الفندقية.'
  },
  {
    id: 'q-3',
    question: 'كيفية حجز توصيل من مسار',
    answer: 'قم بتعبئة نموذج الطلب وبعد ارسالها للنظام سوف يقوم فريق الدعم لدى مسار بالتواصل معك في اقرب وقت ممكن .'
  },
  {
    id: 'q-4',
    question: 'ماهو الوقت المقدر للرد على الطلب',
    answer: 'غالباً ما يتم الرد خلال دقائق من رفع الطلب ( نلتزم بخدمتنا )'
  },
  {
    id: 'q-5',
    question: 'ماهي طرق التواصل معكم',
    answer: '1- الواتساب  2- الاتصال   3- البريد الالكتروني'
  },
  {
    id: 'q-6',
    question: 'كيف اقوم بالحجز من الموقع ؟',
    answer: 'من خلال صفحة الحجوزات '
  },
  {
    id: 'q-7',
    question: 'التأكد من استلام رسالة البريد الإلكتروني',
    answer: 'سنرسل رسالة البريد الإلكتروني من ” مسار “، بحيث يمكنك البحث عنها بسرعة.فإذا لم تكن في صندوق الوارد، فتحقق من المجلدات الأخرى. فربما تكون في مجلد “بريد عشوائي” أو “بريد غير هام” .'
  },
  {
    id: 'q-8',
    question: 'هل يتم الإتصال بي بعد الحجز ؟',
    answer: 'نعم بعد عدة دقائق من ارسال الطلب سوف نقوم بالرد عليك مباشرة'
  },
  {
    id: 'q-9',
    question: 'هل جميع السيارات لديكم متوفرة ؟',
    answer: 'نعم جميعها متوفرة ( وعند عدم وجود السياره المطلوبه يتم توفير البديل في أسرع وقت ممكن )'
  },
  {
    id: 'q-10',
    question: 'اريد سيارة خاصة ؟',
    answer: 'نقوم بتوفير سيارة خاصة للعملاء مع الكابتن الخاص به .'
  },
  {
    id: 'q-11',
    question: 'هل يتم توفير المأكولات والمشروبات أثناء التنقل ؟',
    answer: 'نقوم بتوفير المشروبات الباردة والساخنة وعند طلب العميل وجبة غدا او عشاء يتم توفيرها بطلب خاص .'
  },
]

export const StatusIcon = {
  scheduled: "/assets/check.svg",
  pending: "/assets/pending.svg",
  cancelled: "/assets/cancelled.svg",
};

export const reviewList = [
  {
    id: 'review-1',
    desc: 'اهنيكم على الخدمه والدقه في المواعيد افضل واسعار مناسبه ومميزه',
    date: '2024-02-06',
    client: 'شادي الريمي'
  },
  {
    id: 'review-2',
    desc: 'تم التعامل مع مسار الغربية- اشكر الاستاذ ابو ناصر على ترتيب كامل الرحلة الى مكة وسرعة التجاوب لأي استفسار',
    date: '2023-10-31',
    client: 'ابو خليفه'
  },
  {
    id: 'review-3',
    desc: 'اريحية كبيرة ،حرفية التزام واحساس بالمسؤلية. راحة تامة في التعامل.ربنا يوفقك مستر. حسن. نتمنى لك. المزيد من النجاح والتالق.',
    date: '2023-10-31',
    client: 'لويال تورز'
  },
]

export const quickBookHandler = (msg) => {
  const phoneNumber = "+966566633161"; // Replace with your number
  const message = msg;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export const dashboardMenuItems = [
  { name: "إدارة الطلبات", href: "/dashboard" },
  { name: "إدارة السيارات", href: "/dashboard/manage-cars" },
  { name: "إدارة الفنادق", href: "/dashboard/manage-hotels" },
  { name: "تعليقات العملاء", href: "/dashboard/manage-evaluations" },
  { name: "رسائل العملاء", href: "/dashboard/manage-messages" },
  { name: "سيارة جديدة", href: "/dashboard/new-car" },
  { name: "فندق جديد", href: "/dashboard/new-hotel" },
  { name: "إعدادات", href: "/dashboard/settings" },
];

export async function getData() {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      client: 'xxx',
      amount: 100,
      status: "cancelled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - staria",
      phone: '+966566633156'
    },
    {
      id: "728ed52f",
      client: 'qqq',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633157'
    },
    {
      id: "728ed52f",
      client: 'ddd',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - staria",
      phone: '+966566633158'
    },
    {
      id: "728ed52f",
      client: 'bbb',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock",
      phone: '+966566633159'
    },
    {
      id: "728ed52f",
      client: 'aaa',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633160'
    },
    {
      id: "728ed52f",
      client: 'sss',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - clock",
      phone: '+966566633169'
    },
    {
      id: "728ed52f",
      client: 'kkk',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633168'
    },
    {
      id: "728ed52f",
      client: 'ooo',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - anwar",
      phone: '+966566633167'
    },
    {
      id: "728ed52f",
      client: 'mmm',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa",
      phone: '+966566633166'
    },
    {
      id: "728ed52f",
      client: 'nnn',
      amount: 100,
      status: "cancelled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633165'
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Ford",
      phone: '+966566633164'
    },
    {
      id: "728ed52f",
      client: 'yyy',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - BMW",
      phone: '+966566633163'
    },
    {
      id: "728ed52f",
      client: 'www',
      amount: 100,
      status: "pending",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "car - Staria",
      phone: '+966566633161'
    },
    {
      id: "728ed52f",
      client: 'zzz',
      amount: 100,
      status: "scheduled",
      startDate: "Oct 26, 2024, 11:30 PM",
      endDate: "Oct 26, 2024, 11:30 PM",
      item: "hotel - marwa",
      phone: '+966566633162'
    },
    // ...
  ]
}


// {
//   id: 'hotel-1',
//   name: "Makkah Clock Royal Tower",
//   location: "مكة",
//   description: "معلومات إضافية عن الفندق ساعة مكة",
//   pricePerHour: '$100',
//   rating: 5,
//   wifi: true,
//   conditioning : true,
//   breakfast: true,
//   meal: true,
//   mainImg: clock,
//   imgs: [ clock, lobik, rayhan]
// },
// {
//   id: 'hotel-2',
//   name: "Luvyka Hotel Madinah",
//   location: "المدينة",
//   description: "معلومات إضافية عن الفندق المدينة",
//   pricePerHour: '$100',
//   rating: 4,
//   wifi: true,
//   conditioning : true,
//   breakfast: true,
//   meal: false,
//   mainImg: lobik,
//   imgs: [ clock, lobik, rayhan]
// },
// {
//   id: 'hotel-3',
//   name: "Al Marwa Rayhaan by Rotana",
//   location: "مكة",
//   description: "معلومات إضافية عن الفندق المروة ",
//   pricePerHour: '$100',
//   rating: 4,
//   img: rayhan,
//   wifi: true,
//   conditioning : true,
//   breakfast: false,
//   meal: false,
//   mainImg: rayhan,
//   imgs: [ clock, lobik, rayhan]
// },
// {
// id: 'hotel-4',
// name: "Anwar Al Madinah Mövenpick Hotel",
// location: "المدينة",
// description: "معلومات إضافية عن الفندق أنوار المدينة",
// pricePerHour: '$100',
// rating: 3,
// wifi: true,
// conditioning : true,
// breakfast: true,
// meal: true,
// mainImg: alansar,
// imgs: [ clock, lobik, rayhan]
// },


//cars
// {
//   id: 'car-1',
//   name: "staria",
//   model: "model-1",
//   description: "معلومات إضافية عن السيارة ستاريا",
//   pricePerHour: '$100',
//   rating: 5,
//   passengers: '4',
//   GPS: false,
//   automatic: true,
//   mainImg: staria,
//   imgs: [ staria, BMW, fordTurus]
// },
// {
//   id: 'car-2',
//   name: "BMW",
//   model: "model-2",
//   description: "معلومات إضافية عن السيارة BMW",
//   pricePerHour: '$100',
//   rating: 4,
//   passengers: '6',
//   GPS: true,
//   automatic: true,
//   mainImg: BMW,
//   imgs: [ staria, BMW, fordTurus]
// },
// {
//   id: 'car-3',
//   name: "fordTurus",
//   model: "model-3",
//   description: "معلومات إضافية عن السيارة فورد",
//   pricePerHour: '$100',
//   rating: 5,
//   passengers: '4',
//   GPS: false,
//   automatic: true,
//   mainImg: fordTurus,
//   imgs: [ staria, BMW, fordTurus]
// },
// {
// id: 'car-4',
// name: "staria",
// model: "model-1",
// description: "معلومات إضافية عن السيارة ستاريا",
// pricePerHour: '$100',
// rating: 3,
// passengers: '4',
// GPS: false,
// automatic: true,
// mainImg: staria,
// imgs: [ staria, BMW, fordTurus]
// },
// {
//   id: 'car-5',
//   name: "BMW",
//   model: "model-2",
//   description: "معلومات إضافية عن السيارة BMW",
//   pricePerHour: '$100',
//   rating: 5,
//   passengers: '6',
//   GPS: true,
//   automatic: true,
//   mainImg: BMW,
//   imgs: [ staria, BMW, fordTurus]
// },
// {
//   id: 'car-6',
//   name: "fordTurus",
//   model: "model-3",
//   description: "معلومات إضافية عن السيارة فورد",
//   pricePerHour: '$100',
//   rating: 4,
//   passengers: '4',
//   GPS: false,
//   automatic: false,
//   mainImg: fordTurus,
//   imgs: [ staria, BMW, fordTurus]
// },