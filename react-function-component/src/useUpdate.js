import { useEffect, useState } from "react";
const useUpdate = (fn, array) => {
  // const [nUpdateCount, setNUpdateCount] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((x) => x + 1);
  }, array);
  useEffect(() => {
    if (count > 1) {
      console.log("count", count);
      fn();
    }
  }, [count]);
};
export default useUpdate;
