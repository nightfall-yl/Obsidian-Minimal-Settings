import { App } from 'obsidian';

export type Locale = 'en' | 'zh';

// 所有需要翻译的字符串键
interface Translations {
  // Color scheme section
  colorSchemeForMoreOptions: string;
  colorSchemePluginSee: string;
  colorSchemeDoc: string;
  colorSchemeForDetails: string;
  colorSchemeTitle: string;
  lightModeColorScheme: string;
  lightModeColorSchemeDesc: string;
  lightModeBackgroundContrast: string;
  backgroundContrastDesc: string;
  darkModeColorScheme: string;
  darkModeColorSchemeDesc: string;
  darkModeBackgroundContrast: string;

  // Dropdown options - Light/Dark scheme names (keep original names)
  optDefault: string;
  optAllWhite: string;
  optLowContrast: string;
  optHighContrast: string;
  optTrueBlack: string;
  optWideLineWidth: string;
  optMaxLineWidth: string;
  opt100PaneWidth: string;

  // Features section
  featuresTitle: string;
  labeledNavName: string;
  labeledNavDesc: string;
  colorfulFrameName: string;
  colorfulFrameDesc: string;
  colorfulActiveStatesName: string;
  colorfulActiveStatesDesc: string;
  colorfulHeadingsName: string;
  colorfulHeadingsDesc: string;
  minimalStatusBarName: string;
  minimalStatusBarDesc: string;
  trimFileNamesName: string;
  trimFileNamesDesc: string;
  workspaceBordersName: string;
  workspaceBordersDesc: string;
  focusModeName: string;
  focusModeDesc: string;
  underlineInternalName: string;
  underlineInternalDesc: string;
  underlineExternalName: string;
  underlineExternalDesc: string;
  maximizeMediaName: string;
  maximizeMediaDesc: string;
  disableImageZoomName: string;
  disableImageZoomDesc: string;

  // Layout section
  layoutForMoreOptions: string;
  layoutDoc: string;
  layoutForDetails: string;
  layoutTitle: string;
  imageGridsName: string;
  imageGridsDesc: string;
  chartWidthName: string;
  chartWidthDesc: string;
  iframeWidthName: string;
  iframeWidthDesc: string;
  imageWidthName: string;
  imageWidthDesc: string;
  mapWidthName: string;
  mapWidthDesc: string;
  tableWidthName: string;
  tableWidthDesc: string;

  // Typography section
  typographyTitle: string;
  textFontSizeName: string;
  textFontSizeDesc: string;
  smallFontSizeName: string;
  smallFontSizeDesc: string;
  lineHeightName: string;
  lineHeightDesc: string;
  normalLineWidthName: string;
  normalLineWidthDesc: string;
  wideLineWidthName: string;
  wideLineWidthDesc: string;
  maxLineWidthName: string;
  maxLineWidthDesc: string;
  editorFontName: string;
  editorFontDesc: string;
}

