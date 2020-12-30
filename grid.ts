import { computed, watch, reactive } from "vue";

export const grid = () => {
  const state = reactive({
    width: window.innerWidth,
    xs: true,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  });

  const getBreakpointCSSValue = function (name: string): number {
    const value = window
      .getComputedStyle(document.querySelector(":root") as Element)
      .getPropertyValue(`--${name}`);
    //remove px value
    const px = Number(value.slice(0, -2));
    return px;
  };

  const setBreakpointJSState = function (name: string): boolean {
    const px = getBreakpointCSSValue(name);
    return false;
  };

  watch(
    () => state.width,
    () => {
      state.sm = true;
      state.sm = true;
    }
  );
};
