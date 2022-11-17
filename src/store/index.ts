import { createStore } from 'vuex';

export default createStore({
    // TODO: add models
    state: {
        // FIXME: just for testing purposes
        templates: [
            { id: 1, name: 'Workday routine', blockIds: [] },
            { id: 2, name: 'Weekend routine', blockIds: [] }
        ],
        blocks: [
            // FIXME: is tempalteId necessary?
            { name: 'Block1', startTime: '14:00', endTime: '15:00', templateId: 1 },
            { name: 'Block2', startTime: '13:00', endTime: '16:00', templateId: 2 }
        ],
        routines: [
            { date: '2022-11-20', templateId: 1 }
        ]
    },
    getters: {
        template: state => (id: string | number) => {
            return state.templates.find(template => template.id == id)
        },
        templates: state => () => {
            return state.templates
        },
        blocks: state => (templateId: string | number) => {
            return state.blocks.filter(block => block.templateId == templateId)
        }
    },
    mutations: {
        addTemplate(state, template) {
            state.templates = [...state.templates, template]
        },
        addBlock(state, block) {
            state.blocks.push(block)
        },
        addRoutine(state, routine) {
            state.routines.push(routine)
        }
    },
    actions: {},
    modules: {},
});
