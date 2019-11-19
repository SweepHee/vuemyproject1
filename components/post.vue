<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td><strong>16</strong> sections</td>
                    <td><strong>188</strong> lessons</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        <p>HTML5</p>
                        <p>10 lessons</p>
                    </th>
                    <td>
                        <ul>
                            <li><strong>1</strong> {{id}}</li>
                            <li>
                                <v-btn @click="newPost" style="background-color:#3949AB;" fab small dark>
                                    <v-icon style="color:#ffffff">mdi-pencil</v-icon>
                                </v-btn>
                            </li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id : "",
            }
        },
        methods: {
            newPost() {
                alert("안돼!");
            }
        }
    }
</script>

<style scoped>

</style>