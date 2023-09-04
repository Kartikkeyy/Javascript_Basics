 
check=true

let c1=0,c2=0,c3=0,c=0

while(check){
    let a=prompt("Enter the S: Snake , G: Gun , W: Water")

    const myArray = ['S', 'W', 'G'];  
    let randomElement = myArray[Math.floor(Math.random() * myArray.length)]; 
    c++

    if(randomElement=='S'){
        if(a=='S'){
            c3++
            alert("Its a tie !")
        }
        else if(a=='G') {
            c2++
            alert("You Lose !")
        }
        else {
            c1++
            alert("You Won")
        }
    }
    if(randomElement=='W'){
        if(a=='W') {
            c3++
            alert("Its a tie !")
        }
        else if(a=='S') {
            c2++
            alert("You Lose !")
        }
        else {
            c1++
            alert("You Won")
        }
    }
    if(randomElement=='G'){
        if(a=='G') {
            c3++
            alert("Its a tie !")
        }
        else if(a=='W') {
            c2++
            alert("You Lose !")
        }
        else {
            c1++
            alert("You Won")
        }
    }

    check=confirm("Do you want to play again")
}

console.log("In ",c," Attempts"," You won ",c1," times and you lose ",c2," times and ",c3," it was a tie !")