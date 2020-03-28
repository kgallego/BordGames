import React, {lazy, Suspense} from "react";
const CoronaWalrus = lazy(() => import("./components/CoronaWalrus"));

const App: React.FC = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <CoronaWalrus/>
    </Suspense>
  </div>
);

export default App;
