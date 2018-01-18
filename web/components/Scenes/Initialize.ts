import * as THREE from 'three'

import { IScene } from '../Interface'
import { Main } from '../Main'
import { Control } from '../Control';

export class InitializeScene implements IScene {

  camera: any;
  control: Control
  scene: any;


  constructor(public _main: Main) {
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(65, window.devicePixelRatio, 0.1, 2000)

    this.control = new Control(this)
  }
  
  _keyboadEvent(hotkey: string) { }

  public _mouseEvent(hotkey: string) { this._main.next() }

  tryLoadTexture(_name: string) {
  }
  
  update(): void {}
  render(): void {}

  down(): void {
    console.log('down')
  }
  up(): void {
    console.log('up')    
  }
}