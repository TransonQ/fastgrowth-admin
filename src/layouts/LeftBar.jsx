import { Navigation } from '@shopify/polaris'

import { useLocation } from 'react-router-dom'

export const LeftBar = () => {
  const { pathname } = useLocation()

  // 左边主菜单 Section2
  const left_menu = [
    // {
    //   url: ur.home,
    //   label: 'Home',
    //   icon: CustomersMajor,
    //   exactMatch: true,
    //   // badge: '15',
    //   subNavigationItems: [
    //     {
    //       url: ur.partners,
    //       label: 'All partners',
    //       // exactMatch: true, // 不加所有子路由都会让改标签处于选中状态
    //     },
    //     {
    //       url: '/collections',
    //       label: 'Collections',
    //       exactMatch: true,
    //     },
    //   ],
    // },
  ]
  // 左边下方菜单 Section3
  const bottom_menu = []
  return (
    // <CustomProperties colorScheme='dark'>
    <Navigation location={pathname}>
      <Navigation.Section fill items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
    // </CustomProperties>
  )
}
