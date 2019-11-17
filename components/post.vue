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
                            <li><nuxt-link to="/"><span>1</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>2</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>3</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>4</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>5</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>6</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>7</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>8</span> 의미없는 텍스트</nuxt-link></li>
                            <li><nuxt-link to="/"><span>9</span> 의미없는 텍스트</nuxt-link></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    div {
        width: 1200px;
        text-align: center;
        margin: 0 auto;
    }
    table {
        width: 100%;
        margin: 0 auto;
        border-collapse: collapse;
    }
    table thead {
        background-color: rgba(0,0,0,0.2);
        border-radius: 50px;
    }
    table thead tr td {
        padding-left: 30px;
        color: white;
        height: 40px;
        text-shadow: 3px 3px 3px black;
        text-align: left;
    }
    table tbody tr th {
        background-color: #2E303E;
        color: white;
        vertical-align: top;
        padding: 30px 0 0 40px;
        text-align: left;
        width: 20%;
    }
    table tbody tr {
        border-bottom: 1px solid gray;
    }
    table tbody tr td {
        text-align: left;
        background-color: white;
        padding: 30px 30px;
    }
    table tbody tr td ul {
        list-style-type:none;
    }
    table tbody tr td ul li {
        margin-bottom: 15px;
        font-weight: 700;
    }
    table tbody tr td ul li span {
        color: lime;
        padding-right:10px;
    }
    table tbody tr td ul li a {
        text-decoration: none;
        color: #252525;
    }
</style>