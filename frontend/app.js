const englishTranslations = {
  language_label: "Language",
  hero_badge: "Premium farm operations dashboard",
  hero_copy: "Upload crop images, review live weather, compare mandi prices, and scan schemes from one calm workspace.",
  hero_chip: "Field-ready intelligence",
  hero_heading: "Field intelligence for faster crop decisions.",
  hero_description: "This dashboard keeps disease detection, weather, mandi pricing, and government support in one clean operational view.",
  pill_disease: "Disease + advisory",
  pill_weather: "Live weather intelligence",
  pill_history: "Mongo-backed history",
  stat_mode_label: "Dashboard Mode",
  stat_mode_value: "Single-screen operations",
  stat_coverage_label: "Coverage",
  stat_coverage_value: "Disease, weather, mandi, schemes",
  stat_languages_label: "Languages",
  stat_languages_value: "English, Hindi, Marathi",
  nav_disease: "Disease Detection",
  nav_weather: "Weather",
  nav_mandi: "Mandi Prices",
  nav_schemes: "Government Schemes",
  disease_section_eyebrow: "Advisory Engine",
  disease_section_title: "Disease Detection",
  disease_section_copy: "Analyze a crop image and blend it with live weather and mandi context.",
  advisory_results_eyebrow: "Live Output",
  advisory_results_title: "Advisory Result",
  history_section_eyebrow: "Stored Reports",
  history_section_title: "Recent History",
  weather_section_eyebrow: "Climate View",
  weather_section_title: "Weather",
  weather_section_copy: "Track current conditions and short-term forecast for the selected farm location.",
  weather_now_eyebrow: "Current Conditions",
  weather_now_title: "Weather Snapshot",
  forecast_section_eyebrow: "Next Windows",
  forecast_section_title: "Forecast",
  mandi_section_eyebrow: "Market Intelligence",
  mandi_section_title: "Mandi Prices",
  mandi_section_copy: "Compare mandi prices using commodity and location filters.",
  mandi_table_eyebrow: "Latest Listings",
  mandi_table_title: "Market Table",
  schemes_section_eyebrow: "Support Programs",
  schemes_section_title: "Government Schemes",
  schemes_section_copy: "Browse relevant programs using crop and state filters.",
  upload_label: "Leaf image",
  latitude_label: "Latitude",
  longitude_label: "Longitude",
  commodity_label: "Commodity",
  state_label: "State",
  city_label: "City",
  district_label: "District",
  crop_label: "Crop",
  state_placeholder: "Optional state",
  district_placeholder: "Optional district",
  analyze_button: "Generate Advisory",
  analyze_button_loading: "Processing...",
  load_weather_button: "Refresh Weather",
  load_weather_button_loading: "Loading weather...",
  search_prices_button: "Load Prices",
  search_prices_button_loading: "Loading prices...",
  advisory_empty: "Run an advisory to see disease prediction, recommendation, weather summary, and mandi overview.",
  history_empty: "Saved advisory history will appear here after you run the first analysis.",
  weather_empty: "Weather cards will appear here after loading farm conditions.",
  forecast_empty: "Forecast cards will appear here after loading weather.",
  mandi_empty: "Market prices will appear here after you search.",
  schemes_empty: "No schemes match the current filters.",
  prediction_title: "Disease",
  confidence_title: "Confidence",
  recommendation_title: "Recommendation",
  weather_summary_title: "Weather Summary",
  mandi_summary_title: "Mandi Summary",
  errors_title: "Warnings",
  status_uncertain: "Uncertain",
  status_healthy: "Healthy",
  status_disease_detected: "Disease detected",
  status_unknown: "Unknown",
  temperature: "Temperature",
  humidity: "Humidity",
  wind: "Wind",
  condition: "Condition",
  market: "Market",
  min_price: "Min price",
  max_price: "Max price",
  modal_price: "Modal price",
  arrival_date: "Arrival date",
  last_saved: "Last saved",
  total_records: "Records shown",
  advisory_success: "Advisory updated and stored in history.",
  weather_success: "Weather refreshed.",
  mandi_success: "Mandi prices refreshed.",
  generic_error: "Something went wrong. Please try again.",
  image_required: "Please upload a crop image before generating an advisory.",
  location_required: "Please select a state and city first.",
  locations_error: "India location data could not be loaded.",
  no_mandi_data: "No mandi records returned for the current filters.",
  no_city_data: "No cities are available for the selected state.",
  no_forecast_data: "Forecast data is not available for this location.",
  language_en: "English",
  language_hi: "Hindi",
  language_mr: "Marathi",
  all_crops: "All crops",
  all_states: "All states",
  all_india: "All India",
  maharashtra: "Maharashtra",
  karnataka: "Karnataka",
  uttar_pradesh: "Uttar Pradesh",
  tomato: "Tomato",
  potato: "Potato",
  cotton: "Cotton",
  sugarcane: "Sugarcane"
};

