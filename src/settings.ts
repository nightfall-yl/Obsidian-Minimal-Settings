import { App, PluginSettingTab, SettingGroup } from 'obsidian';
import MinimalTheme from "./main";
import { getLocale, t, Locale } from './i18n';

export interface MinimalSettings {
  lightStyle: string;
  darkStyle: string;
  lightScheme: string;
  darkScheme: string;
  editorFont: string;
  colorfulHeadings: boolean;
  colorfulFrame: boolean;
  colorfulActiveStates: boolean,
  trimNames: boolean;
  labeledNav: boolean;
  bordersToggle: boolean;
  focusMode: boolean;
  lineHeight: number;
  lineWidth: number;
  lineWidthWide: number;
  maxWidth: number;
  imgGrid: boolean;
  devBlockWidth: boolean;
  disableImageZoom: boolean;
  tableWidth: string;
  iframeWidth: string;
  imgWidth: string;
  chartWidth: string;
  mapWidth: string;
  fullWidthMedia: boolean,
  minimalStatus: boolean,
  textNormal: number;
  textSmall: number;
  underlineInternal: boolean;
  underlineExternal: boolean;
  folding: boolean;
  lineNumbers: boolean;
  readableLineLength: boolean;
}

export const DEFAULT_SETTINGS: MinimalSettings = {
  lightStyle: 'minimal-light',
  darkStyle: 'minimal-dark',
  lightScheme: 'minimal-default-light',
  darkScheme: 'minimal-default-dark',
  editorFont: '',
  lineHeight: 1.5,
  lineWidth: 40,
  lineWidthWide: 50,
  maxWidth: 88,
  textNormal: 16,
  textSmall: 13,
  imgGrid: false,
  imgWidth: 'img-default-width',
  tableWidth: 'table-default-width',
  iframeWidth: 'iframe-default-width',
  mapWidth: 'map-default-width',
  chartWidth: 'chart-default-width',
  colorfulHeadings: false,
  colorfulFrame: false,
  colorfulActiveStates: false,
  trimNames: true,
  labeledNav: false,
  fullWidthMedia: true,
  bordersToggle: true,
  minimalStatus: true,
  focusMode: false,
  underlineInternal: true,
  underlineExternal: true,
  folding: true,
  lineNumbers: false,
  readableLineLength: false,
  devBlockWidth: false,
  disableImageZoom: true,
}

export class MinimalSettingsTab extends PluginSettingTab {
  plugin: MinimalTheme;
  private locale: Locale;

  constructor(app: App, plugin: MinimalTheme) {
    super(app, plugin);
    this.plugin = plugin;
    this.locale = getLocale(app);
  }

