<<<<<<< HEAD
var tablinks=document.getElementsByClassName("tab-link");
var contents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
    // document.getElementById(tabname).classlist.add("active-tab");
=======
var tablinks=document.getElementsByClassName("tab-link");
var contents=document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove("active-links");
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove("active-tab");
    }
    // document.getElementById(tabname).classlist.add("active-tab");
>>>>>>> 51a78a7f71602c9a2b5e6e6707ddc28dcea13fda
}