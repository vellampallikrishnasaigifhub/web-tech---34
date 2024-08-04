let str;
let img2str = () => {
    let imgFile = document.getElementById('img').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(imgFile);
    reader.addEventListener("load", () => {
        if (reader.result) {
            str = reader.result;
            document.getElementById('abc').innerHTML = reader.result;
        }
    })

}
let str2img = () => {
    document.getElementsByTagName('img').scr = str
}