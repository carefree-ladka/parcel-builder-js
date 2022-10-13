import axios from "axios";

const users = document.getElementById("users");
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

async function getUsers() {
  const response = await instance.get();
  return response.data;
}

async function showPeople() {
  const data = await getUsers();
  for (let i = 0; i < data.length; i++) {
    const li = document.createElement("li");
    li.style.listStyle = "none";
    li.style.color = "orange";
    li.textContent = data[i].name;
    users.append(li);
  }
}

export default showPeople;
