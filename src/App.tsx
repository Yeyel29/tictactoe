import React, { useState } from "react";
import Square from "./components/Square";

function App() {
  const [value, setValue] = useState<"X" | "O" | null>(null);

  return (
    <div>
      <Square value={value} onClick={() => setValue("X")} />
    </div>
  );
}

export default App;
