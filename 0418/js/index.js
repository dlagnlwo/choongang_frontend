let i;
const imgTextA = [
    "1", "2", "3", "4", "5"
]
window.onload = function() {
        //1부터 100까지 출력
    //     let s = 0;
    //     for(i = 1; i < 10; i++) {
    //         document.write(i + "단" + "<br>");
    //         for(j = 1; j < 10; j++) {
                
    //             document.write(i+"*"+j+"="+i*j + "<br>");
                
    //     }
    // }
    // let box = document.querySelector(".box");
    // let num = document.querySelector(".num");
    // let str="";
    // for(i=1; i<10; i++) {
    //     str += "<br>3 * " + i + " = " + 3*i;
    // box.innerHTML = str;
    
    // }

    // ok.onclick=function(){
    //     n = num.value;
    //     str="" //공백처리 하고 for반복
    //         for(i = 1; i < 10; i++){
    //             str+="<br>" + n + " * " + i + " = " + n*i;
    //         }
    //     box.innerHTML = str;
        
    // }

    // ok.addEventListener("click", function() {
    //     n = num.value;
    //     str="" //공백처리 하고 for반복
    //     for(i = 1; i < 10; i++){
    //         str+="<br>" + n + " * " + i + " = " + n*i;
    //     }
    //     box.innerHTML = str;
    // })
//     let ok; //addEventListener를 실행하기 위해서 ok는 남겨 두어야 한다.
//     ok = document.querySelector(".ok");
//     ok.addEventListener("click", func);
// }
// function func(){

//     let num, str="", box;
//     num = document.querySelector(".num");
//     box = document.querySelector(".box");
//     n = num.value;
//     str=""; //공백처리 하고 for반복
//     for(i = 1; i < 10; i++){
//         str+="<br>" + n + " * " + i + " = " + n*i;
//     }
//     box.innerHTML = str;
    let imgBox;
    imgBox=document.querySelector(".imgBox").getElementsByTagName("li");
    for(i=0; i<5; i++){
        imgBox[i].style.background="url(img/img"+i+".jpeg)";
        imgBox[i].style.backgroundSize="100% 100%";      
    }   

    let img, imgText;
    img = document.getElementsByClassName("img");
    imgText = document.getElementsByClassName("imgText");

    for(i=0; i<5; i++){
        img[i].style.background="url(img/img"+i+".jpeg)";
        img[i].style.backgroundSize="100% 100%";  
        imgText[i].innerHTML = imgTextA[i];
    }
//-----------------------------------------------------------------------
    const leftimgA=["big1.jpg", "big2.jpg", "big3.jpg"];
    const leftimg_pumA=[
        "첫번째 사진",
        "두번째 사진",
        "세번째 사진"
    ];
    const leftimg_priceA=[
        25000, 35000, 45000
    ];

    let leftimg;
    leftimg = document.querySelector(".left").getElementsByTagName("li");
    for(i=0; i<leftimgA.length; i++) {
        leftimg[i].style.background = "url(img/" + leftimgA[i] + ")";
        leftimg[i].style.backgroundSize="100% 100%";   
    }

    $(".left li").on("click", function() {
        no=$(this).index();
        $(".pic").attr("src", "img/"+leftimgA[no]);
        $(".pum").text(leftimg_pumA[no]);
        $(".price").text(leftimg_priceA[no]);
    })

}