const hindiTranslations = {
  ...englishTranslations,
  language_label: "भाषा",
  hero_badge: "प्रीमियम कृषि संचालन डैशबोर्ड",
  hero_copy: "फसल की तस्वीर अपलोड करें, लाइव मौसम देखें, मंडी भाव की तुलना करें और सरकारी योजनाएं एक ही शांत कार्यक्षेत्र में देखें।",
  hero_chip: "फील्ड-रेडी जानकारी",
  hero_heading: "तेज़ फसल निर्णयों के लिए स्मार्ट कृषि जानकारी।",
  hero_description: "यह डैशबोर्ड रोग पहचान, मौसम, मंडी मूल्य और सरकारी सहायता को एक साफ़ और उपयोगी दृश्य में रखता है।",
  pill_disease: "रोग + सलाह",
  pill_weather: "लाइव मौसम जानकारी",
  pill_history: "Mongo आधारित इतिहास",
  stat_mode_label: "डैशबोर्ड मोड",
  stat_mode_value: "एक स्क्रीन संचालन",
  stat_coverage_label: "कवरेज",
  stat_coverage_value: "रोग, मौसम, मंडी, योजनाएं",
  stat_languages_label: "भाषाएं",
  stat_languages_value: "अंग्रेजी, हिंदी, मराठी",
  nav_disease: "रोग पहचान",
  nav_weather: "मौसम",
  nav_mandi: "मंडी भाव",
  nav_schemes: "सरकारी योजनाएं",
  disease_section_eyebrow: "सलाह इंजन",
  disease_section_title: "रोग पहचान",
  disease_section_copy: "फसल की तस्वीर का विश्लेषण करें और उसे लाइव मौसम तथा मंडी संदर्भ से जोड़ें।",
  advisory_results_eyebrow: "लाइव आउटपुट",
  advisory_results_title: "सलाह परिणाम",
  history_section_eyebrow: "सहेजी गई रिपोर्ट",
  history_section_title: "हाल का इतिहास",
  weather_section_eyebrow: "जलवायु दृश्य",
  weather_section_title: "मौसम",
  weather_section_copy: "चयनित खेत स्थान के लिए वर्तमान स्थिति और अल्पकालिक पूर्वानुमान देखें।",
  weather_now_eyebrow: "वर्तमान स्थिति",
  weather_now_title: "मौसम स्नैपशॉट",
  forecast_section_eyebrow: "आगामी स्लॉट",
  forecast_section_title: "पूर्वानुमान",
  mandi_section_eyebrow: "बाजार जानकारी",
  mandi_section_title: "मंडी भाव",
  mandi_section_copy: "वस्तु और स्थान फ़िल्टर का उपयोग करके मंडी भाव की तुलना करें।",
  mandi_table_eyebrow: "नवीनतम सूची",
  mandi_table_title: "बाजार तालिका",
  schemes_section_eyebrow: "सहायता कार्यक्रम",
  schemes_section_title: "सरकारी योजनाएं",
  schemes_section_copy: "फसल और राज्य फ़िल्टर के आधार पर प्रासंगिक योजनाएं देखें।",
  upload_label: "पत्ती की छवि",
  latitude_label: "अक्षांश",
  longitude_label: "देशांतर",
  commodity_label: "वस्तु",
  state_label: "राज्य",
  city_label: "शहर",
  district_label: "जिला",
  crop_label: "फसल",
  state_placeholder: "वैकल्पिक राज्य",
  district_placeholder: "वैकल्पिक जिला",
  analyze_button: "सलाह बनाएं",
  analyze_button_loading: "प्रोसेस हो रहा है...",
  load_weather_button: "मौसम रीफ्रेश करें",
  load_weather_button_loading: "मौसम लोड हो रहा है...",
  search_prices_button: "भाव लोड करें",
  search_prices_button_loading: "भाव लोड हो रहे हैं...",
  advisory_empty: "रोग पहचान, सिफारिश, मौसम सार और मंडी जानकारी देखने के लिए सलाह चलाएं।",
  history_empty: "पहले विश्लेषण के बाद सहेजा गया इतिहास यहां दिखाई देगा।",
  weather_empty: "मौसम लोड होने के बाद कार्ड यहां दिखाई देंगे।",
  forecast_empty: "मौसम लोड होने के बाद पूर्वानुमान यहां दिखाई देगा।",
  mandi_empty: "खोज के बाद मंडी भाव यहां दिखाई देंगे।",
  schemes_empty: "वर्तमान फ़िल्टर के लिए कोई योजना नहीं मिली।",
  prediction_title: "रोग",
  confidence_title: "विश्वास स्तर",
  recommendation_title: "सिफारिश",
  weather_summary_title: "मौसम सार",
  mandi_summary_title: "मंडी सार",
  errors_title: "चेतावनी",
  status_uncertain: "अनिश्चित",
  status_healthy: "स्वस्थ",
  status_disease_detected: "रोग मिला",
  status_unknown: "अज्ञात",
  temperature: "तापमान",
  humidity: "नमी",
  wind: "हवा",
  condition: "स्थिति",
  market: "मंडी",
  min_price: "न्यूनतम भाव",
  max_price: "अधिकतम भाव",
  modal_price: "मोडल भाव",
  arrival_date: "आगमन तिथि",
  last_saved: "अंतिम बार सहेजा गया",
  total_records: "दिखाए गए रिकॉर्ड",
  advisory_success: "सलाह अपडेट होकर इतिहास में सहेज ली गई।",
  weather_success: "मौसम अपडेट हो गया।",
  mandi_success: "मंडी भाव अपडेट हो गए।",
  generic_error: "कुछ गलत हुआ। कृपया फिर से प्रयास करें।",
  image_required: "सलाह बनाने से पहले फसल की छवि अपलोड करें।",
  location_required: "कृपया पहले राज्य और शहर चुनें।",
  locations_error: "भारत के स्थानों का डेटा लोड नहीं हो सका।",
  no_mandi_data: "वर्तमान फ़िल्टर के लिए मंडी रिकॉर्ड नहीं मिले।",
  no_city_data: "चयनित राज्य के लिए शहर उपलब्ध नहीं हैं।",
  no_forecast_data: "इस स्थान के लिए पूर्वानुमान उपलब्ध नहीं है।",
  language_en: "अंग्रेजी",
  language_hi: "हिंदी",
  language_mr: "मराठी",
  all_crops: "सभी फसलें",
  all_states: "सभी राज्य",
  all_india: "संपूर्ण भारत",
  maharashtra: "महाराष्ट्र",
  karnataka: "कर्नाटक",
  uttar_pradesh: "उत्तर प्रदेश",
  tomato: "टमाटर",
  potato: "आलू",
  cotton: "कपास",
  sugarcane: "गन्ना"
};

