<!--This is a generic chart component its options must be passed down as props-->
<script>
    import { onMount } from "svelte";
    import { Chart } from "chart.js/auto";
    import { onDestroy } from "svelte";


    let {type, data, options} = $props()

    let chartCanvas = 0
    let chartInstance = 0

    onMount(() => {
        if (chartCanvas) {
            chartInstance = new Chart(chartCanvas, {
                type,
                data,
                options
            })
        }

        return () =>{
            if (chartInstance){
                chartInstance.destroy();
            }
        }
    });

</script>

<div class="card">
    <canvas bind:this={chartCanvas}></canvas>
</div>