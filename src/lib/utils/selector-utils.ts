import { useMemo } from "react";

/**
 * Hook that creates a selector that only re-renders when dependencies change
 *
 * @param getValue Function that extracts value from context or state
 * @param deps Array of dependencies to watch for changes
 * @returns Selected value, memoized to prevent unnecessary re-renders
 */
export function useSelector<T, D extends any[]>(getValue: () => T, deps: D): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => getValue(), [getValue, ...deps]);
}

/**
 * Hook that creates a function selector that preserves function identity
 * Useful for optimizing callbacks that shouldn't cause re-renders
 *
 * @param getFunction Function that returns the function to memoize
 * @param deps Array of dependencies to watch for changes
 * @returns Memoized function reference
 */
export function useFunctionSelector<
  T extends (...args: any[]) => any,
  D extends any[]
>(getFunction: () => T, deps: D): T {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => getFunction(), [getFunction, ...deps]);
}

/**
 * Hook that creates a selector for an entire state object that only updates when parts used in the selector change
 *
 * @param state The full state object
 * @param selector Function to select specific parts of state
 * @returns Selected state, memoized to prevent unnecessary re-renders
 */
export function useStateSelector<S, T>(state: S, selector: (state: S) => T): T {
  return useMemo(() => selector(state), [state, selector]);
}

/**
 * Hook that creates a shallow-equal selector for objects that re-renders only when
 * the selected properties change
 *
 * @param obj The object to select from
 * @param keys Array of keys to include in the selection
 * @returns New object with only the selected properties, memoized
 */
export function useShallowSelector<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const deps = keys.map((key) => obj[key]);

  return useMemo(() => {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
      result[key] = obj[key];
    });
    return result;
  }, [obj, keys]);
}

/**
 * Hook that creates a boolean selector that indicates if any/all conditions are true
 *
 * @param conditions Array of boolean values to check
 * @param mode 'any' to check if any condition is true, 'all' to check if all are true
 * @returns Boolean indicating if the conditions are met
 */
export function useBooleanSelector(
  conditions: boolean[],
  mode: "any" | "all" = "any"
): boolean {
  return useMemo(() => {
    return mode === "any"
      ? conditions.some((condition) => condition)
      : conditions.every((condition) => condition);
  }, [conditions, mode]);
}
