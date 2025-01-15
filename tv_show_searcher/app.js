const form =document.querySelector(".search_form")
const input_field = document.querySelector(".search_form #search")
const body_ele = document.querySelector("body")

const base_url = "https://api.tvmaze.com/search/shows"

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const query_str = input_field.value;

    //using axios:
    const fetched_data = await get_data(query_str)
    display_fetched_data(fetched_data.data)
})

const get_data = async function (query){
    const new_url = `${base_url}?q=${query}`
    const data = await axios.get(new_url);
    return data;
}

const display_fetched_data = async function (all_shows){
    all_shows.map(async function (curr_show){
        try{
            const show_name = curr_show.show.name;
            const show_img = await curr_show.show.image.medium;

            const new_container = createNewContainer(show_name, show_img)
            body_ele.append(new_container)
        }
        catch(e){
            console.log(e)
        }
    })
}

//create a container (div) with image and title and display them
const createNewContainer = (show_name, show_img)=>{
    const new_cont = document.createElement("div")
    const new_img_ele = document.createElement("img")
    const h3 = document.createElement("h3")

    new_img_ele.src = show_img
    h3.innerText = show_name

    new_cont.append(new_img_ele)
    new_cont.append(h3)

    const style_the_cont = (new_cont)=>{
        new_cont.style.display = "inline-block"
        new_cont.style.border = "1px black solid"
        new_cont.style.margin = "1%"
    }

    style_the_cont(new_cont)

    return new_cont
}
