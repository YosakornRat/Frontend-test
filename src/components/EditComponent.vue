<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit order</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="menu">Menu</label>
                    <input type="text" class="form-control" v-model="order.menu" required>
                </div>
                <div class="form-group">
                    <label for="taste">Taste</label>
                    <input type="email" class="form-control" v-model="order.taste" required>
                </div>
                <div class="form-group">
                    <label for="size">Size</label>
                    <input type="text" class="form-control" v-model="order.size" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            order: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-order/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.order = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-order/${this.$route.params.id}`;

            axios.put(apiURL, this.order).then((res) => {
                console.log(res);
                this.$router.push('/list')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>