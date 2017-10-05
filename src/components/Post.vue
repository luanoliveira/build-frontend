<template>
    <article class="post">
        <h1>Teste</h1>
        <p>{{ say }}</p>
    </article>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                say: 'hello'
            }
        }
    }
</script>