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

            <ion-list>
                <ion-item v-for="block of blocks" :key="block.name">
                    {{ block.name }} {{ block.startTime }} {{ block.endTime }}
                </ion-item>
            </ion-list>

            <!-- TODO: make modal component! -->
            <ion-modal ref="modal" trigger="open_block_modal_btn">
                <ion-header>
                    <ion-toolbar>
                        <ion-buttons slot="start">
                            <ion-button @click="closeModal()">Cancel</ion-button>
                        </ion-buttons>
                        <ion-title>Create new template</ion-title>
                        <ion-buttons slot="end">
                            <ion-button @click="createNewBlock()">Confirm</ion-button>
                        </ion-buttons>
                    </ion-toolbar>
                </ion-header>
                <ion-content>
                    <ion-list>
                        <ion-item>
                            <ion-label>Name</ion-label>
                            <ion-input type="text" v-model="newBlockName"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>Start Time</ion-label>
                            <ion-input type="time" v-model="newBlockStartTime"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>End Time</ion-label>
                            <ion-input type="time" v-model="newBlockEndTime"></ion-input>
                        </ion-item>
                    </ion-list>
                </ion-content>
            </ion-modal>

            <ion-fab vertical="bottom" horizontal="end" slot="fixed">
                <ion-fab-button id="open_block_modal_btn" expand="block">
                    <ion-icon :icon="add"></ion-icon>
                </ion-fab-button>
            </ion-fab>

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
        IonButton,
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
            IonButton,
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
        data: () => {
            return {
                newBlockName: '',
                newBlockStartTime: '',
                newBlockEndTime: ''
            }
        },
        computed: {
            template() {
                return this.$store.getters.template(this.$props.id) || { name: 'Not Found' }
            },
            blocks() {
                // TODO: sort by start time!
                return this.$store.getters.blocks(this.$props.id)
            }
        },
        methods: {
            closeModal() { 
                (this.$refs as any).modal.$el.dismiss(null, 'cancel') 
            },
            createNewBlock() {
                if (this.newBlockName) {
                    this.$store.commit('addBlock', {
                        name: this.newBlockName,
                        startTime: this.newBlockStartTime,
                        endTime: this.newBlockEndTime,
                        templateId: this.$props.id
                    })
                    this.newBlockName = '';
                    this.newBlockStartTime = '';
                    this.newBlockEndTime = '';
                    (this.$refs as any).modal.$el.dismiss(null, 'confirm');
                }
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