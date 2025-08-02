
function getPercentage(total: number, left: number) {
  const percent = (left / total) * 100;
  return `${percent}%`;
}

function discount(oldPrice: number|undefined, newPrice: number) {
  if (oldPrice === undefined) {
    return ''
  }
  const discount = Math.floor(((newPrice - oldPrice) / oldPrice) * 100);
  return `${discount}%`;
}

function countDown(countDown: number) {
  const totalTime = countDown;
  const hr = Math.floor(totalTime / 3600);
  const min = Math.floor((totalTime % 3600) / 60);
  const sec = totalTime % 60;

  return `${hr.toString().padStart(2, "0")}hr : ${min
    .toString()
    .padStart(2, "0")}m : ${sec.toString().padStart(2, "0")}s`;
}

export {getPercentage, countDown, discount };
