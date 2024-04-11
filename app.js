const thead = document.getElementById("thead");
const add_item_btn = document.getElementById("add_item");

//* add operation items
document.addEventListener("load", (e) => {
  e.preventDefault();
});
//*
let i_order = 0;
add_item_btn.addEventListener("click", (e) => {
  const tbody = document.getElementById("tbody");
  const save_btn = document.createElement("button");
  const delete_btn = document.createElement("button");
  i_order++;
  const tr_tbody = document.createElement("tr");
  tr_tbody.classList.add("tr_tbody");
  tr_tbody.id = `parent_tr_${i_order}`;

  const td_item_order = document.createElement("td");
  td_item_order.classList.add("item_order");
  td_item_order.id = "item_order";
  td_item_order.textContent = i_order;

  const td_name = document.createElement("td");
  td_name.classList.add(`item-${i_order}`);
  const input_name = document.createElement("input");
  input_name.type = "text";
  td_name.append(input_name);

  const td_surname = document.createElement("td");
  td_surname.classList.add(`item-${i_order}`);
  const input_surname = document.createElement("input");
  input_surname.type = "text";
  td_surname.append(input_surname);

  const td_age = document.createElement("td");
  td_age.classList.add(`item-${i_order}`);
  const input_age = document.createElement("input");
  input_age.type = "number";
  td_age.append(input_age);

  const td_operations = document.createElement("td");
  td_operations.classList.add("operation_btn");
  const operation_container = document.createElement("div");
  operation_container.classList.add("operation_container");
  save_btn.classList.add("save");
  save_btn.id = "save";
  save_btn.textContent = "Yadda Saxla";
  delete_btn.classList.add("delete");
  delete_btn.id = "delete";
  delete_btn.textContent = "Delete";

  td_operations.append(operation_container);
  operation_container.append(save_btn, delete_btn);

  //.... elave edecem
  tbody.append(tr_tbody);
  tr_tbody.append(td_item_order, td_name, td_surname, td_age, td_operations);

  save_btn.addEventListener("click", (e) => {
    let j =
      e.target.parentElement.parentElement.parentElement.firstChild.textContent;
    const paren_tr = document.getElementById(`parent_tr_${i_order}`);
    const ele = paren_tr.childNodes.forEach((val, index) => {
      if (index == 1 || index == 2 || index == 3) {
        console.log(val);
        const newElement = document.createElement("p");
        newElement.textContent = val.firstChild.value;
        const oldElement = val.firstChild;
        val.replaceChild(newElement, oldElement);
      }
    });
    e.preventDefault();
  });

  e.preventDefault();
});
