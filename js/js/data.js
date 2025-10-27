// English with AI Bayan V4 — FULL DATA (Variant A: cards, EN-only)
// 10 sections × 12 items, A1–A2, with answers for auto-check.

window.BAYAN = {
  phonetics: {
    title: "Phonetics",
    items: [
      {title:"Short vowels 1", audio:"a e i o u: cat, pen, sit, dog, sun.",
       task:{type:"tf", prompt:"The vowel in 'cat' is short.", options:["True","False"], answer:"True"}},
      {title:"Short vowels 2", audio:"short i as in 'fish', short e as in 'bed'.",
       task:{type:"fill", prompt:"Write the short vowel word: f__sh", answer:"fish"}},
      {title:"Long vowels", audio:"A in name, E in tree, I in ride, O in home, U in cube.",
       task:{type:"tf", prompt:"'name' has a long A.", options:["True","False"], answer:"True"}},
      {title:"Diphthongs 1", audio:"/eɪ/ rain, train; /aɪ/ time, five; /ɔɪ/ boy, toy.",
       task:{type:"fill", prompt:"Write a /eɪ/ word from audio:", answer:"rain"}},
      {title:"Diphthongs 2", audio:"/aʊ/ house; /əʊ/ go; /ɪə/ ear; /eə/ hair; /ʊə/ tour.",
       task:{type:"tf", prompt:"'go' contains /əʊ/.", options:["True","False"], answer:"True"}},
      {title:"Silent letters: kn-", audio:"knife, knee, knock (do not say k).",
       task:{type:"fill", prompt:"Silent letter in 'knife': ____", answer:"k"}},
      {title:"Silent letters: wr-", audio:"write, wrong, wrist (do not say w).",
       task:{type:"fill", prompt:"Silent letter in 'write': ____", answer:"w"}},
      {title:"Silent letters: -mb", audio:"lamb, dumb, thumb (do not say b).",
       task:{type:"fill", prompt:"Silent letters at the end of 'thumb': ____", answer:"mb"}},
      {title:"Silent letters: -gh", audio:"night, though (gh is silent).",
       task:{type:"tf", prompt:"'night' pronounces gh.", options:["True","False"], answer:"False"}},
      {title:"Silent E", audio:"make, ride, note: final e is silent but makes vowel long.",
       task:{type:"fill", prompt:"Silent letter in 'make': ____", answer:"e"}},
      {title:"Stress & rhythm", audio:"TAble, reLAX, baNAna. Listen to the stress.",
       task:{type:"tf", prompt:"Stress in 'banana' is on NA.", options:["True","False"], answer:"True"}},
      {title:"Review", audio:"Repeat: vowels, diphthongs, silent letters, stress.",
       task:{type:"fill", prompt:"Write the word with silent k: ____", answer:"knife"}},
    ]
  } 
};  
  grammar: {
    title: "Grammar",
    items: [
      {title:"To be (am/is/are)", rule:"Use am/is/are with subject.",
       audio:"I am, you are, he is, she is, we are, they are.",
       task:{type:"fill", prompt:"I ___ happy.", answer:"am"}},
      {title:"Have got / Has got", rule:"have got with I/you/we/they; has got with he/she/it.",
       audio:"I have got a cat. She has got a bike.",
       task:{type:"fill", prompt:"She ___ a bike.", answer:"has got"}},
      {title:"Present Simple", rule:"V1 (he/she/it + s).",
       audio:"I play. He plays. They read.",
       task:{type:"fill", prompt:"He ___ football on Sunday.", answer:"plays"}},
      {title:"Present Continuous", rule:"am/is/are + V-ing",
       audio:"I am reading. She is cooking.",
       task:{type:"fill", prompt:"They are ___ (play) now.", answer:"playing"}},
      {title:"Past Simple", rule:"V2 (regular -ed; irregular forms).",
       audio:"Yesterday I went to school.",
       task:{type:"fill", prompt:"Yesterday we ___ (go) to the park.", answer:"went"}},
      {title:"There is / There are", rule:"There is (singular), There are (plural).",
       audio:"There is a book. There are two books.",
       task:{type:"tf", prompt:"There are a book.", options:["True","False"], answer:"False"}},
      {title:"Articles a/an/the", rule:"a/an for first mention; the for specific.",
       audio:"a cat, an apple, the sun.",
       task:{type:"fill", prompt:"___ apple", answer:"an"}},
      {title:"Prepositions of place", rule:"in, on, under, next to, behind, in front of.",
       audio:"The cat is on the table.",
       task:{type:"fill", prompt:"The cat is ___ the table.", answer:"on"}},
      {title:"Plural nouns", rule:"-s/-es; some irregular (children, mice).",
       audio:"one book, two books; one bus, two buses.",
       task:{type:"fill", prompt:"One child, two ____.", answer:"children"}},
      {title:"Comparatives & superlatives", rule:"tall–taller–the tallest; good–better–the best.",
       audio:"My house is bigger than yours.",
       task:{type:"fill", prompt:"good → ____ (comparative)", answer:"better"}},
      {title:"Can / Can't", rule:"can for ability, can't for inability.",
       audio:"I can swim. She can’t drive.",
       task:{type:"tf", prompt:"'can' shows ability.", options:["True","False"], answer:"True"}},
      {title:"Question words", rule:"what/where/when/why/how",
       audio:"Where do you live? What is your name?",
       task:{type:"fill", prompt:"___ do you live?", answer:"Where"}},
    ]
  },

  reading: {
    title: "Reading",
    items: [
      {title:"My Family", text:"My name is Amina. I am nine. I live with my mother, father and brother. We like to cook and play board games in the evening.",
       task:{type:"tf6",
         pairs:[
          ["Amina is nine.", true],
          ["She lives alone.", false],
          ["They cook together.", true],
          ["They hate games.", false],
          ["They play in the evening.", true],
          ["She has a sister.", false]
         ]}},
      {title:"At School", text:"Our school is friendly. My classroom is bright and clean. We read, draw and do projects. I like my teacher.",
       task:{type:"tf6", pairs:[["School is friendly.", true],["Classroom is dark.", false],["They draw pictures.", true],["They never read.", false],["They do projects.", true],["Student likes the teacher.", true]]}},
      {title:"My Pet", text:"I have a small dog named Coco. He is playful and kind. We run in the park every morning and he loves to catch a ball.",
       task:{type:"tf6", pairs:[["Coco is a cat.", false],["Coco is playful.", true],["They run in the park.", true],["They run at night.", false],["He loves a ball.", true],["Dog is big.", false]]}},
      {title:"My House", text:"Our house is cozy. There is a small garden with flowers. We have a kitchen, a living room and two bedrooms.",
       task:{type:"tf6", pairs:[["House is cozy.", true],["No garden.", false],["There are flowers.", true],["There are ten bedrooms.", false],["They have a living room.", true],["They have a kitchen.", true]]}},
      {title:"My Friends", text:"I have many friends in my class. We study together and help each other. On weekends we ride bikes.",
       task:{type:"tf6", pairs:[["Friends are in class.", true],["They never help.", false],["They ride bikes.", true],["They ride on Monday morning.", false],["They study together.", true],["There are no friends.", false]]}},
      {title:"My Day", text:"I wake up at seven. I wash my face, have breakfast and go to school. After school I read and play with my friends.",
       task:{type:"tf6", pairs:[["Wake up at seven.", true],["No breakfast.", false],["Goes to school.", true],["Reads after school.", true],["Plays with friends.", true],["Sleeps all day.", false]]}},
      {title:"Seasons", text:"Spring is warm and green. Summer is hot and sunny. Autumn is cool and windy. Winter is cold and snowy.",
       task:{type:"tf6", pairs:[["Summer is hot.", true],["Winter is hot.", false],["Autumn is windy.", true],["Spring is green.", true],["All seasons are the same.", false],["Winter is snowy.", true]]}},
      {title:"Food and Drinks", text:"I like apples and rice. I drink water and tea. My family cooks soup on Sundays.",
       task:{type:"tf6", pairs:[["They like apples.", true],["They never drink.", false],["They drink tea.", true],["They cook soup on Sundays.", true],["They hate rice.", false],["They love water.", true]]}},
      {title:"Clothes", text:"In winter I wear a coat, a scarf and warm boots. In summer I wear a T-shirt and shorts.",
       task:{type:"tf6", pairs:[["Winter: coat.", true],["Winter: shorts.", false],["Summer: T-shirt.", true],["Summer: boots.", false],["Scarf in winter.", true],["No clothes in summer.", false]]}},
      {title:"Hobbies", text:"I like music and painting. I play the piano in the evening and paint on Saturdays.",
       task:{type:"tf6", pairs:[["Likes music.", true],["Paints on Saturdays.", true],["Plays piano in morning.", false],["Hates painting.", false],["Evening piano.", true],["No hobbies.", false]]}},
      {title:"In the City", text:"There is a park, a bank and a bus station near my house. I go to the library with my friend.",
       task:{type:"tf6", pairs:[["There is a park.", true],["No bus station.", false],["There is a bank.", true],["Goes to the library.", true],["Park is far away.", false],["Lives in the city.", true]]}},
      {title:"Holidays", text:"On holidays we travel to the mountains. We walk, take photos and drink hot tea. The air is fresh and clean.",
       task:{type:"tf6", pairs:[["They travel to mountains.", true],["They never walk.", false],["They take photos.", true],["They drink hot tea.", true],["Air is dirty.", false],["They enjoy holidays.", true]]}},
    ]
  },

  writing: {
    title: "Writing / Dictation",
    items: Array.from({length:12}).map((_,i)=>({
      title:`Dictation ${i+1}`,
      audio:`Listen and write: This is dictation number ${i+1}. Please write clearly and check your spelling.`,
      lines:[
        "Listen carefully to each sentence.",
        "Write every word correctly.",
        "Use capital letters and full stops.",
        "Check your spelling at the end.",
        "Read your text again.",
        "Great job!"
      ]
    }))
  },

  speaking: {
    title: "Speaking",
    items: [
      {title:"My Family", audio:"Let's talk about your family.", dialog:[
        ["AI Bayan","Hello! What is your name?"],
        ["Student","My name is ..."],
        ["AI Bayan","How old are you?"],
        ["Student","I am ... years old."],
        ["AI Bayan","Who is in your family?"],
        ["Student","..."]
      ], questions:["What is your name?","How old are you?","Who is in your family?","Do you have a pet?","What do you like to do?","When do you play with your family?"]},
      {title:"At School", audio:"Let's talk about school.", dialog:[["AI Bayan","Do you like school?"],["Student","Yes, I do."]], questions:["What is your favourite subject?","Who is your teacher?","What do you do at break?","How do you go to school?","What time do classes start?","Do you have homework?"]},
      {title:"My Pet", audio:"Let's talk about your pet.", dialog:[["AI Bayan","Do you have a pet?"],["Student","Yes / No"]], questions:["What is its name?","What does it look like?","What does it eat?","When do you play?","Where do you walk it?","Why do you love it?"]},
      {title:"My House", audio:"Let's talk about your house.", dialog:[["AI Bayan","Where do you live?"],["Student","I live in ..."]], questions:["How many rooms are there?","What is your favourite room?","What is near your house?","Do you have a garden?","Where do you study?","Where do you sleep?"]},
      {title:"My Friends", audio:"Let's talk about friends.", dialog:[["AI Bayan","Who is your best friend?"],["Student","..."]], questions:["What is your friend's name?","How old is your friend?","What do you do together?","When do you meet?","Where do you play?","Why do you like your friend?"]},
      {title:"My Day", audio:"Let's talk about your day.", dialog:[["AI Bayan","What time do you wake up?"],["Student","I wake up at ..."]], questions:["When do you have breakfast?","How do you go to school?","What do you do after school?","When do you do homework?","What time do you sleep?","What do you do on weekends?"]},
      {title:"Seasons", audio:"Let's talk about seasons.", dialog:[["AI Bayan","What is your favourite season?"],["Student","..."]], questions:["Why do you like it?","What is the weather like?","What clothes do you wear?","What do you do outside?","What do you eat or drink?","Where do you go?"]},
      {title:"Food and Drinks", audio:"Let's talk about food.", dialog:[["AI Bayan","What food do you like?"],["Student","I like ..."]], questions:["What do you eat for breakfast?","Do you like fruit?","What do you drink?","What is healthy food?","What is your favourite dish?","Do you help cook?"]},
      {title:"Clothes", audio:"Let's talk about clothes.", dialog:[["AI Bayan","What do you wear in winter?"],["Student","..."]], questions:["What do you wear in summer?","What is your favourite colour?","Do you wear uniform?","What shoes do you like?","Do you have a hat?","Who buys your clothes?"]},
      {title:"Hobbies", audio:"Let's talk about hobbies.", dialog:[["AI Bayan","What is your hobby?"],["Student","..."]], questions:["When do you do it?","Where do you do it?","Who do you do it with?","What do you need for it?","Why do you like it?","How often do you do it?"]},
      {title:"In the City", audio:"Let's talk about the city.", dialog:[["AI Bayan","Where do you go in the city?"],["Student","..."]], questions:["Do you visit the library?","How do you travel?","Do you like the park?","What buildings do you know?","Where do you meet friends?","Is your city big or small?"]},
      {title:"Holidays", audio:"Let's talk about holidays.", dialog:[["AI Bayan","Where do you go on holidays?"],["Student","..."]], questions:["Who do you go with?","What do you see?","What do you eat?","What do you buy?","Do you take photos?","What is your favourite moment?"]},
    ]
  },

  listening: {
    title: "Listening",
    items: [
      ...["My Family","At School","My Pet","My House","My Friends","My Day","Seasons","Food and Drinks","Clothes","Hobbies","In the City","Holidays"].map(topic=>({
        title: topic,
        audio: `Please listen. This short story is about ${topic.toLowerCase()}. It is simple and friendly. Children can repeat the sentences.`,
        lines: [
          `Today we talk about ${topic.toLowerCase()}.`,
          "Please listen to the story.",
          "It has short sentences.",
          "The main character is happy.",
          "They meet friends and family.",
          "They walk and talk together.",
          "They eat fruit and drink water.",
          "They play games after school.",
          "They read books in the evening.",
          "Thank you for listening."
        ],
        cloze: [
          {prompt:"Good ___, students.", answer:"morning"},
          {prompt:"Please ___ to the story.", answer:"listen"},
          {prompt:"The main character is ___.", answer:"happy"},
          {prompt:"They ___ games after school.", answer:"play"},
          {prompt:"They ___ books in the evening.", answer:"read"},
          {prompt:"Thank you for ___.", answer:"listening"},
        ]
      }))
    ]
  },

  irregular: {
    title: "Irregular Verbs",
    items: [
      ["be","was/were","been"],["begin","began","begun"],["bring","brought","brought"],
      ["build","built","built"],["buy","bought","bought"],["catch","caught","caught"],
      ["come","came","come"],["cut","cut","cut"],["do","did","done"],["drink","drank","drunk"],
      ["drive","drove","driven"],["eat","ate","eaten"],["fall","fell","fallen"],["feel","felt","felt"],
      ["find","found","found"],["fly","flew","flown"],["forget","forgot","forgotten"],["get","got","got/gotten"],
      ["give","gave","given"],["go","went","gone"],["have","had","had"],["hear","heard","heard"],
      ["keep","kept","kept"],["know","knew","known"],["learn","learned/learnt","learned/learnt"],
      ["leave","left","left"],["let","let","let"],["lose","lost","lost"],["make","made","made"],
      ["meet","met","met"],["pay","paid","paid"],["put","put","put"],["read","read","read"],
      ["run","ran","run"],["say","said","said"],["see","saw","seen"],["sell","sold","sold"],
      ["send","sent","sent"],["sit","sat","sat"],["sleep","slept","slept"],["speak","spoke","spoken"],
      ["spend","spent","spent"],["stand","stood","stood"],["take","took","taken"],["teach","taught","taught"],
      ["tell","told","told"],["think","thought","thought"],["understand","understood","understood"],
      ["wear","wore","worn"],["write","wrote","written"]
    ]
  },

  time: {
    title: "Time",
    items: [
      {title:"O'clock", audio:"It is twelve o'clock.", task:{type:"fill", prompt:"12:00 → ________", answer:"twelve o'clock"}},
      {title:"Half past", audio:"It is half past nine.", task:{type:"fill", prompt:"09:30 → ____________", answer:"half past nine"}},
      {title:"Quarter to", audio:"It is quarter to twelve.", task:{type:"fill", prompt:"11:45 → ____________", answer:"quarter to twelve"}},
      {title:"Quarter past", audio:"It is quarter past four.", task:{type:"fill", prompt:"04:15 → ____________", answer:"quarter past four"}},
      {title:"Twenty past", audio:"It is twenty past six.", task:{type:"fill", prompt:"06:20 → ____________", answer:"twenty past six"}},
      {title:"Twenty-five past", audio:"It is twenty-five past six.", task:{type:"fill", prompt:"06:25 → ____________", answer:"twenty-five past six"}},
      {title:"Twenty to", audio:"It is twenty to eight.", task:{type:"fill", prompt:"07:40 → ____________", answer:"twenty to eight"}},
      {title:"Five to", audio:"It is five to three.", task:{type:"fill", prompt:"02:55 → ____________", answer:"five to three"}},
      {title:"Five past", audio:"It is five past three.", task:{type:"fill", prompt:"03:05 → ____________", answer:"five past three"}},
      {title:"Ten to", audio:"It is ten to nine.", task:{type:"fill", prompt:"08:50 → ____________", answer:"ten to nine"}},
      {title:"Ten past", audio:"It is ten past nine.", task:{type:"fill", prompt:"09:10 → ____________", answer:"ten past nine"}},
      {title:"Review", audio:"Tell the time quickly.", task:{type:"tf", prompt:"11:30 is 'half past eleven'.", options:["True","False"], answer:"True"}},
    ]
  },

  vocabulary: {
    title: "Dictionary",
    items: [
      {title:"School", words:["book","pen","pencil","desk","chair","teacher","student","board","class","bag"]},
      {title:"Family", words:["mother","father","sister","brother","grandma","grandpa","family","baby","aunt","uncle"]},
      {title:"Animals", words:["cat","dog","bird","fish","cow","horse","tiger","lion","bear","fox"]},
      {title:"Food", words:["apple","bread","milk","cheese","egg","rice","soup","salad","chicken","tea"]},
      {title:"Clothes", words:["shirt","dress","skirt","shoes","coat","hat","pants","socks","jacket","scarf"]},
      {title:"House", words:["room","bed","table","sofa","window","door","kitchen","bathroom","lamp","floor"]},
      {title:"City", words:["street","shop","park","school","bus","car","train","hotel","bank","market"]},
      {title:"Hobbies", words:["music","dance","draw","read","swim","run","cook","play","travel","photo"]},
      {title:"Weather", words:["sun","rain","snow","wind","cloud","storm","hot","cold","warm","cool"]},
      {title:"Nature", words:["tree","flower","river","mountain","lake","sea","stone","leaf","grass","sand"]},
      {title:"Jobs", words:["doctor","nurse","teacher","driver","farmer","cook","pilot","police","firefighter","builder"]},
      {title:"Colors", words:["red","blue","green","yellow","black","white","orange","pink","purple","brown"]},
    ]
  },

  numbers: {
    title: "Numbers & Dates",
    items: [
      {title:"Numbers 1–10", audio:"one two three four five six seven eight nine ten", task:{type:"fill", prompt:"Write number 7 in words:", answer:"seven"}},
      {title:"Numbers 11–20", audio:"eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty", task:{type:"fill", prompt:"Write number 12 in words:", answer:"twelve"}},
      {title:"Tens 30–100", audio:"thirty forty fifty sixty seventy eighty ninety one hundred", task:{type:"fill", prompt:"Write 40 in words:", answer:"forty"}},
      {title:"Days", audio:"Monday Tuesday Wednesday Thursday Friday Saturday Sunday", task:{type:"fill", prompt:"Write the first day:", answer:"Monday"}},
      {title:"Months 1", audio:"January February March April May June", task:{type:"fill", prompt:"Write the 3rd month:", answer:"March"}},
      {title:"Months 2", audio:"July August September October November December", task:{type:"fill", prompt:"Write the 10th month:", answer:"October"}},
      {title:"Dates 1", audio:"March 21st", task:{type:"fill", prompt:"Write: March 21st", answer:"March 21st"}},
      {title:"Dates 2", audio:"October 5th", task:{type:"fill", prompt:"Write: October 5th", answer:"October 5th"}},
      {title:"Ordinal numbers", audio:"first second third fourth fifth", task:{type:"fill", prompt:"Write 2nd in words:", answer:"second"}},
      {title:"Big numbers", audio:"one hundred, two hundred, three hundred", task:{type:"tf", prompt:"Two hundred = 200.", options:["True","False"], answer:"True"}},
      {title:"Date sentence", audio:"Today is Monday, May 6th.", task:{type:"fill", prompt:"Write the day in the sentence:", answer:"Monday"}},
      {title:"Review", audio:"Say the date and the number quickly.", task:{type:"fill", prompt:"Write 90 in words:", answer:"ninety"}},
    ]
  }
};

