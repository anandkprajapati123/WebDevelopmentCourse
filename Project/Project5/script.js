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
}