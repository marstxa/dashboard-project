<script lang="ts">
    import dataForCards from "$lib/data-for-cards.json" assert {type: "json"};
</script>

{#each dataForCards as data}
    <div class="card bg-base-200 shadow-xl card-bordered w-96 text-base">
        <div class="card-body">
            <h4 class="card-title text-sm opacity-50">{data.title}</h4>
            <h2 class="font-rubik text-lg font-bold">
                {data.number}
                <span class="badge badge-success badge-sm text-green-100">{data.percentage}</span>
            </h2>
            <p class="text-sm"><span class="text-success font-bold">{data.info}</span>, more than last week.</p>
        </div>
    </div>
{/each}