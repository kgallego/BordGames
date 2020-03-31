import React, {lazy, Suspense} from "react";
const Hover = lazy(() => import("./games/Hover/Screen"));

const App: React.FC = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Hover/>
    </Suspense>
  </div>
);

export default App;
