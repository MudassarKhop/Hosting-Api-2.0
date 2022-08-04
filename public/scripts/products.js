const api_url = "https://thisisyourstore.herokuapp.com";
async function getProducts(url) {
  const response = await fetch(url + "/" + "products", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.length === 0) {
    alert("Table Users is empty");
  } else {
    showProducts(data);
  }
}

function showProducts(data) {
  let table = `<tr>
                <th>sku</th>
                <th>name</th>
                <th>price</th>
                <th>weight</th>
                <th>descriptions</th>
                <th>thumbnail</th>
                <th>image</th>
                <th>category</th>
                <th>create_date</th>
                <th>stock</th>
                </tr>`;
  for (let p of data) {
    table += `<tr>
                <td>${p.sku}</td>
                <td>${p.name}</td>
                <td>${p.price}</td>
                <td>${p.weight}</td>
                <td>${p.descriptions}</td>
                <td>${p.thumbnail}</td>
                <td>${p.image}</td>
                <td>${p.category}</td>
                <td>${p.create_date}</td>
                <td>${p.stock}</td>
                <tr>`;
  }
  document.getElementById("products").innerHTML = table;
}

getProducts(url);
console.log("It is working");
