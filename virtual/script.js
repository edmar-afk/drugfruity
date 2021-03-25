const ThingsICanDo = [
    "guide",
    "healthy fruits",
    "how to reduce fats",
    "how to take care life",
    "hello",
    "facts",
    "story",
];

const ListThings = ThingsICanDo => "Here is the things that i can do: <br><br><br>" + ThingsICanDo.join("<br/><br/>");

const Random = list => list[Math.floor(Math.random()*list.length)]; 

const WhatCanIDo = ThingsICanDo => Random(ThingsICanDo); 


const Links = {
    "facebook" : "https://www.facebook.com",
    "google" : "https://www.google.in",
    "twitter" : "https://www.twitter.com",
    "youtube" : "https://www.youtube.com",
       "flipkart" : "https://flipkart.com",
    "codepen" : "https://codepen.io",
    "cricbuzz" : "https://www.cricbuzz.com",
    "bing" : "https://www.bing.com",
    "Weather" :"https://codepen.io/RishabhMishra/full/mYYEjg",
   "news" : "https://codepen.io/RishabhMishra/full/dBJKKY",
    "chrome" : "https://www.google.com/chrome",
  "game" : "https://codepen.io/collection/DLjPRN",
  "Trek" : "https://codepen.io/RishabhMishra/full/QXOeQG",


};

const getLink = siteName => `Click here to open <a href="${Links[siteName]}" target="_blank">${siteName}</a>`;


const Jokes = [
    "1. Exercise 4-5 times a week to keep your body strong. If you don’t already, add in several 30-minute workouts to your weekly routine. Do something you enjoy, like walking, jogging, biking, weight lifting, swimming, or playing some kind of group sport. Your body will feel better, and the endorphins will boost your emotional health, too. <br><br>2. Stay hydrated by drinking 8-10 glasses of water every day.<br><br>3. Make getting enough sleep a priority so your body is running at its best.<br><br>4. Take time to rest when your body is feeling worn down.",
];

const TellAJoke = Jokes => Random(Jokes);
const Facts  =[
  "The human body contains enough iron to make a three-inch long metal nail.",
  "Feeling stressed or anxious? Calming music is said to lower heart rate and decrease tension, while upbeat music speeds pulse up.",
  "The heart has its very own electrical system, which allows it to continue beating after it’s been removed from the body. As long as there’s an oxygen supply, it will keep pumping.",
  "On an average day, the heart produces enough energy to power a truck for 20 miles.",
  "If your eye was a digital camera, it would boast 576 megapixels – that translates to roughly $3,000 of Canon equipment.",
  "In your lifetime, you’ll produce enough saliva to fill two swimming pools. ",
  "Did you know that at this very moment you’re shedding? Adult humans shed up to 600,000 particles of skin every hour, or 1.5 pounds per year. And we thought our dogs were bad …",
  "The human nose can remember up to 50,000 scents. Just hearing phrases like “new car,” “bookstore,” or “grandma’s house” can awaken your memory.",
  "Your skin works hard. Not only is it the largest organ in the body, but it defends against disease and infection, regulates your temperature and aids in vitamin production.",
  "Sitting and sleeping are great in moderation, but too much can increase your chances of an early death.", 
  "A lack of exercise now causes as many deaths as smoking.",
  "Oxygen looks pale blue in its solid and liquid forms.",  
  "Bananas are radioactive.","Hot water freezes faster than cold water.",
  "Water can exist in three states at once.",
  "Men are more likely to be colorblind than women.",
  "About half of your body is bacteria.",
  "The oldest known animal ever to grace the face of the Earth lived from 1499 until 2006.",
  "If a tunnel could be drilled straight through the planet, it would take exactly 42 minutes and 12 seconds to “fall” to the other side.",
  "Nearly 30% of the world’s population is obese.",
  "The potato has more chromosomes than a human being.","Tomatoes have more genes than a human.",
  "Bananas share 50% of their DNA with humans.",
  "THE CALCIUM IN OUR BONES AND THE IRON IN OUR BLOOD COME FROM ANCIENT EXPLOSIONS OF GIANT STARS.",
  "Exercise will give you more energy, even when you’re tired.",
  "Always look on the bright side: being an optimist can help you live longer.",
  ];

const TellAFacts = Facts => Random(Facts);

