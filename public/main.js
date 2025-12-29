// 100 gram üzerinden besin listesi
// P: Protein, K: Karbonhidrat, Y: Yağ
const foods = [
  // 🥩 Et & Tavuk & Balık
  {
    name: "Tavuk göğsü (pişmiş)",
    category: "Et & Tavuk & Balık",
    kcal: 165,
    protein: 31,
    carb: 0,
    fat: 3.6,
  },
  {
    name: "Tavuk but (pişmiş)",
    category: "Et & Tavuk & Balık",
    kcal: 209,
    protein: 26,
    carb: 0,
    fat: 10.9,
  },
  {
    name: "Hindi göğsü",
    category: "Et & Tavuk & Balık",
    kcal: 135,
    protein: 29,
    carb: 0,
    fat: 1,
  },
  {
    name: "Dana kıyma (%10 yağ)",
    category: "Et & Tavuk & Balık",
    kcal: 217,
    protein: 26,
    carb: 0,
    fat: 11,
  },
  {
    name: "Dana biftek",
    category: "Et & Tavuk & Balık",
    kcal: 242,
    protein: 27,
    carb: 0,
    fat: 14,
  },
  {
    name: "Kuzu eti",
    category: "Et & Tavuk & Balık",
    kcal: 294,
    protein: 25,
    carb: 0,
    fat: 21,
  },
  {
    name: "Somon",
    category: "Et & Tavuk & Balık",
    kcal: 208,
    protein: 20,
    carb: 0,
    fat: 13,
  },
  {
    name: "Levrek",
    category: "Et & Tavuk & Balık",
    kcal: 124,
    protein: 24,
    carb: 0,
    fat: 2.6,
  },
  {
    name: "Ton balığı (su içinde)",
    category: "Et & Tavuk & Balık",
    kcal: 132,
    protein: 29,
    carb: 0,
    fat: 1,
  },
  {
    name: "Hamsi",
    category: "Et & Tavuk & Balık",
    kcal: 210,
    protein: 20,
    carb: 0,
    fat: 13,
  },
  {
    name: "Yumurta (tam, haşlanmış)",
    category: "Et & Tavuk & Balık",
    kcal: 155,
    protein: 13,
    carb: 1.1,
    fat: 11,
  },

  // 🧀 Süt – Yoğurt – Peynir
  {
    name: "Süt (tam yağlı)",
    category: "Süt & Süt Ürünleri",
    kcal: 61,
    protein: 3.2,
    carb: 5,
    fat: 3.3,
  },
  {
    name: "Yoğurt (sade)",
    category: "Süt & Süt Ürünleri",
    kcal: 59,
    protein: 10,
    carb: 3.6,
    fat: 0.4,
  },
  {
    name: "Ayran",
    category: "Süt & Süt Ürünleri",
    kcal: 37,
    protein: 3.3,
    carb: 4.7,
    fat: 0.8,
  },
  {
    name: "Lor peyniri",
    category: "Süt & Süt Ürünleri",
    kcal: 89,
    protein: 17,
    carb: 3,
    fat: 1,
  },
  {
    name: "Beyaz peynir",
    category: "Süt & Süt Ürünleri",
    kcal: 265,
    protein: 14,
    carb: 3.2,
    fat: 21,
  },
  {
    name: "Kaşar peyniri",
    category: "Süt & Süt Ürünleri",
    kcal: 404,
    protein: 25,
    carb: 2,
    fat: 33,
  },

  // 🌾 Tahıllar & Karbonhidrat Kaynakları
  {
    name: "Pirinç (pişmiş)",
    category: "Tahıllar",
    kcal: 130,
    protein: 2.7,
    carb: 28,
    fat: 0.3,
  },
  {
    name: "Bulgur (pişmiş)",
    category: "Tahıllar",
    kcal: 83,
    protein: 3.1,
    carb: 18.6,
    fat: 0.2,
  },
  {
    name: "Makarna (pişmiş)",
    category: "Tahıllar",
    kcal: 131,
    protein: 5,
    carb: 25,
    fat: 1.1,
  },
  {
    name: "Ekmek (beyaz)",
    category: "Tahıllar",
    kcal: 265,
    protein: 9,
    carb: 49,
    fat: 3.2,
  },
  {
    name: "Ekmek (tam buğday)",
    category: "Tahıllar",
    kcal: 247,
    protein: 13,
    carb: 41,
    fat: 4.2,
  },
  {
    name: "Yulaf",
    category: "Tahıllar",
    kcal: 389,
    protein: 17,
    carb: 66,
    fat: 6.9,
  },
  {
    name: "Patates (haşlanmış)",
    category: "Tahıllar",
    kcal: 87,
    protein: 1.9,
    carb: 20,
    fat: 0.1,
  },
  {
    name: "Tatlı patates",
    category: "Tahıllar",
    kcal: 86,
    protein: 1.6,
    carb: 20,
    fat: 0,
  },
  {
    name: "Mısır (haşlanmış)",
    category: "Tahıllar",
    kcal: 96,
    protein: 3.4,
    carb: 21,
    fat: 1.5,
  },

  // 🥜 Kuruyemiş & Yağlı Tohumlar
  {
    name: "Badem",
    category: "Kuruyemiş",
    kcal: 579,
    protein: 21,
    carb: 22,
    fat: 50,
  },
  {
    name: "Fındık",
    category: "Kuruyemiş",
    kcal: 628,
    protein: 15,
    carb: 17,
    fat: 61,
  },
  {
    name: "Ceviz",
    category: "Kuruyemiş",
    kcal: 654,
    protein: 15,
    carb: 14,
    fat: 65,
  },
  {
    name: "Kabak çekirdeği",
    category: "Kuruyemiş",
    kcal: 559,
    protein: 30,
    carb: 11,
    fat: 49,
  },
  {
    name: "Ayçiçeği çekirdeği",
    category: "Kuruyemiş",
    kcal: 584,
    protein: 21,
    carb: 20,
    fat: 51,
  },
  {
    name: "Chia tohumu",
    category: "Kuruyemiş",
    kcal: 486,
    protein: 17,
    carb: 42,
    fat: 31,
  },

  // 🫘 Bakliyatlar
  {
    name: "Kuru fasulye (haşlanmış)",
    category: "Bakliyat",
    kcal: 127,
    protein: 8.7,
    carb: 22,
    fat: 0.5,
  },
  {
    name: "Nohut (haşlanmış)",
    category: "Bakliyat",
    kcal: 164,
    protein: 8.9,
    carb: 27,
    fat: 2.6,
  },
  {
    name: "Mercimek (haşlanmış)",
    category: "Bakliyat",
    kcal: 116,
    protein: 9,
    carb: 20,
    fat: 0.4,
  },
  {
    name: "Yeşil mercimek (kuru)",
    category: "Bakliyat",
    kcal: 352,
    protein: 25,
    carb: 60,
    fat: 1,
  },

  // 🥦 Sebzeler
  {
    name: "Brokoli (çiğ)",
    category: "Sebze",
    kcal: 34,
    protein: 2.8,
    carb: 7,
    fat: 0.4,
  },
  {
    name: "Ispanak (çiğ)",
    category: "Sebze",
    kcal: 23,
    protein: 3,
    carb: 4,
    fat: 0.4,
  },
  {
    name: "Havuç (çiğ)",
    category: "Sebze",
    kcal: 41,
    protein: 0.9,
    carb: 10,
    fat: 0.2,
  },
  {
    name: "Domates",
    category: "Sebze",
    kcal: 18,
    protein: 0.9,
    carb: 3.9,
    fat: 0.2,
  },
  {
    name: "Salatalık",
    category: "Sebze",
    kcal: 15,
    protein: 0.7,
    carb: 3.6,
    fat: 0.1,
  },
  {
    name: "Kabak",
    category: "Sebze",
    kcal: 17,
    protein: 1.2,
    carb: 3.1,
    fat: 0.3,
  },

  // 🍎 Meyveler
  {
    name: "Elma",
    category: "Meyve",
    kcal: 52,
    protein: 0.3,
    carb: 14,
    fat: 0.2,
  },
  {
    name: "Muz",
    category: "Meyve",
    kcal: 89,
    protein: 1.1,
    carb: 23,
    fat: 0.3,
  },
  {
    name: "Portakal",
    category: "Meyve",
    kcal: 47,
    protein: 0.9,
    carb: 12,
    fat: 0.1,
  },
  {
    name: "Çilek",
    category: "Meyve",
    kcal: 32,
    protein: 0.7,
    carb: 7.7,
    fat: 0.3,
  },
  {
    name: "Üzüm",
    category: "Meyve",
    kcal: 69,
    protein: 0.7,
    carb: 18,
    fat: 0.2,
  },
  {
    name: "Avokado",
    category: "Meyve",
    kcal: 160,
    protein: 2,
    carb: 9,
    fat: 15,
  },

  // 🧈 Yağlar
  {
    name: "Zeytinyağı",
    category: "Yağ",
    kcal: 884,
    protein: 0,
    carb: 0,
    fat: 100,
  },
  {
    name: "Tereyağı",
    category: "Yağ",
    kcal: 717,
    protein: 0.9,
    carb: 0.1,
    fat: 81,
  },
  {
    name: "Ayçiçek yağı",
    category: "Yağ",
    kcal: 884,
    protein: 0,
    carb: 0,
    fat: 100,
  },
  {
    name: "Hindistan cevizi yağı",
    category: "Yağ",
    kcal: 892,
    protein: 0,
    carb: 0,
    fat: 100,
  },
];

