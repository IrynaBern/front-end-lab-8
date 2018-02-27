var rootNode = document.getElementById("root");
var doc = document;
var p;
var isFirst = true;
var li;
var icon;




function createTree(container, structure)
{
	if (isEmpty(structure)) 
	{
		p = doc.createElement('p');
		p.classList.add("empty");
		p.appendChild(doc.createTextNode("Folder is empty"));
		conteiner.appendChild(p);
		return;
	}
	var list = doc.createElement('ul');	
	for(var elem in structure)
	{
		//console.log(elem);
		let folderOpen = doc.createTextNode("folder_open");
		let folderClosed = doc.createTextNode("folder");
		let file = doc.createTextNode("insert_drive_file");
		li = doc.createElement('li');
		li.classList.add("list");
		p = doc.createElement('p');
		p.classList.add("folder-name");
		p.appendChild(doc.createTextNode(structure[elem].title));
		icon = doc.createElement('i');
		icon.classList.add("material-icons");
		if(structure[elem].folder == true)
		{
			li.classList.add("folder");
			icon.appendChild(folderClosed);
			
			if(structure[elem].title == "Films" || structure[elem].title == "Documents" ){
				li.classList.add("expand");
			}
			else 
			{
				li.classList.add("collapse");
			}
			
		}
		else{
			li.classList.add("file");
			icon.appendChild(file);
			li.classList.add("collapse");
		}
		li.appendChild(icon);
		li.appendChild(doc.createTextNode(structure[elem].title));
		li.addEventListener("click", displayEntry);
		li.addEventListener("mouseover", displayCursor);
		li.addEventListener("mouseout", hideCursor);
		list.appendChild(li);
		createTree(li, structure[elem].children);
	}
	container.appendChild(list);
}
    
    
function isEmpty(obj) 
{
	for (var i=0; i< structure.length; i++) 
	{
		return false;
	}
	return true;
}

function displayEntry()
{
	var elem = this.getElementsByClassName("material-icons");
	var nodes = this.getElementsByClassName("list");
	for(var i = 0; i < nodes.length; i++)
	{
		if(nodes[i].style.display == "block")
		{
			nodes[i].style.display = "none";
		}
		else 
		{
			nodes[i].style.display = "block";

		}
	}
}

function displayCursor(){
	
}

function hideCursor(){

		
		
}
createTree(rootNode, structure);






