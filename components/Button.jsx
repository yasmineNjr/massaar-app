const Button = ({ styles, title }) => (
  
    <button type="button" className={`py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-dimWhite outline-none ${styles} rounded-[10px]`}>
      {title}
    </button>
);

export default Button
