


const insert = document.getElementById("drop");
window.addEventListener("keydown", (e)=>{
    drop.innerHTML= `
  
    <div class = "color"> 
    <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
   </div>
 `
 
})