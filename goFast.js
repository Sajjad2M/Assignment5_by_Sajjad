function page1(){
    jumpById('goFast')
}
let allbtnId = ById('r1')
let r2 = ById('r2')
let allButtons = document.getElementsByClassName('btn40');
let count = 0;
let o =0;
let fourtyS = 40;
let totalPrice1 = ById('totalPrice').innerText
let totalPrice2 = ById('totalPrice')
let totalPrice = parseInt(totalPrice1)
let apply = ById('app')
let input1 = ById('input1')
let ticketCount = ById('sup')
let eco2 = ById('eco2')
let leftSeats = ById('fourty')
let body2 = ById('body2')
          
let placeHold = input1.attributes[1]
let grand1 = ById('grand')
let grandText = grand1.innerText
let grandTotal = parseInt(grandText)
let passenger = ById('pName')
let number = ById('pNum')
let mail = ById('email')
let next = ById('next')
let requ = ById('requ')
let requ1 = ById('requ1')
let requT = ById('requT')
let fullBody = ById('full-body')
let discount1 = ById('discount1')
let discount2 = ById('discount2')


input1.addEventListener('keyup', function(e){
    let inputValue = e.target.value
    let inputValue4 = e.target
    
    if(inputValue.length > 0){
        apply.removeAttribute('disabled')

     }

    apply.addEventListener('click', function(){

        if(inputValue === 'NEW15'){
            grand1.innerText = (totalPrice - ((totalPrice /100 ) * 15))
            input1.classList.add('hidden')
            apply.classList.add('hidden')
            discount1.innerText = 'Discount'
            discount2.innerText = 'BDT 330'
            
          }
         else if(inputValue === 'Couple 20'){
             grand1.innerText = (totalPrice - ((totalPrice /100 ) * 20))
             input1.classList.add('hidden')
             apply.classList.add('hidden')
               discount1.innerText = 'Discount'
            discount2.innerText = 'BDT 440'
         }
       else{
           grand1.innerText = 0;
           e.target.value = 'Invalid input!'
           input1.classList.add('text-red-600')
         }
          
           



    })    
   input1.addEventListener('click', function(e){
    if(e.target.value === 'Invalid input!'){
        input1.classList.remove('text-red-600')
        e.target.value = ''
    }
   })
    
})

for(let btn40 of allButtons){
    btn40.addEventListener('click', function(e){
        fourtyS--
        console.log(fourtyS)
        count++
        while(count < 5){
            ticketCount.innerText = count;
            leftSeats.innerText = fourtyS
            e.target.classList.remove('bg-[#F7F8F8]')
            e.target.classList.add('bg-[#1DD100]')
          
           break

        }
        if(count >= 1){
            passenger.removeAttribute('disabled')
            number.removeAttribute('disabled')
            mail.removeAttribute('disabled')
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
            let price = parseInt(p3.innerText)
            totalPrice = price * count
            totalPrice2.innerText = totalPrice
         }
         
         if(count === 4){
            // btn40.setAttribute('disabled', true)
            input1.removeAttribute('disabled')    
         }
        
       
    })
    
}

number.addEventListener('keyup', function(e){
    let num = e.target.value
    if(num.length >= 1 ){
        requ.innerText = 1
        requT.innerText = parseInt(requ.innerText)+ parseInt(requ1.innerText)
        if(requT.innerText === '3'){
            next.removeAttribute('disabled')
         }}
    else{
        requ.innerText = 0
        }})

    passenger.addEventListener('keyup', function(e){
        let pass = e.target.value
        if(pass.length >= 1 ){
            requ1.innerText = 2
            requT.innerText = parseInt(requ.innerText)+ parseInt(requ1.innerText)
            if(requT.innerText === '3'){
                next.removeAttribute('disabled')
            }}
            else{
            requ1.innerText = 0
         }})
    
   next.addEventListener('click', function(e){
        fullBody.classList.add('hidden')
        body2.classList.remove('hidden')

     
   })

 

 




function ById(x){
    let y = document.getElementById(x)
    return y
}










































































