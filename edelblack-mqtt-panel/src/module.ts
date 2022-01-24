import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'mqttServ',
      name: 'Server',
      description: 'WebSocket endpoint for the MQTT server',
      defaultValue: 'wss://localhost:9001/wss',
    }) 
    .addTextInput({
      path: 'listenTopic',
      name: 'Listen topic',
      description: 'Topic to listen to',
      defaultValue: 'edelblack/mqtt/panel/listen'
    })
    .addTextInput({
      path: 'publishTopic',
      name: 'Publish topic',
      description: 'Topic where the data will be published',
      defaultValue: 'edelblack/mqtt/panel/publish'
    })
    .addBooleanSwitch({
      path: 'publishRetain',
      name: 'Retain',
      description: 'Send the data as retained',
      defaultValue: false,
    })
    .addNumberInput({
      path: 'publishQos',
      name: 'QOS',
      description: 'QOS for the sent data',
      defaultValue: 0,
      settings: {
        min: 0,
        max: 2,
        step: 1,
        integer: true
      }
    })
    .addBooleanSwitch({
      path: 'waitBeforePublish',
      name: 'Prevent publishing until data arrived',
      defaultValue: true,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});
