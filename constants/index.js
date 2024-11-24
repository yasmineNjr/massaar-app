import { 
  mail, instagram, whatsapp, twitter, saudiBussiness, zakatax, BMW, GMC, staria, fordTurus, lobik, alansar, clock, rayhan, shield, send, star, road, appointment, easyBook, services, price,
  hero1,
  hero2,
  hero3,
  medinah1, medinah, taif1, jeddah1, jeddah2, mecca1,
  snap,
  bankTransfer,
  cashPayment,
  paymentCard,
  onlineDiscount,
  call,
  taxNumber,
  commericalNum
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
    image: medinah1,
  },
  {
    id: "img-5",
    image: taif1,
  },
  {
    id: "img-6",
    image: jeddah1,
  },
  {
    id: "img-7",
    image: medinah,
  },
  {
    id: "img-8",
    image: jeddah2,
  },
  {
    id: "img-9",
    image: mecca1,
  },
  // {
  //   id: "img-10",
  //   image: hero2,
  // },
  // {
  //   id: "img-11",
  //   image: hero3,
  // },
  // {
  //   id: "img-12",
  //   image: rayhan,
  // },
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
        name: "staria",
        model: "model-1",
        description: "معلومات إضافية عن السيارة ستاريا",
        pricePerHour: '$100',
        rating: 5,
        passengers: '4',
        GPS: false,
        automatic: true,
        mainImg: staria,
        imgs: [ staria, BMW, fordTurus]
    },
    {
        id: 'car-2',
        name: "BMW",
        model: "model-2",
        description: "معلومات إضافية عن السيارة BMW",
        pricePerHour: '$100',
        rating: 4,
        passengers: '6',
        GPS: true,
        automatic: true,
        mainImg: BMW,
        imgs: [ staria, BMW, fordTurus]
    },
    {
        id: 'car-3',
        name: "fordTurus",
        model: "model-3",
        description: "معلومات إضافية عن السيارة فورد",
        pricePerHour: '$100',
        rating: 5,
        passengers: '4',
        GPS: false,
        automatic: true,
        mainImg: fordTurus,
        imgs: [ staria, BMW, fordTurus]
    },
    {
      id: 'car-4',
      name: "staria",
      model: "model-1",
      description: "معلومات إضافية عن السيارة ستاريا",
      pricePerHour: '$100',
      rating: 3,
      passengers: '4',
      GPS: false,
      automatic: true,
      mainImg: staria,
      imgs: [ staria, BMW, fordTurus]
  },
  {
      id: 'car-5',
      name: "BMW",
      model: "model-2",
      description: "معلومات إضافية عن السيارة BMW",
      pricePerHour: '$100',
      rating: 5,
      passengers: '6',
      GPS: true,
      automatic: true,
      mainImg: BMW,
      imgs: [ staria, BMW, fordTurus]
  },
  {
      id: 'car-6',
      name: "fordTurus",
      model: "model-3",
      description: "معلومات إضافية عن السيارة فورد",
      pricePerHour: '$100',
      rating: 4,
      passengers: '4',
      GPS: false,
      automatic: false,
      mainImg: fordTurus,
      imgs: [ staria, BMW, fordTurus]
  },
];

export const hotels = [
  {
      id: 'hotel-1',
      name: "Makkah Clock Royal Tower",
      location: "مكة",
      description: "معلومات إضافية عن الفندق ساعة مكة",
      pricePerHour: '$100',
      rating: 5,
      wifi: true,
      conditioning : true,
      breakfast: true,
      meal: true,
      mainImg: clock,
      imgs: [ clock, lobik, rayhan]
  },
  {
      id: 'hotel-2',
      name: "Luvyka Hotel Madinah",
      location: "المدينة",
      description: "معلومات إضافية عن الفندق المدينة",
      pricePerHour: '$100',
      rating: 4,
      wifi: true,
      conditioning : true,
      breakfast: true,
      meal: false,
      mainImg: lobik,
      imgs: [ clock, lobik, rayhan]
  },
  {
      id: 'hotel-3',
      name: "Al Marwa Rayhaan by Rotana",
      location: "مكة",
      description: "معلومات إضافية عن الفندق المروة ",
      pricePerHour: '$100',
      rating: 4,
      img: rayhan,
      wifi: true,
      conditioning : true,
      breakfast: false,
      meal: false,
      mainImg: rayhan,
      imgs: [ clock, lobik, rayhan]
  },
  {
    id: 'hotel-4',
    name: "Anwar Al Madinah Mövenpick Hotel",
    location: "المدينة",
    description: "معلومات إضافية عن الفندق أنوار المدينة",
    pricePerHour: '$100',
    rating: 3,
    wifi: true,
    conditioning : true,
    breakfast: true,
    meal: true,
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
    icon: instagram,
    // link: "https://www.instagram.com/",
    link: "https://www.instagram.com/masartoursim/?hl=ar"
  },
  {
    id: "social-media-2",
    icon: whatsapp,
    link: "https://wa.me/+966566633161",
  },
  {
    id: "social-media-3",
    icon: snap,
    // link: "https://www.twitter.com/",
    link: "https://www.snapchat.com/add/masar-mix"
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

export const quickBookHandler = () => {
  const phoneNumber = "+966566633161"; // Replace with your number
  const message = "مرحباً. كيف يمكنني مساعدتك";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}