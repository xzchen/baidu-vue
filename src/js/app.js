var z = new Vue({
	el: "#app",
	data: {
		showCityWeatherIndex: 0, //指示当前render是的哪个城市的weather信息
		
		// cityNameHref: [https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E6%B7%B1%E5%9C%B3%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5", "https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E6%9D%AD%E5%B7%9E%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5", "https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E6%88%90%E9%83%BD%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5"],
		citysWeather: [
			{
				cityName: "北京",
				cityHref: "https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E5%8C%97%E4%BA%AC%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5",
				cityFivedayWeather: [
					{
						everydayIconUrl: "https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a0.jpg",
						everydayTemp: "19",
						everydayCondition: "晴转阴",
						everydayWind: "北风3-4级",
					},
					{
						everydayIconUrl: "https://ss2.bdstatic.com/kfoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a2.jpg",
						everydayTemp: "19~8",
						everydayCondition: "阴转晴",
						everydayWind: "南风微风",
					},
					{
						everydayIconUrl: "https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a0.jpg",
						everydayTemp: "24~11",
						everydayCondition: "晴",
						everydayWind: "北风3-4级",
					},
					{
						everydayIconUrl: "https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a0.jpg",
						everydayTemp: "27~13",
						everydayCondition: "晴",
						everydayWind: "北风3-4级",
					},
					{
						everydayIconUrl: "https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a0.jpg",
						everydayTemp: "28~14",
						everydayCondition: "晴",
						everydayWind: "南风微风",
					}
				],
				cityPolutionName: "良",
				cityPolutionNum: 113,
			}, 
			{
				cityName: "上海",
				cityHref: "https://www.baidu.com/s?tn=baidutop10&rsv_idx=2&wd=%E4%B8%8A%E6%B5%B7%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5",
				cityFivedayWeather: [
					{
						everydayIconUrl: "https://ss0.bdstatic.com/k4oZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a0.jpg",
						everydayTemp: "24",
						everydayCondition: "晴转多云",
						everydayWind: "东南风微风",
					},
					{
						everydayIconUrl: "https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a7.jpg",
						everydayTemp: "15~16",
						everydayCondition: "阵雨转终于",
						everydayWind: "东南风微风",
					},
					{
						everydayIconUrl: "https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a7.jpg",
						everydayTemp: "18~14",
						everydayCondition: "小雨转中雨",
						everydayWind: "东北风3-4级",
					},
					{
						everydayIconUrl: "https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a1.jpg",
						everydayTemp: "22~15",
						everydayCondition: "多云",
						everydayWind: "北风微风",
					},
					{
						everydayIconUrl: "https://ss1.bdstatic.com/kvoZeXSm1A5BphGlnYG/icon/weather/aladdin/jpg/a1.jpg",
						everydayTemp: "25~16",
						everydayCondition: "多云",
						everydayWind: "西南风微风",
					}
				],
				cityPolutionName: "轻度",
				cityPolutionNum: 69,
			},
		],
		calendar: calendar,		
		festival: festival,//TODO农历日期还没做
		fiveDays: fiveDays,//根据main.js计算出5天内的每天具体日期传值到要渲染的everyday-weather组件里
		everydayTitle: ["今天(", "明天(", "后天(", "", ""],
	},
})
