/* ================= LANGUAGE STRINGS (UI chrome) ================= */
const LANGS={
en:{home:"Home",general:"General Consultation",ayush:"AYUSH Assessment",reports:"Medical Reports",summary:"Consultation Summary",
welcome:"Welcome to MediKiosk",start:"Start",choose:"Choose the consultation type",upload:"Upload Medical Report",latest:"Latest Consultation",noData:"No consultation submitted yet.",
role:"Role",patient:"Patient",doctor:"Doctor",userId:"User ID",pin:"PIN",sign:"Sign in",logout:"Logout",voice:"Voice Guidance",touch:"Touch Mode",speak:"Speak Question",stop:"Stop Voice",back:"Back",next:"Next",submit:"Submit Consultation",yes:"YES",no:"NO",
selectDisease:"Select the main health problem",diseaseNote:"Only clinical health conditions are available for consultation.",
summaryTitle:"Consultation Summary",complete:"Completed",urgent:"High-Risk Symptoms Detected",urgentNote:"Please arrange immediate professional medical evaluation.",
camera:"Use Camera / Upload",reportNote:"You may scan or upload a prior medical report, or skip this step if you don't have one.",
ayushIntro:"Structured Ayurvedic assessment based on the Dashavidha Pariksha parameters and Ahara-Vihara.",
qof:"Question {n} of {total}",selected:"Selected condition",submitted:"Consultation submitted to the doctor queue."},
hi:{home:"होम",general:"सामान्य परामर्श",ayush:"आयुष आकलन",reports:"मेडिकल रिपोर्ट",summary:"परामर्श सारांश",welcome:"MediKiosk में आपका स्वागत है",start:"शुरू करें",choose:"परामर्श प्रकार चुनें",upload:"मेडिकल रिपोर्ट अपलोड करें",latest:"नवीनतम परामर्श",noData:"अभी कोई परामर्श जमा नहीं हुआ है।",role:"भूमिका",patient:"मरीज",doctor:"डॉक्टर",userId:"यूज़र आईडी",pin:"पिन",sign:"साइन इन",logout:"लॉगआउट",voice:"आवाज़ मार्गदर्शन",touch:"टच मोड",speak:"प्रश्न सुनें",stop:"आवाज़ रोकें",back:"वापस",next:"आगे",submit:"परामर्श जमा करें",yes:"हाँ",no:"नहीं",selectDisease:"मुख्य स्वास्थ्य समस्या चुनें",diseaseNote:"परामर्श के लिए केवल स्वास्थ्य संबंधी स्थितियाँ उपलब्ध हैं।",summaryTitle:"परामर्श सारांश",complete:"पूरा",urgent:"उच्च-जोखिम लक्षण पाए गए",urgentNote:"तुरंत योग्य चिकित्सकीय मूल्यांकन कराएँ।",camera:"कैमरा / अपलोड",reportNote:"आप पुरानी मेडिकल रिपोर्ट स्कैन/अपलोड कर सकते हैं, या न हो तो इसे छोड़ सकते हैं।",ayushIntro:"निर्दिष्ट दशविध परीक्षा और आहार-विहार मापदंडों पर आधारित संरचित आयुर्वेदिक आकलन।",qof:"प्रश्न {n} / {total}",selected:"चयनित स्थिति",submitted:"परामर्श डॉक्टर की कतार में भेज दिया गया है।"},
bn:{home:"হোম",general:"সাধারণ পরামর্শ",ayush:"আয়ুষ মূল্যায়ন",reports:"মেডিকেল রিপোর্ট",summary:"পরামর্শ সারাংশ",welcome:"MediKiosk-এ স্বাগতম",start:"শুরু করুন",choose:"পরামর্শের ধরন নির্বাচন করুন",upload:"মেডিকেল রিপোর্ট আপলোড করুন",latest:"সর্বশেষ পরামর্শ",noData:"এখনও কোনো পরামর্শ জমা হয়নি।",role:"ভূমিকা",patient:"রোগী",doctor:"ডাক্তার",userId:"ইউজার আইডি",pin:"পিন",sign:"সাইন ইন",logout:"লগআউট",voice:"ভয়েস নির্দেশনা",touch:"টাচ মোড",speak:"প্রশ্ন শুনুন",stop:"ভয়েস বন্ধ",back:"ফিরুন",next:"পরবর্তী",submit:"পরামর্শ জমা দিন",yes:"হ্যাঁ",no:"না",selectDisease:"প্রধান স্বাস্থ্য সমস্যা নির্বাচন করুন",diseaseNote:"শুধুমাত্র স্বাস্থ্য সম্পর্কিত অবস্থা উপলব্ধ।",summaryTitle:"পরামর্শ সারাংশ",complete:"সম্পন্ন",urgent:"উচ্চ-ঝুঁকির লক্ষণ শনাক্ত",urgentNote:"অবিলম্বে চিকিৎসকের মূল্যায়ন নিন।",camera:"ক্যামেরা / আপলোড",reportNote:"পুরনো মেডিকেল রিপোর্ট আপলোড করুন, বা না থাকলে এড়িয়ে যান।",ayushIntro:"নির্ধারিত দশবিধ পরীক্ষা ও আহার-বিহার মানদণ্ডের ভিত্তিতে মূল্যায়ন।",qof:"প্রশ্ন {n} / {total}",selected:"নির্বাচিত অবস্থা",submitted:"পরামর্শ ডাক্তার কিউ-তে পাঠানো হয়েছে।"},
mr:{home:"मुख्यपृष्ठ",general:"सामान्य सल्ला",ayush:"आयुष मूल्यांकन",reports:"वैद्यकीय अहवाल",summary:"सल्ला सारांश",welcome:"MediKiosk मध्ये स्वागत",start:"सुरू करा",choose:"सल्ल्याचा प्रकार निवडा",upload:"वैद्यकीय अहवाल अपलोड करा",latest:"अलीकडील सल्ला",noData:"अद्याप कोणताही सल्ला जमा केलेला नाही.",role:"भूमिका",patient:"रुग्ण",doctor:"डॉक्टर",userId:"यूजर आयडी",pin:"पिन",sign:"साइन इन",logout:"लॉगआउट",voice:"आवाज मार्गदर्शन",touch:"टच मोड",speak:"प्रश्न ऐका",stop:"आवाज थांबवा",back:"मागे",next:"पुढे",submit:"सल्ला जमा करा",yes:"होय",no:"नाही",selectDisease:"मुख्य आरोग्य समस्या निवडा",diseaseNote:"फक्त आरोग्याशी संबंधित स्थिती उपलब्ध आहेत.",summaryTitle:"सल्ला सारांश",complete:"पूर्ण",urgent:"उच्च-जोखीम लक्षणे आढळली",urgentNote:"तात्काळ वैद्यकीय मूल्यांकन घ्या.",camera:"कॅमेरा / अपलोड",reportNote:"जुना वैद्यकीय अहवाल अपलोड करा, नसल्यास वगळा.",ayushIntro:"दशविध परीक्षा व आहार-विहार निकषांवर आधारित आयुष मूल्यांकन.",qof:"प्रश्न {n} / {total}",selected:"निवडलेली स्थिती",submitted:"सल्ला डॉक्टरच्या क्यूमध्ये पाठवला आहे."},
te:{home:"హోమ్",general:"సాధారణ సంప్రదింపు",ayush:"ఆయుష్ అంచనా",reports:"వైద్య నివేదికలు",summary:"సంప్రదింపు సారాంశం",welcome:"MediKiosk కు స్వాగతం",start:"ప్రారంభించండి",choose:"సంప్రదింపు రకాన్ని ఎంచుకోండి",upload:"వైద్య నివేదికలను అప్‌లోడ్ చేయండి",latest:"తాజా సంప్రదింపు",noData:"ఇంకా సంప్రదింపు సమర్పించలేదు.",role:"పాత్ర",patient:"రోగి",doctor:"డాక్టర్",userId:"వినియోగదారు ఐడి",pin:"పిన్",sign:"సైన్ ఇన్",logout:"లాగ్ అవుట్",voice:"వాయిస్ మార్గదర్శకం",touch:"టచ్ మోడ్",speak:"ప్రశ్న వినండి",stop:"వాయిస్ ఆపండి",back:"వెనుకకు",next:"తదుపరి",submit:"సంప్రదింపును సమర్పించండి",yes:"అవును",no:"కాదు",selectDisease:"ప్రధాన ఆరోగ్య సమస్యను ఎంచుకోండి",diseaseNote:"ఆరోగ్య సంబంధిత పరిస్థితులు మాత్రమే అందుబాటులో ఉన్నాయి.",summaryTitle:"సంప్రదింపు సారాంశం",complete:"పూర్తయింది",urgent:"అధిక-ప్రమాద లక్షణాలు గుర్తించబడ్డాయి",urgentNote:"తక్షణ వైద్య మూల్యాంకనం పొందండి.",camera:"కెమెరా / అప్‌లోడ్",reportNote:"పాత వైద్య నివేదికను అప్‌లోడ్ చేయండి, లేకపోతే స్కిప్ చేయండి.",ayushIntro:"దశవిధ పరీక్ష మరియు ఆహార-విహార ప్రమాణాల ఆధారిత అంచనా.",qof:"ప్రశ్న {n} / {total}",selected:"ఎంచుకున్న పరిస్థితి",submitted:"సంప్రదింపు డాక్టర్ క్యూ కు పంపబడింది."},
ta:{home:"முகப்பு",general:"பொது ஆலோசனை",ayush:"ஆயுஷ் மதிப்பீடு",reports:"மருத்துவ அறிக்கைகள்",summary:"ஆலோசனை சுருக்கம்",welcome:"MediKiosk-க்கு வரவேற்கிறோம்",start:"தொடங்கவும்",choose:"ஆலோசனை வகையை தேர்வு செய்யவும்",upload:"மருத்துவ அறிக்கைகளை பதிவேற்றவும்",latest:"சமீபத்திய ஆலோசனை",noData:"இதுவரை ஆலோசனை சமர்ப்பிக்கப்படவில்லை.",role:"பங்கு",patient:"நோயாளர்",doctor:"மருத்துவர்",userId:"பயனர் ஐடி",pin:"பின்",sign:"உள்நுழை",logout:"வெளியேறு",voice:"குரல் வழிகாட்டல்",touch:"தொடுதல் முறை",speak:"கேள்வியைக் கேளுங்கள்",stop:"குரலை நிறுத்து",back:"பின்",next:"அடுத்து",submit:"ஆலோசனையை சமர்ப்பிக்கவும்",yes:"ஆம்",no:"இல்லை",selectDisease:"முக்கிய உடல்நலப் பிரச்சினையை தேர்வு செய்யவும்",diseaseNote:"உடல்நல நிலைகள் மட்டும் உள்ளன.",summaryTitle:"ஆலோசனை சுருக்கம்",complete:"முடிந்தது",urgent:"அதிக ஆபத்து அறிகுறிகள் கண்டறியப்பட்டன",urgentNote:"உடனடி மருத்துவ மதிப்பீடு பெறவும்.",camera:"கேமரா / பதிவேற்றம்",reportNote:"பழைய மருத்துவ அறிக்கையை பதிவேற்றவும், இல்லையெனில் தவிர்க்கவும்.",ayushIntro:"தசவித பரீட்சை மற்றும் ஆகார-விஹார அடிப்படையிலான மதிப்பீடு.",qof:"கேள்வி {n} / {total}",selected:"தேர்ந்த நிலை",submitted:"ஆலோசனை மருத்துவர் வரிசைக்கு அனுப்பப்பட்டது."},
gu:{home:"હોમ",general:"સામાન્ય પરામર્શ",ayush:"આયુષ મૂલ્યાંકન",reports:"મેડિકલ રિપોર્ટ",summary:"પરામર્શ સારાંશ",welcome:"MediKiosk માં સ્વાગત છે",start:"શરૂ કરો",choose:"પરામર્શનો પ્રકાર પસંદ કરો",upload:"મેડિકલ રિપોર્ટ અપલોડ કરો",latest:"તાજેતરનો પરામર્શ",noData:"હજુ સુધી કોઈ પરામર્શ સબમિટ થયો નથી.",role:"ભૂમિકા",patient:"દર્દી",doctor:"ડૉક્ટર",userId:"યુઝર આઈડી",pin:"પિન",sign:"સાઇન ઇન",logout:"લૉગઆઉટ",voice:"વૉઇસ માર્ગદર્શન",touch:"ટચ મોડ",speak:"પ્રશ્ન સાંભળો",stop:"વૉઇસ બંધ",back:"પાછળ",next:"આગળ",submit:"પરામર્શ સબમિટ કરો",yes:"હા",no:"ના",selectDisease:"મુખ્ય આરોગ્ય સમસ્યા પસંદ કરો",diseaseNote:"માત્ર આરોગ્ય સંબંધિત સ્થિતિ ઉપલબ્ધ છે.",summaryTitle:"પરામર્શ સારાંશ",complete:"પૂર્ણ",urgent:"ઉચ્ચ જોખમના લક્ષણો મળ્યા",urgentNote:"તાત્કાલિક તબીબી મૂલ્યાંકન કરાવો.",camera:"કેમેરા / અપલોડ",reportNote:"જૂનો મેડિકલ રિપોર્ટ અપલોડ કરો, ન હોય તો છોડી દો.",ayushIntro:"દશવિધ પરીક્ષા અને આહાર-વિહાર માપદંડ આધારિત આયુષ મૂલ્યાંકન.",qof:"પ્રશ્ન {n} / {total}",selected:"પસંદ કરેલી સ્થિતિ",submitted:"પરામર્શ ડૉક્ટર કતારમાં મોકલાયો."},
kn:{home:"ಮುಖಪುಟ",general:"ಸಾಮಾನ್ಯ ಸಮಾಲೋಚನೆ",ayush:"ಆಯುಷ್ ಮೌಲ್ಯಮಾಪನ",reports:"ವೈದ್ಯಕೀಯ ವರದಿಗಳು",summary:"ಸಮಾಲೋಚನೆ ಸಾರಾಂಶ",welcome:"MediKiosk ಗೆ ಸ್ವಾಗತ",start:"ಪ್ರಾರಂಭಿಸಿ",choose:"ಸಮಾಲೋಚನೆ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ",upload:"ವೈದ್ಯಕೀಯ ವರದಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ",latest:"ಇತ್ತೀಚಿನ ಸಮಾಲೋಚನೆ",noData:"ಇನ್ನೂ ಯಾವುದೇ ಸಮಾಲೋಚನೆ ಸಲ್ಲಿಸಲಾಗಿಲ್ಲ.",role:"ಪಾತ್ರ",patient:"ರೋಗಿ",doctor:"ವೈದ್ಯರು",userId:"ಬಳಕೆದಾರ ಐಡಿ",pin:"ಪಿನ್",sign:"ಸೈನ್ ಇನ್",logout:"ಲಾಗ್ ಔಟ್",voice:"ಧ್ವನಿ ಮಾರ್ಗದರ್ಶನ",touch:"ಟಚ್ ಮೋಡ್",speak:"ಪ್ರಶ್ನೆ ಕೇಳಿ",stop:"ಧ್ವನಿ ನಿಲ್ಲಿಸಿ",back:"ಹಿಂದೆ",next:"ಮುಂದೆ",submit:"ಸಮಾಲೋಚನೆ ಸಲ್ಲಿಸಿ",yes:"ಹೌದು",no:"ಇಲ್ಲ",selectDisease:"ಮುಖ್ಯ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ",diseaseNote:"ಆರೋಗ್ಯ ಸಂಬಂಧಿತ ಸ್ಥಿತಿಗಳು ಮಾತ್ರ ಲಭ್ಯವಿವೆ.",summaryTitle:"ಸಮಾಲೋಚನೆ ಸಾರಾಂಶ",complete:"ಪೂರ್ಣ",urgent:"ಹೆಚ್ಚಿನ ಅಪಾಯದ ಲಕ್ಷಣಗಳು ಪತ್ತೆಯಾಗಿವೆ",urgentNote:"ತಕ್ಷಣ ವೈದ್ಯಕೀಯ ಮೌಲ್ಯಮಾಪನ ಪಡೆಯಿರಿ.",camera:"ಕ್ಯಾಮೆರಾ / ಅಪ್‌ಲೋಡ್",reportNote:"ಹಳೆಯ ವೈದ್ಯಕೀಯ ವರದಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ, ಇಲ್ಲದಿದ್ದರೆ ಬಿಟ್ಟುಬಿಡಿ.",ayushIntro:"ದಶವಿಧ ಪರೀಕ್ಷೆ ಮತ್ತು ಆಹಾರ-ವಿಹಾರ ಮಾನದಂಡಗಳ ಆಧಾರಿತ ಮೌಲ್ಯಮಾಪನ.",qof:"ಪ್ರಶ್ನೆ {n} / {total}",selected:"ಆಯ್ದ ಸ್ಥಿತಿ",submitted:"ಸಮಾಲೋಚನೆಯನ್ನು ವೈದ್ಯರ ಕ್ಯೂಗೆ ಕಳುಹಿಸಲಾಗಿದೆ."},
ml:{home:"ഹോം",general:"പൊതു കൺസൾട്ടേഷൻ",ayush:"ആയുഷ് വിലയിരുത്തൽ",reports:"മെഡിക്കൽ റിപ്പോർട്ടുകൾ",summary:"കൺസൾട്ടേഷൻ സംഗ്രഹം",welcome:"MediKiosk-ലേക്ക് സ്വാഗതം",start:"ആരംഭിക്കുക",choose:"കൺസൾട്ടേഷൻ തരം തിരഞ്ഞെടുക്കുക",upload:"മെഡിക്കൽ റിപ്പോർട്ടുകൾ അപ്‌ലോഡ് ചെയ്യുക",latest:"ഏറ്റവും പുതിയ കൺസൾട്ടേഷൻ",noData:"ഇതുവരെ കൺസൾട്ടേഷൻ സമർപ്പിച്ചിട്ടില്ല.",role:"പങ്ക്",patient:"രോഗി",doctor:"ഡോക്ടർ",userId:"യൂസർ ഐഡി",pin:"പിൻ",sign:"സൈൻ ഇൻ",logout:"ലോഗ് ഔട്ട്",voice:"വോയ്സ് മാർഗനിർദ്ദേശം",touch:"ടച്ച് മോഡ്",speak:"ചോദ്യം കേൾക്കുക",stop:"വോയ്സ് നിർത്തുക",back:"പിന്നിലേക്ക്",next:"അടുത്തത്",submit:"കൺസൾട്ടേഷൻ സമർപ്പിക്കുക",yes:"അതെ",no:"ഇല്ല",selectDisease:"പ്രധാന ആരോഗ്യ പ്രശ്നം തിരഞ്ഞെടുക്കുക",diseaseNote:"ആരോഗ്യവുമായി ബന്ധപ്പെട്ട അവസ്ഥകൾ മാത്രം ലഭ്യമാണ്.",summaryTitle:"കൺസൾട്ടേഷൻ സംഗ്രഹം",complete:"പൂർത്തിയായി",urgent:"ഉയർന്ന അപകടസാധ്യതയുള്ള ലക്ഷണങ്ങൾ കണ്ടെത്തി",urgentNote:"ഉടൻ മെഡിക്കൽ വിലയിരുത്തൽ നേടുക.",camera:"ക്യാമറ / അപ്‌ലോഡ്",reportNote:"പഴയ മെഡിക്കൽ റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക, ഇല്ലെങ്കിൽ ഒഴിവാക്കുക.",ayushIntro:"ദശവിധ പരിശോധനയും ആഹാര-വിഹാര മാനദണ്ഡങ്ങളും അടിസ്ഥാനമാക്കിയ വിലയിരുത്തൽ.",qof:"ചോദ്യം {n} / {total}",selected:"തിരഞ്ഞെടുത്ത അവസ്ഥ",submitted:"കൺസൾട്ടേഷൻ ഡോക്ടർ ക്യൂവിലേക്ക് അയച്ചു."},
pa:{home:"ਹੋਮ",general:"ਆਮ ਸਲਾਹ",ayush:"ਆਯੁਸ਼ ਮੁਲਾਂਕਣ",reports:"ਮੈਡੀਕਲ ਰਿਪੋਰਟਾਂ",summary:"ਸਲਾਹ ਸੰਖੇਪ",welcome:"MediKiosk ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",start:"ਸ਼ੁਰੂ ਕਰੋ",choose:"ਸਲਾਹ ਦੀ ਕਿਸਮ ਚੁਣੋ",upload:"ਮੈਡੀਕਲ ਰਿਪੋਰਟ ਅਪਲੋਡ ਕਰੋ",latest:"ਨਵੀਂ ਸਲਾਹ",noData:"ਹਾਲੇ ਕੋਈ ਸਲਾਹ ਜਮ੍ਹਾਂ ਨਹੀਂ ਹੋਈ।",role:"ਭੂਮਿਕਾ",patient:"ਮਰੀਜ਼",doctor:"ਡਾਕਟਰ",userId:"ਯੂਜ਼ਰ ਆਈਡੀ",pin:"ਪਿੰਨ",sign:"ਸਾਈਨ ਇਨ",logout:"ਲੌਗ ਆਉਟ",voice:"ਆਵਾਜ਼ ਮਾਰਗਦਰਸ਼ਨ",touch:"ਟੱਚ ਮੋਡ",speak:"ਸਵਾਲ ਸੁਣੋ",stop:"ਆਵਾਜ਼ ਰੋਕੋ",back:"ਪਿੱਛੇ",next:"ਅੱਗੇ",submit:"ਸਲਾਹ ਜਮ੍ਹਾਂ ਕਰੋ",yes:"ਹਾਂ",no:"ਨਹੀਂ",selectDisease:"ਮੁੱਖ ਸਿਹਤ ਸਮੱਸਿਆ ਚੁਣੋ",diseaseNote:"ਸਿਰਫ਼ ਸਿਹਤ ਨਾਲ ਸਬੰਧਤ ਸਥਿਤੀਆਂ ਉਪਲਬਧ ਹਨ।",summaryTitle:"ਸਲਾਹ ਸੰਖੇਪ",complete:"ਪੂਰਾ",urgent:"ਉੱਚ-ਜੋਖਮ ਲੱਛਣ ਮਿਲੇ",urgentNote:"ਤੁਰੰਤ ਡਾਕਟਰੀ ਮੁਲਾਂਕਣ ਕਰਵਾਓ।",camera:"ਕੈਮਰਾ / ਅਪਲੋਡ",reportNote:"ਪੁਰਾਣੀ ਮੈਡੀਕਲ ਰਿਪੋਰਟ ਅਪਲੋਡ ਕਰੋ, ਨਾ ਹੋਵੇ ਤਾਂ ਛੱਡ ਦਿਓ।",ayushIntro:"ਦਸ਼ਵਿਧ ਪਰੀਖਿਆ ਅਤੇ ਆਹਾਰ-ਵਿਹਾਰ ਮਾਪਦੰਡਾਂ ਅਧਾਰਿਤ ਆਯੁਸ਼ ਮੁਲਾਂਕਣ।",qof:"ਸਵਾਲ {n} / {total}",selected:"ਚੁਣੀ ਸਥਿਤੀ",submitted:"ਸਲਾਹ ਡਾਕਟਰ ਕਿਊ ਵਿੱਚ ਭੇਜ ਦਿੱਤੀ ਗਈ ਹੈ।"}};