// HAZIR DİYET PLANLARI (Diyet Listem'e kopyalanacak format)
const readyDietPlans = [
  // 1. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "3 yumurta (2 beyaz + 1 tam), 60 g yulaf, 1 muz",
    },
    {
      mealType: "Ara Öğün",
      text: "1 avuç badem, 1 elma",
    },
    {
      mealType: "Öğle",
      text: "200 g ızgara tavuk, 150 g pirinç pilavı, yoğurt",
    },
    {
      mealType: "Ara Öğün",
      text: "1 ölçek whey + su",
    },
    {
      mealType: "Akşam",
      text: "200 g somon, 200 g sebze (brokoli / kabak / ıspanak)",
    },
  ],
  // 2. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "2 tam yumurta + 2 yumurta beyazı, 2 dilim tam buğday ekmek, 1 portakal",
    },
    {
      mealType: "Ara Öğün",
      text: "150 g probiyotik yoğurt",
    },
    {
      mealType: "Öğle",
      text: "150 g kırmızı et, 150 g bulgur, mevsim salata",
    },
    {
      mealType: "Ara Öğün",
      text: "1 avuç ceviz",
    },
    {
      mealType: "Akşam",
      text: "200 g tavuk sote, 1 tabak sebze yemeği",
    },
  ],
  // 3. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "150 g yulaf + süt, 1 tatlı kaşığı bal, 1 muz",
    },
    {
      mealType: "Ara Öğün",
      text: "1 adet muz, 30 g fındık",
    },
    {
      mealType: "Öğle",
      text: "200 g ızgara hindi, 150 g makarna, 1 kase ayran",
    },
    {
      mealType: "Ara Öğün",
      text: "1 ölçek whey",
    },
    {
      mealType: "Akşam",
      text: "250 g levrek / çupra, 150 g haşlanmış patates, salata",
    },
  ],
  // 4. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "3 yumurta omlet, 1 dilim beyaz peynir, 1 domates, 1 salatalık",
    },
    {
      mealType: "Ara Öğün",
      text: "1 elma, 1 avuç badem",
    },
    {
      mealType: "Öğle",
      text: "200 g tavuk şiş, 120 g bulgur, yoğurt",
    },
    {
      mealType: "Ara Öğün",
      text: "150 g kefir",
    },
    {
      mealType: "Akşam",
      text: "200 g dana rosto, 200 g haşlanmış sebze",
    },
  ],
  // 5. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "120 g yulaf, 30 g fıstık ezmesi, 1 muz",
    },
    {
      mealType: "Ara Öğün",
      text: "2 adet mandalina",
    },
    {
      mealType: "Öğle",
      text: "200 g ızgara tavuk, 200 g makarna, salata",
    },
    {
      mealType: "Ara Öğün",
      text: "1 avuç kaju",
    },
    {
      mealType: "Akşam",
      text: "200 g kıyma ile sebze yemeği, 1 kase yoğurt",
    },
  ],
  // 6. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "3 yumurta haşlanmış, 2 dilim tam buğday ekmek, 1 adet avokado (yarım)",
    },
    {
      mealType: "Ara Öğün",
      text: "200 ml ayran",
    },
    {
      mealType: "Öğle",
      text: "200 g somon, 150 g pirinç, yeşil salata",
    },
    {
      mealType: "Ara Öğün",
      text: "30 g ceviz, 1 muz",
    },
    {
      mealType: "Akşam",
      text: "200 g tavuk göğüs, 1 tabak sebze sote",
    },
  ],
  // 7. Gün
  [
    {
      mealType: "Kahvaltı",
      text: "4 yumurta beyazı + 1 tam, 50 g yulaf, 1 kivi",
    },
    {
      mealType: "Ara Öğün",
      text: "1 ölçek whey, 1 adet muz",
    },
    {
      mealType: "Öğle",
      text: "200 g ızgara kırmızı et, 150 g bulgur, 1 kase ayran",
    },
    {
      mealType: "Ara Öğün",
      text: "1 avuç fındık",
    },
    {
      mealType: "Akşam",
      text: "200 g hindi, 1 tabak haşlanmış sebze",
    },
  ],
];

