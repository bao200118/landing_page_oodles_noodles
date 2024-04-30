import './MenuBox.scss'
import Button from '../Button/Button.tsx'

type MenuBoxProps = {
  /**
   * Menu title
   */
  title: string,
  /**
   * Menu content
   */
  content: string;
  /**
   * Menu button label
   */
  buttonLabel: string;
  /**
   * Menu button click handler
   */
  onClickButton?: () => void;
}

function MenuBox({ title, content, buttonLabel, onClickButton }: MenuBoxProps) {
  return (
    <div className="menu-box">
      <div className="content-container">
        <div className="title">
          {title}
        </div>
        <div className="content">
          {content}
        </div>
        <div className="menu-button">
          <Button label={buttonLabel} onClick={onClickButton} />
        </div>
      </div>
    </div>
  )
}

export default MenuBox