const marathiTranslations = {
  ...englishTranslations,
  language_label: "भाषा",
  hero_badge: "प्रीमियम कृषी ऑपरेशन्स डॅशबोर्ड",
  hero_copy: "पिकाचा फोटो अपलोड करा, थेट हवामान पाहा, मंडी भावांची तुलना करा आणि सरकारी योजना एकाच स्वच्छ कार्यक्षेत्रात पाहा.",
  hero_chip: "शेतासाठी तयार माहिती",
  hero_heading: "वेगवान पीक निर्णयांसाठी स्मार्ट कृषी माहिती.",
  hero_description: "हा डॅशबोर्ड रोग शोध, हवामान, मंडी दर आणि सरकारी मदत एका स्वच्छ आणि उपयुक्त दृश्यात दाखवतो.",
  pill_disease: "रोग + सल्ला",
  pill_weather: "थेट हवामान माहिती",
  pill_history: "Mongo आधारित इतिहास",
  stat_mode_label: "डॅशबोर्ड मोड",
  stat_mode_value: "एकाच स्क्रीनवरील कामकाज",
  stat_coverage_label: "व्याप्ती",
  stat_coverage_value: "रोग, हवामान, मंडी, योजना",
  stat_languages_label: "भाषा",
  stat_languages_value: "इंग्रजी, हिंदी, मराठी",
  nav_disease: "रोग शोध",
  nav_weather: "हवामान",
  nav_mandi: "मंडी भाव",
  nav_schemes: "शासकीय योजना",
  disease_section_eyebrow: "सल्ला इंजिन",
  disease_section_title: "रोग शोध",
  disease_section_copy: "पिकाचा फोटो तपासा आणि त्याला थेट हवामान व मंडी संदर्भ जोडा.",
  advisory_results_eyebrow: "थेट निकाल",
  advisory_results_title: "सल्ला निकाल",
  history_section_eyebrow: "जतन केलेले अहवाल",
  history_section_title: "अलीकडील इतिहास",
  weather_section_eyebrow: "हवामान दृश्य",
  weather_section_title: "हवामान",
  weather_section_copy: "निवडलेल्या शेतस्थानासाठी सध्याची स्थिती आणि अल्पकालीन अंदाज पाहा.",
  weather_now_eyebrow: "सध्याची स्थिती",
  weather_now_title: "हवामान स्नॅपशॉट",
  forecast_section_eyebrow: "पुढील स्लॉट",
  forecast_section_title: "अंदाज",
  mandi_section_eyebrow: "बाजार माहिती",
  mandi_section_title: "मंडी भाव",
  mandi_section_copy: "पीक आणि स्थान फिल्टर वापरून मंडी भावांची तुलना करा.",
  mandi_table_eyebrow: "नवीन नोंदी",
  mandi_table_title: "बाजार तक्ता",
  schemes_section_eyebrow: "मदत योजना",
  schemes_section_title: "शासकीय योजना",
  schemes_section_copy: "पीक आणि राज्य फिल्टरनुसार योग्य योजना पाहा.",
  upload_label: "पानाची प्रतिमा",
  latitude_label: "अक्षांश",
  longitude_label: "रेखांश",
  commodity_label: "पीक / वस्तू",
  state_label: "राज्य",
  city_label: "शहर",
  district_label: "जिल्हा",
  crop_label: "पीक",
  state_placeholder: "पर्यायी राज्य",
  district_placeholder: "पर्यायी जिल्हा",
  analyze_button: "सल्ला तयार करा",
  analyze_button_loading: "प्रक्रिया सुरू आहे...",
  load_weather_button: "हवामान रीफ्रेश करा",
  load_weather_button_loading: "हवामान लोड होत आहे...",
  search_prices_button: "भाव लोड करा",
  search_prices_button_loading: "भाव लोड होत आहेत...",
  advisory_empty: "रोग, शिफारस, हवामान सारांश आणि मंडी माहिती पाहण्यासाठी सल्ला चालवा.",
  history_empty: "पहिल्या विश्लेषणानंतर जतन केलेला इतिहास येथे दिसेल.",
  weather_empty: "हवामान लोड झाल्यानंतर कार्ड येथे दिसतील.",
  forecast_empty: "हवामान लोड झाल्यानंतर अंदाज येथे दिसेल.",
  mandi_empty: "शोधल्यानंतर मंडी भाव येथे दिसतील.",
  schemes_empty: "सध्याच्या फिल्टरसाठी कोणतीही योजना मिळाली नाही.",
  prediction_title: "रोग",
  confidence_title: "विश्वास पातळी",
  recommendation_title: "शिफारस",
  weather_summary_title: "हवामान सारांश",
  mandi_summary_title: "मंडी सारांश",
  errors_title: "इशारे",
  status_uncertain: "अनिश्चित",
  status_healthy: "निरोगी",
  status_disease_detected: "रोग आढळला",
  status_unknown: "अज्ञात",
  temperature: "तापमान",
  humidity: "आर्द्रता",
  wind: "वारा",
  condition: "स्थिती",
  market: "मंडी",
  min_price: "किमान भाव",
  max_price: "कमाल भाव",
  modal_price: "मोडल भाव",
  arrival_date: "आगमन तारीख",
  last_saved: "शेवटचे जतन",
  total_records: "दाखवलेले रेकॉर्ड",
  advisory_success: "सल्ला अपडेट होऊन इतिहासात जतन झाला.",
  weather_success: "हवामान अपडेट झाले.",
  mandi_success: "मंडी भाव अपडेट झाले.",
  generic_error: "काहीतरी चुकले. कृपया पुन्हा प्रयत्न करा.",
  image_required: "सल्ला तयार करण्यापूर्वी पिकाची प्रतिमा अपलोड करा.",
  location_required: "कृपया आधी राज्य आणि शहर निवडा.",
  locations_error: "भारतातील स्थानांचा डेटा लोड होऊ शकला नाही.",
  no_mandi_data: "सध्याच्या फिल्टरसाठी मंडी नोंदी मिळाल्या नाहीत.",
  no_city_data: "निवडलेल्या राज्यासाठी शहर उपलब्ध नाहीत.",
  no_forecast_data: "या ठिकाणासाठी अंदाज उपलब्ध नाही.",
  language_en: "इंग्रजी",
  language_hi: "हिंदी",
  language_mr: "मराठी",
  all_crops: "सर्व पिके",
  all_states: "सर्व राज्ये",
  all_india: "संपूर्ण भारत",
  maharashtra: "महाराष्ट्र",
  karnataka: "कर्नाटक",
  uttar_pradesh: "उत्तर प्रदेश",
  tomato: "टोमॅटो",
  potato: "बटाटा",
  cotton: "कापूस",
  sugarcane: "ऊस"
};

