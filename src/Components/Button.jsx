import './Styles/Button.css';

const Button = ({ label, className, onClick }) => {
  return (
    <button
      className={`btn btn-dark rounded-1 text-uppercase ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
