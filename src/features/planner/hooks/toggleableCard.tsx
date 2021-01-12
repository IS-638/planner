/**
 * A hook that extracts toggleable card functionality.
 *
 * This returns card props to control elevation and styles based on current
 * enabled state.
 *
 * @param enabled True if the card allows drag and drop functionality
 */
export function useToggleableCard(enabled: boolean) {
  const elevation = enabled ? 1 : 0;
  const cardProps: { [key: string]: 'elevation' | 'outlined' } = {
    variant: enabled ? 'elevation' : 'outlined',
  };
  return {
    elevation,
    cardProps,
  };
}
