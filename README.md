# bpmn-js 常见问题和解决方案及工具库说明

> 如果有新的问题，可以点击 [这里](https://github.com/miyuesc/bpmn-js-questions/issues/new/choose) 创建新的 issue 进行讨论。

> **上次更新时间(UTC)：2024-12-18 00:52:25**

## 一、常见问题与解决方案


  ### [1 [Column]: 开篇：重新认识 bpmn.js 与 BPMN 规范](https://github.com/miyuesc/bpmn-js-questions/issues/12)


  ### [2 : 自定义组件显示UI](https://github.com/miyuesc/bpmn-js-questions/issues/11)

> ❓ Questioner: [coder319](https://github.com/coder319)

  ### [3 : 如何美化 lint 错误提示？](https://github.com/miyuesc/bpmn-js-questions/issues/10)

> ❓ Questioner: [y4n6](https://github.com/y4n6)
>
> ✅ This question has been solved.


  ### [4 : importXml时出现TypeError: Cannot read properties of undefined (reading 'root-0')](https://github.com/miyuesc/bpmn-js-questions/issues/9)

> ❓ Questioner: [Xnwf](https://github.com/Xnwf)
>
> ✅ This question has been solved.


  ### [5 : 希望 Palette 始终展示双列](https://github.com/miyuesc/bpmn-js-questions/issues/8)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [6 : Modeler创建后无法从Palette中创建元素](https://github.com/miyuesc/bpmn-js-questions/issues/7)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [7 : 使用 importXML 导入报错 “no diagram to display”](https://github.com/miyuesc/bpmn-js-questions/issues/6)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [8 : 只想使用支持缩放和拖拽的预览模式](https://github.com/miyuesc/bpmn-js-questions/issues/5)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [9 : 使用PropertiesPanel时ID栏出现 “ID must be unique.” 错误](https://github.com/miyuesc/bpmn-js-questions/issues/4)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)

  ### [10 : 报错：Uncaught Error: unknown type [xxx:xxx]](https://github.com/miyuesc/bpmn-js-questions/issues/3)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [11 : 操作过程中报错：TypeError: cannot read property 'isGeneric' of undefined](https://github.com/miyuesc/bpmn-js-questions/issues/2)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  ### [12 : 元素创建时ID生成规则如何修改](https://github.com/miyuesc/bpmn-js-questions/issues/1)

> ❓ Questioner: [Accccccccc](https://github.com/Accccccccc)
>
> ✅ This question has been solved.


## 二、bpmn-js 常用工具库说明

### (一) bpmn-io 官方工具

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

#### 11. [bpmn-js-bpmnlint](https://github.com/bpmn-io/bpmn-js-bpmnlint)

bpmn 流程图校验结果可视化插件，必须搭配 [bpmnlint](https://github.com/bpmn-io/bpmnlint) 使用，bpmn-io 官方团队开发维护。

### (二) 作者（MiyueFE）工具

#### 1. [diagram-js-grid-bg](https://github.com/miyuesc/diagram-js-grid-bg)

编辑器画布区域 **网格背景**，基于官方 diagram-js-grid，MiyueFE 开发维护。

#### 2. [diagram-js-accordion-palette](https://github.com/miyuesc/diagram-js-accordion-palette)

支持折叠和展开分组的 Palette 组件，与默认 Palette 互斥，MiyueFE 开发维护。

#### 3. [diagram-js-context-pad](https://github.com/miyuesc/diagram-js-context-pad)

优化分组显示和交互的 ContextPad 组件，与默认 ContextPad 互斥，MiyueFE 开发维护。

#### 4. [bpmn-js-i18n-zh](https://github.com/miyuesc/bpmn-js-i18n-zh)

bpmn-js 编辑器，以及官方属性面板（Camunda 和 Zeebe）中文翻译，MiyueFE 开发维护。

### (三) 其他

#### 1. [bpmn-js-task-resize](https://github.com/ElCondor1969/bpmn-js-task-resize)

bpmn-js 编辑 事件及任务节点 的 resize 支持，ElCondor1969 开发维护 (扩展 BpmnRules 的 resize 规则即可，不建议直接使用该库，已多年没有代码更新)。