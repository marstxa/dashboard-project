<script lang="ts">
    import users from "$lib/users.json" assert {type: "json"};

</script>

<div class="card bg-base-300 w-1/4 card-bordered overflow-y-auto overflow-x-hidden h-full">
    <div class="card-body">
        <h4 class="card-title font-rubik text-sm font-semibold">Quick Message</h4>
    </div>
    {#each users as person}
    <div class="w-full mt-5 chat ml-5 chat-start">
        <div class="chat-image avatar">
            <div class="w-10 rounded-full">
                <img src="{person.src}" alt="{person.userName}">
            </div>
        </div>
        <div class="chat-header">{person.userName}
            <time class="text-xs opacity-50">{person.time}</time>
        </div>
        <div class="chat-bubble">{person.message}</div>
        <div class="chat-footer opacity-50">Delivered</div>
    </div>
    {/each}
        <input class="input input-md input-bordered w-96 my-10 ml-10"/>
</div>