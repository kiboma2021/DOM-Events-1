const intro = document.getElementById("intro").innerHTML;
document.getElementById("get-intro").innerHTML = intro;

const useTagName = document.getElementsByTagName("p");
document.getElementById("write-here").innerHTML = useTagName[0].innerHTML;
console.log(useTagName);