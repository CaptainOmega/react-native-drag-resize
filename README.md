# react-native-drag-resize

React Native component for draggable and resizable manipulation.

## Show Cases

![demo.gif](demo.gif)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
  + [Basic props of `DragResizeBlock`](#basic-props-of-dragresizeblock)
  + [Basic props of `DragResizeContainer`](#basic-props-of-dragresizecontainer)
- [Run example](#run-example)

### Installation

```bash
$ npm i react-native-drag-resize --save
```

### Basic Usage

- Install `react-native-drag-resize` package to project 

- Import module to file

```jsx
import {
  DragResizeBlock,
} from 'react-native-drag-resize';
```

- Then, use component like this:

```jsx
<DragResizeBlock
  x={0}
  y={0}
>
  <View
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
    }}
  />
</DragResizeBlock>
```

You can watch more examples in `example` directory

### Properties

#### Basic props of `DragResizeBlock`

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| x | 0 | `number` | `x` coordinate relative of parent element. |
| y | 0 | `number` | `y` coordinate relative of parent element. |
| w | 100 | `number` | Component width in pixels. |
| h | 100 | `number` | Component height in pixels. |
| minW | 50 | `number` | Component minimal width in pixels. |
| minH | 50 | `number` | Component minimal height in pixels. |
| zIndex | 1 | `number` | Component `z` index. |
| axis | all | `string` | Allow axis for component manipulation.|
| limitation | null | `object` | Limit area for manipulation. Object format `{x: number, y: number, w: number, h: number}`. Use `DragResizeContainer` component for calculate limitation. See code in example. |
| isDisabled | false | `bool` | Disable component manipulation. Hide connectors. |
| isDraggable | true | `bool` | Allow drag component manipulation. |
| isResizable | true | `bool` | Allow resize component manipulation. |
| connectors | ['tl', 'tm', 'tr', 'mr', 'br', 'bm', 'bl', 'ml', 'c'] | `array` | Show available connectors. |
| onPress | - | `function` | Handle press event. Input argument `event`. |
| onDragStart | - | `function` | Handle drag start event. Input argument `[x, y]`. |
| onDrag | - | `function` | Handle drag event. Input argument `[x, y]`. |
| onDragEnd | - | `function` | Handle drag end event. Input argument `[x, y]`. |
| onResizeStart | - | `function` | Handle resize start event. Input argument `[x, y]`. |
| onResize | - | `function` | Handle resize event. Input argument `[x, y]`. |
| onResizeEnd | - | `function` | Handle resize end event. Input argument `[x, y]`. |

#### Basic props of `DragResizeContainer`

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| onInit | - | `function` | Return container parameters `{x, y, w, h}`, after component initialization. You can send this object to `limitation` property of `DragResizeBlock` component. |
| style | - | `style` | Custom styles. |

### Run example

To run example call this commands in terminal:

```bash
$ cd example
$ npm i
$ react-native run-android
$ react-native run-ios
```

#### Notice!

If your `npm` not support symlinks, then call this code from repository root directory:

```bash
$ cp -alf $PWD example/node_modules/
$ rm -R example/node_modules/react-native-drag-resize/example
$ cd example
$ react-native run-android
$ react-native run-ios
``` 
