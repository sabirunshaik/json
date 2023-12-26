const qoute=document.getElementById('qoute')
const author=document.getElementById('author')

async function randonqoutegenerater(){
    const response =await fetch('https://api.quotable.io/random')
    const data = await response.json()
    

    qoute.innerText= data.content
    author.innerText= data.author
}
randonqoutegenerater()

