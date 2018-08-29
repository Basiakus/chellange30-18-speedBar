	const speechSpeed = document.querySelector('.speed');
	const speedBar = speechSpeed.querySelector('.speed-bar');
	const video = document.querySelector('.flex');

	function speedOfSpeech(e) {
		const valueOFSpeedBar = e.pageY - this.offsetTop;
		const proc = valueOFSpeedBar / this.offsetHeight;
		const slowest = 0.5;
		const fastest = 5;
		const height = Math.round(proc * 100) + '%';
		const playbackRate = proc * (fastest - slowest) + slowest;
		speedBar.style.height = height;
		speedBar.textContent = playbackRate.toFixed(2) + '×';
		video.playbackRate = playbackRate;
		console.log(proc);
	}

	speechSpeed.addEventListener('mousemove', speedOfSpeech);