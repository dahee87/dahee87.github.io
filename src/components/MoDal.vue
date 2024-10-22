<template>
<div class="modal_dimed">
    <div class="modal_wrap">
    <div class="modal_title flex_SB">
        {{modaltitle}}
        <button class="modal_close" @click="$emit('modalClose')">X</button>
    </div>
    <div class="madal_contents flex_dir_10">
        title
        <input type="text" style="width:100%;" v-model="modalconttitle" :readonly="modistate" />
        <textarea style="width:100%;height:200px;" v-model="mocalcontent" :readonly="modistate"></textarea>
    </div>
    <div class="modal_bottom flex_R_8">
        <button @clcik="$emit('modify')" v-if="modistate">수정</button>
        <button>저장</button>
        <button @click="$emit('modalClose')">취소</button>
    </div>
    </div>
</div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'MoDal',
    props: ['modalTitle', 'modalContTitle', 'modalContent', 'modiState'],
    setup(props) {
        const modaltitle = ref('');
        const modalconttitle = ref('');
        const mocalcontent = ref('');
        const modistate = ref();
        onMounted(() => {
            modaltitle.value = props.modalTitle;
            modalconttitle.value = props.modalContTitle;
            mocalcontent.value = props.modalContent;
            modistate.value = props.modiState;
        })
        return {
            axios,
            modaltitle,
            modalconttitle,
            mocalcontent,
            modistate,
        }
    }
}
</script>

<style lang="css" scoped></style>
  