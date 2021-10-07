const panels=document.querySelectorAll('.panel')

panels.forEach(panel =>{
    panel.addEventListener('click',()=>{
        remove_child()
        panel.classList.add('active')
   })
})

function remove_child(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}