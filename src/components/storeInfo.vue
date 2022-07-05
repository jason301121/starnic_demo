<template>
  <div>
    <div v-if="IsExecute">
      <div v-for="(item,index) in storeList" :key="index" class="store_box py-4">
        <div class="row">
          <div class="col-2 col-md-1 px-0"><img class="store_logo" :src="require(`@/assets/image/store_${item.logo}.svg`)" alt=""></div>
          <div class="col-10 col-md-5 d-flex flex-column text-start pe-0 position-relative">
            <v-clamp v-if="screenWidth < 768" :autoresize="true" :max-lines="1" :expanded="false" class="store_name pe-5">{{ item.name }}
              <template  class="collapse-toggle" #after="{ clamped,expanded,toggle }">
                <button class="position-absolute top-0 end-0" v-if="clamped || expanded" @click="toggle()"><img src="@/assets/image/arrow_down.svg" alt=""></button>
              </template>
            </v-clamp>
            <span v-else class="store_name pe-5">{{ item.name }}</span>
            <span class="store_address pt-2">{{ item.address }}</span>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="d-none d-md-block col-md-1"></div>
          <div class="col-12 col-md-9 store_status">
            <div class="col-md-12 d-flex flex-column flex-md-row align-items-center ">
              <div v-if="item.storeCenter.status" class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center" :class="new Date(item.storeCenter.endAt) > new Date(2021,1,2) ? 'inTime' : 'outTime'">
                <span class="label">{{ item.IsPro ?'商家中心 專業版':'商家中心 一般版'}}</span>
                <span class="date text-start">{{ item.storeCenter.startAt }} - {{ item.storeCenter.endAt }}</span>
              </div>
              <div v-else class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center notActive text-start">
                <span class="label">商家中心</span>
                <span class="date text-start">尚未購買</span>
              </div>
              <div v-if="item.storeCenter.status" class="col-12 col-md-7 d-flex justify-content-around" >
                <div class="d-flex flex-column">
                  <span class="views_number">{{ item.viewsInfo.start }}</span>
                  <span class="views_label">評論起始值</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">{{ item.viewsInfo.total }}</span>
                  <span class="views_label">評論當前值</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">{{ item.viewsInfo.total - item.viewsInfo.start }}</span>
                  <span class="views_label">已增加評論數</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">{{ item.viewsInfo.rate }}<span class="text-18">%</span></span>
                  <span class="views_label">執行率</span>
                </div>
              </div>
            </div>
          </div>
          <div v-if="item.storeCenter.status" class="col-12 col-md-2 program d-flex justify-content-center justify-content-md-end px-2">
            <button v-if="new Date(item.storeCenter.endAt) > new Date(2021,1,2)" class="w-100 btn_program_inTime">取得QRcode</button>
            <div class="w-100 d-flex flex-column-reverse flex-md-column align-items-center" v-else>
              <span class="text-12 hint">你購買的專案已到期</span>
              <button class="w-100 btn_program_outTime">續購申請</button>
            </div>
          </div>
          <div v-else class="col-12 col-md-2 program d-flex px-2">
            <button class="w-100 btn_program_join">選取方案</button>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="col-1 d-none d-md-block"></div>
          <div class="col-12 col-md-9 store_status">
            <div v-if="item.viewCenter.status" class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center" :class="new Date(item.viewCenter.endAt) > new Date(2021,1,2) ? 'inTime' : 'outTime'">
              <span class="label">評價中心</span>
              <span class="date text-start">{{ item.viewCenter.startAt }} - {{ item.viewCenter.endAt }}</span>
            </div>
            <div v-else class="col-md-5 d-flex justify-content-between align-items-center notActive text-start">
              <span class="label">評價中心</span>
              <span class="date text-start">尚未購買</span>
            </div>
          </div>
          <div v-if="item.viewCenter.status" class="col-12 col-md-2 program d-flex justify-content-center justify-content-md-end px-2">
            <button v-if="new Date(item.viewCenter.endAt) > new Date(2021,1,2)" class="w-100 btn_program_inTime">取得QRcode</button>
            <div class="w-100 d-flex flex-column-reverse flex-md-column align-items-center" v-else>
              <span class="text-12 hint">你購買的專案已到期</span>
              <button class="w-100 btn_program_outTime">續購申請</button>
            </div>
          </div>
          <div v-else class="col-12 col-md-2 program d-flex px-2">
            <button class="w-100 btn_program_join">選取方案</button>
          </div>
        </div>
      </div>
      <div class="store_box py-4">
        <div class="row">
          <div class="col-2 col-md-1 px-0"><img class="store_logo" :src="require(`@/assets/image/store_bubble.svg`)" alt=""></div>
          <div class="col-10 col-md-5 d-flex flex-column text-start pe-0 position-relative">
            <v-clamp v-if="screenWidth < 768" :autoresize="true" :max-lines="1" :expanded="false" class="store_name pe-5">波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...
              <template  class="collapse-toggle" #after="{ clamped,expanded,toggle }">
                <button class="position-absolute top-0 end-0" v-if="clamped || expanded" @click="toggle()"><img src="@/assets/image/arrow_down.svg" alt=""></button>
              </template>
            </v-clamp>
            <span v-else class="store_name pe-5">波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...</span>
            <span class="store_address pt-2">台北市重慶南路77號12樓</span>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="d-none d-md-block col-md-1"></div>
          <div class="col-12 col-md-9 store_status">
            <div class="col-md-12 d-flex flex-column flex-md-row align-items-center ">
              <div class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center notActive text-start">
                <span class="label">商家中心</span>
                <span class="date text-start">尚未購買</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2 program d-flex px-2">
            <button class="w-100 btn_program_join">選取方案</button>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="col-1 d-none d-md-block"></div>
          <div class="col-12 col-md-9 store_status">
            <div class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center inTime">
              <span class="label">評價中心</span>
              <span class="date text-start">2020.1.1 - 2021.1.1</span>
            </div>
          </div>
          <div class="col-12 col-md-2 program d-flex px-2">
          </div>
        </div>
      </div>
      <div class="store_box py-4">
        <div class="row">
          <div class="col-2 col-md-1 px-0"><img class="store_logo" :src="require(`@/assets/image/store_bubble.svg`)" alt=""></div>
          <div class="col-10 col-md-5 d-flex flex-column text-start pe-0 position-relative">
            <v-clamp v-if="screenWidth < 768" :autoresize="true" :max-lines="1" :expanded="false" class="store_name pe-5">波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...
              <template  class="collapse-toggle" #after="{ clamped,expanded,toggle }">
                <button class="position-absolute top-0 end-0" v-if="clamped || expanded" @click="toggle()"><img src="@/assets/image/arrow_down.svg" alt=""></button>
              </template>
            </v-clamp>
            <span v-else class="store_name pe-5">波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...</span>
            <span class="store_address pt-2">台北市重慶南路77號12樓</span>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="d-none d-md-block col-md-1"></div>
          <div class="col-12 col-md-9 store_status">
            <div class="col-md-12 d-flex flex-column flex-md-row align-items-center ">
              <div class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center text-start inTime">
                <span class="label">商家中心 一般版</span>
                <span class="date text-start">2020.1.1 - 2021.1.1</span>
              </div>
              <div class="col-12 col-md-7 d-flex justify-content-around" >
                <div class="d-flex flex-column">
                  <span class="views_number">2</span>
                  <span class="views_label">評論起始值</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">200</span>
                  <span class="views_label">評論當前值</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">198</span>
                  <span class="views_label">已增加評論數</span>
                </div>
                <div class="d-flex flex-column">
                  <span class="views_number">60<span class="text-18">%</span></span>
                  <span class="views_label">執行率</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-2 program d-flex px-2">
            <button class="w-100 btn_program_inTime">取得QRcode</button>
          </div>
        </div>
        <div class="row d-flex flex-column flex-md-row align-items-center justify-content-between py-1">
          <div class="col-1 d-none d-md-block"></div>
          <div class="col-12 col-md-9 store_status">
            <div class="col-12 col-md-5 d-flex justify-content-start justify-content-md-between align-items-center notActive">
              <span class="label">評價中心</span>
              <span class="date text-start">尚未購買</span>
            </div>
          </div>
          <div class="col-12 col-md-2 program d-flex px-2">
            <button class="w-100 btn_program_join">選取方案</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="store_box py-4">
        <div class="row align-items-center">
          <div class="col-2 col-md-1 px-0"><img class="store_logo" :src="require(`@/assets/image/store_star.svg`)" alt=""></div>
          <div class="col-10 col-md-11 d-flex flex-column text-start pe-0 position-relative">
            <v-clamp :autoresize="true" :max-lines="1" :expanded="false" class="store_name pe-5">星和醫美台北店
              <template class="collapse-toggle" #after="{ clamped,expanded,toggle }">
                <button class="position-absolute top-0 end-0" v-if="clamped || expanded" @click="toggle()"><img src="@/assets/image/arrow_down.svg" alt=""></button>
              </template>
            </v-clamp>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-2 col-md-1 px-0"></div>
          <div class="col-9 d-flex flex-column">
            <div class="d-flex flex-column justify-content-start align-items-start inTime">
              <span class="label px-2">專業版</span>
            </div>
            <div class="d-flex flex-column-reverse flex-md-column justify-content-start align-items-start inTime">
              <span class="store_address pt-2">台北市重慶南路77號12樓</span>
              <span class="date text-14 text-start">申請日期：2021.12.31</span>
            </div>
          </div>
          <div class="col-md-2">
            <div class="w-100 d-flex flex-column-reverse flex-md-column align-items-center inProcess">
              <span class="text-12 success_hint py-2">恭喜通過審核！</span>
              <button class="w-100 btn_process_success">選購方案</button>
            </div>
          </div>
        </div>
      </div>
      <div class="store_box py-4">
        <div class="row align-items-center">
          <div class="col-2 col-md-1 px-0"><img class="store_logo" :src="require(`@/assets/image/store_star.svg`)" alt=""></div>
          <div class="col-10 col-md-11 d-flex flex-column text-start pe-0 position-relative">
            <v-clamp :autoresize="true" :max-lines="1" :expanded="false" class="store_name pe-5">星和醫美台北店
              <template class="collapse-toggle" #after="{ clamped,expanded,toggle }">
                <button class="position-absolute top-0 end-0" v-if="clamped || expanded" @click="toggle()"><img src="@/assets/image/arrow_down.svg" alt=""></button>
              </template>
            </v-clamp>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-2 col-md-1 px-0"></div>
          <div class="col-9 d-flex flex-column">
            <div class="d-flex flex-column justify-content-start align-items-start inTime">
              <span class="label px-2">評價中心</span>
            </div>
            <div class="d-flex flex-column-reverse flex-md-column justify-content-start align-items-start inTime">
              <span class="store_address pt-2">台北市重慶南路77號12樓</span>
              <span class="date text-14 text-start">申請日期：2021.12.31</span>
            </div>
          </div>
          <div class="col-md-2">
            <div class="w-100 d-flex flex-column-reverse flex-md-column align-items-center inProcess">
              <button class="w-100 btn_process_waiting">繼續審核中</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VClamp from 'vue-clamp'

