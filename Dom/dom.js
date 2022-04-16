//mes diffrents btn
var plus= document.querySelector(".btn_plus");
var minus= document.querySelector('.btn_minus');
var my_article= document.querySelector('#btn_article')


//mes event sur les btn
plus.addEventListener("click",plusQty) ;
minus.addEventListener("click",minusQty) ;
my_article.addEventListener("click", useArticle);


//event de mon btn plus
function plusQty(){   
    document.querySelector(".place_price").value = parseFloat(document.querySelector(".place_price").value)+1;
    total()      //creation de ma function total pour adapter mon prix
}
//event de mon btn minus
function minusQty(){
    if (document.querySelector(".place_price").value>0){
        document.querySelector(".place_price").value = parseFloat(document.querySelector(".place_price").value)-1;
    }
    total()  //creation de ma function total pour incrementer mon prix
}

//function total
function total() {
    var price=parseFloat(document.querySelector(".price_article").innerText);
    var quantity=parseFloat(document.querySelector(".place_price").value);
    var total_price= price*quantity;

    document.querySelector(".subtotal").innerText=total_price+"€"
}

//event pour ajouter un article

function  useArticle(){
        document.querySelector("figure").innerHTML+='   <figure><td><img src="mac2.jpeg" alt=""><td><td  class="quantity"><button class="btn_minus" >-</button><input type="text"  readonly placeholder="Unit price" class="place_price" value="1" style="width: 14%;"><button class="btn_plus" >+</button></td></td><td class="price_article"  style="color: aliceblue;" >998,9 €</td><td class="subtotal" style="color:rgb(39, 70, 126); padding-left: 80px;" >998,9 € </td></figure>'
}
