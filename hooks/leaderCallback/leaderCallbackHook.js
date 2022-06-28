const { useRef } = 'react';

const leadersList = new Map();

const useLeaderCallback = (componentIdentifier, callback) => {
  // ref used here instead of memo, since memo value can be forgotten and that would cause a new symbol
  const leaderIdRef = useRef(Symbol());

  if (!leadersList.has(componentIdentifier))
    leadersList.set(componentIdentifier, leaderIdRef.current);

  if (leadersList.get(componentIdentifier) === leaderIdRef.current)
    callback();
};

export default useLeaderCallback;
