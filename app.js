let text = document.getElementById("text")

async function Convert() {
    const reponse = await fetch();
    const data = await reponse.json();
    console.log(data);
    
}