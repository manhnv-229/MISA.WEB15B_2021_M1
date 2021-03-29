<template>
    <div>
        <!--Header-->
        <div id="header">
            <div class="header-select">
                <p class="header-select-text">Nhà hàng Biển Đông</p>
                <div class="header-select-icon icon-arrow icon" ></div>
            </div>
            <div class="header-owner">
                <div class="header-owner-ava icon-ava icon" ></div>
                <p class="header-owner-text">Nguyễn Văn Mạnh</p>
                <div class="header-owner-icon icon-option icon"></div>
            </div>
        </div>
        <!--End Header-->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    #header{
    background-color: #fff;
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;
    position: absolute;
    top: 0px;
    left: 200px;
    height: 48px;
    width: calc(100% - 234px);
    padding-left: 16px;
    padding-right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
    .header-select{
        display: flex;
    }
        .header-select .header-select-text{
            padding: 16px;
            padding-left: 0;
            font-weight: bold;
            padding-right: 10px;
            margin: 0;
        }

    .header-owner{
        position: absolute;
        display: flex;
        right: 24px;
    }
        .header-owner-text{
            font-weight: bold;
            margin-left: 16px;
            margin-right: 16px;
        }
    
</style>