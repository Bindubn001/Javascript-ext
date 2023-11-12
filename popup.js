console.log("hello bindiu");
let jsonData = {};

// fetch('https://654cc48877200d6ba8596285.mockapi.io/urls')
//   .then(response => {
//     // Check if the response is successful (status code 200-299)
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     // Parse the response as JSON
//     return response.json();
//   })
//   .then(data => {
//     // Store the JSON data in a variable
//     jsonData = data;
//     console.log('JSON Data:', jsonData[0].url);

//     // Now that jsonData is populated, proceed with further operations
//     const urls = jsonData.map(item => item.url);

//     // Display the URLs in the popup
//     const ulElement = document.createElement("ul");
//     urls.forEach(url => {
//       const liElement = document.createElement("li");
//       liElement.textContent = url;
//       ulElement.appendChild(liElement);
//     });

//     document.body.appendChild(ulElement);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// Node.js example
const axios = require('axios');

// Browser example (if included from CDN)
// const axios = window.axios;

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

