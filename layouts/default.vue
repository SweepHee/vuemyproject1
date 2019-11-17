<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <nuxt-link to="/">
                            <v-icon medium style="color: #e2e2db; text-shadow: 5px 5px 5px gray;">mdi-home</v-icon>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/about">
                            <v-icon medium style="color: #e2e2db; text-shadow: 5px 5px 5px gray;">mdi-message-text</v-icon>
                        </nuxt-link>
                    </li>
                    <li class="on">
                        <nuxt-link to="/">
                            <v-icon medium style="color: #e2e2db; text-shadow: 5px 5px 5px gray;">mdi-email</v-icon>
                        </nuxt-link>
                    </li>
                </ul>
            </nav>
        </header>
        <nuxt />
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    @import url("~/style/custom.css");

    @font-face {
        font-family: 'S-CoreDream-3Light';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal; font-style: normal;
    }

    body {
        font-family: 'S-CoreDream-3Light';
        background: linear-gradient(120deg, #f4a35b, #f4655b 31%, #d16098 65%, #ca3469);
        min-height: 100vh;
        height: 100%;
    }

    header {
        width: 100%;
        height: 44px;
        margin-bottom: 100px;
    }

    header nav {
        width: 1200px;
        margin: 0 auto;
    }

    header nav ul li {
        display: inline-block;
        line-height: 44px;
        text-align: left;
        padding-right: 20px;
        color: gray;
    }

    header nav li a {
        text-decoration: none;
    }

    header nav li.on a {
    }

</style>