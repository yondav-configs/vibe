import { existsSync } from 'fs';
import { mkdir, rmdir, writeFile } from 'fs/promises';
import { join } from 'path';

import { legacyTheme } from './legacy';
import { VibeTheme } from './services';
import { Themes } from './types';
import { toSlug } from './utils';

/**
 * Utility function to create and write Vibe theme files.
 *
 * This script creates a 'themes' directory, removes any existing content,
 * and writes individual theme files in JSON format based on predefined Vibe themes.
 *
 * @remarks
 * The generated theme files are stored in the 'themes' directory, following a specific naming convention.
 * The success or failure of each operation is logged to the console.
 */
const print = {
  // eslint-disable-next-line no-console
  success: (message: string) => console.log(`\x1b[32m\u2713 ${message}`),
  // eslint-disable-next-line no-console
  fail: (message: string) => console.log(`\x1b[31m\u26D4 ${message}`),
};

// Define Vibe themes.
const hawkesLight = new VibeTheme(Themes.HAWKES_LIGHT);
const hawkesDark = new VibeTheme(Themes.HAWKES_DARK);
const icebergLight = new VibeTheme(Themes.ICEBERG_LIGHT);
const icebergDark = new VibeTheme(Themes.ICEBERG_DARK);
const mischkaLight = new VibeTheme(Themes.MISCHKA_LIGHT);
const mischkaDark = new VibeTheme(Themes.MISCHKA_DARK);
const moodyBlueLight = new VibeTheme(Themes.MOODY_BLUE_LIGHT);
const moodyBlueDark = new VibeTheme(Themes.MOODY_BLUE_DARK);
const neutralDark = new VibeTheme(Themes.NEUTRAL_DARK);
const neutralLight = new VibeTheme(Themes.NEUTRAL_LIGHT);
const outWestDark = new VibeTheme(Themes.OUT_WEST_DARK);
const outWestLight = new VibeTheme(Themes.OUT_WEST_LIGHT);
const primDark = new VibeTheme(Themes.PRIM_DARK);
const primLight = new VibeTheme(Themes.PRIM_LIGHT);
const softDark = new VibeTheme(Themes.SOFT_DARK);
const softLight = new VibeTheme(Themes.SOFT_LIGHT);

// Define the themes directory path.
const themesDir = join(process.cwd(), 'themes');
const themesDirExists = existsSync(themesDir);

