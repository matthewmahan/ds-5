import { template } from "@babel/core";
import LimitedInput from "./LimitedInput";

export default {
    title: "LimitedInput",
};

export const Simple = () => ({
    redner() {
        return <LimitedInput />,
    },
})

export const simpleWithTemplate = () => ({
    components: { LimitedInput },
    template: "<LimitedInput />",
});