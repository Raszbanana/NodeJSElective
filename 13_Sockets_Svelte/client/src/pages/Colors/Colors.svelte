<script>
  import io from "socket.io-client";
  const socket = io();

  function changeColor(event) {
    socket.emit("colorChanged", { data: event.target.value })
  }
  
  let lastBoyToChangeColor;

  socket.on("changeColor", ({ data, username})=> {
        document.body.style.backgroundColor = data;
        lastBoyToChangeColor = username;
    })


</script>

<input type="color" on:change={changeColor} />
