# bpmn-js 常见问题和解决方案及工具库说明

> 如果有新的问题，可以点击 [这里](https://github.com/miyuesc/bpmn-js-questions/issues/new/choose) 创建新的 issue 进行讨论。
> 
> bpmn-js 交流群附属资料：https://juejin.cn/post/7304831120710434868

> **上次更新时间(UTC)：2025-01-26 00:50:22**

## 一、项目与书籍推荐

#### 1. 开源项目 [eagle-flow](https://gitee.com/lwj/eagle-flow)

> 钉钉风格的流程图编辑器，预览地址：[https://designer.bpmport.com/eagle/](https://designer.bpmport.com/eagle/)，纯前端实现 xml 生成。

#### 2. 开源项目 [bpmn-process-designer](https://github.com/miyuesc/bpmn-process-designer)

> 核心 bpmn-js 使用与扩展示例

#### 3. 商业项目 [Flowable Designer](https://designer.bpmport.com/designer/), [Flowable Viewer](https://designer.bpmport.com/viewer/), [Activiti Designer](https://designer.bpmport.com/activiti/)

> 与 Flowable 流程引擎深度融合，结合实际业务场景和使用方式，对 bpmn-js 进行了深度改造，提供了更多的功能和特性。
> 
> 提供更加强大的工具栏与物料面板、属性配置，重构 lint 模块与 simulation 模块，实现更加适合国内用户的 UI 界面和交互方式。
>
> 详情请查看 [官网](https://www.bpmport.com/products)

#### 4. 相关书籍

> [《深入Activiti流程引擎：核心原理与高阶实战》- 贺波](https://item.jd.com/13928958.html)
> 
> [《深入Flowable流程引擎：核心原理与高阶实战》- 贺波](https://item.jd.com/14804836.html)
> 
> Activiti 引擎与 Flowable 引擎的核心原理与高阶实战，详细介绍了 Activiti 与 Flowable 引擎的核心原理，以及如何使用 Activiti 与 Flowable 引擎进行流程设计、流程部署、流程执行等操作。



## 二、bpmn-js 源码解析和实践


  #### [01-开篇：重新认识 bpmn.js 与 BPMN 规范](https://juejin.cn/post/7405471008600686633)


  > 在正式开始介绍 bpmn.js 源码之前，我想先向大家介绍一下与 bpmn.js 相关的一些概念。根据官网介绍，bpmn.js 作为**符合 BPMN 2.0 标准 XML 文件**的 **阅读器
  #### [02-源码篇1：Injector 依赖注入模式的实现](https://juejin.cn/post/7429243880883322930)


  > 作为 bpmn.js 与 diagram.js 的模块化系统的底层依赖，Injector 通过 依赖注入 的形式完美分开了不同功能模块之前的核心代码，保证使用者 只需要了解所需依赖的功能，然后专注于各
  #### [03-源码篇2：diagram.js 简介与EventBus全局事件总线](https://juejin.cn/post/7431760347708670003)


  > 总的来说，diagram.js 虽然是作为 bpmn.js 的底层项目，用来提供绘图能力与交互能力，并实现了一些工具函数；但是 本身并没有实现太多功能，只是作为初始化依赖注入器与基础模块的入口，通过
  #### [04-源码篇3：Canvas 基础画布与元素处理模块](https://juejin.cn/post/7451781444571742218)


  > 在上一节的 diagram.js 简介部分，有提到过我们在 new 一个 Diagram 实例时，实际是将配置项和 CoreModule 核心模块放在一起之后用来 初始化依赖注入系统并绑定到 Diag
  #### [05-源码篇4：Factory&Registry - 创建与注册-图形与对象的绑定机制](https://juejin.cn/post/7451984387443392562)


  > bpmn-js 源码解析和实践：源码篇4 diagram-js 的 ElementFactory 与 ElementRegistry 解析。
  #### [06-源码篇5：CommandStack 命令处理与记录的栈](https://juejin.cn/post/7454960025037783091)


  > 《bpmn-js 源码解析和实践》第六篇：CommandStack 命令处理与记录的栈。解析了 `diagram-js` 的核心模块之一 —— `CommandStack` 命令记录栈的部分逻辑。
  #### [07-源码篇6：Featrues 体验优化与功能扩展（一）](https://juejin.cn/post/7457866467552641051)


  > 上一节中有提到过，features 目录中，主要是一些 功能扩展模块，包含了 palette 画板、contextPad 上下文菜单等，此次就用两章的篇幅来讲一下这里面的一些常用模块（bpmn-js 


## 三、常见问题与解决方案


  #### [1 : 如何阻止元素被删除](https://github.com/miyuesc/bpmn-js-questions/issues/13)

> ❓ Questioner: [LouisXuan](https://github.com/LouisXuan)
>
> ✅ This question has been solved.


  #### [2 : 自定义组件显示UI](https://github.com/miyuesc/bpmn-js-questions/issues/11)

> ❓ Questioner: [coder319](https://github.com/coder319)
>
> ✅ This question has been solved.


  #### [3 : 如何美化 lint 错误提示？](https://github.com/miyuesc/bpmn-js-questions/issues/10)

> ❓ Questioner: [y4n6](https://github.com/y4n6)
>
> ✅ This question has been solved.


  #### [4 : importXml时出现TypeError: Cannot read properties of undefined (reading 'root-0')](https://github.com/miyuesc/bpmn-js-questions/issues/9)

> ❓ Questioner: [Xnwf](https://github.com/Xnwf)
>
> ✅ This question has been solved.


  #### [5 : 希望 Palette 始终展示双列](https://github.com/miyuesc/bpmn-js-questions/issues/8)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [6 : Modeler创建后无法从Palette中创建元素](https://github.com/miyuesc/bpmn-js-questions/issues/7)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [7 : 使用 importXML 导入报错 “no diagram to display”](https://github.com/miyuesc/bpmn-js-questions/issues/6)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [8 : 只想使用支持缩放和拖拽的预览模式](https://github.com/miyuesc/bpmn-js-questions/issues/5)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [9 : 使用PropertiesPanel时ID栏出现 “ID must be unique.” 错误](https://github.com/miyuesc/bpmn-js-questions/issues/4)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)

  #### [10 : 报错：Uncaught Error: unknown type [xxx:xxx]](https://github.com/miyuesc/bpmn-js-questions/issues/3)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [11 : 操作过程中报错：TypeError: cannot read property 'isGeneric' of undefined](https://github.com/miyuesc/bpmn-js-questions/issues/2)

> ❓ Questioner: [miyuesc](https://github.com/miyuesc)
>
> ✅ This question has been solved.


  #### [12 : 元素创建时ID生成规则如何修改](https://github.com/miyuesc/bpmn-js-questions/issues/1)

> ❓ Questioner: [Accccccccc](https://github.com/Accccccccc)
>
> ✅ This question has been solved.


## 四、bpmn-js 常用工具库说明

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
