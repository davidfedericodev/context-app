export default function Button({ children, variant = "primary", width = "auto", onClick, type = "button" }) {
  const variants = {
    primary: "bg-white text-stone-900",
    secondary: "bg-stone-900 text-stone-50",
    outline: "bg-transparent border border-stone-900 text-stone-900",
    danger: "bg-red-500 text-white",
  };

  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md mt-4 ${variants[variant]}`} style={{ width: width }} type={type}>
      {children}
    </button>
  );
}
