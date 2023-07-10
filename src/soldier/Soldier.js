class Soldier {
  
   constructor(health, strength){
    this.health = health
    this.strength = strength
   }

   attack(){
    return this.strength
   }

   receiveDamage(damage){
    damage = 50
    this.health -= damage
   }

}
module.exports = Soldier;
