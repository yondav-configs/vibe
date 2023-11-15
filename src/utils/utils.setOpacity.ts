import chroma from 'chroma-js';

import type { Color } from '../types';

/**
 * Set the opacity of a color.
 *
 * @param {string} color - The input color in any valid CSS color format.
 * @returns {(opacity: number) => Color} - A function that takes an opacity value and returns the color with the specified opacity.
 */
export function setOpacity(color: string) {
  /**
   * Set the opacity of the color.
   *
   * @param {number} opacity - The opacity value (between 0 and 1).
   * @returns {Color} - The color with the specified opacity.
   */
  return (opacity: number): Color => {
    // Extract the RGB components of the input color.
    const [red, green, blue] = chroma(color).rgb();

    // Create a new color with the specified opacity.
    return chroma(`rgba(${red}, ${green}, ${blue}, ${opacity})`).hex() as Color;
  };
}