// DİYET GÜNÜNE GÖRE HEDEF ÖNERİLERİ (örnek değerler)
const dietDayTargets = [
  { kcal: 2800, protein: 180, carb: 300, fat: 80 }, // 1
  { kcal: 2700, protein: 175, carb: 280, fat: 75 }, // 2
  { kcal: 2900, protein: 185, carb: 310, fat: 80 }, // 3
  { kcal: 2750, protein: 180, carb: 280, fat: 75 }, // 4
  { kcal: 2850, protein: 185, carb: 320, fat: 80 }, // 5
  { kcal: 2900, protein: 190, carb: 310, fat: 80 }, // 6
  { kcal: 2600, protein: 170, carb: 260, fat: 70 }, // 7
];

// ANTRENMAN GÜNÜNE GÖRE HEDEF ÖNERİLERİ (örnek değerler)
const workoutDayTargets = [
  { kcal: 2900, protein: 190, carb: 310, fat: 80 }, // 1
  { kcal: 2850, protein: 185, carb: 300, fat: 78 }, // 2
  { kcal: 2950, protein: 190, carb: 320, fat: 80 }, // 3
  { kcal: 2800, protein: 185, carb: 290, fat: 78 }, // 4
  { kcal: 3000, protein: 195, carb: 330, fat: 82 }, // 5
  { kcal: 2700, protein: 180, carb: 260, fat: 75 }, // 6
  { kcal: 2400, protein: 160, carb: 220, fat: 65 }, // 7
];

