<template>
<div class="modal_dimed">
    <div class="modal_wrap">
    <div class="modal_title flex_SB">
        list item 추가
        <button class="modal_close" @click="$emit('modalClose')">X</button>
    </div>
    <div class="madal_contents flex_dir_10">
        title
        <input type="text" style="width:100%;" />
        contents
        <textarea style="width:100%;height:200px;">
        </textarea>
    </div>
    <div class="modal_bottom flex_R_8">
        <button>저장</button>
        <button @click="$emit('modalClose')">취소</button>
    </div>
    </div>
</div>
</template>

<script>
// import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'MoDal',
    props: ['modalState'],
    // setup(props) {
    setup() {
        // const modalState = ref('');
        // onMounted(() => {
        //     modalState.value = props.modalState    
        // })
        return {
        axios,
        // modalState
        }
    }
}
</script>

<style lang="css" scoped></style>
  