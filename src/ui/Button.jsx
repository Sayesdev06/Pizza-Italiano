import { Link } from "react-router-dom";

function Button({ children, disabled, to , type , onClick }) {


  
  const base = "inline-block text-sm rounded-full bg-lime-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-lime-300 disabled:cursor-not-allowed"
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "inline-block rounded-full bg-transparent  border-2  border-stone-300 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:text-stone-800 hover:bg-lime-500 disabled:cursor-not-allowed px-4 py-2 md:px-6 md:py-3.5",
  };
  if (to) return <Link className={styles[type]} to ={to}>{children}</Link>

  if(onClick) return (
    <button disabled={disabled} className={styles[type]} onClick={onClick}>
      {children}
    </button>
  );
    return (
      <button disabled ={disabled} className={styles[type]}>
        {children}
      </button>
    );
}

export default Button
