type stock = {
  total: number;
  left: number;

};
function StockProgress({ total, left }: stock) {
  const progress = left / total * 100
  const color = progress > 40 ? "rgb(224, 126, 27)" : "#9f0712"
  const styles = {backgroundImage:`linear-gradient(90deg, ${color} ${progress}%, transparent ${progress}% 100%)`}

  return (
    <div className="px-2 pb-2">
      <small>{left} items left</small>
     <div style={styles} className="rounded-[5px] w-full h-2 bg-neutral-300"></div>
    </div>
   
  );
}

export default StockProgress;
