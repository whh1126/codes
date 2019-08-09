class Bus {
    constructor() {
        this.event={}
    }
    on(eventname, ck) {
        if (this.event[eventname] instanceof Array) {
            this.event[eventname].push(ck)
        } else {
            this.event[eventname] = [ck]
        }
    }
    emit(eventname, ...arg) {
        console.log(this.event[eventname])
        this.event[eventname] && this.event[eventname].map(item => {
            item(...arg)
        })
    }
}
export default new Bus()
