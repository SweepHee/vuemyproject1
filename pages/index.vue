<template>
    <v-row>
        <v-col cols="12" lg="2" />
        <v-col cols="12" lg="8">
            <article>
                <Calendar />
            </article>
            <article>
                <Post />
            </article>
        </v-col>
        <v-col cols="12" lg="2" />
    </v-row>
</template>

<script>
import Post from "~/components/post.vue";
import Calendar from "~/components/calendar.vue";

    export default {
        components: {
            Post,
            Calendar,
        },
    }
</script>

<style scoped>
    section {
        width: 100%;
        margin: 0 auto;
    }
</style>