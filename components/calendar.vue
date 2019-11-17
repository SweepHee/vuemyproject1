<template>
    <v-container>
        <h1>11</h1>
        <table id="calendar">
            <thead>
                <tr class="text-center">
                    <td>SUN</td>
                    <td>MON</td>
                    <td>TUE</td>
                    <td>WED</td>
                    <td>THU</td>
                    <td>FRI</td>
                    <td>SAT</td>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr class="text-center">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </v-container>
</template>

<script>
    export default {
        data () {
            return {
                monthStart: 6,
                monthEnd: 35,
            }
        },
        mounted() {

            for(let i=0; i<this.monthEnd; i++) {

                let week, day, weekSelector, daySelector;

                if(this.monthStart < 8) {
                    daySelector = document.querySelectorAll("table#calendar tbody tr td")[this.monthStart - 1];

                }
                else {
                    week = Math.floor((this.monthStart-1)/7); // 7~~13=1.x
                    day = this.monthStart-7*week;
                    weekSelector = document.querySelectorAll("table#calendar tbody tr")[week];
                    daySelector = weekSelector.children[day-1];

                    console.log(this.monthStart);
                }

                daySelector.innerHTML = i+1;
                this.monthStart++;

            }

        }

    }
</script>

<style scoped>
    div {
        margin: 0 auto;
    }
    h1 {
        font-size: 48px;
        display: inline-block;
        text-align: left;
        color: #ffffff;
        text-shadow: 5px 5px 5px gray;
    }



</style>