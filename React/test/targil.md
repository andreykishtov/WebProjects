# QR code generator

Create a react app that will turn a form into a QR code image.

## Component Tree
- App
    - PersonForm
    - QRCode

## PersonForm component
### Controls
1. Name field
1. Age field
1. Email field
1. "Serialize" button.

### Events 
onSerialize(data) - will be called after the serilize button is pressed and only if all 3 fields are not empty. the data parameter will contain the data as a json string.

### Validations
no validations are needed except that the fields are full

## QRCode component
This will display the data in QR code format. use whichever QR code react component you wish.

## Instructions
1. Use create-react-app to create the app
1. Download an app to your phone to read the qr code and validate the serialization