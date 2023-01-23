import { createApp } from "vue";
import RootComponent from "./components/root.component.vue";
import router from "./router/router";

var application = createApp(RootComponent);

application.use(router);

application.mount("#app"); 