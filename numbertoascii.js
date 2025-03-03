/**
 * numbertoascii.js - Copyright 2025 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune
 * Licensed under the GNU General Public License, Version 3.0 (the "License");
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://www.gnu.org/licenses/gpl-3.0.html
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and limitations under the License.
 **/


module.exports = function (RED) {
    function NumberToAsciiNode(config) {
        RED.nodes.createNode(this, config);
        let node = this;

        node.on("input", function (msg) {
            try {
                let numberStr = msg.payload.toString().trim(); // Ensure it's a string
                if (!/^\d+$/.test(numberStr)) {
                    throw new Error("Payload must be a numeric string without spaces or special characters.");
                }

                let result = [];
                let i = 0;

                while (i < numberStr.length) {
                    // Try to read a 3-digit ASCII code (if valid)
                    if (i + 3 <= numberStr.length) {
                        let threeDigit = parseInt(numberStr.slice(i, i + 3), 10);
                        if (threeDigit >= 32 && threeDigit <= 126) { // Valid printable ASCII range
                            result.push(threeDigit);
                            i += 3;
                            continue;
                        }
                    }

                    // Otherwise, take 2-digit ASCII code (if valid)
                    if (i + 2 <= numberStr.length) {
                        let twoDigit = parseInt(numberStr.slice(i, i + 2), 10);
                        if (twoDigit >= 32 && twoDigit <= 126) {
                            result.push(twoDigit);
                            i += 2;
                            continue;
                        }
                    }

                    // If no valid chunk found, throw an error
                    throw new Error(`Invalid ASCII sequence detected at position ${i}: ${numberStr.slice(i)}`);
                }

                // Convert ASCII codes into string
                let asciiString = String.fromCharCode(...result);

                // Send both the array and the string in the output message
                msg.payload = {
                    asciiArray: result,
                    asciiString: asciiString
                };

                node.send(msg);
            } catch (error) {
                node.error("Error processing number: " + error.message, msg);
            }
        });
    }

    RED.nodes.registerType("numbertoascii", NumberToAsciiNode);
};

