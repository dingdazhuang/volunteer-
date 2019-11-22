<template>
  <div class="searchComponent">
    <div class="seachLeft">
      <div class="tit">院校大全</div>
      <div class="input">
        <input type="text" placeholder="请输入首字母" v-model="userInput" class="userInput" @input="search">
      </div>
      <div class="keyboard">
        <ul class="lettersList">
          <li v-for="(value, index) in letters" :key="index" @click="addInput(value)">
            {{value}}
          </li>
        </ul>
      </div>
    </div>
    <div class="searchRight">
      <Ecomponent v-if="!userInput && searchResult.length === 0">
        <div class="tips">
          <div>支持大学首字母搜索</div>
          <div>如搜索大学：浙江大学</div>
          <div>输入首字母：ZJDX</div>
        </div>
      </Ecomponent>
      <Ecomponent v-if="userInput && searchResult.length === 0">
        <div class="nodata">
         <img src="../../../assets/images/imgs/nodata.png" alt="">
         <div class="tit">没有找到匹配的学校</div>
        </div>
      </Ecomponent>
      <div class="colleageList" v-if="userInput && searchResult && searchResult.length > 0">
        <ul >
          <router-link to="/university" @click.native="saveUniName(v)" tag="li" v-for="(v, index) in searchResult" :key="index">{{v}}</router-link>
        </ul>
        <el-pagination
          layout="prev, pager, next"
          :total="searchResult.length"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import Ecomponent from '@/components/common/Ecomponent/Ecomponent'
import { mapMutations } from 'vuex'
import get from '@/api/api'
export default {
  name: '',
  components: {
    Ecomponent
  },
  data () {
    return {
      userInput: '',
      searchResult: []
    }
  },
  methods: {
    search () {
      const _this = this
      get('/university/universityByLetters', {params: { q: this.userInput }}).then(res => {
        _this.searchResult = res.data.result.list
        console.log(res)
        console.log(_this.searchResult)
      })
    },
    addInput (v) {
      console.log(v)
      if (!this.userInput) {
        this.userInput = v
      } else {
        this.userInput += v
      }
      this.search(this.userInput)
    },
    saveUniName (v) {
      // 点击搜索结果将点击的大学名字存储到vuex
      sessionStorage.setItem('uniName', v)
      this.storeUniName(v)
    },
    ...mapMutations(['storeUniName'])
  },
  computed: {
    letters () {
      let letter = []
      for (let i = 0; i < 26; i++) {
        letter.push(String.fromCharCode(65 + i))
      }
      return letter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.searchComponent{
  color: #fff;
  display: flex;
  justify-content: space-between;
  .seachLeft{
    width:350px;
    border: 1px solid rgba(255, 255, 255, .1);
    border-top: none;
    border-bottom: none;
    height:100%;
    padding: 0 31px;
    box-sizing: border-box;
    .tit{
      font-size: 24px;
    }
    .input {
      margin: 90px auto 52px;
      .userInput{
        background: transparent;
        font-size: 30px;
        width: 100%;
        color: #fff;
        padding: 8px 0 6px;
        border-bottom: 2px solid #fff;
      }
    }
    .keyboard {
      .lettersList {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
        li{
          width: 20%;
          font-size: 24px;
          opacity: .5;
          text-align: center;
          height: 57px;
          line-height: 57px;
          cursor: pointer;
          &:hover, &.active {
            background: #4444ff;
            opacity: 1;
          }
        }
      }
    }
  }
  .searchRight{
    flex: 1;
    .colleageList{
      ul {
        padding:0 38px 0 33px;
        li {
          font-size:22px;
          color:#fff;
          opacity: .5;
          padding:21px 33px;
          cursor: pointer;
          &:hover{
            opacity: 1;
            background: #4444ff;
          }
        }
      }
    }
  }
}
</style>