// SEKME DOM ELEMANLARI
const tabButtons = document.querySelectorAll(".tab-button");
const pages = document.querySelectorAll(".page");

// Kalori takip DOM elemanları
const foodSelect = document.getElementById("foodSelect");
const gramsInput = document.getElementById("gramsInput");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButton");
const logBody = document.getElementById("logBody");
const mealTypeSelect = document.getElementById("mealTypeSelect");

// Toplamlar
const totalKcalEl = document.getElementById("totalKcal");
const totalProteinEl = document.getElementById("totalProtein");
const totalCarbEl = document.getElementById("totalCarb");
const totalFatEl = document.getElementById("totalFat");

// Hedef gösterim elemanları
const targetKcalEl = document.getElementById("targetKcal");
const targetProteinEl = document.getElementById("targetProtein");
const targetCarbEl = document.getElementById("targetCarb");
const targetFatEl = document.getElementById("targetFat");

const percentKcalEl = document.getElementById("percentKcal");
const percentProteinEl = document.getElementById("percentProtein");
const percentCarbEl = document.getElementById("percentCarb");
const percentFatEl = document.getElementById("percentFat");

const barKcal = document.getElementById("barKcal");
const barProtein = document.getElementById("barProtein");
const barCarb = document.getElementById("barCarb");
const barFat = document.getElementById("barFat");

// Hedef inputları
const targetKcalInput = document.getElementById("targetKcalInput");
const targetProteinInput = document.getElementById("targetProteinInput");
const targetCarbInput = document.getElementById("targetCarbInput");
const targetFatInput = document.getElementById("targetFatInput");
const saveTargetsButton = document.getElementById("saveTargetsButton");

// Diyet listesi DOM elemanları
const dietMealSelect = document.getElementById("dietMealSelect");
const dietTextInput = document.getElementById("dietTextInput");
const dietAddButton = document.getElementById("dietAddButton");
const dietTableBody = document.getElementById("dietTableBody");
const dietClearButton = document.getElementById("dietClearButton");

// Su takibi DOM
const waterTargetInput = document.getElementById("waterTargetInput");
const waterSaveTargetButton = document.getElementById("waterSaveTargetButton");
const waterAdd250 = document.getElementById("waterAdd250");
const waterAdd500 = document.getElementById("waterAdd500");
const waterCustomInput = document.getElementById("waterCustomInput");
const waterAddCustom = document.getElementById("waterAddCustom");
const waterResetButton = document.getElementById("waterResetButton");
const waterStatusText = document.getElementById("waterStatusText");
const waterCurrentEl = document.getElementById("waterCurrent");
const waterTargetTextEl = document.getElementById("waterTargetText");
const waterPercentEl = document.getElementById("waterPercent");
const waterBar = document.getElementById("waterBar");

