import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const newTabId = () => {
    updateTabId(tabId)
  }

  const newClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${newClassName}`}
        onClick={newTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
