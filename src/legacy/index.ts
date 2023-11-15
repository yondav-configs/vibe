import { Themes } from '../types';

export const legacyTheme = {
  name: Themes.LEGACY_DARK,
  colors: {
    'terminal.background': '#161618',
    'terminal.foreground': '#f1ebf3',
    'terminal.ansiBlack': '#222',
    'terminal.ansiBrightBlack': '#333',
    'terminal.ansiBrightWhite': '#ffffff',
    'terminal.ansiWhite': '#fafafa',
    'terminal.ansiRed': '#ff8d8d',
    'terminal.ansiBrightRed': '#ff4646',
    'terminal.ansiBlue': '#729fcf',
    'terminal.ansiBrightBlue': '#49b8fd',
    'terminal.ansiCyan': '#55dbe0',
    'terminal.ansiBrightCyan': '#1cf3fb',
    'terminal.ansiGreen': '#89df95',
    'terminal.ansiBrightGreen': '#55ed6a',
    'terminal.ansiMagenta': '#b37ebc',
    'terminal.ansiBrightMagenta': '#d87de4',
    'terminal.ansiYellow': '#fce789',
    'terminal.ansiBrightYellow': '#ffe055',
    'terminalCursor.background': '#333',
    'terminalCursor.foreground': '#fafafa',
    'editor.background': '#161618',
    'editor.foreground': '#f1ebf3',
    'editor.selectionBackground': '#5b5f60d0',
    'editor.selectionHighlightBackground': '#5b5f60d0',
    'editor.findMatchHighlightBackground': '#5b5f60d0',
    'editor.hoverHighlightBackground': '#5b5f60d0',
    'editorCursor.foreground': '#f1ebf3',
    'editorLineNumber.foreground': '#786d7c',
    'editorLineNumber.activeForeground': '#dec0e9',
    'editorIndentGuide.background': '#5a535d',
    'editorIndentGuide.activeBackground': '#dec0e9',
    'editorLightBulb.foreground': '#ffe055',
    'editorLightBulbAutoFix.foreground': '#55ed6a',
    'editorOverviewRuler.background': '#2a3044',
    'editorGroupHeader.tabsBackground': '#0b0b12',
    'titleBar.activeBackground': '#101012',
    'titleBar.inactiveBackground': '#0a0a0c',
    'tab.inactiveBackground': '#101115',
    'tab.activeBackground': '#191d2c',
    'activityBar.background': '#101012',
    'activityBar.activeBackground': '#161618',
    'activityBar.activeBorder': '#49b8fd',
    'activityBar.activeFocusBorder': '#d87de4',
    'activityBar.foreground': '#f1ebf3',
    'sideBar.background': '#121215',
    'sideBar.foreground': '#f1ebf3',
    'sideBarSectionHeader.background': '#121215',
    'sideBarSectionHeader.foreground': '#ff8d8d',
    'sideBarTitle.foreground': '#49b8fd',

    'icon.foreground': '#1cf3fb',
    'button.background': '#c882d3',
    'button.foreground': '#f1ebf3',
    'button.hoverBackground': '#bb86fc',
    'badge.background': '#1cf3fb',
    'badge.foreground': '#161618',
  },
  tokenColors: [
    {
      name: 'JSON Key - Level 0',
      scope: [
        'source.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#fce789',
      },
    },
    {
      name: 'JSON Key - Level 1',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#d99de2',
      },
    },
    {
      name: 'JSON Key - Level 2',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'JSON Key - Level 3',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#729fcf',
      },
    },
    {
      name: 'JSON Key - Level 4',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#fcefb5',
      },
    },
    {
      name: 'JSON Key - Level 5',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#ddbae2',
      },
    },
    {
      name: 'JSON Key - Level 6',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#fcbebe',
      },
    },
    {
      name: 'JSON Key - Level 7',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#92b1d3',
      },
    },
    {
      name: 'JSON Key - Level 8',
      scope: [
        'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json',
      ],
      settings: {
        foreground: '#f1ebf3',
      },
    },
    {
      name: 'Markdown - Markup Raw Inline Punctuation',
      scope: [
        'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown',
      ],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Markdown - Blockquote',
      scope: ['markup.quote punctuation.definition.blockquote.markdown'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Markup - Quote',
      scope: ['markup.quote'],
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      name: 'Markdown - Raw Block Fenced',
      scope: [
        'markup.raw.block.fenced.markdown',
        'punctuation.definition.fenced.markdown',
      ],
      settings: {
        foreground: '#00000050',
      },
    },
    {
      name: 'Markdown - Fenced Language',
      scope: ['variable.language.fenced.markdown', 'meta.separator'],
      settings: {
        foreground: '#65737E',
      },
    },
    {
      name: 'Comment',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: {
        fontStyle: 'italic',
        foreground: '#7c857d',
      },
    },
    {
      name: 'white',
      scope: [
        'meta.tag',
        'support.constant',
        'variable.parameter',
        'text.html.markdown',
        'punctuation.definition.list_item.markdown',
        'markup.raw.block.fenced.markdown',
        'variable.language.fenced.markdown',
        'punctuation.section.class.end',
        'punctuation.section.embedded',
        'markup.table',
      ],
      settings: {
        foreground: '#f1ebf3',
      },
    },
    {
      name: 'String orange',
      scope: [
        'string',
        'source.css support.type.property-name',
        'string.other.link',
        'string constant.other.placeholder',
      ],
      settings: {
        foreground: '#fbddb9',
      },
    },
    {
      name: 'Variables offwhite',
      scope: [
        'variable', // variable name
        'meta.block variable.other',
        'entity.other.inherited-class',
        'support.type',
        'support.other.variable',
        'variable.import.parameter.js',
        'variable.other.class.js',
        'variable.function.constructor',
      ],
      settings: {
        foreground: '#b1defa',
      },
    },
    // reds
    {
      name: 'red',
      scope: [
        'invalid',
        'invalid.illegal',
        'constant.numeric', // numbers
        'constant.language', // undefined null true false
        'support.class', // jsx el
        'markup.deleted',
      ],
      settings: {
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'red italic',
      scope: [
        'source.js constant.other.object.key.js string.unquoted.label.js',
        'markup.italic',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'red underline',
      scope: ['markup.underline'],
      settings: {
        fontStyle: 'underline',
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'red bold',
      scope: [
        'storage.type', // variable declr
        'markup.bold',
        'markup.bold string',
        'markup.bold markup.italic',
        'markup.italic markup.bold',
        'markup.quote markup.bold',
        'markup.bold markup.italic string',
        'markup.italic markup.bold string',
        'markup.quote markup.bold string',
      ],
      settings: {
        fontStyle: 'bold',
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'red bold italic',
      scope: [
        'storage.modifier', // variable mod
      ],
      settings: {
        fontStyle: 'italic bold',
        foreground: '#ff8d8d',
      },
    },
    {
      name: 'light pink',
      scope: [
        'entity.other.attribute-name',
        'text.html.basic entity.other.attribute-name.html',
        'text.html.basic entity.other.attribute-name',
        'markup.changed',
        'text.html.markdown markup.inline.raw.markdown',
      ],
      settings: {
        fontStyle: 'italic bold',
        foreground: '#d99de2',
      },
    },
    {
      name: 'pink italic',
      scope: ['variable.language', 'string.other.link.description.title.markdown'],
      settings: {
        fontStyle: 'italic',
        foreground: '#d87de4',
      },
    },
    {
      name: 'Functions - blue',
      scope: [
        'entity.name.function',
        'meta.function-call',
        'variable.function',
        'support.function',
        'keyword.other.special-method',
        'entity.other.attribute-name.class',
        'string.other.link.title.markdown',
        'constant.other.reference.link.markdown',
        'markup.raw.block',
      ],
      settings: {
        foreground: '#49b8fd',
      },
    },
    {
      name: 'cyan',
      scope: [
        'punctuation',
        'punctuation.definition.tag',
        'punctuation.definition.tag.html',
        'punctuation.definition.tag.begin.html',
        'punctuation.definition.tag.end.html',
        'meta.tag.sgml',
        'string.regexp',
      ],
      settings: {
        foreground: '#55dbe0',
      },
    },
    {
      name: 'green',
      scope: [
        'entity.name', // types
        'constant.other.color',
        'constant.character',
        'markup.inserted',
        'constant.character.escape',
        'constant.escape',
        'keyword.other.template',
        'keyword.other.substitution',
        'source.sass support.type.property-name',
        'source.scss support.type.property-name',
        'source.less support.type.property-name',
        'source.stylus support.type.property-name',
        'source.postcss support.type.property-name',
      ],
      settings: {
        foreground: '#89df95',
      },
    },
    {
      name: 'green italic',
      scope: [
        'tag.decorator.js entity.name.tag.js',
        'tag.decorator.js punctuation.definition.tag.js',
      ],
      settings: {
        fontStyle: 'italic',
        foreground: '#89df95',
      },
    },
    {
      name: 'green bold italic',
      scope: [
        'keyword.control', // imports for in etc
        'keyword.other',
      ],
      settings: {
        fontStyle: 'italic bold',
        foreground: '#a9e9b2',
      },
    },
    {
      name: 'yellow',
      scope: [
        'entity.name.tag', // html tags
        'keyword', // =
        'source.sass keyword.control',
        'markdown.heading',
        'markup.heading | markup.heading entity.name',
        'markup.heading.markdown punctuation.definition.heading.markdown',
      ],
      settings: {
        foreground: '#fce789',
      },
    },
    {
      name: 'URL',
      scope: ['*url*', '*link*', '*uri*'],
      settings: {
        fontStyle: 'underline',
      },
    },
  ],
};