/* speech locale codes */
const LANG_CODE={en:'en-IN',hi:'hi-IN',bn:'bn-IN',mr:'mr-IN',te:'te-IN',ta:'ta-IN',gu:'gu-IN',kn:'kn-IN',ml:'ml-IN',pa:'pa-IN'};
/* yes/no recognition keywords per language (best-effort ASR keyword matching) */
const YESNO_WORDS={
en:{yes:["yes","yeah","yep"],no:["no","nope","nah"]},
hi:{yes:["हाँ","हां","जी हाँ","yes"],no:["नहीं","ना","no"]},
bn:{yes:["হ্যাঁ","হা"],no:["না"]},
mr:{yes:["होय","हो"],no:["नाही"]},
te:{yes:["అవును"],no:["కాదు"]},
ta:{yes:["ஆம்"],no:["இல்லை"]},
gu:{yes:["હા"],no:["ના"]},
kn:{yes:["ಹೌದು"],no:["ಇಲ್ಲ"]},
ml:{yes:["അതെ"],no:["ഇല്ല"]},
pa:{yes:["ਹਾਂ"],no:["ਨਹੀਂ"]}
};

/* ================= DISEASE METADATA & QUESTION BANKS ================= */
const DISEASE_META={
fever:{en:'Fever',hi:'बुखार'},
cough:{en:'Cough / Respiratory Symptoms',hi:'खांसी / सांस संबंधी लक्षण'},
diabetes:{en:'Diabetes',hi:'मधुमेह'},
hypertension:{en:'Hypertension',hi:'उच्च रक्तचाप'},
chestpain:{en:'Chest Pain',hi:'सीने में दर्द'},
headache:{en:'Headache',hi:'सिरदर्द'},
abdominal:{en:'Abdominal Pain',hi:'पेट दर्द'},
skin:{en:'Skin / Allergy',hi:'त्वचा / एलर्जी'}
};

