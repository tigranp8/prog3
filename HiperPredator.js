class HyperPredator {

   constructor(x, y, index) {
      this.x = x;
      this.y = y;
      this.index = index;
      this.energy = 20;
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

      if (newCell && this.energy >= 20) {
         let newX = newCell[0];
         let newY = newCell[1];

         matrix[newY][newX] = this.index;

         let Hyperpre = new HyperPredator(newX, newY, this.index);
         HyperPredatorArr.push(Hyperpre);
      }
      //redrow()
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
      let emptyCells = this.chooseCell(1, 2, 3, 4);
      let newCell = random(emptyCells);

      if (newCell) {
         let newX = newCell[0];
         let newY = newCell[1];

         matrix[this.y][this.x] = 0;

         matrix[newY][newX] = this.index;

         this.x = newX;
         this.y = newY;

         for (let i in HyperPredatorArr) {
            if (newX == HyperPredatorArr[i].x && newY == HyperPredatorArr[i].y) {
               HyperPredatorArr.splice(i, 1);
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
         for (let i in HyperPredatorArr) {
            if (this.x == HyperPredatorArr[i].x && this.y == HyperPredatorArr[i].y) {
               HyperPredatorArr.splice(i, 1);
               break;
            }
         }
      }
      // redrow() 
   }
}
