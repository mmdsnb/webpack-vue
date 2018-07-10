<style type="text/scss" lang="sass">
    @import "../sass/common";
    $width: 400px;
    #app_div {
        .border {
            border: 1px solid red;
        }
        .div1 {
            width: $width;
            height: 300px;
        }
        span {

        }

    }
</style>
<template>
    <div id="app_div">
        <div class="border div1">

        </div>
        <span class="span_c">span</span>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>