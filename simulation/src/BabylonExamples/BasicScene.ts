import { Engine, FreeCamera, HemisphericLight, MeshBuilder, Scene, Vector3 } from "@babylonjs/core"

export class BasicScene {
	scene: Scene;

	engine: Engine;

	constructor(private canvas: HTMLCanvasElement) {
		this.engine = new Engine(this.canvas, true);
		this.scene = this.createScene();

		this.engine.runRenderLoop(() => {
			this.scene.render();
		})
	}

	createScene(): Scene {
		const scene = new Scene(this.engine);

		const camera = new FreeCamera('camera', new Vector3(0, 1, -5), this.scene);
		camera.attachControl();

		const light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene);
		light.intensity = 0.5;

		const ground = MeshBuilder.CreateGround('ground', {
			width: 10,
			height: 10,
		}, this.scene);

		const ball = MeshBuilder.CreateSphere('sphere', {
			diameter: 1,
		}, this.scene);
		ball.position = new Vector3(0, 1, 0);

		return scene;
	}
}