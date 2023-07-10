const Soldier = require("../soldier/Soldier");

class Saxon extends Soldier {
    constructor(health, strenght){
        super(health, strenght)
        this.health = health;
        this.strength = strenght;
    }
    attack(){
        this.strength = 25;
        return  this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health <= 0){
            return "A Saxon has died in combat";
        }
        return `A Saxon has received ${damage} points of damage`;
    }
}

module.exports = Saxon;