// Profil DOM
const profileWeightInput = document.getElementById("profileWeight");
const profileHeightInput = document.getElementById("profileHeight");
const profileAgeInput = document.getElementById("profileAge");
const profileGenderSelect = document.getElementById("profileGender");
const profileActivitySelect = document.getElementById("profileActivity");
const profileSaveButton = document.getElementById("profileSaveButton");
const profileApplyTargetsButton = document.getElementById(
  "profileApplyTargetsButton"
);
const profileCalcKcalEl = document.getElementById("profileCalcKcal");
const profileCalcProteinEl = document.getElementById("profileCalcProtein");
const profileCalcCarbEl = document.getElementById("profileCalcCarb");
const profileCalcFatEl = document.getElementById("profileCalcFat");

// Günlük eklenen besinler listesi
let logItems = [];

// Hedefler
let targets = {
  kcal: 0,
  protein: 0,
  carb: 0,
  fat: 0,
};

// Diyet listesi
let dietItems = [];

// Su takibi
let water = {
  date: null,
  targetMl: 3000,
  currentMl: 0,
};

// Profil
let profile = {
  weightKg: null,
  heightCm: null,
  age: null,
  gender: "male",
  activity: "moderate",
};

// SEKME GEÇİŞLERİ
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.page;

    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    pages.forEach((p) => p.classList.remove("active"));
    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  });
});

