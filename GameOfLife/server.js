let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("."));

app.get("/", function(req, res){
    res.redirect("index.html")
});
server.listen(3000,()=>{
    console.log("connected");
} )


function matrixGenerator(matrixSize, grassCount, grassEaterCount,predatorCount, rabbitCount, frogCount){
    let matrix = []
    for(let i = 0 ; i < matrixSize ; i++){
        matrix.push([])
        for(let j = 0 ; j < matrixSize ; j++){
            matrix[i].push(0)

        }


    }
    for(let i = 0 ; i < grassCount ; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] == 0){
            matrix[y][x] = 1

        }
    }
    for(let i = 0 ; i < grassEaterCount ; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] == 0){
            matrix[y][x] = 2

        }
    }
    
    for(let i = 0 ; i < predatorCount ; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] == 0){
            matrix[y][x] = 3

        }
    }
    for(let i = 0 ; i < rabbitCount ; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] == 0){
            matrix[y][x] = 4

        }
    }
    for(let i = 0 ; i < frogCount ; i++){
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if(matrix[y][x] == 0){
            matrix[y][x] = 5

        }
    }

    
    return matrix
    
}

let matrix = matrixGenerator(40,35,20,15,10,12)

io.sockets.emit("send matrix",matrix)

/////charectors Arrays
grassArr = []
grassEaterArr = []
predatorArr = []
rabbitArr = []
frogArr = []

///// modules
let Grass = require("./grass") 
let GrassEater = require("./grassEater")
let Predator = require("./predator")
let Frog = require("./frog")
let Rabbit = require("./rabbit")

//////


console.log("delete");