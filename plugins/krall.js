import Vue from 'vue'

/* IMPORT ALL COMPONENTS */
import A from './components/media-image.vue'
import B from './components/media-video.vue'

/* MAKE THEM GLOBALLY ACCESSIBLE */
Vue.component('media-image', A)
Vue.component('media-video', B)
