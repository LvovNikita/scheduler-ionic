<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Templates</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Tab 2</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button @click="newTemplate()">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import { 
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonFab,
        IonFabButton 
    } from '@ionic/vue';

    import { add } from 'ionicons/icons'

    export default defineComponent({
        name: 'Tab2Page',
        components: { 
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonFab,
            IonFabButton
        },
        methods: {
            newTemplate() {
                this.$router.push('/new-template')
            }
        },
        setup() {
            return {
                add
            }
        }
    });
</script>
