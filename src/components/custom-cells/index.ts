import { Current } from './Current';
import { Installation } from './Installation';

export function registerAppNodes() {
  Installation.register();
  Current.register();
}
