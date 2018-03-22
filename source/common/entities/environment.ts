
import {Mesh, ShadowGenerator, SpotLight} from "babylonjs"

import {GameContext} from "../game"
import Box from "../../physics/bodies/box"
import {loadBabylonFile} from "../../susa"
import {Entity, StateEntry, Message} from "../../monarch"

export interface EnvironmentEntry extends StateEntry {
	type: "Environment"
	asset: string
}

export default class EnvironmentEntity extends Entity<GameContext, EnvironmentEntry> {

	constructor(o) {
		super(o)
		const {scene} = this.context
		loadBabylonFile(scene, this.entry.asset)
			.then(() => {
				const plane = <Mesh> scene.getMeshByName("Plane")
				const torus = <Mesh> scene.getMeshByName("Torus")
				const icosphere = <Mesh> scene.getMeshByName("Icosphere")
				const light = <SpotLight> scene.getLightByName("Spot")
				// const planeBoundingInfo = plane.getBoundingInfo()

				// const body: Box = this.context.physics.addBox({
				// 	physique: {
				// 		mass: 0,
				// 		size: [100, 0.01, 100]
				// 	},
				// 	bearings: {
				// 		position: [0, 0, 0],
				// 		rotation: [0, 0, 0, 0]
				// 	}
				// })

				const shadowGenerator = new ShadowGenerator(1024, light)
				const shadowCasters = [torus, icosphere]
				const shadowReceivers = [plane, torus, icosphere]
				shadowGenerator.getShadowMap().renderList.push(...shadowCasters)
				plane.receiveShadows = true
				shadowGenerator.usePoissonSampling = true
			})
	}

	destructor() {}
}
