class Formula_Division extends Driver {
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
    }
    overall_rating (){
        const ratings = [this.pace, this.reflexes, this.team_chemistry, this.skill, this.defense, this.wet_rain]
        for (const rating of ratings){
            rating_sum += rating;
            return rating_sum
        }
        this.overall_r = rating_sum / 6;
        return this.overall_r;
    }
    inform_card (){
        const ratings = [this.pace, this.reflexes, this.team_chemistry, this.skill, this.defense, this.wet_rain]
        for (const rating of ratings){
            rating_sum += rating + 3;
            return rating_sum
        }
        this.overall_r = rating_sum / 6;
        return this.overall_r;
    }
}
class Driver extends Skill_Rating {
    constructor(formula, name, age, dob, team, nationality, height_cm, weight_kg, height_ft, weight_lb, image, pace, reflexes, team_chemistry, skill, defense, wet_rain, chat) {
        super(formula, pace, reflexes, team_chemistry, skill, defense, wet_rain);
        this.formula = formula;
        this.name = name;
        this.dob = dob;
        this.age = age;
        this.team = team;
        this.nationality = nationality;
        this.height_cm = height_cm;
        this.weight_kg = weight_kg;
        this.height_ft = height_ft;
        this.weight_lb = weight_lb;
        this.image = image;
    }
    age() {
        let date =  new Date().getFullYear();
        age = date - this.dob;
        return this.age
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

class Race_weekend extends Driver_record {
    constructor(driver_name, year, series, race_location, sr1, sr2, f_race){
        super(driver_name, year, series)
        this.race_location = race_location;
        this.sr1 = sr1;
        this.sr2 = sr2;
        this.f_race = f_race;
    }
    overall_rating (){
        const points_week = [this.sr1, this.sr2, this.f_race]
        for (const point of points_week){
            weekend_p += point;
            return weekend_p;
        }
}
// Class for a single season results
//class Series_Record extends Race_weekend {
    //constructor(appearances, wins, poles, fastest_laps, podiums, points, standings){
        //this.appearances = appearances;
        //this.wins = wins;
        //this.poles = poles;
        //this.fastest_laps = fastest_laps;
        //this.podiums = podiums;
        //this.points = points;
        //this.standings = standings;
   // }

//}
//User login class to get and set username for sing in, database, and forgot password/username.
class User_info {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }
    set usrn(value){
        if(value.length < 2 ){
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
//© 2021 GitHub, Inc.TermsPrivacySecurityStatusDocsContact GitHubPricingAPITrainingBlogAbout

//Driver profile photo
const images = [
  { id: 1, src: './assets/image01.jpg', title: 'foo', description: 'bar' },
  { id: 2, src: './assets/image02.jpg', title: 'foo', description: 'bar' },
  { id: 3, src: './assets/image03.jpg', title: 'foo', description: 'bar' },
  { id: 4, src: './assets/image04.jpg', title: 'foo', description: 'bar' },
  { id: 5, src: './assets/image05.jpg', title: 'foo', description: 'bar' },
];
var OscarPiastri = document.createElement("OscarPiastri");
OscarPiastri.src = "DennisHauger.png";
var src = document.getElementById("header");
src.appendChild(OscarPiastri);

//Objects, drivers and skill rating only
//Formula 2

let Oscar_Piastri = new Driver(F2, "Oscar Piastri", 20, 06-04-2001, "Prema Racing", "Australia", 178, 68, 5-10, 150, DennisHauger.png, 81, 80, 78, 82, 75, 79);
let Guanyu_Zhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Robert_Shwartzman = new Driver(F2, "Robert Shwartzman", 22, 16-09-1999, "", "Russia", 183, 70, 6-0, 154, DennisHauger.png, 79, 83, 69, 83, 78, 80);
let Dan_Ticktum = new Driver(F2, "Dan Ticktum", 22, 08-06-1999, "Carlin", "United Kingdom", 180, 66, 5-11, 145, DennisHauger.png, 77, 80, 70, 80, 79, 78);
let Theo_Pourchaire = new Driver(F2, "Theo Pourchaire", 18, 20-08-2003, "Art Grand Prix", "France", 188, 66, 6-2, 145, DennisHauger.png, 78, 82, 62, 80, 76, 77);
let Juri_Vips = new Driver(F2, "Juri Vips", 21, 10-08-2000, "Hitech Grand Prix", "Estonia", 180, 64, 5-11, 141, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Jehan_Daruvula = new Driver(F2, "Jehan Daruvula", 23, 01-10-1998, "Carlin", "India", 176, 70, 5-9, 154, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Liam_Lawson = new Driver(F2, "Liam Lawson", 19, 11-02-2002, "Hitech Grand Prix", "New Zealand", 173, 65, 5-8, 143, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Felipe_Drugovich = new Driver(F2, "Felipe Drugovich", 21, 23-05-2000, "Uni Virtuosi", "Brazil", 175, 70, 5-9, 154, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Richard_Verschoor = new Driver(F2, "Richard Verschoor", 21, 16-12-2000, "MP Motorsport", "Netherlands", 187, 61, 6-2, 134, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Christian_Lundgaard = new Driver(F2, "Christian Lundgaard", 20, 23-07-2001, "Art Grand Prix", "Denmark", 185, 68, 6-1, 150, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Ralph_Boschung = new Driver(F2, "Ralph Boschung", 24, 23-09-1997, "Campos Racing", "Switzerland", 187, 74, 6-2, 163, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let David_Beckmann = new Driver(F2, "David Beckmann", 21, 27-04-2000, "Campos Racing", "Germany", 169, 63, 5-6, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Marcus_Armstrong = new Driver(F2, "Marcus Armstrong", 21, 29-07-2000, "Dams", "New Zealand", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Bent_Viscaal = new Driver(F2, "Bent Viscaal", 22, 18-09-1999, "Trident", "Netherlands", 169, 60, 5-6, 132, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Roy_Nissany = new Driver(F2, "Roy Nissany", 27, 30-11-1994, "Dams", "Israel", 176, 72, 5-9, 159, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Jake_Hughes = new Driver(F2, "Jake Hughes", 27, 30-05-1994, "HWA Racelab", "United Kindom", 175, 70, 5-9, 154, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Marino_Sato = new Driver(F2, "Marino Sato", 22, 12-05-1999, "Trident", "Japan", 172, 72, 5-8, 158, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Enzo_Fittipaldi = new Driver(F2, "Enzo Fittipaldi", 20, 18-07-2001, "Charouz Racing System", "Brazil", 168, 68, 5-6, 149, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Guilherme_Samaia = new Driver(F2, "Guilherme Samaia", 25, 02-10-1996, "Charouz Racing System", "Brazil", 177, 70, 5-10, 154, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Clément_Novalak = new Driver(F2, "Clément Novalak", 21, 23-12-2000, "MP Motorsport", "France", 175, 68, 5-9, 150, DennisHauger.png, 81, 82, 74, 84, 79, 81);
let Alessio_Deledda = new Driver(F2, "Alessio Deledda", 25, 10-12-1994, "HWA Racelab", "Italy", 183, 73, 6-0, 161, DennisHauger.png, 81, 82, 74, 84, 79, 81);


//Formula 3
const Dennis_Hauger = new Driver(F2, "Dennis Hauger", 18, 17-03-2003, "Prema Racing", "Norway", 181, 66, 5-10, 150, DennisHauger.png, 81, 80, 78, 82, 75, 79);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);

//Formula 4
const OscarPiastri = new Driver(F2, "Oscar Piastri", 20, 06-04-2001, "Prema Racing", "Australia", 178, 68, 5-10, 150, DennisHauger.png, 81, 80, 78, 82, 75, 79);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);
const GuanyuZhou = new Driver(F2, "Guanyu Zhou", 22, 30-05-1999, "Uni Virtuosi", "China", 175, 63, 5-9, 139, DennisHauger.png, 81, 82, 74, 84, 79, 81);