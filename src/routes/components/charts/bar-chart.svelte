<script lang="ts">
    import ChartsTemplate from "./charts-template.svelte";
    import sales from "$lib/sales.json" assert {type: "json"};
    
    const ageGroups = [
        {name: "Under 18", min: 0, max: 17},
        {name: "Under 18-25", min: 18, max: 25},
        {name: "Under 26-40", min: 26, max: 40},
        {name: "Under 41-60", min: 41, max: 60},
        {name: "Under 60+", min: 61, max: Infinity},
    ];

    let ageSales = Array(ageGroups.length).fill(0);

    // Calculate the total sales for each age group
    sales.forEach(transaction => {
        const age = transaction.age;
        const totalSpent = transaction.total_spent;
        
        // Determine which age group the person falls into
        for (let i = 0; i < ageGroups.length; i++) {
            const group = ageGroups[i];
            if (age >= group.min && age <= group.max) {
                ageSales[i] += totalSpent;  // Add totalSpent to the corresponding age group
                break;
            }
        }
    });

    let currentTotal = ageSales.reduce((sum, sales) => sum + sales, 0); // Calculate current total sales
    let previousTotal = Math.random() * currentTotal;
    let percentageChange = 0;
    let green: boolean = false;
    let bad: boolean = false;

    // Calculate the percentage change compared to the previous total
    if (previousTotal !== 0) {
        percentageChange = ((currentTotal - previousTotal) / previousTotal) * 100;
    }

    // Store result in the appropriate variable based on percentage change
    if (percentageChange >= 0) {
        green = true; // Positive or no change
        bad = false;
    } else {
        bad = true; // Negative change
        green = false;
    }

    // Optionally, store the current total as the previous total for the next comparison
    previousTotal = currentTotal;

    const data = {
        labels: ageGroups.map(group => group.name),
        datasets: [{
            label: 'Data',
            data: ageSales,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
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
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales by Age Group'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Age Group',
                },
                grid: {
                    color: '#BBBBBB'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Total Sales',
                },
                grid: {
                    color: '#BBBBBB' 
                }
            },
        }
    };

</script>

<div class="card bg-base-300 w-8/12 font-rubik h-full shadow-xl card-bordered">
    <div class="card-body">
        <h4 class="card-title text-sm font-semibold">Revenue Statistics</h4>
        <h2 class="text-6xl font-bold mt-3">
            {"$" + currentTotal.toFixed(2) + "K"}
            {#if green === true}
            <span class="ml-5 badge badge-sm badge-success text-white">{"+" + percentageChange.toFixed(2) + "%"}</span>
            {:else}
            <span class="ml-5 badge badge-sm badge-error text-white">{"-" + Math.abs(percentageChange).toFixed(2) + "%"}</span>
            {/if}
        </h2>
        <p class="text-sm opacity-50 mt-5">Total income this year</p>
    </div>
        <ChartsTemplate type="bar" {data} {options}/>
</div>
