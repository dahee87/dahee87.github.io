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
          <button @click="modify">수정</button>
          <button>삭제</button>
        </div>
      </div>
      <div class="list">
        <div class="item flex_SB" @click="view" v-for="item in items" :key="item.id">
          <div class="flex_L_8">
            <input type="checkbox" />
            <div>{{item.title}}</div>
            <div>{{item.content}}</div>
          </div>
          <div class="date">{{item.date}}</div>
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
  import {ref} from 'vue';
  import axios from 'axios';
  
  export default {
    name: 'App',
    components: {
    },
    setup() {
      const modal = ref(false);
      const items = ref([]); // ref로 선언
  
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
      
      
      axios.get("http://172.30.1.75:8080/board/list")
          .then((res) => {
            // 성공했을 경우
          items.value.push(...res.data); // .value를 사용하여 배열에 추가
          })
          .catch((res) => {
            // 실패했을 경우
            console.error("실패 ", res);
          });
  
      console.log('items', items)
  
      return {
        modal,
        add,
        modify,
        view,
        modalClose,
        axios,
        items,
      }
    }
  }
  </script>
  
  <style>
  .list{border-top:2px solid #333;}
  .item{border-bottom:1px solid #ddd;padding:10px 5px;cursor: pointer;}
  </style>
  