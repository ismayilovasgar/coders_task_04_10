const thead = document.getElementById("thead");
const add_item_btn = document.getElementById("add_item");

//* add operation items
const tbody = document.getElementById("tbody");
const save_btn = document.createElement("button");
const delete_btn = document.createElement("button");

//*
let i_order = 0;
add_item_btn.addEventListener("click", (e) => {
  i_order++;
  const tr_tbody = document.createElement("tr");
  tr_tbody.classList.add("tr_tbody");

  const td_item_order = document.createElement("td");
  td_item_order.classList.add("item_order");
  td_item_order.id = "item_order";
  td_item_order.textContent = i_order;

  const td_name = document.createElement("td");
  const input_name = document.createElement("input");
  input_name.type = "text";
  td_name.append(input_name);

  const td_surname = document.createElement("td");
  const input_surname = document.createElement("input");
  input_surname.type = "text";
  td_surname.append(input_surname);

  const td_age = document.createElement("td");
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

  //   console.log(e.target.parentElement.parentElement);
  e.preventDefault();
});

save_btn.addEventListener("click", (e) => {
  let i =
    e.target.parentElement.parentElement.parentElement.firstChild.textContent;
  let parent_tr = e.target.parentElement.parentElement.parentElement;
  //   console.log(i);

  e.preventDefault();
});
