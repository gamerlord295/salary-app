const type = document.querySelector("#type");
const input = document.querySelector("#input");
const plus = document.querySelector("#plus");
const salaryp = document.querySelector("#salary")
let salary = 0;

function add(){
    if (type.value === "+" && input.value !== "0" && input.value !== "") {
        let li = document.createElement("li")
        document.querySelector("#plus").appendChild(li)
        li.innerHTML = input.value;
        salary += parseInt(input.value);
        input.value = "";
        console.log(salary)
        salaryp.innerHTML = salary
    }else if(type.value === "-" && input.value !== "0" && input.value !== ""){
        let li = document.createElement("li")
        document.querySelector("#minus").appendChild(li)
        li.innerHTML = input.value;
        salary -= parseInt(input.value);
        input.value = "";
        salaryp.innerHTML = salary
    }
}