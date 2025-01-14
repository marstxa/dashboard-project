<script>
    import ThemeController from "./theme-controller.svelte";
    import Avatar from "./avatar.svelte";
    import DataCards from "./data-cards.svelte";
    import Charts from "./charts/charts-template.svelte";
    import RecentOrdersCard from "./recent-orders-card.svelte";
    import BarChart from "./charts/bar-chart.svelte";
    import LineChart from "./charts/line-chart.svelte";
    import PolarArea from "./charts/polar-area.svelte";
    import HorizontalBarChart from "./charts/horizontal-bar-chart.svelte"
</script>

<!--Navbar with Sidebar-->
<div class="drawer overflow-hidden  ">
    <input type="checkbox" class="drawer-toggle" id="my-drawer-3">
    <div class="drawer-content flex flex-col">

        <!--Navbar-->
        <div class="navbar bg-base-300 w-full h-14">
            <div class="flex-none">
                <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </label>
            </div>
            <div class="mx-2 flex-1 px-2">
                <input type="text" placeholder="Search" class="input input-bordered md:w-auto decoration-none w-24">
            </div>

            <div class="hidden flex-none lg:block">
                <ul class="menu menu-horizontal items-center">
                    <li><ThemeController></ThemeController></li>
                    <li><Avatar></Avatar></li>
                </ul>
            </div>
        </div>

        <!--Content-->
        <div class="m-5 flex flex-col w-full justify-center">
            <div class="flex items-start mt-4">
                <h3 class="text-ghost font-rubik text-lg">Overview</h3>
            </div>
            <div class="flex flex-wrap flex-1 justify-evenly m-14">
                <div><DataCards/></div>
                <div><DataCards/></div>
                <div><DataCards/></div>
                <div><DataCards/></div>
            </div>
            <div>
                <div class>
                    <BarChart chartCanvas=true chartInstance=true/>
                </div>
                <div>
                    <LineChart chartCanvas=true chartInstance=true/>
                </div>
                <div>
                    <PolarArea  chartCanvas=true chartInstance=true/>
                </div>
                <div>
                    <HorizontalBarChart chartCanvas=true chartInstance=true/>
                </div>
            </div>
        </div>

    </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu bg-base-200 min-h-full w-80 p-4">
                <!--Sidebar content-->
                <li>
                    <h1 class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-2xl font-bold font-rubik">NEXUS</h1>
                </li>
                <li>
                    <a href="#" class="font-bold text-base-500 text-opacity-60 text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Optimization-Graph--Streamline-Ultimate" height="24" width="24"><desc>Optimization Graph Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M10.55 2.43999c0.1868 0.19668 0.4117 0.35329 0.661 0.4603 0.2492 0.10702 0.5177 0.16221 0.789 0.16221 0.2712 0 0.5397 -0.05519 0.789 -0.16221 0.2492 -0.10701 0.4741 -0.26362 0.661 -0.4603l0.94 -1c0.2772 -0.2758 0.6292 -0.46428 1.0124 -0.542124 0.3832 -0.077844 0.7809 -0.041635 1.1437 0.104144 0.3629 0.14579 0.6751 0.39475 0.8979 0.71609 0.2229 0.32134 0.3466 0.70096 0.356 1.09189l-0.07 1.4c-0.0123 0.27418 0.0319 0.54796 0.13 0.8043 0.098 0.25633 0.2478 0.48975 0.44 0.6857 0.1959 0.19216 0.4293 0.34194 0.6857 0.44 0.2563 0.09806 0.5301 0.14231 0.8043 0.13l1.4 -0.07c0.3943 0.00166 0.7794 0.11985 1.1067 0.33973 0.3274 0.21987 0.5824 0.53161 0.7331 0.89603 0.1507 0.36442 0.1903 0.76525 0.1138 1.15211 -0.0765 0.38685 -0.2656 0.74247 -0.5436 1.02213l-1 0.94001c-0.1967 0.1868 -0.3533 0.4117 -0.4603 0.661 -0.1071 0.2493 -0.1622 0.5177 -0.1622 0.789s0.0551 0.5397 0.1622 0.789c0.107 0.2493 0.2636 0.4742 0.4603 0.661l1 0.94c0.278 0.2797 0.4671 0.6353 0.5436 1.0221 0.0765 0.3869 0.0369 0.7877 -0.1138 1.1521 -0.1507 0.3645 -0.4057 0.6762 -0.7331 0.8961 -0.3273 0.2198 -0.7124 0.338 -1.1067 0.3397l-1.4 -0.07c-0.2728 -0.0083 -0.5444 0.0393 -0.7981 0.1399 -0.2537 0.1005 -0.4841 0.252 -0.6771 0.445 -0.1929 0.1929 -0.3444 0.4233 -0.445 0.677 -0.1006 0.2537 -0.1482 0.5253 -0.1398 0.7981l0.07 1.4c-0.0017 0.3943 -0.1199 0.7794 -0.3398 1.1067 -0.2198 0.3274 -0.5316 0.5824 -0.896 0.7331 -0.3644 0.1507 -0.7652 0.1903 -1.1521 0.1138 -0.3869 -0.0765 -0.7425 -0.2656 -1.0221 -0.5436l-0.94 -1c-0.1869 -0.1967 -0.4118 -0.3533 -0.661 -0.4603 -0.2493 -0.107 -0.5178 -0.1622 -0.789 -0.1622 -0.2713 0 -0.5398 0.0552 -0.789 0.1622 -0.2493 0.107 -0.4742 0.2636 -0.661 0.4603l-0.94004 1c-0.27966 0.278 -0.63528 0.4671 -1.02213 0.5436 -0.38686 0.0765 -0.78769 0.0369 -1.15211 -0.1138 -0.36442 -0.1507 -0.67616 -0.4057 -0.89603 -0.7331 -0.21988 -0.3273 -0.33807 -0.7124 -0.33973 -1.1067l0.07 -1.4c0.01231 -0.2742 -0.03194 -0.548 -0.13 -0.8043 -0.09807 -0.2563 -0.24784 -0.4897 -0.44 -0.6857 -0.19596 -0.1922 -0.42937 -0.3419 -0.6857 -0.44 -0.25634 -0.0981 -0.53012 -0.1423 -0.8043 -0.13l-1.4 0.07c-0.39434 -0.0017 -0.77939 -0.1199 -1.10674 -0.3397 -0.32736 -0.2199 -0.58241 -0.5316 -0.733091 -0.8961 -0.150684 -0.3644 -0.190274 -0.7652 -0.113795 -1.1521 0.076479 -0.3868 0.265616 -0.7424 0.543626 -1.0221l1 -0.94c0.19668 -0.1868 0.35329 -0.4117 0.4603 -0.661 0.10702 -0.2493 0.16221 -0.5177 0.16221 -0.789s-0.05519 -0.5397 -0.16221 -0.789c-0.10701 -0.2493 -0.26362 -0.4742 -0.4603 -0.661l-1 -0.94001c-0.27801 -0.27966 -0.467147 -0.63528 -0.543626 -1.02213C0.779855 8.201 0.819445 7.80017 0.970129 7.43575c0.150681 -0.36442 0.405731 -0.67616 0.733091 -0.89603 0.32735 -0.21988 0.7124 -0.33807 1.10674 -0.33973l1.4 0.07c0.27418 0.01231 0.54796 -0.03194 0.8043 -0.13 0.25633 -0.09806 0.48974 -0.24784 0.6857 -0.44 0.19216 -0.19595 0.34193 -0.42937 0.44 -0.6857 0.09806 -0.25634 0.14231 -0.53012 0.13 -0.8043l-0.07 -1.4c0.00166 -0.39434 0.11985 -0.77939 0.33973 -1.10674 0.21987 -0.32736 0.53161 -0.58241 0.89603 -0.733091 0.36442 -0.150683 0.76525 -0.190274 1.15211 -0.113795 0.38685 0.076479 0.74247 0.265616 1.02213 0.543626l0.94004 1.04Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.25H18" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M8 7.75h4v7.5H8v-7.5Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12 10.5h4v4.75h-4V10.5Z" stroke-width="1.5"></path></svg>
                        Dashboard
                    </a>
                </li>
                <h4 class="text-accent text-m font-bold m-2.5">Apps</h4>
                <li>
                    <details open>
                        <summary class="font-bold text-base-400">
                            <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Shipment-Online-Monitor-1--Streamline-Ultimate" height="24" width="24"><desc>Shipment Online Monitor 1 Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M8.25 23.25h7.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M2.75 0.75h18.5s2 0 2 2V17.5s0 2 -2 2H2.75s-2 0 -2 -2V2.75s0 -2 2 -2Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12 23.25V19.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m11.329 4.08599 -4.5 2.25c-0.24903 0.12456 -0.45847 0.31597 -0.60488 0.55281 -0.14642 0.23684 -0.22402 0.50975 -0.22412 0.78819V12.577c-0.00008 0.2786 0.07743 0.5517 0.22385 0.7888 0.14643 0.237 0.35597 0.4286 0.60515 0.5532l4.5 2.25c0.2083 0.1042 0.4381 0.1584 0.671 0.1584 0.2329 0 0.4627 -0.0542 0.671 -0.1584l4.5 -2.25c0.2498 -0.1249 0.4597 -0.3171 0.6062 -0.5549 0.1465 -0.2378 0.2236 -0.5118 0.2228 -0.7911V7.67299c-0.0001 -0.27844 -0.0777 -0.55135 -0.2241 -0.78819 -0.1464 -0.23684 -0.3559 -0.42825 -0.6049 -0.55281l-4.5 -2.25c-0.2086 -0.10358 -0.4385 -0.15714 -0.6715 -0.15645 -0.2329 0.0007 -0.4625 0.05563 -0.6705 0.16045Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M17.762 6.8689 12 9.7499l-5.776 -2.861" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12 9.75v6.573" stroke-width="1.5"></path></svg>
                            Ecommerce
                            <div class="badge">Pro</div>
                        </summary>
                        <ul>
                            <li><a href="#">Orders<span class="badge">Pro</span></a></li>
                            <li><a href="#">Order Detail<span class="badge">Pro</span></a></li>
                            <li><a href="#">Products<span class="badge">Pro</span></a></li>
                            <li><a href="#">Sellers<span class="badge">Pro</span></a></li>
                            <li><a href="#">Customers<span class="badge">Pro</span></a></li>
                            <li><a href="#">Shops<span class="badge">Pro</span></a></li>
                        </ul>
                    </details>
                </li>
                <li><a href="#" class="font-bold text-base-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Layers-Stacked--Streamline-Ultimate" height="24" width="24"><desc>Layers Stacked Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="m22.91 6.95302 -10.21 -5.281c-0.2189 -0.11304 -0.4617 -0.17202 -0.708 -0.17202 -0.2464 0 -0.4891 0.05898 -0.708 0.17202l-10.208 5.281c-0.10056 0.05168 -0.184927 0.13007 -0.243833 0.22657 -0.058906 0.0965 -0.090071 0.20737 -0.090071 0.32043s0.031165 0.22393 0.090071 0.32043 0.143273 0.17489 0.243833 0.22657L11.285 13.328c0.2189 0.1131 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.0589 0.708 -0.172L22.91 8.04702c0.1003 -0.05192 0.1843 -0.13041 0.243 -0.22688s0.0897 -0.20721 0.0897 -0.32012c0 -0.11291 -0.031 -0.22365 -0.0897 -0.32012 -0.0587 -0.09647 -0.1427 -0.17495 -0.243 -0.22688Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.757996 12.75 11.285 17.828c0.2189 0.113 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.059 0.708 -0.172l10.557 -5.078" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.757996 17.25 11.285 22.328c0.2189 0.113 0.4616 0.172 0.708 0.172 0.2463 0 0.4891 -0.059 0.708 -0.172l10.557 -5.078" stroke-width="1.5"></path></svg>
                    File Manager
                </a></li>
                <li><a href="#" class="font-bold text-base-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Subtitles--Streamline-Ultimate" height="24" width="24"><desc>Subtitles Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M1.24219 16.2783c0 1.1046 0.89543 2 2 2h1.36523v2.8263c0 0.8061 0.90505 1.2809 1.56837 0.8227l5.28241 -3.649h9.2996c1.1046 0 2 -0.8954 2 -2V3.89355c0 -1.10457 -0.8954 -2 -2 -2H3.24219c-1.10457 0 -2 0.89544 -2 2V16.2783Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.80469 12.083h8.28711" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M19.084 15.1221h-8.2871" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M16.3848 12.083h2.6995" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M7.50393 15.1221H4.80444" stroke-width="1.5"></path></svg>
                    Chat
                </a></li>
                <h4 class="text-accent text-m font-bold m-2.5">Pages</h4>
                <li><a href="#" class="font-bold text-base-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Book-Book-Pages--Streamline-Ultimate" height="24" width="24"><desc>Book Book Pages Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M16.5 21.5129c0 0.2311 -0.0533 0.4592 -0.1559 0.6663 -0.1027 0.2071 -0.2517 0.3877 -0.4357 0.5276 -0.1839 0.14 -0.3977 0.2356 -0.6247 0.2793 -0.2269 0.0437 -0.4609 0.0344 -0.6837 -0.0272l-10.5 -2.917c-0.31562 -0.0873 -0.594 -0.2756 -0.79262 -0.5359 -0.19862 -0.2604 -0.30658 -0.5786 -0.30738 -0.9061V2.48689c-0.00005 -0.23114 0.05332 -0.45916 0.15594 -0.66627 0.10262 -0.20711 0.25171 -0.3877 0.43564 -0.52769 0.18393 -0.13998 0.39772 -0.23556 0.62469 -0.27928 0.22696 -0.043719 0.46096 -0.034398 0.68373 0.02724l10.5 3.391c0.3161 0.08746 0.5949 0.27613 0.7935 0.53712 0.1987 0.26098 0.3064 0.57988 0.3065 0.90788V21.5129Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.5 0.987061h15c0.3978 0 0.7794 0.158039 1.0607 0.439339S21 2.08924 21 2.48706V18.2371c0 0.3978 -0.158 0.7793 -0.4393 1.0606s-0.6629 0.4394 -1.0607 0.4394h-3" stroke-width="1.5"></path></svg>
                    Landing
                </a></li>
                <li>
                    <details open>
                        <summary class="font-bold text-base-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Check-Badge--Streamline-Ultimate" height="24" width="24"><desc>Check Badge Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M15.75 9.74902 11.769 15.057c-0.0645 0.0859 -0.1467 0.1569 -0.241 0.2083 -0.0944 0.0514 -0.1986 0.0819 -0.3058 0.0895 -0.1071 0.0076 -0.2146 -0.008 -0.3152 -0.0455 -0.1007 -0.0376 -0.192 -0.0963 -0.268 -0.1723L8.25 12.749" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M10.73 1.35702c0.1528 -0.18987 0.3461 -0.34308 0.5659 -0.448338 0.2198 -0.105262 0.4604 -0.159903 0.7041 -0.159903 0.2437 0 0.4843 0.054641 0.7041 0.159903 0.2198 0.105258 0.4131 0.258468 0.5659 0.448338l1.512 1.881c0.1712 0.2134 0.3935 0.38023 0.6462 0.48509 0.2527 0.10486 0.5278 0.14438 0.7998 0.11491l2.4 -0.261c0.243 -0.02699 0.4889 0.00101 0.7195 0.08192 0.2307 0.08092 0.4402 0.21268 0.6131 0.38553 0.1728 0.17285 0.3046 0.38236 0.3855 0.61302 0.0809 0.23067 0.1089 0.47658 0.0819 0.71953l-0.261 2.4c-0.0295 0.27202 0.01 0.54708 0.1149 0.7998 0.1049 0.25272 0.2717 0.47495 0.4851 0.6462l1.881 1.51198c0.1899 0.1528 0.3431 0.3462 0.4483 0.5659 0.1053 0.2198 0.1599 0.4604 0.1599 0.7041 0 0.2437 -0.0546 0.4843 -0.1599 0.7041 -0.1052 0.2198 -0.2584 0.4132 -0.4483 0.5659l-1.887 1.505c-0.2133 0.1715 -0.3801 0.394 -0.485 0.6468 -0.1048 0.2529 -0.1444 0.5281 -0.115 0.8002l0.261 2.4c0.0272 0.243 -0.0007 0.489 -0.0815 0.7198 -0.0809 0.2307 -0.2126 0.4403 -0.3855 0.6132 -0.1729 0.1729 -0.3825 0.3046 -0.6133 0.3855 -0.2307 0.0808 -0.4767 0.1087 -0.7197 0.0815l-2.4 -0.261c-0.272 -0.0296 -0.5471 0.0099 -0.7999 0.1148 -0.2527 0.1049 -0.4749 0.2717 -0.6461 0.4852L13.27 22.64c-0.1526 0.19 -0.346 0.3434 -0.5658 0.4488 -0.2198 0.1053 -0.4604 0.16 -0.7042 0.16 -0.2437 0 -0.4844 -0.0547 -0.7042 -0.16 -0.2198 -0.1054 -0.4131 -0.2588 -0.5658 -0.4488l-1.511 -1.88c-0.17145 -0.2134 -0.39387 -0.3802 -0.64675 -0.4851 -0.25288 -0.1048 -0.52808 -0.1443 -0.80025 -0.1149l-2.4 0.261c-0.24303 0.0274 -0.4891 -0.0003 -0.71994 -0.0811 -0.23085 -0.0808 -0.44052 -0.2125 -0.61346 -0.3855 -0.17293 -0.1729 -0.30468 -0.3826 -0.38546 -0.6134 -0.08078 -0.2309 -0.10851 -0.477 -0.08114 -0.72l0.261 -2.4c0.02947 -0.2721 -0.01005 -0.5474 -0.11491 -0.8002 -0.10486 -0.2529 -0.27168 -0.4753 -0.48509 -0.6468l-1.88 -1.511c-0.19003 -0.1526 -0.34338 -0.346 -0.448756 -0.5658 -0.105371 -0.2198 -0.160073 -0.4604 -0.160073 -0.7042 0 -0.2437 0.054702 -0.4844 0.160073 -0.7042 0.105376 -0.2198 0.258726 -0.4131 0.448756 -0.5658l1.88 -1.51198c0.21348 -0.17118 0.38036 -0.39341 0.48523 -0.64615 0.10487 -0.25273 0.14434 -0.52783 0.11477 -0.79985l-0.261 -2.4c-0.02718 -0.24299 0.00069 -0.48899 0.08154 -0.71974 0.08084 -0.23075 0.2126 -0.44035 0.38549 -0.61324s0.38249 -0.30465 0.61324 -0.38549c0.23075 -0.08085 0.47674 -0.10872 0.71973 -0.08153l2.4 0.261c0.27216 0.02936 0.54734 -0.0102 0.8002 -0.11505s0.47528 -0.27161 0.6468 -0.48495l1.511 -1.869Z" stroke-width="1.5"></path></svg>
                            Auth
                            <div class="badge">Pro</div>
                        </summary>
                        <ul>
                            <li><a href="#">Login<span class="badge">Pro</span></a></li>
                            <li><a href="#">Register<span class="badge">Pro</span></a></li>
                            <li><a href="#">Forgot password<span class="badge">Pro</span></a></li>
                            <li><a href="#">Reset Password<span class="badge">Pro</span></a></li>
                        </ul>
                    </details>
                </li>
                <h4 class="text-accent text-m font-bold m-2.5">UI Showcase</h4>
                <li>
                    <details open>
                        <summary class="font-bold text-base-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Coding-Apps-Website-Apps-Add-Widget--Streamline-Ultimate" height="24" width="24"><desc>Coding Apps Website Apps Add Widget Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M1.75 0.75h7.231s1 0 1 1v7.231s0 1 -1 1H1.75s-1 0 -1 -1V1.75s0 -1 1 -1Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M15.019 0.75h7.231s1 0 1 1v7.231s0 1 -1 1h-7.231s-1 0 -1 -1V1.75s0 -1 1 -1Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M1.75 14.019h7.231s1 0 1 1v7.231s0 1 -1 1H1.75s-1 0 -1 -1v-7.231s0 -1 1 -1Z" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M18.635 15.1731v6.923" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M22.096 18.635h-6.923" stroke-width="1.5"></path></svg>
                            Components
                            <div class="badge">Pro</div>
                        </summary>
                    </details>
                </li>
                <li>
                    <details open>
                        <summary class="font-bold text-base-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Kindle-Hold--Streamline-Ultimate" height="24" width="24"><desc>Kindle Hold Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.25 14.824 13c-0.1707 -0.1281 -0.3657 -0.2199 -0.5732 -0.27 -0.2074 -0.0501 -0.4228 -0.0573 -0.6332 -0.0213 -0.2103 0.036 -0.4111 0.1146 -0.59 0.2309 -0.1789 0.1163 -0.3322 0.2678 -0.4506 0.4454 -0.1717 0.2576 -0.2633 0.5603 -0.2633 0.87 0 0.3096 0.0916 0.6123 0.2633 0.87 7.4 6.731 6.17 4.217 6.17 7.38" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M15.7469 9c5.247 3 7.5 3 7.5 13.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.7469 21H2.24695c-0.39783 0 -0.77936 -0.158 -1.06066 -0.4393 -0.281306 -0.2813 -0.439342 -0.6629 -0.439342 -1.0607V3c0 -0.39782 0.158036 -0.77936 0.439342 -1.06066 0.2813 -0.2813 0.66283 -0.43934 1.06066 -0.43934H14.2469c0.3979 0 0.7794 0.15804 1.0607 0.43934s0.4393 0.66284 0.4393 1.06066v7.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.746948 17.25H9.74695" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 6h7.49995" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 9h6.74995" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 12h2.25" stroke-width="1.5"></path></svg>
                            Forms
                            <div class="badge">Pro</div>
                        </summary>
                    </details>
                </li>
                <h4 class="text-accent text-m font-bold m-2.5">Other</h4>
                <li><a href="#" class="font-bold text-base-400">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" id="Kindle-Hold--Streamline-Ultimate" height="24" width="24"><desc>Kindle Hold Streamline Icon: https://streamlinehq.com</desc><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M16.5 14.25 14.824 13c-0.1707 -0.1281 -0.3657 -0.2199 -0.5732 -0.27 -0.2074 -0.0501 -0.4228 -0.0573 -0.6332 -0.0213 -0.2103 0.036 -0.4111 0.1146 -0.59 0.2309 -0.1789 0.1163 -0.3322 0.2678 -0.4506 0.4454 -0.1717 0.2576 -0.2633 0.5603 -0.2633 0.87 0 0.3096 0.0916 0.6123 0.2633 0.87 7.4 6.731 6.17 4.217 6.17 7.38" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M15.7469 9c5.247 3 7.5 3 7.5 13.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M12.7469 21H2.24695c-0.39783 0 -0.77936 -0.158 -1.06066 -0.4393 -0.281306 -0.2813 -0.439342 -0.6629 -0.439342 -1.0607V3c0 -0.39782 0.158036 -0.77936 0.439342 -1.06066 0.2813 -0.2813 0.66283 -0.43934 1.06066 -0.43934H14.2469c0.3979 0 0.7794 0.15804 1.0607 0.43934s0.4393 0.66284 0.4393 1.06066v7.5" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M0.746948 17.25H9.74695" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 6h7.49995" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 9h6.74995" stroke-width="1.5"></path><path stroke="#000000" stroke-linecap="round" stroke-linejoin="round" d="M4.49695 12h2.25" stroke-width="1.5"></path></svg>
                    Documentation
                </a></li>
            </ul>
        </div>
</div>