// Create and write theme files.
const createAndWriteThemes = async () => {
  try {
    // Create and write theme files.
    if (themesDirExists) await rmdir(themesDir, { recursive: true });

    // Write themesDir.
    await mkdir(themesDir);
    print.success('themes directory created');

    // Assemble path for legacy dark theme and writes JSON file.
    const legacyDarkPath = join(themesDir, `${toSlug(Themes.LEGACY_DARK)}.json`);
    await writeFile(legacyDarkPath, JSON.stringify(legacyTheme, null, 2));
    print.success(`${legacyDarkPath} written`);

    // Assemble path for hawkes dark theme and writes JSON file.
    const hawkesDarkPath = join(themesDir, `${toSlug(Themes.HAWKES_DARK)}.json`);
    await writeFile(hawkesDarkPath, JSON.stringify(hawkesDark.theme, null, 2));
    print.success(`${hawkesDarkPath} written`);

    // Assemble path for hawkes light theme and writes JSON file.
    const hawkesLightPath = join(themesDir, `${toSlug(Themes.HAWKES_LIGHT)}.json`);
    await writeFile(hawkesLightPath, JSON.stringify(hawkesLight.theme, null, 2));
    print.success(`${hawkesLightPath} written`);

    // Assemble path for iceberg dark theme and writes JSON file.
    const icebergDarkPath = join(themesDir, `${toSlug(Themes.ICEBERG_DARK)}.json`);
    await writeFile(icebergDarkPath, JSON.stringify(icebergDark.theme, null, 2));
    print.success(`${icebergDarkPath} written`);

    // Assemble path for iceberg light theme and writes JSON file.
    const icebergLightPath = join(themesDir, `${toSlug(Themes.ICEBERG_LIGHT)}.json`);
    await writeFile(icebergLightPath, JSON.stringify(icebergLight.theme, null, 2));
    print.success(`${icebergLightPath} written`);

    // Assemble path for mischka dark theme and writes JSON file.
    const mischkaDarkPath = join(themesDir, `${toSlug(Themes.MISCHKA_DARK)}.json`);
    await writeFile(mischkaDarkPath, JSON.stringify(mischkaDark.theme, null, 2));
    print.success(`${mischkaDarkPath} written`);

    // Assemble path for mischka light theme and writes JSON file.
    const mischkaLightPath = join(themesDir, `${toSlug(Themes.MISCHKA_LIGHT)}.json`);
    await writeFile(mischkaLightPath, JSON.stringify(mischkaLight.theme, null, 2));
    print.success(`${mischkaLightPath} written`);

    // Assemble path for moody blue dark theme and writes JSON file.
    const moodyBlueDarkPath = join(themesDir, `${toSlug(Themes.MOODY_BLUE_DARK)}.json`);
    await writeFile(moodyBlueDarkPath, JSON.stringify(moodyBlueDark.theme, null, 2));
    print.success(`${moodyBlueDarkPath} written`);

    // Assemble path for moody blue light theme and writes JSON file.
    const moodyBlueLightPath = join(themesDir, `${toSlug(Themes.MOODY_BLUE_LIGHT)}.json`);
    await writeFile(moodyBlueLightPath, JSON.stringify(moodyBlueLight.theme, null, 2));
    print.success(`${moodyBlueLightPath} written`);

    // Assemble path for neutral dark theme and writes JSON file.
    const neutralDarkPath = join(themesDir, `${toSlug(Themes.NEUTRAL_DARK)}.json`);
    await writeFile(neutralDarkPath, JSON.stringify(neutralDark.theme, null, 2));
    print.success(`${neutralDarkPath} written`);

    // Assemble path for neutral light theme and writes JSON file.
    const neutralLightPath = join(themesDir, `${toSlug(Themes.NEUTRAL_LIGHT)}.json`);
    await writeFile(neutralLightPath, JSON.stringify(neutralLight.theme, null, 2));
    print.success(`${neutralLightPath} written`);

    // Assemble path for out west dark theme and writes JSON file.
    const outWestDarkPath = join(themesDir, `${toSlug(Themes.OUT_WEST_DARK)}.json`);
    await writeFile(outWestDarkPath, JSON.stringify(outWestDark.theme, null, 2));
    print.success(`${outWestDarkPath} written`);

    // Assemble path for out west light theme and writes JSON file.
    const outWestLightPath = join(themesDir, `${toSlug(Themes.OUT_WEST_LIGHT)}.json`);
    await writeFile(outWestLightPath, JSON.stringify(outWestLight.theme, null, 2));
    print.success(`${outWestLightPath} written`);

    // Assemble path for prim dark theme and writes JSON file.
    const primDarkPath = join(themesDir, `${toSlug(Themes.PRIM_DARK)}.json`);
    await writeFile(primDarkPath, JSON.stringify(primDark.theme, null, 2));
    print.success(`${primDarkPath} written`);

    // Assemble path for prim light theme and writes JSON file.
    const primLightPath = join(themesDir, `${toSlug(Themes.PRIM_LIGHT)}.json`);
    await writeFile(primLightPath, JSON.stringify(primLight.theme, null, 2));
    print.success(`${primLightPath} written`);

    // Assemble path for soft dark theme and writes JSON file.
    const softDarkPath = join(themesDir, `${toSlug(Themes.SOFT_DARK)}.json`);
    await writeFile(softDarkPath, JSON.stringify(softDark.theme, null, 2));
    print.success(`${softDarkPath} written`);

    // Assemble path for soft light theme and writes JSON file.
    const softLightPath = join(themesDir, `${toSlug(Themes.SOFT_LIGHT)}.json`);
    await writeFile(softLightPath, JSON.stringify(softLight.theme, null, 2));
    print.success(`${softLightPath} written`);
  } catch (err) {
    // Log and propagate any errors during theme file creation.
    print.fail('unable to write theme files');
    throw new Error('unable to write theme files');
  }
};

// Run the function if this script is the main entry point
if (require.main === module) {
  createAndWriteThemes();
}
