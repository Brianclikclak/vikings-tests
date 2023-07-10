const Soldier = require('../soldier/Soldier');

class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength);
    this.name = "Harald";
    this.health = 300;
    this.strength = 150;
  }
  
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
    this.health -= damage;
    if (this.health <= 0){
        return `${this.name} has died in act of combat`;
    }
    return  `${this.name} has received ${damage} points of damage`;
  }
  battleCry(){
    return  "Odin Owns You All!";
  }
  
  
}




module.exports = Viking;