function Q(q,c){return{q:q,critical:!!c};}

const QBANK={
fever:{en:[Q("Do you currently have a measured or suspected fever?"),Q("Is your temperature above 103°F (39.4°C)?",1),Q("Have you had chills or shivering with the fever?"),Q("Has the fever continued for more than 3 days?"),Q("Do you have a rash along with the fever?"),Q("Do you have a stiff neck or severe headache with the fever?",1),Q("Do you have difficulty breathing or confusion with the fever?",1),Q("Do you have severe weakness or are you unable to keep fluids down?",1)],
hi:[Q("क्या आपको अभी बुखार है या बुखार होने का संदेह है?"),Q("क्या आपका तापमान 103°F (39.4°C) से अधिक है?",1),Q("क्या बुखार के साथ ठंड लगना या कंपकंपी हुई है?"),Q("क्या बुखार 3 दिनों से अधिक समय से बना हुआ है?"),Q("क्या बुखार के साथ शरीर पर दाने (रैश) हैं?"),Q("क्या बुखार के साथ गर्दन में अकड़न या तेज़ सिरदर्द है?",1),Q("क्या बुखार के साथ सांस लेने में तकलीफ या भ्रम है?",1),Q("क्या अत्यधिक कमजोरी है या आप तरल पदार्थ नहीं ले पा रहे हैं?",1)]},
cough:{en:[Q("Do you have a cough currently?"),Q("Has the cough lasted more than 2 weeks?"),Q("Do you have shortness of breath at rest?",1),Q("Do you have chest pain when breathing or coughing?",1),Q("Are you coughing up blood?",1),Q("Do you have a high fever along with the cough?"),Q("Do you have wheezing or a whistling sound while breathing?"),Q("Have your breathing symptoms suddenly become worse?",1)],
hi:[Q("क्या आपको अभी खांसी है?"),Q("क्या खांसी 2 हफ्तों से अधिक समय से है?"),Q("क्या आराम करते समय भी सांस लेने में तकलीफ होती है?",1),Q("क्या सांस लेने या खांसने पर सीने में दर्द होता है?",1),Q("क्या खांसी के साथ खून आ रहा है?",1),Q("क्या खांसी के साथ तेज़ बुखार है?"),Q("क्या सांस लेते समय सीटी जैसी आवाज़ आती है?"),Q("क्या सांस की तकलीफ अचानक बहुत बढ़ गई है?",1)]},
diabetes:{en:[Q("Have you been previously diagnosed with diabetes?"),Q("Have you had unusually increased thirst recently?"),Q("Have you been urinating more frequently than usual?"),Q("Have you had unexplained weight loss?"),Q("Do you have blurred vision?"),Q("Have you had numbness or tingling in your feet or hands?"),Q("Have you had symptoms of very low blood sugar such as sweating, shakiness, or faintness?",1),Q("Have you had a wound or ulcer that is not healing?",1)],
hi:[Q("क्या आपको पहले मधुमेह होने की पुष्टि हुई है?"),Q("क्या हाल ही में असामान्य रूप से अधिक प्यास लगी है?"),Q("क्या सामान्य से अधिक बार पेशाब आ रहा है?"),Q("क्या बिना किसी कारण वजन कम हुआ है?"),Q("क्या धुंधला दिखाई देता है?"),Q("क्या पैरों या हाथों में सुन्नपन या झनझनाहट महसूस हुई है?"),Q("क्या पसीना आना, कंपकंपी या बेहोशी जैसे बहुत कम ब्लड शुगर के लक्षण हुए हैं?",1),Q("क्या कोई घाव या अल्सर है जो ठीक नहीं हो रहा?",1)]},
hypertension:{en:[Q("Have you been previously diagnosed with high blood pressure?"),Q("Have you had a recent very high blood-pressure reading?",1),Q("Do you have a severe headache along with high blood pressure?",1),Q("Do you have chest pain or shortness of breath?",1),Q("Have you had sudden weakness, speech difficulty, or vision changes?",1),Q("Do you have swelling in your legs or feet?"),Q("Are you currently taking blood-pressure medication regularly?"),Q("Have you had dizziness or lightheadedness recently?")],
hi:[Q("क्या आपको पहले उच्च रक्तचाप होने की पुष्टि हुई है?"),Q("क्या हाल ही में बहुत अधिक ब्लड प्रेशर रीडिंग आई है?",1),Q("क्या हाई ब्लड प्रेशर के साथ तेज़ सिरदर्द है?",1),Q("क्या सीने में दर्द या सांस लेने में तकलीफ है?",1),Q("क्या अचानक कमजोरी, बोलने में दिक्कत या दिखने में बदलाव हुआ है?",1),Q("क्या पैरों या टखनों में सूजन है?"),Q("क्या आप नियमित रूप से ब्लड प्रेशर की दवा ले रहे हैं?"),Q("क्या हाल ही में चक्कर आना महसूस हुआ है?")]},
chestpain:{en:[Q("Are you currently having chest pain or pressure?",1),Q("Did the chest pain start suddenly?",1),Q("Does the pain spread to your arm, shoulder, jaw, or back?",1),Q("Do you have shortness of breath, sweating, or nausea with the pain?",1),Q("Is the pain worse with physical activity?"),Q("Does the pain change with breathing or body position?"),Q("Have you had similar chest pain before?"),Q("Is the pain severe or getting worse right now?",1)],
hi:[Q("क्या अभी आपके सीने में दर्द या दबाव महसूस हो रहा है?",1),Q("क्या सीने का दर्द अचानक शुरू हुआ?",1),Q("क्या दर्द बांह, कंधे, जबड़े या पीठ तक फैलता है?",1),Q("क्या दर्द के साथ सांस फूलना, पसीना या जी मिचलाना है?",1),Q("क्या शारीरिक गतिविधि करने पर दर्द बढ़ जाता है?"),Q("क्या सांस लेने या शरीर की स्थिति बदलने पर दर्द बदलता है?"),Q("क्या पहले भी ऐसा ही सीने में दर्द हुआ है?"),Q("क्या दर्द अभी गंभीर है या बढ़ रहा है?",1)]},
headache:{en:[Q("Are you currently having a headache?"),Q("Did the headache start suddenly and severely?",1),Q("Is this the worst headache of your life?",1),Q("Do you have fever or a stiff neck with the headache?",1),Q("Do you have vision changes, weakness, or difficulty speaking?",1),Q("Did the headache follow a head injury?",1),Q("Do you have nausea or vomiting with the headache?"),Q("Are you sensitive to light or sound during the headache?")],
hi:[Q("क्या अभी आपको सिरदर्द हो रहा है?"),Q("क्या सिरदर्द अचानक और बहुत तेज़ शुरू हुआ?",1),Q("क्या यह आपके जीवन का अब तक का सबसे तेज़ सिरदर्द है?",1),Q("क्या सिरदर्द के साथ बुखार या गर्दन में अकड़न है?",1),Q("क्या देखने में बदलाव, कमजोरी या बोलने में दिक्कत है?",1),Q("क्या यह सिरदर्द सिर में चोट लगने के बाद शुरू हुआ?",1),Q("क्या सिरदर्द के साथ जी मिचलाना या उल्टी है?"),Q("क्या सिरदर्द के दौरान रोशनी या आवाज़ से परेशानी होती है?")]},
abdominal:{en:[Q("Do you currently have abdominal (stomach) pain?"),Q("Did the pain start suddenly and severely?",1),Q("Is the pain concentrated in the lower right side of your abdomen?",1),Q("Do you have vomiting blood or black stools?",1),Q("Is your abdomen rigid, swollen, or very tender to touch?",1),Q("Do you have fever along with the abdominal pain?"),Q("Have you had nausea or vomiting?"),Q("Have you noticed any change in bowel habits?")],
hi:[Q("क्या अभी आपके पेट में दर्द है?"),Q("क्या दर्द अचानक और बहुत तेज़ शुरू हुआ?",1),Q("क्या दर्द पेट के निचले दाहिने हिस्से में केंद्रित है?",1),Q("क्या उल्टी में खून आ रहा है या मल काले रंग का है?",1),Q("क्या पेट अकड़ा हुआ, सूजा हुआ या छूने पर बहुत दर्दनाक है?",1),Q("क्या पेट दर्द के साथ बुखार है?"),Q("क्या जी मिचलाना या उल्टी हुई है?"),Q("क्या मल त्यागने की आदत में कोई बदलाव देखा है?")]},
skin:{en:[Q("Do you have a skin rash, itching, or allergic reaction currently?"),Q("Did the reaction start after eating, a medicine, or an insect bite?"),Q("Do you have swelling of the face, lips, or tongue?",1),Q("Do you have difficulty breathing or throat tightness?",1),Q("Is the rash spreading quickly?"),Q("Do you have blisters or open sores?"),Q("Have you had a similar reaction before?"),Q("Do you feel dizzy or faint along with the skin symptoms?",1)],
hi:[Q("क्या अभी त्वचा पर रैश, खुजली या एलर्जी जैसी प्रतिक्रिया है?"),Q("क्या यह प्रतिक्रिया किसी भोजन, दवा या कीड़े के काटने के बाद शुरू हुई?"),Q("क्या चेहरे, होंठों या जीभ में सूजन है?",1),Q("क्या सांस लेने में तकलीफ या गले में जकड़न है?",1),Q("क्या रैश तेज़ी से फैल रहा है?"),Q("क्या छाले या खुले घाव हैं?"),Q("क्या पहले भी ऐसी प्रतिक्रिया हुई है?"),Q("क्या त्वचा के लक्षणों के साथ चक्कर आना या बेहोशी जैसा महसूस हो रहा है?",1)]}
};