const translations = {
  en: englishTranslations,
  hi: hindiTranslations,
  mr: marathiTranslations
};

const ALL_CROP_FILTER = "__all_crops__";
const ALL_STATE_FILTER = "__all_states__";
const state = {
  language: "en",
  advisory: null,
  history: [],
  weather: null,
  forecast: null,
  mandi: null,
  schemes: [],
  locations: {
    states: [],
    citiesByState: {},
    coverage: null
  }
};
const el = {};

document.addEventListener("DOMContentLoaded", async () => {
  [
    "feedbackBanner", "advisoryForm", "advisoryImage", "advisoryState", "advisoryCity",
    "advisorySubmit", "advisoryResults", "historyResults", "weatherForm", "weatherSubmit",
    "weatherCurrentResults", "weatherForecastResults", "weatherState", "weatherCity",
    "mandiForm", "mandiSubmit", "mandiResults", "mandiState",
    "schemeCropFilter", "schemeStateFilter", "schemeResults"
  ].forEach((id) => { el[id] = document.getElementById(id); });

  el.tabs = [...document.querySelectorAll(".tab-button")];
  el.panels = [...document.querySelectorAll(".tab-panel")];
  el.lang = [...document.querySelectorAll(".language-button")];

  el.tabs.forEach((button) => button.addEventListener("click", () => activateTab(button.dataset.tab)));
  el.lang.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
  el.advisoryForm.addEventListener("submit", submitAdvisory);
  el.weatherForm.addEventListener("submit", (event) => { event.preventDefault(); loadWeather(false); });
  el.mandiForm.addEventListener("submit", (event) => { event.preventDefault(); loadMandi(false); });
  el.schemeCropFilter.addEventListener("change", renderSchemes);
  el.schemeStateFilter.addEventListener("change", renderSchemes);
  el.advisoryState.addEventListener("change", async () => {
    try {
      await syncCities("advisory");
      syncMandiState();
    } catch (error) {
      feedback(error.message || t("locations_error"), "error");
    }
  });
  el.weatherState.addEventListener("change", async () => {
    try {
      await syncCities("weather");
    } catch (error) {
      feedback(error.message || t("locations_error"), "error");
    }
  });

  applyTranslations();
  activateTab("disease");
  renderAll();

  await Promise.all([loadSchemes(), loadHistory(), loadLocations(), loadMandi(true)]);
  await loadWeather(true);
});

