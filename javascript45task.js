console.log("javascript 45 task done By akhlaque channa");

//task no: 02:

 let personName = "Akhlaque channa";
 console.log(
   "Hello " + personName + ",  would you like to learn some javascript today ?"
 );

 // task no: 03:

 let userName = "Akhlaque channa";

console.log(userName.toLowerCase);
console.log(userName.toUpperCase);
console.log(userName.split(" ").map((word) => {
    return word[0].toUpperCase() + word.slice(1);
    })
    .join(" "));
     
// task no : 04:
console.log(
    'Nelson Mandela once said, "The greatest glory in living lies not in never falling, but in rising every time we fall."'
  );

// task no: 05:

let famous_person = "Nelson Mandela";
let message =
  famous_person + ' The greatest glory in living lies not in never falling, but in rising every time we fall.';

console.log(message);

// task no: 06:

let personName1 = "  \t akhlaque Channa   \n";
console.log(personName1);
console.log(personName1.trim());

// task no: 07:

console.log(6 + 2);
console.log(12 - 4);
console.log(4 * 2);
console.log(64 / 8);

// task no: 08:
console.log(1 + 7);
console.log(14 - 6);
console.log(4 * 2);
console.log(40 / 5);

// task no: 09:
let favoriteNumber = '14'
let message1 = "My favourite number is " + favoriteNumber

console.log(message1);

// task no: 10:
// 1.
let personName2 = "Akhlaque Channa"; 
console.log(
  "Hello " + personName2 + ",  would you like to learn some javascript today ?" 
);
// 2.
let personNameForSplit = "  \t Akhlaque Channa  \n";
console.log(personNameForSplit);    
console.log(personNameForSplit.trim());

// task no: 11:
let namesFriends = ["Owais hasan", "zuhair", "Kashif khan", "Hamza", "Asif"];
namesFriends.forEach((namesFriends) => {
  console.log(namesFriends);
});

// task no: 12:
let namesFriend1 = ["Owais hasan", "zuhair", "Kashif khan", "Hamza", "Asif"];
 namesFriend1.forEach(namesFriends1 => {
    console.log(`Hy ${namesFriends1}, How are your bro ?`);
 })

 // task no: 13:

 let modeOfsports = ['plane', 'sportscar', 'bike']
let brandOfTransports = ["F-16", "Tesla", "kawasaki"]

for (let i = 0; i < modeOfsports.length; i++) {
    console.log("I would love to own " + brandOfTransports[i] + " " + modeOfsports[i] );
}

// task no: 14:
let GuessToInvite = ["Zuhair", "owais", "hamza"];
GuessToInvite.forEach(name => {
    console.log(`Hy ${name}, I really love to ask you for a dinner tonight..??`);
})

// task no: 15:
let GuessToInvite1 = ["Zuhair", "owais", "hamza"];

console.log("hamza is not like to dinner with us");

GuessToInvite1[GuessToInvite1.indexOf("hamza")] = "Kashif Khan";

GuessToInvite1.forEach((name) => {
  console.log(
    `Hy ${name}, I really love to ask you for a dinner tonight..??`
  );
});

// task no: 16:

let GuessToInvite2 = ["Zuhair", "owais", "hamza"];

console.log("I decided to make Big dinner party.....");

GuessToInvite2.unshift("Hamza")
GuessToInvite2.push("Naqqash")
GuessToInvite2.splice(GuessToInvite2.length / 2, 0, "Asif")

GuessToInvite2.forEach((name) => {
    console.log(
      `Hy ${name}, I really love to ask you for a dinner tonight..??`
    );
  });

  // task no: 17:

  let GuessToInvite3 = [
    "Zuhair",
    "owais",
    "hamza",
    "kashif khan",
    "naqqash",
    "Asif"
  ];
  
  console.log(
    "Sorry, i can afford only two people for diiner bro"
  );
  
  for (let i = GuessToInvite3.length - 1; i >= 2; i--) {
    console.log(GuessToInvite3[i] + ", Sorry You are not invited");
    GuessToInvite3.pop();
  }
  GuessToInvite3.map((name) => {
    console.log(name + " You are invited");
  });
  console.log(GuessToInvite3.splice(2));

  // task no: 18:

  let placeForVisit = ["Naraan", "azad kashmir", "dubai", "makka", "madina"]
let copyOfArray = [...placeForVisit] 


console.log(placeForVisit);

console.log(copyOfArray.sort());
console.log(placeForVisit);

console.log(copyOfArray.reverse());
console.log(placeForVisit);

console.log(placeForVisit.reverse());

console.log(placeForVisit.reverse());

console.log(placeForVisit.sort());
console.log(placeForVisit.reverse());

// task no: 19:
let GuessToInvite4 = [
    "owais",
    "zuhair",
    "kashif khan",
    "hamza",
    "naqqash",
    "Asif",
  ];
  
  console.log("invited " + GuessToInvite4.length + " peoples to dinner.");

  // task no: 20:
  let countries = []

const addToContry = (...list) => {
    countries.push(...list)
}

addToContry("Russia", "dubai", "Japan")

console.log(countries);

// task no: 21:

const carData = new Object()

