export const counterSelector = state => {
    return {
        count: state.counter.count,
        timer: state.counter.timer
    }
}