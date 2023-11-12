console.log("hello bindiu");
let jsonData = {};

fetch('https://654cc48877200d6ba8596285.mockapi.io/urls')
  .then(response => {
   
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
   
    return response.json();
  })
  .then(data => {
 
    jsonData = data;
    console.log('JSON Data:', jsonData[0].url);

  
    const urls = jsonData.map(item => item.url);

   
    const ulElement = document.createElement("ul");
    urls.forEach(url => {
      const liElement = document.createElement("li");
      liElement.textContent = url;
      ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
  })
  .catch(error => {
    console.error('Error:', error);
  });
