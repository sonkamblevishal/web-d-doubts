function convertToJson(response) {
  return response.json();
}

let tableHeader = document.querySelector(".row-items");

function showResult(data) {
  //   console.log(data);

  const tbody_element = document.getElementById("search_result");

  for (let i = 0; i < data.coins.length; i++) {
    const single_data = data.coins[i];

    const new_row = document.createElement("tr");
    const new_ancher_tag = document.createElement("a");

    const new_s_no = document.createElement("td");
    const new_logo = document.createElement("td");
    const new_name = document.createElement("td");
    const new_link = document.createElement("td");
    const new_img = document.createElement("img");

    new_s_no.innerText = i + 1;
    new_img.src = single_data.thumb;
    new_logo.appendChild(new_img);
    new_name.innerText = single_data.name + " ( " + single_data.symbol + ")";
    new_ancher_tag.innerText = "Show More";
    new_ancher_tag.href = `detail.html?coin=${single_data.id}`;
    new_link.appendChild(new_ancher_tag);

    new_row.appendChild(new_s_no);
    new_row.appendChild(new_logo);
    new_row.appendChild(new_name);
    new_row.appendChild(new_link);

    tableHeader.classList.add("active");

    tbody_element.appendChild(new_row);

    // console.log(single_data);
  }
}
// console.log(window.location.href);

const search_field = document.getElementById("search_field");

var url = new URL(window.location.href);
var params = new URLSearchParams(url.search);
let search_key = params.get("q");

search_field.value = search_key;
// console.log(query);

fetch(`https://api.coingecko.com/api/v3/search?query=${search_key}`)
  .then(convertToJson)
  .then(showResult);