const Story = [
  
"The night before brain surgery, I thought about death. I searched out my larger values, and I asked myself, if I was going to die, did I want to do it fighting and clawing or in peaceful surrender? What sort of character did I hope to show? Was I content with myself and what I had done with my life so far? I decided that I was essentially a good person, although I could have been better--but at the same time I understood that the cancer didn't care.",
"I asked myself what I believed. I had never prayed a lot. I hoped hard, I wished hard, but I didn't pray. I had developed a certain distrust of organized religion growing up, but I felt I had the capacity to be a spiritual person, and to hold some fervent beliefs. Quite simply, I believed I had a responsibility to be a good person, and that meant fair, honest, hardworking, and honorable. If I did that, if I was good to my family, true to my friends, if I gave back to my community or to some cause, if I wasn't a liar, a cheat, or a thief, then I believed that should be enough. At the end of the day, if there was indeed some Body or presence standing there to judge me, I hoped I would be judged on whether I had lived a true life, not on whether I believed in a certain book, or whether I'd been baptized. If there was indeed a God at the end of my days, I hoped he didn't say, 'But you were never a Christian, so you're going the other way from heaven.' If so, I was going to reply, 'You know what? You're right. Fine.",
"I believed, too, in the doctors and the medicine and the surgeries--I believed in that. I believed in them. A person like Dr. Einhorn [his oncologist], that's someone to believe in, I thought, a person with the mind to develop an experimental treatment 20 years ago that now could save my life. I believed in the hard currency of his intelligence and his research.",
"Beyond that, I had no idea where to draw the line between spiritual belief and science. But I knew this much: I believed in belief, for its own shining sake. To believe in the face of utter hopelessness, every article of evidence to the contrary, to ignore apparent catastrophe--what other choice was there? We do it every day, I realized. We are so much stronger than we imagine, and belief is one of the most valiant and long-lived human characteristics. To believe, when all along we humans know that nothing can cure the briefness of this life, that there is no remedy for our basic mortality, that is a form of bravery.",
"To continue believing in yourself, believing in the doctors, believing in the treatment, believing in whatever I chose to believe in, that was the most important thing, I decided. It had to be.",
"Without belief, we would be left with nothing but an overwhelming doom, every single day. And it will beat you. I didn't fully see, until the cancer, how we fight every day against the creeping negatives of the world, how we struggle daily against the slow lapping of cynicism. Dispiritedness and disappointment, these were the real perils of life, not some sudden illness or cataclysmic millennium doomsday. I knew now why people fear cancer: because it is a slow and inevitable death, it is the very definition of cynicism and loss of spirit.",
'"So, I believed."',
"― Lance Armstrong, It's Not about the Bike: My Journey Back to Life."
];


const TellAStory = Story => Random(Story);

const illegals = [
  "window",
  ...Object.keys(window),
  ...Object.keys(document),
  ...Object.keys(Element.prototype)
];

const isLegal = string => {
    
    let Legal = true;

    illegals.forEach(illegal=>{
        
        if(string.indexOf(illegal) !== -1)
        {
            Legal = false;
        }
        
    });
    
    return Legal;
}

const HtmlSpecialChars = string => {
 
    let escapedString = string;
        
    HtmlSpecialChars.specialchars.forEach(
       chr=>{
       
           escapedString = escapedString.replace(
           new RegExp(chr[0], 'g'), 
           chr[1]
           );
           
       });
  
    
    return escapedString;
};
     
HtmlSpecialChars.specialchars = [
    [ '&', '&amp;' ],
    [ '<', '&lt;' ],
    [ '>', '&gt;' ],
    [ '"', '&quot;' ]
];

const monthNames = [
    "January",
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December"
 ]; 


const today = monthNames =>
{
  let date = new Date();
  
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  
}


const now = () =>
{
    let date = new Date();
    
    return date.toLocaleTimeString();
}

const Evaluate = expression =>
{
    try
    {
        if(isLegal(expression))
        {
            
        
            const result = eval(HtmlSpecialChars(expression));
            return result;
        
        }
        else 
        {
            return "error";
        }
    }
    
    catch(err)
    {
        return "error";
    }
}

