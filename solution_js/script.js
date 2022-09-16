let lottery = () => {
    let userNumber = document.getElementById('userNumber') 
    let button = document.getElementById('play')
    let randomNumber = 0


    button.addEventListener('click', () => {
        let counter = 0
        let value = []
        var startInterval= setInterval(() => { 
            button.style.backgroundColor='aqua'
            randomNumber = Math.floor(Math.random() * 100001); //generates a random number from 0 to 100000
            console.log(randomNumber);
            value.push(randomNumber)
            userNumber.innerHTML=randomNumber
            counter++

            if(counter==20){
                clearInterval(startInterval)
                setTimeout(() => {
                    alert(userNumber.innerHTML)
                },300)
                
                button.style.backgroundColor='buttonface'
               }
               
       }, 100)
       
       /* setTimeout(() => {
            clearInterval(startInterval)
            button.style.backgroundColor='buttonface'
            if(randomNumber > 1 && randomNumber < 1000){
                alert('You Won:'+randomNumber)
            }
            else{
                alert('You Lost:'+randomNumber)
            }
       },1000) */
    })
   
}

lottery()