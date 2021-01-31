
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = <h1>Lakshmi Biradar</h1>; 
var imageComponent = <img id="img-st" src="./Lakshmi.jpg"/>;
var introComponent = <p>I have worked at Accenture, India for 5 years as a Senior Software Engineer. 
Working for a Pharma client, my work was focused on building various CRM solutions using Salesforce. While working on Visualforce (Salesforce web development framework) 
I was drawn towards web development and was keen to understand and learn how it works. Hence, I opted for course with a aim to enhance my technical skills. </p> 
var gitComponent = <button id="btn"><a href="https://github.com/lakshbiradar">VIEW MY GITHUB REPO</a></button>
ReactDOM.render(nameComponent, nameNode); 
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);