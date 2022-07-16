const title = document.querySelector('#title')
const description = document.querySelector('#description')
const submit = document.querySelector('#submit')
const list = document.querySelector('#list')
const close = document.querySelector('#close')
const divBackdrop = document.querySelector('#div-backdrop')


submit.addEventListener('click',()=>{
    if( title.value == '' || description.value == ''){
        divBackdrop.style.transform = 'translateX(0%)'
        divBackdrop.style.transition = 'transform 1s linear'
    }
    else{
        const objValue = {
            toDoTitle: title.value ,
            toDoDescription: description.value
        }

        const divElement = document.createElement('div')
        divElement.className = 'div-list'
        const titleElement = document.createElement('p')
        titleElement.className = 'font-size-18 font-weight-500'
        titleElement.innerHTML=`Title : ${objValue.toDoTitle}`
        const desElement = document.createElement('p')
        desElement.className = 'font-size-18 font-weight-500'
        desElement.innerHTML=`Description : ${objValue.toDoDescription}`
        titleElement.appendChild(desElement)
        divElement.appendChild(titleElement)    
        list.appendChild(divElement)    
    }
})

close.addEventListener('click',()=>{
    divBackdrop.style.transform = 'translateX(-100%)'
    divBackdrop.style.transition = 'transform 1s linear'
})

