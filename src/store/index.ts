import { createStore } from 'vuex';

export default createStore({
    state: {
        // FIXME: just for testing purposes
        templates: [
            { id: 1, name: 'Workday routine' },
            { id: 2, name: 'Weekend routine' }
        ],
        blocks: [
            { name: 'Block1', startTime: '14:00', endTime: '15:00', templateId: 1 },
            { name: 'Block2', startTime: '13:00', endTime: '16:00', templateId: 2 }
        ]
    },
    getters: {
        template: state => (id: string | number) => {
            return state.templates.find(template => template.id == id)
        },
        blocks: state => (templateId: string | number) => {
            return state.blocks.filter(block => block.templateId == templateId)
        }
    },
    mutations: {
        addTemplate(state, template) {
            state.templates = [...state.templates, template]
        },
        addBlock(state, block: any) {
            state.blocks.push(block)
        }
    },
    actions: {},
    modules: {},
});