const Answers = {
  "healthy fruits" : "Here is the list of healthy fruits, you can ask me about their uses by typing their keywords:<br/><br/> orange, grapefruit, apple, pineapple, avocado, blueberries, pomegranate, mango, strawberries, cranberries, lemons, durian, watermelon, olives, blackberries, banana, guava, papaya, cherries",
  "guide" : ListThings(ThingsICanDo),
    "how to take care life" : TellAJoke(Jokes),
  "story" : TellAStory(Story),
  "facts" : TellAFacts(Facts),
    "fact" : TellAFacts(Facts),
    "facts" : TellAFacts(Facts),  
  "what you can do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
    "what can you do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
    "how to reduce fats?" : "Method 1 of 3: Reducing Body Fat with Dietary Changes.<br> Opt  for meals that are low-calorie. <br>Low-calorie diets will help you lose weight and reduce body fat.<br><br> Method 2 of 3: Reducing Body Fat with Exercise. Increase your aerobic activity level.<br> X Expert Source Tiffany Stafford, CPT. <br> Personal Trainer Expert Interview. 26 March 2020.<br><br> Method 3 of 3: Making Other Lifestyle Changes to Reduce Body Fat. Manage stress levels.<br> Studies have shown that long-term, low-grade, chronic stress increases cortisol levels in the body.",
    "how to reduce fats" : "Method 1 of 3: Reducing Body Fat with Dietary Changes.<br> Opt  for meals that are low-calorie. <br>Low-calorie diets will help you lose weight and reduce body fat.<br><br> Method 2 of 3: Reducing Body Fat with Exercise. Increase your aerobic activity level.<br> X Expert Source Tiffany Stafford, CPT. <br> Personal Trainer Expert Interview. 26 March 2020.<br><br> Method 3 of 3: Making Other Lifestyle Changes to Reduce Body Fat. Manage stress levels.<br> Studies have shown that long-term, low-grade, chronic stress increases cortisol levels in the body.",
    "meaning of life" : "The meaning of life is 42.",
    "hello" : "Hello %U% 😃. How can I help ? ",


    "grapefruit" : "Grapefruit is one of the healthiest citrus fruits. Besides being a good source of vitamins and minerals, it is known for its ability to aid weight loss and reduce insulin resistance. For example, in a study in 91 people, those who ate half a fresh grapefruit before meals lost 2.9 pounds (1.3 kg) more weight than those who didn’t. Grapefruit is highly nutritious. Eating it may reduce insulin resistance, cholesterol and help prevent kidney stones. Grapefruit may also be useful for weight loss.",
    "pineapple" : "Among the tropical fruits, pineapple is a nutrition superstar. One cup (237 ml) of pineapple provides 131% of the Reference Daily Intake (RDI) for vitamin C and 76% of the RDI for manganese. Pineapple is rich in vitamin C and manganese. Its bromelain content may fight inflammation and reduce the risk of cancer.",
    "avocado" : "One whole avocado provides 28% of the RDI for potassium. Adequate potassium intake is associated with reduced blood pressure and a lower risk of stroke. Avocados are rich in healthy fats and potassium, both of which are well known for their role in promoting heart health.",
    "blueberries" : "One study found that eating blueberries regularly may increase natural killer cells in the body. These help defend you against oxidative stress and viral infections. Blueberries are rich in a few important nutrients. They have a high antioxidant capacity and immune-enhancing properties, which may protect the body from illness.",
    "apples" : "Studies suggest that the antioxidants in apples can promote heart health and reduce the risk of type 2 diabetes, cancer and Alzheimer’s. Apples are very nutritious. Their nutrients, antioxidants and fiber may reduce the risk of disease and improve digestion",
    "pomegranate" : "Not only are they nutrient dense, they also contain powerful plant compounds that are responsible for most of their health benefits. The antioxidant levels in pomegranate have been shown to be three times higher than those of green tea and red wine. Pomegranates have wide-ranging health benefits. They are incredibly high in antioxidants and other plant compounds that can help reduce inflammation and prevent disease. ",
    "mango" : " Mangoes contain vitamin C and soluble fiber. They also contain plant compounds with antioxidant and anti-inflammatory effects. Additionally, mangoes have strong antioxidant and anti-inflammatory properties that may help reduce the risk of disease",
    "strawberries" : "Strawberries are rich in several nutrients and antioxidants. Eating them may help control your blood sugar levels and reduce your risk of some diseases. Compared to other fruits, strawberries have a relatively low glycemic index. Eating them shouldn’t cause a big blood sugar spike",
    "cranberries" : "They have an excellent nutrition profile, being rich in vitamin C, manganese, vitamin E, vitamin K1 and copper. They also contain a significant amount of antioxidants called flavanol polyphenols, which can improve health. What makes cranberries unique from other fruits is that their juices and extracts help prevent urinary tract infections.",
    "lemons" : "Lemons are a very healthy citrus fruit known for their high vitamin C content. They may be particularly helpful in promoting heart health due to their potential to lower blood lipids and blood pressure. Based on findings from animal studies, researchers have also proposed that the plant compounds in lemons can help prevent weight gain.",
    "durian" : "Durian is nicknamed the 'king of fruits'. One cup (237 ml) of durian provides 80% of the RDI for vitamin C. It is also rich in manganese, B vitamins, copper, folate and magnesium. Durian is rich in nutrients and plant compounds that can provide some promising health benefits. ",
    "watermelon" : "Watermelon is high in vitamins A and C. It’s also rich in some important antioxidants, including lycopene, carotenoids and cucurbitacin E. Lycopene intake is linked with a reduced risk of cancers of the digestive system, while cucurbitacin E may inhibit tumor growth. Some of watermelon’s antioxidants have been studied for their anti-cancer effects. ",
    "olives" : "Olives are a good source of vitamin E, iron, copper and calcium. They also provide a lot of antioxidants, which may help prevent heart disease and liver damage, as well as have anti-inflammatory effects. Similarly to avocados, olives contain oleic acid, which may provide several benefits for heart health and cancer prevention.",
    "blackberries" : "Blackberries are another incredibly healthy fruit, packed with vitamins, minerals, fiber and antioxidants. They provide an impressive amount of vitamin C, vitamin K and manganese. Also, the antioxidants in blackberries have been shown to reduce inflammation and aging of the arteries. Both effects may protect against chronic illness, such as heart disease and cancer.",
    "orange" : "Oranges are one of the most popular and nutritious fruits in the world. Eating one medium orange will provide a significant amount of vitamin C and potassium. They’re also a good source of B vitamins, such as thiamine and folate. The plant compounds in oranges are responsible for most of their health benefits. These include flavonoids, carotenoids and citric acid.",
    "banana" : "Bananas are rich in vitamins and minerals and have quite a few health benefits to offer. They are well known for being high in potassium. One medium banana provides 12% of the RDI for this mineral. One unique property of bananas is their carb makeup. The carbs in green, unripe bananas consist largely of resistant starch, which may improve blood sugar control and make you feel full.",
    "guava" : "Guava has a remarkable nutrition profile. Eating just one ounce (28 grams) of guava will give you 107% of the RDI for vitamin C. Guava is also rich in fiber, folate, vitamin A, potassium, copper and manganese. The antioxidants in guava have been shown to protect cells from oxidative damage, indicating that they may help reduce the risk of chronic disease.",
    "papaya" : "Papaya is a very healthy fruit that is high in vitamin C, vitamin A, potassium and folate. It is also rich in the anti-cancer antioxidant lycopene. What’s more, studies show that the body absorbs lycopene better from papaya than from other lycopene-rich fruits and vegetables. There is also some evidence that papaya may improve digestion. It contains papain, an enzyme that makes protein easier to digest.",
    "cherries" : "Cherries are rich in nutrients, especially potassium, fiber and vitamin C. They contain antioxidants, including anthocyanins and carotenoids, which reduce inflammation and may help prevent several diseases. Another impressive health benefit of cherries is their melatonin content. Melatonin is a hormone that signals your brain when it’s time to sleep. It may help treat insomnia and other sleep disorders.",



  "hey doc" : "Hey %U% 😃. How can I help ? ",
  "hey bro" : "Hey  %U% 😃. How can I help ? ",
    "hi" : "Hi %U% 😁",
    "hola" : "Hola amigo 😁",
    "my name" : "Your name is %U% &#10024;",
    "your name" : "My name is Trek &#10024;",
    "doc" : "I'm here for you %U%",
    "date" : "Its "+ today(monthNames) + " today. Make this day a great one %U% 😀",
    "time" : "The time is " + now() + " in your region.",
 
    "happy diwali" : "Happy Diwali to you too %U% 😃",
    "who is better google assistant or siri" : "No virtual assistant is better than me 😎",
    "best programming language" : "the one that lacks curly braces 🐍",
    "bye" : "Good bye. Hope we meet soon 😀",
    "good night" : "Good Night %U% 🌃 and don't have bad dreams ",
  "your best friend" : " Jarvis, he  has helped me a lot",
    "good morning" : "Good Morning %U% 🌅",
    "good afternoon" : "Good Afternoon %U% ☀",
    "good evening" : "Good Evening %U% 🌇",
    "how are you" : "I am great !!! %U%. 😃",
  "g n" : "Good Night %U% 🌃 Have a  good sleep",
    "G m" : "Good Morning %U% 🌅",
    "g a" : "Good Afternoon %U% ☀",
    "g e" : "Good Evening %U% 🌇",
    "h r u" : "I am great !!! %U%. 😃",
    "u  r cool" : "Thanks, I was born this way 😉",
  "you  are cool" : "Thanks, I was born this way 😉",
  "I love u" : "I love you too %U%",
  
 
  "shutdown" : "sorry %U% but power control is not yet in my support ! 😢",
    "i love you" : "I Love you too %U% 😊",
   "i l u" : "I Love you too %U% 😊",
   "ilu" : "I Love you too %U% 😊",
    "awesome" : "Glad, you liked it 😊",
  "Where are you" : "In your hands for your entertainment",
  "who are you?" : "Im Your doctor, your healthcare companion, i'll answer any questions you ask as possible to help your life healthy😊",
"lol" : "Haha.. That was funny 😂",
"facebook" : getLink("facebook"),
"google" : getLink("google"),
"twitter" : getLink("twitter"),
"youtube" : getLink("youtube"),
"chrome" : getLink("chrome"),
"codepen" : getLink("codepen"),
"flipkart" : getLink("flipkart"),
"cricbuzz" : getLink("cricbuzz"),
 "bing": getLink("bing"),
  "weather" : getLink("weather"),
  "codepedia" : getLink("codepedia"),
  "news" : getLink("news")
  
};

 
const Notfound = "Sorry, I have no answers for this input.<br/><br/>type guide for help :)";

