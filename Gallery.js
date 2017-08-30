var path;
var extension;
var index;

var activePath;
var name;

function Gallery(target)
{
    path = "Images/Games/";
    extension = ".png";

    updateGalleryTarget(target);
}

function updateGalleryTarget(name) {
    activePath = path + name + "/gallery";
    this.name = name;

    index = 1;
    updateImage();
    
    //var text = '{ "name": "Spicy Piggy", "organisation": "Gypopothomas", "role": "Lead Programmer, Designer", "Info": "Developed by Gypopothomas and to be published by Nitrome, Spicy Piggy is sliding his way right onto your phone screens in 2017!"}';
    //var obj = JSON.parse(path + name + '/info.JSON');

    var client = new XMLHttpRequest();
    client.open('GET', path + name + '/info.json');
    client.onreadystatechange = function () {

        var obj = JSON.parse(client.responseText);

        document.getElementById("GalleryGameName").textContent = obj.name;
        document.getElementById("Organisation").textContent = obj.organisation;
        document.getElementById("Role").textContent = obj.role;
        document.getElementById("Info").textContent = obj.info;

    }
    client.send();
}

function resetIndex()
{
    index = 0;
}

function nextImage()
{
    index++;
    if (index >= 5)
        index = 0;

    updateImage();
}

function prevImage()
{
    index--;
    if (index < 0) index = 4;

    updateImage();
}

function showNext(name)
{
    if (this.name == name)
    {
        nextImage();
        updateImage();
    }
    else
    {
        updateGalleryTarget(name);
    }
}

function updateImage()
{
    document.getElementById("GalleryImage").src = this.activePath.concat(this.index.toString()).concat(extension);
}