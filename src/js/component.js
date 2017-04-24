Vue.component("everyday-weather", {
	props:["nowDate", "everydayTitle", "everydayWeather"],
	data() {

		return {
			title: this.getTitle()
		}
	},
	template: `
			<div>

				<p>{{title}}</p>
				<span style="background:url()"></span>
				<p>{{everydayWeather.everydayTemp}}</p>
				<p>{{everydayWeather.everydayCondition}}</p>
				<p>{{everydayWeather.everydayWind}}</p>
				<hr>
			</div>
		`,
	mounted() {
		this.getTitle();
	},
	methods: {
		getTitle() {
			let week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
			title = this.everydayTitle === ""?week[this.nowDate.getDay()]:this.everydayTitle + week[this.nowDate.getDay()] + ")";
			return title;
		},
	},
})