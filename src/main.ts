import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

import DashboardLayout from './components/DashboardLayout.vue';
import EmptyLayout from './components/EmptyLayout.vue';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faHouseUser, faChartPie, faMugSaucer, faChartSimple,
    faHippo, faClipboardUser, faClock, faAddressBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

import { faHandshake} from '@fortawesome/free-regular-svg-icons'


const app = createApp(App);

/* add icons to the library */
library.add(faUserSecret,faHouseUser,faHippo,faHandshake,
    faClipboardUser, faClock, faAddressBook,faChartPie,
     faMugSaucer, faGraduationCap, faChartSimple)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.component('default-layout', DashboardLayout);
app.component('empty-layout', EmptyLayout);

app.use(router);
app.mount('#app');
