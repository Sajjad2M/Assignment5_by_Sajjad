function page1(){
    jumpById('goFast')
}
let allbtnId = ById('r1')
let r2 = ById('r2')
let allButtons = document.getElementsByClassName('btn40');
let count = 0;
let o =0;
let totalPrice1 = ById('totalPrice').innerText
let totalPrice2 = ById('totalPrice')
let totalPrice = parseInt(totalPrice1)
let apply = ById('app')
let input1 = ById('input1')
let ticketCount = ById('sup')
let eco2 = ById('eco2')
          

let placeHold = input1.attributes[1]
let grand1 = ById('grand')
let grandText = grand1.innerText
let grandTotal = parseInt(grandText)
console.log(grandTotal)

input1.addEventListener('keyup', function(e){
    let inputValue = e.target.value
    let inputValue4 = e.target
    
    if(inputValue.length > 0){
        apply.removeAttribute('disabled')

     }
     //else if(e.target.value === 'Invalid input!'){
    
    // }

    apply.addEventListener('click', function(){

        if(inputValue === 'NEW15'){
            grand1.innerText = (totalPrice - ((totalPrice /100 ) * 15))
          }
         else if(inputValue === 'Couple 20'){
             grand1.innerText = (totalPrice - ((totalPrice /100 ) * 20))
         }
       else{
           grand1.innerText = 0;
        
            e.target.value = 'Invalid input!'
             }

    })    
   input1.addEventListener('click', function(e){
    if(e.target.value === 'Invalid input!'){
        e.target.value = ''
    }
   })
    
})

for(let btn40 of allButtons){
    btn40.addEventListener('click', function(e){
       
        count++
        while(count < 5){
            ticketCount.innerText = count;
            e.target.classList.remove('bg-[#F7F8F8]')
            e.target.classList.add('bg-[#1DD100]')
          
           break

        }
      
         
          
          
            
          if(count <= 4){
            // e.target.setAttribute('disable')
            let p1 = document.createElement('h4')
            p1.innerText =  e.target.innerText
            let p2 = document.createElement('p')
            p2.innerText = 'Economy'
            let p3 = document.createElement('p')
            p3.innerText = 550;
            
            eco2.appendChild(p1)
            eco2.appendChild(p2)
            eco2.appendChild(p3)

            let d = eco2.childNodes[1].innerText;
            let d1 = ById(d)
            d1.setAttribute('disabled', true)
            let d2 = eco2.childNodes[4].innerText;
            let d3 = ById(d2)
            d3.setAttribute('disabled', true)

            let d4 = eco2.childNodes[7].innerText;
            let d5 = ById(d4)
            d5.setAttribute('disabled', true)
            let d6 = eco2.childNodes[10].innerText;
            let d7 = ById(d6)
            d7.setAttribute('disabled', true)

            
            // console.log(d2)
            
            

   
            let price = parseInt(p3.innerText)
            totalPrice = price * count
            totalPrice2.innerText = totalPrice

         }
         
         if(count === 4){
            btn40.setAttribute('disabled', true)
           
            input1.removeAttribute('disabled')
            
          
            
        }
        
      })

}


function ById(x){
    let y = document.getElementById(x)
    return y
}










































































