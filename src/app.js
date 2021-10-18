console.log("Merhaba Kodlama.io")

//"var" değişken ataması değer her gördüğünde değişiyor.
//fakat "let" eğer aynı alan içinde değilse umursamıyor.

//dolarDun ="Ankara"
let dolarBugun=9.30
let dolarDun=9.20

{
    let dolarDun=9.50
}
console.log(dolarDun)

const euroDun=11.2

//euroDun=11 (const verilmiş sabit değer varken değer verilmesi hatalıdır.) 

console.log(euroDun)

//isimlendirmeler camelCase olacak. 

//array
let konutKredileri=["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

//let konutKredileri=["Konut Kredisi",["a",1,"b","g"],27]

//let users = getUsersFromApi()

console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    
    console.log("<li>"+ konutKredileri[i] +"</li>")
    
}
console.log("</ul>")
console.log(konutKredileri)
