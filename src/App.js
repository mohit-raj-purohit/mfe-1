import React, { Suspense } from "react";
import useStore from "./store";
const RemoteApp = React.lazy(() => import("app2/App"));

const App = () => {
  const { count, inc } = useStore();
  return (
    <div>
      <h1>App 1</h1>
      <p>Count in App1: {count}</p>
      <button onClick={inc}>one up</button>
      <Suspense fallback={"loading..."}>
        <RemoteApp count={count} />
      </Suspense>
    </div>
  );
};

export default App;
