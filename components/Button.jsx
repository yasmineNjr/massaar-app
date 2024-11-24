const Button = ({ styles, title, onClickHandler }) => (
  
    <button 
      type="button" 
      className={`py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-dimWhite outline-none ${styles} rounded-[10px] shadow-customGray transition-transform duration-300 hover:scale-105 hover:shadow-2xl`}
      onClick={onClickHandler}
    >
      {title}
    </button>
);

export default Button
