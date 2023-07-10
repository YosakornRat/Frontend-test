<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h1>Create Order</h1>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label for="menu">Menu</label>
                    <input type="text" class="form-control" v-model="order.menu" required>
                </div>
                <div class="form-group">
                    <label for="taste">Taste</label>
                    <input type="text" class="form-control" v-model="order.taste" required>
                </div>
                <div class="form-group">
                    <label for="size">Size</label>
                    <input type="text" class="form-control" v-model="order.size" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
            <!-- <form>
                <div class="form-group mt-2">
                    <label for="menu">Menu</label>
                    <select class="form-select form-control" aria-label="Default select example" v-model="order.menu" required>
                        <option selected>Open this select menu</option>
                        <option value="1">souffle</option>
                        <option value="2">cake</option>
                        <option value="3">ice-cream</option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <label for="taste">Taste</label>
                    <select class="form-select form-control " aria-label="Default select example" v-model="order.taste" required>
                        <option selected>Open this select Taste</option>
                        <option value="1">cherry</option>
                        <option value="2">choco</option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <label for="size">Size</label>
                    <select class="form-select form-control " aria-label="Default select example" v-model="order.size" required>
                        <option selected>Open this select Size</option>
                        <option value="1">S</option>
                        <option value="2">M</option>
                        <option value="3">L</option>
                        <option value="4">XL</option>
                    </select>
                </div>
                <div class="form-group mt-2">
                    <button class="btn btn-success btn-block">Submit</button>
                </div>
            </form> -->
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data() {
        return {
            order: {
                menu: '',
                taste: '',
                size: ''
            }
        }
    },
    methods:{
        handleSubmitForm(){
            let apiURL = 'http://localhost:4000/api/create-order';

            axios.post(apiURL, this.order).then(() => {
                this.$router.push('/list');
                this.order = {
                    name: '',
                    email: '',
                    phone: ''
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>