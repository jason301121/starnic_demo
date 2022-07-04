<template>
  <div class="home">
    <div class="container">
      <div class="row d-flex flex-column flex-md-row align-items-center py-3">
        <div class="col-12 col-md-3 text-center text-md-start px-0">
          <span class="text-21">我的商家</span>
        </div>
        <div class="d-md-none my-2" style="border-bottom: 2px solid #D8B93B;"></div>
        <div class="col-12 col-md-9 d-flex justify-content-center justify-content-md-end px-0">
          <button class="btn-applyStore d-flex align-items-center"><img src="@/assets/image/google-maps.svg" alt=""><span class="ps-1">申請Google商家</span></button>
          <button class="btn-applyStore d-flex align-items-center"><img src="@/assets/image/add_shop.svg" alt=""><span class="ps-1">商家登錄</span></button>
        </div>
      </div>
    </div>
    <div class="searchBar py-4">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-7 col-md-3 flex align-items-center px-0 position-relative">
            <input v-model="searchFactor.keyWord" class="searchInput py-2 px-3" type="text" placeholder="關鍵字">
            <i @click="searchFactor.keyWord = ''" style="color: #A1A3AC;cursor:pointer;" class="bi bi-x-circle-fill position-absolute top-50 end-0 translate-middle"></i>
          </div>
          <select v-model="searchFactor.location" class="col-3 d-none d-md-block searchSelect py-2">
            <option value="" disabled selected hidden>商家區域</option>
            <option value="北部">北部</option>
            <option value="中部">中部</option>
            <option value="南部">南部</option>
          </select>
          <select v-model="searchFactor.program" class="col-3 d-none d-md-block searchSelect py-1">
            <option value="" disabled selected hidden>方案</option>
            <option value="方案1">方案1</option>
            <option value="方案2">方案2</option>
            <option value="方案3">方案3</option>
          </select>
          <div class="col-4 col-md-2 px-0 d-flex flex-column justify-content-end position-relative">
            <button class="w-100 btn-search py-2 px-4">搜尋</button>
            <div class="d-flex align-items-center position-absolute top-100 end-0 pe-auto pt-1">
              <button class="d-none d-md-flex text-12 text-end " style="color:#9B9B9B;white-space: nowrap;">
                <img src="@/assets/image/trash.svg" alt="">
                清除搜尋
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 pt-2 d-md-none">
      <div class="d-flex align-items-center justify-content-end">
        <button class=" text-12 text-end " style="color:#9B9B9B;white-space: nowrap;">
          <img src="@/assets/image/trash.svg" alt="">
          清除搜尋
        </button>
        <button class="d-md-none text-12 text-end" style="color:#9B9B9B;white-space: nowrap;">
          <img src="@/assets/image/setting.svg" alt="">
          進階搜尋
        </button>
      </div>
    </div>
    <div class="container store_table px-0">
      <div class="row toolBar_label py-2 mx-0">
        <ul class="col-12 col-md-3 d-flex p-0">
          <li @click="handleStoreStatus(true)" class="btn-toolBar" :class="IsExecute ? 'active-inprogress' :'border-end-0' ">執行中</li>
          <li @click="handleStoreStatus(false)" class="btn-toolBar" :class="!IsExecute ? 'active-apply' :'border-start-0' ">申請中</li>
        </ul>
        <div class="d-none d-md-block col-md-9 toolBar_bottomBorder px-0"></div>
      </div>
      <div class="row store_table_content ">
        <div class=" toolBar_filter d-flex px-0" style="white-space: nowrap;">
          <div class="d-none d-md-block col-1 text-14 text-start px-0" >共 10 筆商家</div>
          <div class="col-12 col-md-11 d-flex justify-content-between justify-content-md-end px-0">
            <div class="w-100 px-0 d-flex justify-content-start justify-content-sm-around justify-content-md-end overflow-scroll">
              <button class="btn_toolBar_filter me-2">執行率 <i class="bi bi-arrow-up-short"></i> </button>
              <button class="btn_toolBar_filter me-2">增加評論數 <i class="bi bi-arrow-up-short"></i> </button>
              <button class="btn_toolBar_filter me-2">評論當前數 <i class="bi bi-arrow-up-short"></i> </button>
              <button class="btn_toolBar_filter me-2 active">商家中心效期 <i class="bi bi-arrow-up-short"></i> </button>
              <button class="btn_toolBar_filter active">評價中心效期 <i class="bi bi-arrow-up-short"></i> </button>
            </div>
          </div>
        </div>
        <storeInfo :IsExecute="IsExecute"></storeInfo>
      </div>
    </div>
  </div>
</template>

<script>
import storeInfo from "../components/storeInfo.vue";

export default {
  name: 'Home',
  components: {
    storeInfo
  },
  data() {
    return {
      IsExecute:true,
      searchFactor:{
        keyWord:'',
        location:'',
        program:''
      }
    }
  },
  methods: {
    handleStoreStatus(status){
      status ? this.IsExecute = true : this.IsExecute =false
    }
  },
}
</script>

<style lang="scss" scoped>
  .home{
    width: 100vw;
  }
  .btn-applyStore{
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #185993;
    &:hover{
      opacity: 0.8;
    }
    img{
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .searchBar{
    width: 100%;
    margin: 0;
    background: rgba(255, 244, 198, 0.2);
    .searchInput{
      width: 100%;
      color: #5A6268;
      outline: 0;
      border: 1px solid #EFF0F4;
      background: #EFF0F4;
      border-radius: 35px;
      &:focus{
        background: #FBF7E1;
        border: 1px solid #D4B953;
      }
    }
    .searchSelect{
      color: #5A6268;
      outline: 0;
      border: 1px solid #EFF0F4;
      background: #EFF0F4;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url(../assets/image/arrow.svg);
      background-repeat: no-repeat;
      background-position: right 1rem center;
      background-size: 0.8rem;
      border-radius: 35px;
      &:focus{
        background: #FBF7E1;
        border: 1px solid #D4B953;
        background-image: url(../assets/image/arrow.svg);
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 0.8rem;
      }
    }
    .btn-search{
      background: #2BABC6;
      border-radius: 19px;
      color: #FFFFFF;
      font-size: 16px;
      line-height: 22px;
      &:hover{
        opacity: 0.8;
      }
    }
  }
  select{
    padding-right: 2rem;
  }
  .store_table{
    margin: 0 auto;
    @media (max-width:767px){
      min-width: 100%;
    }
    .store_table_content{
      // width: 100%;
      margin: 0 auto;
    }
  }
  .toolBar_label{
    color: #A1A3AC;
    font-size: 18px;
    font-weight: 400;
    .btn-toolBar{
      cursor: pointer;
      border: 1px solid #C0C5D3;
      border-bottom:1px solid #29598F;
      line-height: 25px;
      padding: 0.5rem 0;
      width: 50%;
    }
    .active-inprogress{
      color: #29598F;
      border: 1px solid #29598F;
      border-bottom: transparent;
      @media (max-width:767px){
        border-left: none;
      }
    }
    .active-apply{
      color: #29598F;
      border: 1px solid #29598F;
      border-bottom: transparent;
      @media (max-width:767px){
        border-right: none;
      }
    }
  }
  .toolBar_bottomBorder{
    border-bottom: 1px solid #29598F;
  }
  .toolBar_filter{
    color: #5A6268;
    .btn_toolBar_filter{
      border: 1px solid #A1A3AC;
      border-radius: 3px;
      color: #A1A3AC;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      padding: 0.4rem 0.5rem;
    }
    .active{
      color: #29598F;
      border: 1px solid #29598F;
      font-weight: 500;
    }
  }
</style>
