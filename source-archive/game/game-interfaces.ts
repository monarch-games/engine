
import * as babylon from "@babylonjs/core"
import * as cannon from "cannon"

import {MainMenuStore} from "../core/overlay/stores/main-menu-store.js"
import {OverlayStore} from "../core/overlay/stores/overlay-store.js"
import {StandardContext, ConductorOptions} from "../core/interfaces.js"

export interface GameContext {
	window: Window
	scene: babylon.Scene
	engine: babylon.Engine
	canvas: HTMLCanvasElement
	physicsWorld: cannon.World
	overlayStore: OverlayStore
	mainMenuStore: MainMenuStore
}

export type Context = StandardContext & GameContext

export interface GameOptions extends ConductorOptions {
	maxSlowTickRate: number
	maxLogicTickRate: number
	maxHyperTickRate: number
	canvas: HTMLCanvasElement
	overlayElement: HTMLDivElement
	gravity: [number, number, number]
}
