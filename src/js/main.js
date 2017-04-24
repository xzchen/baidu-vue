var nowDate = new Date(); //记录当前的Date, 也用来向组件everyday-weather传值
var calendar = `${nowDate.getMonth() + 1}月${nowDate.getDate()}日`; //获得当天日期
var festival = "农历 三月二十七"; //获得农历日期 这个怎么计算得到。自己是死值。
var fiveDays = [nowDate];		//记录今天到以后四天的具体Date的数组
var nowDateTime = nowDate.getTime();
var oneDayTimes = 1000*60*60*24 //计算1天有多少毫秒
for (let i = 0; i < 4; i++) {
	nowDateTime += oneDayTimes;
	fiveDays.push(new Date(nowDateTime))
}


