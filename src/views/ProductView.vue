<template>
  <a @click="$router.go(-1)" class="go-back">
    <img :src="Back" />
  </a>
  <div class="product">
    <h2>{{ productName }}</h2>
    <div class="description">
      <p>{{ productDescription }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Back from "@/assets/icons/back.svg";
export default {
  name: "ProductView",
  data() {
    return {
      productName: "",
      productDescription: "",
    };
  },
  setup() {
      return {
          Back
      }
  },
  computed: {
    ...mapGetters(["getShoppingList"]),
  },
  created() {
    const prdRoute = this.$route.params.id;
    const selectedPrd = this.getShoppingList.find((prd) => prd.id == prdRoute);
    console.log(prdRoute, selectedPrd);

    this.productName = selectedPrd.ingredient;
    this.productDescription = selectedPrd.description;
  },
};
</script>

<style lang="scss" scoped>
.go-back {
  cursor: pointer;
  margin-top: 10px;
  img {
    pointer-events: none;
  }
}
.product {
  padding-top: 30px;
  color: $primary;
  h2 {
    font-size: 20px;
    margin-bottom: 42px;
    text-align: center;
  }
  .description {
    font-size: 15px;
  }
}
</style>
