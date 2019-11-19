<template>
    <v-container>
        <div class="month-head">
            <v-btn text icon>
                <v-icon x-large class="head-icon" style="color: white;">mdi-chevron-left</v-icon>
            </v-btn>
            <h1 class="text-center">11</h1>
            <v-btn text icon>
                <v-icon x-large class="head-icon" style="color: white">mdi-chevron-right</v-icon>
            </v-btn>
        </div>
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
                <tr v-for="p in 6" :key="p">
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
                monthEnd: 30,
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

    .month-head {
        width: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
    
    }

    .month-head h1 {
        margin: 0 20px;
        display:inline-block;
        font-size: 36px;
        color: #ffffff;
        text-shadow: 5px 5px 5px rgba(1,1,1,0.7);
    }

    .month-head button {
        margin-top:10px;
    }

    .head-icon {
        color: white;
        text-shadow: 5px 5px 5px rgba(1,1,1,0.7);
    }



</style>