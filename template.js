/**
 * @desc template
 * @author MiyueFE <https://github.com/miyuesc>
 * @since 2024/9/4 10:14
 */

export const readmePrefix = `
# bpmn-js 常见问题及解决方案

> 如果有新的问题，可以点击 [这里](https://github.com/miyuesc/bpmn-js-questions/issues/new/choose) 创建新的 issue 进行讨论。

### 问题列表

`

export const readmeSuffix = `
### bpmn-js 常用工具库说明

#### 1. [bpmn-auto-layout](https://github.com/bpmn-io/bpmn-auto-layout)

流程图自动布局优化插件，bpmn-io 官方团队开发维护。

**非 bpmn-js 直接使用的插件模块**，而是提供方法优化 xml 字符串。

#### 2. [diagram-js-grid](https://github.com/bpmn-io/diagram-js-grid)

编辑器画布区域 **点状背景**，bpmn-io 官方团队开发维护。

#### 3. [diagram-js-minimap](https://github.com/bpmn-io/diagram-js-minimap)

编辑器小地图组件，bpmn-io 官方团队开发维护。

#### 4. [bpmn-js-create-append-anything](https://github.com/bpmn-io/bpmn-js-create-append-anything)

Palette 及 ContextPad 强化组件，用于快捷创建 bpmn-js 内置所有类型元素，bpmn-io 官方团队开发维护。

#### 5. [bpmn-js-color-picker](https://github.com/bpmn-io/bpmn-js-color-picker)

元素 ContextPad 中的颜色选择器，用于快速修改指定元素颜色主题，bpmn-io 官方团队开发维护。

#### 6. [bpmn-js-token-simulation](https://github.com/bpmn-io/bpmn-js-token-simulation)

bpmn 流程图流转过程模拟，bpmn-io 官方团队开发维护。

#### 7. [bpmn-js-differ](https://github.com/bpmn-io/bpmn-js-differ)

bpmn 流程图差异对比工具，bpmn-io 官方团队开发维护，**非 bpmn-js 直接使用的插件模块**。

#### 8. [bpmn-js-properties-panel](https://github.com/bpmn-io/bpmn-js-properties-panel)

bpmn 编辑器属性面板，支持 Camunda 和 Zeebe 引擎，bpmn-io 官方团队开发维护。

#### 9. [bpmn-js-sketchy](https://github.com/bpmn-io/bpmn-js-sketchy)

bpmn-js 手绘风格元素，bpmn-io 官方团队开发维护。

#### 10. [bpmn-js-embedded-comments](https://github.com/bpmn-io/bpmn-js-embedded-comments)

bpmn documentation 可视化显示插件，bpmn-io 官方团队开发维护。

---

#### 1. [diagram-js-grid-bg](https://github.com/miyuesc/diagram-js-grid-bg)

编辑器画布区域 **网格背景**，基于官方 diagram-js-grid，MiyueFE 开发维护。

#### 2. [diagram-js-accordion-palette](https://github.com/miyuesc/diagram-js-accordion-palette)

支持折叠和展开分组的 Palette 组件，与默认 Palette 互斥，MiyueFE 开发维护。

#### 3. [diagram-js-context-pad](https://github.com/miyuesc/diagram-js-context-pad)

优化分组显示和交互的 ContextPad 组件，与默认 ContextPad 互斥，MiyueFE 开发维护。

#### 4. [bpmn-js-i18n-zh](https://github.com/miyuesc/bpmn-js-i18n-zh)

bpmn-js 编辑器，以及官方属性面板（Camunda 和 Zeebe）中文翻译，MiyueFE 开发维护。

---

#### 1. [bpmn-js-task-resize](https://github.com/ElCondor1969/bpmn-js-task-resize)

bpmn-js 编辑 事件及任务节点 的 resize 支持，ElCondor1969 开发维护 (扩展 BpmnRules 的 resize 规则即可，不建议直接使用该库，已多年没有代码更新)。
`