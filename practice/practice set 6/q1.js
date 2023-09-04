document.body.style.background=prompt("Enter the color you want in the backgroud")

let check=true
while(check==true){
    alert("Enter your age !")
    let a=prompt("Enter your age here: ")
    if(a>4){
        location.href="https://www.google.com/"
    }
    else{
       console.error("Enter valid age");
       break;
    }          
    check=confirm("Do you want re-enter?")
}
