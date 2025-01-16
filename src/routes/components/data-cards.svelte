<script>
    let data_title, data, percentage_badge = $props(); 
</script>

<div class="card bg-neutral shadow-xl card-bordered w-72">
    <div class="card-body">

        <h4 class="card-title">{data_title}</h4>
        <h2>
            number
            <span class="badge badge-primary">{percentage_badge}</span>
        </h2>
        <p>{percentage_badge}, more than last week.</p>
    </div>
</div>