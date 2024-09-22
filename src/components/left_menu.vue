<template>
    <nav>
        <RouterLink to="/">main</RouterLink>
        <RouterLink to="/free_board">free_board</RouterLink>
        <RouterLink to="/jpa_test">jpa_test</RouterLink>
    </nav>
</template>
<style lang="css" scoped>
nav{width:200px;border-right:1px solid #ddd;display: flex;flex-direction: column; justify-content: flex-start;padding:20px;gap:10px;}
nav a:hover{color:#0984e3;}
nav .router-link-active{color:#0984e3;}
</style>