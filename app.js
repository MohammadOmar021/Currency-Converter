let currencydrop = document.getElementById("currencydrop");
let currencyTo = document.getElementById("currencyTo")
// let date = document.getElementById("date")
let from;
let to;
 let convertBtn = document.getElementById("convertBtn")
async function currencyConvert(params) {
   try{
    const apiUrl = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/country.json");
    const result = await apiUrl.json()
     console.log(result);
    
    for (const key in result) {
        // console.log(result[key].country_name);
        currencydrop.innerHTML+=` <option value="${result[key].currency_code}">${result[key].currency_code}-${result[key].country_name}</option>`
        currencyTo.innerHTML+=`<option value="${result[key].currency_code}">${result[key].currency_code}-${result[key].country_name}</option>`

    }

    // let  date1 = new Date();
    
    // date.innerHTML=`${date1.toLocaleDateString()}`
    
   }catch(err){
    console.log(err);
   }
}



window.onload = ()=>{
    currencyConvert();
}

convertBtn.addEventListener('click', ()=>{
    let inputValue = document.getElementById("inputValue").value
    let outputValue = document.getElementById("outputValue").value
    let fromCurrency = document.getElementById("currencydrop").value
    let toCurrency = document.getElementById("currencyTo").value})
    
    // console.log(code);

    function convertBtn(){


    }
    
    
    