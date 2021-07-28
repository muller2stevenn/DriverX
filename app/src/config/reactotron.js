import Reactotron from "reactotron-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {reactotronRedux} from "reactotron-redux";

Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
        host: 'http://192.168.102.2:9090'
    })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

console.tron = Reactotron;
export default Reactotron;