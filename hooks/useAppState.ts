import { useState, useEffect } from "react";
import { AppState, AppStateStatus } from "react-native";

/**
 * A hook that tracks the app state (active, background, inactive)
 * @returns The current app state
 */
export const useAppState = (): AppStateStatus => {
  const [appState, setAppState] = useState<AppStateStatus>(
    AppState.currentState
  );

  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextAppState) => {
      setAppState(nextAppState);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return appState;
};

export default useAppState;
