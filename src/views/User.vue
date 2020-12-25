<template>
    <div>
        <p>Fullname: {{user.name}}</p>
        <p>Email: {{user.email}}</p>
        <p>Address: {{user.address.city}}</p>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data:()=> {
            return {
                user:''
            }
        },
        methods: {
            async getUser(){
                try{
                    const id = this.$route.params.id;
                    const res = await axios.get('https://jsonplaceholder.typicode.com/users/'+id);
                    this.user = res.data;
                }catch(err){
                    console.log(err);
                }
            }
        },
        created(){
            this.getUser();
        }
    }
</script>