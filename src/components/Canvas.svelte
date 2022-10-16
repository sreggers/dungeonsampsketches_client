<script type="ts">
    import { onMount } from "svelte";
    import { Canvas } from "../libraries/konva";

    export let id: string;

    onMount(() => {
        const canvasContainer = document.getElementById(id)!;
        const canvas = new Canvas(canvasContainer);
        canvas.enableFreeDrawing();
    });
</script>

<div id={id} class="canvasWrapper"></div>

<style>
    .canvasWrapper {
        height: 200px;
        width: 500px;
        border: 2px solid black;
        border-radius: 4px;
    }
</style>