  display(): void {
    const {containerEl} = this;
    containerEl.empty();

    const s = t(this.locale);

    // Color scheme section
    const colorSchemeDesc = document.createDocumentFragment();
    colorSchemeDesc.appendText(s.colorSchemeForMoreOptions);
    colorSchemeDesc.appendChild(
      createEl('a', {
        text: 'Style Settings',
        href: 'obsidian://show-plugin?id=obsidian-style-settings',
      })
    );
    colorSchemeDesc.appendText(s.colorSchemePluginSee);
    colorSchemeDesc.appendChild(
      createEl('a', {
        text: s.colorSchemeDoc,
        href: 'https://minimal.guide/features/color-schemes',
      })
    );
    colorSchemeDesc.appendText(s.colorSchemeForDetails);

    const colorHeading = document.createDocumentFragment();
    colorHeading.createDiv({cls: 'setting-item-name', text: s.colorSchemeTitle});
    const colorDesc = colorHeading.createDiv({cls: 'setting-item-description'});
    colorDesc.appendChild(colorSchemeDesc);

    new SettingGroup(containerEl)
      .setHeading(colorHeading)
      .addSetting(setting => setting
        .setName(s.lightModeColorScheme)
        .setDesc(s.lightModeColorSchemeDesc)
        .addDropdown(dropdown => dropdown
          .addOption('minimal-default-light','Default')
          .addOption('minimal-atom-light','Atom')
          .addOption('minimal-ayu-light','Ayu')
          .addOption('minimal-catppuccin-light','Catppuccin')
          .addOption('minimal-eink-light','E-ink (beta)')
          .addOption('minimal-everforest-light','Everforest')
          .addOption('minimal-flexoki-light','Flexoki')
          .addOption('minimal-gruvbox-light','Gruvbox')
          .addOption('minimal-macos-light','macOS')
          .addOption('minimal-nord-light','Nord')
          .addOption('minimal-rose-pine-light','Rosé Pine')
          .addOption('minimal-notion-light','Sky')
          .addOption('minimal-solarized-light','Solarized')
          .addOption('minimal-things-light','Things')
          .setValue(this.plugin.settings.lightScheme)
          .onChange((value) => {
            this.plugin.settings.lightScheme = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.updateLightScheme();
          })))
      .addSetting(setting => setting
        .setName(s.lightModeBackgroundContrast)
        .setDesc(s.backgroundContrastDesc)
        .addDropdown(dropdown => dropdown
          .addOption('minimal-light',s.optDefault)
          .addOption('minimal-light-white',s.optAllWhite)
          .addOption('minimal-light-tonal',s.optLowContrast)
          .addOption('minimal-light-contrast',s.optHighContrast)
          .setValue(this.plugin.settings.lightStyle)
          .onChange((value) => {
            this.plugin.settings.lightStyle = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.updateLightStyle();
          })))
      .addSetting(setting => setting
        .setName(s.darkModeColorScheme)
        .setDesc(s.darkModeColorSchemeDesc)
        .addDropdown(dropdown => dropdown
          .addOption('minimal-default-dark','Default')
          .addOption('minimal-atom-dark','Atom')
          .addOption('minimal-ayu-dark','Ayu')
          .addOption('minimal-catppuccin-dark','Catppuccin')
          .addOption('minimal-dracula-dark','Dracula')
          .addOption('minimal-eink-dark','E-ink (beta)')
          .addOption('minimal-everforest-dark','Everforest')
          .addOption('minimal-flexoki-dark','Flexoki')
          .addOption('minimal-gruvbox-dark','Gruvbox')
          .addOption('minimal-macos-dark','macOS')
          .addOption('minimal-nord-dark','Nord')
          .addOption('minimal-rose-pine-dark','Rosé Pine')
          .addOption('minimal-notion-dark','Sky')
          .addOption('minimal-solarized-dark','Solarized')
          .addOption('minimal-things-dark','Things')
          .setValue(this.plugin.settings.darkScheme)
          .onChange((value) => {
            this.plugin.settings.darkScheme = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.updateDarkScheme();
          })))
      .addSetting(setting => setting
        .setName(s.darkModeBackgroundContrast)
        .setDesc(s.backgroundContrastDesc)
        .addDropdown(dropdown => dropdown
          .addOption('minimal-dark',s.optDefault)
          .addOption('minimal-dark-tonal',s.optLowContrast)
          .addOption('minimal-dark-black',s.optTrueBlack)
          .setValue(this.plugin.settings.darkStyle)
          .onChange((value) => {
            this.plugin.settings.darkStyle = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.updateDarkStyle();
          })));

    // Features section
    new SettingGroup(containerEl)
      .setHeading(s.featuresTitle)
      .addSetting(setting => setting
        .setName(s.labeledNavName)
        .setDesc(s.labeledNavDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.labeledNav)
          .onChange((value) => {
            this.plugin.settings.labeledNav = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.colorfulFrameName)
        .setDesc(s.colorfulFrameDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulFrame)
          .onChange((value) => {
            this.plugin.settings.colorfulFrame = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.colorfulActiveStatesName)
        .setDesc(s.colorfulActiveStatesDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulActiveStates)
          .onChange((value) => {
            this.plugin.settings.colorfulActiveStates = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.colorfulHeadingsName)
        .setDesc(s.colorfulHeadingsDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.colorfulHeadings)
          .onChange((value) => {
            this.plugin.settings.colorfulHeadings = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.minimalStatusBarName)
        .setDesc(s.minimalStatusBarDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.minimalStatus)
          .onChange((value) => {
            this.plugin.settings.minimalStatus = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.trimFileNamesName)
        .setDesc(s.trimFileNamesDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.trimNames)
          .onChange((value) => {
            this.plugin.settings.trimNames = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.workspaceBordersName)
        .setDesc(s.workspaceBordersDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.bordersToggle)
          .onChange((value) => {
            this.plugin.settings.bordersToggle = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.focusModeName)
        .setDesc(s.focusModeDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.focusMode)
          .onChange((value) => {
            this.plugin.settings.focusMode = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.underlineInternalName)
        .setDesc(s.underlineInternalDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.underlineInternal)
          .onChange((value) => {
            this.plugin.settings.underlineInternal = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.underlineExternalName)
        .setDesc(s.underlineExternalDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.underlineExternal)
          .onChange((value) => {
            this.plugin.settings.underlineExternal = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.maximizeMediaName)
        .setDesc(s.maximizeMediaDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.fullWidthMedia)
          .onChange((value) => {
            this.plugin.settings.fullWidthMedia = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.disableImageZoomName)
        .setDesc(s.disableImageZoomDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.disableImageZoom)
          .onChange((value) => {
            this.plugin.settings.disableImageZoom = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));

    // Layout section
    const layoutDesc = document.createDocumentFragment();
    layoutDesc.appendText(s.layoutForMoreOptions);
    layoutDesc.appendChild(
      createEl('a', {
        text: s.layoutDoc,
        href: 'https://minimal.guide/features/block-width',
      })
    );
    layoutDesc.appendText(s.layoutForDetails);

    const layoutHeading = document.createDocumentFragment();
    layoutHeading.createDiv({cls: 'setting-item-name', text: s.layoutTitle});
    const layoutDescDiv = layoutHeading.createDiv({cls: 'setting-item-description'});
    layoutDescDiv.appendChild(layoutDesc);

    new SettingGroup(containerEl)
      .setHeading(layoutHeading)
      .addSetting(setting => setting
        .setName(s.imageGridsName)
        .setDesc(s.imageGridsDesc)
        .addToggle(toggle => toggle.setValue(this.plugin.settings.imgGrid)
          .onChange((value) => {
            this.plugin.settings.imgGrid = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.chartWidthName)
        .setDesc(s.chartWidthDesc)
        .addDropdown(dropdown => dropdown
          .addOption('chart-default-width',s.optDefault)
          .addOption('chart-wide',s.optWideLineWidth)
          .addOption('chart-max',s.optMaxLineWidth)
          .addOption('chart-100',s.opt100PaneWidth)
          .setValue(this.plugin.settings.chartWidth)
          .onChange((value) => {
            this.plugin.settings.chartWidth = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.iframeWidthName)
        .setDesc(s.iframeWidthDesc)
        .addDropdown(dropdown => dropdown
          .addOption('iframe-default-width',s.optDefault)
          .addOption('iframe-wide',s.optWideLineWidth)
          .addOption('iframe-max',s.optMaxLineWidth)
          .addOption('iframe-100',s.opt100PaneWidth)
          .setValue(this.plugin.settings.iframeWidth)
          .onChange((value) => {
            this.plugin.settings.iframeWidth = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.imageWidthName)
        .setDesc(s.imageWidthDesc)
        .addDropdown(dropdown => dropdown
          .addOption('img-default-width',s.optDefault)
          .addOption('img-wide',s.optWideLineWidth)
          .addOption('img-max',s.optMaxLineWidth)
          .addOption('img-100',s.opt100PaneWidth)
          .setValue(this.plugin.settings.imgWidth)
          .onChange((value) => {
            this.plugin.settings.imgWidth = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.mapWidthName)
        .setDesc(s.mapWidthDesc)
        .addDropdown(dropdown => dropdown
          .addOption('map-default-width',s.optDefault)
          .addOption('map-wide',s.optWideLineWidth)
          .addOption('map-max',s.optMaxLineWidth)
          .addOption('map-100',s.opt100PaneWidth)
          .setValue(this.plugin.settings.mapWidth)
          .onChange((value) => {
            this.plugin.settings.mapWidth = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.tableWidthName)
        .setDesc(s.tableWidthDesc)
        .addDropdown(dropdown => dropdown
          .addOption('table-default-width',s.optDefault)
          .addOption('table-wide',s.optWideLineWidth)
          .addOption('table-max',s.optMaxLineWidth)
          .addOption('table-100',s.opt100PaneWidth)
          .setValue(this.plugin.settings.tableWidth)
          .onChange((value) => {
            this.plugin.settings.tableWidth = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));

    // Typography section
    new SettingGroup(containerEl)
      .setHeading(s.typographyTitle)
      .addSetting(setting => setting
        .setName(s.textFontSizeName)
        .setDesc(s.textFontSizeDesc)
        .addText(text => text.setPlaceholder('16')
          .setValue((this.plugin.settings.textNormal || '') + '')
          .onChange((value) => {
            this.plugin.settings.textNormal = parseFloat(value);
            this.plugin.saveData(this.plugin.settings);
            this.plugin.setFontSize();
          })))
      .addSetting(setting => setting
        .setName(s.smallFontSizeName)
        .setDesc(s.smallFontSizeDesc)
        .addText(text => text.setPlaceholder('13')
          .setValue((this.plugin.settings.textSmall || '') + '')
          .onChange((value) => {
            this.plugin.settings.textSmall = parseFloat(value);
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.lineHeightName)
        .setDesc(s.lineHeightDesc)
        .addText(text => text.setPlaceholder('1.5')
          .setValue((this.plugin.settings.lineHeight || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineHeight = parseFloat(value);
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.normalLineWidthName)
        .setDesc(s.normalLineWidthDesc)
        .addText(text => text.setPlaceholder('40')
          .setValue((this.plugin.settings.lineWidth || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineWidth = parseInt(value.trim());
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.wideLineWidthName)
        .setDesc(s.wideLineWidthDesc)
        .addText(text => text.setPlaceholder('50')
          .setValue((this.plugin.settings.lineWidthWide || '') + '')
          .onChange((value) => {
            this.plugin.settings.lineWidthWide = parseInt(value.trim());
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.maxLineWidthName)
        .setDesc(s.maxLineWidthDesc)
        .addText(text => text.setPlaceholder('88')
          .setValue((this.plugin.settings.maxWidth || '') + '')
          .onChange((value) => {
            this.plugin.settings.maxWidth = parseInt(value.trim());
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })))
      .addSetting(setting => setting
        .setName(s.editorFontName)
        .setDesc(s.editorFontDesc)
        .addText(text => text.setPlaceholder('')
          .setValue((this.plugin.settings.editorFont || '') + '')
          .onChange((value) => {
            this.plugin.settings.editorFont = value;
            this.plugin.saveData(this.plugin.settings);
            this.plugin.refresh();
          })));
  }
}
