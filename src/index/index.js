// 头部 搜索框
var inner = document.getElementById("inner");
var column = document.getElementById("column");
var clis = document.getElementById("column").getElementsByTagName("li");
var button = document.getElementById("button");

inner.onclick = function() {
    inner.style.border = "1px solid #FF6700";
    column.style.display = "block";
}

button.onclick = function() {
    inner.style.border = "1px solid #B0B0B0";
    column.style.display = "none";
}

for ( var i = 0; i < clis.length; i++ ) {
    clis[i].onmouseover = function () {
        this.style.backgroundColor = '#E0FFFF';
    }
    clis[i].onmouseout = function () {
        this.style.backgroundColor = "#ffffff";
    }
}





// 侧边栏 导航栏切换**********************************************
var lists = document.getElementById("aside-list").getElementsByClassName("aside-nav-list");
var divs = document.getElementById("aside-div").getElementsByClassName("aside-nav-div");

for ( var x = 0; x < lists.length; x++ ) {
    lists[x].index = x;   // 给每个li定义一个属性索引值
    for ( var y = 0; y < divs.length; y++ ) {
        lists[x].onmouseover = function () {
            this.style.backgroundColor = '#FF6700';
            divs[this.index].style.display = 'block';
        }
        lists[x].onmouseout = function () {
            this.style.backgroundColor = "#444444";
            divs[this.index].style.display = 'none';
        }
        divs[y].onmouseover = function () {
            this.style.display = 'block';
        }
        divs[y].onmouseout = function () {
            this.style.display = 'none';
        }
    }
}
    

// 轮播图******************************************************************************************
function $(names) {
    return document.getElementById(names);
  }
  var left = $('left'); //左按钮
  var right = $('right'); //右按钮
  var aside = document.getElementsByClassName('aside')[0];
  var li_list = document.querySelectorAll('#imgul li'); //获取图片的li
  var ol_list = document.querySelectorAll('ol li');
  var timer = null; //声明定时器
  var count = 0;

  function auto() { //执行自动轮播
    count++;
    if (count > li_list.length - 1) {
      count = 0;
    }
    for (var i = 0; i < li_list.length; i++) {
      li_list[i].style = 'display:none;';
      ol_list[i].className = '';
    }
    li_list[count].style = 'display:block;'
    ol_list[count].className = 'active';

  }
  timer = setInterval(auto, 3000); //调用定时器

  left.onmouseover = function() {
    this.style.backgroundColor = "#777777";
    this.style.color = "#ffffff";
  }
  left.onmouseout = function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    this.style.color = "#B0B0B0";
  }
  right.onmouseover = function() {
    this.style.backgroundColor = "#777777";
    this.style.color = "#ffffff";
  }
  right.onmouseout = function() {
    this.style.backgroundColor = "rgba(0, 0, 0, 0)";
    this.style.color = "#B0B0B0";
  }

  // 点击右侧，切换下一个
  right.onclick = function () {
    auto();
  }
  // 点击左侧，切换上一个
  left.onclick = function () {
    count--;
    if (count < 0) {
      count = li_list.length - 1;
    }
    console.log(count);
    for (var i = 0; i < li_list.length; i++) {
      li_list[i].style = 'display:none;';
      ol_list[i].className = '';
    }
    li_list[count].style = 'display:block;';
    ol_list[count].className = 'active';
  }

  aside.onmouseover = function () { //鼠标划上去，停止轮播
    clearInterval(timer);
  }
  aside.onmouseout = function () { //鼠标划出，继续轮播
    timer = setInterval(auto, 3000); //调用定时器
  }


  //点击小按钮，切换图片
  for (var j = 0; j < ol_list.length; j++) {
    ol_list[j].ind = j; //为每个小按钮添加下标
    ol_list[j].onclick = function () { //进入点击事件
      for (var i = 0; i < li_list.length; i++) { //干掉所有人
        li_list[i].style = 'display:none;';
        ol_list[i].className = '';
      }
      li_list[this.ind].style = 'display:block;'; //留下我自己
      ol_list[this.ind].className = 'active'; //留下我自己
      count = this.ind; // 把当前的角标值赋值给count 希望他从当前再开始
    }
  }













// 工具导航栏 鼠标进入改变颜色
var lis = document.getElementsByClassName("tool-nav-item");
var one = document.getElementsByClassName("one");
var two = document.getElementsByClassName("two");

lis.onmouseover = function () {
    one.style.display = 'none';
    two.style.display = 'block';
}
lis.onmouseout = function () {
    one.style.display = 'block';
    two.style.display = 'none';
}

// 内容区域 商品秒杀倒计时




// 内容区域 tab栏切换-家电**********************************************************************
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var one = document.getElementById("one");
var two = document.getElementById("two");

a1.onmouseover = function () {
    a1.style.borderBottom = "2px solid #FF6700";
    a1.style.color = "#FF6700";
    a2.style.borderBottom = 0;
    a2.style.color = "#333333";
    one.style.display = 'block';
    two.style.display = 'none';
}
a1.onmouseout = function () {
    // a1.style.borderBottom = "2px solid #FF6700";
    // a1.style.color = "#FF6700";
    one.style.display = 'block';
    two.style.display = 'none';
}
a2.onmouseover = function () {
    a2.style.borderBottom = "2px solid #FF6700";
    a2.style.color = "#FF6700";
    a1.style.borderBottom = 0;
    a1.style.color = "#333333";
    one.style.display = 'none';
    two.style.display = 'block';
}
a2.onmouseout = function () {
    // a2.style.borderBottom = "2px solid #FF6700";
    // a2.style.color = "#FF6700";
    one.style.display = 'none';
    two.style.display = 'block';
}




// 内容区域 tab栏切换-智能**********************************************
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var one1 = document.getElementById("one1");
var two2 = document.getElementById("two2");
var three3 = document.getElementById("three3");

b1.onmouseover = function () {
    b1.style.borderBottom = "2px solid #FF6700";
    b1.style.color = "#FF6700";
    b2.style.borderBottom = 0;
    b2.style.color = "#333333";
    b3.style.borderBottom = 0;
    b3.style.color = "#333333";
    one1.style.display = 'block';
    two2.style.display = 'none';
    three3.style.display = 'none';
}
b1.onmouseout = function () {
    one1.style.display = 'block';
    two2.style.display = 'none';
    three3.style.display = 'none';
}

b2.onmouseover = function () {
    b1.style.borderBottom = 0;
    b1.style.color = "#333333";
    b2.style.borderBottom = "2px solid #FF6700";
    b2.style.color = "#FF6700";
    b3.style.borderBottom = 0;
    b3.style.color = "#333333";
    one1.style.display = 'none';
    two2.style.display = 'block';
    three3.style.display = 'none';
}
b2.onmouseout = function () {
    one1.style.display = 'none';
    two2.style.display = 'block';
    three3.style.display = 'none';
}

b3.onmouseover = function () {
    b1.style.borderBottom = 0;
    b1.style.color = "#333333";
    b2.style.borderBottom = 0;
    b2.style.color = "#333333";
    b3.style.borderBottom = "2px solid #FF6700";
    b3.style.color = "#FF6700";
    one1.style.display = 'none';
    two2.style.display = 'none';
    three3.style.display = 'block';
}
b3.onmouseout = function () {
    one1.style.display = 'none';
    two2.style.display = 'none';
    three3.style.display = 'block';
}



// 内容区域 点击按钮视频播放窗口显示





// 内容区域 点击按钮视频播放





