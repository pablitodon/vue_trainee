<template>
    <div>
        <ul>
            <li v-for="(item, idx) in items" :key="idx">
                {{ item.price }}
            </li>
        </ul>
        <button @click="addAndUpdate">Add and update</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { name: 'Artem', price: 1 },
                { name: 'Pavel', price: 2 }
            ]
        }
    },
    methods: {
        addAndUpdate() {
            const newItem = { name: 'New', price: '-' };
            this.items.push(newItem);
            setTimeout(() => {
                newItem.price = 'over 9000';
            }, 3000);
        }
    }
};
</script>
<style></style>