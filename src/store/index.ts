import { createStore } from 'vuex';

export default createStore({
    state: {
        templates: [
            { id: 1, name: 'Test' },
            { id: 2, name: 'Another Test' }
        ]
    },
    getters: {
        template: state => (id: string | number) => {
            return state.templates.filter(template => template.id == id)[0]
        }
    },
    mutations: {
        addTemplate(state, template) {
            state.templates = [...state.templates, template]
        }
    },
    actions: {},
    modules: {},
});
