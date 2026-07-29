fetch('./data.json')
.then(res=>res.json())
.then(data=>{
    console.log(data)
    const container = document.querySelector(".container")
    const productcard =document.querySelector(".productcard")
    data.forEach(product =>{
        const html=` 
        <div class="productcard">
          <div class="header">
            <p>20% OFF</p>
            <img src="${product.img}" alt="">  
        </div>
        <div class="deliverd">
            <i class="fa fa-bolt"></i>
            <p>10 MINS</p>
        </div>
        <div class="description">
            <p>fresho!</p>
        </div>
        <div class="cetogries">
            <p>${product.name}</p>
        </div>
        <div class="grams">
              <select>
                  <option>1Kg</option>
                  <option>1Kg</option>
                  <option>1Kg</option>
                  <option>1Kg</option>
                </select>            

        </div>
        <div class="units">
            <p>₹${product.originalPrice}</p>
            <del>₹${product.discountPrice}</del>
        </div>
        <div class="footer">
            <i class="fa fa-heart"></i>
            <button>Add</button>
        </div>
        </div>
        `
        const card=document.createElement("div")
        card.innerHTML=html
        container.append(card.firstElementChild)
    });
})
