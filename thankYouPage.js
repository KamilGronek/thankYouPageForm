

const thankYoupageHeader = document.getElementById('thankYouPage_header');
const createTagU = document.createElement("u");
const createTagA = document.createElement("a");
const createExclamaionMark = document.createTextNode(' !');
createTagU.style.paddingLeft= "5px";
createTagA.style.paddingLeft= "5px";
const textnode = document.createTextNode(findGetParameter('name'));


createTagU.appendChild(textnode);
thankYoupageHeader.appendChild(createTagU);
createTagA.appendChild(createExclamaionMark);
thankYoupageHeader.appendChild(createTagA);


function findGetParameter(parameterName){
    var result = null,
        tmp = [];
    var items = location.search.substr(1).split("&");
    for (var index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

