type button = {
  type: "submit" | "reset" | "button";
  style?: string;
  children: React.ReactNode;
};

function Button({ type, children }: button) {
  return (
    <button
      type={type}
      className="bg-button-100 cursor-pointer hover:bg-button text-white px-4 py-2 rounded-[4px] shadow-btnShadow"
    >
      {children}
    </button>
  );
}


export default Button