const en: Translations = {
  // Color scheme
  colorSchemeForMoreOptions: 'For more options, use the ',
  colorSchemePluginSee: ' plugin. See ',
  colorSchemeDoc: 'documentation',
  colorSchemeForDetails: ' for details.',
  colorSchemeTitle: 'Color scheme',
  lightModeColorScheme: 'Light mode color scheme',
  lightModeColorSchemeDesc: 'Preset color options for light mode.',
  lightModeBackgroundContrast: 'Light mode background contrast',
  backgroundContrastDesc: 'Level of contrast between sidebar and main content.',
  darkModeColorScheme: 'Dark mode color scheme',
  darkModeColorSchemeDesc: 'Preset colors options for dark mode.',
  darkModeBackgroundContrast: 'Dark mode background contrast',

  // Options
  optDefault: 'Default',
  optAllWhite: 'All white',
  optLowContrast: 'Low contrast',
  optHighContrast: 'High contrast',
  optTrueBlack: 'True black',
  optWideLineWidth: 'Wide line width',
  optMaxLineWidth: 'Maximum line width',
  opt100PaneWidth: '100% pane width',

  // Features
  featuresTitle: 'Features',
  labeledNavName: 'Text labels for primary navigation',
  labeledNavDesc: 'Navigation items in the left sidebar uses text labels.',
  colorfulFrameName: 'Colorful window frame',
  colorfulFrameDesc: 'The top area of the app uses your accent color.',
  colorfulActiveStatesName: 'Colorful active states',
  colorfulActiveStatesDesc: 'Active file and menu items use your accent color.',
  colorfulHeadingsName: 'Colorful headings',
  colorfulHeadingsDesc: 'Headings use a different color for each size.',
  minimalStatusBarName: 'Minimal status bar',
  minimalStatusBarDesc: 'Turn off to use full-width status bar.',
  trimFileNamesName: 'Trim file names in sidebars',
  trimFileNamesDesc: 'Use ellipses to fit file names on a single line.',
  workspaceBordersName: 'Workspace borders',
  workspaceBordersDesc: 'Display divider lines between workspace elements.',
  focusModeName: 'Focus mode',
  focusModeDesc: 'Hide tab bar and status bar, hover to display. Can be toggled via hotkey.',
  underlineInternalName: 'Underline internal links',
  underlineInternalDesc: 'Show underlines on internal links.',
  underlineExternalName: 'Underline external links',
  underlineExternalDesc: 'Show underlines on external links.',
  maximizeMediaName: 'Maximize media',
  maximizeMediaDesc: 'Images and videos fill the width of the line.',
  disableImageZoomName: 'Disable image zoom',
  disableImageZoomDesc: 'Turn off the image zoom/lightbox effect. Allows native resize handles to work.',

  // Layout
  layoutForMoreOptions: 'These options can also be defined per file. See ',
  layoutDoc: 'documentation',
  layoutForDetails: ' for details.',
  layoutTitle: 'Layout',
  imageGridsName: 'Image grids',
  imageGridsDesc: 'Turn consecutive images into columns — to make a new row, add an extra line break between images.',
  chartWidthName: 'Chart width',
  chartWidthDesc: 'Default width for chart blocks.',
  iframeWidthName: 'Iframe width',
  iframeWidthDesc: 'Default width for iframe blocks.',
  imageWidthName: 'Image width',
  imageWidthDesc: 'Default width for image blocks.',
  mapWidthName: 'Map width',
  mapWidthDesc: 'Default width for map blocks.',
  tableWidthName: 'Table width',
  tableWidthDesc: 'Default width for table and Dataview blocks.',

  // Typography
  typographyTitle: 'Typography',
  textFontSizeName: 'Text font size',
  textFontSizeDesc: 'Used for the main text (default 16).',
  smallFontSizeName: 'Small font size',
  smallFontSizeDesc: 'Used for text in the sidebars and tabs (default 13).',
  lineHeightName: 'Line height',
  lineHeightDesc: 'Line height of text (default 1.5).',
  normalLineWidthName: 'Normal line width',
  normalLineWidthDesc: 'Number of characters per line (default 40).',
  wideLineWidthName: 'Wide line width',
  wideLineWidthDesc: 'Number of characters per line for wide elements (default 50).',
  maxLineWidthName: 'Maximum line width %',
  maxLineWidthDesc: 'Percentage of space inside a pane that a line can fill (default 88).',
  editorFontName: 'Editor font',
  editorFontDesc: 'Overrides the text font defined in Obsidian Appearance settings when in edit mode.',
};

