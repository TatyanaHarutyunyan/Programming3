var socket = io()
let side = 25
function setup(){
    createCanvas(40 * side , 40 * side)

}
function nkarel(matrix){
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
  


    

}
setInterval(function(){
    socket.on("send matrix", nkarel)
}, 500)
function AddGrass(){
    socket.emit("addGrass")
}
function AddGrassEater(){
    socket.emit("addGrassEater")
}
function AddPredator(){
    socket.emit("addPredator")
}
function AddRabbit(){
    socket.emit("addRabbit")
}
function AddFrog(){
    socket.emit("addFrog")
}





































