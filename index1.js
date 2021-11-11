class Formula_Division {
    constructor(formula, user) {
      this.formula = formula;
      this.user = user;
    }
}
class Skill_Rating {
    constructor(pace, reflexes, team_chemistry, skill, defense, wet_rain){
        this.pace = pace;
        this.refl = reflexes;
        this.team_c = team_chemistry;
        this.skill = skill;
        this.defe = defense;
        this.wet_rain = wet_rain;
        this.rating_sum;
    }
    overall_rating (){
        this.rating_sum = this.pace + this.refl + this.team_c + this.skill + this.defe + this.wet_rain;
        this.overall_r = rating_sum / 6;
        return this.overall_r;
    }
}
class Driver extends Skill_Rating {
    constructor(pace, reflexes, team_chemistry, skill, defense, wet_rain, name, age, team, nationality, height, weight, image, chat) {
        super(pace, reflexes, team_chemistry, skill, defense, wet_rain);
        this.name = name;
        this.age = age;
        this.team = team;
        this.nationality = nationality;
        this.height = height;
        this.weight = weight;
        this.image = image;
        this.chat = chat;
    }
}

class Driver_name {
    constructor(driver_name){
        this.driver_name = driver_name;
    }
}
//class for specific driver event and year of said event, to ba able to make arrays with Series_record to create table of results with totals.
class Driver_record extends Driver_name {
    constructor(driver_name, year, series){
        super(driver_name)
        this.year = year;
        this.series = series;
    }

}
// Class for a single competition results
class Series_Record extends Driver_record {
    constructor(appearances, wins, poles, fastest_laps, podiums, points, standings){
        this.appearances = appearances;
        this.wins = wins;
        this.poles = poles;
        this.fastest_laps = fastest_laps;
        this.podiums = podiums;
        this.points = points;
        this.standings = standings;
    }

}
//User login class to get and set username for sing in, database, and forgot password/username.
class User_info {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    set usrn(value){
        if(value.length < 2 || value.length > 15){
            throw new Error("Username must be 2 to 15 characters.");
        }
        this.username = value;
    }
    get usrn(){
        return this.username;
    }
    set password(value){
        if(value.length < 5 || value.length > 20){
            throw new Error("Password must be 5 to 20 characters.");
        }
        this._password = value;
    }
    get password(){
        return this._password;
    }
}
const new_user = new User_info();
new_user.username = "jamie";
console.log(new_user.username)
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