function t(key) {
  return translations[state.language][key] || englishTranslations[key] || key;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function k2c(value) {
  return value == null ? "--" : `${(value - 273.15).toFixed(1)}C`;
}

function money(value) {
  return value == null ? "--" : new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(value));
}

function when(value) {
  if (!value) return "--";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(state.language === "en" ? "en-IN" : state.language, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(date);
}

function label(value) {
  if (!value) return "--";
  return t(String(value).toLowerCase().replace(/\s+/g, "_"));
}

function feedback(message, type = "info") {
  el.feedbackBanner.hidden = false;
  el.feedbackBanner.className = `feedback-banner ${type}`;
  el.feedbackBanner.textContent = message;
}

function clearFeedback() {
  el.feedbackBanner.hidden = true;
}

async function json(url, options = {}) {
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || `${t("generic_error")} (${response.status})`);
  }
  return data;
}

function setBtn(button, loadingKey, defaultKey, loading) {
  button.disabled = loading;
  button.textContent = t(loading ? loadingKey : defaultKey);
}

function getLocationControls(scope) {
  return scope === "advisory"
    ? { stateSelect: el.advisoryState, citySelect: el.advisoryCity }
    : { stateSelect: el.weatherState, citySelect: el.weatherCity };
}

function setSelectMessage(select, message) {
  if (!select) return;
  select.innerHTML = `<option value="">${esc(message)}</option>`;
  select.value = "";
  select.disabled = true;
}

function syncMandiState() {
  if (el.mandiState && el.advisoryState?.value) {
    el.mandiState.value = el.advisoryState.value;
  }
}

async function fetchCities(stateName) {
  if (!stateName) return [];
  if (state.locations.citiesByState[stateName]) {
    return state.locations.citiesByState[stateName];
  }

  const data = await json(`/locations/cities?state=${encodeURIComponent(stateName)}`);
  const cities = data.cities || [];
  state.locations.citiesByState[stateName] = cities;
  return cities;
}

async function syncCities(scope, preferredCity = "") {
  const { stateSelect, citySelect } = getLocationControls(scope);
  const fallbackState = state.locations.states[0] || "";

  if (!stateSelect.value && fallbackState) {
    stateSelect.value = fallbackState;
  }

  if (!stateSelect.value) {
    setSelectMessage(citySelect, t("locations_error"));
    return;
  }

  const cities = await fetchCities(stateSelect.value);
  if (!cities.length) {
    setSelectMessage(citySelect, t("no_city_data"));
    return;
  }

  citySelect.disabled = false;
  fillSelect(citySelect, cities.map((city) => ({ value: city.name, text: city.name })));

  if (preferredCity && cities.some((city) => city.name === preferredCity)) {
    citySelect.value = preferredCity;
    return;
  }

  if (!citySelect.value || !cities.some((city) => city.name === citySelect.value)) {
    citySelect.value = cities[0].name;
  }
}

