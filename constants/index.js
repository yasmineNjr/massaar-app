import { 
  mail, instagram, whatsapp, twitter, saudiBussiness, zakatax, BMW, GMC, staria, fordTurus, lobik, alansar, clock, rayhan, shield, send, star, road, appointment, easyBook, services, price,
  hero1,
  hero2,
  hero3
} from "@/public/assets";
import { GrServices } from "react-icons/gr";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";

export const heroImages = [
  {
    id: "img-1",
    image: hero1,
  },
  {
    id: "img-2",
    image: hero2,
  },
  {
    id: "img-3",
    image: hero3,
  },
  {
    id: "img-4",
    image: rayhan,
  },
];

export const navLinks = [
    {
      id: "home",
      link: "/",
      title: "الرئيسية",
    },
    {
      id: "reservations",
      link: "/cars",
      title: "الحجوزات",
    },
    {
        id: "evaluations",
        link: "/evaluations",
        title: "تقييم العملاء",
    },
    {
      id: "contact",
      link: "/contact",
      title: "اتصل بنا",
    },
    // {
    //   id: "signin",
    //   link: "/contact",
    //   title: "تسجيل الدخول",
    // },
    {
      id: "dashboard",
      link: "/dashboard",
      title: "لوحة التحكم",
    },
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

  export const cars = [
    {
        id: 'car-1',
        img: staria,
        name: "staria",
        model: "model-1",
        description: "معلومات إضافية عن السيارة ستاريا",
        pricePerHour: '$100',
        rating: 'rating-1',
        passengers: '4',
        GPS: 'no',
        automatic: 'yes',
        mainImg: staria,
        imgs: [ staria, BMW, fordTurus]
    },
    {
        id: 'car-2',
        img: BMW,
        name: "BMW",
        model: "model-2",
        description: "معلومات إضافية عن السيارة BMW",
        pricePerHour: '$100',
        rating: 'rating-2',
        passengers: '6',
        GPS: 'yes',
        automatic: 'yes',
        mainImg: BMW,
        imgs: [ staria, BMW, fordTurus]
    },
    {
        id: 'car-3',
        img: fordTurus,
        name: "fordTurus",
        model: "model-3",
        description: "معلومات إضافية عن السيارة فورد",
        pricePerHour: '$100',
        rating: 'rating-3',
        passengers: '4',
        GPS: 'no',
        automatic: 'no',
        mainImg: fordTurus,
        imgs: [ staria, BMW, fordTurus]
    },
];

export const hotels = [
  {
      id: 'hotel-1',
      img: clock,
      name: "Makkah Clock Royal Tower",
      model: "model-2",
      description: "معلومات إضافية عن الفندق ساعة مكة",
      pricePerHour: '$100',
      rating: 'rating-2',
      passengers: '6',
      GPS: 'yes',
      automatic: 'yes',
      mainImg: clock,
      imgs: [ clock, lobik, rayhan]
  },
  {
      id: 'hotel-2',
      img: lobik,
      name: "Luvyka Hotel Madinah",
      model: "model-2",
      description: "معلومات إضافية عن الفندق المدينة",
      pricePerHour: '$100',
      rating: 'rating-2',
      passengers: '6',
      GPS: 'yes',
      automatic: 'yes',
      mainImg: lobik,
      imgs: [ clock, lobik, rayhan]
  },
  {
      id: 'hotel-3',
      img: rayhan,
      name: "Al Marwa Rayhaan by Rotana",
      model: "model-2",
      description: "معلومات إضافية عن الفندق المروة ",
      pricePerHour: '$100',
      rating: 'rating-2',
      passengers: '6',
      GPS: 'yes',
      automatic: 'yes',
      mainImg: rayhan,
      imgs: [ clock, lobik, rayhan]
  },
  {
    id: 'hotel-4',
    img: alansar,
    name: "Anwar Al Madinah Mövenpick Hotel",
    model: "model-2",
    description: "معلومات إضافية عن الفندق أنوار المدينة",
    pricePerHour: '$100',
    rating: 'rating-2',
    passengers: '6',
    GPS: 'yes',
    automatic: 'yes',
    mainImg: alansar,
    imgs: [ clock, lobik, rayhan]
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
        image: ''
      },
      {
        name: "الرقم الضريبي-311164786100003",
        image: ''
      },
      {
        name: "رقم السجل التجاري 4031281145",
        image: saudiBussiness
      },
      {
        name: "الرقم الضريبي 311164786100003",
        image: zakatax
      },
    ],
  },
  {
    title: "طرق لدفع",
    links: [
      {
        name: "تحويل مصرفي مباشر",
        image: '',
      },
      {
        name: "الدفع اثناء التوصيل",
        image: '',
      },
      {
        name: " بطاقة ائتمان",
        image: '',
      },
      {
        name: "خصم عبر المدفوعات عبر الإنترنت",
        image: '',
      },
    ],
  },
  {
    title: "اتصل بنا",
    links: [
      {
        name: "966566633161+",
        image: '',
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: whatsapp,
    link: "https://wa.me/966566633161",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: mail,
    link: "mailto:admin@alaglaan.com/",
  },
];

export const StatusIcon = {
  scheduled: "/assets/check.svg",
  pending: "/assets/pending.svg",
  cancelled: "/assets/cancelled.svg",
};