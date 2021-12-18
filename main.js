const characterImage = {
    Male : {
        Mage : "https://recursionist.io/img/dashboard/lessons/quickstart/male-mage.png",
        Warrior : "https://recursionist.io/img/dashboard/lessons/quickstart/male-warrior.png",
        Hero : "https://recursionist.io/img/dashboard/lessons/quickstart/male-hero.png"
    },
    Female : {
        Mage : "https://recursionist.io/img/dashboard/lessons/quickstart/female-mage.png",
        Warrior : "https://recursionist.io/img/dashboard/lessons/quickstart/female-warrior.png",
        Hero : "https://recursionist.io/img/dashboard/lessons/quickstart/female-hero.png"
    }
    
}


class Character {
    constructor(name, job, gender, traits, status){
        this.name = name;
        this.job = job;
        this.gender = gender;
        this.design = this.getDesign(gender, job);
        this.traits = traits;
        this.status = status;
    }

    getDesign(gender, job){
        return characterImage[gender][job];
    }

}
var app = new Vue({
    el: '#app',
    data: {
        name: 'Unknown',
        job: "Hero",
        gender: "Male",
        traits: "Everyman",
        character: "",
        status: {
            strength : 10,
            agility : 10,
            resilience : 10,
            wisdom : 10,
            luck : 10
        }


    },
    computed: {
        initiateCharacter: function(){
            this.character = new Character(this.name, this.job, this.gender, this.traits, this.status);

        },
        getStrength: function(){
            if(this.traits == "brave" || this.traits == "Tomboy"){
                return this.status.strength * 1.1;
            } else{
                return this.status.strength;
            }
        },
        getAgility: function(){
            if(this.traits == "brave" || this.traits == "Tomboy"){
                return this.status.agility * 1.1;
            } else if(this.traits == "Bat out of hell"){
                return this.status.agility * 1.4;
            }else{
                return this.status.agility;
            }
        },
        getLuck: function(){
            if(this.traits == "lucky devil"){
                return this.status.luck * 1.5;
            } else if(this.traits == "brave"){
                return this.status.luck * 1.2;
            } else{
                return this.status.luck;
            }
        }

    }
})