Vue.component("everyday-weather", {
	props:["nowDate", "everydayTitle", "everydayWeather", "everydayCityHref"],
	data() {
		return {
			title: this.getTitle(),
			iconUrl: this.getIconUrl(),
		}
	}, 
	template: `
			<div class="everydayWeather">
				<a :href="everydayCityHref">
					<p class="everydayTitle">{{title}}</p>
					<span class="everydayIcon" :style="iconUrl"></span>
					<p>{{everydayWeather.everydayTemp}}℃</p>
					<p>{{everydayWeather.everydayCondition}}</p>
					<p>{{everydayWeather.everydayWind}}</p>
				</a>
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
		getIconUrl() {
			iconUrl = 'background: url(' + this.everydayWeather.everydayIconUrl + ')';
			return iconUrl;
		}
	},
})