// Açılışta select'i doldur
function populateFoodSelect() {
  if (!foodSelect) return;
  foods.forEach((food, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${food.name} (${food.category})`;
    foodSelect.appendChild(option);
  });
}

// LocalStorage'dan verileri yükle
function loadFromStorage() {
  const savedLog = localStorage.getItem("kaloriAppLogItems");
  const savedTargets = localStorage.getItem("kaloriAppTargets");
  const savedDiet = localStorage.getItem("kaloriAppDietPlan");

  if (savedLog) {
    try {
      logItems = JSON.parse(savedLog);
    } catch {
      logItems = [];
    }
  }

  if (savedTargets) {
    try {
      targets = JSON.parse(savedTargets);
    } catch {
      targets = { kcal: 0, protein: 0, carb: 0, fat: 0 };
    }
  }

  if (savedDiet) {
    try {
      dietItems = JSON.parse(savedDiet);
    } catch {
      dietItems = [];
    }
  }

  targetKcalInput.value = targets.kcal || "";
  targetProteinInput.value = targets.protein || "";
  targetCarbInput.value = targets.carb || "";
  targetFatInput.value = targets.fat || "";

  targetKcalEl.textContent = targets.kcal || 0;
  targetProteinEl.textContent = targets.protein || 0;
  targetCarbEl.textContent = targets.carb || 0;
  targetFatEl.textContent = targets.fat || 0;
}

// LocalStorage'a kaydet
function saveLogToStorage() {
  localStorage.setItem("kaloriAppLogItems", JSON.stringify(logItems));
}

function saveTargetsToStorage() {
  localStorage.setItem("kaloriAppTargets", JSON.stringify(targets));
}

function saveDietToStorage() {
  localStorage.setItem("kaloriAppDietPlan", JSON.stringify(dietItems));
}

// Listeyi tabloya yazdır + toplamları güncelle
function renderLog() {
  if (!logBody) return;
  logBody.innerHTML = "";

  let totalKcal = 0;
  let totalProtein = 0;
  let totalCarb = 0;
  let totalFat = 0;

  logItems.forEach((item) => {
    const tr = document.createElement("tr");

    const kcal = item.kcal.toFixed(0);
    const protein = item.protein.toFixed(1);
    const carb = item.carb.toFixed(1);
    const fat = item.fat.toFixed(1);

    tr.innerHTML = `
      <td>${item.mealType}</td>
      <td>${item.name}</td>
      <td>${item.grams}</td>
      <td>${kcal}</td>
      <td>${protein}</td>
      <td>${carb}</td>
      <td>${fat}</td>
    `;

    logBody.appendChild(tr);

    totalKcal += item.kcal;
    totalProtein += item.protein;
    totalCarb += item.carb;
    totalFat += item.fat;
  });

  totalKcalEl.textContent = totalKcal.toFixed(0);
  totalProteinEl.textContent = totalProtein.toFixed(1);
  totalCarbEl.textContent = totalCarb.toFixed(1);
  totalFatEl.textContent = totalFat.toFixed(1);

  updateProgressBars(totalKcal, totalProtein, totalCarb, totalFat);
  saveLogToStorage();
}

// Hedef ilerlemesini güncelle
function updateProgressBars(totalKcal, totalProtein, totalCarb, totalFat) {
  const pctKcal =
    targets.kcal > 0 ? Math.min((totalKcal / targets.kcal) * 100, 200) : 0;
  const pctProtein =
    targets.protein > 0
      ? Math.min((totalProtein / targets.protein) * 100, 200)
      : 0;
  const pctCarb =
    targets.carb > 0 ? Math.min((totalCarb / targets.carb) * 100, 200) : 0;
  const pctFat =
    targets.fat > 0 ? Math.min((totalFat / targets.fat) * 100, 200) : 0;

  percentKcalEl.textContent = `${pctKcal.toFixed(0)}%`;
  percentProteinEl.textContent = `${pctProtein.toFixed(0)}%`;
  percentCarbEl.textContent = `${pctCarb.toFixed(0)}%`;
  percentFatEl.textContent = `${pctFat.toFixed(0)}%`;

  barKcal.style.width = `${pctKcal}%`;
  barProtein.style.width = `${pctProtein}%`;
  barCarb.style.width = `${pctCarb}%`;
  barFat.style.width = `${pctFat}%`;
}

// Hedefleri uygulayan ortak fonksiyon
function applyTargets(newTargets) {
  if (!newTargets) return;
  targets = {
    kcal: newTargets.kcal,
    protein: newTargets.protein,
    carb: newTargets.carb,
    fat: newTargets.fat,
  };

  targetKcalInput.value = targets.kcal;
  targetProteinInput.value = targets.protein;
  targetCarbInput.value = targets.carb;
  targetFatInput.value = targets.fat;

  targetKcalEl.textContent = targets.kcal;
  targetProteinEl.textContent = targets.protein;
  targetCarbEl.textContent = targets.carb;
  targetFatEl.textContent = targets.fat;

  saveTargetsToStorage();
  renderLog();
}

// ====== KALORİ TAKİP BUTONLARI ======
if (addButton) {
  addButton.addEventListener("click", () => {
    const selectedIndex = parseInt(foodSelect.value, 10);
    const grams = parseFloat(gramsInput.value);
    const mealType = mealTypeSelect.value;

    if (isNaN(selectedIndex) || isNaN(grams) || grams <= 0) {
      alert("Lütfen bir besin seç ve geçerli bir gram değeri gir.");
      return;
    }

    const food = foods[selectedIndex];
    const factor = grams / 100;

    const item = {
      name: food.name,
      grams,
      mealType,
      kcal: food.kcal * factor,
      protein: food.protein * factor,
      carb: food.carb * factor,
      fat: food.fat * factor,
    };

    logItems.push(item);
    renderLog();
  });
}

if (clearButton) {
  clearButton.addEventListener("click", () => {
    if (logItems.length === 0) return;
    if (confirm("Tüm listeyi temizlemek istediğine emin misin?")) {
      logItems = [];
      renderLog();
    }
  });
}

if (saveTargetsButton) {
  saveTargetsButton.addEventListener("click", () => {
    const kcal = parseFloat(targetKcalInput.value) || 0;
    const protein = parseFloat(targetProteinInput.value) || 0;
    const carb = parseFloat(targetCarbInput.value) || 0;
    const fat = parseFloat(targetFatInput.value) || 0;

    targets = { kcal, protein, carb, fat };
    targetKcalEl.textContent = kcal;
    targetProteinEl.textContent = protein;
    targetCarbEl.textContent = carb;
    targetFatEl.textContent = fat;

    saveTargetsToStorage();
    renderLog();
    alert("Hedefler kaydedildi.");
  });
}

// ====== DİYET LİSTESİ ======
function renderDiet() {
  if (!dietTableBody) return;
  dietTableBody.innerHTML = "";

  dietItems.forEach((item) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.mealType}</td>
      <td>${item.text}</td>
    `;
    dietTableBody.appendChild(tr);
  });

  saveDietToStorage();
}

