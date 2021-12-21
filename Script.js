let namNode1 = document.getElementById("name")
let namNode2 = document.getElementById("num")
let namNode3 = document.getElementById("email")
let namNode4 = document.getElementById("country")
let namNode5 = document.getElementById("subj")
let namNode6 = document.getElementById("com_des")
let border1 = "3px solid red"
let border2 = "2px solid greeen"
let spNode1 = document.getElementById("sp1")
let spNode2 = document.getElementById("sp2")
let spNode3 = document.getElementById("sp3")
let spNode4 = document.getElementById("sp4")
let spNode5 = document.getElementById("sp5")
let spNode6 = document.getElementById("sp6")

$(document).ready(function() {
    $("#reset_but").mousedown(function() {
        alert("Are you sure you want to reset the details?");
    });
    $("#submit_but").mousedown(function() {
        alert("Are you sure you want to submit the details?");
    });
});