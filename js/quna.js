var wrapline = [
	{
		name:"50",
		rate:"度假红包",
		lon:"0"
	},
	{
		name:"100",
		rate:"度假红包",
		lon:"0"
	},
	{
		name:"10",
		rate:"当地人礼包",
		lon:"0"
	},
	{
		name:"300",
		rate:"度假红包",
		lon:"-184px"
	},
	{
		name:"100",
		rate:"酒店礼券",
		lon:"-46px"
	},
	{
		name:"300",
		rate:"酒店红包",
		lon:"-46px"
	},
	{
		name:"5",
		rate:"门票代金券",
		lon:"-92px"
	},
	{
		name:"10",
		rate:"火车票红包",
		lon:"-184px"
	}
];
function Wrapline(option){
	option.forEach(function(item,index){
		var newlin1 = document.createElement("li");
		newlin1.classList.add("li1");
		newlin1.innerHTML = '<div class="bo1">'+'<i class="yen">¥</i>'
							+'<span class="va">'+item.name+'</span>'
							+'<div class="type">'+item.rate+'</div></div>'
							+'<div class="bo2"></div><div class="bo3">点击领取</div>';
		$(".bottom_1").append(newlin1);
		$(".bo2").eq(index).css({
			"background-position": item.lon +" -60px"
		});
		console.log($(".bo2").eq(index));
	});
};
Wrapline(wrapline);
function Time(){
	setInterval(function(){
		var date = new Date();
		$(".timespan1").text(25-date.getHours());
		$(".timespan2").text(60-date.getMinutes());
		$(".timespan3").text(60-date.getSeconds());
	},1000);	
};
Time();
$(".midtopdiv").click(function(){
	for(var i = 0; i<$(".midtopdiv").length ; i++ ){
		$(".midtopdiv").eq(i).addClass("midtoprig");
		$(".midtopbottom").eq(i).css("z-index","1");
	}
	$(this).removeClass("midtoprig");
	temp = $(this).index();
	$(".midtopbottom").eq(temp).css("z-index","2");
});
var hotbot = [
	{
		name:"北京-三亚 自由行",
		rate:"已有2744人购买",
		lon:"0"
	},
	{
		name:"重庆-宜昌 跟团游",
		rate:"已有2206人购买",
		lon:"-50px"
	},
	{
		name:"成都-九寨沟 跟团游",
		rate:"已有2124人购买",
		lon:"-100px"
	},
	{
		name:"三亚远方有个村精品客栈",
		rate:"已有898人购买",
		lon:"-150px"
	},
	{
		name:"香港如心海景酒店暨会议中心(L'hotel Nina et Convention Centre)",
		rate:"已有859人购买",
		lon:"-200px"
	},
	{
		name:"锦江之星广州荔湾彩虹桥店",
		rate:"已有852人购买",
		lon:"-250px"
	}
];
function Hotbot(option){
	option.forEach(function(item,index){
		// var newbot = document.createElement("li");
		// $(".hotbotul").append(newbot);
		// newbot.innerHTML='<i class="hotbot_i"></i><div class="tit" title='
		// 				+item.name+'>'+item.name+'</div>'
		// 				+'<div class="desc">'+ item.rate+'</div>';
		// $(".hotbot_i").eq(index).css("background-position",item.lon + " 0");
		$("<li></li>").html('<i class="hotbot_i"></i><div class="tit" title='
							+item.name+'>'+item.name+'</div>'
							+'<div class="desc">'+ item.rate+'</div>').appendTo(".hotbotul").find(".hotbot_i").css("background-position",item.lon + " 0");
		
	});
};
Hotbot(hotbot);