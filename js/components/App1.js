import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: {
        'assignments': Assignments,
        'panel': Panel,
    },

    template: `
        <div class="grid gap-6">
            <assignments></assignments>
<!--            <panel>-->
<!--            -->
<!--                This is my default content1-->
<!--            -->
<!--            </panel>-->
<!--            <panel>-->
<!--                <template v-slot:heading>-->
<!--                    This is my title.-->
<!--                </template>-->
<!--            -->
<!--                This is my default content-->
<!--                -->
<!--                <template v-slot:footer>-->
<!--                    Click here to learn more.-->
<!--                </template>-->
<!--            -->
<!--            </panel>-->
<!--            -->
<!--            <panel theme="light">-->
<!--                <template v-slot:heading>-->
<!--                    This is my title.-->
<!--                </template>-->
<!--            -->
<!--                This is my default content-->
<!--                -->
<!--                <template v-slot:footer>-->
<!--                    Click here to learn more.-->
<!--                </template>-->
<!--            -->
<!--            </panel>-->
        </div>
    `,

    props: {
        add: Object
    }
}