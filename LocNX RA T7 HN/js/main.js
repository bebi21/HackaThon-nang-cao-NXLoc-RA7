let imgCard = document.getElementsByClassName("imgCard");
let expityDate = document.getElementById("expityDate");
let cvc = document.getElementById("cvc");
let cardNameJS = document.getElementById("cardNameJS");
let showCard = document.getElementById("showCard");

let a;
let indexTarget = "";
let saveListCard = [];
let arrListCard = {};
let editIndex;
function saveOrView(event) {
  event.preventDefault();
  arrListCard = {
    cardNameJS: cardNameJS.value,
    expityDate: expityDate.value,
    cvc: cvc.value,
  };

  if (editIndex !== undefined) {
    saveListCard[editIndex] = arrListCard;
    editIndex = undefined;
  } else {
    saveListCard.push(arrListCard);
  }

  show();
  resetData();
}
function show() {
  showCard.innerHTML = "";

  saveListCard.forEach((item, index) => {
    showCard.innerHTML += `
        <tr>
        <td><img src="./img/American.jpg" alt="" /></td>
        <td class="center" >${saveListCard[index].cardNameJS}</td>
        <td class="center">${saveListCard[index].expityDate}</td>
        <td class="center" >${saveListCard[index].cvc}</td>
        <td>
          <button>View</button>
          <button onclick="updateData(${index})">Edit</button>
          <button onclick="deleteData(${index})" >Delete</button>
        </td>
      </tr>`;
    a = index;
  });
}
function resetData() {
  cardNameJS.value = "";
  expityDate.value = "";
  cvc.value = "";
}

function updateData(index) {
  console.log(saveListCard);
  editIndex = index;
  saveListCard.forEach((item1, index1) => {
    if (a == index1) {
      cardNameJS.value = item1.cardNameJS;
      expityDate.value = item1.expityDate;
      cvc.value = item1.cvc;
    }
  });
}
function deleteData(index) {
  if (index >= 0 && index < saveListCard.length) {
    saveListCard.splice(index, 1);
    show();
  }
}
