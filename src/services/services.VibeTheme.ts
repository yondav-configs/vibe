import * as themes from '../themeColors';
import { Themes, type Theme, type ThemeConfig } from '../types';
import { setOpacity } from '../utils';

export class VibeTheme {
  public theme: Theme;

  constructor(name: Themes) {
    this.theme = this.buildTheme(name);
  }

  private getThemeConfig(name: Themes) {
    switch (name) {
      case Themes.HAWKES_DARK:
        return themes.hawkes.dark;
      case Themes.HAWKES_LIGHT:
        return themes.hawkes.light;
      case Themes.ICEBERG_DARK:
        return themes.iceberg.dark;
      case Themes.ICEBERG_LIGHT:
        return themes.iceberg.light;
      case Themes.MISCHKA_DARK:
        return themes.mischka.dark;
      case Themes.MISCHKA_LIGHT:
        return themes.mischka.light;
      case Themes.MOODY_BLUE_DARK:
        return themes.moodyBlue.dark;
      case Themes.MOODY_BLUE_LIGHT:
        return themes.moodyBlue.light;
      case Themes.NEUTRAL_DARK:
        return themes.neutral.dark;
      case Themes.NEUTRAL_LIGHT:
        return themes.neutral.light;
      case Themes.OUT_WEST_DARK:
        return themes.outWest.dark;
      case Themes.OUT_WEST_LIGHT:
        return themes.outWest.light;
      case Themes.PRIM_DARK:
        return themes.prim.dark;
      case Themes.PRIM_LIGHT:
        return themes.prim.light;
      case Themes.SOFT_DARK:
        return themes.soft.dark;
      case Themes.SOFT_LIGHT:
        return themes.soft.light;
      default:
        return themes.neutral.dark;
    }
  }

