const Saxon = require("../saxon/Saxon");
const Viking = require("../viking/Viking");

class War {
    constructor(){
        this.vikingArmy = []
        this.saxonArmy = []
    }
    
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    
    vikingAttack(){
        const vikingAtk = Math.floor(Math.random() * this.vikingArmy.length);
        const saxonDef = Math.floor(Math.random() * this.saxonArmy.length);
        const viking = this.vikingArmy[vikingAtk];
        const saxon = this.saxonArmy[saxonDef];
        
        saxon.receiveDamage(viking.strength);
        if(saxon.health <= 0){
            this.saxonArmy.splice(saxonDef, 1);
            return "A Saxon has died in combat";
        }

    }
    saxonAttack(){
        const saxonAtk = Math.floor(Math.random() * this.saxonArmy.length);
        const vikingDef = Math.floor(Math.random() * this.vikingArmy.length);
        const saxon = this.saxonArmy[saxonAtk];
        const viking = this.vikingArmy[vikingDef];
        
        viking.receiveDamage(saxon.strength);
        if(viking.health <= 0){
            this.vikingArmy.splice(vikingDef, 1); 
        }
        return `${viking.name} has received ${saxon.strength} points of damage`;
    }
    showStatus(){
        if(this.saxonArmy.length === 0) return "Vikings have won the war of the century!";
    }
}

module.exports = War;

