<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button default-href="/tabs/templates"></ion-back-button>
                </ion-buttons>
                <ion-title>New template</ion-title>
                <ion-buttons slot="end">
                    <ion-button @click="createNewTemplate()">
                        <ion-icon :icon="checkmark"></ion-icon>
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-item>
                <ion-label>Name</ion-label>
                <ion-input v-model="templateName" type="text" placeholder="template name"></ion-input>
            </ion-item>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonItem,
        IonLabel,
        IonInput,
        IonButtons,
        IonBackButton,
        IonIcon,
        IonButton
    } from '@ionic/vue'

    import { checkmark } from 'ionicons/icons'

    export default defineComponent({
        components: {
            IonPage,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonItem,
            IonLabel,
            IonInput,
            IonButtons,
            IonBackButton,
            IonIcon,
            IonButton
        },
        data() {
            return {
                templateName: ''
            }
        },
        methods: {
            createNewTemplate() {
                alert(this.templateName + ' created!')
            }
        },
        setup() {
            return {
                checkmark
            }
        }
    })
</script>

<style scoped>

</style>