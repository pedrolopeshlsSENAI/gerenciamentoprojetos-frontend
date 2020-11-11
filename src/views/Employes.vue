<template>
    <div>
        <ToolBar/>

        <EmployeeForm/>

    </div>
</template>
<script>
import ToolBar from '../components/ToolBar'
import EmployeeForm from '../components/EmployeeForm'

export default {
    components:{
        ToolBar,
        EmployeeForm
    }    
}
</script>