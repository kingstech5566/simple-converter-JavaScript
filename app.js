// call on the form to convert
const convert_form = document.querySelector("form")

convert_form.addEventListener("submit", calculateForm)

// let add a function to convert to farenhiet
function calculateForm(event){
    // stopping the form from reloading after clicking the data
    event.preventDefault()

    // let grab the value entered
    let convert_value = document.querySelector(".inputer").value

    //let calculate the value and convert it
    if(convert_value === ""){
        alert("Please enter a value")
    }else{

        let far = (Number(convert_value * 1.8)/ 37)

        // let answer appear at one div
        document.querySelector(".cel").innerHTML = far.toFixed(1)
    }

}