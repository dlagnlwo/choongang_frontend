const menuA=[
    "로고", "제품안내", "주문안내","갤러리",
    "배송조회", "로그인", "English"
]
const codeA=["100","101","102","103","104"];
const nameA=["홍길동","이동수","김철수","강호동","유재석"];
const addrA=[
    "서울시 강남구 게포동 123",
    "서울시 강남구 게포동 100",
    "경기도 수원시 게포동 250",
    "서울시 송파구 가락동 22",
    "서울시 마포구 게포동 333"
]
const telA=[
    "010-1324-4646",
    "010-1313-3131",
    "010-1764-9595",
    "010-8654-1231",
    "010-5633-7462"
]
const magA = ["담당자","담당자","담당자","담당자","담당자"]

window.onload=function(){
    let i, menu;
    // menu = document.getElementById("menu").getElementsByTagName("div");
    menu = document.querySelectorAll("#menu > div");
    // for (i=0; i < menuA.length; i++) {
    //     menu[i].innerText=menuA[i];
    // }

    // menuA.forEach(
    //     function(item, ind) {
    //         // console.log(item, ind);
    //         menu[ind].innerHTML=menuA[ind];
    // });
    menuA.forEach( (item, ind) => {
        menu[ind].innerHTML = menuA[ind];
    })

    let code, na, addr, tel, mag;
    code = document.getElementsByClassName("code");
    na = document.querySelectorAll("tr > .name");
    addr = document.querySelectorAll("tr > .addr");
    tel = document.querySelectorAll("tr > .tel");
    mag = document.querySelectorAll("tr > .mag");

    codeA.forEach( (item, ind) => {
        code[ind].innerHTML = codeA[ind];
    })

    nameA.forEach((item, ind) => {
        na[ind].innerHTML = nameA[ind];
    })
    for(i=0; i < addrA.length; i++) {
        addr[i].innerHTML=addrA[i];
        tel[i].innerHTML=telA[i];
        mag[i].innerHTML=magA[i];
    }
    $("#menu div").on("click", function(){
        n = $(this).index();
        if(n == 4) {
            $(".tab").toggle();
        }
    })
    $(".close").on("click", function(){
        $(".tab").hide();
    })
    const obj={
        na1: "홍길동",
        age:20,
        city: "서울",
        tel: "010-6546-7734",
        data: ["강남","송파", "수원"],
    }
    console.log(obj.na1);
    console.log(obj.age);
    console.log(obj.city);
    console.log(obj.data[0]);
    console.log("-----for in---------");
    for(n in obj.data) {
        console.log(obj.data[n])
    }
    console.log("------for Each--------");
    obj.data.forEach( (item, ind) => {
        console.log(obj.data[ind]);
    })
    console.log("-------for-------");
    for(i=0; i < obj.data.length; i++) {
        console.log(obj.data[i]);
    }

    // let space;
    // space = document.querySelectorAll(".box2 > .space");
    // space[0].innerHTML = obj.na1;
    // space[1].innerHTML = obj.age;
    // space[2].innerHTML = obj.city;

    // for(i=0; i < obj.data.length; i++) {
    //     space[i].innerHTML = obj.data[i];
    // }
    // obj.data.forEach((n, i) => {
    //     space[i].innerHTML = obj.data[i] + "for Each";
    // })
    // for(n in obj.data) {
    //     space[n].innerHTML = obj.data[n] + "for in";
    // }

    //제품안내 메뉴에서 그림 8개
    const pumA={
        img:[
            "img1.jpeg", 
            "img2.jpeg", 
            "img3.jpeg", 
            "img4.jpeg", 
            "img5.jpeg", 
            "img6.jpeg", 
            "img7.jpeg", 
            "img8.jpeg", 
        ],
        title:[
            "상품명 : 1번",
            "상품명 : 2번",
            "상품명 : 3번",
            "상품명 : 4번"
        ],
        text1:[
            "사이즈 : 250cm",
            "사이즈 : 260cm",
            "사이즈 : 250cm",
            "사이즈 : 280cm",
        ],
        text2:[
            "색상 : 빨간색",
            "색상 : 파랑색",
            "색상 : 초록색",
            "색상 : 노란색"
        ]
    }

    //제품안내 끝
    let pum_img;
    pum_img = document.querySelectorAll(".at1_imgBox > li");
    // pun_img = document.querySelector(".at1_imgbox").getElementsByTagName("li");

    pumA.img.forEach((item, i) => {
        pum_img[i].style.background="url(img/"+pumA.img[i]+")";
        pum_img[i].style.backgroundSize = "100% 100%";
    })  
    
    $(".at1_imgBox li").on("click", function() {
        $(".big").show();
        n=$(this).index(); //n에 순서대로 집어넣음
        $("#pic").attr("src","img/"+pumA.img[n]);
        $("#title1").attr(textA.texts[n]);
        console.log(textA.texts[n]);
        console.log(n)
    })

    // t1 = $(this).index();
    // console.log('t1 : '+ t1);
    // $(".big_text p").text(textA.texts[t1]);
    $(".big i").on("click", function(){
        $(".big").toggle();
    })

    const textA ={
        texts:[
            "부산행","기생충",
        "검은사제들","제8일의 밤",
        "김씨표류기","더 위크",
        "백두산","라라랜드"
            ]
    }

    $(".big_img p").on("click", function(){
        
    })



    // $("#menu div").on("click", function(){
    //     n = $(this).index();
    //     if(n == 3) {
    //         $("#menu div").toggle();
    //     }
    // })
}

