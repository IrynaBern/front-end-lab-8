window.onhashchange = hashHandler;
let rootNode = document.getElementById('root');
let doc = document;
let conteiner = doc.createElement('div');
conteiner.classList.add('thumbnails');
rootNode.appendChild(conteiner);
let details = doc.createElement('div');
details.classList.add('details');
rootNode.appendChild(details);
let modelMap = new Object;
tanks.forEach( (item) => modelMap[item.model] = item );
hashHandler();
function hashHandler() {
	let hash = window.location.hash.slice(1);
	let tank = modelMap[hash];
	if (hash && tank) {
		showDetails(tank);
	} 
};
function clearContent() {
	let content = document.getElementsByClassName('thumbnails')[0];

	if (content) {
		root.removeChild(content);
	};
};
function tanksPreviw(){
	let models = [];
	let picture = [];
	let div = [];
	let flags = [];
	let level;
	let txt, str;
	let i, j;
	let anchor = [];
	let h1 = doc.createElement('h1');
	h1.appendChild(doc.createTextNode("Most popular tanks"));
	conteiner.appendChild(h1);
	let grid = doc.createElement('div');
	grid.classList.add('grid');
	for (i = 0; i < 8; i++){
		picture[i] = doc.createElement('img');
		picture[i].classList.add('picture');
		picture[i].src = tanks[i].preview;
		picture[i].alt = tanks[i].model;
		picture[i].title = tanks[i].model;
	}
	for (i = 0; i < 8; i++){
		flags[i] = doc.createElement('img');
		flags[i].classList.add('flags');
		flags[i].src = tanks[i].country_image;
		flags[i].alt = tanks[i].country;
		flags[i].title = tanks[i].country;
	}
	for (i = 0; i < 8; i++){
		models[i] = doc.createElement('div');
		models[i].classList.add('modeldiv');
		models[i].appendChild(flags[i]);
		level = doc.createElement('span');
		level.appendChild(doc.createTextNode(tanks[i].level));
		level.classList.add('level');
		models[i].appendChild(level);
		model = doc.createElement('span');
		str = tanks[i].model;
		if(str.length > 14)	{
			str = str.slice(0,11);
			str += "...";
		}
		txt = doc.createTextNode(str);
		model.appendChild(txt);
		model.classList.add('model');
		models[i].appendChild(model);
	}
	for(i = 0; i < 8; i++){
		anchor[i]=doc.createElement('a');
		anchor[i].title = 'Click to open details';
		anchor[i].href  = '#' + tanks[i].model;
		div[i] = doc.createElement('div');
		div[i].classList.add('childGrid');
		div[i].appendChild(picture[i]);
		div[i].appendChild(models[i]);
		anchor[i].appendChild(div[i]);
		console.log("location" + anchor[i].href);
		grid.appendChild(anchor[i]);
	}
conteiner.appendChild(grid);
}

tanksPreviw();
function showDetails(elem){
	clearContent();
	let h1 = doc.createElement('h1');
	let flag = doc.createElement('img');
	flag.src = elem.country_image;
	flag.alt = elem.country;
	flag.title = elem.country;
	flag.classList.add('flags');
	h1.appendChild(flag);
	h1.appendChild(doc.createTextNode(elem.model));
	h1.appendChild(doc.createTextNode('   (level 10)'));
	details.appendChild(h1);
	let detailsDiv = doc.createElement('div');
	detailsDiv.classList.add('detailsGrid');
	let imgDiv = doc.createElement('div');
	imgDiv.classList.add('imgDiv');
	let tableDiv = doc.createElement('div');
	tableDiv.classList.add('tableDiv');
	let title1 = doc.createElement('h2');
	title1.appendChild(doc.createTextNode("Preview"));
	imgDiv.appendChild(title1);
	let imgPrew = doc.createElement('img');
	imgPrew.src = elem.preview;
	imgPrew.alt = elem.model;
	imgDiv.appendChild(imgPrew);
	let title2 = doc.createElement('h2');
	title2.appendChild(doc.createTextNode("Characteristic"));
	tableDiv.appendChild(title2);
	detailsDiv.appendChild(imgDiv);
	detailsDiv.appendChild(tableDiv);
	let det = elem.details;
	let table = doc.createElement('table');
	let tr = [];
	let td = [];
	let i=0, j=0;
	for(let prop in det) {
		tr[i] = doc.createElement('tr');
		td[j] = doc.createElement('td');
		td[j + 1] = doc.createElement('td');
		td[j].appendChild(doc.createTextNode(prop));
		td[j + 1].appendChild(doc.createTextNode(det[prop]));
		tr[i].appendChild(td[j]);
		tr[i].appendChild(td[j + 1]);
		table.appendChild(tr[i]);
		i++; 
		j += 2;
	}
	tableDiv.appendChild(table);
	let goBack = doc.createElement('a');
	goBack.appendChild(doc.createTextNode("Back to list view"));
	goBack.href = "";
	details.appendChild(detailsDiv);
	details.appendChild(goBack);
}


