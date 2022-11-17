<template>
    <ion-page>
        
        <ion-header>
            <ion-toolbar>
                <ion-title>Calendar</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">

            <ion-datetime
                ref="datetime"
                presentation="date" 
                :first-day-of-week="1" 
                :multiple="true"
                v-model="pickedDates"
                >
            </ion-datetime>

            <ion-list>
                <ion-item>
                    <ion-select placeholder="Select template" v-model="selectedTemplateId">
                        <ion-select-option 
                            v-for="template of templates" 
                            :key="template.id" 
                            :value="template.id">
                            {{ template.name }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-list>
            
            <ion-button @click="addToCalendar(); reset()" :disabled="isButtonDisabled">Apply</ion-button>
            
            <!-- FIXME: for testing purposes only -->
            {{ selectedTemplateId }}: {{ pickedDates }}
            {{ areDatesPicked }} {{ isTemplateSelected }}

        </ion-content>

    </ion-page>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    import { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent,
        IonDatetime,
        IonButton,
        IonList,
        IonItem,
        IonSelect,
        IonSelectOption
    } from '@ionic/vue';
    

    export default defineComponent({
        name: 'Tab3Page',
        components: { 
            IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonPage,
            IonDatetime,
            IonButton,
            IonList,
            IonItem,
            IonSelect,
            IonSelectOption
        },
        data: () => {
            return {
                pickedDates: '',
                selectedTemplateId: ''
            }
        },
        computed: {
            templates() {
                return this.$store.getters.templates()
            },
            areDatesPicked() {
                if (!Array.isArray(this.pickedDates)) return false
                return this.pickedDates.length > 0 ? true : false
            },
            isTemplateSelected() {
                return !!this.selectedTemplateId
            },
            isButtonDisabled() {
                return !(this.areDatesPicked && this.isTemplateSelected)
            }
        },
        methods: {
            addToCalendar() {
                if (this.areDatesPicked && this.isTemplateSelected) {
                    for (const date of this.pickedDates) {
                        this.$store.commit('addRoutine', {
                            date,
                            templateId: this.selectedTemplateId
                        })
                    }
                    // const activeDaysElems = document.querySelectorAll('.calendar-day-active')
                    // for (const elem of activeDaysElems) {
                    //     elem.classList.remove("calendar-day-active")
                    // }
                    this.pickedDates = ''
                    this.selectedTemplateId = ''
                }
            }
        },
        setup() {
            const datetime = ref()
            // FIXME: example from docs that doesn't work
            const reset = () => {   
                // console.log('RESET!')            
                // return datetime.value.$el.reset() 
            }
            return { datetime, reset }
        }
    });
</script>

<style>
    ion-datetime {
        margin: 1em auto 1em auto;
        max-width: 550px
    }
</style>