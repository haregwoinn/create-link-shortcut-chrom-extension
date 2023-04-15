
const Describtion = document.getElementById("describition");
let links = document.getElementById("links");
const linkName = document.getElementById("linkname");
const rowlist = document.getElementById("rowlist");


const getUrlname = (urls)=>{
    let hostName = urls
hostName = hostName.replace("https://", "");
hostName = hostName.replace("https://", "");
hostName = hostName.replace("www.", "");
return hostName.split(".")[0];
}

const checkUrl = (urls)=>{
    let adressUrl ;
    try{
        adressUrl = new URL(urls);
    }catch(err){
        return false;
    }
    return true;
}

function extractFavicon(url) {
  var favicon = "";
  var nodes = document.head.getElementsByTagName("link");
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    if (node.rel === "icon" || node.rel === "shortcut icon") {
      favicon = node.href;
      break;
    }
  }
  if (favicon.indexOf("http") !== 0) {
    var parser = document.createElement("a");
    parser.href = url;
    favicon = parser.protocol + "//" + parser.hostname + "/favicon.ico";
  }
  return favicon;
}

 
const createlink = ()=>{

   if(checkUrl(Describtion.value)){
const keyValue =Math.floor(Math.random()*(999-100+1)+100);
localStorage.setItem(keyValue, Describtion.value);

 let columen = document.createElement('div');
    columen.setAttribute("class", "col-2 columenbox");
    columen.setAttribute("id", "createdcolumen");
    rowlist.appendChild(columen);

        const cardcontainer = document.createElement('div');
    cardcontainer.setAttribute("class", "card border-primary mb-3 text-center");
    columen.appendChild(cardcontainer);

          const urlname = document.createElement('div');
    urlname.setAttribute("class", "card-header");
    urlname.setAttribute("id", "linkname");
    cardcontainer.appendChild(urlname);
    urlname.innerHTML= getUrlname(Describtion.value);

         const anchorlink = document.createElement('a');
    anchorlink.setAttribute("id", "links");
    anchorlink.setAttribute("href", Describtion.value);
    cardcontainer.appendChild(anchorlink);

        const cardbody = document.createElement('div');
    cardbody.setAttribute("class", "card-body text-primary");
    anchorlink.appendChild(cardbody);


    const icons = extractFavicon(Describtion.value);
        const images = document.createElement('img');
    images.setAttribute("src", icons);
    cardbody.appendChild(images);

      const deleteicon = document.createElement("button");
    deleteicon.setAttribute("class", "btn btn-danger btn-sm");
    deleteicon.setAttribute("id", keyValue);
    deleteicon.setAttribute("type", "button");
    columen.appendChild(deleteicon);
    deleteicon.innerHTML = "Remove"

    deleteicon.addEventListener('click', function() {
        localStorage.removeItem(deleteicon.id);
        location.reload();
    });
   }
    Describtion.value = "";
    
}

for (let i = 0; i < localStorage.length; i++){
     
 const generatedurl = localStorage.getItem(localStorage.key(i));
    

 let columen = document.createElement('div');
    columen.setAttribute("class", "col-2 columenbox");
    columen.setAttribute("id", "createdcolumen");
    rowlist.appendChild(columen);
    
        const cardcontainer = document.createElement('div');
    cardcontainer.setAttribute("class", "card border-primary mb-3 text-center");
    columen.appendChild(cardcontainer);

         const urlname = document.createElement('div');
    urlname.setAttribute("class", "card-header");
    urlname.setAttribute("id", "linkname");
    cardcontainer.appendChild(urlname);
    urlname.innerHTML= getUrlname(generatedurl);

         const anchorlink = document.createElement('a');
    anchorlink.setAttribute("id", "links");
    anchorlink.setAttribute("href", generatedurl);
    cardcontainer.appendChild(anchorlink);


        const cardbody = document.createElement('div');
    cardbody.setAttribute("class", "card-body text-primary");
    anchorlink.appendChild(cardbody);
    


    const icons = extractFavicon(generatedurl);
    const images = document.createElement('img');
    images.setAttribute("src", icons);
    cardbody.appendChild(images);


    const deleteicon = document.createElement("button");
    deleteicon.setAttribute("class", "btn btn-danger btn-sm");
    deleteicon.setAttribute("id", localStorage.key(i));
    deleteicon.setAttribute("type", "button");
    columen.appendChild(deleteicon);
    deleteicon.innerHTML = "Remove"

    deleteicon.addEventListener('click', function() {
        localStorage.removeItem(deleteicon.id);
        location.reload();
    });
     }
 









