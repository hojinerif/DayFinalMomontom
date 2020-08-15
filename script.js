const title=document.querySelector("#title")

const CLICKED_CLASS = "clicked";

function handleClick() {
  const hasclass = title.classList.contains(CLICKED_CLASS);
  if(hasclass){
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }

}


function init() {
  title.addEventListener("click", handleClick);
}

init();
