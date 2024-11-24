//Fill in the ??? to complete the function object.
function Singer(name, specialty, power, hitpoints, level, gender ){
    this.name = name;
    this.specialty = specialty;
    this.power = power;
    this.hitpoints = hitpoints;
    this.level = level;
    this.gender = gender;
    this.singerProfile = function(){
        let hitpointStatus;
        if (this.hitpoints <= 50) {
            hitpointStatus = "Weak";
        } else if (this.hitpoints <= 70) {
            hitpointStatus = "Strong";
        } else {
            hitpointStatus = "Amazing";
        }
        return "Name: " + this.name + "<br>Specialty: " + this.specialty + "<br>Power: " + this.power + 
        "<br>Hitpoints: " + hitpointStatus + "<br>Level: " + this.level + "<br>Gender: " + this.gender;
}
    
}
//Create the function objects momobae and minabae.
var momobae = new Singer("Momobae", "K-Pop", "49", "28", "7", "Female");
var minabae = new Singer("Minabae", "K-Pop", "38", "35", "8", "Female");

//create a new element using javascript
let newDiv1 = document.createElement("div");
//add class to element through javascript
newDiv1.classList.add("mystyle")
// and give it some content
newDiv1.innerHTML = "Momobae's Singer Profile: <br>" +momobae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv1);

//create a new element using javascript
let newDiv2 = document.createElement("div");
//add class to element through javascript
newDiv2.classList.add("mystyle")
// and give it some content
newDiv2.innerHTML = "Minabae's Singer Profile: <br>" +minabae.singerProfile();
//add the div to the body of the html
document.body.appendChild(newDiv2);