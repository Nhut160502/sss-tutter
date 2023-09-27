import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilBarChart,
  cibTeespring,
  cilBook,
  cilSpeedometer,
  cilUser,
  cibCodesandbox,
  cilResizeWidth,
  cilListRich,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Saller',
  },

  // Fashion
  {
    component: CNavItem,
    name: 'Loại Sản Phẩm',
    to: '/dashboard/loai-san-pham',
    icon: <CIcon icon={cilBarChart} customClassName="nav-icon" />,
  },

  // Lookbook
  {
    component: CNavItem,
    name: 'Bộ Sưu Tập',
    to: '/dashboard/lookbook',
    icon: <CIcon icon={cilBook} customClassName="nav-icon" />,
  },

  // Categories
  {
    component: CNavItem,
    name: 'Danh Mục',
    to: '/dashboard/danh-muc',
    icon: <CIcon icon={cilListRich} customClassName="nav-icon" />,
  },

  // Product
  {
    component: CNavItem,
    name: 'Sản Phẩm',
    to: '/dashboard/san-pham',
    icon: <CIcon icon={cibTeespring} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Attribute',
  },
  {
    component: CNavItem,
    name: 'Màu Sắc',
    to: '/dashboard/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Kích Thước',
    to: '/dashboard/sizes',
    icon: <CIcon icon={cilResizeWidth} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Shipping',
  },
  {
    component: CNavItem,
    name: 'Đơn Hàng',
    to: '/dashboard/order',
    icon: <CIcon icon={cibCodesandbox} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'users',
  },
  {
    component: CNavItem,
    name: 'Người Dùng',
    to: '/dashboard/user',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
]

export default _nav
