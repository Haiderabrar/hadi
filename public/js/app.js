console.log('client side java')

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const mone=document.querySelector('#m1')
const mtwo=document.querySelector('#m2')
const mthree=document.querySelector('#m3')
mone.textContent="loading..."
mtwo.textContent=""
mthree.textContent=""

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    
    fetch('/weather?address='+location).then((responce)=>{
    responce.json().then((data)=>{
        if(data.error){mone.textContent=data.error}
        else{
            mone.textContent=data.forecast
            mtwo.textContent=data.location
            mthree.textContent="myapp"
        }
    })
})
})