//图片轮播
(function(){

	window.onload =function(){
		//2.初始化默认数据
		var pageIndex = 0
		
		//1.小圆点生成
		var imgList = document.querySelectorAll(".imgList .imgItem")
		var circleList = document.querySelector(".circleList")  /*统一定义下面就不用重复定义*/
		var cList = []
		
		console.log(imgList)
		for (var i=0;i<imgList.length;i++) {
			var circleDiv = document.createElement("div");
			circleDiv.className = "circleItem";
			circleDiv.dataset.index = i;
			if(i==pageIndex){
				circleDiv.className = "circleItem active";
			}
			circleList.appendChild(circleDiv)
			cList.push(circleDiv)
		}
		var cList1 = document.querySelectorAll(".circleList .circleItem")
		console.log(cList1)
		
		//3.获取左右2个按钮，并设置点击事件
		
		var leftBtn = document.querySelector('.leftBtn')
		var rightBtn = document.querySelector(".rightBtn")
		
		//点击右边按钮跳转至下一页
		rightBtn.onclick = function(e){
			pageIndex ++
			if (pageIndex == imgList.length) {
				//
				pageIndex = 0
			}
			renderActive("right")  /*点击右边向右边滑动*/
		}
		//点击右边按钮跳转至上一页
		leftBtn.onclick = function(){
			pageIndex --
			if (pageIndex == -1) {
				//
				pageIndex = imgList.length-1
			}
			renderActive("left")  /*点击左边向左边滑动*/
			
		}
		
		
		function renderActive(direction){
			imgList.forEach(function(item,index){
				item.className = "imgItem"
				
			})
		
			cList.forEach(function(item,index){
				item.className = "circleItem"
			})
			
			if (direction == "right") {
				imgList[pageIndex].className = "imgItem activeRight"
				if (pageIndex == 0) {
					imgList[imgList.length-1].className = "imgItem currentRight"
				}else{
					imgList[pageIndex-1].className = "imgItem currentRight"
				}
				
			}else{
				imgList[pageIndex].className = "imgItem activeLeft"
				if (pageIndex == (imgList.length-1)) {
					imgList[0].className = "imgItem currentLeft"
				}else{
					imgList[pageIndex+1].className = "imgItem currentLeft"
				}
				
			}

			cList[pageIndex].className = "circleItem active"
		}
		
		circleList.onclick = function(e){
			//console.log(e)
			if (e.target.className == "circleItem") {
				pageIndex = e.target.dataset.index
				renderActive("right")
			}
		}
		
		/*var number = 1
		function fun(){
			number ++;
			if (number > 3) {
				number = 1;
			}
			
			var img = document.getElementsByClassName("imgItem")
			imgItem.Style("img/"+number+".jpg")
		}
		setInterval(fun(),1000);    ????  自动切换问题*/
	}
})()

