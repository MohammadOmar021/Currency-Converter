
let convercurr = document.getElementById('convert-curr')
let convertcurrency = document.getElementById("covert-currency")


 async function  covertcurr(){
    
    let apirl =  await fetch ("https://v6.exchangerate-api.com/v6/fc8851abe3c70b15174a6911/latest/USD")
    console.log(apirl)
    
}