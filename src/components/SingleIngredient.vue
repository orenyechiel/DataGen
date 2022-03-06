<template>
  <div class="item" :class="{ checked: isCheck }">

    <router-link :to="'/' + id" :class="column">
      <div class="column">
        <div class="item-index">
          <span>
            {{ index }}
          </span>
        </div>
        <h2 class="item-name">{{ name }}</h2>
      </div>
    </router-link>

    <div class="column">
      <div class="item-details">
        <p class="price">{{ price }} NIS</p>
        <div class="actions">
          <button @click="checkMe()">
            <img :src="Edit" alt="" />
          </button>
          <button @click="deleteItem(index)">
            <img :src="Trash" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Edit from "@/assets/icons/edit.svg";
import Trash from "@/assets/icons/trash.svg";

export default {
  name: "SingleIngredient",
  props: ["id","index", "name", "price"],
  setup() {
    return {
      Edit,
      Trash,
    };
  },
  data() {
    return {
      isCheck: false,
    };
  },
  methods: {
    ...mapMutations(["deleteItem"]),
    checkMe() {
      this.isCheck = !this.isCheck;
    },
  },
};
</script>

<style scoped lang="scss">
.item {
  color: $primary;
  border-bottom: 1px solid #e3e3e6;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  &.checked {
    .item-name,
    .price {
      color: $grey;
      text-decoration: line-through;
    }
  }

  a {
    color: $primary;
    text-decoration: none;
  }

  .column {
    display: flex;
    align-items: stretch;
    width: 50%;
    height: 100%;
  }

  .item-index {
    display: flex;
    // width: 24%;
    min-width: 80px;
    border-right: 1px solid #e3e3e6;
    justify-content: center;
    span {
      align-self: center;
      color: $orange;
      font-size: 24px;
      font-weight: 700;
      line-height: 29px;
    }
  }

  .item-name {
    align-self: center;
    padding-left: 16px;
  }

  .item-name,
  .price {
    margin: 0;
    font-weight: 400;
    font-size: 15px;
  }

  .item-details {
    display: flex;
    align-items: center;
    flex-grow: 1;
    padding: 15px 0;
    .price {
      margin-left: auto;
    }

    .actions {
      margin-left: 24px;
      button {
        cursor: pointer;
        background: none;
        border: none;
        padding: 0 9px;
        &:first-of-type {
          border-right: 1px solid #e3e3e6;
        }
        img {
          max-width: 18px;
          max-height: 18px;
          pointer-events: none;
        }
      }
    }
  }
}
</style>
