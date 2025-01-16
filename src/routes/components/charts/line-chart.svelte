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
        let finalResult = data - Math.random() * (data + offset);
        return parseFloat(finalResult.toFixed());
    }

    //Helper function to perform percentages
    const calculatePercentageChange = (data, total) =>{
        let finalResult = ((total - data) / data) * 100
        return parseFloat(finalResult.toFixed(2))
    }

    //Helper function to detect negative or positive numbers
    const isPositive = percentage => {
        if (percentage < 0){
            return false
        } else {
            return true
        }
    };

    // This is meaningless data
    const f_data = sortedDates.map(date => groupedSales[date]); // Corresponding data for each sorted date
    const dataToCalculate = f_data.reduce((sum, sales) => sum + sales, 0);

    // Generate three sets of randomized data
    const dataOne = calculateRandomizedData(dataToCalculate);
    const dataTwo = calculateRandomizedData(dataToCalculate, 10000);
    const dataThree = calculateRandomizedData(dataToCalculate, 5000);

    // Calculate the percentage change between dataOne and a new random value
    let percentageChangeOne = 0;
    let percentageChangeTwo = 0;
    let percentageChangeThree = 0;

    if (dataOne !== 0 && dataTwo !== 0 && dataThree !== 0) {
        percentageChangeOne = calculatePercentageChange(dataOne, dataToCalculate);
        percentageChangeTwo = calculatePercentageChange(dataTwo, dataToCalculate);
        percentageChangeThree = calculatePercentageChange(dataThree, dataToCalculate);
    }



    const labels = sortedDates; //Dates as labels

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

<div class="card bg-base-300 shadow-xl card-bordered">
    <div class="card-body">
        <h4 class="card-title">Customers Aquisitions</h4>
    <div class="flex flex-row items-start justify-between">
        <div class="flex flex-col items-center w-1/3">
            <h3>Users</h3>
            <h1>{dataOne}</h1>
            {#if isPositive(percentageChangeOne) === true}
            <span class="badge badge-success">{"+" + percentageChangeOne + "%"}</span>
            {:else}
            <span class="badge badge-error">{percentageChangeOne + "%"}</span>
            {/if}
        </div>
        <div class="flex flex-col items-center w-1/3 border-solid border-x-2 border-x-neutral-50 border-opacity-10">
            <h3>Sessions</h3>
            <h1>{dataTwo}</h1>
            {#if isPositive(percentageChangeTwo) === true}
            <span class="badge badge-success">{"+" + percentageChangeTwo + "%"}</span>
            {:else}
            <span class="badge badge-error">{percentageChangeTwo + "%"}</span>
            {/if}
        </div>
        <div class="flex flex-col items-center w-1/3">
            <h3>New Customers</h3>
            <h1>{dataThree}</h1>
            {#if isPositive(percentageChangeThree) === true}
            <span class="badge badge-success">{"+" + percentageChangeThree + "%"}</span>
            {:else}
            <span class="badge badge-error">{percentageChangeThree + "%"}</span>
            {/if}
        </div>
    </div>

    <div>
        <ChartsTemplate type="line" {data} {options}/>
    </div>
    </div>
</div>




