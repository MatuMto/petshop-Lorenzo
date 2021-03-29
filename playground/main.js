const clickMe = document.querySelector('#clickMe')
const score = document.querySelector('#score')
const time = document.querySelector('#time')
const playButton = document.querySelector('#playButton')

playButton.addEventListener('click', function(){
   jugar()
})

function jugar(){
   let points = 0
   let gameOver = false
   let remainingTime = 10

   clickMe.addEventListener('click', function(){
      points = points + 1
      score.textContent = 'Score: ' + points
      clickMe.style.transition = 'all .1 ease'
      clickMe.style.background = 'red'
   })

   const intervalo = setInterval(() => {

      if (remainingTime !== 0){
         remainingTime = remainingTime - 1
      }
      time.innerText = 'Time: ' + remainingTime
      if(gameOver === true){
         clearInterval(intervalo)
      }
   }, 1000);   

   setTimeout(function(){
      gameOver = true
      alert('Game Over')
   }, 10000)
}


