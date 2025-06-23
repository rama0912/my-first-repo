function submitBtn() {
  alert("You logged in!");

  const user = document.getElementById('user').value;
  const pass = document.getElementById('pass').value;
  if (user && pass) {
    alert('Login Successful');
  } else{
    alert('Please enter both fields');
  }
}
