import React, {lazy, Suspense} from "react";
const Hover = lazy(() => import("./games/Hover/Screen"));

const styles: Styles = {
  container: {
    margin: '5rem',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
};

const App: React.FC = () => (
  <div style={styles.container}>
    <Suspense fallback={<div>Loading...</div>}>
      <Hover/>
    </Suspense>
  </div>
);

export default App;
