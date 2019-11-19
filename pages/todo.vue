<template>
    <v-row>
        <v-col cols="12" lg="2" />
        <v-col cols="12" lg="8">
            <article>
                <Post />
            </article>
        </v-col>
        <v-col cols="12" lg="2" />
    </v-row>
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