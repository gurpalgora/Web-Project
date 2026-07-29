fetch('https://fakestoreapi.com/products/')
.then(res=>res.json())
.then(data=>{
    const container = document.querySelector(".container")
    data.forEach(product=> {
        const card = document.createElement("div")
        card.classList="card";
        const img =document.createElement("img")
        img.width="100px";
        img.height="140px";
        img.src= product.image
        
        const title =document.createElement("h3")
        title.textContent =product.title
        const price=document.createElement("p")
        price.textContent= product.price 
        const btn =document.createElement("button")
        btn.textContent="Buy Now"
        btn.style.backgroundColor="yellow"
        btn.style.color="black"
        btn.style.border="1px solid gray"
        btn.style.padding="5px"
        btn.style.borderRadius="4px",btn.style.cursor="pointer"
        card.append(img);
        card.append(title);
        card.append(price)
        card.append(btn);
        container.append(card);
    });
})