let socket = io()
let side = 25
let weath = "spring";


function setup() {
   
    createCanvas(25 * side, 25 * side)

}
socket.on("Winter", function (data) {
    weath = data;
})
socket.on("Summer", function (data) {
    weath = data;
})
socket.on("Spring", function (data) {
    weath = data;
})
socket.on("Autumn", function (data) {
    weath = data;
})


function nkarel(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            console.log("wwww---->>>>", weath);

            if (matrix[y][x] == 1) {

                if (weath == "spring") {
                    fill("green");
                }
                else if (weath == "summer") {
                    fill("#79a83b");
                }
                else if (weath == "autumn") {
                    fill("#ff8453");
                }
                if (weath == "winter") {
                    fill("white");

                }
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
            }
            else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("blue")
            }
            else if (matrix[y][x] == 5) {
                fill("#4D288F")
            }
            else {
                fill("gray")
            }
            rect(x * side, y * side, side, side)
        }

    }





}
socket.on('send matrix', nkarel);




function Winter() {
    socket.emit("winter");
}
function Summer() {
    socket.emit("summer");
}
function Spring() {
    socket.emit("spring");
}
function Autumn() {
    socket.emit("autumn");
}



function AddGrass() {
    socket.emit("addGrass")
}
function AddGrassEater() {
    socket.emit("addGrassEater")
}
function AddPredator() {
    socket.emit("addPredator")
}
function AddRabbit() {
    socket.emit("addRabbit")
}
function AddFrog() {
    socket.emit("addFrog")
}
function KillAll() {
    socket.emit("KillAll")
}





































