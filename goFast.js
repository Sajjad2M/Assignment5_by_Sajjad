function page1(){
    jumpById('goFast')
}
let allButtons = document.getElementsByClassName('btn40');
let count = 0;
let o =0;
let totalPrice1 = ById('totalPrice').innerText
let totalPrice2 = ById('totalPrice')
let totalPrice = parseInt(totalPrice1)
let apply = ById('app')
let input1 = ById('input1')
let placeHold = input1.attributes[1]
let grand1 = ById('grand')
let grandText = grand1.innerText
let grandTotal = parseInt(grandText)
console.log(grandTotal)
// console.log(input1)

input1.addEventListener('keyup', function(e){
    let inputValue = e.target.value
    let inputValue4 = e.target
    if(inputValue === 'NEW15'){
       grand1.innerText = (totalPrice - ((totalPrice /100 ) * 15))
     
      
    }
    else if(inputValue === 'Couple 20'){
        grand1.innerText = (totalPrice - ((totalPrice /100 ) * 20))
    }
    else{
      grand1.innerText = 5
    //   placeHold.value = 'invalid'
    // inputValue4.value = 'Invalid input'
    // console.log(e.target)
    

      
    }
  
    
    
})
function applyBtn(){
    console.log('k k')
}






for(let btn40 of allButtons){
    btn40.addEventListener('click', function(e){
       
        count++
       e.target.classList.remove('bg-[#F7F8F8]')
         e.target.classList.add('bg-[#1DD100]')
        
          let eco2 = ById('eco2')
         
          let ticketCount = ById('sup')
          
          ticketCount.innerText = count;
            
          if(count <= 4){
            // e.target.setAttribute('disable')
            let p1 = document.createElement('p')
            p1.innerText =  e.target.innerText
            let p2 = document.createElement('p')
            p2.innerText = 'Economy'
            let p3 = document.createElement('p')
            p3.innerText = 550;
            
            eco2.appendChild(p1)
            eco2.appendChild(p2)
            eco2.appendChild(p3)
       
   
            let price = parseInt(p3.innerText)
            totalPrice = price * count
            totalPrice2.innerText = totalPrice

         }
         
         if(count === 4){
            apply.removeAttribute('disabled')
        }
        
      })

}

function ById(x){
    let y = document.getElementById(x)
    return y
}










































































