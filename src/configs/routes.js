import { Home } from '@/pages/Home/Home'
import { Notifications } from '@/pages/Notifications/Notifications'
import { Program } from '@/pages/Program/Program'
import { Settings } from '@/pages/Settings/Settings'

// react-router v6 迁移: 之前写法是 component 现在的写法是 element
export const routes = [
  {
    path: '/',
    element: <Home />,
    children: [],
  },
  {
    path: '/program',
    element: <Program />,
    children: [],
  },
  {
    path: '/notifications',
    element: <Notifications />,
    children: [],
  },
  {
    path: '/settings',
    element: <Settings />,
    children: [],
  },
  // {
  //   path: ur.partners,
  //   element: (
  //     <Suspense fallback={<div>loading</div>}>
  //       <Demo1 />
  //     </Suspense>
  //   ),
  // },
]
