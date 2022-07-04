<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid d-flex align-items-center px-3 py-2">
        <button class="col-1 navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img src="@/assets/image/toggle.svg" alt="">
        </button>
        <a class="col-11 col-lg-1 navbar-brand d-flex mx-0" href="/"><img class="px-3" src="@/assets/logo.svg" alt=""></a>
        <div class="row collapse navbar-collapse" id="navbarNav">
            <ul class="col-lg-8 navbar-nav d-flex justify-content-start">
              <li class="nav-item">
                <router-link class="nav-link" to="/about">我的商家</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">成效報表</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about">基本資料</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/">評價中心</router-link>
              </li>
            </ul>
            <div class="col-lg-4 logOut text-white d-flex justify-content-center justify-content-lg-end align-items-center mx-auto">
              <span class="d-flex align-items-center me-5"><img class="pe-3" src="@/assets/image/person.svg" alt="">愛漂亮–林口</span>
              <button class="btn_logOut">登出</button>
            </div>
        </div>
        <!-- <div class="text-white d-flex align-items-center">
          <span class="d-flex align-items-center me-5"><img class="pe-3" src="@/assets/image/person.svg" alt="">愛漂亮–林口</span>
          <button class="btn_logOut">登出</button>
        </div> -->
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.navbar-light{
  background: #29598F;
  .nav-item{
    border-radius: 30px;
      display: flex;
    .nav-link{
      padding: 0.5rem 1.5rem;
      color:white !important;
      @media (max-width: 992px){
        margin: 0.5rem auto;
      }
    }
    &:hover{
      background: rgba(255, 255, 255, 0.5);
      @media (max-width: 992px){
        width: 25%;
        margin: 0 auto;
      }
    }
  }
}
.router-link-exact-active{
  background: rgba(255, 255, 255, 0.5);
  border-radius: 30px;
  color:white;
}
.btn_logOut{
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  padding: 0.3rem 2rem;
  &:hover{
    background: rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.5);
  }
}
.navbar-brand{
  img{
    width: 100%;
    @media (max-width: 992px){
      max-width: 150px;
      margin: 0 auto;
    }
  }
}
.navbar-nav{
  min-width: 35%;

  .active{
    background: rgba(255, 255, 255, 0.5);
    border-radius: 30px;
    padding: 0 1rem;
  }
}
</style>