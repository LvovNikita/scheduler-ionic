<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="schedule" href="/tabs/schedule">
                    <ion-icon :icon="list" />
                    <ion-label>Schedule</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="templates" href="/tabs/templates">
                    <ion-icon :icon="clipboard" />
                    <ion-label>Templates</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="calendar" href="/tabs/calendar">
                    <ion-icon :icon="calendar" />
                    <ion-label>Calendar</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import { 
        IonTabBar,
        IonTabButton,
        IonTabs,
        IonLabel,
        IonIcon,
        IonPage,
        IonRouterOutlet 
    } from '@ionic/vue';

    import { 
        calendar, 
        clipboard, 
        list 
    } from 'ionicons/icons';

    export default defineComponent({
        name: 'TabsPage',
        components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
        setup() {
            return {
                calendar,
                clipboard,
                list
            }
        }
    });
</script>
