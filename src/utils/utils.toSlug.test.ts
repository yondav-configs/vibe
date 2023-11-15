import { Themes } from '../types';

import { toSlug } from './utils.toSlug';

describe('toSlug', () => {
  it('should convert LEGACY title to expected file name', () => {
    const inputString = Themes.LEGACY_DARK;
    const expectedSlug = 'vibe-dark-legacy';

    const result = toSlug(inputString);
    expect(result).toBe(expectedSlug);
  });

  it('should convert HAWKES titles to expected file name', () => {
    const inputString = { dark: Themes.HAWKES_DARK, light: Themes.HAWKES_LIGHT };
    const expectedSlug = { dark: 'vibe-hawkes-dark', light: 'vibe-hawkes-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert ICEBERG titles to expected file name', () => {
    const inputString = { dark: Themes.ICEBERG_DARK, light: Themes.ICEBERG_LIGHT };
    const expectedSlug = { dark: 'vibe-iceberg-dark', light: 'vibe-iceberg-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert MISCHKA titles to expected file name', () => {
    const inputString = { dark: Themes.MISCHKA_DARK, light: Themes.MISCHKA_LIGHT };
    const expectedSlug = { dark: 'vibe-mischka-dark', light: 'vibe-mischka-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert MOODY_BLUE titles to expected file name', () => {
    const inputString = { dark: Themes.MOODY_BLUE_DARK, light: Themes.MOODY_BLUE_LIGHT };
    const expectedSlug = { dark: 'vibe-moody-blue-dark', light: 'vibe-moody-blue-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert NEUTRAL titles to expected file name', () => {
    const inputString = { dark: Themes.NEUTRAL_DARK, light: Themes.NEUTRAL_LIGHT };
    const expectedSlug = { dark: 'vibe-neutral-dark', light: 'vibe-neutral-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert OUT_WEST titles to expected file name', () => {
    const inputString = { dark: Themes.OUT_WEST_DARK, light: Themes.OUT_WEST_LIGHT };
    const expectedSlug = { dark: 'vibe-out-west-dark', light: 'vibe-out-west-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert PRIM titles to expected file name', () => {
    const inputString = { dark: Themes.PRIM_DARK, light: Themes.PRIM_LIGHT };
    const expectedSlug = { dark: 'vibe-prim-dark', light: 'vibe-prim-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });

  it('should convert SOFT titles to expected file name', () => {
    const inputString = { dark: Themes.SOFT_DARK, light: Themes.SOFT_LIGHT };
    const expectedSlug = { dark: 'vibe-soft-dark', light: 'vibe-soft-light' };

    const result = { dark: toSlug(inputString.dark), light: toSlug(inputString.light) };
    expect(result.dark).toBe(expectedSlug.dark);
    expect(result.light).toBe(expectedSlug.light);
  });
});
