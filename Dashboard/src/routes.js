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

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  // Fashion
  {
    path: '/dashboard/loai-san-pham/edit/:slugFashion',
    name: 'Chỉnh Sửa Loại Sản Phẩm',
    element: EditFashion,
  },
  { path: '/dashboard/loai-san-pham', name: 'Danh Sách Loại Sản Phẩm', element: ListFashion },
  { path: '/dashboard/loai-san-pham/store', name: 'Thêm Loại Sản Phẩm', element: StoreFashion },

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
    path: '/dashboard/danh-muc/edit/:slugCategories',
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
]

export default routes
