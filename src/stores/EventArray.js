class EventArray extends Array {
    push () {
    const i1 = this.length;
    const i2 = super.push(...arguments);
    setTimeout(() => {
      //for (let i=i1; i<i2; i++) delete this[i];
      super.shift();
    },12000);
    return i2;
    }
}

export default EventArray