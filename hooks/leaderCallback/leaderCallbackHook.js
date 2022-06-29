const { useRef } = 'react';

const leadersList = new Map();

const useLeaderCallback = (componentIdentifier, callback) => {
  // ref used here instead of memo, since memo value can be forgotten and that would cause a new symbol
  const hookIdRef = useRef(Symbol());

  if (!leadersList.has(componentIdentifier))
    leadersList.set(componentIdentifier, hookIdRef.current);

  if (leadersList.get(componentIdentifier) === hookIdRef.current)
    callback();
};

export default useLeaderCallback;
