// console.log("기록중")
// document.write("문서에 기록중")
// a=1004; //변수
// console.log(a);
// document.write(a);
// b = "홍길동";
// console.log("이름 :",b);
// document.write("<br>이름 :", b)
// console.log("이름 : " + b + ", 숫자 : " + a);
// document.write("<br>이름 : " + b + ", 숫자 : " + a);
// let c = 10, d = 20, e=f = 30;
// console.log(c,d,e,f)
// console.log("-------------------");
// // c = c + 100;
// c+= 100;
// d+= 100;
// console.log("c값 : " + c);
// console.log("d값 : " + d);
// document.write("<br>" + d);

// let a = 10, b = 20, sum, sub, mul, div, nam;
// sum = a + b;
// sub = b - a;
// mul = a * b;
// div = b / a;
// nam = a % 3;
// document.write("덧셈 : " + sum);
// document.write("<br>뺄셈 : " + sub);
// document.write("<br>곱셈 : " + mul);
// document.write("<br>나눗셈 : " + div);
// document.write("<br>나머지 : " + nam);
// let a = "123" , b;
// b = Number(a) + 100;
// document.write("<br>" + b);
window.onload = function() {

    // let total = 0, a;
    // ok.onclick=function(){
    //     total = parseInt(kor.value) + parseInt(eng.value) + parseInt(mat.value);
    //     sum.innerHTML = total;
    //     a = total / 3;
    //     avg.innerHTML = a.toFixed(2);
    // }

    // let a = 10, b = 20;
    // if(a > b)
    //     console.log("a가 크다");
    // else
    //     console.log("b가 크다");

    // let num;
    // btn.onclick = function() {
    //     num = parseInt(inp.value);
    //     if(num % 2 == 0) {
    //         result.innerHTML = "짝수";
    //     }
    //     else {
    //         result.innerHTML = "홀수";
    //     }
    // }

    // let prev, disp, next, cnt = 1;
    // prev = document.getElementById("prev");
    // disp = document.getElementById("disp");
    // next = document.getElementById("next");
    // pic = document.querySelector(".pic")

    // next.onclick = function() {
    //     if (cnt < 3) { //3번까지
    //         cnt ++;
    //     }else {
    //         cnt = 1; //1번부터 다시 시작
    //     }
    //     disp.innerHTML = cnt + " / 3";
    //     pic.src = "img/big" + cnt + ".jpg";
    // }
    // prev.onclick = function() {
    //     if (cnt > 1) {
    //         cnt --;
    //     }
    //     disp.innerHTML = cnt + " / 3";
    //     pic.src = "img/big" + cnt + ".jpg";
    // }
    // let btn, su, price, total, su_value;
    // btn = document.querySelector(".btn");
    // btn.onclick = function(){
    //     price = document.querySelector(".price");
    //     su = document.querySelector(".su");
    //     total = document.querySelector(".total");
    //     if (isNaN(total)) {
    //         // total.innerText = alert("가격을 입력해주세요");
    //         p=0;
    //     }
    //     su_value = parseInt(su.value);
    //     p = price.value * su_value;
    //     total.innerText = p + ' 원';
    // }

    // let mainpic, pic1, pic2, pic3;
    // mainpic = document.getElementById("mainpic");
    // pic1 = document.getElementById("pic1");
    // pic2 = document.getElementById("pic2");
    // pic3 = document.getElementById("pic3");

    // pic1.onclick = function(){
    //     mainpic.src = "img/drink1.jpeg";
    // }
    // pic2.onclick = function(){
    //     mainpic.src = "img/drink2.jpeg";
    // }
    // pic3.onclick = function(){
    //     mainpic.src = "img/drink3.jpeg";
    // }

    let login, at1;
    login = document.querySelector(".login");
    at1 = document.querySelector(".at1");
    login.onclick = function() {
        at1.style.display = "block";
    }
    let ok, id, pw, id_value, pw_value;
    ok = document.querySelector(".ok");
    id = document.querySelector(".id");
    pw = document.querySelector(".pw");
    ok.onclick = function(){
        id_value = id.value;
        pw_value = parseInt(pw.value);
        console.log("아이디 : " + id_value, "비밀번호 : " + pw_value);

        if (id_value != "abc"){
            alert("아이디가 틀립니다.");
        }else if (pw_value != 123) {
            alert("비밀번호가 틀립니다.");
        }else if (id_value == "abc" && pw_value == 123) {
            alert("로그인 성공");
            at1.style.display = "none";
        }else{
            alert("로그인 실패");
        }


    }
}