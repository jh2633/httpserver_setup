function Notepad(){

}

Notepad.prototype.note = function(){
  document
  .getElementById("create")
    .addEventListener("click", function(clickEvent){
      clickEvent.preventDefault();
      Notepad.prototype.abbrv();
    });
};

Notepad.prototype.abbrv = function(){
  var ul = document.getElementById("abbrv");
  var li = document.createElement("li");
  var a = document.createElement("a");
  var para = document.createElement("p");
  var p = document.getElementById("para");
  a.setAttribute('href', "http://google.com");
  a.appendChild(document.createTextNode(document.getElementById("content").value));
  li.appendChild(a);
  ul.appendChild(li);
  para.appendChild(document.createTextNode(document.getElementById("content").value));
  p.appendChild(para);
};
