<template>
    <div>
        <!--Navbar-->
        <div id="navbar">
            <div class="navbar-menu">
                <div class="navbar-menu-icon"></div>
                <div class="navbar-menu-logo"></div>
            </div>
            <ul class="navbar-list">
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-sumary"></div>
                        <p  class="navbar-items-text">Tổng quan</p>
                    </a>
                </li>
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-report"></div>
                        <p  class="navbar-items-text">Báo cáo</p>
                    </a>
                </li>
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-buy"></div>
                        <p  class="navbar-items-text">Mua hàng</p>
                    </a>
                </li>
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-customer"></div>
                        <p  class="navbar-items-text">Danh mục khách hàng</p>
                    </a>
                </li>
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-customer-sum"></div>
                        <p  class="navbar-items-text">Danh mục khách hàng</p>
                    </a>
                </li>
                <li >
                    <a href="#" class="navbar-items">
                        <div class="navbar-items-logo logo-setting"></div>
                        <p  class="navbar-items-text">Thiết lập hệ thống</p>
                    </a>
                </li>
            </ul>
        </div>
    <!--End Navbar-->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #navbar{
    background-color: #FFFFFF;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 200px;
    }
    /* navbar menu */
    .navbar-menu{
        display: flex;
        align-items: center;
        height: 48px;
        width: 100%;
        cursor: pointer;
    }
        .navbar-menu .navbar-menu-icon {
            margin-left: 16px;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            background-image: url(../../assets/img/toggle.png);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        }

        .navbar-menu .navbar-menu-logo {
            margin-left: 10px;
            width:calc(100% - 50px);
            height:24px;
            flex-shrink: 0;
            background-image: url('../../assets/img/cukcuk-logo.png');
            background-size:contain;
            background-position: left;
            background-repeat: no-repeat;
        }
    /* navbar list */
    #navbar .navbar-list {
        margin: 0;
        padding: 0;
    }
        li{
            list-style-type: none;
        }
        .navbar-list .navbar-items{
            display: flex;
            align-items: center;
            height: 44px;
            padding: 0;
            text-decoration: none;
            color: black
        }

        .navbar-list .navbar-items:hover{
            background-color: #dedede;
            cursor: pointer;
        }

        .navbar-list .navbar-items:focus{
            background-color: #019160;
            color: #FFFFFF;
            
        }

            .navbar-items .navbar-items-logo {
                margin-left: 16px;
                width: 20px;
                height: 20px;
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center;
            }

            .navbar-items .navbar-items-text{
                margin-left: 10px;
                text-decoration: none;
            }


            
            /* Navbar logo*/
            .logo-sumary{
                background-image: url('../../assets/icon/dashboard.png');
            }

            .logo-report {
                background-image: url('../../assets/icon/report.png');
            }

            .logo-buy{
                background-image: url('../../assets/icon/dashboard.png');
            }

            .logo-customer{
                background-image: url('../../assets/icon/dic-employee.png');
            }
                
            .logo-customer-sum{
                background-image: url('../../assets/icon/dic-employee.png');
            }

            .logo-setting{
                background-image: url('../../assets/icon/setting.png');
            }
        
</style>