const zh: Translations = {
  // 配色方案
  colorSchemeForMoreOptions: '更多选项请使用 ',
  colorSchemePluginSee: ' 插件。参见 ',
  colorSchemeDoc: '文档',
  colorSchemeForDetails: ' 了解详情。',
  colorSchemeTitle: '配色方案',
  lightModeColorScheme: '浅色模式配色方案',
  lightModeColorSchemeDesc: '浅色模式的预设颜色选项。',
  lightModeBackgroundContrast: '浅色模式背景对比度',
  backgroundContrastDesc: '侧边栏与主内容区之间的对比度级别。',
  darkModeColorScheme: '深色模式配色方案',
  darkModeColorSchemeDesc: '深色模式的预设颜色选项。',
  darkModeBackgroundContrast: '深色模式背景对比度',

  // 下拉选项
  optDefault: '默认',
  optAllWhite: '纯白',
  optLowContrast: '低对比度',
  optHighContrast: '高对比度',
  optTrueBlack: '纯黑',
  optWideLineWidth: '宽行宽度',
  optMaxLineWidth: '最大行宽度',
  opt100PaneWidth: '100% 面板宽度',

  // 功能
  featuresTitle: '功能',
  labeledNavName: '主导航文字标签',
  labeledNavDesc: '左侧导航栏使用文字标签。',
  colorfulFrameName: '彩色窗口边框',
  colorfulFrameDesc: '应用顶部区域使用强调色。',
  colorfulActiveStatesName: '彩色激活状态',
  colorfulActiveStatesDesc: '激活的文件和菜单项使用强调色。',
  colorfulHeadingsName: '彩色标题',
  colorfulHeadingsDesc: '不同级别的标题使用不同颜色。',
  minimalStatusBarName: '极简状态栏',
  minimalStatusBarDesc: '关闭以使用全宽状态栏。',
  trimFileNamesName: '侧边栏截断文件名',
  trimFileNamesDesc: '使用省略号将文件名显示在单行内。',
  workspaceBordersName: '工作区分隔线',
  workspaceBordersDesc: '在工作区各元素之间显示分隔线。',
  focusModeName: '专注模式',
  focusModeDesc: '隐藏标签栏和状态栏，悬停显示。可通过快捷键切换。',
  underlineInternalName: '内部链接下划线',
  underlineInternalDesc: '在内部链接上显示下划线。',
  underlineExternalName: '外部链接下划线',
  underlineExternalDesc: '在外部链接上显示下划线。',
  maximizeMediaName: '媒体最大化',
  maximizeMediaDesc: '图片和视频填满行宽。',
  disableImageZoomName: '禁用图片缩放',
  disableImageZoomDesc: '关闭图片缩放/灯箱效果，允许使用原生拖拽调整大小。',

  // 布局
  layoutForMoreOptions: '这些选项也可以按文件单独设置。参见 ',
  layoutDoc: '文档',
  layoutForDetails: ' 了解详情。',
  layoutTitle: '布局',
  imageGridsName: '图片网格',
  imageGridsDesc: '将连续的图片转为多列 —— 如需换行，在图片间添加额外空行。',
  chartWidthName: '图表宽度',
  chartWidthDesc: '图表块的默认宽度。',
  iframeWidthName: 'Iframe 宽度',
  iframeWidthDesc: 'Iframe 块的默认宽度。',
  imageWidthName: '图片宽度',
  imageWidthDesc: '图片块的默认宽度。',
  mapWidthName: '地图宽度',
  mapWidthDesc: '地图块的默认宽度。',
  tableWidthName: '表格宽度',
  tableWidthDesc: '表格和 Dataview 块的默认宽度。',

  // 字体排版
  typographyTitle: '字体排版',
  textFontSizeName: '正文字号',
  textFontSizeDesc: '用于正文（默认 16）。',
  smallFontSizeName: '小字号',
  smallFontSizeDesc: '用于侧边栏和标签页中的文字（默认 13）。',
  lineHeightName: '行高',
  lineHeightDesc: '文本行高（默认 1.5）。',
  normalLineWidthName: '标准行宽',
  normalLineWidthDesc: '每行字符数（默认 40）。',
  wideLineWidthName: '宽行宽',
  wideLineWidthDesc: '宽元素的每行字符数（默认 50）。',
  maxLineWidthName: '最大行宽 %',
  maxLineWidthDesc: '一行可占面板空间的百分比（默认 88）。',
  editorFontName: '编辑器字体',
  editorFontDesc: '编辑模式下覆盖 Obsidian 外观设置中定义的文本字体。',
};

const locales: Record<Locale, Translations> = { en, zh };

/** 检测 Obsidian 系统界面语言，返回 Locale */
export function getLocale(app: App): Locale {
  // 优先使用 Obsidian 1.8+ 的 getLanguage() API
  // @ts-ignore
  const getLang = app.getLanguage;
  if (typeof getLang === 'function') {
    // @ts-ignore
    const lang = app.getLanguage();
    if (lang && (lang.startsWith('zh') || lang.startsWith('cn'))) {
      return 'zh';
    }
    return 'en';
  }
  // 回退：从 localStorage 读取 Obsidian 界面语言设置
  const lang = window.localStorage.getItem('language') || 'en';
  if (lang.startsWith('zh') || lang.startsWith('cn')) {
    return 'zh';
  }
  return 'en';
}

/** 获取翻译对象 */
export function t(locale: Locale): Translations {
  return locales[locale] || locales.en;
}