async function loadLocations() {
  try {
    const data = await json("/locations/states");
    state.locations.states = data.states || [];
    state.locations.coverage = data.coverage || null;

    if (!state.locations.states.length) {
      setSelectMessage(el.advisoryState, t("locations_error"));
      setSelectMessage(el.advisoryCity, t("locations_error"));
      setSelectMessage(el.weatherState, t("locations_error"));
      setSelectMessage(el.weatherCity, t("locations_error"));
      return;
    }

    const stateOptions = state.locations.states.map((name) => ({ value: name, text: name }));
    fillSelect(el.advisoryState, stateOptions);
    fillSelect(el.weatherState, stateOptions);
    el.advisoryState.disabled = false;
    el.weatherState.disabled = false;

    await syncCities("advisory");
    syncMandiState();

    el.weatherState.value = el.advisoryState.value;
    await syncCities("weather", el.advisoryCity.value);
  } catch (error) {
    setSelectMessage(el.advisoryState, t("locations_error"));
    setSelectMessage(el.advisoryCity, t("locations_error"));
    setSelectMessage(el.weatherState, t("locations_error"));
    setSelectMessage(el.weatherCity, t("locations_error"));
    feedback(error.message || t("locations_error"), "error");
  }
}

function getSelectedLocation(scope) {
  const { stateSelect, citySelect } = getLocationControls(scope);
  const stateName = stateSelect?.value || "";
  const cities = state.locations.citiesByState[stateName] || [];
  const city = cities.find((item) => item.name === citySelect?.value) || cities[0] || null;

  return {
    stateName,
    cityName: city?.name || "",
    city
  };
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  el.lang.forEach((button) => {
    button.classList.toggle("active", button.dataset.language === state.language);
    button.textContent = t(`language_${button.dataset.language}`);
  });
  fillSelect(el.schemeCropFilter, [{ value: ALL_CROP_FILTER, text: t("all_crops") }, ...new Set(state.schemes.map((item) => item.crop))]);
  fillSelect(el.schemeStateFilter, [{ value: ALL_STATE_FILTER, text: t("all_states") }, ...new Set(state.schemes.map((item) => item.state))]);
}

function activateTab(tab) {
  el.tabs.forEach((button) => button.classList.toggle("active", button.dataset.tab === tab));
  el.panels.forEach((panel) => panel.classList.toggle("active", panel.id === `tab-${tab}`));
}

function setLanguage(language) {
  state.language = language;
  applyTranslations();
  renderAll();
}

function renderAll() {
  renderAdvisory();
  renderHistory();
  renderWeather();
  renderForecast();
  renderMandi();
  renderSchemes();
}

async function submitAdvisory(event) {
  event.preventDefault();
  clearFeedback();

  if (!el.advisoryImage.files.length) {
    feedback(t("image_required"), "error");
    return;
  }

  const selectedLocation = getSelectedLocation("advisory");
  if (!selectedLocation.stateName || !selectedLocation.city) {
    feedback(t("location_required"), "error");
    return;
  }

  try {
    setBtn(el.advisorySubmit, "analyze_button_loading", "analyze_button", true);
    const formData = new FormData(el.advisoryForm);
    formData.set("state", selectedLocation.stateName);
    formData.set("lat", selectedLocation.city.lat);
    formData.set("lon", selectedLocation.city.lon);

    state.advisory = await json("/agri/advisory", { method: "POST", body: formData });
    renderAdvisory();
    await loadHistory();
    feedback(t("advisory_success"), "success");
  } catch (error) {
    feedback(error.message, "error");
  } finally {
    setBtn(el.advisorySubmit, "analyze_button_loading", "analyze_button", false);
  }
}

async function loadWeather(silent) {
  const selectedLocation = getSelectedLocation("weather");
  if (!selectedLocation.stateName || !selectedLocation.city) {
    if (!silent) feedback(t("location_required"), "error");
    return;
  }

  const { lat, lon } = selectedLocation.city;

  try {
    setBtn(el.weatherSubmit, "load_weather_button_loading", "load_weather_button", true);
    const [weatherData, forecastData] = await Promise.all([
      json(`/agri/weather?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`),
      json(`/agri/forecast?lat=${encodeURIComponent(lat)}&lon=${encodeURIComponent(lon)}`)
    ]);
    state.weather = weatherData.current_weather;
    state.forecast = forecastData.forecast;
    renderWeather();
    renderForecast();
    if (!silent) feedback(t("weather_success"), "success");
  } catch (error) {
    feedback(error.message, "error");
  } finally {
    setBtn(el.weatherSubmit, "load_weather_button_loading", "load_weather_button", false);
  }
}

async function loadMandi(silent) {
  const params = new URLSearchParams();
  const commodity = document.getElementById("mandiCommodity").value.trim();
  const region = document.getElementById("mandiState").value.trim();
  const district = document.getElementById("mandiDistrict").value.trim();

  if (commodity) params.set("commodity", commodity);
  if (region) params.set("state", region);
  if (district) params.set("district", district);
  params.set("limit", "10");

  try {
    setBtn(el.mandiSubmit, "search_prices_button_loading", "search_prices_button", true);
    const data = await json(`/agri/market-prices?${params.toString()}`);
    state.mandi = data.market_prices;
    renderMandi();
    if (!silent) feedback(t("mandi_success"), "success");
  } catch (error) {
    feedback(error.message, "error");
  } finally {
    setBtn(el.mandiSubmit, "search_prices_button_loading", "search_prices_button", false);
  }
}

