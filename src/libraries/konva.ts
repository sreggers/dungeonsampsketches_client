import Konva from "konva";
import type { Layer } from "konva/lib/Layer";
import type { Line } from "konva/lib/shapes/Line";
import type { Stage } from "konva/lib/Stage";

export class Canvas {
    stage: Stage;
    drawingLayer: Layer | null = null;
    constructor(canvasContainer: HTMLElement) {
        this.stage = new Konva.Stage({
            container: canvasContainer.id,
            width: canvasContainer.clientWidth,
            height: canvasContainer.clientHeight,
        });
    }
    enableFreeDrawing() {
        let isPaint = false;
        let drawing: Line;

        const layer = new Konva.Layer();
        this.stage.add(layer);
        this.drawingLayer = layer;

        this.stage.on('mousedown touchstart', () => {
            if (this.drawingLayer !== null) {
                isPaint = true;
                var pos = this.stage.getPointerPosition()!;
                drawing = new Konva.Line({
                    stroke: '#df4b26',
                    strokeWidth: 5,
                    globalCompositeOperation: 'source-over',
                    // round cap for smoother lines
                    lineCap: 'round',
                    lineJoin: 'round',
                    // add point twice, so we have some drawings even on a simple click
                    points: [pos.x, pos.y, pos.x, pos.y],
                });
                this.drawingLayer.add(drawing);
            }
        });

        this.stage.on('mouseup touchend', () => {
            isPaint = false;
        });

        // and core function - drawing
        this.stage.on('mousemove touchmove', (e) => {
            if (!isPaint) {
                return;
            }

            // prevent scrolling on touch devices
            e.evt.preventDefault();

            const pos = this.stage.getPointerPosition()!;
            var newPoints = drawing.points().concat([pos.x, pos.y]);
            drawing.points(newPoints);
        });
    }

}