<script lang="ts">
    import ChartsTemplate from "./charts-template.svelte";
    import sales from "$lib/sales.json" assert {type: "json"};

    let groupedSales: {[date:string]: number} = {};

    sales.forEach(transaction => {
        const paymentMethod = transaction.payment_method;
        const total = transaction.total_spent;

        if (!groupedSales[paymentMethod]){
            groupedSales[paymentMethod] = 0;
        }

        groupedSales[paymentMethod] += total;
    });

    const labels = Object.keys(groupedSales);
    const f_data = Object.values(groupedSales);

    const data = {
        labels: labels,
        datasets: [{
            label: 'Sales by Payment Methods',
            data: f_data,
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(255, 159, 255)',
            ]
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',  // Position the legend at the top
                labels: {
                    font: {
                        size: 14  // Customize the font size for the legend labels
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: any) => {
                        return `${tooltipItem.label}: $${tooltipItem.raw.toFixed(2)}`;
                    }
                }
            }
        },
        scales: {
            r: {
                angleLines: {
                    display: true
                },
                suggestedMin: 0,  // Minimum value for the radial scale (optional)
                suggestedMax: Math.max(...f_data) + 10 // Optional: setting max scale for better visualization
            }
        }
    };

</script>

<div class="card w-full bg-base-300 h-auto shadow-xl card-bordered">
    <div class="card-body">
        <h4 class="card-title">Payment Methods</h4>
        <ChartsTemplate type="polarArea" {data} {options}/>
    </div>
</div>