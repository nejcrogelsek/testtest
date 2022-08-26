import LoadingProvider from 'components/providers/LoadingProvider/LoadingProvider'
import { observer } from 'mobx-react'
import { FC, lazy, Suspense } from 'react'
import { Route, RouteProps, Routes as Switch } from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import RestrictedRoute from './RestrictedRoute'

export enum RouteType {
  PUBLIC,
  PRIVATE,
  RESTRICTED,
}

interface AppRoute extends RouteProps {
  type?: RouteType
}

/* Public routes */
const Home = lazy(() => import('pages/Home/Home'))
const TestOne = lazy(() => import('pages/TestOne/TestOne'))
const TestTwo = lazy(() => import('pages/TestTwo/TestTwo'))
const TestThree = lazy(() => import('pages/TestThree/TestThree'))
const TestFour = lazy(() => import('pages/TestFour/TestFour'))
const TestFive = lazy(() => import('pages/TestFive/TestFive'))
const TestSix = lazy(() => import('pages/TestSix/TestSix'))
const TestSeven = lazy(() => import('pages/TestSeven/TestSeven'))

/* Error routes */
const Page404 = lazy(() => import('pages/Page404/Page404'))

export const AppRoutes: AppRoute[] = [
  // Public Routes
  {
    type: RouteType.PUBLIC,
    path: '/',
    children: <Home />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-1',
    children: <TestOne />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-2',
    children: <TestTwo />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-3',
    children: <TestThree />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-4',
    children: <TestFour />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-5',
    children: <TestFive />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-6',
    children: <TestSix />,
  },
  {
    type: RouteType.PUBLIC,
    path: '/test-7',
    children: <TestSeven />,
  },
  // 404 Error
  {
    type: RouteType.PUBLIC,
    path: '*',
    children: <Page404 />,
  },
]

const Routes: FC = () => {
  return (
    <Suspense fallback={<LoadingProvider loading={true} />}>
      <Switch>
        {AppRoutes.map((r) => {
          const { type } = r
          if (type === RouteType.PRIVATE) {
            return <Route key={`${r.path}`} path={`/${r.path}`} element={<PrivateRoute>{r.children}</PrivateRoute>} />
          }
          if (type === RouteType.RESTRICTED) {
            return (
              <Route key={`${r.path}`} path={`/${r.path}`} element={<RestrictedRoute>{r.children}</RestrictedRoute>} />
            )
          }

          return <Route key={`${r.path}`} path={`/${r.path}`} element={r.children} />
        })}
        <Route path="*" element={<Page404 />} />
      </Switch>
    </Suspense>
  )
}

export default observer(Routes)
