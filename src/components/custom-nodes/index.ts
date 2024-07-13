import { Current } from './Current';
import { Installation } from './Installation';
import { Park } from './Park';

export function registerAppNodes() {
  Installation.register();
  Current.register();
  Park.register();
}
