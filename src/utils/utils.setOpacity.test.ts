import { setOpacity } from './utils.setOpacity';

describe('setOpacity', () => {
  it('should set the opacity of a color', () => {
    // Define a base color (e.g., red) and its expected opaque and semi-transparent versions.
    const baseColor = '#FF0000';
    const opaqueRed = '#FF0000';
    const semiTransparentRed = '#FF000080'; // Update to include alpha channel

    // Create functions to set opacity for the base color.
    const setOpacity100 = setOpacity(baseColor)(1); // opaque
    const setOpacity50 = setOpacity(baseColor)(0.5); // semi-transparent

    // Assert that the returned colors match the expected values (converted to lowercase).
    expect(setOpacity100.toLowerCase()).toBe(opaqueRed.toLowerCase());
    expect(setOpacity50.toLowerCase()).toBe(semiTransparentRed.toLowerCase());
  });
});
