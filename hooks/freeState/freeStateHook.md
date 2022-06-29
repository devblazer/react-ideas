This hook is designed to allow you to use state variable while breaking the 'rules of hooks'.  You can register as many state variables as you want, whenever you want, whether that be inside conditions or arrays or any other order.

This is accomplished by 'naming' your state variables with the 'stateIdentifier'.  The hook also needs you to pass in a componentIdentifier (see componentIdentifierHook).

The initialValue, as well as returned array of getter and setter behave basically the same as useState().

One possible example.  There are obviously many other applications
```
const ComponentA = ({data}) => {
  const componentIdentifier = useComponentIdentifier();
  
  return (<Fragment>
    {data.map((item, ind) => {
      const [state, setState] = useFreeState(componentIdentifier, key, 0); 
      
      return (
        <div key={ind} onClick={() => setState(state+1)>
          {item.label} clicked {state} time(s)
        </div>
      );
    })}
  </Fragment);
}
```