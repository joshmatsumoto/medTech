const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
    dateTime: {
        type: String,
        required: true
    }, 

    reason: {
        type: String,
    }
})

const Appointment = model('Appointment', appointmentSchema);

module.exports = Appointment;