/* AYUSH — Dashavidha Pariksha structured assessment (constitutional, not emergency triage) */
const AYUSH_Q={
en:[Q("Do you generally have a lean body build with dry skin? (Prakriti — Vata traits)"),Q("Do you generally have a medium, muscular build with warm skin? (Prakriti — Pitta traits)"),Q("Do you generally have a heavier build with soft, oily skin? (Prakriti — Kapha traits)"),Q("Have you noticed a recent change in your usual body pattern or symptoms? (Vikriti — current imbalance)"),Q("Do you tire easily or have low physical stamina? (Sara — tissue strength)"),Q("Do you have a strong, well-proportioned body frame? (Samhanana — body compactness)"),Q("Is your body frame noticeably smaller or larger than average? (Pramana — body measurement)"),Q("Do certain foods or climates disagree with you more than others? (Satmya — suitability)"),Q("Do you find it hard to stay calm under stress? (Sattva — mental strength)"),Q("Is your digestive capacity currently weak, with bloating or poor appetite? (Ahara Shakti — digestive power)"),Q("Do you get exhausted quickly during physical exertion or exercise? (Vyayama Shakti — exercise capacity)"),Q("Have your diet and daily routine changed significantly in recent months? (Ahara-Vihara — diet & lifestyle)")],
hi:[Q("क्या आपका शरीर सामान्यतः दुबला और त्वचा शुष्क रहती है? (प्रकृति — वात लक्षण)"),Q("क्या आपका शरीर सामान्यतः मध्यम, मांसल और त्वचा गर्म रहती है? (प्रकृति — पित्त लक्षण)"),Q("क्या आपका शरीर सामान्यतः भारी और त्वचा मुलायम-तैलीय रहती है? (प्रकृति — कफ लक्षण)"),Q("क्या हाल ही में आपके सामान्य शारीरिक स्वभाव या लक्षणों में बदलाव देखा है? (विकृति)"),Q("क्या आप जल्दी थक जाते हैं या शारीरिक सहनशक्ति कम है? (सारा)"),Q("क्या आपका शरीर मजबूत और सुडौल ढांचे वाला है? (संहनन)"),Q("क्या आपका शरीर का आकार औसत से स्पष्ट रूप से छोटा या बड़ा है? (प्रमाण)"),Q("क्या कुछ खास भोजन या मौसम आपको दूसरों की तुलना में अधिक प्रभावित करते हैं? (सात्म्य)"),Q("क्या तनाव में शांत रहना आपके लिए मुश्किल होता है? (सत्व)"),Q("क्या वर्तमान में आपकी पाचन शक्ति कमजोर है, जैसे पेट फूलना या भूख कम लगना? (अग्नि)"),Q("क्या शारीरिक श्रम या व्यायाम करने पर आप जल्दी थक जाते हैं? (व्यायाम शक्ति)"),Q("क्या हाल के महीनों में आपके आहार-विहार में बड़ा बदलाव आया है?")]
};

