    
// angularjs


var data = [
	{
		id:1,
		title:"列表1",
		color:"#C870DF",
		list:[
			{t:"打游戏",done:true},
			{t:"看电视",done:false},
			{t:"看电影",done:false},
			{t:"看书",done:false},
			{t:"看小说",done:false},
			{t:"睡觉",done:true}
		]
	},{
		id:2,
		title:"列表2",
		color:"#6DDD30",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	},{
		id:3,
		title:"列表3",
		color:"#41ABFA",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	},{
		id:4,
		title:"列表4",
		color:"#F3CB02",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	},{
		id:5,
		title:"列表5",
		color:"#A1865F",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	},{
		id:6,
		title:"列表6",
		color:"#FF2869",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	},{
		id:7,
		title:"列表7",
		color:"#F78E03",
		list:[
			{t:"逛街",done:false},
			{t:"打团",done:true},
			{t:"刷深渊",done:true}
		]
	}
]

var app = angular.module("app",[]);


app.controller("ctrl",function($scope){
	$scope.twof = false;

	$scope.data = data;

	$scope.fn = function(i){
		$scope.index = i;
	}

	$scope.index = 0;

	//点击添加，添加一个新列表
	$scope.add = function(){

		var id = $scope.data[$scope.data.length-1].id+1;
		$scope.data.push({
			id:id,
			title:"列表"+id,
			color:$scope.color[id%7],
			list:[]
		})

		$scope.index = $scope.data.length - 1;
	}


	//点击添加未完成列表
	$scope.tianjia =function(){
		$scope.data[$scope.index].list.push(
		{
			t:"",done:false
		})

		// console.log($scope.data[$scope.index].list)
	}

	//控制遮罩的显示隐藏
	$scope.maskFlag = false;
	

	//点击完成执行的操作
	$scope.wancheng = function(){
		data[$scope.index].title = $scope.temp.title;
		data[$scope.index].color = $scope.temp.color;
		$scope.maskFlag = false;
	}

	//点击删除执行的操作
	$scope.del = function(){
		$scope.data.splice($scope.index,1);
		$scope.maskFlag = false;
		$scope.index = 0;
	}

	//点击选项的功能
	$scope.xuanxiang = function(){
		//先判断
		if($scope.data.length !=0){
			$scope.maskFlag=true;
			//重新加载样式
			$scope.temp = {
				title:data[$scope.index].title,
				color:data[$scope.index].color
			};
		}
		
	}


	//改变了值的话 
	$scope.text = function(ev,v){
		//改变值
		v.t = ev.target.innerText;
		// console.log(ev.target.innerText)
	}





	//存放临时的值
	$scope.temp = {
		title:data[$scope.index].title,
		color:data[$scope.index].color
	};

	//修改颜色
	$scope.chageColor = function(color){
		$scope.temp.color = color;
	}

	//颜色数组
	$scope.color = ["#C870DF","#6DDD30","#41ABFA","#F3CB02","#A1865F","#FF2869","#F78E03"];
})















//滚动条效果
// var listBox = $(".list-box");
// var list = $(".list");

// //获取盒子的高度
// var boxH = listBox.height();

// var listH = list.height();


// if(listH > boxH){
// 	//内容很高，可以滚动
// 	//定义相差最大高度
// 	var maxH = listH - boxH; 


// 	var dx=0,dy=0;
// 	//按下
// 	touch.on(list[0], 'touchstart', function(ev){
// 		ev.preventDefault();
// 	});
// 	//移动
// 	touch.on(list[0], 'drag', function(ev){
// 		dy = dy || 0;
// 		var offy = dy + ev.y;
// 		if(offy>0){
// 			offy = 0;
// 		}else if(offy < -maxH){
// 			offy = -maxH;
// 		}
// 		list.css({top:offy})
// 		//往上是负,往下是正
		
// 	});
// 	//抬起
// 	touch.on(list[0], 'dragend', function(ev){
// 		dy += ev.y;
// 	});

// }


