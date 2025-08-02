type props = {
  price: number | undefined
}

function FormatPrice({price}: props) {
  if (price === undefined) {
    return "";
  }
  const formatedPrice = new Intl.NumberFormat("en-NG").format(price)
  return <div>&#8358; {formatedPrice}</div>
}

export default FormatPrice