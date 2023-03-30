export default {
    template: `
        <button
                :class="{
                 'border rounded px-5 py-5 disabled:cursor-not-allowed': true,
                 'bg-blue-200 hover:bg-blue-400': type === 'primary',
                 'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                 'bg-gray-200 hover:bg-gray-400': type === 'muted',
                 'is-loading': processing
                 }"
                :disabled="processing"
        >
            <slot />
        </button>
    `,

    props: {
        type: {
            default: 'primary',
            type: String,
        },
        processing: {
            default: false,
            type: Boolean,
        }
    },
}