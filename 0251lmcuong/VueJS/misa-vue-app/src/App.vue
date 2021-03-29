<template>
  <div id="app">
    <TheNavbar/>
    <TheHeader/>
    <TheContent/>

    <CustomerList/>
    

  </div>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar'
import TheHeader from './components/layouts/TheHeader'
import TheContent from './components/layouts/TheContent'
import CustomerList from './components/views/customer/CustomerList'


export default {
  name: 'App',
  components: {
    TheNavbar,
    TheHeader,
    TheContent,
    CustomerList,
  }
}

</script>

<style>



@font-face {
    font-family: 'GoogleSans-Regular';
    src: url('./assets/font/GoogleSans-Regular.otf') format('opentype');
}
@font-face {
    font-family: 'GoogleSans-Bold';
    src: url('./assets/font/GoogleSans-Bold.otf') format('opentype');
}
@font-face {
    font-family: 'GoogleSans-Italic';
    src: url('./assets/font/GoogleSans-Italic.otf') format('opentype');
}
@font-face {
    font-family: 'GoogleSans-BoldItalic';
    src: url('./assets/font/GoogleSans-BoldItalic.otf') format('opentype');
}

@font-face {
    font-family: 'GoogleSans-Medium';
    src: url('./assets/font/GoogleSans-Medium.otf') format('opentype');
}

body {
    margin: 0;
    padding: 0;
    font-family: GoogleSans-Regular;
    font-size: 13px;
}

.text-red{
    color: red;
}

.bold {
    font-weight: bold;
}

.hiden-element{
    display: none;
}



@import url('./components/css/button.css');
@import url('./components/css/input.css');
@import url('./components/css/table.css');
@import url('./components/css/icon.css');
@import url('./components/css/subfooter.css');
@import url('./components/css/dialog.css');

</style>
