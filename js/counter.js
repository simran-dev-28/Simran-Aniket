
const start=new Date('2023-10-17');
const days=Math.floor((new Date()-start)/(1000*60*60*24));
document.getElementById('counter').innerHTML=days+' Days Together ❤️';
const d=document.getElementById('days'); if(d)d.innerHTML=days;
