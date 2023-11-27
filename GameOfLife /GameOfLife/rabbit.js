class Rabbit {
    constructor(x,y){
        this.x = x
        this.y = y 
        this.energy = 30
        this.directions = []

    }

    getNewCoordinates(){
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y ],
            [this.x + 1, this.y ],
            [this.x - 1, this.y + 1],
            [this.x , this.y + 1],
            [this.x + 1, this.y + 1]
            ];
    }

    chooseCell(char1, char2, char3){
        this.getNewCoordinates()
        let found = []
        for(let i in this.directions){
            let x = this.directions[i][0]
            let y = this.directions[i][1]

            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == char1){
                    found.push(this.directions[i])

                }
            }
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == char2){
                    found.push(this.directions[i])

                }
            }
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == char3){
                    found.push(this.directions[i])

                }
            }
        }
        return found 
    }
    mul(){
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[newY][newX] = 4
                let rab = new Rabbit(newX, newY)
                rabbitArr.push(rab)
    
    
            }
    
    }
    eat(){
        let foods = this.chooseCell(1,2,3,4)
        let food = random(foods)
        if(food){
            this.energy += 5
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0


            for(let i in grassArr){
                if(newX == grassArr[i].x && newY == grassArr[i].y){
                    grassArr.splice(i,1)
                    break;
                }
            } 


            for(let i in grassEaterArr){
                if(newX == grassEaterArr[i].x && newY == grassEaterArr[i].y){
                    grassEaterArr.splice(i,1)
                    break;
                }
            }
            for(let i in predatorArr){
                if(newX == predatorArr[i].x && newY == predatorArr[i].y){
                    predatorArr.splice(i,1)
                    break;
                }
            }
            this.x = newX
            this.y = newY

            
            if(this.energy > 50){
                this.mul()
            }
        }else{
            this.move()
        }
    }
    move(){
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
    
        if(newCell){
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]
    
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0
            this.x = newX
            this.y = newY
            if(this.energy <= 0){
                this.die()
                }
        }
    }

    growGrass(){
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
    
        if(newCell){
            this.energy--
            let newX = newCell[0]
            let newY = newCell[1]
    
            matrix[newY][newX] = 0
            this.x = newX
            this.y = newY
            if(newCell){
                let newX = newCell[0]
                let newY = newCell[1]
                matrix[newY][newX] = 1
                let grass = new Grass(newX, newY)
                grassArr.push(grass)
            
    
                }
            
    }
}

    die(){
        matrix[this.y][this.x] = 0
        for(let i in rabbitArr){
            if(this.x == rabbitArr[i].x && this.y == rabbitArr[i].y){
                        rabbitArr.splice(i,1)
                        break;
            }

        }
    }




}
