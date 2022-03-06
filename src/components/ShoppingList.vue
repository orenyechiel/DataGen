<template>
  <div class="wrapper">
    <h1>Shopping List</h1>
    <div class="products-wrapper">
      <ol class="products">
        <li v-for="(item, i) in getShoppingList" :key="item.id">
          <SingleIngredient
            :id="item.id"
            :index="i + 1"
            :name="item.ingredient"
            :price="item.price"
          />
        </li>
        <li class="bottom-line">
          <div class="column">
            <span>Total:</span>
          </div>
          <div class="column">
            <span>{{ getTotalPrice }} NIS </span>
          </div>
        </li>
      </ol>

      <button class="add-new" @click="openModal">
        <img :src="Plus" alt="" />
        <span>Add Product</span>
      </button>
    </div>

    <teleport to="#app">
      <itemSlide :is-open="addNew" @close-self="closeModal" />
    </teleport>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Plus from "@/assets/icons/plus.svg";
import SingleIngredient from "@/components/SingleIngredient.vue";
import itemSlide from "@/components/ItemSlide.vue";

export default {
  name: "ShoppingList",
  components: { SingleIngredient, itemSlide },
  setup() {
    return {
      Plus,
    };
  },
  data() {
    return {
      addNew: false,
    };
  },
  computed: {
    ...mapGetters(["getShoppingList", "getTotalPrice"]),
  },
  methods: {
    ...mapMutations(["deleteIngredient"]),
    openModal() {
      this.addNew = true;
    },
    closeModal() {
      this.addNew = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  padding-top: 80px;
  position: relative;

  h1 {
    color: $primary;
    font-size: 20px;
    text-align: center;
    margin-bottom: 50px;
  }
  ol {
    list-style-type: none;
    padding: 0;
    .bottom-line {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      > div {
        color: $primary;
        width: 50%;
        &:first-of-type {
          span {
            padding-left: 96px;
          }
        }
        &:last-of-type {
          span {
            padding-left: 35px;
          }
        }
        span {
          font-size: 15px;
        }
      }
    }
  }

  .add-new {
    color: $orange;
    font-size: 15px;
    display: flex;
    gap: 10px;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    margin-top: 10px;
    img {
      padding: 20px;
    }
  }
}
</style>
