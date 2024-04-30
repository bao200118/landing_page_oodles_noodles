import './Button.scss'

type ButtonProps = {
  /**
   * Button label
   */
  label: string,
  /**
   * Click button handler
   */
  onClick?: () => void;
  /**
   * Added class name of button container
   */
  buttonContainerClass?: string
}

function Button({ label, onClick, buttonContainerClass }: ButtonProps) {
  return (
    <div className={"button-container " + buttonContainerClass } onClick={onClick}>
      <div className="button-text">{label}</div>
    </div>
  )
}

export default Button
