const macA= {
    menuA:[
        "로고", "Store", "New", "Story",
        "햄버거", "음료수", "지점안내",
        "고객샌터"
    ],
    sub0A: [
        "버거", "맥런치", "맥모닝"
    ],
    sub1A: [
        "버거", "맥런치", "맥모닝","1","2"
    ],
    sub2A: [
        "버거", "맥런치"
    ],
    sub3A: [
        "버거", "맥런치", "맥모닝"
    ],
    sub4A: [
        "버거", "맥런치", "맥모닝"
    ],
    sub5A: [
        "버거", "맥런치", "맥모닝","맥도날드 사람"
    ],
    bigBoxA: [
        "img1.jpg","img2.jpg",
        "img3.jpg","img4.jpg","img5.jpg"
    ],
    at19imgA: [
        "h1.png","h2.png","h3.png",
        "h4.png","h5.png","h6.png" 
    ]
}
let i, no, str="", nav, sub0, sub1,
     sub2, sub3, sub4, sub5, big5;
window.onload=function() {
    // nav = document.querySelectorAll("#nav");
    nav = document.getElementById("nav").getElementsByTagName("div")
    macA.menuA.forEach((item, ind) => {
        nav[ind].innerHTML=macA.menuA[ind];
    })
    sub0 = document.querySelector(".sub0").getElementsByTagName("li");
    macA.sub0A.forEach((item, ind) => {
        sub0[ind].innerHTML = macA.sub0A[ind];
    })
    sub1 = document.querySelector(".sub1").getElementsByTagName("li");
    macA.sub1A.forEach((item, ind) => {
        sub1[ind].innerHTML = macA.sub1A[ind];
    })
    sub2 = document.querySelector(".sub2").getElementsByTagName("li");
    macA.sub2A.forEach((item, ind) => {
        sub2[ind].innerHTML = macA.sub2A[ind];
    })
    sub3 = document.querySelector(".sub3").getElementsByTagName("li");
    macA.sub3A.forEach((item, ind) => {
        sub3[ind].innerHTML = macA.sub3A[ind];
    })
    sub4 = document.querySelector(".sub4").getElementsByTagName("li");
    macA.sub4A.forEach((item, ind) => {
        sub4[ind].innerHTML = macA.sub4A[ind];
    })
    sub5 = document.querySelector(".sub5").getElementsByTagName("li");
    macA.sub5A.forEach((item, ind) => {
        sub5[ind].innerHTML = macA.sub5A[ind];
    })

    big5=document.querySelector(".img5Box").getElementsByTagName("li");
    macA.bigBoxA.forEach((item, ind) => {
        big5[ind].style.background="url(img/"+macA.bigBoxA[ind]+")";
        big5[ind].style.backgroundSize="100% 100%";
    })

    //아티클-20번 그림 5개 넣기
    let at20_box_img5=document.querySelector(".at20_box_img5").getElementsByTagName("li");
    macA.bigBoxA.forEach((item, ind) => {
        at20_box_img5[ind].style.background="url(img/"+macA.bigBoxA[ind]+")";
        at20_box_img5[ind].style.backgroundSize="100% 100%";
    })
          
    
    }
    let timer=setInterval("show()", 5000);
    let count=0;
    function show() {
        if(count < 4)
            count++;
        else
            count=0;
        $(".choose li").css("background", "white");
        $(".choose li:eq(" + count + ")").css("background", "red");
        $(".img5Box").animate({"left":"-=100%"}, 1000, function() {
            $(".img5Box li:first").appendTo(".img5Box");
            $(".img5Box").css("left", "+=100%");
        });
    }
    
    
    $(function() {
        //아티클-0번에서 자동 그림 이동(slide)
        $(".choose li:eq(0)").css("background", "red");
        $(".choose li").on("click", function(){
            no=$(this).index();
            // console.log(no);
            // count=no;
            // $(".choose li").css("background", "white");
            // $(".choose li:eq(" + count + ")").css("background", "red");
            // $(".img5Box").css("left", "-=" + count*100 + "%");
        })

        for(i=0; i < macA.at19imgA.length; i++) {
            $(".at19_left > div:eq(" + i + ")").css("background","url(img/" + macA.at19imgA[i] + ")")
                                            .css("backgroundSize", "100% 100%");
        }
            
        
        


        $(".subBox ul li").on("click", function(){
            no = $(this).attr("class").substr(4, 2);
            // console.log(no);
            $(".at").hide();
            $(".at" + no).show();
        })

        //아티클-18 에서 라디오버튼 클릭으로 그림 이동
        $("#at20_choose li").on("click", function(){
            no = $(this).index();
            $("#at20_choose li").css("background", "white");
            $("#at20_choose li:eq(" + no + ")").css("background", "red");
            pos = -1000 * no;
            $(".at20_box_img5").animate({"left": pos+"px"}, 500);
        })

        $(".at21_menu li").on("click", function(){
            $(".at21_menu li").css("background", "white");
            $(this).css("background", "#ffbc0d");
            no=$(this).index();
            $(".at21_menuBox").hide();
            $(".at21_menuBox"+no).show();
        })

        

    })