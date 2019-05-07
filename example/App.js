/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, PureComponent} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View
} from 'react-native';

import {
  DragResizeBlock,
  DragResizeContainer,

  AXIS_X,
  AXIS_Y,
  AXIS_ALL,

  CONNECTOR_TOP_LEFT,
  CONNECTOR_TOP_MIDDLE,
  CONNECTOR_TOP_RIGHT,
  CONNECTOR_MIDDLE_RIGHT,
  CONNECTOR_BOTTOM_RIGHT,
  CONNECTOR_BOTTOM_MIDDLE,
  CONNECTOR_BOTTOM_LEFT,
  CONNECTOR_MIDDLE_LEFT,
  CONNECTOR_CENTER,
} from 'react-native-drag-resize';

class Container extends PureComponent {

  render() {
    const {
      children,
      title,
      onInit,
    } = this.props;

    return (
      <View
        style={styles.container}
      >
        <Text
          style={styles.title}
        >
          {title}
        </Text>

        <DragResizeContainer
          style={styles.canvas}
          onInit={onInit}
        >
          {children}
        </DragResizeContainer>
      </View>
    );
  }
}

const ON_RESIZE_START = 0;
const ON_RESIZE = 1;
const ON_RESIZE_END = 2;
const ON_DRAG_START = 3;
const ON_DRAG = 4;
const ON_DRAG_END = 5;

export default class App extends Component {

  constructor(props) {
    super(props);

    const defaultLimitation = {
      x: 0,
      y: 0,
      w: 0,
      h: 0,
    };

    this.state = {
      currentEvent: null,
      selectedBlock: null,
      limitation1: {...defaultLimitation},
      limitation2: {...defaultLimitation},
      limitation3: {...defaultLimitation},
      limitation4: {...defaultLimitation},
      limitation5: {...defaultLimitation},
    };
  }

  callEventHandler(event, message) {
    if (this.state.currentEvent !== event) {
      this.setState(() => {
        this.state.currentEvent = event;
        return this.state;
      });
      ToastAndroid.show(message, ToastAndroid.SHORT);
    }
  }

  renderExample1 = () => {
    const {
      limitation1,
    } = this.state;

    return (
      <Container
        title="Default props"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation1 = limitation;
            return this.state;
          });
        }}
      >
        <DragResizeBlock
          x={0}
          y={0}
          w={80}
          h={80}
          limitation={limitation1}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </DragResizeBlock>
      </Container>
    );
  }

  renderExample2 = () => {
    const {
      limitation2,
    } = this.state;

    return (
      <Container
        title="Handle events"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation2 = limitation;
            return this.state;
          });
        }}
      >
        <DragResizeBlock
          x={0}
          y={0}
          w={80}
          h={80}
          limitation={limitation2}
          onPress={(event) => {
            ToastAndroid.show('onPress', ToastAndroid.SHORT);
          }}
          onResizeStart={(coord) => {
            this.callEventHandler(ON_RESIZE_START, 'onResizeStart');
          }}
          onResize={(coord) => {
            this.callEventHandler(ON_RESIZE, 'onResize');
          }}
          onResizeEnd={(coord) => {
            this.callEventHandler(ON_RESIZE_END, 'onResizeEnd');
          }}
          onDragStart={(coord) => {
            this.callEventHandler(ON_DRAG_START, 'onDragStart');
          }}
          onDrag={(coord) => {
            this.callEventHandler(ON_DRAG, 'onDrag');
          }}
          onDragEnd={(coord) => {
            this.callEventHandler(ON_DRAG_END, 'onDragEnd');
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </DragResizeBlock>
      </Container>
    );
  }

  renderExample3 = () => {
    const {
      limitation3,
    } = this.state;

    return (
      <Container
        title="Axis limitation"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation3 = limitation;
            return this.state;
          });
        }}
      >
        <DragResizeBlock
          x={0}
          y={0}
          w={80}
          h={80}
          limitation={limitation3}
          axis={AXIS_X}
          connectors={[
            CONNECTOR_MIDDLE_RIGHT,
            CONNECTOR_MIDDLE_LEFT,
            CONNECTOR_CENTER,
          ]}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </DragResizeBlock>

        <DragResizeBlock
          x={80}
          y={80}
          w={80}
          h={80}
          limitation={limitation3}
          axis={AXIS_Y}
          connectors={[
            CONNECTOR_TOP_MIDDLE,
            CONNECTOR_BOTTOM_MIDDLE,
            CONNECTOR_CENTER,
          ]}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
            }}
          />
        </DragResizeBlock>
      </Container>
    );
  }

  renderExample4 = () => {
    const {
      limitation4,
    } = this.state;

    return (
      <Container
        title="Disable resize and drag functional"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation4 = limitation;
            return this.state;
          });
        }}
      >
        <DragResizeBlock
          x={0}
          y={0}
          w={80}
          h={80}
          limitation={limitation4}
          isDraggable={false}
          connectors={[
            CONNECTOR_TOP_LEFT,
            CONNECTOR_TOP_MIDDLE,
            CONNECTOR_TOP_RIGHT,
            CONNECTOR_MIDDLE_RIGHT,
            CONNECTOR_BOTTOM_RIGHT,
            CONNECTOR_BOTTOM_MIDDLE,
            CONNECTOR_BOTTOM_LEFT,
            CONNECTOR_MIDDLE_LEFT,
          ]}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </DragResizeBlock>

        <DragResizeBlock
          x={80}
          y={80}
          w={80}
          h={80}
          limitation={limitation4}
          isResizable={false}
          connectors={[
            CONNECTOR_CENTER,
          ]}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
            }}
          />
        </DragResizeBlock>
      </Container>
    );
  }

  renderExample5 = () => {
    const {
      selectedBlock,
      limitation5,
    } = this.state;

    const BLOCK_0 = 0;
    const BLOCK_1 = 1;

    return (
      <Container
        title="Select block"
        onInit={(limitation) => {
          this.setState(() => {
            this.state.limitation5 = limitation;
            return this.state;
          });
        }}
      >
        <DragResizeBlock
          x={0}
          y={0}
          w={80}
          h={80}
          limitation={limitation5}
          isDisabled={BLOCK_0 !== selectedBlock}
          onPress={() => {
            this.setState(() => {
              this.state.selectedBlock = BLOCK_0;
              return this.state;
            })
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'red',
            }}
          />
        </DragResizeBlock>

        <DragResizeBlock
          x={80}
          y={80}
          w={80}
          h={80}
          limitation={limitation5}
          isDisabled={BLOCK_1 !== selectedBlock}
          onPress={() => {
            this.setState(() => {
              this.state.selectedBlock = BLOCK_1;
              return this.state;
            })
          }}
        >
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'green',
            }}
          />
        </DragResizeBlock>
      </Container>
    );
  }

  render() {
    return (
      <View style={styles.background}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          {this.renderExample1()}
          {this.renderExample2()}
          {this.renderExample3()}
          {this.renderExample4()}
          {this.renderExample5()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    paddingBottom: 50,
  },
  container: {
    zIndex: 999,
    flexDirection: 'column',
    width: '100%',
    padding: 20,
    height: 220,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  canvas: {
    width: '100%',
    height: '100%',
    backgroundColor: '#D1D5DA',
    marginTop: 4,
  },
});
