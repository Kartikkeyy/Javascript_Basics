let x=5,c=1

let a=setInterval(function(){
    if(c==100){
        clearInterval(a)
    }
    
    console.log(x+' X '+c+' = '+x*c)
    c++
},100,x,c)
