async function getAllUsers() {
  const response = await fetch(`http://localhost:5500/all`,)
  const json = await response.json();
  console.log(json)
}

getAllUsers()