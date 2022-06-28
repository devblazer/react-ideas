import useTriggerState from "../triggerState/triggerStateHook";
import useSingleton from "../singleton/singletonHook";


const initializer = () => new Map();

const useFreeState = (componentIdentifier, stateIdentifier, initialValue) => {
  const triggerState = useTriggerState(componentIdentifier);
  const stateMap = useSingleton(componentIdentifier, initializer);
  if (!stateMap.has(stateIdentifier))
    stateMap.set(stateIdentifier, [
      initialValue,
      (value) => {
        stateMap.get(stateIdentifier)[0] = value;
        triggerState();
      },
    ]);

  return [...stateMap.get(stateIdentifier)];
};

export default useFreeState;
