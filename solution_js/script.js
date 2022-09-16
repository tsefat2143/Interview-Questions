let lottery = () => {
    let userNumber = document.getElementById('userNumber') 
    let button = document.getElementById('play')
    let randomNumber = 0


    button.addEventListener('click', () => {
        let counter = 0
        var startInterval= setInterval(() => { 
            button.style.backgroundColor='aqua'
            randomNumber = Math.floor(Math.random() * 100001); //generates a random number from 0 to 100000
            userNumber.innerHTML=randomNumber //updates number every iteration
            counter++

            if(counter==20){
                clearInterval(startInterval) //stops setInterval
                setTimeout(() => {//yield alert message after final number is generated
                    if(1 < userNumber.innerHTML && userNumber.innerHTML < 1000){
                        alert('Congratulations! You Won!')
                    }
                    else{
                        alert('Too bad! You\'ve lost!')
                    }
                    
                },300)
                //reset button color after number is selected
                button.style.backgroundColor='buttonface'
               }
               
       }, 100)
    })
}

lottery()