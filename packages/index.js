//导入组件
import mSpace from "./Space/index";
import mBacktop from "./backtop/index";
import mBadge from './badge/index';
import mBreadcrumb from './breadcrumb/index';
import mButton from "./button/index";
import mCheckbox from "./checkbox/index";
import mCollapse from "./collapse/index";
import mCollapseItem from "./collapse/item/index";
import mColorPicker from './colorPicker/index';
import Confirm from "./confirm/index";
import mDate from "./date/index";
import mDivider from './divider/index';
import mDrawer from "./drawer/index";
import mDropdown from "./dropDown/index";
import TimeFormat from "./function/index";
import mInput from "./input/index";
import Loading from "./loading/index";
import mCol from "./mcol/index";
import mMenu from "./menu/index";
import Message from "./message/index";
import mModal from "./modal/index";
import mRow from "./mrow/index";
import mOptfile from "./optfile/index";
import mPagination from "./pagination/index";
import mPopover from './popover/index';
import mProgress from './progress/index';
import mRadio from "./radio/index";
import mSelect from "./select/index";
import mSwitch from "./switch/index";
import mTable from "./table/index";
import mTabs from "./tabs/index";
import mTextarea from "./textarea/index";
import mTree from "./tree/index";
import ClTag from './tag/index.js'


//存在所有组件
const components = [
  { name: 'mButton', component: mButton },
  { name: 'mInput', component: mInput },
  { name: 'mTable', component: mTable },
  { name: 'mSelect', component: mSelect },
  { name: 'mDropdown', component: mDropdown },
  { name: 'mRadio', component: mRadio },
  { name: 'mCheckbox', component: mCheckbox },
  { name: 'mModal', component: mModal },
  { name: 'mDrawer', component: mDrawer },
  { name: 'mSwitch', component: mSwitch },
  { name: 'mTree', component: mTree },
  { name: 'mOptfile', component: mOptfile },
  { name: 'mTextarea', component: mTextarea },
  { name: 'mRow', component: mRow },
  { name: 'mCol', component: mCol },
  { name: 'mPagination', component: mPagination },
  { name: 'mDate', component: mDate },
  { name: 'mBacktop', component: mBacktop },
  { name: 'mCollapse', component: mCollapse },
  { name: 'mCollapseItem', component: mCollapseItem },
  { name: 'mMenu', component: mMenu },
  { name: 'mTabs', component: mTabs },
  { name: 'mSpace', component: mSpace },
  { name: 'mPopover', component: mPopover },
  { name: 'mProgress', component: mProgress },
  { name: 'mColorPicker', component: mColorPicker },
  { name: 'mBreadcrumb', component: mBreadcrumb },
  { name: 'mBadge', component: mBadge },
  { name: 'mDivider', component: mDivider },
  {name:'ClTag',component:ClTag}
];
const install = (app) => {
  components.forEach(({ name, component }) => {
    app.component(name, component)
  })
  app.config.globalProperties.$message = Message
  app.config.globalProperties.$Confirm = Confirm
  app.config.globalProperties.$Loading = Loading
  app.config.globalProperties.$timeFormat = TimeFormat
}
const cl_Ui = {
  version: '0.4.1',
  install
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export {
  Confirm,
  // 导出的对象必须具有 install，才能被 app.use() 方法安装
  install, Loading, mBacktop, mBadge, mBreadcrumb,
  // 以下是具体的组件列表
  mButton, mCheckbox, mCol, mCollapse,
  mCollapseItem, mColorPicker, mDate, mDivider, mDrawer, mDropdown, Message, mInput, mMenu, mModal, mOptfile, mPagination, mPopover, mProgress, mRadio, mRow, mSelect, mSpace, mSwitch, mTable, mTabs, mTextarea, mTree, TimeFormat,ClTag
};
export default cl_Ui
