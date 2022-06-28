This hook is designed to produce a single stateSetter relative to the provided componentIdentifier.  Multiple calls to the same hook for the same identifier will only ever return the same callback.

The callback that is returned, when called, will update the current react component with a random state update.  This state update is inaccessable outside the hook, its only purpose being to cause a render reflow for the current component.

The hook accepts only one parameter, componentIdentifier (see componentIdentifierHook).  