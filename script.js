

let selectButtons = document.getElementsByClassName("select-btn");
let selectedPlayersList = document.getElementById("selected-players-list");

let selectedCount = 0;
for (let i = 0; i < selectButtons.length; i++) {
    selectButtons[i].addEventListener('click', function() {
        if (selectedCount >= 5) {
            alert("You can only select up to 5 players.");
            
            return; 
        }
        let playerName = selectButtons[i].parentElement.querySelector(".cord-h2").innerText;
        let listItem = document.createElement("li");
        listItem.style.paddingTop = "5px";
        listItem.style.textAlign = "left";
        listItem.style.listStyle = "decimal";
        listItem.style.color = "#ffffff";
        listItem.style.fontSize = "20px";
        listItem.style.marginBottom = "10px";

        listItem.innerText = playerName;
        selectedPlayersList.appendChild(listItem);
        selectedCount++;
        selectButtons[i].disabled = true;
        let disabledBTN = selectButtons[i].disabled = true;
        if (disabledBTN == true){
            let allDisabledBTN = selectButtons[i].style.backgroundColor = "#93959A";
            let all = allDisabledBTN = true;
            if (all == 5){
                selectButtons.style.backgroundColor = "#93959A";
            }
        }
    });
}


let playerCost = document.getElementById("player-cost");
let playerExpenses = document.getElementById("player-expenses");
document.getElementById("html").addEventListener("mouseover", function(){
    playerExpenses.innerHTML = playerCost.value * selectedCount;
})

let managerCost = document.getElementById("manager-cost");
let coachCost = document.getElementById("coach-cost");
let totalCost = document.getElementById("calculate-total-btn");
totalCost.addEventListener("click", function(){
    let totalExpenses = document.getElementById("total-expenses-span")
    totalExpenses.innerHTML = parseInt(managerCost.value) + parseInt(coachCost.value) + parseInt(playerExpenses.innerHTML);
})




