# Google calendar

## Preperation
* Create header with add appointment form.
* Draw grid of a week. Each day divided to hours.

## Description
You can add an appointment using the form. Appointments collision if forbidden. Appontments cannot end after the daily grid ends (18:00).
The appointment appears on the grid in correct date and time.
The appointments are saved in localStorage.
Clicking appointment, deletes it.
The callendar shows one week at a time. Day hours are in the range 8:00 till 18:00.

## The form
**Inputs:**
* Text input for description.
* Date input.
* Hour dropdown (in 30 minutes jumps).
* Duration dropdown (30-540 minutes).
* Button "Add"

## Goals
1. Analyse the project.
1. Design project steps.
1. Design data structures.


###
1. create gui:
  1.1 form
  1.2 minimal calendar
  1.3 buttons with simple functions console log on click
  1.4 minimal css
2. create api between form and appointment grid:
  2.1 create object that gets data from form and analyzes it before insert to database.
  2.2 create database to appointment grid.
3. advance development
  3.1 create full css.
  3.2 create functions that checks data.

dataObj made of 7 objects in an array;
each day have property of appointments and will have an object with timeFrom timeTO appointmentData

```javascript
dataObj=[{
          name1:{timeFrom:"",TimeTo:"",appointmentData},
          name2:{timeFrom:"",TimeTo:"",appointmentData}}
          ,{},{},{}]

calendar = {date:{
  start:{
    message:"",end:""
  }
}}

```

classes: form , calendar.