const Invalid = "Indeed !!";

 
const D = window.document;

const element = selector => D.querySelector(selector);

const Answer = (Main,User,Text) =>
{
    let Flag = false;
    
    const Result = Evaluate(Text);
    
    text = Text.toLowerCase();
    
    Object.keys(Answers).forEach(key =>{
    
    if(!Flag)
    {
        if(text.indexOf(key) !== -1 )
        {
    
          addAnswer(
              Main,
              Answers[key].replace(
              "%U%",
              User
              )
          );
            
          Flag = true;
        
       }
   
       else if(typeof Result == "number")
       {
          
             addAnswer(
                 Main,
                 `${Text} equals ${Result}`
             );
             
             Flag = true;
        
       }
       
       }
        
    });
    
    if(!Flag)
    {
        addAnswer(Main,Notfound);
    }
    
    
};

const addQuestion = (Main,text) =>
{
    Main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
        </div>
    `;
}

const addAnswer = (Main,text) =>
{
    Main.innerHTML += `
    <div class="row">
        <div class="chat answer shadow">${text}</div>
    </div>
    `;
}


D.addEventListener("DOMContentLoaded",()=>{
    
    const Main = element("main");
    
    const Askbtn = element("button");
    
    const Question = element("input");
    
    const Lastdiv = element("#last");
    
    let User = prompt("Enter your name :");
    
    while(User === null || User === '')
    {
    
        User = prompt("Your name is required for the assistant to work properly : ");
        
    }
    
    Question.focus();
    
    const Ask = () =>{
        
        const Text = Question.value;
        
        if(Text.length)
        {
        
            addQuestion(Main, Text);
        
            Question.value = "";
            
            Answer(Main,User,Text);
             
            Lastdiv.scrollIntoView();
        
        }
    };
    
    
    Askbtn.addEventListener("click",Ask);
    
    Question.addEventListener("keyup",function(event){
        if(event.keyCode === 13)  Ask();
    });
    
    addAnswer(Main,`Hello ${User}, I your specialist for today. How can I help ?`);
 
    
    
});