if (dietAddButton) {
  dietAddButton.addEventListener("click", () => {
    const mealType = dietMealSelect.value;
    const text = (dietTextInput.value || "").trim();

    if (!text) {
      alert("Lütfen diyet öğesinin içeriğini yaz.");
      return;
    }

    dietItems.push({ mealType, text });
    dietTextInput.value = "";
    renderDiet();
  });
}

if (dietClearButton) {
  dietClearButton.addEventListener("click", () => {
    if (dietItems.length === 0) return;
    if (confirm("Diyet listesini tamamen silmek istediğine emin misin?")) {
      dietItems = [];
      renderDiet();
    }
  });
}

// Hazır diyet -> Diyet Listem
function attachReadyDietButtons() {
  const buttons = document.querySelectorAll(".copy-ready-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = parseInt(btn.dataset.day, 10);
      const plans = readyDietPlans[day - 1];
      if (!plans) return;

      plans.forEach((p) => {
        dietItems.push({ mealType: p.mealType, text: p.text });
      });

      renderDiet();

      const dietTab = Array.from(tabButtons).find(
        (b) => b.dataset.page === "pageDiyet"
      );
      if (dietTab) {
        dietTab.click();
      }

      alert(`📅 ${day}. Gün planı "Diyet Listem" sekmesine kopyalandı.`);
    });
  });
}

// Hazır diyet gününe göre hedef öner
function attachDietTargetButtons() {
  const buttons = document.querySelectorAll(".diet-target-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = parseInt(btn.dataset.day, 10);
      const t = dietDayTargets[day - 1];
      if (!t) return;

      applyTargets(t);

      const kaloriTab = Array.from(tabButtons).find(
        (b) => b.dataset.page === "pageKalori"
      );
      if (kaloriTab) kaloriTab.click();

      alert(
        `🎯 ${day}. Gün diyetine göre kalori/protein hedefleri "Kalori Takip" sekmesine uygulandı.`
      );
    });
  });
}

// Antrenman gününe göre hedef öner
function attachWorkoutTargetButtons() {
  const buttons = document.querySelectorAll(".workout-target-btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const day = parseInt(btn.dataset.day, 10);
      const t = workoutDayTargets[day - 1];
      if (!t) return;

      applyTargets(t);

      const kaloriTab = Array.from(tabButtons).find(
        (b) => b.dataset.page === "pageKalori"
      );
      if (kaloriTab) kaloriTab.click();

      alert(
        `🏋️ ${day}. Gün antrenman yoğunluğuna göre hedefler "Kalori Takip" sekmesine uygulandı.`
      );
    });
  });
}

// ====== SU TAKİBİ ======
function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function loadWaterFromStorage() {
  const saved = localStorage.getItem("kaloriAppWater");
  if (saved) {
    try {
      water = JSON.parse(saved);
    } catch {
      water = { date: null, targetMl: 3000, currentMl: 0 };
    }
  }
  const today = todayStr();
  if (water.date !== today) {
    water.date = today;
    water.currentMl = 0;
  }
  updateWaterUI();
}

function saveWaterToStorage() {
  localStorage.setItem("kaloriAppWater", JSON.stringify(water));
}

function updateWaterUI() {
  if (!waterCurrentEl) return;

  waterTargetInput.value = water.targetMl || "";
  waterCurrentEl.textContent = water.currentMl || 0;
  waterTargetTextEl.textContent = water.targetMl || 0;

  const pct =
    water.targetMl > 0
      ? Math.min((water.currentMl / water.targetMl) * 100, 200)
      : 0;
  waterPercentEl.textContent = `${pct.toFixed(0)}%`;
  waterBar.style.width = `${pct}%`;

  if (!water.targetMl) {
    waterStatusText.textContent = "Önce günlük su hedefi belirle.";
  } else if (water.currentMl < water.targetMl) {
    const remain = water.targetMl - water.currentMl;
    waterStatusText.textContent = `Hedefe ulaşmak için yaklaşık ${remain} ml su kaldı.`;
  } else {
    waterStatusText.textContent = "Tebrikler, günlük su hedefini tamamladın! 💧";
  }
}

function addWater(amount) {
  if (!amount || amount <= 0) return;
  water.currentMl += amount;
  saveWaterToStorage();
  updateWaterUI();
}

if (waterSaveTargetButton) {
  waterSaveTargetButton.addEventListener("click", () => {
    const t = parseInt(waterTargetInput.value, 10);
    if (isNaN(t) || t <= 0) {
      alert("Geçerli bir su hedefi (ml) gir.");
      return;
    }
    water.targetMl = t;
    saveWaterToStorage();
    updateWaterUI();
    alert("Su hedefi kaydedildi.");
  });
}