async function loadHistory() {
  try {
    const data = await json("/history?limit=6");
    state.history = data.history || [];
    renderHistory();
  } catch (error) {
    el.historyResults.innerHTML = `<div class="empty-state">${esc(error.message)}</div>`;
  }
}

async function loadSchemes() {
  try {
    const response = await fetch("/data/schemes.json");
    state.schemes = await response.json();
    applyTranslations();
    renderSchemes();
  } catch {
    state.schemes = [];
    renderSchemes();
  }
}

function renderAdvisory() {
  const advisory = state.advisory;
  if (!advisory) {
    el.advisoryResults.innerHTML = `<div class="empty-state">${esc(t("advisory_empty"))}</div>`;
    return;
  }

  const prediction = advisory.prediction || {};
  const recommendation = advisory.recommendation || {};
  const warnings = advisory.errors ? Object.values(advisory.errors) : [];
  const statusClass = String(recommendation.status || "unknown").replace(/_/g, "-");

  el.advisoryResults.innerHTML = `
    <div class="metrics-grid">
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("prediction_title"))}</p>
        <p class="metric-value">${esc(prediction.label || "--")}</p>
      </article>
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("confidence_title"))}</p>
        <p class="metric-value">${esc(prediction.confidence ?? "--")}${prediction.confidence ? "%" : ""}</p>
      </article>
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("last_saved"))}</p>
        <p class="metric-value">${esc(when(advisory.timestamp))}</p>
      </article>
    </div>
    <article class="detail-card">
      <div class="surface-meta">
        <span class="status-pill ${esc(statusClass)}">${esc(t(`status_${recommendation.status || "unknown"}`))}</span>
        ${advisory.record_id ? `<span class="meta-pill">ID: ${esc(advisory.record_id)}</span>` : ""}
      </div>
      <h4 class="detail-title">${esc(t("recommendation_title"))}</h4>
      <p class="detail-copy">${esc(recommendation.advice || "--")}</p>
    </article>
    <article class="detail-card">
      <h4 class="detail-title">${esc(t("weather_summary_title"))}</h4>
      ${advisory.weather ? `<p class="detail-copy">${esc(advisory.weather.summary || "--")}</p>` : `<div class="empty-state">${esc(t("weather_empty"))}</div>`}
    </article>
    <article class="detail-card">
      <h4 class="detail-title">${esc(t("mandi_summary_title"))}</h4>
      ${(advisory.mandi || []).length ? `
        <div class="table-shell">
          <table>
            <thead>
              <tr>
                <th>${esc(t("market"))}</th>
                <th>${esc(t("state_label"))}</th>
                <th>${esc(t("district_label"))}</th>
                <th>${esc(t("modal_price"))}</th>
              </tr>
            </thead>
            <tbody>
              ${advisory.mandi.map((item) => `
                <tr>
                  <td>${esc(item.market)}</td>
                  <td>${esc(item.state)}</td>
                  <td>${esc(item.district)}</td>
                  <td>${esc(money(item.modal_price))}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      ` : `<div class="empty-state">${esc(t("no_mandi_data"))}</div>`}
    </article>
    ${warnings.length ? `
      <article class="detail-card">
        <h4 class="detail-title">${esc(t("errors_title"))}</h4>
        <ul class="error-list">${warnings.map((warning) => `<li>${esc(warning)}</li>`).join("")}</ul>
      </article>
    ` : ""}
  `;
}

function renderHistory() {
  if (!state.history.length) {
    el.historyResults.innerHTML = `<div class="empty-state">${esc(t("history_empty"))}</div>`;
    return;
  }

  el.historyResults.innerHTML = `
    <div class="history-grid">
      ${state.history.map((item) => `
        <article class="history-item">
          <p class="history-time">${esc(when(item.timestamp))}</p>
          <p class="history-title">${esc(item.prediction?.label || "--")}</p>
          <div class="history-tags">
            <span class="tag">${esc(t(`status_${item.recommendation?.status || "unknown"}`))}</span>
            ${item.weather?.location ? `<span class="tag">${esc(item.weather.location)}</span>` : ""}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderWeather() {
  const weather = state.weather;
  if (!weather) {
    el.weatherCurrentResults.innerHTML = `<div class="empty-state">${esc(t("weather_empty"))}</div>`;
    return;
  }

  el.weatherCurrentResults.innerHTML = `
    <div class="metrics-grid">
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("temperature"))}</p>
        <p class="metric-value">${esc(k2c(weather.main?.temp))}</p>
      </article>
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("humidity"))}</p>
        <p class="metric-value">${esc(weather.main?.humidity ?? "--")}%</p>
      </article>
      <article class="metric-tile">
        <p class="metric-kicker">${esc(t("wind"))}</p>
        <p class="metric-value">${esc(weather.wind?.speed ?? "--")} m/s</p>
      </article>
    </div>
    <article class="detail-card">
      <h4 class="detail-title">${esc(t("condition"))}</h4>
      <p class="detail-copy">${esc(weather.weather?.[0]?.description || "--")}</p>
    </article>
  `;
}

function renderForecast() {
  const list = state.forecast?.list || [];
  if (!list.length) {
    el.weatherForecastResults.innerHTML = `<div class="empty-state">${esc(t("forecast_empty"))}</div>`;
    return;
  }

  el.weatherForecastResults.innerHTML = `
    <div class="forecast-grid">
      ${list.slice(0, 8).map((item) => `
        <article class="forecast-item">
          <p class="forecast-time">${esc(item.dt_txt || "--")}</p>
          <p class="forecast-value">${esc(item.weather?.[0]?.description || "--")}</p>
          <p class="detail-copy">${esc(k2c(item.main?.temp))}</p>
        </article>
      `).join("")}
    </div>
  `;
}

function renderMandi() {
  const mandi = state.mandi;
  const records = mandi?.records || [];

  if (!mandi) {
    el.mandiResults.innerHTML = `<div class="empty-state">${esc(t("mandi_empty"))}</div>`;
    return;
  }

  if (!records.length) {
    el.mandiResults.innerHTML = `<div class="empty-state">${esc(t("no_mandi_data"))}</div>`;
    return;
  }

  el.mandiResults.innerHTML = `
    <div class="surface-meta">
      <span class="meta-pill">${esc(t("total_records"))}: ${esc(mandi.count || records.length)}</span>
      <span class="meta-pill">${esc(t("last_saved"))}: ${esc(mandi.updated_date || "--")}</span>
    </div>
    <div class="table-shell">
      <table>
        <thead>
          <tr>
            <th>${esc(t("commodity_label"))}</th>
            <th>${esc(t("state_label"))}</th>
            <th>${esc(t("district_label"))}</th>
            <th>${esc(t("market"))}</th>
            <th>${esc(t("min_price"))}</th>
            <th>${esc(t("max_price"))}</th>
            <th>${esc(t("modal_price"))}</th>
            <th>${esc(t("arrival_date"))}</th>
          </tr>
        </thead>
        <tbody>
          ${records.map((item) => `
            <tr>
              <td>${esc(item.commodity)}</td>
              <td>${esc(item.state)}</td>
              <td>${esc(item.district)}</td>
              <td>${esc(item.market)}</td>
              <td>${esc(money(item.min_price))}</td>
              <td>${esc(money(item.max_price))}</td>
              <td>${esc(money(item.modal_price))}</td>
              <td>${esc(item.arrival_date)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function fillSelect(select, values) {
  if (!select) return;
  const current = select.value;
  const options = Array.isArray(values) ? values : [];

  select.innerHTML = options.map((value) => {
    if (typeof value === "object") {
      return `<option value="${esc(value.value)}">${esc(value.text)}</option>`;
    }
    return `<option value="${esc(value)}">${esc(label(value))}</option>`;
  }).join("");

  if ([...select.options].some((option) => option.value === current)) {
    select.value = current;
  } else if (select.options.length) {
    select.selectedIndex = 0;
  }
}

function renderSchemes() {
  if (!state.schemes.length) {
    el.schemeResults.innerHTML = `<div class="empty-state">${esc(t("schemes_empty"))}</div>`;
    return;
  }

  const crop = el.schemeCropFilter.value;
  const area = el.schemeStateFilter.value;
  const rows = state.schemes.filter((item) => {
    const cropMatch = !crop || crop === ALL_CROP_FILTER || item.crop === crop;
    const stateMatch = !area || area === ALL_STATE_FILTER || item.state === area;
    return cropMatch && stateMatch;
  });

  if (!rows.length) {
    el.schemeResults.innerHTML = `<div class="empty-state">${esc(t("schemes_empty"))}</div>`;
    return;
  }

  el.schemeResults.innerHTML = `
    <div class="scheme-grid">
      ${rows.map((item) => `
        <article class="scheme-item">
          <p class="scheme-meta">${esc(label(item.state))} / ${esc(label(item.crop))}</p>
          <p class="scheme-title">${esc(item.title[state.language] || item.title.en)}</p>
          <p class="detail-copy">${esc(item.description[state.language] || item.description.en)}</p>
          <div class="scheme-tags">
            <span class="tag">${esc(label(item.crop))}</span>
            <span class="tag">${esc(label(item.state))}</span>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}
