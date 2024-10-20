let api_key="I1cssHjVqeAgIAXlAhyC/Q==RW0b6odvsZ6OFhm1";
let options={
    method:"GET",
    headers:{
        "X-Api-Key":api_key,
    }
}
let search=document.querySelector("#search");
let button=document.querySelector(".btn");
let class2=document.querySelector(".class-2");
let code;
button.addEventListener("click",()=>{
    find();
})
async function find() {
        const response=await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search.value}`,options);
    if (response.ok) {
        let data=await response.json();
    console.log(data);
    if (data[0].phonetics[0]!=undefined) {
        code=`<h2>${search.value}</h2>
              <h4>${data[0].phonetics[0].text}</h4>
              <div>
              <h3>Meaning</h3>
              <p>${data[0].meanings[0].definitions[0].definition}</p>
              </div>
              <div>
              <h3>Example</h3>
              <p>${data[0].meanings[0].definitions[0].example}</p>
              </div>`;
    }else{
        code=`<h2>${search.value}</h2>
              <div>
              <h3>Meaning</h3>
              <p>${data[0].meanings[0].definitions[0].definition}</p>
              </div>
              <div>
              <h3>Example</h3>
              <p>${data[0].meanings[0].definitions[0].example}</p>
              </div>`;
    }
    class2.innerHTML=code;
    }else{
        class2.innerHTML='<p>Error Occured</p>'
}
}
