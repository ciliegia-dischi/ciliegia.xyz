import Pen from '../../Pen';
import Caption from '../../Caption';
import { SN1, SN3 } from './Nav';

export default function Main() {
  return (
    <div className="panel-container">
      <Pen id="spaceship-buttons" title="Spaceship buttons">
        <SN1 />
        <SN3 />
      </Pen>
      <Caption>
        Using pseudo-elements to simulate a gliding border.
      </Caption>
    </div>
  );
}
