<script lang="ts">
    import ChartsTemplate from "./charts-template.svelte";
    import sales from "$lib/sales.json" assert {type: "json"};


    let groupedSales: {[date:string]: number} = {};

    sales.forEach(transaction => {
        const date = transaction.purchase_date;
        const items_sold = transaction.items_bought;

        if (!groupedSales[date]) {
            groupedSales[date] = 0;
        }

        groupedSales[date] += items_sold;
    });

    const sortedDates = Object.keys(groupedSales).sort();
    
    // Helper function to perform the random calculation
    function calculateRandomizedData(data: number, offset: number = 0): number {
        return data - Math.random() * (data + offset);
    }

    // This is meaningless data
    const dataToCalculate = sortedDates.reduce((sum, sales) => sum + sales, 0);

    // Generate three sets of randomized data
    const dataOne = calculateRandomizedData(dataToCalculate);
    const dataTwo = calculateRandomizedData(dataToCalculate, 10000);
    const dataThree = calculateRandomizedData(dataToCalculate, 10000);

    // Calculate the percentage change between dataOne and a new random value
    let percentageChangeOne = 0;
    let percentageChangeTwo = 0;
    let percentageChangeThree = 0;

    if (previousTotal !== 0) {
        percentageChangeOne = calculatePercentageChange(dataOne, previousTotal);
        percentageChangeTwo = calculatePercentageChange(dataTwo, previousTotal);
        percentageChangeThree = calculatePercentageChange(dataThree, previousTotal);
    }



    const labels = sortedDates; //Dates as labels
    const f_data = sortedDates.map(date => groupedSales[date]); // Corresponding data for each sorted date

    const data = {
        labels: labels,
        datasets: [{
            label: 'Items Sold',
            data: f_data,
            fill: false,
            borderColor:
            'rgb(255, 99, 132)',
            backgroundColor:
            'rgba(255, 99, 132, 0.2)',
            tension: 0.1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Items Sold'
                },
                min: 0 // Ensure the y-axis starts from 0
            }
        }
    };

</script>

<div class="card bg-neutral w-full h-auto shadow-xl card-bordered">
    <div class="card-body">
        <h4 class="card-title">Customers Aquisitions</h4>
    <div>
        <div>
            <h3>Users</h3>
            <h1>{}</h1>
            <span></span>
        </div>
    </div>

    <div>
        <ChartsTemplate type="line" {data} {options}/>
    </div>
</div>




