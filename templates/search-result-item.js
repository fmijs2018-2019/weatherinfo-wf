function getSearchResultItemHtml() {
	return `<div class="col-2">
		<div class="row">
			<div class="col-12"><span><img src="http://openweathermap.org/img/w/09d.png" /></div>
			<div class="col-12"></span><span><b>Drizzle</b></span></div>
		</div>
	</div>
	<div class="col-10">
		<div class="row">
			<div class="col-12">
				<span><a href="london.html">London, GB</a></span>
				<span><i class="gb flag"></i></spn>
					<span><b>Sky is clear</b></span>
			</div>
		</div>
		<div class="row">
			<div class="col-12">
				<span>light intensity drizzle</span>
			</div>
			<div class="col-12">
				<span>
					<div class="ui horizontal label">16.4°С</div>
				</span>
				<span>temperature from <b>16°С</b> to <b>17°С</b>, wind <b>2.1 m/s.</b>, clouds <b>0%</b>,
					1018hpa</span>
			</div>
			<div class="col-12">
				<span>Geo coords <a target="blank" href="https://www.google.com/maps/place/London,+UK/@51.528308,-0.3817765,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583">[46.7889, 23.6185]</a></span>
			</div>
		</div>
	</div>`;
}