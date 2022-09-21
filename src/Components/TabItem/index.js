import './index.css'

const TabItem = props => {
  const {tabItem, isActive, changeActiveTabId} = props

  const activeTab = isActive ? 'active-tab ' : ''

  const onClickTabItem = () => {
    changeActiveTabId(tabItem.tabId)
  }

  return (
    <li>
      <button
        onClick={onClickTabItem}
        className={`tab-item-btn ${activeTab}`}
        type="button"
      >
        {tabItem.displayText}
      </button>
    </li>
  )
}

export default TabItem
