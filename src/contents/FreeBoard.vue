<template>
  <div class="flex_dir_10">
    <div class="flex_SB">
      <div class="flex_L_8">
        <label class="flex_L_3"><input type="checkbox" /> 전체선택</label>
      </div>
      <div class="flex_R_8">
        <input type="text" style="width:180px;" />
        <button>검색</button>  
        <button @click="add">추가</button>
        <button>삭제</button>
      </div>
    </div>
    <div class="list">
      <div class="item flex_SB" v-for="item in items" :key="item.id">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div class="flex_L_8" @click="modalChange(item.title, item.content)" >
            <div class="title">{{item.title}}</div>
            <div>{{item.content}}</div>
          </div>
        </div>
        <div class="date">{{item.regdt}}</div>
      </div>
    </div>
    <div class="flex_C_5">
      <button>이전</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>10</button>
      <button>다음</button>
    </div>
  </div>
  <Mo_dal v-if="modalState" :modi-state="modiState" :modal-title="modalTitle" :modal-cont-title="modalContTitle" :modal-content="modalContent" :modal-add="modalAdd" @modal-close="modalClose" @modify="modify"></Mo_dal>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
import Mo_dal from '@/components/MoDal.vue';

export default {
  name: 'FreeBoard',
  components: {
    Mo_dal
  },
  setup() {
    const items = ref([]);
    const modalState = ref(false);
    const modiState = ref(false);
    const modalTitle = ref('');
    const modalContTitle = ref('');
    const modalContent = ref('');

    const add = () =>{
      modalState.value = true;
      modalTitle.value = 'list item 추가';
      modalContTitle.value = '';
      modalContent.value = '';
      modiState.value = false;
    }
    const modalChange = (title, content) =>{
      modalState.value = true;
      modalTitle.value = title;
      modalContTitle.value = title;
      modalContent.value = content;
      modiState.value = true;
    }
    const modalClose = () =>{
      modalState.value = false;
    }
    const modify = () =>{
      modiState.value = false;
      console.log(modiState);
    }
    
    const params = {};
    axios.get("http://localhost:8088/study/searchBoardList", {params})
        .then((res) => {
          // 성공했을 경우
      
        console.log(res.data.responseJSON);
        items.value.push(...res.data.responseJSON); // .value를 사용하여 배열에 추가
        })
        .catch((res) => {
          // 실패했을 경우
          console.error("실패 ", res);
        });

    console.log('items', items)

    return {
      add,
      modalChange,
      modalClose,
      axios,
      items,
      modalState,
      modalTitle,
      modalContTitle,
      modalContent,
      modiState,
      modify,
    }
  }
}
</script>

<style lang="css" scoped>
.list{border-top:2px solid #333;}
.item{border-bottom:1px solid #ddd;padding:10px 5px;cursor: pointer;}
.title{font-weight: 700;}
</style>
  