<html>


<h1>
  <button class="button" id="btn">Generate New Random Color</button>
  <span id="color"></span>
</h1>


</html>

<script>
const setBg = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("btn").style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
}

btn.addEventListener("click", setBg);
setBg();
</script>


<style>

body {
  height: 100vh;
  margin: 0;
  padding: 1rem;
  display: grid;
  place-items: center;
  font-family: system-ui;
}

h1 {
  background: white;
  padding: 1rem 2rem;
  text-align: center;
}
span {
  display: block;
  padding: 1rem;
  font-size: 3rem;
  font-weight: normal;
  font-family: "Times New Roman", Times, serif;
}

.button {
  border-radius: 15px;
  box-shadow: 0 9px #999;
  padding: 15px 25px;
  font-size: 24px;
}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
  
}




</style>

