# Morse Code transmitter

## Description
Create a morse code transmitter which listens to morse-transmit event.
It can get transmission from different sources at the same time. Transmissions should never collide.

## Preparation
Events mechanism, pub-sub.

## Details
### Transmission restrictions
1. Dot duration is the baseline timing measurement.
1. Dash duration is timed as 3 dots.
1. Gap duration between each symbol (dot / dash) in the same letter is 1 dot.
1. Duration between letters is 3 dots
1. Duration between words (space) is 7 dots.
1. At least 3 spaces should be kept between transmissions.

### Initialization
The transmitter should be initialized by:
1. Dot MorseCodeInvoker object whick will be used by the morse code transmitter for invoking the transmission.
1. Dot duration (default 200 ms).

## Visual
Create textareas with transmit button or just transmit buttons.
Create a LightbulbToggler class which implements MorseCodeInvoker interface and visualize it by a light bulb.
``` js
class MorseCodeInvoker {
	on() {}
	off() {}
}
```

### First stage
Create a div which changes it's background color between on() and off().
### Second stage
Implement lightbulb using a sprite. Example for such sprite:

![lightbulb sprite](https://mackinstitute.wharton.upenn.edu/wp-content/uploads/2013/04/light-bulb.jpg)



https://en.wikipedia.org/wiki/Morse_code

**Helper json:**
```json
{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}
```