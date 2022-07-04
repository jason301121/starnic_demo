<template>
  <div class="py-2">
    <nav aria-label="Page navigation example ">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span class="d-flex align-items-center" aria-hidden="true"><img class="pe-2" src="@/assets/image/double_arrow_left.svg" alt=""> 上一頁</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link " href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link active" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span class="d-flex align-items-center" aria-hidden="true">下一頁 <img class="ps-2" src="@/assets/image/double_arrow_right.svg" alt=""></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.pagination{
  .page-item{
    .page-link{
      border: 0;
      font-weight: 400;
      font-size: 14px !important;
      line-height: 20px;
      color: #A1A3AC;
      border-radius: 50px;
      margin: 0 0.5rem;
    }
    .active{
      background: #175993;
      color: #FFFFFF;
      border-radius: 50px;
    }
  }
}
</style>