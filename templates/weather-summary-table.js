function getWeatherSummaryTableHtml() {
	return `<div class="row">
		<div class="col-6">
			<span><img src="http://openweathermap.org/img/w/02d.png"></span>
			<span class="float-right" style="font-size: 28px">11°С</span>
		</div>

		<div class="col-6">
			<div class="row">
				<div class="col-12"><b>Rain</b></div>
				<div class="col-12">light intensity drizzle</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-12">
			<table class="table table-striped">
				<tbody>
					<tr>
						<td>Wind</td>
						<td>Fresh Breeze, 8.2 m/s, East ( 80 )</td>
					</tr>
					<tr>
						<td>Cloudiness</td>
						<td>Few clouds</td>
					</tr>
					<tr>
						<td>Pressure</td>
						<td>1025 hpa</td>
					</tr>
					<tr>
						<td>Humidity</td>
						<td>53 %</td>
					</tr>
					<tr>
						<td>Sunrise</td>
						<td>08:38</td>
					</tr>
					<tr>
						<td>Sunset</td>
						<td>21:30</td>
					</tr>
					<tr>
						<td>Geo coords</td>
						<td><a target="blank"
								href="https://www.google.com/maps/place/London,+UK/@51.528308,-0.3817765,10z/data=!3m1!4b1!4m5!3m4!1s0x47d8a00baf21de75:0x52963a5addd52a99!8m2!3d51.5073509!4d-0.1277583">[46.7889,
								23.6185]</a></span></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>`;
}