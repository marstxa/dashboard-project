<script lang="ts">
    import ChartsTemplate from "./charts-template.svelte";
    import sales from "$lib/sales.json" assert {type: "json"};
    
    let groupedSales: {[x:string]:number} = {};

    sales.forEach(transaction => {
        const location = transaction.location;
        const itemSold = transaction.items_bought;

        if (!groupedSales[location]){
            groupedSales[location] = 0
        }

        groupedSales[location] += itemSold;
    });

    let labels = Object.keys(groupedSales)
    let f_data = Object.values(groupedSales)

    const data = {
        labels: labels,
        datasets: [{
            label: 'Data',
            data: f_data,
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
            ],
            borderWidth: 1
    }]
    };
    
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
                labels: {
                }
            },
            title: {
                display: true,
                text: ''
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: '',
                },
                ticks: {
                },
                grid: {
                    color: '#BBBBBB'
                }
            },
            y: {
                title: {
                    display: true,
                    text: '',
                },
                ticks: {
                },
                grid: {
                    color: '#BBBBBB' 
                }
            },
        }
    }

</script>

<div class="card w-5/12 font-rubik h-full card-bordered bg-base-300">
    <div class="card-body">
        <h4 class="card-title mb-5 text-sm font-semibold">Top Locations</h4>
        <ChartsTemplate type="bar" {data} {options} />
    </div>
</div>

