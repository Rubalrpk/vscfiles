const url=  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const factPara= document.querySelector("#fact");
const btn=document.querySelector("#btn");

const getFacts= async () => {
    console.log("getting data....");
    let response= await fetch(url);
    console.log(response);
    let data= await response.json();
    factPara.innerText= data[0].text;
};
function getFacts(){
    fetch(url).then((response) => {
return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText=data[2].text;
    });
}


btn.addEventListener("click",getFacts);