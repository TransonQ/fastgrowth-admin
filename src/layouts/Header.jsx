import { TopBar } from '@shopify/polaris'
import { CircleRightMajor, ProfileMajor } from '@shopify/polaris-icons'
import { useCallback, useState } from 'react'
import logo from '../assets/img/logo.svg'

export const Header = () => {
  const [userMenuActive, setUserMenuActive] = useState(false)
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  )

  // header avatar menu actions
  const userMenuActions = [
    {
      items: [
        { content: 'Account settings', icon: ProfileMajor, onAction() {} },
        { content: 'Log out', icon: CircleRightMajor, onAction() {} },
      ],
    },
  ]

  return (
    <TopBar
      showNavigationToggle
      userMenu={
        <TopBar.UserMenu
          actions={userMenuActions}
          name={'Fastlane'}
          avatar={logo}
          // detail={storeName}
          initials={'Fastlane'}
          open={userMenuActive}
          onToggle={toggleUserMenuActive}
        />
      }
      // searchResultsVisible={searchActive}
      // searchField={searchFieldMarkup}
      // searchResults={searchResultsMarkup}
      // onSearchResultsDismiss={handleSearchResultsDismiss}
      // onNavigationToggle={toggleMobileNavigationActive}
    />
  )
}
