const showModal = document.querySelectorAll(`.show-modals`);

showModal.forEach( (el) => {
    // console.log (el);
    el.addEventListener(`click`, () => {


    const getModal= document.querySelector(`.work-modal`);
    const addOpen= document.createAttribute(`open`);
    getModal.setAttributeNode(addOpen);

    const projName = el.dataset.name;
    const projDescription = el.dataset.description;
    const projImg = el.dataset.img;


    const addTheInfo = document.querySelector(`.addInfo`);
    addTheInfo.innerHTML = `<h2> The ${projName}
    <img src = "${projImg}">
    <p>${projDescription}</p>`
    }) //End of el.addEventListener()
    



})//End forEach()





// showModal.addEventListener (`click`,() => {

// const getModal= document.querySelector (`.modal`);
// const addOpen= document.createAttribute (`open`);
// getModal.setAttribute(addOpen);
//     //console.log(`was clicked`)
// }) //End showModal event Listener