import './Button.css'

type ButtonProps = {
  /**
   * Button label
   */
  label: string,
  /**
   * Click button handler
   */
  onClick?: () => void;
}

function Button({ label, onClick }: ButtonProps) {
  return (
    <div className="button-container" onClick={onClick}>
      <div className="button-text">{label}</div>
    </div>
  )
}

export default Button
