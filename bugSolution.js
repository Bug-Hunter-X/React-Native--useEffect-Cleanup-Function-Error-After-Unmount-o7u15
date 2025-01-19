```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const isMounted = useRef(true);

  useEffect(() => {
    let interval;
    if (count < 5) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }

    return () => {
      isMounted.current = false; // Set isMounted to false before cleanup
      clearInterval(interval);
    };
  }, [count]);

  useEffect(() => {
    return () => {
      //Optional additional cleanup
    };
  }, []);

  return (
    <Text>{count}</Text>
  );
};
```
By setting `isMounted.current = false;` before any state access in cleanup, we prevent this error.