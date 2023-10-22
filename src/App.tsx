import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

function App() {
  return (
    <div className="bg-black min-h-screen">
      <div className="text-white">
        consequuntur similique saepe vero possimus repudiandae nulla dolores eum
        aut, impedit inventore, eveniet perferendis!
      </div>
    </div>
  );
}

export default App;