  private setColors(config: ThemeConfig): Theme['colors'] {
    const { bg, fg, neutral, primary, secondary, accent, ansii, highlight } = config;
    return {
      // activityBar
      'activityBar.activeBackground': neutral[900],
      'activityBar.activeBorder': primary[400],
      'activityBar.activeFocusBorder': primary[300],
      'activityBar.background': bg,
      'activityBar.border': neutral[900],
      'activityBar.foreground': neutral[100],
      'activityBar.inactiveForeground': neutral[700],
      'activityBarBadge.background': primary[400],
      'activityBarBadge.foreground': ansii.white.bright,

      // badge
      'badge.background': primary[400],
      'badge.foreground': fg,

      // button
      'button.background': primary[400],
      'button.foreground': ansii.white.bright,
      'button.hoverBackground': primary[500],
      'button.secondaryBackground': neutral[300],
      'button.secondaryForeground': bg,
      'button.secondaryHoverBackground': neutral[200],

      // checkbox
      'checkbox.background': neutral[900],
      'checkbox.border': neutral[500],
      'checkbox.foreground': fg,

      // debug
      'debugConsole.errorForeground': ansii.red.bright,
      'debugConsole.infoForeground': ansii.blue.bright,
      'debugConsole.sourceForeground': fg,
      'debugConsole.warningForeground': ansii.yellow.bright,
      'debugToolBar.background': bg,

      // diffEditor
      'diffEditor.insertedLineBackground': setOpacity(ansii.green.bright)(0.3),
      'diffEditor.insertedTextBackground': setOpacity(ansii.white.default)(0.4),
      'diffEditor.removedLineBackground': setOpacity(ansii.red.default)(0.3),
      'diffEditor.removedTextBackground': setOpacity(ansii.white.default)(0.4),

      // dropdown
      'dropdown.background': neutral[900],
      'dropdown.border': neutral[500],
      'dropdown.foreground': fg,
      'dropdown.listBackground': bg,

      // editor
      'editor.background': bg,
      'editor.foreground': fg,
      'editor.findMatchHighlightBackground': setOpacity(highlight.primary[100])(0.2),
      'editor.findMatchHighlightBorder': highlight.primary[100],
      'editor.inactiveSelectionBackground': setOpacity(highlight.secondary[200])(0.2),
      'editor.lineHighlightBackground': neutral[900],
      'editor.selectionBackground': neutral[700],
      'editorBracketHighlight.foreground1': ansii.cyan.bright,
      'editorBracketHighlight.foreground2': ansii.magenta.bright,
      'editorBracketHighlight.foreground3': ansii.yellow.bright,
      'editorBracketHighlight.foreground4': ansii.green.bright,
      'editorBracketHighlight.foreground5': ansii.orange.bright,
      'editorBracketHighlight.foreground6': ansii.blue.bright,
      'editorBracketMatch.background': setOpacity(highlight.primary[100])(0.2),
      'editorBracketMatch.border': highlight.primary[100],
      'editorCursor.foreground': accent[200],
      'editorError.foreground': ansii.red.bright,
      'editorGroup.border': neutral[900],
      'editorGroup.dropBackground': setOpacity(primary[300])(0.5),
      'editorGroup.dropIntoPromptBackground': bg,
      'editorGroup.dropIntoPromptForeground': neutral[200],
      'editorGroupHeader.tabsBackground': bg,
      'editorGutter.addedBackground': ansii.green.bright,
      'editorGutter.background': bg,
      'editorGutter.deletedBackground': ansii.red.bright,
      'editorGutter.foldingControlForeground': secondary[200],
      'editorGutter.modifiedBackground': ansii.orange.bright,
      'editorIndentGuide.activeBackground1': primary[300],
      'editorIndentGuide.activeBackground2': secondary[200],
      'editorIndentGuide.activeBackground3': accent[200],
      'editorIndentGuide.activeBackground4': primary[400],
      'editorIndentGuide.activeBackground5': secondary[300],
      'editorIndentGuide.activeBackground6': accent[300],
      'editorIndentGuide.background1': setOpacity(primary[300])(0.3),
      'editorIndentGuide.background2': setOpacity(secondary[200])(0.3),
      'editorIndentGuide.background3': setOpacity(accent[200])(0.3),
      'editorIndentGuide.background4': setOpacity(primary[400])(0.3),
      'editorIndentGuide.background5': setOpacity(secondary[300])(0.3),
      'editorIndentGuide.background6': setOpacity(accent[300])(0.3),
      'editorInlayHint.background': bg,
      'editorInlayHint.foreground': fg,
      'editorInlayHint.typeBackground': neutral[700],
      'editorInlayHint.typeForeground': fg,
      'editorLightBulb.foreground': ansii.yellow.default,
      'editorLightBulbAutoFix.foreground': ansii.green.default,
      'editorLineNumber.activeForeground': primary[400],
      'editorLineNumber.foreground': neutral[600],
      'editorOverviewRuler.background': bg,
      'editorOverviewRuler.border': primary[300],
      'editorWarning.foreground': ansii.yellow.bright,
      'editorWidget.background': bg,

      // gitDecoration
      'gitDecoration.addedResourceForeground': ansii.green.default,
      'gitDecoration.conflictingResourceForeground': ansii.orange.default,
      'gitDecoration.deletedResourceForeground': ansii.red.bright,
      'gitDecoration.ignoredResourceForeground': ansii.gray,
      'gitDecoration.modifiedResourceForeground': ansii.magenta.default,
      'gitDecoration.submoduleResourceForeground': ansii.yellow.default,
      'gitDecoration.untrackedResourceForeground': ansii.cyan.default,

      // input
      'input.background': neutral[900],
      'input.border': neutral[500],
      'input.foreground': fg,
      'input.placeholderForeground': neutral[500],

      // list
      'list.activeSelectionBackground': neutral[900],
      'list.activeSelectionForeground': fg,
      'list.hoverForeground': neutral[200],
      'list.inactiveSelectionForeground': neutral[200],
      'list.hoverBackground': bg,
      'list.inactiveSelectionBackground': setOpacity(highlight.secondary[200])(0.2),

      // minimap
      'minimap.errorHighlight': ansii.red.bright,
      'minimap.findMatchHighlight': highlight.secondary[500],
      'minimap.warningHighlight': ansii.yellow.bright,
      'minimapSlider.background': setOpacity(highlight.primary[700])(0.3),

      // panel
      'panel.border': secondary[200],
      'peekViewEditor.background': bg,

      // peekView
      'peekViewEditor.matchHighlightBackground': setOpacity(highlight.primary[100])(0.2),
      'peekViewEditor.matchHighlightBorder': highlight.primary[100],
      'peekViewResult.background': neutral[900],

      // scrollbar
      'scrollbar.shadow': neutral[900],
      'scrollbarSlider.activeBackground': neutral[200],
      'scrollbarSlider.background': neutral[700],
      'scrollbarSlider.hoverBackground': neutral[200],

      // settings
      'settings.focusedRowBackground': setOpacity(neutral[900])(0.5),
      'settings.headerForeground': primary[400],
      'settings.focusedRowBorder': primary[400],
      'settings.headerBorder': primary[400],
      'settings.modifiedItemIndicator': primary[300],
      'settings.rowHoverBackground': setOpacity(neutral[900])(0.2),

      // sideBar
      'sideBar.background': bg,
      'sideBar.border': neutral[900],
      'sideBar.dropBackground': setOpacity(primary[300])(0.5),
      'sideBar.foreground': neutral[300],
      'sideBarSectionHeader.background': bg,
      'sideBarSectionHeader.border': primary[300],
      'sideBarSectionHeader.foreground': primary[400],
      'sideBarTitle.foreground': accent[200],

      // statusBar
      'statusBar.background': primary[400],
      'statusBar.debuggingBackground': accent[200],
      'statusBar.debuggingForeground': bg,
      'statusBar.foreground': ansii.white.bright,

      // tabs
      'tab.inactiveBackground': bg,
      'tab.activeBorderTop': primary[400],
      'tab.activeBackground': setOpacity(neutral[900])(0.5),
      'tab.activeForeground': fg,
      'tab.hoverBackground': setOpacity(neutral[900])(0.2),

      // terminal
      'terminal.ansiBlack': ansii.black.default,
      'terminal.ansiBrightBlack': ansii.black.bright,
      'terminal.ansiBlue': ansii.blue.default,
      'terminal.ansiBrightBlue': ansii.blue.bright,
      'terminal.ansiCyan': ansii.cyan.default,
      'terminal.ansiBrightCyan': ansii.cyan.bright,
      'terminal.ansiGreen': ansii.green.default,
      'terminal.ansiBrightGreen': ansii.green.bright,
      'terminal.ansiMagenta': ansii.magenta.default,
      'terminal.ansiBrightMagenta': ansii.magenta.bright,
      'terminal.ansiRed': ansii.red.default,
      'terminal.ansiBrightRed': ansii.red.bright,
      'terminal.ansiWhite': ansii.white.default,
      'terminal.ansiBrightWhite': ansii.white.bright,
      'terminal.ansiYellow': ansii.yellow.default,
      'terminal.ansiBrightYellow': ansii.yellow.bright,
      'terminal.background': bg,
      'terminal.border': neutral[900],
      'terminal.dropBackground': setOpacity(primary[300])(0.5),
      'terminal.findMatchBackground': setOpacity(highlight.primary[100])(0.2),
      'terminal.findMatchBorder': highlight.primary[200],
      'terminal.findMatchHighlightBackground': setOpacity(highlight.primary[100])(0.2),
      'terminal.findMatchHighlightBorder': highlight.primary[200],
      'terminal.foreground': fg,
      'terminal.inactiveSelectionBackground': setOpacity(highlight.secondary[200])(0.2),
      'terminal.selectionBackground': neutral[700],
      'terminal.tab.activeBorder': primary[400],
      'terminalCursor.background': primary[200],
      'terminalCursor.foreground': ansii.white.default,
      'terminalOverviewRuler.cursorForeground': ansii.black.bright,
      'terminalOverviewRuler.findMatchForeground': ansii.white.default,

      // text
      'textBlockQuote.background': neutral[900],
      'textCodeBlock.background': neutral[900],
      'textLink.activeForeground': primary[300],
      'textLink.foreground': primary[400],

      // titleBar
      'titleBar.activeBackground': bg,
      'titleBar.activeForeground': fg,

      // tree
      'tree.inactiveIndentGuidesStroke': setOpacity(primary[400])(0.3),
      'tree.indentGuidesStroke': primary[300],

      // walkthrough
      'walkThrough.embeddedEditorBackground': bg,

      // breadcrumbs
      'breadcrumb.activeSelectionForeground': primary[400],
      'breadcrumb.background': setOpacity(neutral[900])(0.5),
      'breadcrumb.focusForeground': primary[300],
      'breadcrumb.foreground': fg,
      'breadcrumbPicker.background': bg,

      // charts
      'charts.blue': ansii.blue.bright,
      'charts.foreground': ansii.gray,
      'charts.green': ansii.green.bright,
      'charts.lines': ansii.white.default,
      'charts.orange': ansii.orange.default,
      'charts.purple': ansii.magenta.default,
      'charts.red': ansii.red.default,
      'charts.yellow': ansii.yellow.default,

      // command center
      'commandCenter.activeBackground': setOpacity(neutral[900])(0.5),
      'commandCenter.background': bg,
      'commandCenter.foreground': fg,

      // icon
      'icon.foreground': accent[200],

      // key binding
      'keybindingLabel.background': setOpacity(neutral[900])(0.5),
      'keybindingTable.headerBackground': bg,
      'keybindingTable.rowsBackground': neutral[900],

      // symbol icons
      'symbolIcon.arrayForeground': neutral[200],
      'symbolIcon.booleanForeground': ansii.red.default,
      'symbolIcon.classForeground': ansii.blue.bright,
      'symbolIcon.colorForeground': ansii.yellow.default,
      'symbolIcon.constantForeground': fg,
      'symbolIcon.constructorForeground': ansii.red.bright,
      'symbolIcon.enumeratorForeground': ansii.green.bright,
      'symbolIcon.enumeratorMemberForeground': ansii.magenta.default,
      'symbolIcon.eventForeground': ansii.magenta.bright,
      'symbolIcon.fieldForeground': neutral[200],
      'symbolIcon.fileForeground': neutral[200],
      'symbolIcon.folderForeground': neutral[200],
      'symbolIcon.functionForeground': ansii.blue.default,
      'symbolIcon.interfaceForeground': ansii.green.bright,
      'symbolIcon.keyForeground': neutral[200],
      'symbolIcon.keywordForeground': ansii.cyan.bright,
      'symbolIcon.methodForeground': ansii.blue.default,
      'symbolIcon.moduleForeground': ansii.green.bright,
      'symbolIcon.namespaceForeground': ansii.orange.bright,
      'symbolIcon.nullForeground': ansii.red.default,
      'symbolIcon.numberForeground': ansii.red.bright,
      'symbolIcon.objectForeground': neutral[200],
      'symbolIcon.operatorForeground': ansii.cyan.bright,
      'symbolIcon.packageForeground': ansii.yellow.bright,
      'symbolIcon.propertyForeground': ansii.magenta.default,
      'symbolIcon.referenceForeground': neutral[200],
      'symbolIcon.snippetForeground': neutral[200],
      'symbolIcon.stringForeground': ansii.orange.default,
      'symbolIcon.structForeground': ansii.red.default,
      'symbolIcon.textForeground': neutral[200],
      'symbolIcon.typeParameterForeground': ansii.green.bright,
      'symbolIcon.unitForeground': neutral[200],
      'symbolIcon.variableForeground': neutral[100],
    };
  }

