type publishQos= 0 | 1 | 2;

export interface SimpleOptions {
  mqttServ: string;
  listenTopic: string;
  canPublish: boolean;
  publishTopic: string;
  publishRetain: boolean;
  publishQos: publishQos;
  waitBeforePublish: boolean;
}
