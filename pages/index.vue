<template>
    <section>
        <Post />
    </section>
</template>

<script>
import Post from "~/components/post.vue";

    export default {
        components: {
            Post,
        },
    }
</script>

<style scoped>
    section {
        width: 100%;
        margin: 0 auto;
    }
</style>