export default {
  components:{VClamp},
  props:['IsExecute'],
  data() {
    return {
      screenWidth:document.body.clientWidth,
      storeList:[
        {
          logo:'star',
          name:'星和醫美台北店',
          address:'台北市重慶南路77號12樓',
          IsPro:true,
          storeCenter:{
            status:true,
            startAt:'2020-12-31',
            endAt:'2021-12-31'
          },
          viewCenter:{
            status:true,
            startAt:'2020.01.01',
            endAt:'2021.01.01'
          },
          viewsInfo:{
            start:2,
            total:200,
            rate:60
          }
        },
        {
          logo:'beer',
          name:'JupJup 精釀生啤餐酒館 Craft Beer Bar & Bistro',
          address:'台北市重慶南路77號12樓',
          IsPro:false,
          storeCenter:{
            status:true,
            startAt:'2020-01-01',
            endAt:'2021-01-01'
          },
          viewCenter:{
            status:true,
            startAt:'2020-01-01',
            endAt:'2021-01-01'
          },
          viewsInfo:{
            start:2,
            total:200,
            rate:60
          }
        },
        // {
        //   logo:'bubble',
        //   name:'波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...',
        //   address:'台北市重慶南路77號12樓',
        //   IsPro:false,
        //   storeCenter:{
        //     status:false,
        //     startAt:'2020-01-01',
        //     endAt:'2021-01-01'
        //   },
        //   viewCenter:{
        //     status:true,
        //     startAt:'2020-01-01',
        //     endAt:'2021-01-01'
        //   },
        //   viewsInfo:{
        //     start:2,
        //     total:200,
        //     rate:60
        //   }
        // },
        // {
        //   logo:'bubble',
        //   name:'波諦波諦鮮做飲料-人氣天然健康手搖飲品店(可外送)大同區飲料/大...',
        //   address:'台北市重慶南路77號12樓',
        //   IsPro:false,
        //   storeCenter:{
        //     status:true,
        //     startAt:'2020-01-01',
        //     endAt:'2021-01-01'
        //   },
        //   viewCenter:{
        //     status:false,
        //     startAt:'2020-01-01',
        //     endAt:'2021-01-01'
        //   },
        //   viewsInfo:{
        //     start:2,
        //     total:200,
        //     rate:60
        //   }
        // }
      ],
    }
  },
  mounted() {
    const that = this
    window.addEventListener("resize", function() {
      return (() => {
        window.screenWidth= document.body.clientWidth;
        that.screenWidth= window.screenWidth;
      })();
    });
  },
  watch:{
    screenWidth:{
      immediate:true,
      handler(){
        console.log(this.screenWidth);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
.store_box{
  border-bottom: 2px solid #C0C5D3;
  @media (max-width:768px) {
    width: 95%;
    margin: 0 auto;
  }
  .store_logo{
    width: 3.5rem;
    height: 3.5rem;
  }
  .collapse-toggle{
    width: 1rem !important;
    height: 1rem !important;
  }
  .store_name{
    font-weight: 500;
    font-size: 21px;
    line-height: 29px;
    color: #185993;
  }
  .store_address{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #5A6268;
  }
  .store_status{
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
  .views_number{
    font-weight: 500;
    font-size: 36px;
    line-height: 50px;
    color: #53A9C3;
  }
  .views_label{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #5A6268;
  }
  .notActive{
    .label{
      background: #EFF0F3;
      border: 1px solid #979797;
      border-radius: 14px;
      padding: 0.1rem 0.5rem;
      @media (max-width:768px){
        margin-right: 1rem;
      }
    }
    .date{
      width: 50%;
    }
  }

  .inTime{
    .label{
      color: #D8B93B;
      background: #FBF7E1;
      border: 1px solid #D8B93B;
      border-radius: 14px;
      padding: 0.1rem 0.5rem;
      @media (max-width:768px){
        margin-right: 1rem;
      }
    }
    .date{
      color: #5A6268;
      width: 50%;
    }
  }
  .outTime{
    .label{
      color: #CA726F;
      background: #FFE1E0;
      border: 1px solid #CA726F;
      border-radius: 14px;
      padding: 0.1rem 0.5rem;
      @media (max-width:768px){
        margin-right: 1rem;
      }
    }
    .date{
      color: #CA726F;
      width: 50%;
    }
  }
  .program{
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    .btn_program_inTime{
      min-width: 140px;
      padding: 0.5rem 1rem;
      color: #29598F;
      border: 1px solid #29598F;
      border-radius: 19px;
      @media (max-width:768px){
        margin: 0.5rem 0;
      }
      &:hover{
        opacity: 0.8;
      }
    }
    .btn_program_join{
      min-width: 140px;
      padding: 0.5rem 1rem;
      color: #29598F;
      background: #E9F6F9;
      border: 1px solid #29598F;
      border-radius: 19px;
      @media (max-width:768px){
        margin: 1rem 0;
      }
      &:hover{
        opacity: 0.8;
      }
    }
    .btn_program_outTime{
      min-width: 140px;
      padding: 0.5rem 1rem;
      color: #CA726F;
      border: 1px solid #CA726F;
      border-radius: 19px;
      @media (max-width:768px){
        margin: 1rem 0;
      }
      &:hover{
        opacity: 0.8;
      }
    }
    
    .hint{
      white-space: nowrap;
      font-size: 12px;
      color: #D76C6C;
    }
  }
  .inProcess{
    .success_hint{
      white-space: nowrap;
      font-size: 12px;
      color: #46A77C;
    }
    .btn_process_success{
      min-width: 140px;
      padding: 0.5rem 1rem;
      color: #FFFFFF;
      background: #46A77C;
      border: 1px solid #46A77C;
      border-radius: 19px;
      @media (max-width:768px){
        margin: 0.5rem 0;
      }
      &:hover{
        opacity: 0.8;
      }
    }
    .btn_process_waiting{
      min-width: 140px;
      padding: 0.5rem 1rem;
      color: #A1A3AB;
      background: transparent;
      border: 1px solid #A1A3AB;
      border-radius: 19px;
      @media (max-width:768px){
        margin: 0.5rem 0;
      }
      &:hover{
        opacity: 0.8;
      }
    }
  }
}
</style>