  private setSemanticTokenColors(config: ThemeConfig): Theme['semanticTokenColors'] {
    const { ansii, neutral } = config;
    return {
      // https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#semantic-token-scope-map
      class: { foreground: ansii.blue.bright },
      enum: { foreground: ansii.green.bright },
      enumMember: { foreground: ansii.magenta.default },
      event: { foreground: ansii.magenta.bright },
      function: { foreground: ansii.blue.default },
      interface: { foreground: ansii.green.bright },
      namespace: { foreground: ansii.orange.bright },
      parameter: { foreground: neutral[200] },
      struct: { foreground: ansii.red.default },
      type: { foreground: ansii.green.bright },
      variable: { foreground: neutral[100] },
      property: { foreground: neutral[100] },
    };
  }

  private setTokenColors(config: ThemeConfig): Theme['tokenColors'] {
    const { ansii, primary } = config;

    return [
      // comments
      {
        name: 'Comment',
        scope: ['comment', 'punctuation.definition.comment'],
        settings: { foreground: ansii.gray, fontStyle: 'italic' },
      },

      // constants
      {
        name: 'constants.numeric, constants.language',
        scope: ['constant.numeric', 'constant.language'],
        settings: { foreground: ansii.red.default },
      },
      {
        name: 'constants.character',
        scope: ['constant.character'],
        settings: { foreground: ansii.green.default },
      },
      {
        name: 'constants.other.color',
        scope: ['constant.other.color'],
        settings: { foreground: ansii.yellow.default },
      },
      {
        name: 'constants.other',
        scope: ['constant.other', 'constant'],
        settings: { foreground: ansii.cyan.bright },
      },
      {
        name: 'String constant',
        scope: 'string constant',
        settings: { foreground: ansii.orange.default },
      },

      // // entities
      {
        name: 'entity.other',
        scope: [
          'entity.other',
          'entity.other.namespace-prefix',
          'entity.other.keyframe-offset.percentage',
          'entity.other.keyframe-offset',
        ],
        settings: { foreground: ansii.yellow.default },
      },
      {
        name: 'entity.other.inherited-class',
        scope: [
          'entity.other.inherited-class.prelude',
          'entity.other.inherited-class.module.third',
          'entity.other.inherited-class.module.second',
          'entity.other.inherited-class.module.first',
          'entity.other.inherited-class.module',
          'entity.other.inherited-class',
        ],
        settings: { foreground: primary[100] },
      },
      {
        name: 'entity.other.attribute-name',
        scope: [
          'entity.other.attribute-name.style.html',
          'entity.other.attribute-name.pseudo-element',
          'entity.other.attribute-name.pseudo-class',
          'entity.other.attribute-name.pragma.preprocessor',
          'entity.other.attribute-name.pragma',
          'entity.other.attribute-name.id.html',
          'entity.other.attribute-name.id',
          'entity.other.attribute-name.html',
          'entity.other.attribute-name',
        ],
        settings: { foreground: ansii.yellow.bright, fontStyle: 'bold italic' },
      },
      {
        name: 'entity.other.attribute-name.class',
        scope: [
          'entity.other.attribute-name.class.html',
          'entity.other.attribute-name.class',
        ],
        settings: { foreground: ansii.blue.bright, fontStyle: 'bold italic' },
      },
      {
        name: 'entity.name',
        scope: [
          'entity.name.package',
          'entity.name.import',
          'entity.name.class.forward-decl',
          'entity.name.struct',
          'entity.name.union',
          'entity.name.trait',
          'entity.name.impl',
          'entity.name.type',
          'entity.name.goto-label',
          'entity.name.namespace',
          'entity.name.constant',
          'entity.name.entity.other.html',
          'entity.name.entity.other',
          'entity.name.entity',
          'entity.name.label',
          'entity.name.section',
          'entity.name',
        ],
        settings: { foreground: ansii.orange.bright },
      },
      {
        name: 'entity.name.type',
        scope: [
          'entity.name.type.promoted',
          'entity.name.type.module',
          'entity.name.type.inherited',
          'entity.name.type.enum',
          'entity.name.type.namespace',
          'entity.name.type.class.record.definition',
          'entity.name.type.class.record',
          'entity.name.type.class.module.definition',
          'entity.name.type.class.module',
          'entity.name.type.class.behaviour.definition',
          'entity.name.type.class.behaviour',
          'entity.name.type.class',
          'entity.name.type.trait',
          'entity.name.type.interface',
          'entity.name.type.class',
          'entity.name.type.struct',
          'entity.name.type.instance',
          'entity.name.type',
          'entity.name.enum',
          'entity.name.interface',
          'entity.name.class',
        ],
        settings: { foreground: ansii.green.bright },
      },
      {
        name: 'entity.name.function',
        scope: [
          'entity.name.function.scope',
          'entity.name.function.preprocessor',
          'entity.name.function.operator',
          'entity.name.function.namespace-prefix',
          'entity.name.function.macro',
          'entity.name.function.macro.definition',
          'entity.name.function.guard',
          'entity.name.function.definition',
          'entity.name.function.constructor',
          'entity.name.function.destructor',
          'entity.name.function',
        ],
        settings: { foreground: ansii.blue.default },
      },
      {
        name: 'entity.name.tag',
        scope: [
          'entity.name.tag.wildcard',
          'entity.name.tag.style.html',
          'entity.name.tag.style',
          'entity.name.tag.script.html',
          'entity.name.tag.script',
          'entity.name.tag.other.html',
          'entity.name.tag.other',
          'entity.name.tag.inline',
          'entity.name.tag.block',
          'entity.name.tag.custom',
          'entity.name.tag',
        ],
        settings: { foreground: ansii.magenta.default },
      },
      {
        name: 'entity',
        scope: ['entity.alias.import', 'entity.alias', 'entity'],
        settings: { foreground: primary[100] },
      },

      // identifier
      {
        name: 'identifier',
        scope: ['identifier'],
        settings: { foreground: primary[100] },
      },

      // invalid
      {
        name: 'invalid',
        scope: ['invalid'],
        settings: {
          foreground: ansii.red.default,
        },
      },

      // json
      {
        name: 'JSON Key - Level 0/5',
        scope: [
          'source.json meta.structure.dictionary.json support.type.property-name.json',
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: ansii.yellow.default,
        },
      },
      {
        name: 'JSON Key - Level 1/6',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: ansii.magenta.default,
        },
      },
      {
        name: 'JSON Key - Level 2/7',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: ansii.red.default,
        },
      },
      {
        name: 'JSON Key - Level 3/8',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: ansii.blue.default,
        },
      },
      {
        name: 'JSON Key - Level 4',
        scope: [
          'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
        ],
        settings: {
          foreground: ansii.green.default,
        },
      },

      // keyword
      {
        name: 'keyword',
        scope: [
          'keyword.module',
          'keyword.map',
          'keyword.interface',
          'keyword.import',
          'keyword.function',
          'keyword.expressions-and-types',
          'keyword.var',
          'keyword.type',
          'keyword.struct',
          'keyword.reserved',
          'keyword.package',
          'keyword.const',
          'keyword.channel',
          'keyword.bracket',
          'keyword.operator.wildcard',
          'keyword.operator.update',
          'keyword.operator.unpacking.arguments',
          'keyword.operator.unpacking',
          'keyword.operator.transposed-variable',
          'keyword.operator.transposed-parens',
          'keyword.operator.transposed-matrix',
          'keyword.operator.transposed-func',
          'keyword.operator.textual',
          'keyword.operator.symbolic',
          'keyword.operator.sizeof',
          'keyword.operator.shift',
          'keyword.operator.shape',
          'keyword.operator.relation',
          'keyword.operator.record.end',
          'keyword.operator.record.begin',
          'keyword.operator.record',
          'keyword.operator.promoted',
          'keyword.operator.pattern',
          'keyword.operator.other',
          'keyword.operator.macro',
          'keyword.operator.isa',
          'keyword.operator.interpolation',
          'keyword.operator.instanceof',
          'keyword.operator.increment-decrement',
          'keyword.operator.gradient',
          'keyword.operator.function.infix',
          'keyword.operator.function',
          'keyword.operator.function-annotation',
          'keyword.operator.dots',
          'keyword.operator.combinator',
          'keyword.operator.channel',
          'keyword.operator.cast',
          'keyword.operator.boolean',
          'keyword.operator.assert.expression-separator',
          'keyword.operator.assert',
          'keyword.operator.arrow',
          'keyword.operator.address',
          'keyword.declaration',
          'keyword.operator',
          'keyword.controls',
          'keyword.other',
          'keyword',
        ],
        settings: {
          foreground: ansii.cyan.bright,
        },
      },
      {
        name: 'keyword.control',
        scope: ['keyword.control'],
        settings: {
          foreground: ansii.green.default,
          fontStyle: 'italic bold',
        },
      },
      {
        name: 'keyword.other',
        scope: [
          'keyword.other.preprocessor',
          'keyword.other.package',
          'keyword.other.important',
          'keyword.other.import',
          'keyword.other.forall',
          'keyword.other.double-colon',
          'keyword.other.documentation.doc',
          'keyword.other.documentation',
          'keyword.other.data',
          'keyword.other.big-arrow',
          'keyword.other.arrow',
          'keyword.other.namespace',
          'keyword.other.class',
          'keyword.other.interface',
          'keyword.other.type',
          'keyword.other',
        ],
        settings: {
          foreground: ansii.green.bright,
          fontStyle: 'italic bold',
        },
      },
      {
        name: 'keyword.other.special-method',
        scope: ['keyword.other.special-method'],
        settings: {
          foreground: ansii.blue.default,
          fontStyle: 'italic bold',
        },
      },

      // markup
      {
        name: 'markup',
        scope: [
          'markup.other',
          'markup.list',
          'markup.raw',
          'markup.other',
          'markup.quote',
          'markup',
        ],
        settings: {
          foreground: primary[100],
        },
      },
      {
        name: 'markup.bold',
        scope: ['markup.bold'],
        settings: {
          foreground: ansii.red.default,
          fontStyle: 'bold',
        },
      },
      {
        name: 'markup.italic',
        scope: ['markup.italic'],
        settings: {
          foreground: ansii.red.default,
          fontStyle: 'italic',
        },
      },
      {
        name: 'markup.deleted',
        scope: ['markup.deleted'],
        settings: {
          foreground: ansii.red.default,
        },
      },
      {
        name: 'markup.underline',
        scope: ['markup.underline'],
        settings: {
          foreground: ansii.red.default,
          fontStyle: 'underline',
        },
      },

      // meta
      {
        name: 'meta',
        scope: ['meta'],
        settings: {
          foreground: primary[100],
        },
      },
      {
        name: 'meta.function-call',
        scope: ['meta.function-call'],
        settings: {
          foreground: ansii.blue.default,
        },
      },
      {
        name: 'meta.tag.sgml',
        scope: ['meta.tag.sgml.doctype', 'meta.tag.sgml'],
        settings: {
          foreground: ansii.cyan.bright,
        },
      },

      // punctuation
      {
        name: 'punctuation',
        scope: [
          'punctuation.bracket',
          'punctuation.whitespace',
          'punctuation.vararg-ellipses',
          'punctuation.terminator',
          'punctuation.delimiter',
          'punctuation.separator',
          'punctuation.accessor',
          'punctuation.section',
          'punctuation.other.period',
          'punctuation.other.comma',
          'punctuation.other.colon',
          'punctuation.definition',
          'punctuation.catch.separator',
          'punctuation.unmatched',
          'punctuation',
        ],
        settings: {
          foreground: ansii.cyan.bright,
        },
      },

      // source
      {
        name: 'source',
        scope: ['source.language-suffix.embedded', 'source.language-suffix', 'source'],
        settings: {
          foreground: primary[100],
        },
      },
      {
        name: 'sourceembedded',
        scope: ['sourceembedded', 'sourceembedded.source'],
        settings: { foreground: primary[100] },
      },
      {
        name: 'sourcestyle',
        scope: ['sourcestyle'],
        settings: { foreground: primary[100] },
      },

      // storage
      {
        name: 'storage.modifier, storage.type',
        scope: ['storage.modifier', 'storage.type'],
        settings: {
          foreground: ansii.red.default,
          fontStyle: 'bold',
        },
      },
      {
        name: 'storage',
        scope: ['storage'],
        settings: {
          foreground: primary[100],
        },
      },

      // string
      {
        name: 'string',
        scope: ['string'],
        settings: {
          foreground: primary[200],
        },
      },
      {
        name: 'string.regexp',
        scope: ['string.regexp'],
        settings: { foreground: primary[200] },
      },

      // support
      {
        name: 'support',
        scope: [
          'support.constant',
          'support.operator',
          'support.module',
          'support.tag',
          'support.variable',
          'support.struct',
          'support.other',
          'support',
        ],
        settings: { foreground: primary[100] },
      },
      {
        name: 'support.function',
        scope: ['support.function'],
        settings: { foreground: ansii.blue.default },
      },
      {
        name: 'support.type',
        scope: ['support.type'],
        settings: { foreground: ansii.green.bright },
      },
      {
        name: 'support.class',
        scope: ['support.class.prelude', 'support.class'],
        settings: { foreground: ansii.red.bright },
      },
      {
        name: 'text',
        scope: [
          'text.html.embedded',
          'text.html.basic',
          'text.html.markdown',
          'text.html',
          'text.xml',
          'text.plain',
          'text.embedded.html',
          'text.embedded',
          'text',
        ],
        settings: { foreground: primary[100] },
      },

      // unused
      {
        name: 'unused',
        scope: ['unused.comment', 'unused'],
        settings: { foreground: primary[300] },
      },

      // variable
      {
        name: 'variable',
        scope: [
          'variable.annotation',
          'variable.other',
          'variable.font-feature',
          'variable.parameter.function',
          'variable.parameter.url',
          'variable.parameter.style-name',
          'variable.parameter.preprocessor',
          'variable.parameter.misc',
          'variable.parameter.keyframe-list',
          'variable.parameter.document-rule',
          'variable.parameter',
        ],
        settings: { foreground: primary[100] },
      },
      {
        name: 'variable.function',
        scope: ['variable.function'],
        settings: { foreground: ansii.blue.default },
      },
      {
        name: 'variable.language',
        scope: ['variable.language'],
        settings: { foreground: ansii.magenta.bright },
      },
      {
        name: 'variable.parameter',
        scope: ['variable.parameter'],
        settings: { foreground: primary[100] },
      },
      {
        name: 'variable.argument',
        scope: ['variable.argument', 'variable'],
        settings: { foreground: primary[100] },
      },

      // wildcard
      {
        name: 'wildcard',
        scope: ['wildcard.comment', 'wildcard'],
        settings: { foreground: primary[100] },
      },
    ];
  }

  private buildTheme(name: Themes): Theme {
    const config = this.getThemeConfig(name);

    return {
      $schema: 'vscode://schemas/color-theme',
      colors: this.setColors(config),
      name,
      type: name.toLowerCase().includes('light') ? 'light' : 'dark',
      semanticHighlighting: true,
      semanticTokenColors: this.setSemanticTokenColors(config),
      tokenColors: this.setTokenColors(config),
    };
  }
}
