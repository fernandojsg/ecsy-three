import * as THREE from "https:/github.com/mozillareality/ecsy-three#readme/web_modules/three.js";
import {Component} from "https:/github.com/mozillareality/ecsy-three#readme/web_modules/ecsy.js";
import * as ThreeTypes from "../../core/Types.js";
export class Rotation extends Component {
}
Rotation.schema = {
  rotation: {
    default: new THREE.Vector3(),
    type: ThreeTypes.Vector3Type
  }
};
