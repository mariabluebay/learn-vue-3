export default {
    template: `
            <div v-show="tags" class="flex gap-2">
                <button 
                v-show="tag"
                v-for="tag in tags" 
                class="border rounded px-1 py-px text-xs"
                :class="{'border-blue-500 text-blue-500': tag === currentTag}"
                @click="$emit('update:currentTag', tag)"
                > 
                    {{ tag }}
                </button>
            </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return [ 'all', ...new Set(this.initialTags) ];
        }
    }
}