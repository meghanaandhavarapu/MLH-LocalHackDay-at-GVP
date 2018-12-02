const app = new Clarifai.App({
 apiKey: '6944869d5ce34a86a0dcc29416f2a543'
});

const detect = async () =>{

    const image = document.getElementsByClassName('image')[0].value;
    const response = await app.models.predict(Clarifai.GENERAL_MODEL,image);
    const items = await createItems(response.outputs[0].data.concepts);
    console.log(response);
    const ul = document.getElementsByClassName("ingredients")[0];
    ul.innerHTML = items;
}

const createItems = (concepts)=> {
  const items = concepts.reduce((accumulator, item)=>{
    return accumulator+`<li>${item.name}, probability: ${item.value}</li>`;
  },"");
  return items;
}