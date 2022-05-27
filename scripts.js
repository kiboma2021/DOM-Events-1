//Get Element by ID
const intro = document.getElementById("intro").innerHTML;
document.getElementById("get-intro").innerHTML = intro;

//Get Element by Tag Name
const useTagName = document.getElementsByTagName("p");
document.getElementById("write-here").innerHTML = useTagName[0].innerHTML;

//Get Element by Tag Name within a particular section
const x = document.getElementById("tag-section");
const y = x.getElementsByTagName("p");
document.getElementById("write-here1").innerHTML = y[0].innerHTML;

//get Element by class name
const m = document.getElementsByClassName("intro");
document.getElementById("write-here2").innerHTML=m[0].innerHTML +'- Using DOM getby class';