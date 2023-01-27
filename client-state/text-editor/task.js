const editor = document.getElementById('editor');



editor.addEventListener("keyup", (event) => {
    localStorage.setItem('storage',event.key)

    console.log(localStorage.getItem('storage'))
    
    
})


