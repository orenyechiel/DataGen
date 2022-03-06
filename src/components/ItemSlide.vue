<template>
  <div class="slide-wrap" :class="{ open: isOpen }">
    <button class="close-self" @click="$emit('closeSelf')">
      <img :src="Close" alt="" />
    </button>

    <form @submit.prevent="submitNewProduct">
      <div class="grid-wrap">
        <div class="input-wrap">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" />
        </div>

        <div class="input-wrap">
          <label for="price">Price</label>
          <input type="text" id="price" v-model.number="price" />
        </div>

        <div class="input-wrap text-area-wrap">
          <label for="description">Description</label>
          <textarea id="Description" v-model="description"></textarea>
        </div>
      </div>

      <button type="submit">
        <img :src="Send" alt="" />
      </button>
    </form>
  </div>
</template>

<script>
import Close from "@/assets/icons/close.svg";
import Send from "@/assets/icons/send.svg";

import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ItemSlide",
  props: ["isOpen"],
  data() {
    return {
      name: "",
      price: "",
      description: "",
    };
  },
  setup() {
    return {
      Close,
      Send,
    };
  },
  computed: {
    ...mapGetters(["getShoppingList"]),
  },
  methods: {
    ...mapMutations(["addProduct"]),
    submitNewProduct() {
      const product = {
        id: this.getShoppingList.length + 1,
        ingredient: this.name,
        price: this.price,
        description: this.description,
      };

      this.addProduct(product);
      this.name = "";
      this.price = "";
      this.description = "";
      this.$emit("closeSelf");
    },
  },
};
</script>

<style scoped lang="scss">
button {
  background: none;
  border: none;
  cursor: pointer;
}
.slide-wrap {
  position: fixed;
  height: 60vh;
  width: 375px;
  margin: 0 auto;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 50px 18px 10px;
  background: #ffffff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.25);
  transform: translateY(100%);
  transition: transform 0.3s ease;
  z-index: 2;
  &.open {
    transform: translateY(0);
  }

  .close-self {
    position: absolute;
    top: 20px;
    right: 10px;
    img {
      pointer-events: none;
    }
  }

  form {
    .grid-wrap {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(1f, 2);
      font-size: 15px;
      color: $grey;
      .text-area-wrap {
        grid-column: 1 / 3;
        textarea {
          width: 100%;
        }
      }

      .input-wrap {
        input {
          width: 100%;
        }
      }

      textarea,
      input {
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid $grey;
      }
    }

    button[type=submit] {
      margin-top: 50px;
      float: right;
    }
  }
}
</style>