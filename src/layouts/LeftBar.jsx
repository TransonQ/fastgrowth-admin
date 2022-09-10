import { Navigation } from '@shopify/polaris'
import {
  AnalyticsMajor,
  CustomersMajor,
  ProductsMajor,
  QuestionMarkMajor,
  SettingsMajor
} from '@shopify/polaris-icons'

import { useLocation } from 'react-router-dom'

export const LeftBar = () => {
  const { pathname } = useLocation()

  // 左边主菜单
  const left_menu = [
    {
      url: '/',
      label: 'Home',
      icon: CustomersMajor,
      exactMatch: true,
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
    },
    {
      url: '/program',
      label: 'Program',
      icon: ProductsMajor,
      exactMatch: true,
      // badge: '15',
    },
    {
      url: '/notifications',
      label: 'Notifications',
      icon: AnalyticsMajor,
      exactMatch: true,
      // badge: '15',
    },
  ]
  // 左边下方菜单
  const bottom_menu = [
    {
      url: '/support',
      label: 'Support',
      icon: QuestionMarkMajor,
      exactMatch: true,
      badge: '15',
    },
    {
      url: '/settings',
      label: 'Settings',
      icon: SettingsMajor,
      exactMatch: true,
      badge: '15',
    },
  ]
  return (
    <Navigation location={pathname}>
      <Navigation.Section fill items={left_menu} />
      <Navigation.Section items={bottom_menu} />
    </Navigation>
  )
}
