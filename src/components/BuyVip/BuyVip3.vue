<template>
    <div class="black">
      <div class="empty"></div>
      <div >
        <div :class="selectClass" @click="selectCard(cardType.index)"  v-for="(cardType,index) in cardTypes" :key="index">
          <div class="details">
            <div class="category">{{cardType.cardTypeName}}</div>
            <div class="note">{{cardType.dayNum}}天内每日观影次数无线，高清专属资源，缓存次数{{cardType.cacheNum}}</div>
          </div>
          <div class="price"> ￥{{cardType.price}} </div>
        </div>
      </div>
    </div>
</template>

<script>


    export default {
      props:{
        payTypes:Array,
        cardTypes:Array,
      },data(){
        return{
          selectClass:'card',
        }
      },methods:{
        selectCard(){

        }
      }
    }
</script>

<style scoped>
  .black{
     background-color: whitesmoke;
  }
  .empty{
    width: 100%;
    height:37% ;
    background-color: #000000;
  }
  .card{
    margin: 1rem auto;
    width: 96%;
    height: 6rem;

    border: .1rem solid  #D5B771 ;
    border-radius: 1rem ;
  }
  .card> .details{

    width: 65%;
    height: 100%;
    margin-left: 1rem;
    float: left;
  }

  .selectCard {
    margin: 1rem auto;
    width: 96%;
    height: 6rem;
    border: .1rem solid #D5B771;
    border-radius: 1rem;
    background-color: #F6F2C5;
  }

  .card> .details .category{
    margin:0.5rem auto ;
    font-size: 0.1rem;
    font-weight: bold;
  }
  .card>.details .note{
    width: 100%;
    margin: 0.4rem auto;

  }
  .price{
    color:red;
    font-size:1.2rem ;
    font-weight:bold;
    line-height: 6rem;
  }
</style>
