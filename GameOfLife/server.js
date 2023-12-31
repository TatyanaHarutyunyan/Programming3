let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("."));

app.get("/", function (req, res) {
    res.redirect("index.html")
});
server.listen(3000, () => {
    console.log("connected");
})


function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, rabbitCount, frogCount) {
    let matrix = []
    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }


    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1

        }
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2

        }
    }

    for (let i = 0; i < predatorCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3

        }
    }
    for (let i = 0; i < rabbitCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 4

        }
    }
    for (let i = 0; i < frogCount; i++) {
        let x = Math.floor(Math.random() * matrixSize)
        let y = Math.floor(Math.random() * matrixSize)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5

        }
    }


    return matrix

}

matrix = matrixGenerator(25, 35, 20, 15, 10, 12)

io.sockets.emit("send matrix", matrix)

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

function createObject(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y)
                grassArr.push(grass)
            } else if (matrix[y][x] == 2) {
                let grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                let pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                let rab = new Rabbit(x, y)
                rabbitArr.push(rab)
            } else if (matrix[y][x] == 5) {
                let fro = new Frog(x, y)
                frogArr.push(fro)
            }

        }

    }
    io.sockets.emit("send matrix", matrix)
}
function game() {
    for (let i in grassArr) {
        grassArr[i].mul()
    }

    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()

    }
    for (let i in rabbitArr) {
        rabbitArr[i].eat()
        if (grassArr.length == 0) {
            rabbitArr[i].growGrass()
        }
    }


    for (let i in frogArr) {
        frogArr[i].eat()


    }
    io.sockets.emit("send matrix", matrix)
}

setInterval(game, 300)

var weath;

function Winter() {
    weath = "winter";
    io.sockets.emit("Winter", weath);
}

function Summer() {
    weath = "summer";
    io.sockets.emit("Summer", weath);
}

function Spring() {
    weath = "spring";
    io.sockets.emit("Spring", weath);
}
function Autumn() {
    weath = "autumn";
    io.sockets.emit("Autumn", weath);
}


// Add buttons
function AddGrass() {
    for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
            let grass = new Grass(x, y)
            grassArr.push(grass)

        }

    }
    io.sockets.emit("send matrix", matrix)
}
function AddGrassEater() {
    for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
            let grassEater = new GrassEater(x, y)
            grassEaterArr.push(grassEater)

        }

    }
    io.sockets.emit("send matrix", matrix)
}
function AddPredator() {
    for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
            let predator = new Predator(x, y)
            predatorArr.push(predator)

        }

    }
    io.sockets.emit("send matrix", matrix)
}
function AddRabbit() {
    for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
            let rabbit = new Rabbit(x, y)
            rabbitArr.push(rabbit)

        }

    }
    io.sockets.emit("send matrix", matrix)
}
function AddFrog() {
    for (let i = 0; i < 7; i++) {
        let x = Math.floor(Math.random() * matrix.length)
        let y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] == 1
            let frog = new Frog(x, y)
            frogArr.push(frog)

        }

    }
    io.sockets.emit("send matrix", matrix)
}

function KillAll() {
    grassArr = []
    grassEaterArr = []
    predatorArr = []
    rabbitArr = []
    frogArr = []


    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix.length; j++) {
                        matrix[i][j] = 0
        }
    }
}

///////statistics
var statistics = {

}
setInterval(function () {

    statistics.grass = grassArr.length
    statistics.grassEater = grassEaterArr.length
    statistics.predator = predatorArr.length
    statistics.rabbit = rabbitArr.length
    statistics.frog = frogArr.length

    fs.writeFile("statistics.json", JSON.stringify(statistics), function (err) {
        // console.log("game of life statistics");
    })
}, 1000)


io.on("connection", function (socket) {
    createObject(matrix)
    socket.on("spring", Spring);
    socket.on("summer", Summer);
    socket.on("autumn", Autumn);
    socket.on("winter", Winter);
    socket.on("addGrass", AddGrass)
    socket.on("addGrassEater", AddGrassEater)
    socket.on("addPredator", AddPredator)
    socket.on("addRabbit", AddRabbit)
    socket.on("addFrog", AddFrog)
    socket.on("KillAll", KillAll)
})

