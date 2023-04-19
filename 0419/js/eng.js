//javascript
window.onload=function(){

}


//jquery
$(function() {
    $("nav div").on("click", function() {
        $(".at").hide();
        n=$(this).index();
        console.log(n);
        $(".at"+n).show();
        // if(n==1) {
        //     $(".at1").css("display", "flex");
        // }
    })

})