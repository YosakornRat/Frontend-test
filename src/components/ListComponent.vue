<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show order</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped">
                        <thead class="thead-dark">
                            <tr>
                                <th>Menu</th>
                                <th>Taste</th>
                                <th>Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="order in Orders" :key="order._id">
                                <td>{{ order.menu }}</td>
                                <td>{{ order.taste }}</td>
                                <td>{{ order.size }}</td>
                                <td>
                                    <router-link :to="{name: 'edit', params: {id: order._id}}" class="btn btn-success">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteOrder(order._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            Orders: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api';
        axios.get(apiURL).then(res => {
            this.Orders = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteOrder(id) {
            let apiURL = `http://localhost:4000/api/delete-order/${id}`;
            let indexOfArrayItem = this.Orders.findIndex(i => i._id === id);

            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Orders.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>