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
  commericalNum,
  whatsappIcon,
  instagramIcon,
  snapIcon,
  callIcon,
  mailIcon
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
