// Built-in fallback review templates for Vimal Changal Jewellers, Jaunpur
// Used when API is unavailable, rate-limited, or loading fails.

export type ReviewLang = 'hinglish' | 'hindi' | 'english';

export const ALLOWED_TAGS = [
  'Design',
  'Bridal / Shaadi set',
  'Purity & Hallmark',
  'Staff',
  'Price',
  'Silver / Diamond',
] as const;

export type ReviewTag = (typeof ALLOWED_TAGS)[number];

interface TemplateCategory {
  general: string[];
  design: string[];
  bridal: string[];
  purity: string[];
  staff: string[];
  price: string[];
  silverDiamond: string[];
}

export const FALLBACK_REVIEWS: Record<ReviewLang, TemplateCategory> = {
  hinglish: {
    general: [
      "Jaunpur me shopping ka sabse achha anubhav raha. Vimal Changal Jewellers ka collection sach me lajawab hai aur sabhi log kaafi helpful hain. Aage bhi yahi aayenge ✨",
      "Pehli baar yahan aaye the family ke sath. Ambience kaafi peaceful tha aur shopping ka experience smooth raha. Jaunpur ke trusted jeweller hain.",
      "Bahut hi badiya showroom hai. Ek hi jagah pe sari varieties dekhne ko mil gayi. Customer satisfaction ka pura dhyan rakhte hain.",
      "Humare ghar ki saari kharidari hamesha se yahi se hoti hai. Vishwas aur shuddhata dono ka perfect combination hai Vimal Changal Jewellers me.",
    ],
    design: [
      "Traditional aur modern designs ka collection kamaal ka hai. Humne jo jewellery chuni uski finishing bahut barik aur sundar hai. Jaunpur me aisi variety rare hai.",
      "Designs ek se badhkar ek hain! Latest fashion ke hisab se lightweight aur heavy dono options aasani se mil gaye. Sabhi ko pasand aaya 👌",
      "Unique aur classy design patterns the yahan. Customization aur finishing bhi exact jaisa socha tha waisa hi mila. Truly impressed with their design variety.",
    ],
    bridal: [
      "Shaadi ke liye bridal set lene aaye the. Dulhan ke har function ke hisaab se perfect jewellery set mil gaya. Family ke sabhi log behad khush hain 🌸",
      "Bridal shopping ke liye best showroom hai Jaunpur me. Haar aur matching accessories ka matching set ekdum shahi look deta hai. Superb experience!",
      "Wedding shopping kaafi stress-free rahi yahan. Bridal collection dekhkar dil khush ho gaya, pure family ne appreciate kiya.",
    ],
    purity: [
      "Hallmark certified jewellery lene ka sabse bharosemand sthan hai. Har piece par proper BIS hallmark aur billing ki clarity dekhkar pura vishwas hua.",
      "Purity aur transparency ke mamle me Vimal Changal Jewellers 100% genuine hain. HUID code aur hallmark sab clearly explain kiya gaya.",
      "Gold ki shuddhata ko lekar bilkul tension free rahe. Jaunpur me honest jeweller dhundhna muskil tha par yahan aake tasalli mil gayi 👍",
    ],
    staff: [
      "Yahan ke staff ka vyavahar sach me bahut cooperative aur polite tha. Hume har jewellery piece bina kisi jaldbazi ke aaram se dikhaya. Shandar service!",
      "Staff members bahut hi patient aur humble hain. Unhone hamare budget aur choice ko samajhkar best options suggest kiye. Bahut accha laga.",
      "Great hospitality! Staff ne poore time bahut achhe se guide kiya. Itna warm customer service Jaunpur me dekh kar dil khush ho gaya ✨",
    ],
    price: [
      "Transparent pricing aur reasonable making charges the. Kahi koi hidden cost nahi, billing process bhi ekdum clear tha. Value for money experience!",
      "Gold rates aur making charges bilkul sahi aur transparent hain. Market compare karke dekha to yahan deal sabse fair lagi. Bahut santusht hain.",
      "Jaunpur me budget-friendly aur genuine price policy chahiye to yahan zaroor aayein. Bilkul honest pricing aur no extra hidden charges 👌",
    ],
    silverDiamond: [
      "Silver aur diamond collection ka cut aur sparkle lajawab hai. Daily wear diamond ring li, certificate ke sath authentic piece mila. Highly satisfied!",
      "Silver utensils aur gift items ki bahut achhi range thi. Purity aur polish dono top class hain. Family gifting ke liye best store.",
      "Diamond jewellery ki shine aur craftsmanship lajawab hai. Jaunpur me authentic diamond lene ke liye best place laga.",
    ],
  },
  hindi: {
    general: [
      "जौनपुर में विमल छांगल ज्वेलर्स से खरीदारी का अनुभव बहुत ही शानदार रहा। आभूषणों की गुणवत्ता और शोरूम का माहौल मन को छू लेने वाला है ✨",
      "परिवार के साथ खरीदारी करने आए थे। सभी को यहाँ का संग्रह बेहद पसंद आया। जौनपुर का सबसे भरोसेमंद और पुराना प्रतिष्ठान है।",
      "बहुत ही सुंदर और भव्य शोरूम है। यहाँ आकर खरीदारी करने में बहुत सहूलियत हुई। निश्चित रूप से हम दोबारा यहीं आएंगे।",
      "पीढ़ियों का विश्वास यहाँ साफ़ झलकता है। शुद्धता और सेवा दोनों में नंबर एक हैं। बहुत संतोषजनक खरीदारी रही।",
    ],
    design: [
      "परंपरागत और आधुनिक दोनों तरह के डिज़ाइनों का बहुत खूबसूरत संगम है। हर गहने की फिनिशिंग और नक्काशी बहुत ही बारीक और आकर्षक है 👌",
      "लेटेस्ट और ट्रेंडी गहनों का इतना बढ़िया कलेक्शन जौनपुर में मिलना आसान नहीं है। हमें अपनी पसंद की ज्वेलरी तुरंत मिल गई।",
      "अनोखे और खूबसूरत डिज़ाइन्स की भरमार है। हल्के और भारी दोनों तरह के गहनों में बेहतरीन वैरायटी उपलब्ध है। बहुत प्रभावित हुए।",
    ],
    bridal: [
      "शादी के लिए ब्राइडल सेट की खरीदारी की। दुल्हन के लिए एकदम शाही और मनमोहक आभूषण मिले। पूरे परिवार को बहुत पसंद आया 🌸",
      "विवाह उत्सव की खरीदारी के लिए जौनपुर का सर्वश्रेष्ठ शोरूम है। हार, कंगन और मांगटीका का मेल एकदम सटीक रहा। बहुत धन्यवाद!",
      "शादी के गहनों का चयन बहुत सुकून भरा रहा। हर गहना इतना खूबसूरत था कि चुनना मुश्किल हो गया। शानदार अनुभव रहा।",
    ],
    purity: [
      "हॉलमार्क और शुद्धता को लेकर यहाँ शत-प्रतिशत पारदर्शिता है। हर आभूषण पर बीआईएस हॉलमार्क की स्पष्ट मुहर और सही बिल मिला।",
      "सोने की शुद्धता के मामले में विमल छांगल ज्वेलर्स पर आँख बंद करके भरोसा किया जा सकता है। ईमानदारी ही इनकी पहचान है 👍",
      "गहनों की शुद्धता और सरकारी मानकों का पूरा पालन किया जाता है। जौनपुर में आभूषण खरीदने के लिए सबसे भरोसेमंद स्थान।",
    ],
    staff: [
      "यहाँ के कर्मचारियों का व्यवहार अत्यंत विनम्र और सहयोगी है। उन्होंने बड़े धैर्य के साथ हमारे बजट में बेहतरीन आभूषण दिखाए ✨",
      "स्टाफ का सेवा भाव और समझाने का तरीका बहुत अच्छा लगा। बिना किसी दबाव के उन्होंने हमें सही निर्णय लेने में मदद की।",
      "अतिथियों जैसा सत्कार और बेहतरीन मार्गदर्शन। पूरे समय कर्मचारियों ने मुस्कुराते हुए सेवा दी। बहुत आदरणीय अनुभव रहा।",
    ],
    price: [
      "मेकिंग चार्ज और सोने की दरें बिल्कुल पारदर्शी और उचित हैं। कोई छुपा हुआ शुल्क नहीं लिया गया। बिलिंग प्रक्रिया भी बहुत सरल थी 👌",
      "बाज़ार की तुलना में यहाँ की कीमतें बेहद उचित और ईमानदार लगीं। शुद्धता के साथ वाजिब दाम मिलना बहुत बड़ी बात है।",
      "उचित मूल्य और स्पष्ट हिसाब-किताब के साथ खरीदारी हुई। जौनपुर में हर वर्ग के बजट का ध्यान रखने वाला शोरूम।",
    ],
    silverDiamond: [
      "हीरे और चांदी के गहनों की चमक और कारीगरी लाजवाब है। हॉलमार्क चांदी और प्रमाणित हीरे के लिए यह उत्तम स्थान है।",
      "चांदी के बर्तनों और पूजा सामग्री का बहुत बड़ा संग्रह उपलब्ध है। फिनिशिंग और शुद्धता दोनों अव्वल दर्जे की हैं।",
      "डायमंड रिंग की कटिंग और डिज़ाइन बहुत खूबसूरत निकली। प्रामाणिकता के प्रमाण पत्र के साथ दिया गया। बहुत संतुष्ट हैं ✨",
    ],
  },
  english: {
    general: [
      "Had an outstanding shopping experience at Vimal Changal Jewellers in Jaunpur. The collection is breathtaking and the ambiance makes shopping truly delightful ✨",
      "One of the most trusted and prestigious jewellery stores in Jaunpur. Authentic quality and genuine care for customer satisfaction.",
      "Visiting here with family was a smooth and pleasant experience. Wide range of choices and prompt service. Highly recommended!",
      "Great experience from start to finish. Authentic craftsmanship and timeless pieces that won our trust completely.",
    ],
    design: [
      "The jewellery designs are exceptionally detailed, balancing contemporary trends with traditional artistry. Found exactly what I had pictured 👌",
      "Magnificent collection of unique designs! The craftsmanship on each piece is flawless and reflects top-notch finishing.",
      "From lightweight daily wear to exquisite statement pieces, their design portfolio in Jaunpur is truly unbeatable.",
    ],
    bridal: [
      "Purchased complete bridal jewellery sets for a wedding. The designs made the bride look regal and elegant. The entire family is thrilled 🌸",
      "Best destination in Jaunpur for wedding shopping. Perfectly coordinated necklace, earrings, and bangles with exquisite detailing.",
      "Our wedding jewellery shopping was effortless here. Stunning bridal collection and very thoughtful guidance from the team.",
    ],
    purity: [
      "Complete peace of mind regarding purity with 100% BIS hallmarking and transparent testing. Utmost honesty in business 👍",
      "Vimal Changal Jewellers maintains high standards of gold purity and hallmarking. Every piece came with proper verification and authentic billing.",
      "Honest standards and certified hallmark jewellery make this the most trusted showroom in Jaunpur. Highly dependable.",
    ],
    staff: [
      "The staff members are courteous, patient, and knowledgeable. They spent ample time showing varied options matching our preferences ✨",
      "Warm hospitality and polite customer service. The staff guided us through different collections with genuine sincerity.",
      "Remarkable customer care! Felt welcomed and well-advised throughout our visit. Commendable staff dedication.",
    ],
    price: [
      "Fair making charges, accurate gold weighing, and crystal clear billing. No hidden charges whatsoever. Great value for money 👌",
      "Transparent pricing policy and competitive rates for certified gold and silver. Very satisfied with the fair deal provided.",
      "Transparent calculations and honest pricing. You truly get what you pay for in terms of purity and quality.",
    ],
    silverDiamond: [
      "Stunning diamond jewellery with excellent cut, clarity, and certified authenticity. The silver collection is equally impressive ✨",
      "Purchased silver articles and a certified diamond ring. Pristine finish and authentic certification. Truly delighted!",
      "Wonderful variety of silver gift items and sparkling diamond pieces. Jaunpur's finest showroom for certified gems.",
    ],
  },
};

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function getFallbackReviews(
  lang: ReviewLang = 'hinglish',
  tags: string[] = [],
  count: number = 3
): string[] {
  const category = FALLBACK_REVIEWS[lang] || FALLBACK_REVIEWS.hinglish;
  const pool: string[] = [];

  const lowerTags = tags.map((t) => t.toLowerCase());

  if (lowerTags.some((t) => t.includes('design'))) {
    pool.push(...category.design);
  }
  if (lowerTags.some((t) => t.includes('bridal') || t.includes('shaadi'))) {
    pool.push(...category.bridal);
  }
  if (lowerTags.some((t) => t.includes('purity') || t.includes('hallmark'))) {
    pool.push(...category.purity);
  }
  if (lowerTags.some((t) => t.includes('staff'))) {
    pool.push(...category.staff);
  }
  if (lowerTags.some((t) => t.includes('price'))) {
    pool.push(...category.price);
  }
  if (lowerTags.some((t) => t.includes('silver') || t.includes('diamond'))) {
    pool.push(...category.silverDiamond);
  }

  // Always supplement with general reviews
  pool.push(...category.general);

  // If pool has fewer than requested, add all remaining categories
  if (pool.length < count) {
    pool.push(
      ...category.design,
      ...category.bridal,
      ...category.purity,
      ...category.staff,
      ...category.price,
      ...category.silverDiamond
    );
  }

  const shuffled = shuffle(pool);
  const selected: string[] = [];

  for (const text of shuffled) {
    if (!selected.includes(text)) {
      selected.push(text);
    }
    if (selected.length >= count) break;
  }

  return selected;
}
