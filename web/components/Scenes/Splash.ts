import * as THREE from 'three'

import { Control } from '../Control';
import { IScene } from '../Interface'
import { Main } from '../Main'

export class SplashScene implements IScene {

  camera: any;
  control: Control
  scene: any;


  constructor(public _main: Main) {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(65, window.devicePixelRatio, 0.1, 2000)

    this.control = new Control(this)
  }
  
  _mouseEvent(hotkey: string) { this._main.next() }

  tryLoadTexture(_name: string) { }
  
  update(): void {}
  render(): void {}

  down(): void {
    console.log('down splash')
  }
  up(): void {
    console.log('up splash')    
    this._main.next()    
  }
}