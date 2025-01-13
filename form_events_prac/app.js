const form = document.querySelector("#all_names")
const input = document.querySelector("#all_names #name")
const ul = document.querySelector("body ul")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let to_add = input.value;

    addToList(to_add)

    input.value = ""
});

const addToList = (to_add) =>{
    const new_li = document.createElement("li");
    new_li.innerText = to_add;

    const createNewBtn = () =>{
        const new_btn = document.createElement("button");
        new_btn.innerText= "Delete";

        new_btn.addEventListener('click', ()=>{
            new_li.remove();
        })

        return new_btn;
    };

    const new_btn = createNewBtn();
    new_li.append(new_btn);

    ul.append(new_li);
}