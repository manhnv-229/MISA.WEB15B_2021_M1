var hiden = document.querySelectorAll(".hiden");
hiden[0].style.display = "none";

var dialog = document.querySelectorAll(".dialog");
dialog[0].style.display = "none";

var btnAddEmployee = document.querySelectorAll(".content-customer-btn-text");

btnAddEmployee[0].onclick = () => {
    console.log("add employee");
    hiden[0].style.display = "block";
    dialog[0].style.display = "block";
}

var btnCancel = document.querySelectorAll(".btn-cancel");

btnCancel[0].onclick = () => {
    console.log("cancel");
    hiden[0].style.display = "none";
    dialog[0].style.display = "none";
}