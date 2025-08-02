type button = {
  type: "submit" | "reset" | "button";
  className: string;
  children: React.ReactNode;
};

function Button({ type, children, className }: button) {
  return (
    <button
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}


export default Button