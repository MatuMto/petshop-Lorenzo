const cardContainer = document.querySelector('.card-container')
const card = document.querySelectorAll('.card')
// const previousPrice = document.querySelector('#previousPrice')
// const cardPriceContainer = document.querySelector('#cardPriceContainer')
// const infoIcon = document.querySelector('#infoIcon')
// const carritoIcon = document.querySelector('#carritoIcon')
// const carritoIconContainer = document.querySelector('#carritoIconContainer')
// const productName = document.querySelectorAll('.productName') 
// const lastsUnits = document.querySelectorAll('.last-units')


fetch('https://apipetshop.herokuapp.com/api/articulos')
.then(data=>data.json())
.then(dataLista => {
   // crearCard(dataLista.response)
   // dataLista.response.forEach((element)=>{
   //    if (element.tipo === "Juguete"){
   //       console.log('Soy Un juguete xD')
   //    } else {
   //       console.log('Soy un remedio :v')
   //    }
   // })

   if(document.getElementById('toyStore')){
      dataLista.response.forEach((element)=>{
         if(element.tipo === "Juguete"){
            crearCard(element)
         }
      })
   } else if (document.getElementById('pharmacy')){
      dataLista.response.forEach((element)=>{
         if(element.tipo === "Medicamento"){
            crearCard(element)
         }
      })
   }

      
   console.log(dataLista.response[0])
})   
.catch((error) => {console.log(error)})

let nuevoCard = ''
function crearCard (element){      
      let cardBorder = document.createElement('div')
      cardBorder.setAttribute('class', 'card-border')
      cardContainer.appendChild(cardBorder)


      nuevoCard = document.createElement('div')
      nuevoCard.setAttribute('class', 'card')
      cardBorder.appendChild(nuevoCard)

      // info icon container
      let infoIconContainer = document.createElement('div')
      infoIconContainer.setAttribute('class', 'info-icon-container')
      nuevoCard.appendChild(infoIconContainer)
      
      // i (?
      let infoIcon = document.createElement('p')
      infoIcon.setAttribute('class', 'info-icon')
      infoIcon.textContent = 'i'
      infoIconContainer.appendChild(infoIcon)

      // carrito icon
      let carritoIconContainer = document.createElement('div')
      carritoIconContainer.setAttribute('class', 'carrito-icon-container')
      nuevoCard.appendChild(carritoIconContainer)
      
      let carritoIcon = document.createElement('img')
      carritoIcon.setAttribute('src', './icons/carrito.png')
      carritoIcon.setAttribute('class', 'carrito-icon')
      carritoIconContainer.appendChild(carritoIcon)

      // subcard
      let subCard = document.createElement('div')
      subCard.setAttribute('class', 'sub-card')
      nuevoCard.appendChild(subCard)
      
      // img
      let img = document.createElement('img')
      img.setAttribute('src', element.imagen)
      img.setAttribute('class', 'img')
      subCard.appendChild(img)
      
      // text container
      let textContainer = document.createElement('div')
      textContainer.setAttribute('class', 'text-container')
      subCard.appendChild(textContainer)

      // previous price
      let previousPrice = document.createElement('p')
      previousPrice.textContent = '$ 2.500'
      previousPrice.setAttribute('class', 'previous-price')
      textContainer.appendChild(previousPrice)

      // price container
      let priceContainer = document.createElement('div')
      priceContainer.setAttribute('class', 'price-container')
      textContainer.appendChild(priceContainer)

      // price 
      let price = document.createElement('p')
      price.textContent = `$ ${element.precio}`
      price.setAttribute('class', 'price')
      priceContainer.appendChild(price)

      // discount
      let discount = document.createElement('p')
      discount.setAttribute('class', 'discount')
      discount.textContent = '13% OFF'
      priceContainer.appendChild(discount)
      
      // lasts units
      if(element.stock < 5){
         let lastsUnits = document.createElement('p')
         lastsUnits.textContent = 'Lasts Units!'
         lastsUnits.setAttribute('class', 'last-units')
         textContainer.appendChild(lastsUnits)
      }   

      // product name container
      let productNameContainer = document.createElement('div')
      productNameContainer.setAttribute('class', 'product-name-container')
      subCard.appendChild(productNameContainer)

      // product name
      let productName = document.createElement('p')
      productName.textContent = element.nombre
      productName.setAttribute('class', 'product-name')
      productNameContainer.appendChild(productName)

      
      

      nuevoCard.addEventListener('mouseover', function(){
         carritoIconContainer.style.display = 'flex'
         infoIconContainer.style.display = 'block'
         previousPrice.style.display ='block'
         priceContainer.style.marginTop = '20px'
         productNameContainer.style.display = 'block' 
      })

      nuevoCard.addEventListener('mouseout', function(){
         carritoIconContainer.style.display = 'none'
         infoIconContainer.style.display = 'none'
         previousPrice.style.display ='none'
         priceContainer.style.marginTop = '15px'
         productNameContainer.style.display = 'none' 
      })

}








