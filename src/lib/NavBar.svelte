<script>
    export let name
    let y;
</script>

<navbar class="navbar{ y > 250 ? ' is-sticky': ''}">
    <div class="container">
        {name}
    </div>
</navbar>

<style>
    .navbar {
        background-color: fuchsia;
        bottom: auto;
        height: 100px;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        transition: height 100ms ease;
        width: 100%;
        z-index: 100;
    }
    .navbar.is-sticky {
        height: 72px;
    }

</style>

<svelte:window bind:scrollY={y} />