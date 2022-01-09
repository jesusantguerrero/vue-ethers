import { provide } from 'vue';
import CopyHandle from '../components/CopyHandle.vue';

export default {
    title: 'CopyHandle',
    component: CopyHandle,
};

const Template = (args) => ({
    components: { CopyHandle },
    setup() {
      provide('address', '0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC');
      return { args };
    },
    template: '<CopyHandle v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {}

export const WithAvatar = Template.bind({});
WithAvatar.args = {
    avatar: true,
}

export const Copyable = Template.bind({});
Copyable.args = {
    copyable: true,
}

export const WithSize = Template.bind({});
WithSize.args = {
    size: 4,
}