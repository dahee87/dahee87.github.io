<template>
  <div class="flex_dir_10">
    <div class="flex_R_8">
      <input type="text" style="width:180px;" />
      <button>검색</button>  
      <button @click="add">추가</button>
      <button @click="modify">수정</button>
      <button>삭제</button>
    </div>
    <div class="list">
      <div class="item flex_SB" @click="view">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
      <div class="item flex_SB">
        <div class="flex_L_8">
          <input type="checkbox" />
          <div>title</div>
          <div>contents</div>
        </div>
        <div class="date">2020-20-20</div>
      </div>
    </div>
    <div class="flex_C_5">
      <button>이전</button>
      <button>11</button>
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
  <div class="modal_dimed" v-show="modal">
    <div class="modal_wrap">
      <div class="modal_title flex_SB">
        list item 추가
        <button class="modal_close" @click="modalClose">X</button>
      </div>
      <div class="madal_contents flex_dir_10">
        title
        <input type="text" style="width:100%;" />
        contents
        <textarea style="width:100%;height:200px;"></textarea>
      </div>
      <div class="modal_bottom flex_R_8">
        <button>저장</button>
        <button @click="modalClose">취소</button>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'App',
  components: {
  },
  setup() {
    const modal = ref(false);
    const add = () =>{
      modal.value = true;
    }
    const modify = () =>{
      modal.value = true;
    }
    const view = () =>{
      modal.value = true;
    }
    const modalClose = () =>{
      modal.value = false;
    }
    return {
      modal,
      add,
      modify,
      view,
      modalClose,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding:30px 10px;
}
.list{border-top:2px solid #333;}
.item{border-bottom:1px solid #ddd;padding:10px 5px;cursor: pointer;}
</style>
