const link = document.getElementById("download");

const image = document.getElementById("image");

link.addEventListener("click", function (e) {
	link.href = image.src;
});
