class GrassEater {

   constructor(x, y, index) {
      this.x = x;
      this.y = y;
      this.index = index;
      this.energy = 8;
      this.directions = [];
   }

   chooseCell(character) {
      this.getNewCoordinates();
      let found = [];
      for (let i in this.directions) {
         let x = this.directions[i][0];
         let y = this.directions[i][1];
         if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == character) {
               found.push(this.directions[i]);
            }
         }
      }
      return found;
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

   mul() {
      let emptyCells = this.chooseCell(0);
      let newCell = random(emptyCells);

      if (newCell && this.energy >= 12) {
         let newX = newCell[0];     //anhaskanali
         let newY = newCell[1];

         matrix[newY][newX] = this.index;

         let gre = new GrassEater(newX, newY, this.index);
         GrassEaterArr.push(gre);
      }
      // redrow() 
   }

   move() {
      let emptyCells = this.chooseCell(0);
      let newCell = random(emptyCells);

      if (newCell) {
         let newX = newCell[0];
         let newY = newCell[1];

         matrix[this.y][this.x] = 0;

         matrix[newY][newX] = this.index;

         this.x = newX;
         this.y = newY;

         this.energy--;
      }

      this.die();
      // redrow() 
   }

   eat() {
      let emptyCells = this.chooseCell(1);
      let newCell = random(emptyCells);

      if (newCell) {
         let newX = newCell[0];
         let newY = newCell[1];

         matrix[this.y][this.x] = 0;

         matrix[newY][newX] = this.index;

         this.x = newX;
         this.y = newY;

         for (let i in grassArr) {
            if (newX == grassArr[i].x && newY == grassArr[i].y) {
               grassArr.splice(i, 1);
               break;
            }
         }

         this.energy++;

         this.mul(); //2
      } else { //3
         this.move();  //4
      }
      // redrow() 
   }

   die() {
      if (this.energy <= 0) {
         matrix[this.y][this.x] = 0;
         for (let i in GrassEaterArr) {
            if (this.x == GrassEaterArr[i].x && this.y == GrassEaterArr[i].y) {
               GrassEaterArr.splice(i, 1);
               break;
            }
         }
      }
      // redrow() 
   }
}