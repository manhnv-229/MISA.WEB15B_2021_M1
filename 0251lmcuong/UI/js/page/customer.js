


$(document).ready(() => {
    //set event for button and rows in table customer
    setEventElement();
    //load data in table customer
    refeshDataForAPI(1);

});

//Cờ xác định update
var flatStateUpdateinforCustomer = null; //true là trạng thái update, false là trạng thái post
var flatStateDeleteInforCustomer = null; //true là trạng thái có đơn vị có thể xóa, false là ko có đơn vị để xóa
var recentCustomerId = null; // cờ chứa id khách hàng
var recentElementRowsInTable = null; // hàng hiện tại của bảng đang click
function setEventElement(){
    //an dialog
    hidenDialog();
    //an nut them thi hien dialog
    $(".content-customer-btn-text").click(function(){
        openDialog();
        $('.infor-customer .sub-infor input').val(null);
        $('.infor-customer .sub-infor select').val(null);
        //Cờ
        flatStateUpdateinforCustomer = true;
    });
    
    //an nut huy an dialog
    $(".save .btn-cancel").click(hidenDialog);

    //bam vao dong thi hien thong tin nen dialog
    $(document).on('dblclick', '.content-grid-table tbody tr', displayInforCustomerInDialog);


    //them va sua thong tin khach hang
    $(".infor-customer").submit(addAndUpdateInforCustomers);


    //Xóa thông tin khách hàng
    $(document).on('click', '.content-grid-table tbody tr', function(){

        recentCustomerId = $(this).data('rowId');
        if(flatStateDeleteInforCustomer){
            recentElementRowsInTable.removeClass("clicktr");
        }

        flatStateDeleteInforCustomer = true;
        recentElementRowsInTable = $(this);
        //hieu ung click
        $(this).addClass("clicktr");
    })
    $(".content-input .input-delete").click(function(){
        if(flatStateDeleteInforCustomer){
            if(confirm("Bạn có muốn xóa khách hàng không?")){
                $.ajax({
                    method: "DELETE",
                    url: "http://api.manhnv.net/api/customers/" + recentCustomerId,
                    success: function(response){
                        alert("Xóa khách hàng thành công");
                        refeshDataForAPI();
                    },
                    error: function(response){
                        alert(response.responseText);
                    }
                });
            }
            flatStateDeleteInforCustomer = false;
        }
        else{
            alert("Không có khách hàng được chọn")
        }
    })

    
    
}
//Hàm hiển thị thông tin khách hàng trên Dialog
function displayInforCustomerInDialog(){
    openDialog();

    //Cờ
    flatStateUpdateinforCustomer = true;

    var customerId = $(this).data('rowId');
    recentCustomerId = customerId;

    $.ajax({
        method: 'GET',
        url: `http://api.manhnv.net/api/customers/${customerId}`,
        async: true,
        contentType: "application/json",
        success: function(response){
            var customer = response;
            var dateOfBirth = formatDateYYYYMMDD(customer.DateOfBirth);
            $('#f-file-avatar').val();
            $('#txt-customer-id').val(customer.CustomerCode);
            $('#txt-customer-member-id').val(customer.MemberCardCode);
            $('#d-date-of-birth').val(dateOfBirth);
            $('#txt-full-name').val(customer.FullName);
            $('#sl-group-customer').val(customer.CustomerGroupId);
            $('#sl-gender').val(customer.Gender);
            $('#txt-email').val(customer.Email);
            $('#txt-phone-number').val(customer.PhoneNumber);
            $('#txt-company').val(customer.CompanyName);
            $('#txt-tax').val(customer.CompanyTaxCode);
            $('#txt-address').val(customer.Address);
            
        },
        error: function(response){
            alert("Lấy dữ liệu thất bại")
        }
    })
}

//Hàm thêm và sửa thông tin khách hàng
function addAndUpdateInforCustomers(){
    var method = "POST";
    var url = 'http://api.manhnv.net/api/customers';
    if(flatStateUpdateinforCustomer){
        method = "PUT";
        url = 'http://api.manhnv.net/api/customers/' + recentCustomerId;
    }
    var customerCode = $('#txt-customer-id').val()
    var fullName = $('#txt-full-name').val()
    var gender =  $('#sl-gender').val()
    var address = $('#txt-address').val()
    var dateOfBirth = $('#d-date-of-birth').val()
    var email =  $('#txt-email').val()
    var phoneNumber = $('#txt-phone-number').val()
    var customerGroupId = $('#sl-group-customer').val()
    var debitAmount = 0
    var memberCardCode = $('#txt-customer-member-id').val()
    var companyName = $('#txt-company').val()
    var companyTaxCode = $('#txt-tax').val()
    var isStopFollow = false
    var MISAEntityState = 0

    var newCustomer = {
        // "CustomerId":"
        "CustomerCode": customerCode,
        "FullName": fullName,
        "Gender": gender,
        "Address": address,
        "DateOfBirth": dateOfBirth,
        "Email": email,
        "PhoneNumber": phoneNumber,
        // "CustomerGroupId": customerGroupId
        // "DebitAmount": debitAmount,
        // "MemberCardCode":memberCardCode,
        // "CompanyName": companyName,
        // "CompanyTaxCode": companyTaxCode,
        // "IsStopFollow": isStopFollow,
        // "MISAEntityState": MISAEntityState
    }
    console.log(newCustomer);
    $.ajax({
        method: method,
        url: url,
        data: JSON.stringify(newCustomer), 
        contentType: "application/json",
        success: function(response){
            if(flatStateUpdateinforCustomer){
                alert("lưu dữ liệu thành công")
            }
            else{
                alert("Thêm dữ liệu thành công")
            }
            console.log(1);
            console.log(response);
        },
        error: function(response){
            console.log(response.responseText);
            console.log(response);
            alert("Lưu dữ liệu không thành công ");
        }
    })
    debugger;
}


function openDialog(){
    $(".dialog, .hiden").removeClass('hiden-element');
}

function hidenDialog(){
    $(".dialog, .hiden").addClass('hiden-element');
}

function refeshDataForAPI(){
    //xóa dữ liệu trước khi thêm
    $(".content-grid .content-grid-table tbody").empty();

    var data = getDataForAPI();
    loadDataForTableCustomers(data);
}

function getDataForAPI(){
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

function loadDataForTableCustomers(data){
    $.each(data, function(index, customer){
        var rowHTML = $(`
        <tr>
            <td>${customer.CustomerCode}</td>
            <td>${customer.FullName}</td>
            <td>${customer.Gender}</td>
            <td>${formatDateYYYYMMDD(customer.DateOfBirth)}</td>
            <td>${customer.CustomerGroupName}</td>
            <td>${customer.PhoneNumber}</td>
            <td>${customer.Email}</td>
            <td>${customer.DebitAmount}</td>
            <td><input type="checkbox" checked/></td>
        </tr>
        `);
        rowHTML.data('rowId', customer.CustomerId)
        // console.log(rowHTML.data('rowId'));
        $(".content-grid .content-grid-table tbody").append(rowHTML);
    })
    //$(".content-grid .content-grid-table")
}


function formatDateYYYYMMDD(date){
    var time = new Date(date);
    return `${time.getFullYear()}-${formatNumber(time.getMonth() + 1)}-${formatNumber(time.getDay())}`;
}
//chuyen so co 1 chu so sang string co 2 so 
function formatNumber(num){
    if(num < 10){
        return '0' + num;
    }
    else{
        return num;
    }
}