import { html, define } from "https://unpkg.com/hybrids@4.1.9/src";

export function increaseCount(host) {
    host.count += 1;
}

export const SimpleCounter = {
    count: 0,
    render: ({ count }) => html`
        <link rel="stylesheet" href="SimpleCounter.css"/>
        <button onclick="${increaseCount}">
            Count: ${count}
        </button>
    `,
}

define('simple-counter', SimpleCounter);