<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/templates"></ion-back-button>
                </ion-buttons>
                <ion-title>{{ template.name }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <!-- FIXME: modal! -->
            <ion-modal trigger="open_modal_btn">
                <ion-list>
                    <ion-item>
                        <ion-label>Name</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>Start Time</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                    <ion-item>
                        <ion-label>End Time</ion-label>
                        <ion-input></ion-input>
                    </ion-item>
                </ion-list>
            </ion-modal>

            <ion-fab>
                <ion-fab-button id="open_modal_btn">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

        </ion-content>
    </ion-page>
</template>

<script>
    import { defineComponent } from 'vue'

    import { 
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonButtons,
        IonBackButton,
        IonContent,
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonModal,
        IonFab,
        IonFabButton,
        IonIcon
    } from '@ionic/vue'
    
    import { add } from 'ionicons/icons'

    export default defineComponent({
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonButtons,
            IonBackButton,
            IonContent,
            IonList,
            IonItem,
            IonLabel,
            IonInput,
            IonModal,
            IonFab,
            IonFabButton,
            IonIcon
        },
        props: ['id'],
        computed: {
            // FIXME: not found situation!
            template() {
                return this.$store.getters.template(this.$props.id) || { name: 'Not Found' }
            }
        },
        setup() {
            return {
                add
            }
        }
    })
</script>

<style scoped>

</style>