const DANGER_KEYWORDS=['critical','abnormal','positive','high risk','severe','emergency','malignant'];

/* ================= STATE ================= */
let currentLang='en';
let currentUser=null;
let currentPatientPage='home', currentDoctorPage='home';
let voiceEnabled=true;
let quiz=null;
let lastConsultationId=null;
let main=null;
let consultations=[];
try{consultations=JSON.parse(localStorage.getItem('mk_consultations')||'[]');}catch(e){consultations=[];}
function saveConsultations(){localStorage.setItem('mk_consultations',JSON.stringify(consultations));}

function t(key){return (LANGS[currentLang]&&LANGS[currentLang][key])||LANGS.en[key]||key;}

/* ================= LOGIN / LOGOUT ================= */
function applyStaticLabels(){
 document.querySelectorAll('[data-i]').forEach(el=>{el.textContent=t(el.dataset.i);});
 document.getElementById('logoutBtn').textContent=t('logout');
 document.getElementById('roleLabel').textContent=t('role');
 document.getElementById('idLabel').textContent=t('userId');
 document.getElementById('pinLabel').textContent=t('pin');
 document.getElementById('loginBtn').textContent=t('sign');
 const roleSel=document.getElementById('role');
 roleSel.options[0].textContent=t('patient');roleSel.options[1].textContent=t('doctor');
}
function setLanguage(l){
 currentLang=l;
 applyStaticLabels();
 if(currentUser){
  if(currentUser.role==='patient')patientPage(currentPatientPage);
  else doctorPage(currentDoctorPage);
 }
}
function login(){
 const role=document.getElementById('role').value;
 const uid=document.getElementById('uid').value.trim();
 const pin=document.getElementById('pin').value.trim();
 if(!uid||!pin){alert(currentLang==='hi'?'कृपया यूज़र आईडी और पिन दर्ज करें':'Please enter User ID and PIN');return;}
 currentUser={uid:uid,role:role};
 document.getElementById('loginPage').classList.add('hidden');
 document.getElementById('logoutBtn').classList.remove('hidden');
 if(role==='patient'){
  document.getElementById('patientApp').classList.remove('hidden');
  document.getElementById('doctorApp').classList.add('hidden');
  patientPage('home');
 }else{
  document.getElementById('doctorApp').classList.remove('hidden');
  document.getElementById('patientApp').classList.add('hidden');
  doctorPage('home');
 }
}
function logout(){
 currentUser=null;quiz=null;
 document.getElementById('patientApp').classList.add('hidden');
 document.getElementById('doctorApp').classList.add('hidden');
 document.getElementById('loginPage').classList.remove('hidden');
 document.getElementById('logoutBtn').classList.add('hidden');
 document.getElementById('uid').value='';document.getElementById('pin').value='';
}

