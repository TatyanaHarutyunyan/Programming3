
let side = 25
function setup(){
    createCanvas(matrix[0].length * side , matrix.length * side)
    for( let y = 0; y < matrix.length ; y++){
        for(let x = 0 ; x < matrix[y].length ; x++){
            if(matrix[y][x] == 1){
                let grass = new Grass(x,y)
                grassArr.push(grass)
            }else if(matrix[y][x] == 2){
                let grEat = new GrassEater(x,y)
                grassEaterArr.push(grEat)
            }else if(matrix[y][x] == 3){
                let pred = new Predator(x,y)
                predatorArr.push(pred)
            }else if(matrix[y][x] == 4){
                let rab = new Rabbit(x,y)
                rabbitArr.push(rab)
            }else if(matrix[y][x] == 5){
                let fro = new Frog(x,y)
                frogArr.push(fro)
            }

        }

    }

}
function draw(){
    createCanvas( matrix[0].length * side , matrix.length * side)
    for( let y = 0; y < matrix.length ; y++){
        for(let x = 0 ; x < matrix[y].length ; x++){
            if(matrix[y][x] == 1){
                fill ("green")
            }
            else if(matrix[y][x] == 2){
                fill("yellow")
            }
            else if(matrix[y][x] == 3){
                fill("red")
            }
            else if(matrix[y][x] == 4){
                fill("blue")
            }
            else if(matrix[y][x] == 5){
                fill("#4D288F")
            }
            else {
                fill ("gray")
            }
            rect (x * side, y * side, side, side)
        }

    }
  


    for(let i in grassArr){
        grassArr[i].mul()
    }

    for(let i in grassEaterArr){
        grassEaterArr[i].eat()
    }
    for(let i in predatorArr){
        predatorArr[i].eat()

    }
    for(let i in rabbitArr){
        rabbitArr[i].eat()
        if(grassArr.length == 0){
            rabbitArr[i].growGrass()
        }
    }
    

    for(let i in frogArr){
        frogArr[i].eat()
      
            
    }

}





































