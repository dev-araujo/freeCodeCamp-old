function changeNft(id) {
  let option = document.querySelector("#right");

  if (id === 1) {
    option.classList.remove("right--option-2", "right--option-3");
    option.classList.add(`right--option-${id}`);
  }
  if (id === 2) {
    option.classList.remove("right--option-1", "right--option-3");
    option.classList.add(`right--option-${id}`);
  }
  if (id === 3) {
    option.classList.remove("right--option-1", "right--option-2");
    option.classList.add(`right--option-${id}`);
  }
}