/* ================= PATIENT APP ================= */
function patientPage(page,btn){
 currentPatientPage=page;
 const btns=document.querySelectorAll('#patientApp .nav button');
 btns.forEach(b=>b.classList.remove('active'));
 const idxMap={home:0,general:1,ayush:2,reports:3,summary:4};
 if(btn)btn.classList.add('active'); else if(btns[idxMap[page]])btns[idxMap[page]].classList.add('active');
 main=document.getElementById('patientMain');
 quiz=null;
 if(page==='home')patientHome();
 else if(page==='general')patientGeneral();
 else if(page==='ayush')patientAyush();
 else if(page==='reports')patientReports();
 else if(page==='summary')patientSummary();
}
function toggleVoice(){voiceEnabled=!voiceEnabled;patientPage(currentPatientPage);}
function patientHome(){
 const mine=consultations.filter(c=>c.patientId===currentUser.uid);
 const last=mine[0];
 main.innerHTML=
  '<div class="page-head"><div><h1>'+t('welcome')+'</h1><p>'+t('choose')+'</p></div>'+
  '<button class="btn secondary" onclick="toggleVoice()">🔊 '+t('voice')+': '+(voiceEnabled?'ON':'OFF')+'</button></div>'+
  '<div class="grid">'+
   '<div class="card"><h3>'+t('general')+'</h3><p class="muted">'+t('diseaseNote')+'</p><button class="btn primary" onclick="patientPage(\'general\')">'+t('start')+'</button></div>'+
   '<div class="card"><h3>'+t('ayush')+'</h3><p class="muted">'+t('ayushIntro')+'</p><button class="btn primary" onclick="patientPage(\'ayush\')">'+t('start')+'</button></div>'+
   '<div class="card"><h3>'+t('latest')+'</h3>'+(last?('<span class="badge '+(last.redFlag?'red':'')+'">'+(last.redFlag?t('urgent'):t('complete'))+'</span><p class="muted">'+new Date(last.timestamp).toLocaleString()+'</p>'):('<p class="muted">'+t('noData')+'</p>'))+'</div>'+
  '</div>';
}
function patientGeneral(){
 let cards=Object.keys(DISEASE_META).map(k=>'<button class="disease" onclick="startQuiz(\'general\',\''+k+'\')">'+(DISEASE_META[k][currentLang]||DISEASE_META[k].en)+'</button>').join('');
 main.innerHTML='<div class="page-head"><div><h1>'+t('general')+'</h1><p>'+t('selectDisease')+'</p></div></div>'+
  '<p class="muted">'+t('diseaseNote')+'</p><div class="disease-list">'+cards+'</div>';
}
function patientAyush(){
 main.innerHTML='<div class="card"><h1>'+t('ayush')+'</h1><p class="muted">'+t('ayushIntro')+'</p>'+
 '<button class="btn primary" onclick="startQuiz(\'ayush\',\'ayush\')">'+t('start')+'</button></div>';
}
function patientReports(){
 const mine=consultations.filter(c=>c.patientId===currentUser.uid && c.reportFileName);
 let rows=mine.map(c=>'<div class="report-row"><div>'+c.reportFileName+'<div class="muted" style="font-size:12px">'+new Date(c.timestamp).toLocaleString()+'</div></div><span class="badge">'+c.diseaseName+'</span></div>').join('')||('<p class="muted">'+t('noData')+'</p>');
 main.innerHTML='<div class="page-head"><h1>'+t('reports')+'</h1></div><div class="card">'+rows+'</div>';
}
function patientSummary(){
 const mine=consultations.filter(c=>c.patientId===currentUser.uid);
 const last=(lastConsultationId&&mine.find(c=>c.id===lastConsultationId))||mine[0];
 if(!last){main.innerHTML='<div class="card"><p class="muted">'+t('noData')+'</p></div>';return;}
 let rows=last.answers.map(a=>'<tr><td>'+a.question+'</td><td><span class="badge '+(a.yes?'red':'')+'">'+a.answer+'</span></td></tr>').join('');
 main.innerHTML='<div class="card">'+
  (last.redFlag?('<div class="alert">'+t('urgent')+' — '+t('urgentNote')+'</div>'):'')+
  '<h1>'+t('summaryTitle')+'</h1><p class="muted">'+last.diseaseName+' · '+new Date(last.timestamp).toLocaleString()+'</p>'+
  '<table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>'+rows+'</tbody></table>'+
  (last.reportOCR?('<h3 style="margin-top:16px">'+(currentLang==='hi'?'रिपोर्ट टेक्स्ट':'Report Text')+'</h3><p class="muted" style="white-space:pre-wrap">'+last.reportOCR.slice(0,800)+'</p>'):'')+
  '<button class="btn primary" style="margin-top:16px" onclick="downloadPDF(\''+last.id+'\')">'+(currentLang==='hi'?'PDF डाउनलोड करें':'Download PDF')+'</button>'+
 '</div>';
}

