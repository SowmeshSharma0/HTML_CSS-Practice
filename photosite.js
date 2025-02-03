// const base_url = "https://dog.ceo/api/breeds/image/randoms"
const base_url = "https://dog.ceo/api/breeds/image/random"
const body = document.querySelector("body")
const body_div = document.createElement("div")

body_div.style.display = "flex"
body_div.style.flexWrap = "wrap"
body_div.style.justifyContent = "space-evenly"

const fallback_img = "./fallback_img.jpg"

async function getImg(){
    const response = await fetch(base_url)
    const data = await response.json()

    return data
}

const createImg = (newimg, img_url) => {
    newimg.src = img_url
    // newimg.addEventListener('error', function handleError() {
    //     this.removeEventListener('error', handleError);
    //     this.src = fallback_img
    // });
    newimg.onerror = function() {
        this.onerror = null;
        this.src = fallback_img
    };
    return newimg
}

const populateImgs = async () =>{
    for(let i=1;i<=9;i++){
        let newimg = document.createElement("img")
        newimg.className = "img skeleton"
        const img_url = await getImg()
        newimg = createImg(newimg, img_url.message)

        body_div.appendChild(newimg)
    }
}
populateImgs()

body.appendChild(body_div)