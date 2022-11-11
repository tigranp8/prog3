// class GrassEater extends LivingCreature {

//    mul() {
//        this.energy++;
//        var newCell = random(this.chooseCell(0));
//        if(this.energy y >= 8 && newCell) {
//            var newGrassEater = new GrassEater(newCell[0],newCell[1], this.index);
//            grassArr.push(newGrassEater);
//            matrix[newCell[1]][newCell[0]] = this.index;
//            this.energy = 0;
//        }
//    }
// }

class GrassEater extends LivingCreature {
   constructor(x, y, index){
       super(x, y, index);
       this.energy = 8;
   }
  getNewCoordinates() {
      this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ];
  }
  chooseCell(character) {
      this.getNewCoordinates();
      return super.chooseCell(character);
  }
      // eat, mul, move, die
}