/* ================= QUIZ ENGINE (shared by general + AYUSH) ================= */
function startQuiz(kind,diseaseKey){
 let qs;
 if(kind==='ayush'){qs=AYUSH_Q[currentLang]||AYUSH_Q.en;}
 else{const bank=QBANK[diseaseKey];qs=bank[currentLang]||bank.en;}
 quiz={kind:kind,diseaseKey:diseaseKey,questions:qs,idx:0,answers:[],reportHandled:false,reportOCR:null,reportFileName:null};
 renderQuizStep();
}
function renderQuizStep(){
 if(quiz.idx<quiz.questions.length)renderQuestion();
 else if(!quiz.reportHandled)renderReportStep();
 else renderReviewStep();
}
function renderQuestion(){
 const q=quiz.questions[quiz.idx];
 const total=quiz.questions.length;
 const pct=Math.round((quiz.idx/total)*100);
 main.innerHTML='<div class="question">'+
  '<div class="question-meta">'+t('qof').replace('{n}',quiz.idx+1).replace('{total}',total)+'</div>'+
  '<div class="progress"><div style="width:'+pct+'%"></div></div>'+
  '<h2 id="qtext">'+q.q+'</h2>'+
  '<div class="modebar"><button class="btn secondary" onclick="speakCurrent()">🔊 '+t('speak')+'</button>'+
  '<button class="btn secondary" onclick="listenForAnswer()">🎙 '+t('voice')+'</button></div>'+
  '<div class="voice-status" id="voiceStatus"></div>'+
  '<div class="answers"><button class="answer yes" onclick="answerQuiz(true)">'+t('yes')+'</button>'+
  '<button class="answer no" onclick="answerQuiz(false)">'+t('no')+'</button></div>'+
  (quiz.idx>0?('<button class="btn secondary" onclick="prevQuestion()">'+t('back')+'</button>'):'')+
 '</div>';
 if(voiceEnabled)speakCurrent();
}
function speakCurrent(){speak(quiz.questions[quiz.idx].q);}
function speak(text){
 if(!('speechSynthesis' in window))return;
 window.speechSynthesis.cancel();
 const u=new SpeechSynthesisUtterance(text);
 u.lang=LANG_CODE[currentLang]||'en-IN';
 window.speechSynthesis.speak(u);
}
function listenForAnswer(){
 const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
 const status=document.getElementById('voiceStatus');
 if(!SR){status.textContent=currentLang==='hi'?'इस ब्राउज़र में आवाज़ पहचान उपलब्ध नहीं है':'Voice recognition not supported in this browser';return;}
 const rec=new SR();rec.lang=LANG_CODE[currentLang]||'en-IN';rec.maxAlternatives=3;
 status.textContent=currentLang==='hi'?'सुन रहे हैं...':'Listening...';
 try{rec.start();}catch(e){}
 rec.onresult=function(e){
  const transcript=e.results[0][0].transcript.toLowerCase();
  const words=YESNO_WORDS[currentLang]||YESNO_WORDS.en;
  if(words.yes.some(w=>transcript.indexOf(w.toLowerCase())>-1)){status.textContent=t('yes');setTimeout(()=>answerQuiz(true),350);}
  else if(words.no.some(w=>transcript.indexOf(w.toLowerCase())>-1)){status.textContent=t('no');setTimeout(()=>answerQuiz(false),350);}
  else{status.textContent=(currentLang==='hi'?'समझ नहीं आया, कृपया टैप करें: ':'Could not understand, please tap: ')+transcript;}
 };
 rec.onerror=function(){status.textContent=currentLang==='hi'?'आवाज़ पहचानने में त्रुटि, कृपया टैप करें':'Voice recognition error, please tap instead';};
}
function answerQuiz(val){
 const q=quiz.questions[quiz.idx];
 quiz.answers[quiz.idx]={question:q.q,answer:val?t('yes'):t('no'),critical:!!q.critical,yes:val};
 quiz.idx++;
 renderQuizStep();
}
function prevQuestion(){if(quiz.idx>0){quiz.idx--;quiz.answers.pop();renderQuizStep();}}

function renderReportStep(){
 main.innerHTML='<div class="question"><h2>'+t('upload')+'</h2><p class="muted">'+t('reportNote')+'</p>'+
  '<input type="file" id="reportFile" accept="image/*,application/pdf" capture="environment" style="margin:20px auto;display:block;max-width:400px">'+
  '<div id="ocrStatus" class="voice-status"></div>'+
  '<div style="display:flex;gap:12px;justify-content:center;margin-top:20px">'+
  '<button class="btn secondary" onclick="skipReport()">'+(currentLang==='hi'?'रिपोर्ट छोड़ें':'Skip')+'</button>'+
  '<button class="btn primary" onclick="submitReport()">'+t('next')+'</button></div></div>';
}
function skipReport(){quiz.reportHandled=true;renderQuizStep();}
function submitReport(){
 const fileInput=document.getElementById('reportFile');
 const file=fileInput.files[0];
 if(!file){skipReport();return;}
 quiz.reportFileName=file.name;
 const status=document.getElementById('ocrStatus');
 if(file.type.startsWith('image/') && window.Tesseract){
  status.textContent=currentLang==='hi'?'रिपोर्ट पढ़ी जा रही है...':'Reading report...';
  Tesseract.recognize(file,'eng').then(function(result){
   quiz.reportOCR=result.data.text||'';
   quiz.reportHandled=true;
   renderQuizStep();
  }).catch(function(){quiz.reportHandled=true;renderQuizStep();});
 }else{
  quiz.reportHandled=true;renderQuizStep();
 }
}
function renderReviewStep(){
 const criticalYes=quiz.answers.some(a=>a.critical&&a.yes);
 const ocrDanger=quiz.reportOCR && DANGER_KEYWORDS.some(k=>quiz.reportOCR.toLowerCase().indexOf(k)>-1);
 quiz.redFlag=criticalYes||ocrDanger;
 let rows=quiz.answers.map(a=>'<tr><td>'+a.question+'</td><td><span class="badge '+(a.yes?'red':'')+'">'+a.answer+'</span></td></tr>').join('');
 const label=quiz.kind==='ayush'?t('ayush'):((DISEASE_META[quiz.diseaseKey]&&(DISEASE_META[quiz.diseaseKey][currentLang]||DISEASE_META[quiz.diseaseKey].en))||quiz.diseaseKey);
 main.innerHTML='<div class="card">'+
  (quiz.redFlag?('<div class="alert">'+t('urgent')+' — '+t('urgentNote')+'</div>'):'')+
  '<h2>'+t('summaryTitle')+'</h2><p class="muted">'+label+'</p>'+
  '<table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>'+rows+'</tbody></table>'+
  (quiz.reportOCR?('<h3 style="margin-top:20px">'+(currentLang==='hi'?'रिपोर्ट से निकाला गया टेक्स्ट':'Extracted Report Text')+'</h3><p class="muted" style="white-space:pre-wrap">'+quiz.reportOCR.slice(0,800)+'</p>'):'')+
  (quiz.reportFileName&&!quiz.reportOCR?('<p class="muted">'+(currentLang==='hi'?'संलग्न फ़ाइल: ':'Attached file: ')+quiz.reportFileName+'</p>'):'')+
  '<button class="btn primary" style="margin-top:18px" onclick="finalizeSubmit()">'+t('submit')+'</button>'+
 '</div>';
}
function finalizeSubmit(){
 const label=quiz.kind==='ayush'?'AYUSH Assessment':((DISEASE_META[quiz.diseaseKey]&&DISEASE_META[quiz.diseaseKey].en)||quiz.diseaseKey);
 const record={
  id:'C'+Date.now(),
  patientId:currentUser.uid,
  kind:quiz.kind,
  diseaseKey:quiz.diseaseKey,
  diseaseName:label,
  lang:currentLang,
  answers:quiz.answers,
  reportFileName:quiz.reportFileName,
  reportOCR:quiz.reportOCR,
  redFlag:!!quiz.redFlag,
  status:'pending',
  timestamp:new Date().toISOString()
 };
 consultations.unshift(record);
 saveConsultations();
 lastConsultationId=record.id;
 quiz=null;
 patientPage('summary');
}

