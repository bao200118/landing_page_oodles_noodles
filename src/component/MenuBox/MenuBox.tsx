import './MenuBox.scss'
import Button from '../Button/Button.tsx'
import { ReactNode } from 'react'

type MenuBoxProps = {
  /**
   * Menu tag
   */
  tag?: string | ReactNode
  /**
   * Menu title
   */
  title: string | ReactNode;
  /**
   * Menu content
   */
  content: string | ReactNode;
  /**
   * Menu button label
   */
  buttonLabel: string;
  /**
   * Menu button click handler
   */
  onClickButton?: () => void;
}

function MenuBox({ tag, title, content, buttonLabel, onClickButton }: MenuBoxProps) {
  return (
    <div className="menu-box">
      <div className="content-container">
        {
          tag && (
            <div className="tag">
              {tag}
            </div>)
        }
        <div className="title">
          {title}
        </div>
        <div className="content">
          {content}
        </div>
        <Button buttonContainerClass="menu-button animation-bottom-up-button hidden" label={buttonLabel}
                onClick={onClickButton} />
      </div>
    </div>
  )
}

export default MenuBox
