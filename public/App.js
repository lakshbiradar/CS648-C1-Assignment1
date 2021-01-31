
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = React.createElement(
  'h1',
  null,
  'Lakshmi Biradar'
);
var imageComponent = React.createElement('img', { id: 'img-st', src: './Lakshmi.jpg' });
var introComponent = React.createElement(
  'p',
  null,
  'I have worked at Accenture, India for 5 years as a Senior Software Engineer. Working for a Pharma client, my work was focused on building various CRM solutions using Salesforce. While working on Visualforce (Salesforce web development framework) I was drawn towards web development and was keen to understand and learn how it works. Hence, I opted for course with a aim to enhance my technical skills. '
);
var gitComponent = React.createElement(
  'button',
  { id: 'btn' },
  React.createElement(
    'a',
    { href: 'https://github.com/lakshbiradar' },
    'VIEW MY GITHUB REPO'
  )
);
ReactDOM.render(nameComponent, nameNode);
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);