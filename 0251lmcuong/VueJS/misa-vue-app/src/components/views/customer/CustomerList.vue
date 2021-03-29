<template>
    <div id="content">
        <div class="content-customer">
            <h3 class="content-customer-title">Danh sách khách hàng</h3>
            <div class="content-customer-btn">
                <input class="content-customer-btn-text btn" type="button" value="Thêm khách hàng"/>
            </div>
            
        </div>
        <div class="content-input">
            <input type="text" class="content-input-search input-search" placeholder="Tìm kiếm theo Mã, Tên khác" />
            <input type="button" class="content-input-refresh btn input-delete" value="Xóa"/>
            <input type="button" class="content-input-refresh btn btn-refresh" />
        </div>
        <div class="content-grid">
            <table class="content-grid-table" style="width:100%">
                <thead>
                    <tr>
                        <th>Mã khách hàng</th>
                        <th>Họ và tên</th>
                        <th>Giới tính</th>
                        <th>Ngày sinh</th>
                        <th>Nhóm khác hàng</th>
                        <th>Điện thoại</th>
                        <th>Email</th>
                        <th>Số tiền nợ</th>
                        <th>Đang hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>23112313</td>
                        <td>Nguyễn Văn Đức</td>
                        <td>Nam</td>
                        <td>01/03/2021</td>
                        <td>Nhóm khách hàng MISA</td>
                        <td>213313412313</td>
                        <td>nguyenvanduc213@gmail.com</td>
                        <td></td>
                        <td><input type="checkbox" checked></td>
                    </tr>
                </tbody>
                
                
            </table>
        </div>
        <!-- Footer -->
        <div id="footer">
            <div class="subfooter">
                <div class="sum-of-person">Hiển thị 1-10/1000 Khách hàng</div>
                <div class="navigation">
                    <ul class="list-navigation">
                        <li>
                            <a class="first-page action-page" href="#"></a>
                        </li>
                        <li>
                            <a class="prev-page action-page" href="#"></a>
                        </li>
                        <li>
                            <a class="page" href="#">1</a>
                        </li>
                        <li>
                            <a class="page" href="#">2</a>
                        </li>
                        <li>
                            <a class="page" href="#">3</a>
                        </li>
                        <li>
                            <a class="page" href="#">4</a>
                        </li>
                        <li>
                            <a class="next-page action-page" href="#"></a>
                        </li>
                        <li>
                            <a class="last-page action-page" href="#"></a>
                        </li>
                    </ul>
                </div>
                <div class="display-person">10 Khách hàng/trang</div>
            </div>
        </div>
        
        <!-- End Footer -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    
    #footer{
    position: absolute;
    left:0px;
    bottom: 10px;
    height: 56px;
    width: calc(100% - 34px);
    padding: 16px;
    padding-top: 0;
    padding-bottom: 0;
    
}
    .content-grid{
    position: absolute;
    right:  24px;
    left: 24px;
    bottom: 60px;
    top: 128px;
    overflow-y:auto;
    height: calc(100% - 192px);
}
.content-grid .content-grid-table{
    border: 0;
}

#content{
    background-color: #fff;
    position: absolute;
    top: 48px;
    left: 200px;
    width: calc(100% - 234px);
    height: calc(100% - 82px);
    padding: 16px;
    border: 1px solid #dedede;
}
</style>