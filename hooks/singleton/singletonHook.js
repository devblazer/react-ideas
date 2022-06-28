import { useEffect } from 'react';
import useLeaderCallback from "../leaderCallback/leaderCallbackHook";

const values = new Map();

const useSingleton = (componentIdentifier, initializer) => {
  useLeaderCallback(componentIdentifier, () => {
    if (!values.has(componentIdentifier))
      values.set(componentIdentifier, initializer());

    useEffect(() => () => values.delete(componentIdentifier));
  });

  return values.get(componentIdentifier);
};

export default useSingleton;
