import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counterSlice";
import { RootState } from "./redux/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <Box>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </Box>
  );
}

export default App;