/* ================= DOCTOR APP ================= */
function doctorPage(page,btn){
 currentDoctorPage=page;
 const btns=document.querySelectorAll('#doctorApp .nav button');
 btns.forEach(b=>b.classList.remove('active'));
 const idxMap={home:0,appointments:1,patients:2,consultations:3,reports:4};
 if(btn)btn.classList.add('active'); else if(btns[idxMap[page]])btns[idxMap[page]].classList.add('active');
 main=document.getElementById('doctorMain');
 if(page==='home')doctorQueue();
 else if(page==='appointments')doctorAppointments();
 else if(page==='patients')doctorPatients();
 else if(page==='consultations')doctorConsultations();
 else if(page==='reports')doctorReports();
}
function sortedQueue(){return consultations.slice().sort((a,b)=>(b.redFlag-a.redFlag)||(new Date(b.timestamp)-new Date(a.timestamp)));}
function doctorQueue(){
 const list=sortedQueue();
 let rows=list.map(c=>'<div class="report-row" style="cursor:pointer" onclick="doctorViewConsultation(\''+c.id+'\')">'+
  '<div><b>'+c.patientId+'</b> — '+c.diseaseName+'<div class="muted" style="font-size:12px">'+new Date(c.timestamp).toLocaleString()+'</div></div>'+
  '<div><span class="badge '+(c.redFlag?'red':'')+'">'+(c.redFlag?'⚠ High-Risk':'Routine')+'</span> <span class="badge">'+c.status+'</span></div></div>').join('')||'<p class="muted">No consultations yet.</p>';
 main.innerHTML='<div class="page-head"><h1>Doctor Queue</h1><p>High-risk cases are shown first.</p></div><div class="card">'+rows+'</div>';
}
function doctorAppointments(){
 const list=sortedQueue();
 let rows=list.map(c=>'<div class="report-row"><div><b>'+c.patientId+'</b> — '+c.diseaseName+
  '<div class="muted" style="font-size:12px">Token: '+c.id.slice(-5)+' · '+new Date(c.timestamp).toLocaleString()+'</div></div>'+
  '<select onchange="setStatus(\''+c.id+'\',this.value)">'+
  '<option value="pending"'+(c.status==='pending'?' selected':'')+'>Waiting</option>'+
  '<option value="inprogress"'+(c.status==='inprogress'?' selected':'')+'>In Progress</option>'+
  '<option value="done"'+(c.status==='done'?' selected':'')+'>Done</option></select></div>').join('')||'<p class="muted">No appointments yet.</p>';
 main.innerHTML='<div class="page-head"><h1>Appointments</h1></div><div class="card">'+rows+'</div>';
}
function setStatus(id,val){const c=consultations.find(x=>x.id===id);if(c){c.status=val;saveConsultations();}}
function doctorPatients(){
 const ids=Array.from(new Set(consultations.map(c=>c.patientId)));
 let rows=ids.map(function(id){
  const mine=consultations.filter(c=>c.patientId===id);
  const last=mine[0];
  return '<div class="report-row" style="cursor:pointer" onclick="doctorPatientHistory(\''+id+'\')"><div><b>'+id+'</b><div class="muted" style="font-size:12px">'+mine.length+' visit(s) · last: '+new Date(last.timestamp).toLocaleDateString()+'</div></div>'+(mine.some(c=>c.redFlag)?'<span class="badge red">⚠</span>':'')+'</div>';
 }).join('')||'<p class="muted">No patients yet.</p>';
 main.innerHTML='<div class="page-head"><h1>Patients</h1></div><div class="card">'+rows+'</div>';
}
function doctorPatientHistory(id){
 const mine=consultations.filter(c=>c.patientId===id);
 let rows=mine.map(c=>'<div class="report-row" style="cursor:pointer" onclick="doctorViewConsultation(\''+c.id+'\')"><div>'+c.diseaseName+'<div class="muted" style="font-size:12px">'+new Date(c.timestamp).toLocaleString()+'</div></div><span class="badge '+(c.redFlag?'red':'')+'">'+c.status+'</span></div>').join('');
 main.innerHTML='<div class="page-head"><h1>'+id+' — History</h1><button class="btn secondary" onclick="doctorPage(\'patients\')">'+t('back')+'</button></div><div class="card">'+rows+'</div>';
}
function doctorConsultations(){
 let rows=consultations.map(c=>'<div class="report-row" style="cursor:pointer" onclick="doctorViewConsultation(\''+c.id+'\')"><div><b>'+c.patientId+'</b> — '+c.diseaseName+' <span class="muted" style="font-size:12px">('+c.kind+')</span></div><span class="badge '+(c.redFlag?'red':'')+'">'+c.status+'</span></div>').join('')||'<p class="muted">No consultations yet.</p>';
 main.innerHTML='<div class="page-head"><h1>Consultations</h1></div><div class="card">'+rows+'</div>';
}
function doctorReports(){
 const withReports=consultations.filter(c=>c.reportFileName);
 let rows=withReports.map(c=>'<div class="report-row" style="cursor:pointer" onclick="doctorViewConsultation(\''+c.id+'\')"><div>'+c.reportFileName+'<div class="muted" style="font-size:12px">'+c.patientId+' · '+new Date(c.timestamp).toLocaleString()+'</div></div>'+(c.reportOCR?'<span class="badge">OCR done</span>':'<span class="badge">No OCR</span>')+'</div>').join('')||'<p class="muted">No reports uploaded yet.</p>';
 main.innerHTML='<div class="page-head"><h1>Reports</h1></div><div class="card">'+rows+'</div>';
}
function doctorViewConsultation(id){
 const c=consultations.find(x=>x.id===id);
 if(!c)return;
 let rows=c.answers.map(a=>'<tr><td>'+a.question+'</td><td><span class="badge '+(a.yes?'red':'')+'">'+a.answer+'</span></td></tr>').join('');
 main.innerHTML='<div class="card">'+
  (c.redFlag?'<div class="alert">⚠ High-Risk Symptoms Detected — Please prioritize this patient.</div>':'')+
  '<div class="page-head"><h1>'+c.patientId+' — '+c.diseaseName+'</h1><button class="btn secondary" onclick="doctorPage(\''+currentDoctorPage+'\')">'+t('back')+'</button></div>'+
  '<p class="muted">'+new Date(c.timestamp).toLocaleString()+' · '+(c.kind==='ayush'?'AYUSH':'General')+' · Language: '+c.lang+'</p>'+
  '<table><thead><tr><th>Question</th><th>Answer</th></tr></thead><tbody>'+rows+'</tbody></table>'+
  (c.reportOCR?('<h3 style="margin-top:16px">Extracted Report Text</h3><p class="muted" style="white-space:pre-wrap">'+c.reportOCR+'</p>'):(c.reportFileName?'<p class="muted">Attached file: '+c.reportFileName+'</p>':''))+
  '<div style="display:flex;gap:10px;margin-top:18px">'+
  '<button class="btn primary" onclick="downloadPDF(\''+c.id+'\')">Download PDF</button>'+
  '<button class="btn secondary" onclick="setStatus(\''+c.id+'\',\'done\');doctorViewConsultation(\''+c.id+'\')">Mark Reviewed</button></div></div>';
}

/* ================= PDF GENERATION ================= */
function downloadPDF(id){
 const c=consultations.find(x=>x.id===id);
 if(!c||!window.jspdf){alert('PDF library not loaded — check internet connection.');return;}
 const jsPDF=window.jspdf.jsPDF;
 const doc=new jsPDF();
 let y=15;
 doc.setFontSize(16);doc.text('MediKiosk — Consultation Summary',15,y);y+=10;
 doc.setFontSize(11);
 doc.text('Patient ID: '+c.patientId,15,y);y+=7;
 doc.text('Type: '+c.diseaseName,15,y);y+=7;
 doc.text('Date: '+new Date(c.timestamp).toLocaleString(),15,y);y+=7;
 if(c.redFlag){doc.setTextColor(185,28,28);doc.text('HIGH-RISK SYMPTOMS DETECTED — Immediate review recommended',15,y);doc.setTextColor(0,0,0);y+=10;}else{y+=3;}
 c.answers.forEach(function(a){
  if(y>265){doc.addPage();y=15;}
  const qLines=doc.splitTextToSize('Q: '+a.question,180);
  doc.text(qLines,15,y);y+=qLines.length*6;
  doc.text('A: '+a.answer,20,y);y+=8;
 });
 if(c.reportOCR){
  if(y>240){doc.addPage();y=15;}
  doc.text('Extracted Report Text:',15,y);y+=7;
  const lines=doc.splitTextToSize(c.reportOCR.slice(0,1500),180);
  doc.text(lines,15,y);
 }
 doc.save('MediKiosk_'+c.patientId+'_'+c.id+'.pdf');
}

/* ================= INIT ================= */
applyStaticLabels();
