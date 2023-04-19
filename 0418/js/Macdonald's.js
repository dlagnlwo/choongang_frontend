window.onload = function() {
    let left, right, img;
    left = document.querySelector(".arrow1");
    right = document.querySelector(".arrow2");
    const imgA=["버거1.jpg", "버거2.jpg", "버거3.jpg"];

    // right.onclick=function() {
    //     for(i=1; i<imgA.length; i++){
    //         imgA[i];
    //         console.log(imgA[i]);
    //     }

    //         for(i = 1; i < 10; i++){
    //             str+="<br>" + n + " * " + i + " = " + n*i;
    //         }
    //     box.innerHTML = str;
    // }

    $(".sec1 .a1 .arrow1 i").on("click", function() {
        no=$(this).index();
        $(".pic").attr("src", "img/"+imgA[no]);
    })


}