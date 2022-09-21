<template>
  <div>
    <header-block />
    <hero-block />
    <video-block />
    <help-block />
    <feature-block />
    <count-block />
    <footer-block />
  </div>
</template>

<script>
import HeaderBlock from "../layouts/components/header-block/HeaderBlock.vue";
import HeroBlock from "../layouts/components/hero-block/HeroBlock.vue";
import VideoBlock from "../layouts/components/video-block/VideoBlock.vue";
import HelpBlock from "../layouts/components/help-block/HelpBlock.vue";
import FeatureBlock from "../layouts/components/feature-block/FeatureBlock.vue";
import CountBlock from "../layouts/components/count-block/CountBlock.vue";
import FooterBlock from "../layouts/components/footer-block/FooterBlock.vue";
import {mapGetters} from "vuex";
import {getToken} from "@/auth/utils";

export default {
  components: {
    FooterBlock,
    CountBlock,
    FeatureBlock,
    HelpBlock,
    HeaderBlock,
    HeroBlock,
    VideoBlock,
  },
  computed: {
    ...mapGetters('account', ['isLoggedIn', 'token']),
  },
  mounted() {
    console.log('token', getToken())
    console.log('isLoggedIn', this.isLoggedIn)
  },
}
</script>

<style>

</style>
