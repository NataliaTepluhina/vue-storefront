<template>
  <div id="app">
    <overlay v-if="overlayActive"/>
    <loader/>
    <div id="viewport" class="w-100 relative">
      <microcart/>
      <search-panel/>
      <wishlist/>
      <sidebar-menu/>
      <main-header/>
      <router-view/>
      <main-footer/>
      <notification/>
      <sign-up/>
      <newsletter-popup/>
      <cookie-notification/>
      <offline-badge/>
      <modal-switcher/>
      <order-confirmation :orders-data="ordersData"/>
    </div>
    <vue-progress-bar />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventBus from '@vue-storefront/core/plugins/event-bus'

import MainHeader from './components/core/blocks/Header/Header.vue'
import MainFooter from './components/core/blocks/Footer/Footer.vue'

import Wishlist from './components/core/blocks/Wishlist/Wishlist.vue'
import Microcart from './components/core/blocks/Microcart/Microcart.vue'
import SidebarMenu from './components/core/blocks/SidebarMenu/SidebarMenu.vue'
import SearchPanel from './components/core/blocks/SearchPanel/SearchPanel.vue'

import Overlay from './components/core/Overlay.vue'
import Loader from './components/core/Loader.vue'
import Modal from './components/core/Modal.vue'
import Notification from './components/core/Notification.vue'
import SignUp from './components/core/blocks/Auth/SignUp.vue'
import NewsletterPopup from './components/core/NewsletterPopup.vue'
import CookieNotification from './components/core/CookieNotification.vue'
import OfflineBadge from './components/core/OfflineBadge.vue'
import ModalSwitcher from './components/core/blocks/Switcher/Language.vue'
import OrderConfirmation from './components/core/blocks/Checkout/OrderConfirmation.vue'

import Head from 'theme/resource/head'

export default {
  data () {
    return {
      ordersData: []
    }
  },
  computed: {
    ...mapState({
      overlayActive: state => state.ui.overlay
    })
  },
  created () {
    // Progress bar on top of the page
    this.$router.beforeEach((to, from, next) => {
      this.$Progress.start()
      this.$Progress.increase(40)
      next()
    })
    this.$router.afterEach((to, from) => {
      this.$Progress.finish()
    })
    EventBus.$on('offline-order-confirmation', (payload) => {
      this.ordersData = payload
      EventBus.$emit('modal-show', 'modal-order-confirmation')
    })
  },
  metaInfo: Head,
  components: {
    MainHeader,
    MainFooter,
    Microcart,
    Wishlist,
    SearchPanel,
    SidebarMenu,
    Overlay,
    Loader,
    Notification,
    Modal,
    SignUp,
    NewsletterPopup,
    CookieNotification,
    OfflineBadge,
    ModalSwitcher,
    OrderConfirmation
  }
}
</script>

<style lang="scss" src="./css/main.scss">

</style>
