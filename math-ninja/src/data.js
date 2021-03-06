export class User {
    constructor(username) {
        this.username = username;
        this.currentLevel = 0;
        this.currentBelt = 0;
        this.currentScore = 0;
        this.currentWrong = 0;
    }



    // saveUserData = (belt, level, score, wrong) => {
    //     this.currentBelt = belt;
    //     this.currentLevel = level;
    //     this.currentScore = score;
    //     this.currentWrong = wrong;
    //     console.log("Saving user data");
    //     localStorage.saveData = JSON.stringify(this.User);
    //   }
    //   resetUserData= () => {
    //     localStorage.clear();
    //   }
 }

export const BELTS = [
    {color: "white", hex: "#ffffff"},
    {color: "gold", hex: "#ffd700"},
    {color: "green", hex: "#008000"},
    {color: "purple", hex: "#800080"},
    {color: "blue", hex: "#0000ff"},
    {color: "red", hex: "#ff0000"},
    {color: "brown", hex: "#a52a2a"},
    {color: "black", hex: "#000000"}
  ];

  export const LEVEL = [
    "Beginner",
    "Novice",
    "Intermediate",
    "Expert"
  ];


  export const dojo = [
    {level: LEVEL[0],
     belt: BELTS,
     min: 1,
    max: 10,
    operators: ["+"]
    },
    {
        level: LEVEL[1],
        belt: BELTS,
       min: 1,
       max: 10,
       operators: ["-"] 
    },
    {
        level: LEVEL[2],
        belt: BELTS,
       min: 10,
       max: 20,
       operators: ["+"] 
    },
    {
        level: LEVEL[3],
        belt: BELTS,
       min: 10,
       max: 20,
       operators: ["-"] 
    }
  ];
  