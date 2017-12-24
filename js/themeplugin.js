//Copyright iApps4YOU. Created by @jakeashacks
var $$ = Dom7;
$$("body").addClass("theme-blue");
var check=""
//Our class name here
var className = "layout-dark";
var body = document.getElementById("changethistheme");
//Here magic happens
function changeTheme() {

if (document.getElementById("theme").checked) {
localStorage.setItem('className', className);
                body.setAttribute("class", className);
                e.stopPropagation();

}
else {
localStorage.removeItem('className', className);
                body.removeAttribute("class", className);
                e.stopPropagation();
}
}
//Remember users choice
var retrievedClassName = localStorage.getItem('className');
         if(retrievedClassName){
                body.setAttribute("class", retrievedClassName);
  
}
document.addEventListener('DOMContentLoaded', function(){
  var theme = document.querySelector('#theme');
  var isChecked = parseInt(localStorage.getItem('isChecked'));
  theme.checked = isChecked;

  theme.addEventListener('change', function() {
    var checked = this.checked ? 1 : 0;
    localStorage.setItem('isChecked', checked);
  });
});