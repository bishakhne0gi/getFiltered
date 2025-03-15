import { useState, useCallback } from "react";

/**
 * A hook for toggling boolean state
 * @param initialValue The initial boolean value
 * @returns A tuple containing the current state and a toggle function
 */
export const useToggle = (
  initialValue: boolean = false
): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return [value, toggle];
};

export default useToggle;
