const getData=()=>{
    const val=document.getElementById("search_id").value;
    fetch(`https://dog.ceo/api/breeds/image/random/${val}`)
    .then((res) => res.json())
    .then((data)=>{
        const myJSON=JSON.stringify(data,null,2);
        // Display a specific property from the JSON object
        if(data.login){
            document.getElementById("display").innerText += `${myJSON}\n\nUsername:${data.login}`;
        } else{
            document.getElementById("display").innerText='User not found.';
        }
    })
    .catch((error)=>{
        document.getElementById("display").innerText=`Error:${error.message}`
    });
};