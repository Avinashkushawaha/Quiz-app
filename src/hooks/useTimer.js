import { useEffect, useState } from "react";

const useTimer = (resetKey) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(0);
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [resetKey]);

  return time;
};

export default useTimer;
