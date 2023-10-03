import Dashboard from './pages/Dashboard'
import { Edit as EditFashion, List as ListFashion, Store as StoreFashion } from './pages/Fashions'
import {
  Edit as EditLookbook,
  List as ListLookbook,
  Store as StoreLookbook,
} from './pages/Lookbooks'
import {
  Edit as EditCategories,
  List as ListCategories,
  Store as StoreCategories,
} from './pages/Categories'

import { Edit as EditProduct, List as ListProduct, Store as StoreProduct } from './pages/Products'
import { List as ListColors, Store as StoreColor, Edit as EditColor } from './pages/Colors'
import { List as ListSizes, Store as StoreSize, Edit as EditSize } from './pages/Sizes'
import { List as ListOrder } from './pages/Order'
import { List as ListUser } from './pages/Users'

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Fashion

  {
    path: '/dashboard/loai-san-pham',
    name: 'Danh Sách Loại Sản Phẩm',
    element: ListFashion,
  },
  {
    path: '/dashboard/loai-san-pham/store',
    name: 'Thêm Loại Sản Phẩm',
    element: StoreFashion,
  },
  {
    path: '/dashboard/loai-san-pham/edit/:slugFashion',
    name: 'Chỉnh Sửa Loại Sản Phẩm',
    element: EditFashion,
  },

  // Lookbook
  { path: '/dashboard/lookbook', name: 'Danh Sách Bộ Sưu Tập', element: ListLookbook },
  { path: '/dashboard/lookbook/store', name: 'Thêm Bộ Sưu Tập', element: StoreLookbook },
  {
    path: '/dashboard/lookbook/edit/:slugLookbook',
    name: 'Chỉnh Sửa Bộ Sưu Tập',
    element: EditLookbook,
  },

  // Categories
  { path: '/dashboard/danh-muc', name: 'Danh Sách Danh Mục', element: ListCategories },
  { path: '/dashboard/danh-muc/store', name: 'Thêm Danh Mục', element: StoreCategories },
  {
    path: '/dashboard/danh-muc/edit/:slugCategory',
    name: 'Chỉnh Sửa Danh Mục',
    element: EditCategories,
  },

  // Product
  { path: '/dashboard/san-pham', name: 'Danh Sách Sản Phẩm', element: ListProduct },
  { path: '/dashboard/san-pham/store', name: 'Thêm Sản Phẩm', element: StoreProduct },
  {
    path: '/dashboard/san-pham/edit/:slugProduct',
    name: 'Chỉnh Sửa Sản Phẩm',
    element: EditProduct,
  },

  // Attribute

  //colors
  { path: '/dashboard/colors', name: 'Danh Sách Màu Sắc', element: ListColors },
  { path: '/dashboard/colors/store', name: 'Thêm Màu Sắc', element: StoreColor },
  { path: '/dashboard/colors/edit/:slugColor', name: 'Chỉnh Sửa Màu Sắc', element: EditColor },

  //sizes
  { path: '/dashboard/sizes', name: 'Danh Sách Kích Thước', element: ListSizes },
  { path: '/dashboard/sizes/store', name: 'Thêm Kích Thước', element: StoreSize },
  { path: '/dashboard/sizes/edit/:slugSize', name: 'Chỉnh Sửa Kích Thước', element: EditSize },

  //Order
  { path: '/dashboard/order', name: 'Danh Sách Đơn Hàng', element: ListOrder },

  // User
  { path: '/dashboard/user', name: 'Danh Sách Người Dùng', element: ListUser },
]

export default routes
