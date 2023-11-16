// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { MyButton } from "@morotsman-nx-demo/button-library";
import {MyInput} from "@morotsman-nx-demo/input-library";

export function App() {
  return (
    <div>
      <h1>Welcome to replace</h1>
      What would you like to replace?<MyInput/>
      <MyButton title="Press to replace" />
      <p>test2</p>
    </div>
  );
}

export default App;
