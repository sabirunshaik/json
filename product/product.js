const productapi = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const products = data.products;
  // console.log(products);

  products.map((product) => {
    console.log(product);

    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h1");
    const price = document.createElement("p");
    const discription = document.createElement("p");
    const category=document.createElement("p");
    const button=document.createElement("button")
    button.addEventListener('click',()=>{
      button.innerText="ADDED SUCCESFULLY"
      button.style.backgroundColor="green"
      setTimeout(() => {
        button.innerText="ADD TO CART"
        button.style.backgroundColor="brown"
      },2000);
    })

    img.src = product.thumbnail;
    title.innerText= product.title
    price.innerText=`Price: ${product.price}`;
    discription.innerText=`Discription: ${product.description}`
    category.innerText=product.category
    button.innerText="ADD TO CART";
    


    div.classList.add('card')

    div.append(img, title, price, discription,category,button);
    document.body.appendChild(div);
  });
};
productapi();
const mbicon=document.getElementById('mbicon')
const navlist=document.getElementById('mblist')
mbicon.addEventListener('click',function(){
    navlist.classList.toggle('shownhide')
    console.log('mbicon');
})