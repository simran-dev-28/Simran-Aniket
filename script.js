
const start=new Date('2024-10-17');
const days=Math.floor((new Date()-start)/(1000*60*60*24));
window.onload=()=>{const e=document.getElementById('days'); if(e)e.innerText=days+' Days Together ❤️';}
