fetch("http://localhost:3000/messages1", { method: "PUT" })
  .then((res) => res.json())
  .then((data) => console.log(data));
