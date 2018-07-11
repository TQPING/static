import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import DatePicker from 'antd/lib/date-picker';  // 加载 JS
import 'antd/lib/date-picker/style/css';        // 加载 CSS

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
/*import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';*/

import './index.css';
import Routers from './router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routers />, document.getElementById('root'));
registerServiceWorker();