const addCarData = (array) => {
  array.forEach((element, index) => {
    carData[index] = element
  });
}

addCarData(["Red", "2002", "sedan"])
console.log(carData);

// task no: 22:

let pakProvince = ["Punjab", "Sindh", "Balochistan"];

console.log(pakProvince[5]); 
console.log(pakProvince[0]);

// task no: 23:

let firstName = "Akhlaque Channa"
let firstNum = 20
let secondNum = 40

console.log("If firstName == 'Imran'? I Predict True.");
console.log("If firstNum == secondNum? I Predict False.");
console.log("If firstNum > secondNum? I Predict False.");
console.log("If firstNum < secondNum? I Predict True.");
console.log("If firstNum != secondNum? I Predict True.");
console.log("If firstName == 'Akbar'? I Predict False.");
console.log("If firstName == secondNum? I Predict False.");
console.log("If firstNum >= secondNum? I Predict False.");
console.log("If firstNum <= secondNum? I Predict True.");
console.log("If firstNum == 20? I Predict True.");

console.log(firstName == "Akhlaque Channa");
console.log(firstNum == secondNum);
console.log(firstNum > secondNum);
console.log(firstNum < secondNum);
console.log(firstNum != secondNum);
console.log(firstName == "Hanif Channa");
console.log(firstName == secondNum);
console.log(firstNum >= secondNum);
console.log(firstNum <= secondNum);
console.log(firstNum == 20);


// task no: 24:

console.log('If "Akhlaque" == "Akhlaque"? I predict True');
console.log("Akhlaque" == "Akhlaque");

console.log('If "Akhlaque" == "hanif"? I predict false');
console.log("Akhlaque" == "hanif");

console.log('If 5 == 9? I predict false');
console.log(5 == 9);

console.log('If 143 == 143? I predict True');
console.log(143 == 143);

console.log('If 14 > 32? I predict false');
console.log(14 > 32);

console.log('If 18 < 46? I predict True');
console.log(18 < 46);

console.log('If 3 >= 80? I predict false');
console.log(3 >= 80);

console.log('If 89 <= 120? I predict True');
console.log(89 <= 120);

console.log('If 55 <= 55? I predict True');
console.log(55 <= 55);

console.log('If "Hamza" == "Hamza" && 90 > 12? I predict True');
console.log("Hamza" == "Hamza" && 90 > 12);

console.log('If "Hamza" == "Hamza" && 90 < 12? I predict False');
console.log("Hamza" == "Hamza" && 90 < 12);

console.log('If "Hamza" == "zuhair" || 90 > 12? I predict True');
console.log("Hamza" == "zuhair" || 90 > 12);

console.log('If "Hamza" == "zuhair" || 90 < 12? I predict False');
console.log("Hamza" == "zuhair" || 90 < 12);

console.log('If [88, 90, 12].includes(12)? I predict True');
console.log([88, 90, 12].includes(12));

console.log('If [88, 90, 12].includes(65)? I predict False');
console.log([88, 90, 12].includes(65));

// task no: 25:

let alienColor = "Red";

if (alienColor == "Red") {
  console.log("You just earned 5 points");
}

if (alienColor != "Red") {
  console.log("failed");
}

// task no: 26:
let alienColor1 = "green";

if (alienColor1 == "green") {
  console.log("You just earned 5 points");
} else {
  console.log("You just earned 10 points");
}


// task no: 27:

let alienColor2 = "green";

if (alienColor2 == "green") {
  console.log("You just earned 5 points");
} else if (alienColor2 == "yellow") {
  console.log("You just earned 10 points");
} else if (alienColor2 == "red") {
    console.log("You just earned 15 points");
}



alienColor3 = "red";

if (alienColor3 == "green") {
  console.log("You just earned 5 points");
} else if (alienColor3 == "yellow") {
  console.log("You just earned 10 points");
} else if (alienColor3 == "red") {
    console.log("You just earned 15 points");
}



alienColor4 = "yellow";

if (alienColor4 == "green") {
  console.log("You just earned 5 points");
} else if (alienColor4 == "yellow") {
  console.log("You just earned 10 points");
} else if (alienColor4 == "red") {
    console.log("You just earned 15 points");
}


// task no: 28:

let age = 18;

if (age < 2) {
  console.log("The person age is a baby");
} else if (age >= 2 && age < 4) {
  console.log("The person age is a Toddler");
} else if (age >= 4 && age < 13) {
  console.log("The person age is a kid");
} else if (age >= 13 && age < 20) {
  console.log("The person age is a teenager");
} else if (age >= 20 && age < 65) {
  console.log("The person age is a adult");
} else if (age >= 65) {
  console.log("The person age is a elder");
}


// task no: 29:

let favoriteFruitsList = ["mango", "apple", "Oranges"];

if (favoriteFruitsList.includes("mango")) {
  console.log("I really like mangoes");
}
if (favoriteFruitsList.includes("apple")) {
  console.log("I really like apples");
}
if (favoriteFruitsList.includes("Oranges")) {
  console.log("I really like Oranges");
}
if (favoriteFruitsList.includes("strawberry")) {
  console.log("I really like strawberries");
}
if (favoriteFruitsList.includes("Pineapple")) {
  console.log("I really like Pineapple");
}

