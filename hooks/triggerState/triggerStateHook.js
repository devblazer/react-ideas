import { useState, useEffect } from 'react';
import useLeaderCallback from "../leaderCallback/leaderCallbackHook";

const componentStateSetters = new Map();

const useTriggerState = (componentIdentifier) => {
  useLeaderCallback(componentIdentifier, () => {
    const [, setStateTrigger] = useState();

    if (!componentStateSetters.has(componentIdentifier))
      componentStateSetters.set(componentIdentifier, () => setStateTrigger(Symbol()));

    useEffect(() => () => componentStateSetters.delete(componentIdentifier));
  });

  return componentStateSetters.get(componentIdentifier);
};

export default useTriggerState;
