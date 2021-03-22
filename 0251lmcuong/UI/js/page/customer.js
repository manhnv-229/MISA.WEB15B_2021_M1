//Hiện và ẩn phần thêm khách hàng

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

$(document).ready(() => {
    setEvent();
    loadData(1);
});

function setEvent(){

}

function loadData(){
    var data = getData();
    // console.table(data);
    displayTableData(data);
}

function getData(){
    var data;
    $.ajax({
        method: 'GET',
        url: 'http://api.manhnv.net/api/customers',
        async: false,
        contentType: "application/json",
        success: function(response){
            data = response;
        },
        error: function(response){
            alert("Lấy dữ liệu thất bại")
        }
    })
    return data;
}

function displayTableData(data){
    $.each(data, function(index, customer){
        var rowHTML = $(`
        <tr>
            <td>${customer.CustomerCode}</td>
            <td>${customer.FullName}</td>
            <td>${customer.Gender}</td>
            <td>${customer.DateOfBirth}</td>
            <td>${customer.CustomerGroupName}</td>
            <td>${customer.PhoneNumber}</td>
            <td>${customer.Email}</td>
            <td>${customer.Email}</td>
            <td>${customer.DebitAmount}</td>
            <td>${customer.MemberCardCode}</td>
        </tr>
        `);
        $(".content-grid .content-grid-table").append(rowHTML);
    })
    //$(".content-grid .content-grid-table")
}


