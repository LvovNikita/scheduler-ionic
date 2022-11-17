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
                    <ion-title size="large">Templates</ion-title>
                </ion-toolbar>
            </ion-header>
        
            <!-- TEMPLATES LIST -->
            <ion-list>
                <ion-item v-for="template of templates" :key="template.id">
                    <!-- FIXME: -->
                    <ion-label>
                        <router-link :to="{ name: 'templateDetails', params: { id: template.id } }">
                            {{ template.name }}
                        </router-link>
                    </ion-label>
                </ion-item>
            </ion-list>

            <!-- TODO: make modal component! -->
            <ion-modal ref="modal" trigger="open_tmpl_modal_btn">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="closeModal()">Cancel</ion-button>
                        </ion-buttons>
                        <ion-title>Create new template</ion-title>
                        <ion-buttons slot="end">
                            <ion-button @click="createNewTemplate()">Confirm</ion-button>
                        </ion-buttons>
                    </ion-toolbar>
                </ion-header>
                <ion-content :fullscreen="true">
                    <ion-item>
                        <ion-label>Name</ion-label>
                        <ion-input 
                            v-model="newTemplateName" 
                            type="text" 
                        >
                        </ion-input>
                    </ion-item>
                </ion-content>
            </ion-modal>
        
            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <!-- <ion-fab-button @click="newTemplate()"> -->
                <ion-fab-button id="open_tmpl_modal_btn">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>
        </ion-content>
    </ion-page>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import { mapState } from 'vuex'

    import { 
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonFab,
        IonFabButton,
        IonIcon,
        IonList,
        IonItem,
        IonLabel,
        IonModal,
        IonInput,
        IonButtons,
        IonButton,
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
            IonFabButton,
            IonIcon,
            IonList,
            IonItem,
            IonLabel,
            IonModal,
            IonInput,
            IonButtons,
            IonButton
        },
        data() {
            return {
                newTemplateName: ''
            }
        },
        computed: mapState([
            'templates'
        ]),
        methods: {
            newTemplate() {
                // this.$router.push('/new-template')
            },
            closeModal() {
                (this.$refs as any).modal.$el.dismiss(null, 'cancel') 
            },
            createNewTemplate() {
                this.$store.commit('addTemplate', { 
                    id: Date.now() , 
                    name: this.newTemplateName 
                });
                this.newTemplateName = '';
                (this.$refs as any).modal.$el.dismiss(null, 'confirm');
            }
        },
        setup() {
            return {
                add
            }
        }
    });
</script>
