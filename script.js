
document.body.style.overflow = "hidden";

const openButton = document.getElementById("open");
const coverPage = document.getElementById("cover");

if (openButton && coverPage) {
  openButton.addEventListener("click", function () {

    coverPage.classList.add("open");
    document.body.style.overflow = "";

    const music = document.getElementById("music");
    const musicButton = document.getElementById("musicBtn");

    if (music) {
      music.play()
        .then(() => {
          if (musicButton) {
            musicButton.classList.add("play");
          }
        })
        .catch(() => {});
    }

  });
}
const W=WEDDING,$=s=>document.querySelectorAll(s);function f(k,v){$(`[data-${k}]`).forEach(e=>e.textContent=v)}f("bride",W.bride);f("groom",W.groom);f("son",W.son);f("date",W.date);f("dateLong",W.dateLong);f("time",W.time);f("invite",W.invite);f("venue",W.venue);f("address",W.address);document.title=`${W.bride} & ${W.groom}`;
document.querySelector("#story").innerHTML=W.story.map(x=>`<div class="storyItem reveal"><b>${x[0]}</b><div><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`).join("");document.querySelector("#schedule").innerHTML=W.schedule.map(x=>`<div class="reveal"><b>${x[0]}</b><div><h3>${x[1]}</h3><p>${x[2]}</p></div></div>`).join("");
document.querySelector("#map").href=W.map;let msg=y=>encodeURIComponent(`Сайн байна уу. ${W.bride} & ${W.groom}-ийн хуримд ${y?"хүрэлцэн очно":"харамсалтай нь очиж чадахгүй"}.`);document.querySelector("#yes").href=`sms:${W.phone}?body=${msg(1)}`;document.querySelector("#no").href=`sms:${W.phone}?body=${msg(0)}`;
let a=document.querySelector("#music"),mb=document.querySelector("#musicBtn");
function tick(){let n=Math.max(0,new Date(W.dateISO)-new Date()),q=Math.floor(n/1000);d.textContent=String(Math.floor(q/86400)).padStart(3,"0");q%=86400;h.textContent=String(Math.floor(q/3600)).padStart(2,"0");q%=3600;m.textContent=String(Math.floor(q/60)).padStart(2,"0");s.textContent=String(q%60).padStart(2,"0")}tick();setInterval(tick,1000);
let ob=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add("show")),{threshold:.1});$(".reveal").forEach(e=>ob.observe(e));setInterval(()=>{let p=document.createElement("i");p.className="petal";p.textContent=Math.random()>.5?"✿":"❀";p.style.left=Math.random()*100+"vw";p.style.setProperty("--x",(Math.random()*120-60)+"px");p.style.animationDuration=(7+Math.random()*6)+"s";document.querySelector("#petals").append(p);setTimeout(()=>p.remove(),14000)},900);
function createFloatingHeart() {

  const container =
    document.getElementById(
      "floatingHearts"
    );

  if (!container) return;


  const heart =
    document.createElement(
      "span"
    );


  heart.className =
    "float-heart";


  heart.innerHTML =
    "♥";


  heart.style.left =
    Math.random() * 100 + "vw";


  heart.style.fontSize =
    10 +
    Math.random() * 15 +
    "px";


  heart.style.animationDuration =
    8 +
    Math.random() * 7 +
    "s";


  heart.style.setProperty(

    "--heart-drift",

    (
      Math.random() *
      160 -
      80
    ) + "px"

  );


  container.appendChild(
    heart
  );


  setTimeout(
    () =>
      heart.remove(),

    16000
  );

}


setInterval(

  createFloatingHeart,

  900

);