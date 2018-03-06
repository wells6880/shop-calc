var checkAll=document.querySelector("#check"),
    check=document.querySelectorAll(".check"),
    btn=document.querySelectorAll(".btn"),
    num=document.querySelectorAll("input.num"),
    Num=document.querySelectorAll(".num"),
    del=document.querySelectorAll(".del"),
    commodity=document.querySelectorAll(".commodity"),
    total=document.querySelectorAll(".total"),
    price=document.querySelectorAll(".price"),
    money=document.querySelector("#money"),
    wechat=document.querySelector(".wechat"),
    qr=document.querySelector(".qr");

wechat.onmouseover=qrAppear;
wechat.onmouseout=qrHide;
//商品复选框勾选方法
function checkChange() {
//全选按钮，点击全选或反选
    checkAll.onclick=checkAllClick;
//根据商品全选、非全选，决定全选框勾选状态
    for(var i=1;i<check.length;i++){
        check[i].onclick=checkClick;
    }
}
//全选按钮，点击全选或反选方法
function checkAllClick() {
    if(this.checked==true){
        for(var i=1;i<check.length;i++){
            check[i].checked=true;
        }
    }
    else {
        for(i=1;i<check.length;i++){
            check[i].checked=false;
        }
    }
    moneyResult();
}
// 根据商品全选、非全选，决定全选框勾选状态方法
function checkClick() {
    if(this.checked==false){
        checkAll.checked=false;
    }
    else {
        for(var j=1;j<check.length;j++){
            if(check[j].checked==false){
                break;
            }
        }
        if(j==check.length){
            checkAll.checked=true;
        }
    }
    moneyResult();
}
//点击“+”，“-”按钮改变数量
function numChange() {
    for(var i=0;i<btn.length;i++){
        // btn[i].setAttribute("btnNum",i);
        // btn[i].onclick=numClick;
        (function (idx) {
            btn[idx].onclick=function () {
                numClick(idx);
            }
        })(i);
    }
    for(var m=0;m<num.length;m++){
        num[m].onchange=totalResult;
    }
}
//点击“+”，“-”按钮改变数量方法
// function numClick() {
//     // var index=this.getAttribute("btnNum");
//     var index= i;
//     var j=null;
//     if(this.value=="-"){
//         j=index/2;
//         //数量不能小于1
//         if(num[j].value<2){
//             num[j].value=1;
//         }
//         else {
//             num[j].value-=1;
//         }
//     }
//     else if(this.value=="+"){
//         j=(index - 1)/2;
//         num[j].value=+num[j].value + 1;
//     }
//     totalResult();
// }

// function numClick(idx) {
//     var j=null;
//     if(btn[idx].value=="-"){
//         j=idx/2;
//         //数量不能小于1
//         if(num[j].value<2){
//             num[j].value = 1;
//         }
//         else {
//             num[j].value -= 1;
//         }
//     }
//     else if(btn[idx].value=="+"){
//         j=(idx - 1)/2;
//         num[j].value = +num[j].value + 1;
//     }
//     totalResult();
// }

function numClick(idx) {
    var index=null;
    if(idx % 2 === 0){
        //数量不能小于1
        index = idx/2;
        if(num[index].value < 2){
            num[index].value = 1;
        }
        else {
            num[index].value -= 1;
        }
    }
    else if(idx % 2 === 1){
        index = (idx - 1) / 2;
        num[index].value = +num[index].value + 1;
    }
    totalResult();
}
//给每个删除按钮添加删除商品方法
function delClickAll() {
    for(var i=0;i<del.length;i++){
        // del[i].setAttribute("commodityNum",i);
        // del[i].onclick=delClick;
        (function (idx) {
            del[idx].onclick=function () {
                delClick(idx);
            };
        })(i);
    }
}
//删除商品方法
// function delClick() {
//     var index=this.getAttribute("commodityNum");
//     commodity[index].style.display="none";
// }

function delClick(idx) {
    commodity[idx].style.display="none";
}
//单商品总价计算方法
function totalResult() {
    for(var n=1;n<price.length;n++){
        if(this.value<1){
            this.value=1;
        }
        total[n].innerHTML="¥" + price[n].innerHTML.slice(1) * +Num[n].value;
    }
    moneyResult();
}
// 结算方法
function moneyResult() {
    money.innerHTML=0;
    for(var i=1;i<check.length;i++){
        if(check[i].checked==true){
            money.innerHTML=+money.innerHTML + +total[i].innerHTML.slice(1);
        }
    }
}
//鼠标移入微信图标时显示二维码方法
function qrAppear() {
    qr.style.display="block";
}
//鼠标移出微信图标时隐藏二维码方法
function qrHide() {
    qr.style.display="none";
}
//函数执行
checkChange();
numChange();
delClickAll();
totalResult();
moneyResult();