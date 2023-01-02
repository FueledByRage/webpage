window.onLoad = onLoad;

function onLoad(){const svgRed = document.createElement('svg');
const svgCyan = document.createElement('svg');
const polygonRed = document.createElement('polygon');
const polygonCyan = document.createElement('polygon');

const imageLinks = ['../assets/images/about.png', 
'../assets/images/skills.png',
'../assets/images/portfolio.png',
'../assets/images/github.png',
];
const svgAttributes = {
    x: '0',
    y: '0',
    viewBox: '0 0 108.1 47',
    enableBackground: 'new 0 0 108.1 47'
};

const redPolygonAttributes = {
    fill: '#FF0000',
    points: "8,5 100.7,2 130.1,30.7 .2,25 "
};
const cyanPolygonAttributes = {
    fill: '#00FFFF',
    points: '.1,10 120.1,2 100,30 3.3,25'
}

imageLinks.map(element =>{
    const container = document.getElementById('container');
    const links = document.createElement('div');
    let linkWrapper = document.createElement('a');
    let imageWrapper = document.createElement('div');
    let image = document.createElement('img');
    let shapeWrapper = document.createElement('div');
    let shapeRed = document.createElement('div');
    let shapeCyan = document.createElement('div');

    setAttributes(svgRed, svgAttributes);
    setAttributes(svgCyan, svgAttributes);
    setAttributes(polygonRed, redPolygonAttributes);
    setAttributes(polygonCyan, cyanPolygonAttributes);
    

    links.setAttribute('class', 'links');
    linkWrapper.setAttribute('class', 'link-wrapper');
    imageWrapper.setAttribute('class', 'image-wrapper');
    image.setAttribute('class', 'imageLink');
    image.setAttribute('src', element);
    shapeWrapper.setAttribute('class', 'shape-wrapper');
    shapeRed.setAttribute('class', 'red-cyan');
    shapeCyan.setAttribute('class', 'shape-cyan');


    svgRed.appendChild(polygonRed);
    svgCyan.appendChild(polygonCyan);

    imageWrapper.appendChild(image);

    shapeWrapper.appendChild(svgRed);
    shapeWrapper.appendChild(svgCyan);


    linkWrapper.appendChild(shapeWrapper);

    links.appendChild(linkWrapper);
    container.appendChild(links);
});

function setAttributes(element, attributes){
    //It's gonna set multiples attributes listed in a object to a element

    Object.keys(attributes).map(attribute =>{
        element.setAttribute(attribute, attributes.attribute);
    });
}}