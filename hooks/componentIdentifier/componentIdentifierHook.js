import { useRef } from 'react';

const useComponentIdentifier = (name) => useRef(Symbol(name)).current;

export default useComponentIdentifier;
