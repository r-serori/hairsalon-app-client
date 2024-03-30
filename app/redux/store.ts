// store.ts

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../redux/reducers/rootReducer';
import thunk from 'redux-thunk';

// Redux ToolkitのconfigureStore関数を使用してReduxのストアを構成します。
const store = configureStore({
  reducer: rootReducer,
  
});

// 作成したストアをデフォルトでエクスポートします。
// これにより、他のファイルからこのストアをインポートして使用することができます。
export default store;