if (waterAdd250) {
  waterAdd250.addEventListener("click", () => addWater(250));
}
if (waterAdd500) {
  waterAdd500.addEventListener("click", () => addWater(500));
}
if (waterAddCustom) {
  waterAddCustom.addEventListener("click", () => {
    const val = parseInt(waterCustomInput.value, 10);
    if (isNaN(val) || val <= 0) {
      alert("Geçerli bir miktar gir.");
      return;
    }
    addWater(val);
    waterCustomInput.value = "";
  });
}
if (waterResetButton) {
  waterResetButton.addEventListener("click", () => {
    if (confirm("Bugünkü su miktarını sıfırlamak istiyor musun?")) {
      water.currentMl = 0;
      water.date = todayStr();
      saveWaterToStorage();
      updateWaterUI();
    }
  });
}

// ====== PROFİL ======
function loadProfileFromStorage() {
  const saved = localStorage.getItem("kaloriAppProfile");
  if (saved) {
    try {
      profile = { ...profile, ...JSON.parse(saved) };
    } catch {
      profile = {
        weightKg: null,
        heightCm: null,
        age: null,
        gender: "male",
        activity: "moderate",
      };
    }
  }
  updateProfileUI();
}

function saveProfileToStorage() {
  localStorage.setItem("kaloriAppProfile", JSON.stringify(profile));
}

function calculateProfileTargets() {
  const w = Number(profile.weightKg) || 70;
  const h = Number(profile.heightCm) || 175;
  const a = Number(profile.age) || 30;
  const g = profile.gender || "male";
  const act = profile.activity || "moderate";

  let bmr;
  if (g === "female") {
    bmr = 10 * w + 6.25 * h - 5 * a - 161;
  } else {
    bmr = 10 * w + 6.25 * h - 5 * a + 5;
  }

  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    high: 1.725,
  };
  const factor = activityFactors[act] || 1.55;
  const kcal = bmr * factor;

  const protein = w * 2; // 2 g/kg
  const fat = w * 1; // 1 g/kg
  const proteinKcal = protein * 4;
  const fatKcal = fat * 9;
  const carbKcal = Math.max(kcal - proteinKcal - fatKcal, 0);
  const carb = carbKcal / 4;

  return { kcal, protein, carb, fat };
}

function updateProfileUI() {
  if (!profileWeightInput) return;

  profileWeightInput.value = profile.weightKg || "";
  profileHeightInput.value = profile.heightCm || "";
  profileAgeInput.value = profile.age || "";
  profileGenderSelect.value = profile.gender || "male";
  profileActivitySelect.value = profile.activity || "moderate";

  const res = calculateProfileTargets();
  profileCalcKcalEl.textContent = res.kcal.toFixed(0);
  profileCalcProteinEl.textContent = res.protein.toFixed(0);
  profileCalcCarbEl.textContent = res.carb.toFixed(0);
  profileCalcFatEl.textContent = res.fat.toFixed(0);
}

if (profileSaveButton) {
  profileSaveButton.addEventListener("click", () => {
    profile.weightKg = parseFloat(profileWeightInput.value) || null;
    profile.heightCm = parseFloat(profileHeightInput.value) || null;
    profile.age = parseFloat(profileAgeInput.value) || null;
    profile.gender = profileGenderSelect.value || "male";
    profile.activity = profileActivitySelect.value || "moderate";
    saveProfileToStorage();
    updateProfileUI();
    alert("Profil kaydedildi ve öneriler güncellendi.");
  });
}

if (profileApplyTargetsButton) {
  profileApplyTargetsButton.addEventListener("click", () => {
    const res = calculateProfileTargets();
    applyTargets({
      kcal: Math.round(res.kcal),
      protein: Math.round(res.protein),
      carb: Math.round(res.carb),
      fat: Math.round(res.fat),
    });
    const kaloriTab = Array.from(tabButtons).find(
      (b) => b.dataset.page === "pageKalori"
    );
    if (kaloriTab) kaloriTab.click();
    alert("Profil bazlı öneri 'Kalori Takip' hedeflerine uygulandı.");
  });
}

// ====== SAYFA YÜKLENİNCE ======
populateFoodSelect();
loadFromStorage();
renderLog();
renderDiet();
attachReadyDietButtons();
attachDietTargetButtons();
attachWorkoutTargetButtons();
loadWaterFromStorage();
loadProfileFromStorage();
