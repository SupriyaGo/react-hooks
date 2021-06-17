/** @format */

import "./App.css";
import UseState1 from "./useState/useState1";
import CustomStateHook from "./useState/customFormState";
import Effect from "./useEffect/effectComponent";
import RefComponent from "./useRef/RefComponent";
import CallBackComponent from "./useCallback/callBackComponent";
import MemoComponent from "./useMemo/memoComponent";
import ComA from "./useContext/comA";
import { UserProvider } from "./useContext/userContext";
import Couter from "./useReducer/couter";
import ComponentA from "./useReducer/componentA";
import ReducerProvider from "./useReducer/reducerContext";

function App() {
	return (
		// <UserProvider>
		// 	<ComA />
		// </UserProvider>
		<ReducerProvider>
			<ComponentA />
		</ReducerProvider>
	);
}

export default App;