// task no: 30:

let usernames5 = ["admin", "leader", "user", "customer", "online"];

usernames5.map((name1) => {
  if (name1 == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${name1}, thank you for logging in again`);
  }
});


// task no: 31:


let username = ['user1', 'luser2', 'user3']

if (username.length == 0) {
  console.log("We need to find some users");
}

username = []

if (username.length == 0) {
  console.log("We need to find some users");
}

// task no: 32:

let currentUsers = ["admin", "leader", "user", "customer", "online"];
let newUsers = ["Leader", "soldier", "king", "online", "servant"];

newUsers.map((user) => {
  if (currentUsers.includes(user.toLowerCase())) {
    console.log(user + ", username is not available please choose another");
  } else {
    console.log(user + ", username is available");
  }
});


// task no: 33:

let toOrdiNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

toOrdiNumbers.map((num) => {
  if (num == 1) {
    console.log("1st");
  } else if (num == 2) {
    console.log("2nd");
  } else if (num == 3) {
    console.log("3rd");
  } else {
    console.log(num + "th");
  }
});

// task no: 34:


let pizzaNameList = ['perimax',"fajitamax","behari boti"]

for (const pizza of pizzaNameList) {
    console.log("I like " + pizza + " pizza");
}

console.log("I really like " + pizzaNameList[0] + " pizza");
console.log("I mostly like " + pizzaNameList[2] + " pizza");
console.log("I sometimes like " + pizzaNameList[3] + " pizza");

// task no: 35:

let animals = ["cat", "dog", "cheetah"];

for (const animal of animals) {
  console.log("A " + animals + " would make a great pet");
}

console.log("Cat has four legs");
console.log("Dog has four legs");
console.log("parrot has four legs");

// task no: 36:

const makeShirt = (size, message) => {
    console.log("The shirt size is " + size + " an the message to print on is " + message);
}

makeShirt(44, "Akhlaque Channa")

// task no: 37:

const makeShirt1 = (size = "large", message = "I love Javascript") => {
    if (size == "large" || size == "medium") {
      console.log(
        "The shirt size is " + size + " and the message to print on is " + message
      );
    } else {
      console.log(
        "The shirt size is " + size + " and the message to print on is " + message
      );
    }
  };
  
  makeShirt1();
  makeShirt1("medium");
  makeShirt1("small", "Check My Worth");

// task no: 38:

function CitiesName(name, countryName = "Pakistan") {
    console.log(name + " is in " + countryName);
  }
  
  CitiesName("karachi");
  CitiesName("lahore");
  CitiesName("Quetta");

  // task no: 39:

  function cityCountry1(cityName, countryName) {
    console.log(`"${cityName}, ${countryName}"`);
  }
  
  cityCountry1("Islamabad", "Pakistan");


  // task no: 40:

  const makeAlbum = (artistName, albumTitle, numOfTracks = 0) => {
    return {
        'Artist Name': artistName,
        'Album Title': albumTitle,
        'Number Of Tracks': numOfTracks
    }
}

console.log(makeAlbum('Shehzad Roy', 'kangna', 5));
console.log(makeAlbum('Shehzad Roy', 'yaad', 7));
console.log(makeAlbum('Shehzad Roy', 'Aag', 10));
console.log(makeAlbum('Shehzad Roy', 'Teri soorat', 5));

// task no: 41:


let magicians = ["akhlaque", "owais", "hamza"];

const showMagicians = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

showMagicians(magicians);

// task no: 42:

let magicians1 = ["akhlaque", "owais", "hamza"];

const makeGreat = (array) => {
    array.map((name) => {
    magicians1[magicians1.indexOf(name)] = "Great " + name;
  });
  console.log(array);
};

makeGreat(magicians1);

// task no: 43:

let magicians3 = ["akhlaque", "owais", "hamza"];
let magiciansCopy = [...magicians3];

const showMagicians1 = (array) => {
  array.map((name) => {
    console.log(name);
  });
};

const makeGreat1 = (array) => {
  array.map((name) => {
    array[array.indexOf(name)] = "Great " + name;
  });
  return array;
};

let newArray = makeGreat1(magiciansCopy);
showMagicians1(magicians3);
showMagicians1(newArray);

// task no: 44:

function itemsOnSandwich(array) {
    console.log(
      "The person demond items on the sandwich: "
    );
    array.map((item, index) => {
      console.log(`${index}) ${item}`);
    });
  }
  
  itemsOnSandwich(["Tomatoes", "Ketchup"]);
  itemsOnSandwich(["Tomatoes", "Mayonese", "Carrot"]);
  itemsOnSandwich(["Tomatoes", "Ketchup", "Cucumber", "Maynoese"]);


// task no: 45:

const carInformation = (manufacturer, model, ...information) => {
    let lastObject = Object.assign(information[0], information[1]);
    return {
      Manufacturer: manufacturer,
      "Model Number": model,
      ...lastObject,
    };
  };
  
  console.log(
    carInformation("BMW", "Model X", { Color: "Red" }, { Rims: "Steel" })
  );