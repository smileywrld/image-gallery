const link = document.getElementById("image");

link.addEventListener("click", downloadImage);

function downloadImage() {
	const imageSrc = document.getElementById("image").src;
	console.log(imageSrc);

	let downloadBtn = document.getElementById("download").href;

	downloadBtn = imageSrc;
}
