//Constructor funtion
function Emitter() {
    this.events = {};
}

// Assigning event listeners on type recieved
// For example fire an event on FileDownload or StreamOpen
Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

// Invoking event on type recieved (emit)
// For example emit a FileDownload or StreamOpen Event
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        });
    }
}

module.exports = Emitter;