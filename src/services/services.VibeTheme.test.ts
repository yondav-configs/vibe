import { Themes } from '../types';

import { VibeTheme } from './services.VibeTheme';

describe('VibeTheme', () => {
  test('should build theme for HAWKES_DARK', () => {
    const themeInstance = new VibeTheme(Themes.HAWKES_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.HAWKES_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for HAWKES_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.HAWKES_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.HAWKES_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for ICEBERG_DARK', () => {
    const themeInstance = new VibeTheme(Themes.ICEBERG_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.ICEBERG_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for ICEBERG_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.ICEBERG_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.ICEBERG_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for MISCHKA_DARK', () => {
    const themeInstance = new VibeTheme(Themes.MISCHKA_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.MISCHKA_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for MISCHKA_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.MISCHKA_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.MISCHKA_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for MOODY_BLUE_DARK', () => {
    const themeInstance = new VibeTheme(Themes.MOODY_BLUE_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.MOODY_BLUE_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for MOODY_BLUE_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.MOODY_BLUE_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.MOODY_BLUE_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for NEUTRAL_DARK', () => {
    const themeInstance = new VibeTheme(Themes.NEUTRAL_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.NEUTRAL_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for NEUTRAL_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.NEUTRAL_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.NEUTRAL_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for OUT_WEST_DARK', () => {
    const themeInstance = new VibeTheme(Themes.OUT_WEST_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.OUT_WEST_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for OUT_WEST_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.OUT_WEST_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.OUT_WEST_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for PRIM_DARK', () => {
    const themeInstance = new VibeTheme(Themes.PRIM_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.PRIM_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for PRIM_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.PRIM_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.PRIM_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for SOFT_DARK', () => {
    const themeInstance = new VibeTheme(Themes.SOFT_DARK);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.SOFT_DARK);
    expect(builtTheme.type).toBe('dark');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });

  test('should build theme for SOFT_LIGHT', () => {
    const themeInstance = new VibeTheme(Themes.SOFT_LIGHT);
    const builtTheme = themeInstance.theme;

    expect(builtTheme.name).toBe(Themes.SOFT_LIGHT);
    expect(builtTheme.type).toBe('light');
    expect(builtTheme.colors).toBeDefined();
    expect(builtTheme.semanticTokenColors).toBeDefined();
    expect(builtTheme.tokenColors).toBeDefined();
  });
});
