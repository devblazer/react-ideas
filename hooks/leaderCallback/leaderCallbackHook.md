This hook must be passed an identifier so that it knows which component it is executing for (see componentIdentifierHook).  It will also accept a callback.

If this hook is called multiple times with the same componentIdentifier, it will only run the callback for the very first execution of this hook, for the given componentIdentifier.  This allows you to call the hook a variable number of times and only have the callback execute once per render flow.

For instance:

```
ComponentA = () => {
  const ref = useRef(0);
  const componentIdentifier = useComponentIdentifier();
  useLeaderCallback(componentIdentifier, () => ref.current++);
  useLeaderCallback(componentIdentifier, () => ref.current++);
  useLeaderCallback(componentIdentifier, () => ref.current++);

  console.log(ref.current); // produces '1'
}
```

Within a component this is probably not that useful, but for building libraries and hooks there are many applications.