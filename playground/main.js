const familiares = [
   {nombre: 'Gordos Gordos', id:1},
   {nombre: 'MatuMoto', id:2},
   {nombre: 'Santy', id:3},
   {nombre: 'Josu', id:4},
   {nombre: 'Ema', id:5},
   {nombre: 'Marce', id:6},
   {nombre: 'Richard', id:7},
]

familiares.forEach((familiar)=>{
   let nombre = document.createElement('p')
   nombre.textContent = familiar.nombre
   nombre.setAttribute('class', 'familiar')
   document.getElementById('leftSection').appendChild(nombre)
   
   nombre.addEventListener('click', function(){
      nombreDuplicado = document.createElement('p')
      nombreDuplicado.textContent = familiar.nombre
      nombreDuplicado.setAttribute('class', 'familiar')

      document.getElementById('rightSection').appendChild(nombreDuplicado)
   })
})
