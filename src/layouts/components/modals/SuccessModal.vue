<template>
  <modal-block
    v-show="show"
    class="modal--success"
    @close="close"
  >
    <div
      slot="body"
    >
      <div class="modal-success">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="44"
            height="44"
            rx="22"
            fill="#F0F3F6"
          />
          <path
            d="M31.4319 14.2697L18.7656 26.9351C18.6804 27.0206 18.5792 27.0885 18.4678 27.1348C18.3563 27.1811 18.2369 27.2049 18.1162 27.2049C17.9955 27.2049 17.876 27.1811 17.7646 27.1348C17.6532 27.0885 17.5519 27.0206 17.4668 26.9351L12.5685 22.0323C12.4834 21.9468 12.3822 21.879 12.2707 21.8327C12.1593 21.7864 12.0398 21.7626 11.9191 21.7626C11.7985 21.7626 11.679 21.7864 11.5675 21.8327C11.4561 21.879 11.3549 21.9468 11.2697 22.0323C11.1842 22.1175 11.1164 22.2187 11.0701 22.3301C11.0238 22.4416 11 22.561 11 22.6817C11 22.8024 11.0238 22.9219 11.0701 23.0333C11.1164 23.1448 11.1842 23.246 11.2697 23.3311L16.1698 28.2303C16.6867 28.7462 17.3872 29.036 18.1176 29.036C18.8479 29.036 19.5484 28.7462 20.0653 28.2303L32.7307 15.5676C32.8161 15.4825 32.8838 15.3813 32.93 15.27C32.9762 15.1586 33 15.0392 33 14.9187C33 14.7981 32.9762 14.6787 32.93 14.5674C32.8838 14.456 32.8161 14.3549 32.7307 14.2697C32.6456 14.1842 32.5444 14.1164 32.4329 14.0701C32.3215 14.0238 32.202 14 32.0813 14C31.9606 14 31.8412 14.0238 31.7297 14.0701C31.6183 14.1164 31.5171 14.1842 31.4319 14.2697Z"
            fill="#03837B"
          />
        </svg>

        <p class="modal-success__title">
          Документ успешно сгенерирован
        </p>

        <b-link
          :to="{name: 'index'}"
          class="btn"
          @click="close"
        >
          Вернуться в базу знаний
        </b-link>
        <button
          class="btn btn--outline"
          @click="close"
        >
          <span class="btn--lg">Продолжить работу с документом</span>
          <span class="btn--sm">Вернуться к документу</span>
        </button>
        <p class="modal-success__download">
          Если загрузка документа не началась автоматически, <a
            ref="downloadLink"
            :href="downloadUrl"
            download
          >нажмите сюда</a>
        </p>
      </div>
    </div>
  </modal-block>
</template>

<script>
import { BLink } from 'bootstrap-vue'
import { eventHub } from '@/auth/utils'

export default {
  name: 'SuccessModal',
  components: {
    BLink,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
    downloadUrl: {
      type: String,
      required: false,
      default: '',
    },
  },

  data() {
    return {
    }
  },

  created() {
    eventHub.$on('successModal:download', () => {
      console.log(this.downloadUrl)
      if (this.downloadUrl) {
        this.$refs.downloadLink.click()
      }
    })
  },

  methods: {
    close() {
      this.enableBodyScroll()
      this.$emit('close')
    },

    closeOnOverlay() {
      this.close()
    },

    disableBodyScroll() {
      document.body.classList.add('modal-opened')
    },

    enableBodyScroll() {
      document.body.classList.remove('modal-opened')
    },
  },
}
</script>
